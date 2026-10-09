import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "../../components/common/Card";
import { Icons } from "../../components/common/Icons";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsCTASection({ prefersReducedMotion = false }) {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      if (leftRef.current) gsap.set(leftRef.current, { opacity: 1, y: 0, x: 0 });
      if (rightRef.current) gsap.set(rightRef.current, { opacity: 1, y: 0, x: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // Left content entrance
      if (leftRef.current && containerRef.current) {
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, x: -30, y: 20 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              end: "top 60%",
              scrub: 1,
            },
          },
        );
      }

      // Right content entrance
      if (rightRef.current && containerRef.current) {
        gsap.fromTo(
          rightRef.current,
          { opacity: 0, x: 30, y: 20 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 82%",
              end: "top 55%",
              scrub: 1.2,
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <>
      <section ref={containerRef} className="relative py-20 sm:py-32 lg:py-40 overflow-hidden">
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT */}
            {/* One unified plane: the 5 blocks here are separated by only
                24px gaps, so per-block depths would overlap. The whole
                column travels together; depth comes from it moving at a
                different rate than the background + the right column.
                The parallax wrapper is a SEPARATE element from `leftRef`
                because `leftRef` already owns x/y in its entrance tween —
                stacking both transforms on one node would make them fight. */}
            <div data-parallax-depth="90" data-parallax-scrub="0.28">
              <div ref={leftRef} className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-line text-xs font-mono font-semibold text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>PROJECT_CUSTOM</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-color tracking-tight leading-[1.15]">
                  Project Anda tidak ada di katalog ini?
                </h2>

                <p className="text-lg sm:text-xl text-secondary-color leading-relaxed max-w-xl">
                  Setiap bisnis memiliki kebutuhan yang berbeda. Jika Anda memerlukan solusi yang lebih spesifik atau
                  project yang belum tercantum di sini, mari kita diskusikan bagaimana kami dapat membantu.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-dark font-bold text-base shadow-xl shadow-primary/20 hover:bg-primary-soft hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Diskusi Project Custom</span>
                  <Icons.ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>

                <p className="text-xs font-mono text-secondary-color">Gratis · Tanpa komitmen · Konsultasi awal</p>
              </div>
            </div>

            {/* RIGHT */}
            {/* NOTE: no data-parallax-depth here — this column is already
                driven by its own scrubbed entrance tween (x/y), and a second
                animation on the same properties would fight it. */}
            <div ref={rightRef} className="space-y-4">
              <Card variant="default" hoverable={true} padding="md" className="hover:border-secondary/40">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icons.Code className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-primary-color mb-2">Software Internal Custom</h3>
                    <p className="text-sm text-secondary-color leading-relaxed">
                      Sistem ERP, CRM, inventory, atau workflow automation yang disesuaikan dengan proses bisnis Anda.
                    </p>
                  </div>
                </div>
              </Card>

              <Card variant="default" hoverable={true} padding="md" className="hover:border-secondary/40">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Icons.Mobile className="w-5 h-5 text-secondary" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-primary-color mb-2">Platform Digital Multi-Pengguna</h3>
                    <p className="text-sm text-secondary-color leading-relaxed">
                      Marketplace, SaaS, portal korporat, atau aplikasi berbasis komunitas dengan skalabilitas tinggi.
                    </p>
                  </div>
                </div>
              </Card>

              <Card variant="default" hoverable={true} padding="md" className="hover:border-secondary/40">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center">
                    <Icons.Efficiency className="w-5 h-5 text-tertiary" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-primary-color mb-2">Integrasi & Modernisasi Legacy</h3>
                    <p className="text-sm text-secondary-color leading-relaxed">
                      Hubungkan sistem lama dengan teknologi baru, atau migrasi ke arsitektur yang lebih modern.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
