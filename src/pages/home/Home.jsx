import ContactSection from "../../features/home/ContactSection";
import HeroSection from "../../features/home/HeroSection";
import ProjectSection from "../../features/home/ProjectSection";
import ServicesSection from "../../features/home/ServiceSection";
import ValuePropositionSection from "../../features/home/ValuePropositionSection";
import WorkProcessSection from "../../features/home/WorkProcessSection";
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
