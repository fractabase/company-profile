import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heading } from "../../components/common/Heading";
import { Icons } from "../../components/common/Icons";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const models = [
  {
    id: "project-based",
    number: "01",
    tagCode: "SCOPE // FIXED_MILESTONE",
    title: "Project-Based Development",
    tagline: "Pengembangan Berbasis Spesifikasi & Target Milestones",
    description:
      "Anda menyampaikan kebutuhan dan spesifikasi proyek yang jelas, lalu kami mengembangkan software berdasarkan kesepakatan terstruktur hingga tahap serah terima.",
    specs: [
      { label: "Model Biaya", value: "Fixed / Milestone" },
      { label: "Spesifikasi", value: "Terdefinisi di awal" },
      { label: "Linimasa", value: "Terjadwal & terukur" },
    ],
    fit: "Sangat ideal untuk proyek tunggal dengan batasan anggaran dan kebutuhan yang sudah pasti.",
    icon: Icons.FileText,
    accent: {
      hex: "#35beeb",
      token: "var(--primary-color)",
      badgeBg: "bg-primary/10",
      badgeText: "text-primary",
      borderColor: "border-primary/30",
      glowColor: "rgba(53, 190, 235, 0.18)",
    },
  },
  {
    id: "custom-dev",
    number: "02",
    tagCode: "ARCH // TAILORED_SYSTEM",
    title: "Custom Development",
    tagline: "Arsitektur Khusus Sesuai Alur Operasional Bisnis",
    description:
      "Software dirancang khusus dari nol mengikuti spesifikasi, aturan bisnis, dan alur kerja operasional perusahaan Anda agar terintegrasi secara presisi.",
    specs: [
      { label: "Model Biaya", value: "Scope-Based Custom" },
      { label: "Spesifikasi", value: "Tailored to workflow" },
      { label: "Integrasi", value: "Deep API & System" },
    ],
    fit: "Sangat ideal untuk proses bisnis unik yang tidak dapat diakomodasi software siap pakai di pasaran.",
    icon: Icons.Customization,
    accent: {
      hex: "#7b61ff",
      token: "var(--secondary-color)",
      badgeBg: "bg-secondary/10",
      badgeText: "text-secondary",
      borderColor: "border-secondary/30",
      glowColor: "rgba(123, 97, 255, 0.18)",
    },
  },
  {
    id: "outsourced-team",
    number: "03",
    tagCode: "RESOURCE // EMBEDDED_TEAM",
    title: "Dedicated / Outsourced Team",
    tagline: "Ekstensi Tim Engineering Eksternal Siap Pakai",
    description:
      "Fractabase bertindak sebagai ekstensi tim pengembang eksternal yang langsung menangani kebutuhan software Anda tanpa beban kompleksitas rekrutmen internal.",
    specs: [
      { label: "Model Biaya", value: "Retainer / Kapasitas" },
      { label: "Metode", value: "Agile & Dynamic Backlog" },
      { label: "Sinergi", value: "Direct Team Extension" },
    ],
    fit: "Sangat ideal untuk organisasi yang membutuhkan keahlian teknis teruji secara instan dan fleksibel.",
    icon: Icons.Users,
    accent: {
      hex: "#77ddff",
      token: "var(--primary-color)",
      badgeBg: "bg-primary/10",
      badgeText: "text-primary",
      borderColor: "border-primary/30",
      glowColor: "rgba(119, 221, 255, 0.18)",
    },
  },
  {
    id: "development-partnership",
    number: "04",
    tagCode: "LIFECYCLE // STRATEGIC_COPILOT",
    title: "Development Partnership",
    tagline: "Pendampingan Evolusi Sistem & Produk Jangka Panjang",
    description:
      "Fractabase mendampingi pengembangan produk dan sistem digital Anda secara berkelanjutan, mulai dari peluncuran awal hingga ekspansi dan refactoring berkala.",
    specs: [
      { label: "Model Biaya", value: "Long-Term Strategic" },
      { label: "Pendekatan", value: "Continuous Evolution" },
      { label: "Dukungan", value: "Scale & Maintenance" },
    ],
    fit: "Sangat ideal untuk produk digital yang terus berkembang dan membutuhkan skalabilitas tinggi.",
    icon: Icons.LongTermValue,
    accent: {
      hex: "#f5a623",
      token: "var(--tertiary-color)",
      badgeBg: "bg-tertiary/10",
      badgeText: "text-tertiary",
      borderColor: "border-tertiary/30",
      glowColor: "rgba(245, 166, 35, 0.18)",
    },
  },
];

