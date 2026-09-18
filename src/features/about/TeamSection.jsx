import { useEffect, useRef, useState, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { teamMembers, teamStats } from "../../data/team";
import { Icons } from "../../components/common/Icons";
import { Card, CardHeader, CardTitle, CardFooter } from "../../components/common/Card";
import { Heading } from "../../components/common/Heading";

gsap.registerPlugin(ScrollTrigger);

const AboutTeamSection = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const talentStageRef = useRef(null);
  const statsStripRef = useRef(null);
  const spotlightContentRef = useRef(null);

  const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);
  const activeMember = teamMembers[selectedMemberIndex];

  const handleMemberSelect = (index) => {
    setSelectedMemberIndex(index);
    if (!spotlightContentRef.current) return;

    gsap.fromTo(
      spotlightContentRef.current,
      { opacity: 0.35, x: 12 },
      { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" },
    );
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Instant reveal for all elements
      gsap.set([headerRef.current, talentStageRef.current, statsStripRef.current], { opacity: 1, y: 0 });
      if (statsStripRef.current) {
        gsap.set(statsStripRef.current.children, { opacity: 1, y: 0 });
      }
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Header scrubbed lift from below
      gsap.fromTo(
        headerRef.current,
        { opacity: 0.15, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 92%",
            end: "top 68%",
            scrub: 1.2,
          },
        },
      );

      // 2. Talent Stage scrubbed lift from below
      gsap.fromTo(
        talentStageRef.current,
        { opacity: 0.15, y: 60 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: talentStageRef.current,
            start: "top 88%",
            end: "top 60%",
            scrub: 1.2,
          },
        },
      );

      // 3. Desktop Differential Parallax on Right Spotlight Card
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        if (spotlightContentRef.current) {
          gsap.to(spotlightContentRef.current, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: talentStageRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4,
            },
          });
        }
      });

      // 4. Stats strip scrubbed entrance lift from below
      if (statsStripRef.current) {
        gsap.fromTo(
          statsStripRef.current.children,
          { opacity: 0.1, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsStripRef.current,
              start: "top 95%",
              end: "top 72%",
              scrub: 1.2,
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="relative min-h-screen py-28 sm:py-32 border-b border-line/60 bg-background/30"
      >
        <div className="section-container px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <Heading
            hasTagline={true}
            taglineText="-/ ENGINEERING TALENT & FOUNDERS"
            title="Di Balik Setiap Arsitektur & Baris Kode"
            paragraph="Kombinasi pola pikir strategis, keahlian rekayasa sistem mendalam, dan empati desain untuk menghadirkan
              software yang benar-benar memecahkan masalah."
          />

          {/* Talent Command Console */}
          <div ref={talentStageRef} className="pb-12 mb-12 border-b-2 border-line">
            {/* HUD Status Bar */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-line font-mono text-xs">
              <div className="flex items-center gap-2 text-secondary font-bold">
                <Icons.Code className="w-4 h-4 text-primary" />
                <span>TALENT_COMMAND_CONSOLE // FRACTABASE_ENGINEERING</span>
              </div>

              <span className="text-secondary-color hidden sm:inline">SELECT_PERSONEL TO INSPECT PROFILE</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-8">
                {/* Personnel Selector Rows */}
                <div className="divide-y divide-line border-y border-line">
                  {teamMembers.map((member, idx) => {
                    const isSelected = selectedMemberIndex === idx;
                    const accent = member.avatarPlaceholder?.accent || "primary";

                    const avatarColorClass = isSelected
                      ? accent === "secondary"
                        ? "bg-secondary text-dark border-secondary"
                        : accent === "tertiary"
                          ? "bg-tertiary text-dark border-tertiary"
                          : "bg-primary text-dark border-primary"
                      : accent === "secondary"
                        ? "bg-surface dark:bg-dark-surface text-secondary border-secondary/40"
                        : accent === "tertiary"
                          ? "bg-surface dark:bg-dark-surface text-tertiary border-tertiary/40"
                          : "bg-surface dark:bg-dark-surface text-primary border-primary/40";

                    const roleCodeColorClass =
                      accent === "secondary"
                        ? "text-secondary"
                        : accent === "tertiary"
                          ? "text-tertiary"
                          : "text-primary";

                    return (
                      <>
                        <button
                          key={member.id}
                          type="button"
                          onClick={() => handleMemberSelect(idx)}
                          className={`w-full text-left py-4 px-3 sm:px-4 transition-all flex items-center gap-4 ${
                            isSelected
                              ? "bg-primary/10 border-l-4 border-primary pl-4"
                              : "hover:bg-surface/60 dark:hover:bg-dark-surface-alt/60"
                          }`}
                        >
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border-2 font-mono font-bold text-base transition-colors ${avatarColorClass}`}
                          >
                            {member.avatarPlaceholder.initials}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-bold text-primary-color truncate">{member.name}</h4>
                              <span
                                className={`text-[10px] font-mono px-2 py-0.5 rounded bg-surface dark:bg-dark-surface-alt border border-line shrink-0 ml-2 font-semibold ${roleCodeColorClass}`}
                              >
                                {member.avatarPlaceholder.roleCode}
                              </span>
                            </div>
                            <p className="text-xs text-secondary-color truncate mt-0.5">{member.role}</p>
                          </div>
                        </button>
                      </>
                    );
                  })}
                </div>

                {/* Engineering Standards */}
                <Card
                  hoverable={false}
                  padding="none"
                  as="div"
                  className="p-6 bg-surface/50 dark:bg-dark-surface/50 border border-line"
                >
                  <div className="space-y-3 font-mono text-xs">
                    <span className="text-[11px] font-bold text-primary tracking-widest uppercase block">
                      // DISIPLIN_KOLABORASI_TIM
                    </span>

                    <div className="space-y-2 text-secondary-color">
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-bold">&gt;</span>
                        <span>
                          <strong>Akses Langsung:</strong> Klien berdiskusi langsung dengan engineer pelaksana tanpa
                          perantara.
                        </span>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="text-primary font-bold">&gt;</span>
                        <span>
                          <strong>Kode Bersih:</strong> 100% repositori terdokumentasi dan menjadi hak milik klien
                          penuh.
                        </span>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="text-primary font-bold">&gt;</span>
                        <span>
                          <strong>Kerahasiaan:</strong> Perlindungan NDA dan integritas data klien terjamin.
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right Column: Active Engineer Deep Spotlight */}
              <Card ref={spotlightContentRef} hoverable={false} padding="lg" className="lg:col-span-7 min-h-110">
                <div>
                  <CardHeader hasDivider className="flex-wrap pb-6 mb-6">
                    <div>
                      <span className="font-mono text-xs font-bold text-primary block mb-1">
                        {activeMember.avatarBadge}
                      </span>
                      <CardTitle size="lg" className="mb-0">
                        {activeMember.name}
                      </CardTitle>
                      <p className="text-sm font-mono text-secondary font-semibold mt-1">{activeMember.role}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={activeMember.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl border border-line bg-surface dark:bg-dark-surface text-primary-color hover:text-primary hover:border-primary/50 transition-colors"
                        aria-label="GitHub Profile"
                      >
                        <Icons.Github className="w-5 h-5" />
                      </a>

                      <a
                        href={activeMember.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl border border-line bg-surface dark:bg-dark-surface text-primary-color hover:text-primary hover:border-primary/50 transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <Icons.LinkedIn className="w-5 h-5" />
                      </a>
                    </div>
                  </CardHeader>

                  <div className="mb-6">
                    <p className="text-sm font-mono text-secondary italic mb-3">&ldquo;{activeMember.tagline}&rdquo;</p>
                    <p className="text-sm sm:text-base text-secondary-color leading-relaxed">{activeMember.bio}</p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-line/60">
                    <span className="font-mono text-[11px] text-secondary-color block">KOMPETENSI TEKNIS:</span>
                    <div className="flex flex-wrap gap-2">
                      {activeMember.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <CardFooter hasDivider className="pt-6 mt-8">
                  <span className="text-primary font-semibold">&gt; {activeMember.codeQuote}</span>
                  <span className="text-secondary-color/80 hidden sm:inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    VERIFIED_PERSONNEL
                  </span>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Team & Capability Statistics Strip */}
          <div ref={statsStripRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((item, idx) => {
              const statColor = idx === 1 ? "text-secondary" : idx === 2 ? "text-tertiary" : "text-primary";
              return (
                <div key={idx} className="flex flex-col space-y-1 pl-4 border-l-2 border-line">
                  <span className={`text-3xl sm:text-4xl font-black mb-1 ${statColor}`}>{item.value}</span>
                  <span className="text-sm font-bold text-primary-color">{item.label}</span>
                  <span className="text-xs text-secondary-color">{item.sub}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(AboutTeamSection);
