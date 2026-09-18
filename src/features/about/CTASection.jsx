import { useEffect, useRef, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Icons } from "../../components/common/Icons";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const AboutCTASection = () => {
  const containerRef = useRef(null);
  const terminalTextRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Instant reveal without animation
      gsap.set([leftColRef.current, rightColRef.current], { opacity: 1, y: 0 });
      if (terminalTextRef.current) {
        terminalTextRef.current.textContent = "connect --target=fractabase_engineering --mode=partnership";
      }
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Left column scrubbed parallax lift from below
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0.15, y: 60 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 88%",
            end: "top 55%",
            scrub: 1.2,
            onEnter: () => {
              if (terminalTextRef.current) {
                gsap.to(terminalTextRef.current, {
                  duration: 2.0,
                  text: {
                    value: "connect --target=fractabase_engineering --mode=partnership",
                    delimiter: "",
                  },
                  ease: "none",
                });
              }
            },
          },
        },
      );

      // 2. Right column scrubbed parallax lift from below with differential depth
      gsap.fromTo(
        rightColRef.current,
        { opacity: 0.15, y: 80 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: 1.4,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-28 sm:py-32 bg-background overflow-hidden border-t-2 border-line"
    >
      <div className="section-container px-4 sm:px-6 lg:px-8">
        {/* Top Terminal Status Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-16 border-b border-line font-mono text-xs">
          <div className="flex items-center gap-2.5 text-primary font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span>GATEWAY_STATUS: READY // DIRECT_ARCHITECT_ACCESS</span>
          </div>
          <span className="text-secondary-color">SYSTEM_PROTOCOL: DISCOVERY_FIRST</span>
        </div>

        {/* Monumental Split Command Gateway */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Monumental Manifesto & Terminal */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/50 text-sm font-mono font-semibold text-secondary">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span>PARTNERSHIP &amp; CONSULTATION GATEWAY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-color tracking-tight leading-[1.15]">
              Punya Masalah yang Ingin Diterjemahkan Menjadi <span className="text-primary">Software Andal?</span>
            </h2>

            <p className="text-base sm:text-lg text-secondary-color leading-relaxed max-w-2xl">
              Dari ide awal, digitalisasi proses bisnis UMKM, prototipe tervalidasi untuk startup, hingga modernisasi
              sistem internal perusahaan—kami siap menjadi partner rekayasa perangkat lunak Anda. Kami memahami alur
              kerja Anda sebelum menentukan baris kode.
            </p>

            {/* Live Terminal Command Line with TextPlugin */}
            <div className="p-4 rounded-xl bg-surface dark:bg-dark-surface border border-line font-mono text-xs text-secondary-color flex items-center gap-3 shadow-inner max-w-xl">
              <span className="text-primary font-bold">&gt;</span>
              <span ref={terminalTextRef} className="text-primary-color font-semibold">
                awaiting_connection_request...
              </span>
            </div>

            {/* 3 Core Trust Guarantees */}
            <div className="pt-6 border-t border-line space-y-3 font-mono text-xs text-secondary-color">
              <div className="flex items-center gap-2.5">
                <Icons.Shield className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  <strong>Kerahasiaan Terjamin:</strong> NDA aktif &amp; 100% hak kekayaan intelektual milik klien.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Icons.Check className="w-4 h-4 text-primary shrink-0" />
                <span>
                  <strong>Akses Engineer Langsung:</strong> Sesi discovery dipimpin oleh software architect, bukan sales
                  agen.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Icons.Code className="w-4 h-4 text-primary shrink-0" />
                <span>
                  <strong>Estimasi Built-to-Spec:</strong> Ruang lingkup dan timeline yang proporsional tanpa biaya
                  tersembunyi.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Phase Engagement Runway & Action Launchpad */}
          <div ref={rightColRef} className="lg:col-span-5 space-y-8 lg:pl-8 lg:border-l-2 lg:border-line">
            <div className="font-mono text-xs text-secondary font-bold uppercase tracking-widest flex items-center gap-2">
              <Icons.Code className="w-4 h-4 text-primary" />
              <span>TAHAPAN_KOLABORASI_REKAYASA</span>
            </div>

            {/* 3 Steps Pathway */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-primary px-2.5 py-1 rounded bg-surface dark:bg-dark-surface border border-line">
                  01
                </span>
                <div>
                  <h4 className="text-base font-bold text-primary-color mb-1">Discovery &amp; Problem Mapping</h4>
                  <p className="text-xs sm:text-sm text-secondary-color leading-relaxed">
                    Sesi diskusi mendalam untuk memetakan alur bisnis, batasan teknis, dan target luaran sistem.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-secondary px-2.5 py-1 rounded bg-surface dark:bg-dark-surface border border-line">
                  02
                </span>
                <div>
                  <h4 className="text-base font-bold text-primary-color mb-1">Arsitektur &amp; Estimasi Transparan</h4>
                  <p className="text-xs sm:text-sm text-secondary-color leading-relaxed">
                    Perumusan spesifikasi teknis, rancangan tech stack, serta estimasi milestone yang jelas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-tertiary px-2.5 py-1 rounded bg-surface dark:bg-dark-surface border border-line">
                  03
                </span>
                <div>
                  <h4 className="text-base font-bold text-primary-color mb-1">Iterative Engineering &amp; Delivery</h4>
                  <p className="text-xs sm:text-sm text-secondary-color leading-relaxed">
                    Pengembangan modular dengan update berkala, pengujian ketat, hingga deployment produksi.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-line space-y-3.5">
              <a
                href="/#Contact"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-dark font-bold text-base shadow-lg shadow-primary/20 hover:bg-primary-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <span>Mulai Sesi Konsultasi Proyek</span>
                <Icons.ArrowRight className="w-5 h-5 duration-300 group-hover:translate-x-0.5" />
              </a>

              <a
                href="/services"
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-surface dark:bg-dark-surface text-primary-color border border-line hover:border-primary/50 font-semibold text-sm hover:bg-primary/20 transition-all duration-300 group"
              >
                <span>Eksplorasi Katalog Solusi Digital</span>
                <Icons.ExternalLink className="w-4 h-4 text-primary duration-300 group-hover:translate-x-0.5 group-hover:-translate-0.5 group-hover:scale-110" />
              </a>

              <div className="text-center font-mono text-[11px] text-secondary-color pt-2">
                Waktu respon rata-rata tim: &lt; 24 jam kerja
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutCTASection);
