import { useEffect, useRef, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProjectsBackgroundDecorations({ prefersReducedMotion = false }) {
  const containerRef = useRef(null);

  // Parallax layer element refs
  const layerDeepRef = useRef(null);
  const layerNearRef = useRef(null);

  // Individual decorative geometry refs
  const coord1Ref = useRef(null);
  const coord2Ref = useRef(null);
  const coord3Ref = useRef(null);
  const coord4Ref = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Continuous scroll parallax: Deep Layer (moves slow, factor ~0.15)
      if (layerDeepRef.current) {
        gsap.fromTo(
          layerDeepRef.current,
          { y: 0 },
          {
            y: -120,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.3,
            },
          },
        );
      }

      // 2. Idle gentle float for technical coordinate labels (organic float)
      const coordConfigs = [
        { x: 12, y: -8, rotation: 2, duration: 8, delay: 0 },
        { x: -10, y: 14, rotation: -3, duration: 11, delay: 1.2 },
        { x: 8, y: 10, rotation: 1.5, duration: 9, delay: 0.6 },
        { x: -14, y: -12, rotation: -2, duration: 13, delay: 2 },
      ];

      const coords = [coord1Ref.current, coord2Ref.current, coord3Ref.current, coord4Ref.current];
      coords.forEach((el, idx) => {
        if (!el) return;
        const config = coordConfigs[idx] || coordConfigs[0];
        gsap.set(el, { willChange: "transform", force3D: true });
        gsap.to(el, {
          x: config.x,
          y: config.y,
          rotation: config.rotation,
          duration: config.duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: config.delay,
          force3D: true,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <>
      <div
        ref={containerRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 select-none overflow-hidden"
      >
        {/* ========================================================
          LAYER 1: DEEP BACKGROUND (moves slowest on scroll)
          Technical guide grid lines & coordinate telemetry
      ======================================================== */}
        <div ref={layerDeepRef} className="absolute inset-0 will-change-transform">
          {/* Delicate structural architectural guide lines */}
          <svg
            className="absolute inset-0 w-full h-full stroke-primary/10 dark:stroke-primary/15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12%" y1="0" x2="12%" y2="100%" strokeWidth="0.5" strokeDasharray="4 10" />
            <line x1="88%" y1="0" x2="88%" y2="100%" strokeWidth="0.5" strokeDasharray="4 10" />
            <line x1="0" y1="28%" x2="100%" y2="28%" strokeWidth="0.5" strokeDasharray="6 12" />
            <line x1="0" y1="62%" x2="100%" y2="62%" strokeWidth="0.5" strokeDasharray="6 12" />
          </svg>

          {/* Technical Deep Coordinate Telemetry */}
          <div
            ref={coord1Ref}
            className="absolute top-[12%] left-[4%] font-mono text-[9px] text-primary/35 tracking-widest hidden lg:block will-change-transform"
          >
            SYS_ARCH: FRACTAL_CORE // BASE_NODE: 0x82A1 // PORTFOLIO_INDEX
          </div>

          <div
            ref={coord2Ref}
            className="absolute top-[48%] right-[3%] font-mono text-[9px] text-secondary/35 tracking-widest hidden lg:block will-change-transform"
          >
            COMPLEXITY_GROWTH: RECURSIVE_DISCOVERY -&gt; PRODUCTION_VERIFIED
          </div>

          <div
            ref={coord3Ref}
            className="absolute top-[81%] left-[4%] font-mono text-[9px] text-primary/30 tracking-widest hidden lg:block will-change-transform"
          >
            DATA_STREAM: TELEMETRY_ONLINE // LATENCY: 24ms // NODES: 09
          </div>

          <div
            ref={coord4Ref}
            className="absolute top-[92%] right-[5%] font-mono text-[9px] text-tertiary/35 tracking-widest hidden lg:block will-change-transform"
          >
            SYSTEM_METRIC: 100% SPEC_COMPLIANT // ZERO_DEVIATION
          </div>
        </div>

        {/* ========================================================
          LAYER 2: NEAR FOREGROUND ACCENTS (moves fastest on scroll)
          Crosshairs, Coordinate nodes, Viewfinder Marks
      ======================================================== */}
        <div ref={layerNearRef} className="absolute inset-0 will-change-transform">
          {/* Floating crosshair marks at staggered heights */}
          <span className="absolute top-[22%] left-[16%] font-mono text-sm text-primary/40">+</span>
          <span className="absolute top-[32%] right-[22%] font-mono text-sm text-secondary/40">+</span>
          <span className="absolute top-[52%] left-[14%] font-mono text-sm text-primary/40">+</span>
          <span className="absolute top-[83%] right-[14%] font-mono text-sm text-tertiary/40">+</span>
          <span className="absolute top-[88%] left-[20%] font-mono text-sm text-secondary/40">+</span>

          {/* Micro coordinate pill marks */}
          <div className="absolute top-[26%] right-[10%] px-2 py-0.5 rounded border border-line bg-surface/60 font-mono text-[9px] text-secondary-color opacity-50 hidden md:block">
            [Z_AXIS: 1.48]
          </div>

          <div className="absolute top-[64%] left-[8%] px-2 py-0.5 rounded border border-line bg-surface/60 font-mono text-[9px] text-secondary-color opacity-50 hidden md:block">
            [Z_AXIS: 2.12]
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(ProjectsBackgroundDecorations);
