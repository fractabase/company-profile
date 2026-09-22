import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ServicesBackground() {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const node1Ref = useRef(null);
  const node2Ref = useRef(null);
  const node3Ref = useRef(null);
  const node4Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Grid slow parallax
      if (gridRef.current) {
        gsap.to(gridRef.current, {
          y: 60,
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Floating orbs at different speeds
      if (orb1Ref.current) {
        gsap.to(orb1Ref.current, {
          x: 30,
          y: -20,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
      if (orb2Ref.current) {
        gsap.to(orb2Ref.current, {
          x: -25,
          y: 35,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1,
        });
      }
      if (orb3Ref.current) {
        gsap.to(orb3Ref.current, {
          x: 20,
          y: 25,
          duration: 12,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
        });
      }

      // Node dots subtle pulse
      [node1Ref, node2Ref, node3Ref, node4Ref].forEach((ref, idx) => {
        if (ref.current) {
          gsap.to(ref.current, {
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.15, 1],
            duration: 3 + idx * 0.5,
            repeat: -1,
            ease: "sine.inOut",
            delay: idx * 0.6,
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 select-none overflow-hidden"
      >
        {/* Layered grid background */}
        <div
          ref={gridRef}
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating orbs */}
        <div
          ref={orb1Ref}
          className="absolute top-[10%] left-[8%] w-72 h-72 rounded-full bg-primary/5 blur-3xl will-change-transform"
        />
        <div
          ref={orb2Ref}
          className="absolute top-[50%] right-[5%] w-80 h-80 rounded-full bg-secondary/5 blur-3xl will-change-transform hidden lg:block"
        />
        <div
          ref={orb3Ref}
          className="absolute bottom-[15%] left-[15%] w-64 h-64 rounded-full bg-tertiary/5 blur-3xl will-change-transform hidden md:block"
        />

        {/* Connection nodes */}
        <div className="absolute inset-0 hidden lg:block">
          <div ref={node1Ref} className="absolute top-[20%] left-[20%] w-2 h-2 rounded-full bg-primary/40" />
          <div ref={node2Ref} className="absolute top-[45%] right-[25%] w-2 h-2 rounded-full bg-secondary/40" />
          <div ref={node3Ref} className="absolute top-[70%] left-[40%] w-1.5 h-1.5 rounded-full bg-tertiary/40" />
          <div ref={node4Ref} className="absolute top-[30%] right-[40%] w-1.5 h-1.5 rounded-full bg-primary/30" />
        </div>
      </div>
    </>
  );
}
