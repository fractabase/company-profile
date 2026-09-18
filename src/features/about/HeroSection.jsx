import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Icons } from "../../components/common/Icons";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const stats = [
  { label: "Segmentasi Klien", value: "4 Sektor", detail: "Perorangan · UMKM · Startup · Enterprise" },
  { label: "Metodologi Kerja", value: "Discovery First", detail: "Pahami masalah sebelum menentukan baris kode" },
  { label: "Cakupan Layanan", value: "End-to-End", detail: "Web, Mobile, Game, & Custom Internal System" },
  {
    label: "Model Kerjasama",
    value: "Extended Team",
    detail: "Project-based, Dedicated Team, & Long-term Partner",
  },
];

export default function HeroSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadRef = useRef(null);
  const badgeRef = useRef(null);
  const terminalBoxRef = useRef(null);
  const ctaButtonsRef = useRef(null);
  const blueprintRef = useRef(null);
  const floatingTagsRef = useRef(null);
  const terminalTextRef = useRef(null);
  const segmentsBarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state without causing blink
      gsap.set(badgeRef.current, { opacity: 0, y: -20 });
      gsap.set(headingRef.current, { opacity: 0, y: 30 });
      gsap.set(subheadRef.current, { opacity: 0, y: 20 });
      gsap.set(terminalBoxRef.current, { opacity: 0, y: 20, scale: 0.98 });
      gsap.set(ctaButtonsRef.current, { opacity: 0, y: 20 });
      gsap.set(blueprintRef.current, { opacity: 0, scale: 0.94, y: 25 });
      gsap.set(floatingTagsRef.current.children, { opacity: 0, y: 15, scale: 0.85 });
      gsap.set(segmentsBarRef.current, { opacity: 0, y: 200 });

      // 1. Initial entrance timeline
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.5, delay: 0.05 })
        .to(headingRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.25")
        .to(subheadRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.35")
        .to(
          terminalBoxRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            onStart: () => {
              if (terminalTextRef.current) {
                gsap.to(terminalTextRef.current, {
                  duration: 2.0,
                  text: {
                    value: "FRACTABASE.init({ role: 'software_house', method: 'understand_first' });",
                    delimiter: "",
                  },
                  ease: "none",
                });
              }
            },
          },
          "-=0.3",
        )
        .to(ctaButtonsRef.current, { opacity: 1, y: 0, duration: 0.55 }, "-=0.25")
        .to(blueprintRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: "back.out(1.2)" }, "-=0.4")
        .to(
          floatingTagsRef.current ? floatingTagsRef.current.children : [],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: "back.out(1.5)",
          },
          "-=0.5",
        )
        .to(segmentsBarRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");

      // 2. Gentle cursor trigger & idle floating on blueprint
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const bp = blueprintRef.current;
        if (!bp) return;

        let mouseX = 0;
        let mouseY = 0;
        let isPointerInWindow = true;

        const setRotY = gsap.quickTo(bp, "rotateY", { duration: 0.8, ease: "power2.out" });
        const setRotX = gsap.quickTo(bp, "rotateX", { duration: 0.8, ease: "power2.out" });
        const setTransX = gsap.quickTo(bp, "x", { duration: 0.8, ease: "power2.out" });
        const setTransY = gsap.quickTo(bp, "y", { duration: 0.8, ease: "power2.out" });

        const handlePointerMove = (e) => {
          const rect = bp.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          // Clamp normX & normY to [-1, 1] so bounds don't explode
          const rawX = (e.clientX - centerX) / (rect.width / 2);
          const rawY = (e.clientY - centerY) / (rect.height / 2);
          mouseX = Math.max(-1, Math.min(1, rawX));
          mouseY = Math.max(-1, Math.min(1, rawY));
          isPointerInWindow = true;

          setRotY(mouseX * 3.5);
          setRotX(-mouseY * 3.5);
          setTransX(mouseX * 6);
          setTransY(mouseY * 6);
        };

        const handlePointerLeave = () => {
          isPointerInWindow = false;
          mouseX = 0;
          mouseY = 0;
          setRotY(0);
          setRotX(0);
          setTransX(0);
          setTransY(0);
        };

        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        document.addEventListener("mouseleave", handlePointerLeave);

        // Scroll parallax for blueprint container
        gsap.to(bp, {
          yPercent: -14,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        // Floating tags: Combined Mouse Parallax + Gentle Idle Motion
        if (floatingTagsRef.current) {
          const tags = Array.from(floatingTagsRef.current.children);
          const tagConfigs = [
            { maxMouseX: 12, maxMouseY: 12, idleX: 6, idleY: -8, idleRot: 2, duration: 8, delay: 0 },
            { maxMouseX: 18, maxMouseY: 18, idleX: -8, idleY: 10, idleRot: -3, duration: 10, delay: 0.6 },
            { maxMouseX: 15, maxMouseY: 15, idleX: 8, idleY: 6, idleRot: 2, duration: 9, delay: 1.2 },
          ];

          tags.forEach((tag, idx) => {
            const cfg = tagConfigs[idx] || tagConfigs[0];
            const setX = gsap.quickTo(tag, "x", { duration: 0.8, ease: "power2.out" });
            const setY = gsap.quickTo(tag, "y", { duration: 0.8, ease: "power2.out" });

            // Idle loop on rotation only (so x & y are 100% controlled cleanly without collision)
            gsap.to(tag, {
              rotation: cfg.idleRot,
              duration: cfg.duration,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: cfg.delay,
            });

            // Unified RAF updater combining mouse position + sine-wave idle offset
            let startTime = Date.now() + cfg.delay * 1000;
            const updateTagPosition = () => {
              const elapsed = (Date.now() - startTime) / 1000;
              // Calculate gentle sine-wave idle displacement
              const currentIdleX = Math.sin((elapsed / cfg.duration) * Math.PI * 2) * cfg.idleX;
              const currentIdleY = Math.cos((elapsed / cfg.duration) * Math.PI * 2) * cfg.idleY;

              // Combine mouse offset with sine idle displacement
              const targetX = (isPointerInWindow ? mouseX * cfg.maxMouseX : 0) + currentIdleX;
              const targetY = (isPointerInWindow ? mouseY * cfg.maxMouseY : 0) + currentIdleY;

              setX(targetX);
              setY(targetY);
            };

            gsap.ticker.add(updateTagPosition);
          });
        }

        // Scroll parallax on left column
        gsap.to([headingRef.current, subheadRef.current, terminalBoxRef.current, ctaButtonsRef.current], {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        // Segments bar scrubbed entrance
        if (segmentsBarRef.current) {
          gsap.fromTo(
            segmentsBarRef.current.children,
            { opacity: 0.2, y: 40 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: segmentsBarRef.current,
                start: "top 95%",
                end: "top 75%",
                scrub: 1.2,
              },
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative pb-28 border-b border-line/60 overflow-visible">
        <div className="section-container mt-24 md:mt-28 lg:mt-40 xl:mt-60 px-4 sm:px-6 lg:px-8 w-full">
          {/* Top Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Bold Factual Positioning */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Status Badge */}
              <div
                ref={badgeRef}
                style={{ opacity: 0 }}
                className="px-4 py-2 border border-secondary rounded-3xl lg:rounded-full text-secondary text-xs md:text-sm font-semibold font-mono tracking-wide bg-secondary/20 shadow-sm mb-6"
              >
                SOFTWARE HOUSE & DIGITAL DEVELOPMENT PARTNER{" "}
              </div>

              {/* Main Headline */}
              <h1
                ref={headingRef}
                style={{ opacity: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-primary-color tracking-tight leading-[1.08] mb-6"
              >
                Software House & Digital Development Partner
              </h1>

              {/* Subheadline */}
              <p
                ref={subheadRef}
                style={{ opacity: 0 }}
                className="text-base sm:text-lg lg:text-xl text-secondary-color leading-relaxed max-w-2xl mb-8"
              >
                Dari ide awal, digitalisasi proses bisnis UMKM, prototipe tervalidasi untuk startup, hingga modernisasi
                sistem internal perusahaan—kami siap menjadi partner rekayasa perangkat lunak Anda. Kami memahami alur
                kerja Anda sebelum menentukan baris kode.
              </p>

              {/* Terminal Box - Typing Effect */}
              <div
                ref={terminalBoxRef}
                style={{ opacity: 0 }}
                className="w-full max-w-2xl p-4 rounded-xl bg-surface dark:bg-dark-surface border border-line font-mono text-xs text-secondary-color shadow-inner mb-8"
              >
                <span className="text-primary font-bold">&gt;</span>{" "}
                <span ref={terminalTextRef}>awaiting_initialization...</span>
                <span className="inline-block w-2 h-4.5 border border-primary bg-primary/60 -mb-1 ml-0.5 animate-pulse" />
              </div>

              {/* CTA Buttons */}
              <div ref={ctaButtonsRef} style={{ opacity: 0 }} className="flex flex-wrap gap-4">
                <a
                  href="/#Contact"
                  className="px-6 py-3 rounded-xl bg-primary text-dark font-bold text-sm shadow-xl shadow-primary/20 hover:bg-primary-soft transition-all duration-300 hover:-translate-y-0.5"
                >
                  Mulai Konsultasi Proyek
                </a>
                <a
                  href="/#Services"
                  className="px-6 py-3 rounded-xl bg-surface dark:bg-dark-surface text-primary-color border border-line font-semibold text-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  Eksplorasi Layanan
                </a>
              </div>
            </div>

            {/* Right Column: Architecture Window Shell */}
            <div className="lg:col-span-5 relative" style={{ perspective: "1000px" }}>
              {/* Floating Tags */}
              <div ref={floatingTagsRef} className="pointer-events-none absolute inset-0 z-20 hidden sm:block">
                <div
                  style={{ opacity: 0 }}
                  className="absolute -top-6 -left-4 px-3.5 py-1.5 rounded-lg bg-surface dark:bg-dark-surface border border-primary/40 shadow-lg text-[11px] font-mono text-primary flex items-center gap-1.5 backdrop-blur will-change-transform"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>status: 200_READY</span>
                </div>

                <div
                  style={{ opacity: 0 }}
                  className="absolute -bottom-4 -right-2 px-3.5 py-1.5 rounded-lg bg-surface dark:bg-dark-surface border border-secondary/40 shadow-lg text-[11px] font-mono text-secondary flex items-center gap-1.5 backdrop-blur will-change-transform"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>mode: BUILT_TO_SPEC</span>
                </div>

                <div
                  style={{ opacity: 0 }}
                  className="absolute top-1/2 lg:top-72 -right-6 lg:-right-12 px-3.5 py-1.5 rounded-lg bg-surface dark:bg-dark-surface border border-tertiary/40 shadow-lg text-[11px] font-mono text-tertiary flex items-center gap-1.5 backdrop-blur will-change-transform"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  <span>scale: 1.0 -&gt; EXPAND</span>
                </div>
              </div>

              {/* Architecture Window Shell */}
              <div
                ref={blueprintRef}
                style={{ opacity: 0, transformStyle: "preserve-3d" }}
                className="relative rounded-3xl bg-surface dark:bg-dark-surface border border-line-strong/40 shadow-2xl overflow-hidden backdrop-blur-xl transition-shadow duration-300 will-change-transform"
              >
                {/* Terminal Window Header */}
                <div className="px-5 py-3.5 bg-surface dark:bg-dark-surface-alt border-b border-line flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  </div>
                  <div className="font-mono text-xs text-secondary-color tracking-wide flex items-center gap-2">
                    <Icons.Code className="w-3.5 h-3.5 text-primary" />
                    <span>fractabase_architecture.config</span>
                  </div>
                  <div className="font-mono text-[10px] text-tertiary bg-tertiary/10 px-2 py-0.5 rounded border border-tertiary/20">
                    LIVE
                  </div>
                </div>

                {/* Internal Architecture Stack Visualizer */}
                <div className="p-6 sm:p-8 space-y-4">
                  {/* Level 01: Discovery */}
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/25 flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-primary/15 text-primary shrink-0">
                      <Icons.ProblemSolving className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-primary font-semibold">LAYER 01 // DISCOVERY</span>
                        <span className="text-[10px] font-mono text-secondary-color">INPUT</span>
                      </div>
                      <p className="text-sm font-semibold text-primary-color mt-1">Problem &amp; Business Workflow</p>
                      <p className="text-xs text-secondary-color mt-1">
                        Menganalisis kebutuhan nyata klien sebelum memilih teknologi.
                      </p>
                    </div>
                  </div>

                  {/* Level 02: Engineering */}
                  <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/25 flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-secondary/15 text-secondary shrink-0">
                      <Icons.CustomSoftware className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-secondary font-semibold">LAYER 02 // ENGINEERING</span>
                        <span className="text-[10px] font-mono text-secondary-color">PROCESSING</span>
                      </div>
                      <p className="text-sm font-semibold text-primary-color mt-1">Built-to-Spec Architecture</p>
                      <p className="text-xs text-secondary-color mt-1">
                        Website, Web App, Mobile, Game, Custom System yang modular.
                      </p>
                    </div>
                  </div>

                  {/* Level 03: Value */}
                  <div className="p-4 rounded-xl bg-tertiary/10 border border-tertiary/25 flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-tertiary/15 text-tertiary shrink-0">
                      <Icons.Scalability className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-tertiary font-semibold">LAYER 03 // VALUE</span>
                        <span className="text-[10px] font-mono text-secondary-color">OUTPUT</span>
                      </div>
                      <p className="text-sm font-semibold text-primary-color mt-1">Scalable &amp; Long-Term Asset</p>
                      <p className="text-xs text-secondary-color mt-1">
                        Solusi digital efisien yang tumbuh beriringan bersama skala bisnis Anda.
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-3 border-t border-line font-mono text-xs text-secondary-color flex items-center justify-between">
                    <span className="flex items-center gap-2 text-primary font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>$ init_partnership()</span>
                    </span>
                    <span className="text-[11px] text-secondary-color/80">ready_for_execution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars / Operational Telemetry Ribbon */}
        <div ref={segmentsBarRef} className="mt-20">
          <div className="section-container px-4 sm:px-6 lg:px-8 pt-14 border-t border-line">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-secondary font-bold tracking-widest uppercase flex items-center gap-2">
                <Icons.Code className="w-4 h-4 text-primary" /> TELEMETRI_OPERASIONAL
              </span>

              <span className="font-mono text-xs text-secondary-color hidden sm:inline">
                FRACTABASE_STANDARDS_OVERVIEW
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-line hover:border-primary transition-colors group"
                >
                  <span className="font-mono text-xs font-bold text-primary mb-1 block">
                    // 0{index + 1} {item.label}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-primary-color tracking-tight mb-1 group-hover:text-primary transition-colors">
                    {item.value}
                  </h4>
                  <p className="text-xs text-secondary-color leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
