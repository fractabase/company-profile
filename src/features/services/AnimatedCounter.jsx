import { useEffect, useRef, useState } from "react";

const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// AnimatedCounter: menampilkan angka yang beranimasi dari 0 hingga target
// saat elemen muncul di viewport. Pada reduced-motion, langsung tampil nilai
// target tanpa animasi.
export default function AnimatedCounter({ target, duration = 1.5 }) {
  // Jika reduced-motion, nilai awal = target agar langsung tampil benar.
  const initialValue = prefersReducedMotion ? target : 0;
  const [value, setValue] = useState(initialValue);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const step = (now) => {
            const elapsed = (now - start) / 1000;
            const t = Math.min(1, elapsed / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <>
      <span ref={ref} className="font-mono font-bold text-tertiary">
        {value}
      </span>
    </>
  );
}