export default function EngagementModelSection() {
  const sectionRef = useRef(null);
  const bgParallaxRef = useRef(null);
  const leftTrackRef = useRef(null);
  const rightTrackRef = useRef(null);
  const cardRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        cardRefs.current.forEach((el) => {
          if (el) gsap.set(el, { opacity: 1, y: 0, scale: 1 });
        });
        return;
      }

      // 1. Background Parallax (Slow counter motion)
      if (bgParallaxRef.current) {
        gsap.to(bgParallaxRef.current, {
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.2,
          },
        });
      }

      // 2. Dual-Track Asymmetric Parallax (Desktop)
      // Left track moves upward slightly as scroll advances
      if (leftTrackRef.current) {
        gsap.fromTo(
          leftTrackRef.current,
          { y: 35 },
          {
            y: -35,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.2,
            },
          },
        );
      }

      // Right track moves downward slightly in opposition, creating authentic multi-plane depth
      if (rightTrackRef.current) {
        gsap.fromTo(
          rightTrackRef.current,
          { y: -35 },
          {
            y: 35,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.2,
            },
          },
        );
      }

      // 3. Continuous Scroll Reveal for individual modules (Replays smoothly on scroll up/down)
      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.88 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 55%",
              scrub: 0.2,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 overflow-hidden isolate">
        {/* ================= LAYER 1: DEEP PARALLAX BACKGROUND BLUEPRINT ================= */}
        <div ref={bgParallaxRef} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/* Subtle Grid Matrix */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(to right, var(--line-strong) 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
          />

          {/* Glowing Ambient Light Orbs */}
          <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-tertiary/5 blur-[120px]" />
        </div>

        {/* ================= LAYER 2: FOREGROUND CONTENT & DUAL-TRACK MATRIX ================= */}
        <div className="section-container relative z-10">
          {/* Section Heading */}
          <Heading
            align="center"
            hasTagline={true}
            taglineText="-/ SKEMA_KOLABORASI"
            title="Model Kerja Sama yang Fleksibel"
            paragraph="Pilih skema kemitraan yang paling presisi dengan skala operasional, kebutuhan teknis, dan kapasitas organisasi Anda."
          />

          {/* Structural Spectrum Rail (Visual Architecture Indicator) */}
          <div className="mb-14 lg:mb-20 px-4 py-3 rounded-2xl bg-surface/60 border border-line backdrop-blur-md max-w-4xl mx-auto shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-secondary-color">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-bold text-primary-color uppercase">Spektrum Kemitraan:</span>
              </div>

              <div className="hidden sm:flex items-center gap-2 sm:gap-4 overflow-x-auto text-[11px]">
                <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">01. SCOPED</span>
                <span className="text-secondary-color/40">⟶</span>
                <span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary font-semibold">02. TAILORED</span>
                <span className="text-secondary-color/40">⟶</span>
                <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">03. EXTENSION</span>
                <span className="text-secondary-color/40">⟶</span>
                <span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-semibold">04. PARTNER</span>
              </div>
            </div>
          </div>

          {/* Dual-Track Asymmetric Parallax Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* LEFT TRACK (Models 01 & 03) */}
            <div ref={leftTrackRef} className="space-y-8 lg:space-y-12">
              {[models[0], models[2]].map((model) => {
                const globalIdx = model.number === "01" ? 0 : 2;
                const Icon = model.icon;
                const isHovered = hoveredIndex === globalIdx;

                return (
                  <div
                    key={model.id}
                    ref={(el) => {
                      cardRefs.current[globalIdx] = el;
                    }}
                    className="group relative"
                    onMouseEnter={() => setHoveredIndex(globalIdx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className={`relative h-full p-6 sm:p-8 rounded-3xl border bg-surface/90 backdrop-blur-md overflow-hidden transition-all duration-300 ease-out ${
                        isHovered ? "-translate-y-1.5 shadow-xl border-line-strong" : "border-line shadow-sm"
                      }`}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                        e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                      }}
                      style={{
                        boxShadow: isHovered ? `0 12px 32px -6px ${model.accent.glowColor}` : "none",
                      }}
                    >
                      {/* Interactive Radial Cursor Glow */}
                      <div
                        className="pointer-events-none absolute w-72 h-72 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-300 z-0 will-change-transform"
                        style={{
                          left: "var(--mouse-x, 50%)",
                          top: "var(--mouse-y, 50%)",
                          transform: "translate(-50%, -50%)",
                          backgroundColor: model.accent.hex,
                        }}
                      />

                      {/* Card Header: Number & Tag Code */}
                      <div className="relative z-10 flex items-center justify-between gap-4 mb-6 pb-4 border-b border-line/60">
                        <div className="flex items-center gap-3">
                          <span
                            className="text-2xl sm:text-3xl font-mono font-extrabold tracking-tighter"
                            style={{ color: model.accent.token }}
                          >
                            // {model.number}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] sm:text-xs font-mono font-semibold px-2.5 py-1 rounded-md border ${model.accent.badgeBg} ${model.accent.badgeText} ${model.accent.borderColor}`}
                        >
                          {model.tagCode}
                        </span>
                      </div>

                      {/* Card Content */}
                      <div className="relative z-10 space-y-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-2xl ${model.accent.badgeBg} shrink-0 mt-0.5`}>
                            <Icon className={`w-6 h-6 ${model.accent.badgeText}`} />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-primary-color tracking-tight leading-snug">
                              {model.title}
                            </h3>
                            <p className="text-xs font-mono text-secondary-color mt-1 font-medium">{model.tagline}</p>
                          </div>
                        </div>

                        <p className="text-sm sm:text-base text-secondary-color leading-relaxed pt-2">
                          {model.description}
                        </p>

                        {/* Specs Micro-Grid */}
                        <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-2xl bg-background/70 border border-line/80 my-4 text-left">
                          {model.specs.map((spec, sIdx) => (
                            <div key={sIdx} className="min-w-0">
                              <div className="text-[10px] font-mono text-secondary-color/70 uppercase truncate">
                                {spec.label}
                              </div>
                              <div className="text-xs font-semibold text-primary-color truncate mt-0.5">
                                {spec.value}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Fit Badge */}
                        <div className="inline-flex items-start gap-2.5 p-3 rounded-xl bg-surface border border-line/80 text-xs text-secondary-color leading-relaxed w-full">
                          <Icons.Check className={`w-4 h-4 shrink-0 mt-0.5 ${model.accent.badgeText}`} />
                          <span>{model.fit}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT TRACK (Models 02 & 04) - Offset downward on desktop for asymmetric parallax layout */}
            <div ref={rightTrackRef} className="space-y-8 lg:space-y-12 lg:mt-16">
              {[models[1], models[3]].map((model) => {
                const globalIdx = model.number === "02" ? 1 : 3;
                const Icon = model.icon;
                const isHovered = hoveredIndex === globalIdx;

                return (
                  <div
                    key={model.id}
                    ref={(el) => {
                      cardRefs.current[globalIdx] = el;
                    }}
                    className="group relative"
                    onMouseEnter={() => setHoveredIndex(globalIdx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className={`relative h-full p-6 sm:p-8 rounded-3xl border bg-surface/90 backdrop-blur-md overflow-hidden transition-all duration-300 ease-out ${
                        isHovered ? "-translate-y-1.5 shadow-xl border-line-strong" : "border-line shadow-sm"
                      }`}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                        e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                      }}
                      style={{
                        boxShadow: isHovered ? `0 12px 32px -6px ${model.accent.glowColor}` : "none",
                      }}
                    >
                      {/* Interactive Radial Cursor Glow */}
                      <div
                        className="pointer-events-none absolute w-72 h-72 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-300 z-0 will-change-transform"
                        style={{
                          left: "var(--mouse-x, 50%)",
                          top: "var(--mouse-y, 50%)",
                          transform: "translate(-50%, -50%)",
                          backgroundColor: model.accent.hex,
                        }}
                      />

                      {/* Card Header: Number & Tag Code */}
                      <div className="relative z-10 flex items-center justify-between gap-4 mb-6 pb-4 border-b border-line/60">
                        <div className="flex items-center gap-3">
                          <span
                            className="text-2xl sm:text-3xl font-mono font-extrabold tracking-tighter"
                            style={{ color: model.accent.token }}
                          >
                            // {model.number}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] sm:text-xs font-mono font-semibold px-2.5 py-1 rounded-md border ${model.accent.badgeBg} ${model.accent.badgeText} ${model.accent.borderColor}`}
                        >
                          {model.tagCode}
                        </span>
                      </div>

                      {/* Card Content */}
                      <div className="relative z-10 space-y-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-2xl ${model.accent.badgeBg} shrink-0 mt-0.5`}>
                            <Icon className={`w-6 h-6 ${model.accent.badgeText}`} />
                          </div>

                          <div>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-primary-color tracking-tight leading-snug">
                              {model.title}
                            </h3>
                            <p className="text-xs font-mono text-secondary-color mt-1 font-medium">{model.tagline}</p>
                          </div>
                        </div>

                        <p className="text-sm sm:text-base text-secondary-color leading-relaxed pt-2">
                          {model.description}
                        </p>

                        {/* Specs Micro-Grid */}
                        <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-2xl bg-background/70 border border-line/80 my-4 text-left">
                          {model.specs.map((spec, sIdx) => (
                            <div key={sIdx} className="min-w-0">
                              <div className="text-[10px] font-mono text-secondary-color/70 uppercase truncate">
                                {spec.label}
                              </div>
                              <div className="text-xs font-semibold text-primary-color truncate mt-0.5">
                                {spec.value}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Fit Badge */}
                        <div className="inline-flex items-start gap-2.5 p-3 rounded-xl bg-surface border border-line/80 text-xs text-secondary-color leading-relaxed w-full">
                          <Icons.Check className={`w-4 h-4 shrink-0 mt-0.5 ${model.accent.badgeText}`} />
                          <span>{model.fit}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Note / Guidance */}
          <div className="mt-16 lg:mt-24 text-center">
            <p className="text-xs sm:text-sm font-mono text-secondary-color max-w-xl mx-auto">
              <span className="opacity-70">
                // Masih bingung memilih model kerja sama? Tim kami siap berdiskusi untuk menentukan skema terbaik
                sesuai kebutuhan bisnis Anda.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
