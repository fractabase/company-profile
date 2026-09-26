import { useEffect, useRef } from "react";

/**
 * useParticleNetwork
 *
 * Drives a lightweight, connected-particle network on an HTML5 canvas.
 * - Autonomous floating particles that bounce off viewport edges
 * - Proximity-based dynamic connections (no persistent state, breaks when distance exceeded)
 * - Sparse clustering (tuned count vs distance)
 * - Gentle short-range cursor gravity on pointer:fine (mouse) devices
 * - Skipped cursor gravity on touch/coarse devices
 * - Respects prefers-reduced-motion (single static frame, no animation loop)
 * - Pauses on document visibilitychange (hidden tab)
 * - devicePixelRatio capped at 2 for performance
 * - Uses accent color token from CSS (:root / [data-theme="dark"])
 *
 * @param {React.RefObject<HTMLCanvasElement | null>} canvasRef
 * @param {React.RefObject<HTMLElement | null>} containerRef
 * @param {Object} [options]
 * @param {string} [options.colorToken="--tertiary-color"] CSS custom property for particle/line color
 */
export function useParticleNetwork(
  canvasRef,
  containerRef,
  options = {},
) {
  const { colorToken = "--tertiary-color" } = options;
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const container = containerRef?.current || canvas.parentElement || canvas;

    // ----- Constants & Configuration -----
    const MAX_DPR = 2;
    const CONNECT_DIST = 110; // px — max distance to draw a line
    const CURSOR_RADIUS = 85; // px — local short-range gravity zone
    const CURSOR_PULL = 0.04; // px/frame² — gentle attraction force
    const BASE_SPEED = 0.45; // base speed component
    const MIN_SPEED = 0.25; // prevents particles from freezing/sticking
    const MAX_SPEED = 1.3; // prevents runaway acceleration
    const PARTICLE_RADIUS = 2; // px
    const AREA_PER_PARTICLE = 26000; // px² per particle for sparse clusters
    const MIN_PARTICLES = 16;
    const MAX_PARTICLES = 55;

    // Detect fine pointer (desktop mouse/trackpad) vs coarse (touchscreen)
    const finePointerMedia = window.matchMedia("(pointer: fine)");
    let hasFinePointer = finePointerMedia.matches;

    // Motion preference
    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReduced = motionMedia.matches;

    // Cursor state
    const cursor = { x: -9999, y: -9999, active: false };

    // Particle array & dimensions
    let particles = [];
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Helper: read accent color from CSS variables (resolves light/dark automatically)
    function resolveAccentColor() {
      const style = getComputedStyle(document.documentElement);
      const val = style.getPropertyValue(colorToken).trim();
      return val || "#f5a623";
    }

    // Convert hex or rgb(a) string to rgba string with specific alpha
    function toRgba(colorStr, alpha) {
      if (!colorStr) return `rgba(245, 166, 35, ${alpha})`;
      const trimmed = colorStr.trim();
      if (trimmed.startsWith("#")) {
        let hex = trimmed.slice(1);
        if (hex.length === 3) {
          hex = hex
            .split("")
            .map((c) => c + c)
            .join("");
        }
        const r = parseInt(hex.slice(0, 2), 16) || 0;
        const g = parseInt(hex.slice(2, 4), 16) || 0;
        const b = parseInt(hex.slice(4, 6), 16) || 0;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      }
      if (trimmed.startsWith("rgb")) {
        const matches = trimmed.match(/\d+(\.\d+)?/g);
        if (matches && matches.length >= 3) {
          return `rgba(${matches[0]}, ${matches[1]}, ${matches[2]}, ${alpha})`;
        }
      }
      return `rgba(245, 166, 35, ${alpha})`;
    }

    // Create a new particle with random initial position and velocity
    function createParticle(w, h) {
      const angle = Math.random() * Math.PI * 2;
      const speed = BASE_SPEED * (0.6 + Math.random() * 0.8);
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: PARTICLE_RADIUS,
      };
    }

    // Setup or resize canvas
    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Calculate particle count tuned to area for sparse clustering
      const targetCount = Math.min(
        MAX_PARTICLES,
        Math.max(MIN_PARTICLES, Math.round((width * height) / AREA_PER_PARTICLE)),
      );

      // Re-use existing particles where possible, adjust positions within bounds
      if (particles.length === 0) {
        particles = Array.from({ length: targetCount }, () =>
          createParticle(width, height),
        );
      } else if (particles.length < targetCount) {
        while (particles.length < targetCount) {
          particles.push(createParticle(width, height));
        }
      } else if (particles.length > targetCount) {
        particles.length = targetCount;
      }

      for (const p of particles) {
        p.x = Math.max(p.r, Math.min(width - p.r, p.x));
        p.y = Math.max(p.r, Math.min(height - p.r, p.y));
      }
    }

    // Render a single frame
    function renderFrame() {
      ctx.clearRect(0, 0, width, height);

      const accentHex = resolveAccentColor();

      // 1. Update positions (skip in reduced-motion mode)
      if (!prefersReduced) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Mouse gravity — only on pointer:fine devices when active
          if (hasFinePointer && cursor.active) {
            const dx = cursor.x - p.x;
            const dy = cursor.y - p.y;
            const dist = Math.hypot(dx, dy);

            if (dist < CURSOR_RADIUS && dist > 1) {
              // Gentle local pull: stronger near center, tapering to 0 at radius
              const pullFactor = (1 - dist / CURSOR_RADIUS) * CURSOR_PULL;
              p.vx += (dx / dist) * pullFactor;
              p.vy += (dy / dist) * pullFactor;
            }
          }

          // Advance position
          p.x += p.vx;
          p.y += p.vy;

          // Velocity clamping: enforce min/max speed so particles never clump or runaway
          const speed = Math.hypot(p.vx, p.vy);
          if (speed > MAX_SPEED) {
            const ratio = MAX_SPEED / speed;
            p.vx *= ratio;
            p.vy *= ratio;
          } else if (speed < MIN_SPEED && speed > 0.001) {
            const ratio = MIN_SPEED / speed;
            p.vx *= ratio;
            p.vy *= ratio;
          }

          // Bounce off canvas edges
          if (p.x <= p.r) {
            p.x = p.r;
            p.vx = Math.abs(p.vx);
          } else if (p.x >= width - p.r) {
            p.x = width - p.r;
            p.vx = -Math.abs(p.vx);
          }
          if (p.y <= p.r) {
            p.y = p.r;
            p.vy = Math.abs(p.vy);
          } else if (p.y >= height - p.r) {
            p.y = height - p.r;
            p.vy = -Math.abs(p.vy);
          }
        }
      }

      // 2. Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < CONNECT_DIST) {
            // Opacity scales with proximity: closer = more visible, farther = fainter
            const proximity = 1 - dist / CONNECT_DIST;
            const alpha = proximity * 0.35; // low-to-medium opacity
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = toRgba(accentHex, alpha);
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // 3. Draw cursor lines to nearby particles on pointer:fine
      if (hasFinePointer && cursor.active) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = cursor.x - p.x;
          const dy = cursor.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < CURSOR_RADIUS) {
            const proximity = 1 - dist / CURSOR_RADIUS;
            const alpha = proximity * 0.45;
            ctx.beginPath();
            ctx.moveTo(cursor.x, cursor.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = toRgba(accentHex, alpha);
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // 4. Draw particle nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = toRgba(accentHex, 0.55);
        ctx.fill();
      }
    }

    // Animation loop
    function loop() {
      renderFrame();
      rafRef.current = requestAnimationFrame(loop);
    }

    function startAnimation() {
      if (prefersReduced) {
        renderFrame(); // Single static frame
      } else {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(loop);
      }
    }

    function stopAnimation() {
      cancelAnimationFrame(rafRef.current);
    }

    // Event handlers
    function handlePointerMove(e) {
      if (!hasFinePointer) return;
      const rect = canvas.getBoundingClientRect();
      cursor.x = e.clientX - rect.left;
      cursor.y = e.clientY - rect.top;
      cursor.active = true;
    }

    function handlePointerLeave() {
      cursor.active = false;
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    }

    function handlePointerMediaChange(e) {
      hasFinePointer = e.matches;
      if (!hasFinePointer) {
        cursor.active = false;
      }
    }

    function handleMotionPreferenceChange(e) {
      prefersReduced = e.matches;
      stopAnimation();
      startAnimation();
    }

    // Initialize
    resize();
    startAnimation();

    // Attach listeners
    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (prefersReduced) {
        renderFrame();
      }
    });
    resizeObserver.observe(canvas);

    if (container) {
      container.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      container.addEventListener("pointerleave", handlePointerLeave, {
        passive: true,
      });
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    finePointerMedia.addEventListener("change", handlePointerMediaChange);
    motionMedia.addEventListener("change", handleMotionPreferenceChange);

    // Cleanup
    return () => {
      stopAnimation();
      resizeObserver.disconnect();
      if (container) {
        container.removeEventListener("pointermove", handlePointerMove);
        container.removeEventListener("pointerleave", handlePointerLeave);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      finePointerMedia.removeEventListener("change", handlePointerMediaChange);
      motionMedia.removeEventListener("change", handleMotionPreferenceChange);
    };
  }, [canvasRef, containerRef, colorToken]);
}
