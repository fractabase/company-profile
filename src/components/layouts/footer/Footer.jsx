import { Link } from "react-router-dom";
import { Icons } from "../../common/Icons";
import { ThemeToggle } from "../../../theme/ThemeToggle";
import { contactInfo, socialLinks } from "../../../data/contactInfo";

/* ---------- Data (dipisah dari JSX, render via .map) ---------- */

const footerNavLinks = [
  { label: "Layanan", href: "/services", isRoute: true },
  { label: "Portfolio", href: "/#Portfolio" },
  { label: "Alur Kerja", href: "/#WorkProcess" },
  { label: "Tentang Kami", href: "/about-us", isRoute: true },
  { label: "Kebijakan Privasi", href: "/privacy-policy", isRoute: true },
  { label: "Syarat dan Ketentuan", href: "/terms-and-conditions", isRoute: true },
];

const footerYear = new Date().getFullYear();

/* ---------- Sub-komponen kecil (reusable) ---------- */

const ColumnHeading = ({ children }) => {
  return <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-color/70">{children}</h3>;
};

const FooterLink = ({ href, children, isRoute }) => {
  const linkClass =
    "group inline-flex relative w-fit items-center text-primary-color/80 transition-colors duration-200 hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-px after:bg-primary after:w-full after:transition-transform after:origin-left after:scale-x-0 hover:after:scale-x-100";

  return isRoute ? (
    <Link to={href} className={linkClass}>
      {children}
    </Link>
  ) : (
    <a href={href} className={linkClass}>
      {children}
    </a>
  );
};

/* ---------- Footer utama (light mode, primary dominan, kontras tinggi) ---------- */

export default function Footer() {
  return (
    <footer className="bg-primary/10 dark:bg-dark-secondary/10 h- text-primary-color">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Kolom 1 — Brand & Deskripsi (paling lebar) */}
          <div className="md:col-span-2 md:pr-6">
            <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Fractabase{" "}
              <span className="relative inline-flex text-primary-color after:absolute after:bottom-0 after:right-0 after:bg-secondary after:w-3/5 after:h-1 after:-mb-1">
                Interactive
              </span>
            </h1>

            <p className="mt-5 max-w-md leading-relaxed text-primary-color/80">
              Software house penyedia solusi digital terintegrasi. Layanan kami mencakup perancangan website, aplikasi
              mobile, hingga sistem internal perusahaan yang berorientasi pada hasil.
            </p>
          </div>

          {/* Kolom 2 — Navigasi */}
          <div className="">
            <ColumnHeading>Navigasi</ColumnHeading>

            <nav className="flex flex-col gap-3">
              {footerNavLinks.slice(0, 4).map((item) => (
                <FooterLink key={item.label} href={item.href} isRoute={item.isRoute}>
                  {item.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Kolom 3 — Kontak */}
          <div className="md:-ml-16">
            <ColumnHeading>Kontak</ColumnHeading>

            <ul className="flex flex-col gap-4">
              {contactInfo
                .filter((item) => ["address", "whatsapp", "email"].includes(item.key))
                .map((item) => {
                  const RowIcon = item.icon;
                  const inner = (
                    <>
                      <RowIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="leading-snug text-primary-color/80">{item.value}</span>
                    </>
                  );

                  return (
                    <li key={item.key}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-start gap-2 md:gap-3 transition-colors duration-200 hover:text-primary-color break-all"
                        >
                          {inner}
                        </a>
                      ) : (
                        <span className="flex items-start gap-2 md:gap-3">{inner}</span>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* Kolom 4 — Sosial */}
          <div className="max-lg:space-y-4">
            <ColumnHeading>Sosial</ColumnHeading>

            <div className="flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 bg-surface/70 dark:bg-dark-surface/70 text-primary-color transition duration-200 hover:scale-110 hover:bg-primary hover:text-primary-color"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <a
              href="#Contact"
              className="lg:mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-dark transition duration-200 hover:brightness-95 group"
            >
              <span>Diskusikan Proyek</span>
              <Icons.ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-200 ease-(--ease)" />
            </a>
          </div>
        </div>

        {/* Bottom bar — dipisah dengan border-top, padding sendiri */}
        <div className="mt-8 lg:mt-14 border-t border-primary/20 pt-6">
          <div className="flex flex-col items-center gap-3 text-center text-sm text-primary-color/70 sm:flex-row sm:justify-between sm:text-left">
            <p>© {footerYear} Fractabase Interactive. Hak cipta dilindungi.</p>

            <div className="flex items-center gap-4">
              <ThemeToggle />

              <div className="flex items-center gap-6">
                {footerNavLinks.slice(4).map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="transition-colors duration-200 hover:text-primary-color"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
