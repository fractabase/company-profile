import { useRef } from "react";
import { Link } from "react-router-dom";
import { useParticleNetwork } from "../../hooks/useParticleNetwork";

export default function UnderMaintenanceSection() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Hook partikel terhubung — token --primary-color (60% dominant brand)
  useParticleNetwork(canvasRef, containerRef, { colorToken: "--particle-color" });

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full h-dvh flex flex-col items-center justify-center overflow-hidden bg-background dark:bg-dark"
      >
        {/* Canvas partikel dekoratif (full-bleed, tidak memblokir klik) */}
        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" />

        {/* Content container terpusat dengan entrance animation */}
        <div
          className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl"
          style={{
            animation: "contentEnter 0.85s cubic-bezier(0.16, 0.8, 0.24, 1) both",
          }}
        >
          {/* Mono status tag */}
          <p className="font-mono text-xs tracking-widest text-secondary-color dark:text-dark-text-faint uppercase mb-3 select-none">
            // STATUS : IN DEVELOPMENT
          </p>

          {/* Headline dengan aksen titik tertiary amber (10% rule) */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-color dark:text-dark-text leading-tight mb-4 md:mb-6">
            Under Maintenance<span className="text-tertiary">.</span>
          </h1>

          {/* Paragraf penjelas */}
          <p className="text-sm sm:text-base md:text-lg text-secondary-color dark:text-dark-text-mute max-w-lg leading-relaxed mb-6 md:mb-8">
            Halaman yang sedang Anda akses masih dalam tahap pengembangan. Tim kami sedang menyiapkannya agar dapat
            digunakan sesegera mungkin.
          </p>

          {/* CTA Button utama */}
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-soft text-dark font-medium text-sm sm:text-base px-6 py-2.5 sm:px-7 sm:py-3 rounded-lg transition-colors shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Kembali ke Beranda
          </Link>
        </div>

        {/* Copyright line di bagian bawah section (menggantikan Footer) */}
        <p className="absolute bottom-4 sm:bottom-5 left-0 right-0 z-10 text-center font-mono text-xs text-secondary-color dark:text-dark-text-faint select-none">
          © 2026 Fractabase Interactive
        </p>
      </section>
    </>
  );
}
