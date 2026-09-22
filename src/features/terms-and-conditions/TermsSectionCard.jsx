import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icons } from "../../components/common/Icons";
import { Card } from "../../components/common/Card";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  UserCheck: Icons.UserCheck,
  Shield: Icons.Shield,
  FileText: Icons.FileText,
  Upload: Icons.Upload,
  Code: Icons.Code,
  AlertCircle: Icons.AlertCircle,
  Scale: Icons.Scale,
  ShieldCheck: Icons.ShieldCheck,
  Mail: Icons.Mail,
};

export default function TermsSectionCard({ id, num, title, icon, children, sectionRef, index }) {
  const containerRef = useRef(null);
  const numberRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // === REVEAL ===
      if (index >= 2) {
        gsap.from(container, {
          y: 60,
          scale: 0.88,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
          },
        });
      }

      // === PARALLAX: icon ===
      if (numberRef.current) {
        gsap.fromTo(
          numberRef.current,
          { y: -12 },
          {
            y: 12,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }

      // === PARALLAX: content ===
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { y: -6 },
          {
            y: 6,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, [index]);

  const SectionIcon = iconMap[icon] || Icons.FileText;

  return (
    <>
      <Card
        as="div"
        ref={(el) => {
          containerRef.current = el;
          sectionRef(el);
        }}
        id={id}
        variant="default"
        hoverable={false}
        padding="none"
        className={`terms-section scroll-mt-24 relative overflow-hidden`}
      >
        <div className="p-6 md:p-8 relative">
          {/* Section header */}
          <div className="mb-5 flex items-start gap-3">
            <span
              ref={numberRef}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
            >
              <SectionIcon className="h-5 w-5" />
            </span>
            <div ref={contentRef}>
              <p className="font-mono text-xs text-secondary-color/50 mb-0.5">Pasal {num}</p>
              <h2 className="text-lg font-bold text-primary-color md:text-xl font-heading">{title}</h2>
            </div>
          </div>

          {/* Content body */}
          {children}
        </div>
      </Card>
    </>
  );
}
