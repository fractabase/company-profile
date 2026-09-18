import { useEffect, useRef, useState, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icons } from "../../components/common/Icons";
import { Card, CardHeader } from "../../components/common/Card";
import { Heading } from "../../components/common/Heading";

gsap.registerPlugin(ScrollTrigger);

const AboutStorySection = () => {
  const containerRef = useRef(null);
  const consoleDisplayRef = useRef(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const stages = [
    {
      id: "stage-01",
      num: "01",
      code: "THE_DILEMMA",
      title: "Kesenjangan Antara Kebutuhan Klien dan Software Siap Pakai",
      leadText:
        "Software harus menyesuaikan proses bisnis klien, bukan klien yang dipaksa beradaptasi dengan keterbatasan software.",
      body: "Banyak pemilik bisnis dan organisasi terpaksa mengubah alur operasional mereka demi menyesuaikan diri dengan aplikasi template yang kaku. Di sisi lain, membangun software dari nol melalui konsultan TI konvensional kerap berujung pada over-engineering—biaya melambung untuk fitur-fitur rumit yang sebenarnya tidak pernah digunakan sehari-hari.",
      technicalInsight:
        "Akar masalah: Kegagalan mendengarkan alur kerja riil dan memaksakan solusi cetak ulang instan.",
      consoleLog: {
        status: "IDENTIFIED",
        input: "Legacy Spreadsheet + Rigid SaaS Templates",
        bottleneck: "Human error, fragmented data, workflow restricted",
        target: "Custom built-to-spec architecture",
      },
    },
    {
      id: "stage-02",
      num: "02",
      code: "THE_APPROACH",
      title: "Prinsip Inti: Understand First, Build Second",
      leadText: "Kami tidak langsung mengetik kode. Kami membedah akar masalah bisnis terlebih dahulu.",
      body: "Sebagai software house, nilai tertinggi yang kami berikan bukanlah sekadar baris kode mentah, melainkan penerjemahan masalah bisnis menjadi solusi digital yang tepat sasaran. Setiap proyek diawali dengan discovery mendalam: siapa penggunanya, di mana hambatan operasionalnya, dan arsitektur paling ramping apa yang mampu menopang pertumbuhan klien.",
      technicalInsight:
        "Disiplin kerja: Pragmatisme teknis mengalahkan tren sesaat. Kami memilih teknologi yang memecahkan masalah.",
      consoleLog: {
        status: "ANALYZED",
        input: "Client Business Requirements & Constraints",
        workflow: "Discovery → Architecture Design → Tech Stack Selection",
        target: "Lean, maintainable, scalable digital system",
      },
    },
    {
      id: "stage-03",
      num: "03",
      code: "THE_IDENTITY",
      title: "Asal Nama: Filosofi Fractal + Base",
      leadText: "Kembali ke fundamental bukanlah kemunduran, melainkan metode pertumbuhan yang sejati.",
      body: "Nama Fractabase berakar dari kebiasaan teknis para pendiri (Bryan dan co-founder): setiap kali menyentuh level kompleksitas baru dalam pemrograman, mereka selalu kembali memperkokoh pemahaman fundamental (the base) sebelum melangkah lebih jauh. Pola ini mencerminkan struktur fraktal di alam—di mana pola dasar berulang harmonis di setiap tingkatan skala yang membesar.",
      technicalInsight:
        "Catatan Brand: Base melambangkan fondasi yang stabil dan kokoh; Fractal melambangkan modularitas dan skalabilitas yang berkesinambungan.",
      consoleLog: {
        status: "INITIALIZED",
        foundation: "Rock-solid Core, Clean Architecture, High Usability",
        scaling: "Recursive modularity across expanding user demand",
        target: "Long-term client asset that thrives over time",
      },
    },
  ];
  const currentStage = stages[activeStageIndex];

  const handleStageSelect = (idx, shouldScroll = false) => {
    setActiveStageIndex(idx);
    if (consoleDisplayRef.current) {
      gsap.fromTo(
        consoleDisplayRef.current,
        { opacity: 0.4, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
      );
    }

    if (shouldScroll && containerRef.current) {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      if (isDesktop) {
        const milestoneElements = containerRef.current.querySelectorAll(".story-milestone-block");
        if (milestoneElements[idx]) {
          milestoneElements[idx].scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Instant reveal for all milestone blocks
      const milestoneElements = document.querySelectorAll(".story-milestone-block");
      milestoneElements.forEach((el) => {
        gsap.set(el, { opacity: 1, y: 0 });
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Observe each narrative milestone block on scroll
      const milestoneElements = gsap.utils.toArray(".story-milestone-block");

      milestoneElements.forEach((el, index) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => handleStageSelect(index),
          onEnterBack: () => handleStageSelect(index),
        });

        // Smooth scrubbed parallax lift from below (opacity transparent to full)
        gsap.fromTo(
          el,
          { opacity: 0.15, y: 55 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 60%",
              scrub: 0.1,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="sejarah-kami"
        ref={containerRef}
        className="relative py-28 sm:py-32 border-b border-line/60 bg-background/50"
      >
        <div className="section-container px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <Heading
            hasTagline={true}
            taglineText="-/ SEJARAH & LATAR BELAKANG"
            titleClass="mt-2 max-w-3xl tracking-tight leading-tight"
            title="Mengapa Fractabase Interactive Didirikan"
            paragraphClass="max-w-4xl"
            paragraph="Industri perangkat lunak sering kali terjebak di antara dua kutub ekstrem: software template siap pakai yang kaku dan membatasi alur bisnis, atau konsultansi enterprise raksasa dengan biaya fantastis dan sistem yang sengaja dibuat terlalu rumit. Fractabase hadir untuk mengisi celah tersebut."
          />

          {/* Dual Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Continuous Chronicle Conduit */}
            <div className="lg:col-span-7 space-y-12 relative pl-6 ms-4 sm:pl-10 border-l-2 border-line">
              {stages.map((stage, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <div
                    key={stage.id}
                    onClick={() => handleStageSelect(idx, true)}
                    className={`story-milestone-block cursor-pointer relative transition-all duration-300 group ${
                      isActive ? "opacity-100" : "opacity-75 hover:opacity-100"
                    }`}
                  >
                    {/* Timeline Conduit Node Marker */}
                    <div
                      className={`absolute -translate-x-10 sm:-translate-x-15 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-primary border-surface dark:border-dark-surface shadow-md"
                          : "bg-surface dark:bg-dark-surface border-line group-hover:border-primary"
                      }`}
                    >
                      <span className={`font-mono text-sm font-bold ${isActive ? "text-dark" : "text-primary"}`}>
                        {stage.num}
                      </span>
                    </div>

                    {/* Stage Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`font-mono text-xs font-bold text-primary relative after:absolute after:h-0.5 after:-right-1.5 after:transition-all duration-1000 after:-bottom-1 after:bg-tertiary ${isActive ? "after:w-3/4" : "after:w-1/2"}`}
                      >
                        TAHAP {stage.num}
                      </span>
                      <span className="text-secondary-color/40">&bull;</span>
                      <span className="font-mono text-xs text-secondary font-semibold">{stage.code}</span>
                    </div>

                    {/* Title & Core Lead */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary-color tracking-tight mb-3 group-hover:text-primary transition-colors">
                      {stage.title}
                    </h3>

                    <p className="text-base font-semibold text-secondary-soft mb-4 leading-snug">
                      &ldquo;{stage.leadText}&rdquo;
                    </p>

                    {/* Factual Narrative Body */}
                    <p className="text-sm sm:text-base text-secondary-color leading-relaxed mb-6">{stage.body}</p>

                    {/* Technical Insight Callout */}
                    <div className="p-4 rounded-xl bg-surface dark:bg-dark-surface border-l-4 border-primary border flex items-start gap-3.5">
                      <Icons.Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm font-semibold text-primary-color leading-relaxed">
                        {stage.technicalInsight}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Sticky Console */}
            <div className="lg:col-span-5 w-full self-start sticky top-28">
              <Card variant="glass" hoverable={false} padding="md" className="shadow-2xl">
                {/* Console Window Header */}
                <CardHeader hasDivider className="pb-4 mb-6">
                  <div className="flex items-center gap-2 font-mono text-xs text-secondary-color">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ARCHITECTURE_LOGS.EXE</span>
                  </div>

                  <span className="font-mono text-xs text-primary font-bold px-2.5 py-1 rounded bg-primary/10 border border-primary/20">
                    PHASE 0{activeStageIndex + 1} / 03
                  </span>
                </CardHeader>

                {/* Dynamic Console Telemetry Screen */}
                <div ref={consoleDisplayRef} className="space-y-5">
                  {/* Diagnostic State Header */}
                  <div className="p-3.5 rounded-xl bg-surface dark:bg-dark-surface-alt border border-line flex items-center justify-between font-mono text-xs">
                    <span className="text-secondary-color">DIAGNOSTIC_STATE:</span>
                    <span className="text-primary font-bold">{currentStage.consoleLog.status}</span>
                  </div>

                  {/* Stage 01 Specific Visual: Comparison Diagnostic */}
                  {activeStageIndex === 0 && (
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-surface dark:bg-dark-surface-alt border-l-4 border-red-400 border">
                        <p className="text-xs font-mono text-red-400 font-bold mb-1">[!] KENDALA SOFTWARE TEMPLATE</p>

                        <p className="text-xs text-secondary-color leading-relaxed">
                          Workflow bisnis klien dipaksa mengalah pada fitur cetak ulang yang kaku dan tidak dapat
                          disesuaikan.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-surface dark:bg-dark-surface-alt border-l-4 border-primary border">
                        <p className="text-xs font-mono text-primary font-bold mb-1">[&check;] SOLUSI FRACTABASE</p>

                        <p className="text-xs text-secondary-color leading-relaxed">
                          Rekayasa software built-to-spec yang 100% mengikuti cara kerja dan kebutuhan riil operasional
                          Anda.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Stage 02 Specific Visual: Understand First Pipeline */}
                  {activeStageIndex === 1 && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3.5 rounded-xl bg-surface dark:bg-dark-surface-alt border-l-4 border-secondary border">
                        <span className="text-secondary block text-[10px] font-bold mb-1">// LANGKAH 1: DISCOVERY</span>

                        <span className="text-primary-color font-semibold">
                          Identifikasi hambatan operasional &amp; kebutuhan riil
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-surface dark:bg-dark-surface-alt border-l-4 border-primary border">
                        <span className="text-primary block text-[10px] font-bold mb-1">// LANGKAH 2: PERENCANAAN</span>

                        <span className="text-primary-color font-semibold">
                          Pilih teknologi paling efisien tanpa over-engineering
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-surface dark:bg-dark-surface-alt border-l-4 border-tertiary border">
                        <span className="text-tertiary block text-[10px] font-bold mb-1">// LANGKAH 3: EKSEKUSI</span>

                        <span className="text-primary-color font-semibold">
                          Pembangunan bertahap, modular, dan teruji
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Stage 03 Specific Visual: The Fractal + Base Architecture */}
                  {activeStageIndex === 2 && (
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-surface dark:bg-dark-surface-alt border-l-4 border-primary border">
                        <p className="text-xs font-mono text-primary font-bold mb-1">THE &quot;BASE&quot; (FONDASI)</p>

                        <p className="text-xs text-secondary-color leading-relaxed">
                          Penguasaan fundamental logika, arsitektur bersih, dan keandalan sistem yang kokoh.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-surface dark:bg-dark-surface-alt border-l-4 border-secondary border">
                        <p className="text-xs font-mono text-secondary font-bold mb-1">
                          THE &quot;FRACTAL&quot; (SKALABILITAS)
                        </p>

                        <p className="text-xs text-secondary-color leading-relaxed">
                          Pola modular yang berulang stabil seiring meningkatnya skala bisnis dan jumlah pengguna.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Console Log Metadata Summary */}
                  <div className="p-4 rounded-2xl bg-surface dark:bg-dark-surface-alt border border-line font-mono text-xs space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-secondary-color">OUTPUT_TARGET:</span>
                      <span className="text-primary font-medium text-right text-[11px]">
                        {currentStage.consoleLog.target}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interactive Stage Selector Controls */}
                <div className="mt-8 pt-6 border-t border-line grid grid-cols-3 gap-2">
                  {stages.map((st, i) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => handleStageSelect(i, true)}
                      className={`py-2 px-2.5 rounded-xl font-mono text-xs font-semibold transition-all ${
                        activeStageIndex === i
                          ? "bg-primary text-dark shadow-md shadow-primary/20 cursor-auto"
                          : "bg-surface dark:bg-dark-surface-alt text-secondary-color hover:text-primary border border-line cursor-pointer"
                      }`}
                    >
                      TAHAP 0{i + 1}
                    </button>
                  ))}
                </div>

                <p className="mt-4 text-xs font-mono text-center text-secondary-color/80 italic">
                  Klik tahap di atas atau scroll narasi di samping untuk melihat log
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(AboutStorySection);
