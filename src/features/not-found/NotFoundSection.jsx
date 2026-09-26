import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { Icons } from "../../components/common/Icons";
import { useParticleNetwork } from "../../hooks/useParticleNetwork";

export default function NotFoundSection() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const numbersRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  useParticleNetwork(canvasRef, containerRef, { colorToken: "--particle-color" });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Instant reveal for reduced motion
      gsap.set([numbersRef.current, contentRef.current], {
        opacity: 1,
        y: 0,
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate 404 numbers
      tl.fromTo(
        numbersRef.current,
        { opacity: 0, scale: 0.85, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.2)" },
        0.3,
      );

      // Animate content
      tl.fromTo(contentRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.7);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <section
        ref={containerRef}
        className="relative h-screen overflow-hidden bg-base flex items-center justify-center"
      >
        {/* Canvas partikel dekoratir */}
        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" />

        {/* Main Content */}
        <div className="section-container relative z-10 px-4">
          <div className="text-center space-y-8 lg:space-y-10">
            {/* Large 404 Numbers */}
            <div ref={numbersRef} className="relative" style={{ opacity: 0 }}>
              <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-6">
                <span className="text-[7rem] sm:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-black font-mono leading-none text-primary tracking-tighter">
                  4
                </span>

                <span className="text-[7rem] sm:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-black font-mono leading-none text-secondary tracking-tighter">
                  0
                </span>

                <span className="text-[7rem] sm:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-black font-mono leading-none text-primary tracking-tighter">
                  4
                </span>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 blur-3xl opacity-20 dark:bg-primary" />
            </div>

            {/* Content */}
            <div ref={contentRef} className="space-y-6 lg:space-y-8 max-w-2xl mx-auto" style={{ opacity: 0 }}>
              {/* Heading */}
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-color dark:text-primary-color">
                  Halaman Tidak Ditemukan
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-secondary-color leading-relaxed px-4">
                  Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan kembali ke beranda atau gunakan navigasi
                  untuk melanjutkan.
                </p>
              </div>

              {/* Primary Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                {/* Primary CTA */}
                <Link
                  to="/"
                  className="group inline-flex items-center gap-2.5 px-7 lg:px-9 py-3.5 lg:py-4 bg-primary text-dark font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
                >
                  <Icons.Home className="w-5 h-5" />
                  <span>Kembali ke Beranda</span>
                </Link>

                {/* Secondary CTA */}
                <button
                  onClick={handleGoBack}
                  className="group inline-flex items-center gap-2.5 px-7 lg:px-9 py-3.5 lg:py-4 bg-surface border-2 border-line text-primary-color dark:text-primary-color font-semibold rounded-xl transition-all duration-300 hover:border-secondary/50 hover:-translate-y-0.5"
                >
                  <Icons.ArrowLeft className="w-5 h-5" />
                  <span>Halaman Sebelumnya</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
