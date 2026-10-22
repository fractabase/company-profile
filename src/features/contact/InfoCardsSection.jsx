import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactChannels, afterSubmitSteps } from "../../data/contactInfo";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function InfoCardsSection() {
  const sectionRef = useRef(null);
  const rowsRef = useRef([]);
  const timelineRef = useRef(null);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const validRows = rowsRef.current.filter(Boolean);

      // Continuous scrubbed parallax drift for channels row list
      validRows.forEach((row, idx) => {
        gsap.to(row, {
          yPercent: -4 - idx * 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.2 + idx * 0.1,
          },
        });
      });

      if (timelineRef.current) {
        gsap.to(timelineRef.current, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.3,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div ref={sectionRef} className="space-y-8">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-secondary">
          <span>-/ GATEWAY_HUB</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-color tracking-tight">
          Saluran Komunikasi Langsung
        </h2>

        <p className="text-lg text-secondary-color leading-relaxed">
          Pilih kanal tercepat untuk memulai dialog dengan tim engineering kami.
        </p>
      </div>

      {/* Direct Contact Channels: ROW LIST WITH ICONS (sesuai STRUCTURE-PROJECT.md) */}
      <div className="space-y-3">
        {contactChannels.map((channel, idx) => {
          const Icon = channel.icon;
          const isAccent = channel.isAccent;
          const isCopied = copiedId === channel.id;

          return (
            <div
              key={channel.id}
              ref={(el) => (rowsRef.current[idx] = el)}
              className={`group relative p-4 sm:p-5 rounded-2xl border transition-all duration-200 bg-surface/60 hover:bg-surface/90 backdrop-blur-sm ${
                isAccent ? "border-tertiary/40 hover:border-tertiary" : "border-line hover:border-primary/50"
              }`}
            >
              <div className="flex items-start sm:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                  {/* Icon badge */}
                  <div
                    className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center transition-transform group-hover:scale-105 ${
                      isAccent ? "bg-tertiary/15 text-tertiary" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Channel label & value */}
                  <div className="min-w-0 space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-secondary-color/70">
                        {channel.label}
                      </span>

                      {isAccent && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-tertiary/15 text-tertiary font-bold">
                          LEGAL
                        </span>
                      )}
                    </div>

                    {channel.href ? (
                      <a
                        href={channel.href}
                        target={channel.href.startsWith("http") ? "_blank" : undefined}
                        rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm sm:text-base md:text-lg font-bold text-primary-color hover:text-primary transition-colors wrap-break-words block"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <div className="text-sm sm:text-base md:text-lg font-bold text-primary-color wrap-break-words">
                        {channel.value}
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick copy button */}
                {channel.href && (
                  <button
                    onClick={() => handleCopy(channel.value, channel.id)}
                    className="shrink-0 text-[10px] font-mono font-bold uppercase tracking-wider text-secondary-color/70 hover:text-primary transition-colors px-2.5 py-1.5 rounded-lg border border-line hover:border-primary/40 bg-surface/80"
                  >
                    {isCopied ? "COPIED!" : "COPY"}
                  </button>
                )}
              </div>

              {/* Detail text */}
              {channel.detail && (
                <p className="text-base text-secondary-color/80 leading-relaxed pt-3 mt-3 border-t border-line/40">
                  {channel.detail}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Process Timeline Visualization */}
      <div
        ref={timelineRef}
        className="p-5 sm:p-6 rounded-2xl border border-line bg-surface/40 backdrop-blur-sm space-y-4"
      >
        <div className="flex items-center justify-between pb-3 border-b border-line/50">
          <div className="text-xs font-mono font-bold tracking-wider uppercase text-secondary">
            PROCESS_TIMELINE // 3_STAGES
          </div>
          <div className="text-xs font-mono text-secondary-color/70">EST. 1 HARI KERJA</div>
        </div>

        <div className="space-y-4">
          {afterSubmitSteps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center text-xs font-mono font-bold text-primary shrink-0">
                {step.num}
              </div>

              <div className="space-y-0.5 pt-0.5">
                <div className="pb-1 text-base font-bold text-primary-color">{step.title}</div>
                <div className="text-sm text-secondary-color leading-relaxed">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
