import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, categoryLabels } from "../../data/projects.js";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardBadge,
} from "../../components/common/Card.jsx";
import { Icons } from "../../components/common/Icons.jsx";
import { CornerOverlay } from "../../components/common/CornerOverlay.jsx";
import { getCategoryStyle, renderHighlight } from "../../utils/projectHelpers.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsGrid({ prefersReducedMotion = false }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [brokenImages, setBrokenImages] = useState({});
  const gridRef = useRef(null);

  const onImgError = (id) => setBrokenImages((prev) => ({ ...prev, [id]: true }));

  // Filtering via React state before render
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Entrance animation: fade + slight translateY, light stagger (~60ms), triggered once only
  useEffect(() => {
    if (prefersReducedMotion) return;

    const cards = gridRef.current?.querySelectorAll(".project-grid-card");
    const frames = gridRef.current?.querySelectorAll(".project-parallax-frame");
    if (!cards || cards.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06, // ~60ms stagger between cards
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            once: true, // Triggered once only, don't re-trigger on scroll up/down
          },
        },
      );

      // ========================================================
      // MULTI-PLANE SCROLL PARALLAX (continuous, bidirectional)
      // Plane 1 — card frame: horizontal drift per grid column
      // Plane 2 — thumbnail media: translates inside its overflow mask
      // Plane 3 — card content: counter-drifts at a different rate
      // NOTE: the Card primitive itself is never tilted; all motion lives on
      // the wrapper + inner media/content layers.
      // ========================================================
      if (frames && frames.length > 0) {
        const framesArray = Array.from(frames);

        // ---- Plane 1 (desktop only): asymmetric per-column frame drift ----
        // Disabled below md so the single-column layout is never pushed
        // outside the viewport. Reduced tier at md keeps cards clear of the
        // section container edges; full drift from lg upward.
        const mm = gsap.matchMedia();

        const applyDrift = (driftAmounts, scrubs) => {
          framesArray.forEach((frame, idx) => {
            const col = idx % 3;
            gsap.fromTo(
              frame,
              { x: driftAmounts[col], scale: 1 },
              {
                x: -driftAmounts[col],
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: frame,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: scrubs[col],
                },
              },
            );
          });
        };

        mm.add("(min-width: 620px) and (max-width: 1023px)", () => {
          applyDrift([-10, 0, 10], [0.26, 0.3, 0.34]);
        });

        mm.add("(min-width: 1024px)", () => {
          applyDrift([-24, 0, 24], [0.22, 0.3, 0.38]);
        });

        // ---- Plane 2 + 3 (all viewports): media vs content counter-drift ----
        framesArray.forEach((frame) => {
          // Plane 2 — media drifts vertically INSIDE the thumbnail mask.
          // Scale must cover the worst-case yPercent shift, otherwise the
          // mask edge is exposed and the thumbnail background shows through:
          // scale 1.2 gives 10% overhang per side, yPercent is capped at 7.
          const media = frame.querySelector("[data-parallax-media]");
          if (media) {
            gsap.fromTo(
              media,
              { yPercent: -7, scale: 1.2 },
              {
                yPercent: 7,
                scale: 1.28,
                ease: "none",
                scrollTrigger: {
                  trigger: frame,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.18,
                },
              },
            );
          }

          // Plane 3 — content counter-drifts vertically against the media.
          // Capped at 14px so the shift always stays inside the card's own
          // padding (24px) and never exposes the card edge via overflow-hidden.
          const content = frame.querySelector("[data-parallax-content]");
          if (content) {
            gsap.fromTo(
              content,
              { y: 14 },
              {
                y: -14,
                ease: "none",
                scrollTrigger: {
                  trigger: frame,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.45,
                },
              },
            );
          }
        });

        // Dynamic will-change lifecycle (freed once the card leaves the viewport)
        framesArray.forEach((frame) => {
          ScrollTrigger.create({
            trigger: frame,
            start: "top bottom",
            end: "bottom top",
            onEnter: () => gsap.set(frame, { willChange: "transform" }),
            onEnterBack: () => gsap.set(frame, { willChange: "transform" }),
            onLeave: () => gsap.set(frame, { willChange: "auto" }),
            onLeaveBack: () => gsap.set(frame, { willChange: "auto" }),
          });
        });
      }
    }, gridRef);

    return () => ctx.revert();
  }, [activeCategory, filteredProjects, prefersReducedMotion]);

  return (
    <>
      <section className="relative pb-16 lg:pb-24">
        <div className="section-container">
          {/* 3. Filter pills: All Projects + one button per key in categoryLabels in object order */}
          <div className="flex flex-col items-center gap-3 mb-4 p-4 bg-background sticky top-16 md:top-17 z-10">
            <div
              role="tablist"
              aria-label="Filter kategori project"
              className="flex flex-wrap items-center justify-center gap-2"
            >
              <button
                type="button"
                role="tab"
                aria-pressed={activeCategory === "all"}
                onClick={() => setActiveCategory("all")}
                className={
                  "px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary " +
                  (activeCategory === "all"
                    ? "bg-primary-color text-surface border-primary-color shadow-sm"
                    : "bg-surface text-secondary-color border-line hover:border-secondary/40")
                }
              >
                All Projects
              </button>

              {Object.entries(categoryLabels).map(([key, label]) => {
                const active = activeCategory === key;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-pressed={active}
                    onClick={() => setActiveCategory(key)}
                    className={
                      "px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary " +
                      (active
                        ? "bg-primary-color text-surface border-primary-color shadow-sm"
                        : "bg-surface text-secondary-color border-line hover:border-secondary/40")
                    }
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Filter results counter telemetry */}
            <div className="text-[11px] font-mono text-secondary-color/70 tracking-wider">
              Menampilkan {filteredProjects.length} dari {projects.length} solusi rekayasa
            </div>
          </div>

          {/* 4. Card grid: 3 columns desktop, 2 columns tablet (<960px), 1 column mobile (<620px) */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-surface/50 rounded-2xl border border-line">
              <p className="text-secondary-color text-base font-medium">
                Tidak ada project yang ditemukan untuk kategori ini.
              </p>
            </div>
          ) : (
            <div
              ref={gridRef}
              className="grid grid-cols-1 min-[620px]:grid-cols-2 min-[960px]:grid-cols-3 gap-6 lg:gap-8 items-stretch"
            >
              {filteredProjects.map((project) => {
                const catStyle = getCategoryStyle(project.category);
                return (
                  <div key={project.id} className="project-parallax-frame h-full">
                    <Card as="article" variant="default" padding="none" className="project-grid-card h-full">
                      {/* 1. Thumbnail: touches card borders (full bleed top/left/right), with viewfinder corner brackets */}
                      <div
                        className={`relative aspect-video w-full overflow-hidden border-b border-line ${catStyle.thumbBg}`}
                      >
                        <CornerOverlay showBrackets={true} />

                        {/* Category Pill: Inside thumbnail at the top-right corner */}
                        <div className="absolute top-3 right-3 z-10">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold font-mono border backdrop-blur-md shadow-sm ${catStyle.pill}`}
                          >
                            {project.categoryLabel}
                          </span>
                        </div>

                        {/* Media plane: translated by scroll inside the thumbnail mask */}
                        <div data-parallax-media className="absolute inset-0">
                          {project.image && !brokenImages[project.id] ? (
                            <img
                              src={project.image}
                              alt={`Mockup ${project.title}`}
                              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                              loading="lazy"
                              onError={() => onImgError(project.id)}
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center p-4">
                              <span className="text-center text-xs font-semibold text-secondary">{project.title}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Content plane: counter-drifts against the media plane */}
                      <CardContent data-parallax-content className="p-5 sm:p-6 flex flex-col justify-between">
                        {/* 2. Client Header Row */}
                        <CardHeader hasDivider={false}>
                          <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider truncate">
                            {project.client}
                          </span>
                        </CardHeader>

                        {/* 3. Project Title using CardTitle */}
                        <CardTitle size="sm" className="leading-snug tracking-tight">
                          {project.title}
                        </CardTitle>

                        {/* 4. Description using CardDescription (2-3 lines, line-clamp-3) */}
                        <CardDescription className="line-clamp-3 mb-4">{project.description}</CardDescription>

                        {/* 5. Result box: bordered/tinted box using tertiary success color at low opacity */}
                        <div className="mb-4 flex items-start gap-2.5 rounded-xl border border-tertiary/40 bg-tertiary/15 p-3.5">
                          <Icons.TrendingUp className="w-4 h-4 shrink-0 text-tertiary mt-0.5" />
                          <p className="text-xs sm:text-sm font-medium text-primary-color dark:text-dark-text leading-relaxed">
                            <strong className="font-bold text-tertiary">Hasil Nyata: </strong>
                            {renderHighlight(project.result)}
                          </p>
                        </div>

                        {/* 6. Tech stack chips using CardBadge */}
                        <div className="flex flex-wrap gap-1.5">
                          {(project.techStack || []).map((tech) => (
                            <CardBadge key={tech} variant="secondary" className="text-[11px] font-mono">
                              {tech}
                            </CardBadge>
                          ))}
                        </div>

                        {/* 7. CTA row: View project details → separated by top border using CardFooter */}
                        <CardFooter
                          hasDivider={true}
                          className="pt-4 border-t border-line mt-auto hidden items-center justify-between"
                        >
                          <a
                            href={project.ctaLink || "#"}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary-soft transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                          >
                            <span>View project details</span>
                            <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </a>
                        </CardFooter>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
