import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutBackgroundDecorations() {
  const containerRef = useRef(null);
  const cube1Ref = useRef(null);
  const cube2Ref = useRef(null);
  const spiralRef = useRef(null);
  const coord1Ref = useRef(null);
  const coord2Ref = useRef(null);
  const coord3Ref = useRef(null);
  const coord4Ref = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Subtle floating animation for coordinate marks (different directions & speeds)
      if (coord1Ref.current) {
        gsap.to(coord1Ref.current, {
          x: 12,
          y: -8,
          rotation: 2,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (coord2Ref.current) {
        gsap.to(coord2Ref.current, {
          x: -10,
          y: 14,
          rotation: -3,
          duration: 11,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.2,
        });
      }

      if (coord3Ref.current) {
        gsap.to(coord3Ref.current, {
          x: 8,
          y: 10,
          rotation: 1.5,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.6,
        });
      }

      if (coord4Ref.current) {
        gsap.to(coord4Ref.current, {
          x: -14,
          y: -12,
          rotation: -2,
          duration: 13,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
        });
      }

      // 2. Ambient floating/bobbing animation on the cubes (different speeds & directions)
      if (cube1Ref.current) {
        gsap.to(cube1Ref.current, {
          y: -25,
          rotation: 8,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (cube2Ref.current) {
        gsap.to(cube2Ref.current, {
          y: 30,
          rotation: -10,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.5,
        });
      }

      // 3. Slow ambient rotation of the fractal spiral arc
      if (spiralRef.current) {
        gsap.to(spiralRef.current, {
          rotation: 360,
          duration: 90,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center",
        });
      }

      // 4. Slow grid drift
      if (gridRef.current) {
        gsap.to(gridRef.current, {
          xPercent: -2,
          yPercent: -2,
          duration: 30,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 select-none overflow-hidden"
    >
      {/* 0. Subtle grid background */}
      <div
        ref={gridRef}
        className="absolute inset-0 -z-10 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* 1. Subtle Technical Coordinate Marks (Solid Colors, High Transparency) */}
      <div ref={coord1Ref} className="absolute top-[18%] left-[5%] font-mono text-[9px] text-primary/40 tracking-widest hidden md:block will-change-transform">
        SYS_LAT: 0x4F8A // COORD: [120.4, 45.2, 0.0]
      </div>

      <div ref={coord2Ref} className="absolute top-[42%] right-[4%] font-mono text-[9px] text-secondary/40 tracking-widest hidden md:block will-change-transform">
        MEM_ALLOC: RECURSIVE_BASE // BUFFER_SIZE: 1024_MB
      </div>

      <div ref={coord3Ref} className="absolute top-[68%] left-[6%] font-mono text-[9px] text-primary/30 tracking-widest hidden md:block will-change-transform">
        ARCH_PIPELINE: DISCOVERY -&gt; SPEC -&gt; PRODUCTION
      </div>

      <div ref={coord4Ref} className="absolute top-[88%] right-[6%] font-mono text-[9px] text-tertiary/40 tracking-widest hidden md:block will-change-transform">
        SECURITY_INTEGRITY: AES_256 // NDA_ACTIVE
      </div>

      {/* 2. Delicate Guide Grid Lines (Solid, No Gradients) */}
      <svg
        className="absolute inset-0 w-full h-full stroke-primary/10 dark:stroke-primary/15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="22%" x2="100%" y2="78%" strokeWidth="0.5" strokeDasharray="6 8" />
        <line x1="100%" y1="15%" x2="0" y2="85%" strokeWidth="0.5" strokeDasharray="6 8" />
        <line x1="25%" y1="0%" x2="25%" y2="100%" strokeWidth="0.5" strokeDasharray="3 9" />
        <line x1="75%" y1="0%" x2="75%" y2="100%" strokeWidth="0.5" strokeDasharray="3 9" />
      </svg>

      {/* 3. Floating Geometric Wireframe Cube 1 (Top Right) */}
      <div ref={cube1Ref} className="absolute top-[14%] right-[10%] w-24 h-24 will-change-transform">
        <svg className="w-full h-full stroke-primary/30 fill-none" viewBox="0 0 100 100">
          <polygon points="50,15 85,35 50,55 15,35" strokeWidth="1" />
          <polygon points="15,35 50,55 50,90 15,70" strokeWidth="1" />
          <polygon points="85,35 50,55 50,90 85,70" strokeWidth="1" />
        </svg>
      </div>

      {/* 4. Floating Geometric Wireframe Cube 2 (Bottom Left) */}
      <div ref={cube2Ref} className="absolute top-[72%] left-[6%] w-28 h-28 will-change-transform">
        <svg className="w-full h-full stroke-secondary/30 fill-none" viewBox="0 0 100 100">
          <polygon points="50,15 85,35 50,55 15,35" strokeWidth="1" />
          <polygon points="15,35 50,55 50,90 15,70" strokeWidth="1" />
          <polygon points="85,35 50,55 50,90 85,70" strokeWidth="1" />
        </svg>
      </div>

      {/* 5. Ambient Rotating Fractal Spiral Arc (Center Right) */}
      <div ref={spiralRef} className="absolute top-[45%] right-[7%] w-44 h-44 will-change-transform hidden lg:block">
        <svg className="w-full h-full stroke-tertiary/20 fill-none" viewBox="0 0 200 200">
          <path
            d="M 100,100 A 20,20 0 0,1 120,100 A 40,40 0 0,1 80,100 A 60,60 0 0,1 140,100 A 80,80 0 0,1 60,100"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      </div>
    </div>
  );
}
