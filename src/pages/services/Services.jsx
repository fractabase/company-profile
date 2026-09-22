import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "../../features/services/HeroSection";
import DetailServiceSection from "../../features/services/DetailServiceSection";
import EngagementModelSection from "../../features/services/EngagementModelSection";
import ProvenResultSection from "../../features/services/ProvenResultSection";
import FAQSection from "../../features/services/FAQSection";
import CTASection from "../../features/services/CTASection";
import ServicesBackground from "../../features/services/ServicesBackground";
import { serviceData } from "../../data/serviceData";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="relative isolate flex min-h-svh w-full flex-col overflow-x-clip">
        <ServicesBackground />

        <HeroSection />
        <DetailServiceSection services={serviceData} />
        <EngagementModelSection />
        <ProvenResultSection services={serviceData} />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
}
