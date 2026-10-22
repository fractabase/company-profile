import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderSection from "../../features/contact/HeaderSection";
import InfoCardsSection from "../../features/contact/InfoCardsSection";
import FormWrapper from "../../features/contact/FormWrapper";
import FAQSection from "../../features/contact/FAQSection";
import ContactBackground from "../../features/contact/ContactBackground";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Contact() {
  const location = useLocation();
  const mainSectionRef = useRef(null);
  const infoColRef = useRef(null);
  const formColRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    if (prefersReducedMotion) {
      return () => clearTimeout(refreshTimer);
    }

    const ctx = gsap.context(() => {
      // Continuous scrubbed parallax: info column moves at scrub 0.4, form at scrub 0.2
      if (infoColRef.current) {
        gsap.to(infoColRef.current, {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: mainSectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.4,
          },
        });
      }

      if (formColRef.current) {
        gsap.to(formColRef.current, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: mainSectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.2,
          },
        });
      }
    }, mainSectionRef);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [location]);

  return (
    <>
      <ContactBackground />
      <HeaderSection />

      <section ref={mainSectionRef} style={{ minHeight: "auto" }} className="relative py-12 lg:py-20 z-10">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div ref={infoColRef} className="lg:col-span-5">
              <InfoCardsSection />
            </div>

            <div ref={formColRef} className="lg:col-span-7">
              <FormWrapper />
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <FAQSection />
      </div>
    </>
  );
}
