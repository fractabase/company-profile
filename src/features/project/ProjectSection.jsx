import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Icons } from "../../components/common/Icons";
import { projects, categoryLabels } from "../../data/projects";

// Bold otomatis pada angka / persentase di dalam teks hasil
function renderHighlight(text) {
  const words = text.split(" ");
  return words.map((word, i) => (
    <span key={i}>
      {/[%0-9]/.test(word) ? <strong className="font-bold">{word}</strong> : word}
      {i < words.length - 1 ? " " : ""}
    </span>
  ));
}

// Tinggi maksimal (px) list yang diperlihatkan sebelum di-collapse + tombol "show more".
// Jika list lebih tinggi dari ini, sisa project disembunyikan di balik maxHeight dan
// baru ditampilkan penuh setelah menekan tombol. Nilai ini bisa diubah (contoh: 500).
const COLLAPSE_AT = 900;

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [brokenImages, setBrokenImages] = useState({});
  const [collapsible, setCollapsible] = useState(false);
  const [fullHeight, setFullHeight] = useState(0);

  const listRef = useRef(null);

  const filters = useMemo(() => {
    const unique = [...new Set(projects.map((p) => p.category))];
    return ["all", ...unique];
  }, []);

  const filtered = useMemo(
    () => (activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)),
    [activeFilter],
  );

  const collapsed = collapsible && !showAll;

  const measure = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    setFullHeight(el.scrollHeight);
    setCollapsible(el.scrollHeight > COLLAPSE_AT);
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [activeFilter, filtered.length, measure]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const onImgError = (id) => setBrokenImages((prev) => ({ ...prev, [id]: true }));

  return (
    <section id="Portfolio">
      <div className="section-container my-12 lg:my-20">
        <header className="text-center mb-8 lg:mb-14 pb-5 border-b border-line-strong">
          <span className="font-mono text-sm uppercase tracking-wider text-secondary">-/ Selected Works</span>

          <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-bold text-primary-color">
            Hasil Karya & Case Study Terpilih
          </h2>

          <p className="mt-3 text-lg lg:text-xl text-secondary-color max-w-2xl mx-auto leading-relaxed">
            Contoh nyata solusi digital yang kami bangun untuk klien, dari UMKM sampai enterprise
          </p>
        </header>

        <div
          role="tablist"
          aria-label="Filter kategori project"
          className="flex gap-2 overflow-x-auto pb-2 lg:mb-10 md:justify-center flex-wrap md:overflow-visible"
        >
          {filters.map((cat) => {
            const active = cat === activeFilter;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-pressed={active}
                onClick={() => {
                  setActiveFilter(cat);
                  setShowAll(false);
                }}
                className={
                  "shrink-0 rounded-full px-4 py-2 text-sm font-semibold border transition-colors duration-200 " +
                  (active
                    ? "bg-primary-color text-surface border-primary-color"
                    : "bg-surface text-secondary-color border-line hover:border-secondary/40")
                }
              >
                {cat === "all" ? "Semua" : categoryLabels[cat] || cat}
              </button>
            );
          })}
        </div>

        <div
          ref={listRef}
          key={activeFilter}
          style={
            collapsed
              ? { maxHeight: COLLAPSE_AT, overflow: "hidden" }
              : { maxHeight: fullHeight || undefined, overflow: "hidden" }
          }
          className="relative flex flex-col overflow-hidden transition-[max-height] duration-1000"
        >
          {collapsed && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-linear-to-t from-base to-transparent transition-opacity duration-500" />
          )}

          {filtered.length === 0 ? (
            <p className="py-16 text-center text-secondary-color">Belum ada project untuk kategori ini.</p>
          ) : (
            filtered.map((p, i) => {
              const isVisualLeft = i % 2 === 0;
              const isLast = i === filtered.length - 1;

              return (
                <article
                  key={p.id}
                  className={
                    "flex flex-col gap-6 py-10 md:flex-row md:items-center md:gap-12 " +
                    (isVisualLeft ? "md:flex-row" : "md:flex-row-reverse") +
                    (isLast ? "" : " border-b border-line-strong lg:border-line")
                  }
                >
                  {/* Area visual */}
                  <div className="md:w-1/2">
                    <div className="aspect-video w-full overflow-hidden rounded-xl border border-line bg-surface">
                      {/* TODO: ganti dengan screenshot asli project (p.id).
                          p.image = ilustrasi Unsplash sesuai kategori; fallback teks jika gagal load. */}
                      {p.image && !brokenImages[p.id] ? (
                        <img
                          src={p.image}
                          alt={`Mockup ${p.title}`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          onError={() => onImgError(p.id)}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-secondary/10 p-4">
                          <span className="text-center text-sm font-semibold text-secondary">{p.title}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:w-1/2">
                    <span className="inline-block rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary">
                      {p.categoryLabel}
                    </span>

                    <p className="mt-3 text-sm font-semibold text-primary uppercase tracking-wider">{p.client}</p>

                    <h3 className="mt-1 text-xl font-bold leading-snug text-primary-color md:text-2xl">{p.title}</h3>

                    <p className="mt-3 text-sm leading-relaxed text-secondary-color">{p.description}</p>

                    <div className="mt-4 flex items-start gap-3 rounded-xl border border-tertiary/40 bg-tertiary/15 p-4">
                      <Icons.Shield className="mt-0.5 w-5 h-5 shrink-0 text-tertiary" />
                      <p className="text-sm font-medium text-primary-color">
                        <strong className="font-bold">Hasil Nyata:</strong> {renderHighlight(p.result)}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-secondary bg-secondary/20 px-3 py-1 text-xs text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={p.ctaLink}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-dark transition duration-200 hover:brightness-95"
                    >
                      <span>Detail Case Study</span>
                      <Icons.ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              );
            })
          )}

          {/* Button Show All to Projects Page */}
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-secondary px-6 py-3 text-sm font-semibold text-dark transition duration-200 hover:border-secondary/40 w-max mx-auto"
            role="button"
          >
            <span>Lihat Portofolio Lengkap</span>
            <Icons.ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          {collapsible && (
            <div className="flex items-center">
              <div className="w-64 max-sm:w-20 lg:w-96 h-px bg-line-strong"></div>

              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                aria-expanded={showAll}
                className="inline-flex items-center gap-2 px-3 md:px-6 text-xs md:text-sm font-semibold hover:brightness-105 hover:text-secondary-color"
              >
                <span>{showAll ? "Tampilkan lebih sedikit" : "Tampilkan project lainnya"}</span>
                <Icons.ArrowRight
                  className={"w-4 h-4 transition-transform duration-200 " + (!showAll ? "rotate-90" : "rotate-270")}
                />
              </button>

              <div className="w-64 max-sm:w-20 lg:w-96 h-px bg-line-strong"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
