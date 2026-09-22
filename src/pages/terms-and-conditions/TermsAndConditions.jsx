import { useEffect } from "react";
import TermsAndConditionsSection from "../../features/terms-and-conditions/TermsAndConditionsSection";

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative isolate flex min-h-svh w-full flex-col">
      <TermsAndConditionsSection />
    </main>
  );
}
