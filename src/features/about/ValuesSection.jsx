import { useEffect, useRef, useState, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { companyPrinciples, scopeCapabilities } from "../../data/aboutData";
import { Icons } from "../../components/common/Icons";
import {
  Card,
  CardHeader,
  CardTag,
  CardTitle,
  CardSummary,
  CardDescription,
  CardFooter,
} from "../../components/common/Card";
import { Heading } from "../../components/common/Heading";

gsap.registerPlugin(ScrollTrigger);

const getHeaderVariantColor = (variant) => {
  switch (variant) {
    case "secondary":
      return "text-secondary";
    case "tertiary":
      return "text-tertiary";
    case "primary":
    default:
      return "text-primary";
  }
};

const renderPrincipleIcon = (iconType, variant) => {
  const colorClass = getHeaderVariantColor(variant);
  switch (iconType) {
    case "users":
      return <Icons.Users className={`w-5 h-5 ${colorClass}`} />;
    case "problemSolving":
      return <Icons.ProblemSolving className={`w-5 h-5 ${colorClass}`} />;
    case "customization":
      return <Icons.Customization className={`w-5 h-5 ${colorClass}`} />;
    case "efficiency":
      return <Icons.Efficiency className={`w-5 h-5 ${colorClass}`} />;
    case "scalability":
      return <Icons.Scalability className={`w-5 h-5 ${colorClass}`} />;
    case "shield":
      return <Icons.Shield className={`w-5 h-5 ${colorClass}`} />;
    case "check":
    default:
      return <Icons.Check className={`w-5 h-5 ${colorClass}`} />;
  }
};

const getFooterLeftStyle = (variant) => {
  switch (variant) {
    case "secondary":
      return "text-secondary font-semibold";
    case "tertiary":
      return "text-tertiary font-semibold";
    case "primary":
    default:
      return "text-primary font-semibold";
  }
};

function PrincipleItemCard({ principle, colSpan = "", padding = "md", titleSize = "lg", isCompact = false }) {
  return (
    <Card padding={padding} hoverable={true} className={`principle-item-card ${colSpan}`}>
      <div>
        <CardHeader hasDivider={true} className={isCompact ? "pb-4 mb-5 sm:mb-6" : "pb-5 mb-6 sm:mb-7"}>
          <CardTag variant={principle.badgeVariant}>{principle.headerTag}</CardTag>
          <div className="shrink-0">{renderPrincipleIcon(principle.iconType, principle.badgeVariant)}</div>
        </CardHeader>

        <CardTitle size={titleSize} className={isCompact ? "mb-2" : "mb-2.5"}>
          {principle.name}
        </CardTitle>

        <CardSummary
          variant={principle.badgeVariant}
          className={isCompact ? "text-xs mb-3.5" : "text-xs sm:text-sm mb-4"}
        >
          {principle.summary}
        </CardSummary>

        <CardDescription className={isCompact ? "text-xs sm:text-sm" : "text-sm sm:text-base"}>
          {principle.description}
        </CardDescription>
      </div>

      <CardFooter
        hasDivider={true}
        className={isCompact ? "pt-5 mt-7 sm:mt-8 text-[11px] sm:text-xs" : "pt-6 mt-8 sm:mt-10 text-xs"}
      >
        <span className={getFooterLeftStyle(principle.badgeVariant)}>{principle.footerLeft}</span>
        {principle.footerRight && <span className="text-secondary-color">{principle.footerRight}</span>}
      </CardFooter>
    </Card>
  );
}

const AboutValuesSection = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);
  const capabilitiesSectionRef = useRef(null);
  const [activeScopeIndex, setActiveScopeIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Instant reveal for all elements
      gsap.set([headerRef.current, capabilitiesSectionRef.current], { opacity: 1, y: 0 });
      const cards = document.querySelectorAll(".principle-item-card");
      cards.forEach((card) => gsap.set(card, { opacity: 1, y: 0 }));
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
            scrub: 0.2,
          },
        },
      );

      // 2. Principles cards scrubbed entrance lift (Row 1, Row 2, Row 3)
      if (row1Ref.current) {
        const cards1 = row1Ref.current.querySelectorAll(".principle-item-card");
        gsap.fromTo(
          cards1,
          { opacity: 0.15, y: 45 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row1Ref.current,
              start: "top 90%",
              end: "top 62%",
              scrub: 0.2,
            },
          },
        );
      }

      if (row2Ref.current) {
        const cards2 = row2Ref.current.querySelectorAll(".principle-item-card");
        gsap.fromTo(
          cards2,
          { opacity: 0.15, y: 45 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row2Ref.current,
              start: "top 90%",
              end: "top 62%",
              scrub: 0.2,
            },
          },
        );
      }

      if (row3Ref.current) {
        const cards3 = row3Ref.current.querySelectorAll(".principle-item-card");
        gsap.fromTo(
          cards3,
          { opacity: 0.15, y: 45 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row3Ref.current,
              start: "top 90%",
              end: "top 62%",
              scrub: 0.2,
            },
          },
        );
      }

      // 3. Smooth 3D Mousemove tilt on cards (desktop only)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const cards = gsap.utils.toArray(".principle-item-card");
        cards.forEach((card) => {
          gsap.set(card, { transformPerspective: 1000 });

          const handleEnter = () => {
            // Override transition-all so GSAP can control transform instantly
            card.style.transition = "border-color 300ms, box-shadow 300ms";
          };

          const handleMove = (e) => {
            const rect = card.getBoundingClientRect();
            const normX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
            const normY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

            gsap.to(card, {
              rotateY: normX * 2.5,
              rotateX: -normY * 2.5,
              duration: 0.2,
              ease: "power1.out",
              overwrite: "auto",
            });
          };

          const handleLeave = () => {
            gsap.to(card, {
              rotateY: 0,
              rotateX: 0,
              duration: 0.5,
              ease: "power2.out",
              overwrite: "auto",
              onComplete: () => {
                // Restore transition-all after tilt returns to neutral
                card.style.transition = "";
              },
            });
          };

          card.addEventListener("mouseenter", handleEnter);
          card.addEventListener("mousemove", handleMove);
          card.addEventListener("mouseleave", handleLeave);
        });
      });

      // 4. Scope capabilities workbench scrubbed lift from below
      if (capabilitiesSectionRef.current) {
        gsap.fromTo(
          capabilitiesSectionRef.current,
          { opacity: 0.15, y: 60 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: capabilitiesSectionRef.current,
              start: "top 90%",
              end: "top 65%",
              scrub: 1.2,
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const currentScope = scopeCapabilities[activeScopeIndex];

  // Principle groups for the 2 - 3 - 2 masonry layout
  const row1Principles = companyPrinciples.slice(0, 2);
  const row2Principles = companyPrinciples.slice(2, 5);
  const row3Principles = companyPrinciples.slice(5, 7);

  return (
    <>
      <section ref={containerRef} className="relative py-28 sm:py-32 border-b border-line/60 bg-background">
        <div className="section-container px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div ref={headerRef}>
            <Heading
              hasTagline={true}
              taglineText="-/ PRINSIP KERJA & DISIPLIN TEKNIS"
              titleClass=""
              title="7 Prinsip Utama Rekayasa Software Kami"
              paragraphClass=""
              paragraph="Standar kerja dan disiplin rekayasa yang kami terapkan untuk memastikan software yang dibangun tidak hanya
            berfungsi hari ini, tetapi terus memberikan nilai nyata bagi bisnis Anda di masa depan."
            />
          </div>

          {/* Row 1: 2 Cards */}
          <div ref={row1Ref} className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 mb-7 sm:mb-8">
            <PrincipleItemCard
              key={row1Principles[0].code}
              principle={row1Principles[0]}
              colSpan="lg:col-span-7"
              padding="xl"
              titleSize="lg"
            />
            <PrincipleItemCard
              key={row1Principles[1].code}
              principle={row1Principles[1]}
              colSpan="lg:col-span-5"
              padding="lg"
              titleSize="lg"
            />
          </div>

          {/* Row 2: 3 Cards */}
          <div ref={row2Ref} className="grid grid-cols-1 lg:grid-cols-3 gap-7 sm:gap-8 mb-7 sm:mb-8">
            {row2Principles.map((principle) => (
              <PrincipleItemCard
                key={principle.code}
                principle={principle}
                padding="md"
                titleSize="default"
                isCompact={true}
              />
            ))}
          </div>

          {/* Row 3: 2 Cards */}
          <div ref={row3Ref} className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 mb-7 sm:mb-8 lg:mb-14">
            <PrincipleItemCard
              key={row3Principles[0].code}
              principle={row3Principles[0]}
              colSpan="lg:col-span-5"
              padding="lg"
              titleSize="lg"
            />
            <PrincipleItemCard
              key={row3Principles[1].code}
              principle={row3Principles[1]}
              colSpan="lg:col-span-7"
              padding="xl"
              titleSize="lg"
            />
          </div>

          {/* Scope Capabilities */}
          <div ref={capabilitiesSectionRef} className="pt-20 border-t-2 border-line">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 mb-8 border-b border-line">
              <div>
                <span className="font-mono text-xs text-secondary font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Icons.Code className="w-4 h-4 text-primary" /> SPEKTRUM_REKAYASA // SCOPE_CAPABILITIES
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-color tracking-tight">
                  Spesifikasi Kapabilitas Rekayasa Digital
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-secondary-color max-w-md leading-relaxed">
                Kami tidak terpaku pada satu framework. Arsitektur dibangun sesuai batasan nyata, skalabilitas, dan
                tujuan bisnis Anda.
              </p>
            </div>

            {/* Scope Selector */}
            <div className="grid grid-cols-2 lg:grid-cols-4 border-b-2 border-line mb-10">
              {scopeCapabilities.map((item, idx) => {
                const isActive = activeScopeIndex === idx;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveScopeIndex(idx)}
                    className={`py-5 px-4 text-left transition-all relative ${
                      isActive
                        ? "bg-surface/80 dark:bg-dark-surface border-b-4 border-secondary text-primary-color"
                        : "text-secondary-color hover:bg-surface/30 dark:hover:bg-dark-surface-alt/30 border-b-4 border-transparent"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-primary font-bold block mb-1">
                      DOMAIN // 0{idx + 1}
                    </span>

                    <span className="text-sm sm:text-base font-bold tracking-tight block">{item.title}</span>

                    {isActive && (
                      <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-tertiary animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Scope Content */}
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-line font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-primary text-dark font-bold">
                    {currentScope.id.toUpperCase()}
                  </span>
                  <span className="text-primary-color font-bold text-sm">{currentScope.title}</span>
                </div>
                <div className="flex items-center gap-4 text-secondary-color">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    STATUS: PRODUCTION_SPEC
                  </span>
                  <span className="text-primary font-semibold">DELIVERABLE: {currentScope.deliverable}</span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-secondary-color leading-relaxed max-w-4xl">
                {currentScope.scopeDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-line">
                <div className="space-y-3">
                  <span className="font-mono text-[11px] text-primary font-bold uppercase tracking-widest block">
                    [01] KAPABILITAS REKAYASA INTI
                  </span>
                  <div className="space-y-2.5">
                    {currentScope.coreFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <Icons.Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-secondary-color leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 md:pl-8 md:border-l border-line">
                  <span className="font-mono text-[11px] text-secondary font-bold uppercase tracking-widest block">
                    [02] TECH STACK &amp; TOOLS
                  </span>
                  <p className="text-xs text-secondary-color leading-relaxed mb-3">
                    Dipilih berdasarkan reliabilitas industri, bukan tren sesaat:
                  </p>
                  <div className="p-3.5 rounded-xl bg-surface dark:bg-dark-surface border border-line font-mono text-xs text-primary font-semibold">
                    {currentScope.stack}
                  </div>
                </div>

                <div className="space-y-3 md:pl-8 md:border-l border-line">
                  <span className="font-mono text-[11px] text-tertiary font-bold uppercase tracking-widest block">
                    [03] STANDAR PRODUKSI FRACTABASE
                  </span>
                  <div className="space-y-2 text-xs text-secondary-color">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Clean Code &amp; Modular Architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>100% Repository &amp; Asset Ownership</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Cross-device &amp; Accessibility Tested</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(AboutValuesSection);
