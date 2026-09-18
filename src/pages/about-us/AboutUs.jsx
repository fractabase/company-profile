import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../../features/about/HeroSection";
import AboutStorySection from "../../features/about/StorySection";
import AboutVisionMissionSection from "../../features/about/VisionMissionSection";
import AboutValuesSection from "../../features/about/ValuesSection";
import AboutTeamSection from "../../features/about/TeamSection";
import AboutCTASection from "../../features/about/CTASection";
import AboutBackgroundDecorations from "../../features/about/BackgroundDecorations";

export default function AboutUs() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="relative isolate flex min-h-svh w-full flex-col">
      <AboutBackgroundDecorations />
      <HeroSection />
      <AboutStorySection />
      <AboutVisionMissionSection />
      <AboutValuesSection />
      <AboutTeamSection />
      <AboutCTASection />
    </main>
  );
}
