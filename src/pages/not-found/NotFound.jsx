import { useEffect } from "react";
import NotFoundSection from "../../features/not-found/NotFoundSection";

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);

    document.body.setAttribute("data-hide-footer", "true");

    return () => {
      document.body.removeAttribute("data-hide-footer");
    };
  }, []);

  return (
    <main className="h-screen overflow-hidden">
      <NotFoundSection />
    </main>
  );
}
