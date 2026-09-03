import { Icons } from "../../common/Icons";
import { ThemeToggle } from "../../../theme/ThemeToggle";

/* ---------- Data (dipisah dari JSX, render via .map) ---------- */

const navLinks = [
  { label: "Layanan", href: "#Services" },
  { label: "Portfolio", href: "#Portfolio" },
  { label: "Alur Kerja", href: "#WorkProcess" },
  { label: "Tentang Kami", href: "#About" },
];

const contactInfo = [
  {
    key: "address",
    icon: Icons.Location,
    label: "Kota Bekasi, Indonesia",
  },
  {
    key: "phone",
    icon: Icons.WhatsApp,
    label: "+62 812-3456-7890",
    href: "https://wa.me/6281234567890",
  },
  {
    key: "email",
    icon: Icons.Mail,
    label: "fractabaseinteractive@gmail.com",
    href: "mailto:fractabaseinteractive@gmail.com",
  },
];

const socialLinks = [
  { key: "github", label: "Github", icon: Icons.Github, href: "https://github.com/" },
  { key: "linkedin", label: "LinkedIn", icon: Icons.LinkedIn, href: "https://linkedin.com/" },
  { key: "whatsapp", label: "WhatsApp", icon: Icons.WhatsApp, href: "https://wa.me/6281234567890" },
  { key: "email", label: "Email", icon: Icons.Mail, href: "mailto:hello@fractabase-interactive.com" },
];

const policies = [
  { label: "Policy", href: "#" },
  { label: "Privacy", href: "#" },
];

const footerYear = new Date().getFullYear();

/* ---------- Sub-komponen kecil (reusable) ---------- */

function ColumnHeading({ children }) {
  return <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-color/70">{children}</h3>;
}

function SocialIcon({ label, icon: Icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 bg-surface/70 dark:bg-dark-surface/70 text-primary-color transition duration-200 hover:scale-110 hover:bg-primary hover:text-primary-color"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

function ContactCta() {
  return (
    <a
      href="#Contact"
      className="lg:mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-dark transition duration-200 hover:brightness-95"
    >
      <span>Konsultasi Gratis</span>
      <Icons.ArrowRight className="h-5 w-5" />
    </a>
  );
}

/* ---------- Footer utama (light mode, primary dominan, kontras tinggi) ---------- */

export default function Footer() {
  return (
    <footer className="bg-primary/10 dark:bg-dark-secondary/10 text-primary-color">
      <div className="section-container py-16 md:py-20">
        {/* Grid 4 kolom: brand (col-span-2 di md/lg), Navigasi, Kontak, Sosial */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Kolom 1 — Brand & Deskripsi (paling lebar) */}
          <div className="md:col-span-3 md:pr-6">
            <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
              Fractabase{" "}
              <span className="relative inline-flex text-primary-color">
                <span>Interactive</span>
                <span className="absolute bottom-0 right-0 bg-secondary w-3/5 h-1 -mb-1"></span>
              </span>
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-primary-color/80">
              Software house yang membangun fondasi digital bisnis Anda — dari website, aplikasi mobile, hingga sistem
              internal. Struktur sederhana yang tumbuh menjadi solusi interaktif yang andal.
            </p>
          </div>

          {/* Kolom 2 — Navigasi */}
          <div className="">
            <ColumnHeading>Navigasi</ColumnHeading>
            <nav className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group inline-flex w-fit items-center text-primary-color/80 transition-colors duration-200 hover:text-primary-color"
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary-color transition-all duration-200 group-hover:w-full" />
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Kolom 3 — Kontak */}
          <div>
            <ColumnHeading>Kontak</ColumnHeading>
            <ul className="flex flex-col gap-4">
              {contactInfo.map((item) => {
                const RowIcon = item.icon;
                const inner = (
                  <>
                    <RowIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="leading-snug text-primary-color/80">{item.label}</span>
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
          <div className="md:col-span-2 lg:col-span-1">
            <ColumnHeading>Sosial</ColumnHeading>
            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <SocialIcon key={item.key} label={item.label} icon={item.icon} href={item.href} />
              ))}
            </div>
          </div>
          <ContactCta />
        </div>

        {/* Bottom bar — dipisah dengan border-top, padding sendiri */}
        <div className="mt-8 lg:mt-14 border-t border-primary/20 pt-6">
          <div className="flex flex-col items-center gap-3 text-center text-sm text-primary-color/70 sm:flex-row sm:justify-between sm:text-left">
            <p>© Fractabase Interactive {footerYear} | All rights reserved.</p>

            <div className="flex items-center gap-4">
              <ThemeToggle />

              <div className="flex items-center gap-6">
                {policies.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition-colors duration-200 hover:text-primary-color"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
