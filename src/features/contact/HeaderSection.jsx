import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icons } from "../../components/common/Icons";
import { Card, CardContent } from "../../components/common/Card";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function HeaderSection() {
  const sectionRef = useRef(null);
  const telemetryRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(
          [
            telemetryRef.current,
            badgeRef.current,
            titleRef.current,
            descRef.current,
            ...statsRef.current.filter(Boolean),
          ],
          {
            opacity: 1,
            y: 0,
          },
        );
        return;
      }

      // Initial entrance stagger
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(telemetryRef.current, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.4 })
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: 16, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5 },
          "-=0.2",
        )
        .fromTo(titleRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.25")
        .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.35")
        .fromTo(
          statsRef.current.filter(Boolean),
          { opacity: 0, y: 20, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08 },
          "-=0.25",
        );

      // Continuous scrubbed parallax drift throughout scroll (different speeds for depth)
      gsap.to(telemetryRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(badgeRef.current, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to(titleRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.4,
        },
      });

      gsap.to(descRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.3,
        },
      });

      statsRef.current.filter(Boolean).forEach((card, idx) => {
        gsap.to(card, {
          yPercent: -5 - idx * 1.5,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.2 + idx * 0.1,
          },
        });
      });

      // Desktop-only 3D tilt on hover
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        statsRef.current.filter(Boolean).forEach((card) => {
          if (!card) return;

          const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const mouseX = (e.clientX - centerX) / (rect.width / 2);
            const mouseY = (e.clientY - centerY) / (rect.height / 2);

            gsap.to(card, {
              rotateY: mouseX * 3,
              rotateX: -mouseY * 3,
              duration: 0.4,
              ease: "power2.out",
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              rotateY: 0,
              rotateX: 0,
              duration: 0.6,
              ease: "power2.out",
            });
          };

          card.addEventListener("mousemove", handleMouseMove);
          card.addEventListener("mouseleave", handleMouseLeave);

          return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
          };
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      icon: Icons.Time,
      value: "≤ 24 Jam",
      label: "Response Time",
      detail: "Pesan ditinjau engineer kami, respons teknis dalam satu hari kerja",
      color: "primary",
    },
    {
      icon: Icons.Shield,
      value: "NDA Ready",
      label: "Legal Protection",
      detail: "Perjanjian kerahasiaan resmi sebelum diskusi teknis dimulai",
      color: "secondary",
    },
    {
      icon: Icons.Check,
      value: "Gratis",
      label: "Initial Consultation",
      detail: "Estimasi biaya dan saran arsitektur tanpa biaya atau ikatan",
      color: "tertiary",
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{ minHeight: "auto" }}
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 overflow-hidden"
    >
      <div className="section-container relative z-10">
        {/* Telemetry precision bar */}
        <div
          ref={telemetryRef}
          aria-hidden="true"
          className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-secondary-color/60 mb-6 pb-2 border-b border-line/40 select-none"
        >
          <span>FRACTAL_INDEX // CONTACT.GATEWAY</span>
          <span className="hidden md:inline">+ + +</span>
        </div>

        {/* Hero content */}
        <div className="text-left max-w-4xl space-y-5">
          {/* Badge */}
          <div ref={badgeRef}>
            <div className="px-4 py-2 border border-secondary rounded-3xl lg:rounded-full bg-secondary/20 text-xs md:text-sm font-mono font-semibold uppercase text-secondary tracking-wide shadow-sm w-max">
              KONTAK &amp; KONSULTASI
            </div>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-color tracking-tight leading-[1.1]"
          >
            Ada proyek yang ingin Anda kerjakan?
          </h1>

          {/* Description */}
          <p ref={descRef} className="text-base sm:text-lg lg:text-xl text-secondary-color leading-relaxed max-w-3xl">
            Ceritakan singkat apa yang Anda butuhkan. Tim kami akan membaca, mempelajari konteksnya, lalu menghubungi
            kembali dalam 24 jam kerja untuk menentukan langkah berikutnya.
          </p>
        </div>

        {/* 3 Stat Nodes dengan 3D hover tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mt-12 lg:mt-14">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const colorMap = {
              primary: {
                bg: "bg-primary/10",
                border: "border-primary/20",
                text: "text-primary",
                accent: "bg-primary/40",
              },
              secondary: {
                bg: "bg-secondary/10",
                border: "border-secondary/20",
                text: "text-secondary",
                accent: "bg-secondary/40",
              },
              tertiary: {
                bg: "bg-tertiary/10",
                border: "border-tertiary/20",
                text: "text-tertiary",
                accent: "bg-tertiary/40",
              },
            };
            const c = colorMap[stat.color];

            return (
              <Card
                key={idx}
                ref={(el) => (statsRef.current[idx] = el)}
                variant="default"
                hoverable={false}
                padding="none"
                className="p-6 lg:p-7"
                style={{ transformStyle: "preserve-3d" }}
              >
                <CardContent>
                  {/* Icon + node ID */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center transition-transform`}
                    >
                      <Icon className={`w-5 h-5 ${c.text}`} />
                    </div>

                    <span className={`text-[10px] font-mono uppercase tracking-wider ${c.text} opacity-60`}>
                      NODE_{String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Value metric */}
                  <div className="text-3xl sm:text-4xl font-extrabold text-primary-color tracking-tight mb-1.5">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className={`text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider ${c.text} mb-3`}>
                    {stat.label}
                  </div>

                  {/* Detail */}
                  <p className="text-base text-secondary-color leading-relaxed">{stat.detail}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
