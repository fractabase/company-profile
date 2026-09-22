import { useCallback, useEffect, useRef } from "react";

/**
 * Custom hook for scroll-spy behavior on sections.
 * Tracks which section is currently in viewport and updates active state.
 */
export function useScrollSpy(sections, onActiveChange) {
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = [];
    const els = Object.values(sectionRefs.current).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          onActiveChange(visible[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -40% 0px",
        threshold: 0.1,
      },
    );

    els.forEach((el) => observer.observe(el));
    observers.push(observer);

    return () => observers.forEach((o) => o.disconnect());
  }, [onActiveChange]);

  const scrollToSection = useCallback((id) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const setSectionRef = useCallback((id, el) => {
    sectionRefs.current[id] = el;
  }, []);

  return { setSectionRef, scrollToSection };
}
