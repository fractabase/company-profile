import { useEffect } from "react";
import ServerErrorSection from "../../features/server-error/ServerErrorSection";

/**
 * ServerError Page (500 Internal Server Error)
 *
 * Halaman untuk menangani:
 * 1. API backend response 500 (dari external service)
 * 2. React runtime crash (via Error Boundary fallback)
 * 3. Chunk loading failure atau JavaScript exception
 *
 * Tone: professional, system malfunction acknowledged, offering reload or navigation
 */
export default function ServerError() {
  useEffect(() => {
    window.scrollTo(0, 0);

    document.body.setAttribute("data-hide-footer", "true");

    return () => {
      document.body.removeAttribute("data-hide-footer");
    };
  }, []);

  return (
    <main className="h-screen overflow-hidden">
      <ServerErrorSection />
    </main>
  );
}
