import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icons } from "../../components/common/Icons";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const highlightSteps = [
  { text: "→ Ceritakan kebutuhan bisnis Anda", delay: 0.4, dur: 1.2 },
  { text: "→ Tim kami analisis & rancang solusi", delay: 1.2, dur: 1.0 },
  { text: "→ Mulai tahap pengembangan", delay: 2.0, dur: 0.8 },
];

function TypingLine({ text, delay, dur = 1.2 }) {
  const elRef = useRef(null);
  const intervalRef = useRef(null);
  const timerRef = useRef(null);
  const isRunning = useRef(false);

  const [displayed, setDisplayed] = useState(() => (prefersReducedMotion ? text : ""));
  const [visible, setVisible] = useState(() => (prefersReducedMotion ? true : false));

  const cleanup = () => {
    isRunning.current = false;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (prefersReducedMotion) return;

    const el = elRef.current;
    if (!el) return;

    cleanup();
    setDisplayed("");
    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isRunning.current) {
          isRunning.current = true;
          setVisible(true);

          timerRef.current = setTimeout(() => {
            if (!isRunning.current) return;

            let i = 0;
            intervalRef.current = setInterval(
              () => {
                if (!isRunning.current) {
                  clearInterval(intervalRef.current);
                  intervalRef.current = null;
                  return;
                }

                if (i < text.length) {
                  const char = text.charAt(i);
                  setDisplayed((prev) => {
                    if (prev.length >= text.length) {
                      clearInterval(intervalRef.current);
                      intervalRef.current = null;
                      return prev;
                    }
                    return prev + char;
                  });
                  i++;
                } else {
                  clearInterval(intervalRef.current);
                  intervalRef.current = null;
                }
              },
              (dur * 1000) / text.length,
            );
          }, delay * 1000);
        }
      },
      { threshold: 0.3 },
    );

    if (el) observer.observe(el);

    return () => {
      cleanup();
      observer.disconnect();
    };
  }, [text, delay, dur]);

  return (
    <div
      ref={elRef}
      className="font-mono text-sm sm:text-base whitespace-nowrap"
      style={{ color: "var(--secondary-text-color)" }}
    >
      {visible ? (
        <>
          {displayed}
          {displayed.length < text.length && (
            <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse" />
          )}
        </>
      ) : (
        <span className="opacity-0">{text}</span>
      )}
    </div>
  );
}

export default function CTASection() {
  const containerRef = useRef(null);
  const statusRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([leftRef.current, rightRef.current], { opacity: 1, y: 0, scale: 1, x: 0 });
        return;
      }

      // Set initial visible state
      gsap.set([leftRef.current, rightRef.current], { clearProps: "all" });

      // Left content
      gsap.from(leftRef.current, {
        opacity: 0,
        x: -30,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Right panel
      gsap.from(rightRef.current, {
        opacity: 0,
        x: 30,
        y: 20,
        scale: 0.95,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Status blink
      if (statusRef.current && !prefersReducedMotion) {
        gsap.to(statusRef.current, {
          opacity: [0.3, 1, 0.3],
          duration: 1.6,
          repeat: -1,
          ease: "sine.inOut",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={containerRef} className="relative py-20 sm:py-32 lg:py-40 overflow-hidden">
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* LEFT */}
            <div ref={leftRef} className="lg:col-span-6 space-y-6">
              <div className="text-secondary text-sm font-mono tracking-wider uppercase font-semibold ">
                -/ KONSULTASI_GRATIS
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-color tracking-tight leading-[1.15]">
                Siap Memulai Proyek Digital Anda?
              </h2>

              <p className="text-lg sm:text-xl text-secondary-color leading-relaxed max-w-xl">
                Konsultasikan kebutuhan bisnis Anda dengan tim kami. Kami siap membantu merancang solusi teknologi yang
                tepat sasaran untuk pertumbuhan bisnis Anda.
              </p>

              {/* Main CTA */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-dark font-bold text-base shadow-xl shadow-primary/20 hover:bg-primary-soft hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Mulai Konsultasi</span>
                <Icons.ArrowRight className="w-5 h-5 transition-transform duration-300 hover:translate-x-1.5" />
              </Link>

              <p className="text-xs font-mono text-secondary-color">Gratis · Tanpa komitmen · Diskusi kebutuhan awal</p>
            </div>

            {/* RIGHT */}
            <div ref={rightRef} className="lg:col-span-6">
              <div
                className="relative rounded-2xl bg-surface dark:bg-dark-surface border border-line overflow-hidden shadow-2xl"
                style={{ boxShadow: "inset 0 0 30px rgba(53,190,235,0.06)" }}
              >
                {/* Header bar */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-surface dark:bg-dark-surface-alt border-b border-line">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-3 font-mono text-[10px] text-secondary-color tracking-wide uppercase">
                    KONSULTASI_WORKFLOW
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-secondary-color">v1.0 // live</span>
                </div>

                {/* Body */}
                <div className="p-5 sm:p-6 space-y-5">
                  {/* Status indicator */}
                  <div className="flex items-center gap-2.5 font-mono text-[10px] text-secondary-color">
                    <span
                      ref={statusRef}
                      className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                      style={{
                        boxShadow: "0 0 8px rgba(53,190,235,0.9)",
                        minWidth: "6px",
                        height: "6px",
                      }}
                    />
                    <span>STATUS:</span>
                    <span className="text-primary font-semibold">siap membantu</span>
                  </div>

                  <div className="h-px bg-line" />

                  {/* Steps */}
                  {highlightSteps.map((step) => (
                    <div key={step.text} className="flex items-start gap-3">
                      <span
                        className={`mt-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold shrink-0 ${
                          step.text.includes("Ceritakan")
                            ? "bg-primary/15 text-primary"
                            : step.text.includes("analisis")
                              ? "bg-secondary/15 text-secondary"
                              : "bg-tertiary/15 text-tertiary"
                        }`}
                      >
                        {step.text.includes("Ceritakan") ? "01" : step.text.includes("analisis") ? "02" : "03"}
                      </span>
                      <TypingLine text={step.text} delay={step.delay} dur={step.dur} />
                    </div>
                  ))}

                  {/* Footer */}
                  <div className="pt-3 border-t border-line font-mono text-[10px] text-secondary-color flex items-center justify-between">
                    <span className="flex items-center gap-2 text-primary font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      &gt; init_consultation()
                    </span>
                    <span>ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
