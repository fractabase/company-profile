import { useEffect } from "react";
import PrivacyPolicySection from "../../features/privacy-policy/PrivacyPolicySection";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative isolate flex min-h-svh w-full flex-col">
      <PrivacyPolicySection />
    </main>
  );
}
