import { useState } from "react";
import { LegalMobileTOC, LegalDesktopTOC } from "../../components/common/LegalTOC";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import PrivacyPolicyHeader from "./PrivacyPolicyHeader";
import PrivacySectionCard from "./PrivacySectionCard";
import { privacyPolicySections } from "../../data/privacyPolicyData";
import { Icons } from "../../components/common/Icons";

export default function PrivacyPolicySection() {
  const [activeId, setActiveId] = useState(privacyPolicySections[0]?.id ?? "");
  const { setSectionRef, scrollToSection } = useScrollSpy(privacyPolicySections, setActiveId);

  return (
    <>
      <div className="section-container py-20 md:py-28">
        <PrivacyPolicyHeader />

        <LegalMobileTOC sections={privacyPolicySections} activeId={activeId} onSelect={scrollToSection} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr]">
          <LegalDesktopTOC
            sections={privacyPolicySections}
            activeId={activeId}
            onSelect={scrollToSection}
            ariaLabel="Daftar Isi Kebijakan Privasi"
          />

          <div className="space-y-6">
            {privacyPolicySections.map((section, index) => (
              <PrivacySectionCard
                key={section.id}
                id={section.id}
                num={section.num}
                title={section.title}
                icon={section.icon}
                index={index}
                sectionRef={(el) => setSectionRef(section.id, el)}
              >
                {section.content.intro && (
                  <p className="mb-4 leading-relaxed text-secondary-color">{section.content.intro}</p>
                )}

                {/* Groups (section 1) */}
                {section.content.groups && (
                  <div className="space-y-5">
                    {section.content.groups.map((group, gi) => (
                      <div key={gi}>
                        <h4 className="mb-2 text-sm font-semibold text-primary-color">{group.label}</h4>
                        <ul className="space-y-1.5 pl-4">
                          {group.items.map((item, i) => (
                            <li
                              key={i}
                              className="relative pl-4 text-secondary-color before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/40"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Simple bullet list */}
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

                {/* Callout (section 2) */}
                {section.content.callout && (
                  <div className="mt-5 flex gap-3 rounded-xl border border-tertiary/30 bg-tertiary/15 p-4 dark:border-tertiary/20 dark:bg-tertiary/5">
                    <Icons.ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-tertiary" />
                    <p className="text-sm font-medium leading-relaxed text-primary-color">{section.content.callout}</p>
                  </div>
                )}

                {/* Security note (section 4) */}
                {section.content.securityNote && (
                  <p className="mb-4 leading-relaxed text-secondary-color">{section.content.securityNote}</p>
                )}

                {/* Retention table (section 4) */}
                {section.content.retentionTable && (
                  <div className="mt-5 overflow-x-auto">
                    <table className="w-full text-sm">
                      <caption className="mb-3 text-left text-xs font-semibold uppercase tracking-wider text-secondary-color/60">
                        {section.content.retentionTable.caption}
                      </caption>
                      <thead>
                        <tr className="border-b border-line">
                          {section.content.retentionTable.headers.map((h, i) => (
                            <th
                              key={i}
                              className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-primary-color/70"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.content.retentionTable.rows.map((row, i) => (
                          <tr
                            key={i}
                            className="border-b border-line/50 last:border-b-0 transition-colors duration-150 hover:bg-primary/3"
                          >
                            {row.map((cell, j) => (
                              <td
                                key={j}
                                className={`px-4 py-3 ${j === 0 ? "text-primary-color font-medium" : "text-secondary-color"}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Note text */}
                {section.content.note && (
                  <p className="mt-4 rounded-lg bg-primary/5 px-4 py-3 text-sm leading-relaxed text-secondary-color dark:bg-primary/3">
                    {section.content.note}
                  </p>
                )}

                {/* Rights list (section 7) */}
                {section.content.rights && (
                  <div className="space-y-3">
                    {section.content.rights.map((r, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                          ✓
                        </span>
                        <div>
                          <span className="font-semibold text-primary-color me-0.5">{r.right}</span> {": "}
                          <span className="text-secondary-color">{r.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA text */}
                {section.content.cta && (
                  <p className="mt-4 text-sm leading-relaxed text-secondary-color italic">{section.content.cta}</p>
                )}

                {/* Contacts (section 10) */}
                {section.content.contacts && (
                  <div className="mt-5 overflow-x-auto">
                    <table className="w-full text-sm">
                      <caption className="mb-3 text-left text-xs font-semibold uppercase tracking-wider text-secondary-color/60">
                        Informasi Kontak
                      </caption>
                      <thead>
                        <tr className="border-b border-line">
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-primary-color/70">
                            Label
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-primary-color/70">
                            Detail
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.content.contacts.map((c, i) => (
                          <tr key={i} className="border-b border-line/50 last:border-b-0">
                            <td className="px-4 py-3 text-primary-color font-medium">{c.label}</td>
                            <td className="px-4 py-3 text-secondary-color">{c.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </PrivacySectionCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
