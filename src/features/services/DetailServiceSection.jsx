import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icons } from "../../components/common/Icons";
import AnimatedCounter from "./AnimatedCounter";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 6 aksen warna berbeda untuk tiap layanan (mengikuti badge kategori)
const serviceAccents = [
  {
    hex: "#35beeb",
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/40",
    label: "Website Development",
  },
  {
    hex: "#7b61ff",
    bg: "bg-secondary/10",
    text: "text-secondary",
    border: "border-secondary/40",
    label: "Web Application",
  },
  {
    hex: "#f5a623",
    bg: "bg-tertiary/10",
    text: "text-tertiary",
    border: "border-tertiary/40",
    label: "Mobile Application",
  },
  {
    hex: "#77ddff",
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/40",
    label: "Custom Software",
  },
  {
    hex: "#a596ff",
    bg: "bg-secondary/10",
    text: "text-secondary",
    border: "border-secondary/40",
    label: "System Integration",
  },
  {
    hex: "#35beeb",
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/40",
    label: "Talent Augmentation",
  },
];

const timelineValues = {
  "2-4 minggu": 4,
  "4-8 minggu": 8,
  "4-10 minggu": 10,
  "6-12 minggu": 12,
  "3-6 minggu": 6,
  "1-2 minggu penempatan": 2,
};

const maxTimeline = 12;

function lerpColor(hexA, hexB, t) {
  const parse = (hex) => {
    const c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return c ? { r: parseInt(c[1], 16), g: parseInt(c[2], 16), b: parseInt(c[3], 16) } : { r: 0, g: 0, b: 0 };
  };
  const a = parse(hexA);
  const b = parse(hexB);
  const r = Math.round(a.r + (b.r - a.r) * t);
  const g = Math.round(a.g + (b.g - a.g) * t);
  const bl = Math.round(a.b + (b.b - a.b) * t);
  return `rgb(${r},${g},${bl})`;
}

