import { useCallback, useState } from "react";
import { Icons } from "./Icons";

/* ---------- Mobile TOC Dropdown ---------- */
export function LegalMobileTOC({ sections, activeId, onSelect }) {
  const [open, setOpen] = useState(false);
  const activeSection = sections.find((s) => s.id === activeId);

  const handleSelect = useCallback(
    (id) => {
      onSelect(id);
      setOpen(false);
    },
    [onSelect],
  );

  return (
    <>
      <div className="lg:hidden sticky top-18 z-30 mb-8">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex w-full items-center justify-between gap-2 rounded-xl border border-line bg-surface/95 dark:bg-dark-surface/95 px-4 py-3 text-sm font-medium text-primary-color backdrop-blur-sm shadow-sm transition-colors duration-200"
          aria-expanded={open}
          aria-controls="mobile-toc-list"
        >
          <span className="flex items-center gap-2 truncate">
            <Icons.FileText className="h-4 w-4 shrink-0 text-primary" />
            <span className="truncate">
              {activeSection ? `${activeSection.num}. ${activeSection.title}` : "Daftar Isi"}
            </span>
          </span>

          <Icons.ChevronDown
            className={`h-4 w-4 shrink-0 text-secondary-color transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <nav
            id="mobile-toc-list"
            className="absolute left-0 right-0 mt-1 max-h-80 overflow-y-auto rounded-xl border border-line bg-surface/98 dark:bg-dark-surface/98 shadow-lg backdrop-blur-sm"
          >
            <ul className="py-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelect(section.id);
                    }}
                    className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 ${
                      activeId === section.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-secondary-color hover:bg-primary/5 hover:text-primary-color"
                    }`}
                  >
                    <span className="font-mono text-xs text-secondary-color/60 w-5">{section.num}</span>
                    <span className="truncate">{section.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}

/* ---------- Desktop sidebar TOC ---------- */
export function LegalDesktopTOC({ sections, activeId, onSelect, ariaLabel }) {
  return (
    <>
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-color/60">Daftar Isi</p>

          <nav aria-label={ariaLabel}>
            <ul className="space-y-0.5">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onSelect(section.id);
                      }}
                      className={`group flex items-center gap-2 space-x-2 rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
                        isActive
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-secondary-color hover:bg-primary/5 hover:text-primary-color"
                      }`}
                    >
                      <span
                        className={`inline-block h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                          isActive ? "bg-primary scale-125" : "bg-secondary-color/30 group-hover:bg-primary/50"
                        }`}
                      />
                      <span className="font-mono text-[0.65rem] text-secondary-color/50 w-4">{section.num}</span>
                      <span className="truncate">{section.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
