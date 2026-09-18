import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutNarrative } from "../../data/aboutData";
import { Icons } from "../../components/common/Icons";
import { Card, CardDescription } from "../../components/common/Card";
import Object3DSpace from "./Object3DSpace";
import { Heading } from "../../components/common/Heading";

gsap.registerPlugin(ScrollTrigger);

export default function AboutVisionMissionSection() {
  const containerRef = useRef(null);
  const visionRef = useRef(null);
  const missionHeaderRef = useRef(null);
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);

  const missions = aboutNarrative.visionMission.missions;
  const clientSolutionsMissions = missions.slice(0, 4);
  const engineeringPartnershipMissions = missions.slice(4, 8);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Vision Monolith scrubbed parallax lift from below
      gsap.fromTo(
        visionRef.current,
        { opacity: 0.1, y: 70, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: 1.2,
          },
        },
      );

      // 2. Mission Header scrubbed lift
      gsap.fromTo(
        missionHeaderRef.current,
        { opacity: 0.15, y: 45 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: missionHeaderRef.current,
            start: "top 92%",
            end: "top 70%",
            scrub: 1.2,
          },
        },
      );

      // 3. Desktop Differential Parallax between Track 1 and Track 2
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        if (track2Ref.current) {
          gsap.to(track2Ref.current, {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: track1Ref.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }
      });

      // 4. Scrubbed Parallax Reveal from below for each Mission Telemetry item
      const missionItems = gsap.utils.toArray(".mission-telemetry-row");
      missionItems.forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0.15, y: 40 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 92%",
              end: "top 72%",
              scrub: 1.2,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={containerRef} className="relative py-28 sm:py-32 border-b border-line/60 bg-background/20">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          {/* Section Category Tag */}
          <Heading
            hasTagline={true}
            taglineText="-/ VISI & MISI PERUSAHAAN"
            title="Visi Jangka Panjang &amp; 8 Misi Rekayasa Nyata"
            paragraphClass="max-w-4xl"
            paragraph="Arah strategis dan komitmen operasional yang kami jalankan dalam setiap pengembangan perangkat lunak, tanpa
            retorika kosong atau janji yang tidak realistis."
          />

          {/* 1. VISI KAMI — Open Monumental Horizon Manifesto */}
          <div ref={visionRef} className="pb-20 border-b-2 border-line">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* Left Monolith Identifier */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
                <div>
                  <span className="font-mono text-xs font-bold text-secondary tracking-widest uppercase mb-2 flex items-center gap-2">
                    <Icons.Code className="w-4 h-4 text-primary" /> VISI_STRATEGIS_FRACTABASE
                  </span>

                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary-color tracking-tighter block">
                    VISI
                  </span>
                </div>

                <Object3DSpace />

                <div className="mt-8 pt-6 border-t border-line space-y-3 font-mono text-xs text-secondary-color">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-primary-color font-semibold">STATUS: ACTIVE_DIRECTIVE</span>
                  </div>

                  <div>PRINSIP: Understand First, Build Second</div>
                  <div>FOKUS: Solusi Fungsional, Efisien &amp; Terukur</div>
                </div>
              </div>

              {/* Right Monumental Vision Content */}
              <div className="lg:col-span-8 pl-0 lg:pl-8 lg:border-l-2 lg:border-line">
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-color italic font-heading tracking-tight leading-tight mb-8">
                  &ldquo;{aboutNarrative.visionMission.visionStatement}&rdquo;
                </blockquote>

                <p className="text-base sm:text-lg text-secondary-color leading-relaxed mb-8">
                  {aboutNarrative.visionMission.visionSub}
                </p>

                {/* 4 Client Spectrum Indicators */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-line font-mono text-xs">
                  <Card hoverable={false} padding="xs" as="div">
                    <span className="text-[10px] text-primary block font-bold">SPECTRUM 01</span>
                    <CardDescription className="text-primary-color font-semibold mt-1">Perorangan</CardDescription>
                  </Card>

                  <Card hoverable={false} padding="xs" as="div">
                    <span className="text-[10px] text-primary block font-bold">SPECTRUM 02</span>
                    <CardDescription className="text-primary-color font-semibold mt-1">UMKM</CardDescription>
                  </Card>

                  <Card hoverable={false} padding="xs" as="div">
                    <span className="text-[10px] text-secondary block font-bold">SPECTRUM 03</span>
                    <CardDescription className="text-primary-color font-semibold mt-1">Startup</CardDescription>
                  </Card>

                  <Card hoverable={false} padding="xs" as="div">
                    <span className="text-[10px] text-tertiary block font-bold">SPECTRUM 04</span>
                    <CardDescription className="text-primary-color font-semibold mt-1">Korporat</CardDescription>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 8 MISI OPERASIONAL — Dual-Track Telemetry Ledger */}
          <div className="pt-20">
            <div
              ref={missionHeaderRef}
              className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 mb-12 border-b border-line"
            >
              <div>
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-secondary uppercase tracking-widest mb-2">
                  <Icons.Code className="w-4 h-4 text-primary" />
                  <span>OPERATIONAL_MISSIONS</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-color tracking-tight">
                  {aboutNarrative.visionMission.missionTitle}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-secondary-color max-w-md leading-relaxed">
                Delapan pilar misi nyata yang dirumuskan langsung dari Master Context untuk menjamin kualitas,
                transparansi, dan relevansi teknis.
              </p>
            </div>

            {/* Dual-Track Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Track 1 */}
              <div ref={track1Ref} className="space-y-0 divide-y divide-line border-y border-line">
                <div className="py-3 px-2 font-mono text-[11px] font-bold text-primary uppercase tracking-widest bg-surface/40 dark:bg-dark-surface/40 flex items-center justify-between">
                  <span>TRACK_01 // SOLUSI KLIEN &amp; SEKTOR BISNIS</span>
                  <span>MSN_01 — MSN_04</span>
                </div>

                {clientSolutionsMissions.map((m) => (
                  <div
                    key={m.code}
                    className="mission-telemetry-row py-6 px-2 sm:px-4 group hover:bg-surface/60 dark:hover:bg-dark-surface-alt/40 transition-colors"
                  >
                    <div className="flex items-center justify-between font-mono text-xs mb-2">
                      <span className="font-bold text-primary">{m.code}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-surface dark:bg-dark-surface border border-line text-secondary font-semibold">
                        {m.category}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-xl font-bold text-primary-color tracking-tight mb-2 group-hover:text-primary transition-colors">
                      {m.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-secondary-color leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>

              {/* Track 2 */}
              <div ref={track2Ref} className="space-y-0 divide-y divide-line border-y border-line">
                <div className="py-3 px-2 font-mono text-[11px] font-bold text-secondary uppercase tracking-widest bg-surface/40 dark:bg-dark-surface/40 flex items-center justify-between">
                  <span>TRACK_02 // DISIPLIN REKAYASA &amp; KEMITRAAN</span>
                  <span>MSN_05 — MSN_08</span>
                </div>

                {engineeringPartnershipMissions.map((m) => (
                  <div
                    key={m.code}
                    className="mission-telemetry-row py-6 px-2 sm:px-4 group hover:bg-surface/60 dark:hover:bg-dark-surface-alt/40 transition-colors"
                  >
                    <div className="flex items-center justify-between font-mono text-xs mb-2">
                      <span className="font-bold text-secondary">{m.code}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-surface dark:bg-dark-surface border border-line text-primary font-semibold">
                        {m.category}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-xl font-bold text-primary-color tracking-tight mb-2 group-hover:text-secondary transition-colors">
                      {m.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-secondary-color leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Directive Footnote */}
            <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-secondary-color">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Seluruh misi diimplementasikan langsung pada setiap siklus pengerjaan proyek.</span>
              </span>

              <span className="text-primary font-semibold">FRACTABASE // OPERATIONAL_EXCELLENCE</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