export default function DetailServiceSection({ services }) {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const lineSvgRef = useRef(null);
  const linePathRef = useRef(null);
  const dotRef = useRef(null);
  const serviceRefs = useRef([]);

  // ScrollTrigger effects
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        if (bgRef.current) {
          gsap.set(bgRef.current, { backgroundColor: serviceAccents[0].hex, opacity: 0.08 });
        }
        serviceRefs.current.forEach((r) => (r ? gsap.set(r, { opacity: 1, y: 0 }) : null));
        return;
      }

      // Connecting line + dot
      if (linePathRef.current && lineSvgRef.current) {
        const path = linePathRef.current;
        const svg = lineSvgRef.current;

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            const p = self.progress;
            const h = svg.getBoundingClientRect().height || sectionRef.current?.offsetHeight || 0;

            if (h > 0) {
              path.setAttribute("d", `M12,0 L12,${h}`);
              gsap.set(path, { strokeDasharray: h, strokeDashoffset: h * (1 - p) });

              if (dotRef.current) {
                dotRef.current.setAttribute("cy", p * h);
              }
            }
          },
        });
      }

      // Color interpolation (solid color, no gradient)
      if (bgRef.current) {
        // Smooth transition from main website background to first service color
        gsap.fromTo(
          bgRef.current,
          { opacity: 0 },
          {
            opacity: 0.08,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              end: "top top",
              scrub: true,
            },
          },
        );

        const colorStops = serviceAccents.map((a) => a.hex);
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
          onUpdate: (self) => {
            const segCount = colorStops.length - 1;
            const seg = self.progress * segCount;
            const i0 = Math.min(Math.floor(seg), segCount - 1);
            const t = seg - i0;
            const c1 = colorStops[i0] || colorStops[0];
            const c2 = colorStops[Math.min(i0 + 1, colorStops.length - 1)] || colorStops[colorStops.length - 1];
            const lerped = lerpColor(c1, c2, t);
            gsap.set(bgRef.current, {
              backgroundColor: lerped,
            });
          },
        });
      }

      // Morph icon
      serviceRefs.current.forEach((ref) => {
        if (!ref || prefersReducedMotion) return;
        const morphIcon = ref.querySelector(".morph-icon");
        if (!morphIcon) return;

        gsap.fromTo(
          morphIcon,
          { opacity: 0.02, scale: 0.6, rotation: -20 },
          {
            opacity: 0.08,
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 90%",
              end: "top 40%",
              scrub: 1.5,
            },
          },
        );
      });

      // Staggered reveal
      serviceRefs.current.forEach((ref) => {
        if (!ref || prefersReducedMotion) return;
        const numberEl = ref.querySelector(".service-number");

        gsap.fromTo(
          ref,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 92%",
              end: "top 65%",
              scrub: 1,
            },
          },
        );

        if (numberEl) {
          gsap.fromTo(
            numberEl,
            { y: 30 },
            {
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: ref,
                start: "top 95%",
                end: "top 60%",
                scrub: 1,
              },
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [services]);

  const timelineNumeric = (timeline) => timelineValues[timeline] || 4;

  return (
    <>
      <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        {/* Single background layer for entire section */}
        <div
          ref={bgRef}
          aria-hidden="true"
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{ backgroundColor: serviceAccents[0].hex, opacity: 0 }}
        />

        <div className="section-container relative z-10">
          {/* Connecting line (SVG) */}
          <svg
            ref={lineSvgRef}
            aria-hidden="true"
            className="absolute left-57 top-0 h-full w-6 -ml-3 z-20 pointer-events-none hidden lg:block overflow-visible"
          >
            <defs>
              <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Static background dashed guide line */}
            <line
              x1="12"
              y1="0"
              x2="12"
              y2="100%"
              stroke="var(--line)"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="opacity-40"
            />

            <path
              ref={linePathRef}
              d="M12,0 L12,0"
              fill="none"
              stroke="var(--primary-color)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <circle
              ref={dotRef}
              cx="12"
              cy="0"
              r="4"
              fill="var(--primary-color)"
              filter="url(#dotGlow)"
              className="will-change-transform"
            />
          </svg>

          {services.map((service, idx) => {
            const accent = serviceAccents[idx % serviceAccents.length];
            const Icon = service.icon;
            const numeric = timelineNumeric(service.timeline);
            const progressPct = Math.round((numeric / maxTimeline) * 100);

            return (
              <>
                <div
                  key={service.slug || idx}
                  ref={(el) => {
                    serviceRefs.current[idx] = el;
                  }}
                  className="relative mb-16 sm:mb-24 last:mb-0"
                >
                  {/* Two-column layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8 lg:gap-12 items-start">
                    {/* LEFT: Sticky column */}
                    <div className="lg:sticky lg:self-start relative">
                      {/* Watermark number di background (simetris konsentris di belakang angka, ikut sticky) */}
                      <div
                        className="absolute -top-10 md:-top-12 xl:-top-18 left-8 md:left-12 lg:left-2 xl:-left-24 text-[6.5rem] sm:text-[8rem] lg:text-[9.5rem] leading-none font-extrabold tracking-tighter select-none pointer-events-none -z-10"
                        style={{ color: accent.hex, opacity: 0.05 }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </div>

                      {/* Angka urut besar */}
                      <div
                        className="service-number relative z-10 text-[4.5rem] sm:text-[5.5rem] lg:text-[6.5rem] leading-none font-extrabold tracking-tighter select-none"
                        style={{ color: accent.hex }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </div>

                      {/* Morph icon besar transparan */}
                      <div className="relative mb-4 lg:mb-6">
                        <Icon
                          className="morph-icon w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 will-change-transform"
                          style={{ color: accent.hex, opacity: 0.05 }}
                        />
                      </div>

                      {/* Badge */}
                      <div className="mb-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border ${accent.bg} ${accent.text} ${accent.border}`}
                        >
                          {service.badge}
                        </span>
                      </div>

                      {/* Judul */}
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-primary-color tracking-tight">
                        {service.title}
                      </h2>
                    </div>

                    {/* RIGHT: Kolom konten */}
                    <div className="min-w-0">
                      {/* Deskripsi */}
                      <div className="mb-6">
                        <p className="text-base sm:text-lg text-secondary-color leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Fitur utama */}
                      <div className="mb-6">
                        <div
                          className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-3"
                          style={{ color: accent.hex }}
                        >
                          FITUR_UTAMA
                        </div>
                        <ul className="space-y-2.5">
                          {service.features.map((feat) => (
                            <li
                              key={feat}
                              className="flex items-start gap-2.5 text-sm font-medium text-secondary-color"
                            >
                              <Icons.Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: accent.hex }} />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Teknologi */}
                      <div className="mb-6">
                        <div
                          className="text-xs font-mono font-bold text-primary uppercase tracking-widest mb-3"
                          style={{ color: accent.hex }}
                        >
                          TEKNOLOGI
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 border rounded-full text-xs font-mono font-semibold ${accent.bg} ${accent.text} ${accent.border}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Use Case + Timeline */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div>
                          <div
                            className="text-xs font-mono font-bold text-secondary uppercase tracking-widest mb-2"
                            style={{ color: "var(--secondary-text-color)" }}
                          >
                            COCOK_UNTUK
                          </div>

                          <p className="text-sm text-secondary-color leading-relaxed">{service.useCase}</p>
                        </div>

                        <div>
                          <div
                            className="text-xs font-mono font-bold text-secondary uppercase tracking-widest mb-2"
                            style={{ color: "var(--secondary-text-color)" }}
                          >
                            ESTIMASI
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-base font-semibold text-primary-color">{service.timeline}</span>
                            <AnimatedCounter target={numeric} />
                          </div>

                          {/* Progress bar */}
                          <div className="mt-3 h-1.5 rounded-full bg-line overflow-hidden">
                            <div
                              className="service-progress-fill h-full rounded-full will-change-transform"
                              style={{
                                width: `${progressPct}%`,
                                backgroundColor: accent.hex,
                              }}
                            />
                          </div>

                          <p className="text-[10px] font-mono text-secondary-color mt-1.5">
                            skala relatif {progressPct}% dari proyek terpanjang
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Garis pemisah antar section - solid color, no gradient */}
                  {idx < services.length - 1 && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-px lg:bottom-px"
                      style={{
                        backgroundColor: `rgba(${parseInt(accent.hex.slice(1, 3), 16)},${parseInt(accent.hex.slice(3, 5), 16)},${parseInt(accent.hex.slice(5, 7), 16)},0.2)`,
                      }}
                    />
                  )}
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
