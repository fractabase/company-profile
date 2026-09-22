import { useState } from "react";
import { LegalMobileTOC, LegalDesktopTOC } from "../../components/common/LegalTOC";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import TermsAndConditionsHeader from "./TermsAndConditionsHeader";
import TermsSectionCard from "./TermsSectionCard";
import { termsAndConditionsSections } from "../../data/termsAndConditionsData";

export default function TermsAndConditionsSection() {
  const [activeId, setActiveId] = useState(termsAndConditionsSections[0]?.id ?? "");
  const { setSectionRef, scrollToSection } = useScrollSpy(termsAndConditionsSections, setActiveId);

  return (
    <>
      <div className="section-container py-20 md:py-28">
        <TermsAndConditionsHeader />

        <LegalMobileTOC sections={termsAndConditionsSections} activeId={activeId} onSelect={scrollToSection} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr]">
          <LegalDesktopTOC
            sections={termsAndConditionsSections}
            activeId={activeId}
            onSelect={scrollToSection}
            ariaLabel="Daftar Isi Syarat dan Ketentuan"
          />

          <div className="space-y-6">
            {termsAndConditionsSections.map((section, index) => (
              <TermsSectionCard
                key={section.id}
                id={section.id}
                num={section.num}
                title={section.title}
                icon={section.icon}
                highlight={section.highlight}
                index={index}
                sectionRef={(el) => setSectionRef(section.id, el)}
              >
                {section.content.intro && (
                  <p className="mb-4 leading-relaxed text-secondary-color">{section.content.intro}</p>
                )}

                {section.content.items && (
                  <ul className="space-y-2 pl-4">
                    {section.content.items.map((item, i) => (
                      <li
                        key={i}
                        className="relative pl-4 text-secondary-color before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/40"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.content.contacts && (
                  <div className="space-y-3">
                    {section.content.contacts.map((c, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-sm font-semibold text-primary-color min-w-20">{c.label}:</span>
                        <span className="text-secondary-color">{c.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </TermsSectionCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
