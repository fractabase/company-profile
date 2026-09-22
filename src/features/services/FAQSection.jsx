import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icons } from "../../components/common/Icons";
import { Heading } from "../../components/common/Heading";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const faqData = [
  {
    question: "Berapa estimasi biaya pembuatan website?",
    answer:
      "Biaya disesuaikan dengan kompleksitas fitur, rancangan antarmuka, dan integrasi sistem yang dibutuhkan. Untuk company profile standar mulai dari beberapa juta rupiah, sedangkan web application atau platform e-commerce dengan kebutuhan kustom memerlukan estimasi terperinci. Kami selalu memberikan perincian biaya secara transparan setelah tahap discovery tanpa biaya tersembunyi.",
    category: "Harga",
  },
  {
    question: "Berapa lama durasi pengerjaan proyek?",
    answer:
      "Durasi pengerjaan bergantung pada cakupan proyek: company profile memerlukan waktu 2 sampai 4 minggu, web application 4 sampai 8 minggu, dan aplikasi mobile 4 sampai 10 minggu. Setelah sesi discovery, kami menetapkan jadwal milestone yang terukur serta memberikan pembaruan kemajuan proyek secara berkala.",
    category: "Timeline",
  },
  {
    question: "Apakah tersedia garansi setelah sistem dirilis?",
    answer:
      "Ya. Kami menyediakan masa garansi perbaikan bug setelah sistem dirilis untuk memastikan seluruh fitur berfungsi normal. Kami juga menyediakan paket pemeliharaan berkala bagi perusahaan yang membutuhkan dukungan teknis jangka panjang.",
    category: "Garansi",
  },
  {
    question: "Apakah proyek dapat dimulai tanpa dokumen spesifikasi lengkap?",
    answer:
      "Bisa. Anda cukup menyampaikan ide, kendala operasional, atau sasaran bisnis yang ingin dicapai. Tim kami membantu memetakan kebutuhan melalui sesi discovery, menyusun arsitektur solusi, dan menyiapkan proposal teknis sebelum tahap pengembangan dimulai.",
    category: "Proses",
  },
  {
    question: "Apakah Fractabase menyediakan layanan pemeliharaan bulanan?",
    answer:
      "Ya. Kami menyediakan paket pemeliharaan berkala yang mencakup perbaikan kendala teknis, pembaruan minor, penerapan patch keamanan, dan pemantauan performa server. Layanan ini menjaga keandalan sistem sehingga Anda dapat berfokus penuh pada operasional bisnis.",
    category: "Maintenance",
  },
  {
    question: "Apakah Fractabase menerima proyek skala kecil?",
    answer:
      "Ya. Kami menangani proyek dari berbagai skala, mulai dari landing page UMKM hingga sistem informasi enterprise. Pendekatan kami mengutamakan kesesuaian solusi dengan kebutuhan riil dan alokasi anggaran klien.",
    category: "Skala Proyek",
  },
];

const categoryList = ["Harga", "Timeline", "Garansi", "Proses", "Maintenance", "Skala Proyek"];

const categoryColors = {
  Harga: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" },
  Timeline: { bg: "bg-tertiary/10", text: "text-tertiary", border: "border-tertiary/20" },
  Garansi: { bg: "bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-500/20" },
  Proses: { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/20" },
  Maintenance: { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20" },
  "Skala Proyek": { bg: "bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", border: "border-pink-500/20" },
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
    <div
      ref={itemRef}
      style={{ opacity: 0 }}
      className="rounded-2xl bg-surface border border-line overflow-hidden transition-shadow duration-300"
    >
      <button
        onClick={toggle}
        className="w-full flex items-start gap-3 p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 hover:bg-primary/5 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        {/* Category tag */}
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold shrink-0 ${catColor.bg} ${catColor.text} ${catColor.border}`}
        >
          {item.category}
        </span>

        {/* Question */}
        <span className="flex-1 text-base sm:text-lg font-bold text-primary-color leading-snug pt-1">
          {item.question}
        </span>

        {/* Chevron */}
        <div ref={iconRef} className="p-1.5 rounded-full bg-primary/10 text-primary shrink-0 transition-transform">
          <Icons.ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {/* Answer (height animated via GSAP) */}
      <div ref={contentRef} style={{ height: 0, opacity: 0 }} className="overflow-hidden">
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-sm sm:text-base text-secondary-color leading-relaxed border-t border-line">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const containerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = useCallback((idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  }, []);

  // Scroll-linked reveal for accordion items
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      document.querySelectorAll("[data-faq-item]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 70%",
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
      <section ref={containerRef} className="relative py-16 sm:py-24 overflow-hidden">
        <div className="section-container relative z-10">
          {/* Background decorative dots (4.3 layer — interactive with FAQ) */}
          <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
            <div className="absolute top-20 left-[15%] w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
            <div
              className="absolute top-40 right-[20%] w-1.5 h-1.5 rounded-full bg-secondary/40 animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-60 left-[30%] w-2 h-2 rounded-full bg-tertiary/40 animate-pulse"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute top-80 right-[10%] w-1.5 h-1.5 rounded-full bg-primary/30 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute top-100 left-[50%] w-1 h-1 rounded-full bg-secondary/30 animate-pulse"
              style={{ animationDelay: "1.5s" }}
            />
          </div>

          {/* Heading */}
          <Heading
            hasTagline={true}
            taglineText="-/ PERTANYAAN_UMUM"
            title="Sering Ditanyakan"
            paragraphClass="sm:text-lg!"
            paragraph="Jawaban untuk pertanyaan yang paling sering kami terima dari calon klien."
          />

          {/* 2-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">
            {/* LEFT COLUMN – sticky with functional content */}
            <div className="lg:sticky top-0 lg:self-start space-y-6">
              {/* Category quick-jump list */}
              <div>
                <div className="text-sm font-mono font-bold text-secondary uppercase tracking-widest mb-4">
                  <Icons.Code className="w-4 h-4 text-primary inline" /> KATEGORI
                </div>

                <div className="space-y-1.5">
                  {categoryList.map((cat, idx) => {
                    const isActive = openIndex !== null && faqData[openIndex]?.category === cat;
                    const color = categoryColors[cat] || categoryColors["Harga"];

                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          const foundIdx = faqData.findIndex((f) => f.category === cat);
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
            <div className="space-y-4 mt-8">
              {faqData.map((item, idx) => (
                <FAQItem key={idx} item={item} index={idx} isOpen={openIndex === idx} onToggle={handleToggle} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
