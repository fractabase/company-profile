import ContactSection from "../../features/contact/ContactSection";
import HeroSection from "../../features/hero/HeroSection";
import ProjectSection from "../../features/project/ProjectSection";
import ServicesSection from "../../features/services/ServiceSection";
import ValuePropositionSection from "../../features/value-proposition/ValuePropositionSection";
import WorkProcessSection from "../../features/work-process/WorkProcessSection";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <main className="relative body isolate flex min-h-svh w-full flex-col">
        <HeroSection className={styles.Home} />
        <ServicesSection />
        <ValuePropositionSection />
        <WorkProcessSection className={styles.WorkProcess} />
        <ProjectSection />
        <ContactSection />
      </main>
    </>
  );
}
