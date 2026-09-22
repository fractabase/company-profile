import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function HeroSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const connectorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([titleRef.current, subtitleRef.current], { opacity: 1 });
        const path = connectorRef.current?.querySelector("path");
        if (path) gsap.set(path, { strokeDashoffset: 0 });
        return;
      }

      // Connector SVG path draw
      if (connectorRef.current) {
        const path = connectorRef.current.querySelector("path");
        if (path) {
          gsap.fromTo(
            path,
            { strokeDashoffset: 1 },
            {
              strokeDashoffset: 0,
              ease: "none",
              scrollTrigger: {
                trigger: connectorRef.current,
                start: "top 85%",
                end: "top 50%",
                scrub: 1.2,
              },
            },
          );
        }
      }

      // Title and subtitle entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
      ).fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative pt-28 sm:pt-36 lg:pt-60 pb-20 sm:pb-28 lg:pb-60 overflow-hidden">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-surface border border-line text-xs font-mono font-semibold text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>LAYANAN_KAMI.v1.0</span>
            </div>

            <h1
              ref={titleRef}
              style={{ opacity: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-color tracking-tight leading-[1.1] mb-6"
            >
              Solusi End-to-End, <span className="text-primary">dari Fondasi</span>{" "}
              <span className="text-secondary">hingga Sistem</span> yang Berjalan
            </h1>

            <p
              ref={subtitleRef}
              style={{ opacity: 0 }}
              className="text-lg sm:text-xl text-secondary-color leading-relaxed max-w-3xl"
            >
              Kami membangun solusi digital dari website company profile hingga sistem enterprise sesuai kebutuhan
              operasional bisnis Anda. Setiap sistem dirancang secara modular agar siap beradaptasi seiring perkembangan
              skala organisasi.
            </p>
          </div>
        </div>

        {/* Animated connector SVG */}
        <svg
          ref={connectorRef}
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full h-24 sm:h-32 lg:h-40 stroke-primary/30 fill-none"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C200,20 400,100 600,60 C800,20 1000,80 1200,40"
            strokeWidth="1.5"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset="1"
            style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
          />
        </svg>
      </section>
    </>
  );
}
