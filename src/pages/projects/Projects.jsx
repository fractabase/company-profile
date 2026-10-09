import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackgroundDecorations from "../../features/projects/BackgroundDecorations";
import HeaderSection from "../../features/projects/HeaderSection";
import GridSection from "../../features/projects/GridSection";
import CTASection from "../../features/projects/CTASection";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const mainRef = useRef(null);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mql.addEventListener("change", handleChange);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(timer);
      mql.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const planes = gsap.utils.toArray("[data-parallax-depth]");

      planes.forEach((el) => {
        const depth = parseFloat(el.dataset.parallaxDepth) || 20;
        const scrub = parseFloat(el.dataset.parallaxScrub) || 0.25;
        const axis = el.dataset.parallaxAxis === "x" ? "x" : "y";

        gsap.fromTo(
          el,
          { [axis]: depth },
          {
            [axis]: -depth,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub,
            },
          },
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <>
      <main ref={mainRef} className="relative isolate flex min-h-svh w-full flex-col overflow-x-clip">
        <BackgroundDecorations prefersReducedMotion={prefersReducedMotion} />
        <HeaderSection />
        <GridSection prefersReducedMotion={prefersReducedMotion} />
        <CTASection prefersReducedMotion={prefersReducedMotion} />
      </main>
    </>
  );
}
