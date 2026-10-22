import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icons } from "../../components/common/Icons";
import { Heading } from "../../components/common/Heading";
import { contactFaqList } from "../../data/contactInfo";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Tidak ada hardcoded faqData, menggunakan contactFaqList dari import

const categoryList = ["Harga", "Kerahasiaan", "Proses"];

const categoryColors = {
  Harga: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/40" },
  Kerahasiaan: { bg: "bg-tertiary/10", text: "text-tertiary", border: "border-tertiary/40" },
  Proses: { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/40" },
};

function FAQItem({ item, index, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const itemRef = useRef(null);
  const iconRef = useRef(null);
  const catColor = categoryColors[item.category] || categoryColors["Harga"];

  const toggle = useCallback(() => {
    onToggle(index);
  }, [index, onToggle]);

  useEffect(() => {
    if (!itemRef.current) return;

    if (prefersReducedMotion) {
      gsap.set(itemRef.current, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      itemRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 90%",
          end: "top 70%",
          scrub: 1.2,
        },
      },
    );
  }, []);

  useEffect(() => {
    if (!contentRef.current || prefersReducedMotion) return;

    if (isOpen) {
      gsap.to(contentRef.current, {
        height: contentRef.current.scrollHeight,
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
      });

      if (iconRef.current) {
        gsap.to(iconRef.current, {
          rotation: 180,
          duration: 0.25,
          ease: "power2.out",
        });
      }
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          if (iconRef.current) {
            gsap.set(iconRef.current, { rotation: 0 });
          }
        },
      });
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={itemRef}
        style={{ opacity: 0 }}
        className="rounded-2xl bg-surface border border-line overflow-hidden transition-shadow duration-300"
      >
        <button
          onClick={toggle}
          className="w-full flex justify-between items-center gap-3 p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 hover:bg-primary/5 transition-colors duration-200"
          aria-expanded={isOpen}
        >
          <div className="inline-flex flex-col gap-2">
            {/* Category tag */}
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold shrink-0 w-max h-max border ${catColor.bg} ${catColor.text} ${catColor.border}`}
            >
              {item.category}
            </span>

            {/* Question */}
            <span className="flex-1 text-base sm:text-lg font-bold text-primary-color leading-snug">
              {item.question}
            </span>
          </div>

          {/* Chevron */}
          <div ref={iconRef} className="p-1.5 rounded-full bg-primary/10 text-primary shrink-0 transition-transform">
            <Icons.ChevronDown className="w-4 h-4" />
          </div>
        </button>

        {/* Answer (height animated via GSAP) */}
        <div ref={contentRef} style={{ height: 0, opacity: 0 }} className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-4 text-sm sm:text-base text-secondary-color leading-relaxed border-t border-line">
            {item.answer}
          </div>
        </div>
      </div>
    </>
  );
}

export default function FAQSection() {
  const containerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = useCallback((idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  }, []);

  return (
    <>
      <section ref={containerRef} className="relative py-16 sm:py-24 overflow-hidden">
        <div className="section-container relative z-10">
          {/* Heading */}
          <Heading
            hasTagline={true}
            taglineText="-/ PERTANYAAN_KONSULTASI"
            title="Pertanyaan Umum Seputar Konsultasi"
            paragraphClass="sm:text-lg!"
            paragraph="Jawaban untuk pertanyaan yang paling sering kami terima dari calon klien."
          />

          {/* 2-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">
            {/* LEFT COLUMN – sticky with functional content */}
            <div className="lg:sticky top-24 lg:self-start space-y-6" style={{ maxHeight: "calc(100vh - 8rem)" }}>
              {/* Category quick-jump list */}
              <div>
                <div className="text-sm font-mono font-bold text-secondary uppercase tracking-widest mb-4">
                  <Icons.Code className="w-4 h-4 text-primary inline" /> KATEGORI
                </div>

                <div className="space-y-1.5">
                  {categoryList.map((cat, idx) => {
                    const isActive = openIndex !== null && contactFaqList[openIndex]?.category === cat;
                    const color = categoryColors[cat] || categoryColors["Harga"];

                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          const foundIdx = contactFaqList.findIndex((f) => f.category === cat);
                          if (foundIdx >= 0) handleToggle(foundIdx);
                        }}
                        className={`w-full flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? `${color.bg} ${color.text} ${color.border} shadow-sm cursor-default`
                            : "bg-surface hover:bg-primary/5 border-line hover:border-primary/20 text-secondary-color hover:text-primary-color"
                        }`}
                      >
                        <span className="text-[10px] font-mono font-bold tracking-wider">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1">{cat}</span>
                        {isActive && <Icons.ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN – FAQ accordion list */}
            <div className="space-y-4">
              {contactFaqList.map((item, idx) => (
                <FAQItem key={item.id} item={item} index={idx} isOpen={openIndex === idx} onToggle={handleToggle} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
