import { useState, useEffect } from "react";
import { ThemeToggle } from "../../../theme/ThemeToggle";
import { Icons } from "../../common/Icons";

const NAV_LINKS = [
  { href: "/#Home", label: "Home" },
  { href: "/#Services", label: "Services" },
  { href: "/#ValueProposition", label: "Why" },
  { href: "/#WorkProcess", label: "Process" },
  { href: "/#Portfolio", label: "Portfolio" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-surface/90 dark:bg-dark-surface/90 backdrop-blur border-b border-line z-30">
      <div className="section-container flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <a href="/" className="text-xl md:text-2xl font-bold shrink-0">
          <span className="text-primary rounded-xl">Fractabase</span>{" "}
          <span className="text-primary-color">Interactive</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-4 lg:gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative text-primary-color hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100 hover:after:origin-left"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center md:gap-3 shrink-0">
          <ThemeToggle />

          {/* Desktop CTA */}
          <a
            href="/#Contact"
            className="hidden lg:inline-flex items-center bg-primary hover:bg-primary-soft text-dark py-1.5 px-4 md:px-5 rounded-lg hover:shadow-md transition text-sm md:text-base"
            role="button"
          >
            Contact
          </a>

          {/* Hamburger button — radial arc to X */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-lg hover:bg-primary/10 transition-colors"
          >
            {menuOpen ? (
              <Icons.X className="w-6 h-6 text-primary-color" />
            ) : (
              <Icons.Menu className="w-6 h-6 text-primary-color" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu — vertical list, staggered slide-down + fade */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-surface dark:bg-dark-surface border-b border-line shadow-lg shadow-dark/5 overflow-hidden transition-all duration-500 ease-(--ease) ${
          menuOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="section-container py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }, i) => {
            // Stagger: top-to-bottom on open, bottom-to-top on close
            const delay = menuOpen ? i * 60 : (NAV_LINKS.length - 1 - i) * 40;
            return (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="py-3 px-4 text-primary-color hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300 ease-(--ease)"
                style={{
                  transitionDelay: `${delay}ms`,
                  transform: menuOpen ? "translateY(0)" : "translateY(-16px)",
                  opacity: menuOpen ? 1 : 0,
                }}
              >
                {label}
              </a>
            );
          })}
          {/* Mobile CTA */}
          <a
            href="/#Contact"
            onClick={closeMenu}
            className="mt-2 mb-1 bg-primary text-dark py-2.5 px-5 rounded-lg text-center font-medium transition-all duration-300 ease-(--ease)"
            style={{
              transitionDelay: menuOpen ? `${NAV_LINKS.length * 60}ms` : "0ms",
              transform: menuOpen ? "translateY(0)" : "translateY(-16px)",
              opacity: menuOpen ? 1 : 0,
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
