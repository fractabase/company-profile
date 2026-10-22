import { useEffect, useRef, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function ContactBackground() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const gridDeepRef = useRef(null);
  const linesRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const nodeCount = Math.min(Math.floor((width * height) / 22000), 55);
    const nodes = [];
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        baseRadius: Math.random() * 1.8 + 1,
        radius: Math.random() * 1.8 + 1,
        alpha: Math.random() * 0.4 + 0.15,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.015;
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const primaryRgb = isDark ? "77, 200, 240" : "53, 190, 235"; // cyan brand

      const maxDistance = 140;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        if (mouse.active) {
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const forceDistance = 160;
          if (dist < forceDistance) {
            const force = (forceDistance - dist) / forceDistance;
            const angle = Math.atan2(dy, dx);
            a.x += Math.cos(angle) * force * 2.5;
            a.y += Math.sin(angle) * force * 2.5;
            a.radius = a.baseRadius + force * 2;
          } else {
            a.radius += (a.baseRadius - a.radius) * 0.05;
          }
        }

        const pulse = Math.sin(time + a.pulseOffset) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${primaryRgb}, ${a.alpha * pulse})`;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${primaryRgb}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Deep layer: slow drift
      if (gridDeepRef.current) {
        gsap.fromTo(
          gridDeepRef.current,
          { y: 0 },
          {
            y: -120,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
            },
          },
        );
      }

      // Decorative lines gentle float
      if (linesRef.current) {
        const lines = linesRef.current.querySelectorAll(".float-line");
        lines.forEach((line, idx) => {
          gsap.to(line, {
            y: idx % 2 === 0 ? -20 : 20,
            duration: 8 + idx * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={containerRef} aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 dark:opacity-80" />

        <div
          ref={gridDeepRef}
          className="absolute -inset-y-32 inset-x-0 bg-[radial-gradient(var(--line)_1px,transparent_1px)] bg-size[32px_32px] opacity-40 dark:opacity-25"
        />

        <div ref={linesRef} className="absolute inset-0 pointer-events-none">
          <div className="float-line absolute top-1/4 left-10 w-24 h-px bg-secondary/10" />
          <div className="float-line absolute top-1/3 right-20 w-32 h-px bg-primary/10" />
          <div className="float-line absolute bottom-1/3 left-1/4 w-20 h-px bg-secondary/10" />
        </div>
      </div>
    </>
  );
}

export default memo(ContactBackground);
