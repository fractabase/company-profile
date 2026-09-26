# STRUCTURE-PROJECT.md

Dokumentasi struktur project Fractabase Interactive yang AKURAT dan SELALU MENGACU PADA KONDISI ASLI folder saat ini.

---

## 1. Tree Structure

```
fractabase-interactive/
├── index.html                    # HTML entry point (Vite SPA)
├── package.json                  # Konfigurasi npm, scripts, dependencies
├── package-lock.json             # Lock file dependencies
├── vite.config.js                # Konfigurasi Vite + plugin React & Tailwind
├── eslint.config.js              # Konfigurasi ESLint (flat config)
├── README.md                     # Dokumentasi project (overview, setup, scripts)
├── CHANGELOG.md                  # Riwayat perubahan versi (standard-version)
├── STRUCTURE-PROJECT.md          # File ini — peta struktur project
│
├── public/
│   ├── 500.html                  # Static fallback HTML for Vercel CDN errors (inline CSS, brand tokens)
│   ├── favicon.svg               # Fractabase logo/favicon
│   └── icons.svg                 # Icon sprite (jika ada)
│
├── node_modules/                 # Dependencies (auto-generated, jangan di-edit)
│   └── ...
│
├── dist/                         # Build output (auto-generated, jangan di-edit)
│   └── ...
│
├── src/                          # Source code utama
    ├── main.jsx                  # Entry point React (render ke #root)
    ├── App.jsx                   # Root component: ThemeProvider + BrowserRouter + ErrorBoundary + Routes
    │
    ├── styles/
    │   └── index.css             # Global styles, CSS variables (design tokens), Tailwind import
    │
    ├── theme/
    │   ├── ThemeContext.js       # React context untuk tema (light/dark/device)
    │   ├── ThemeProvider.jsx     # Provider: resolve & apply tema ke document
    │   └── ThemeToggle.jsx       # UI toggle tema (mobile: 1 btn cycle, desktop: 3 btn group)
    │
    ├── components/
    │   ├── common/
    │   │   ├── Icons.jsx         # Semua SVG icon sebagai komponen (centralized)
    │   │   ├── IconWrapper.jsx   # Wrapper SVG reusable (viewBox, stroke, className)
    │   │   ├── Card.jsx          # Card primitives: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardBadge
    │   │   ├── Heading.jsx       # Heading primitive: tagline, title, paragraph, align
    │   │   ├── LegalTOC.jsx      # Shared Table of Contents for legal pages: LegalMobileTOC & LegalDesktopTOC
    │   │   ├── OfflineNotice.jsx # Global connection status banner (appears when offline, confirmation when reconnected)
    │   │   └── ErrorBoundary.jsx # React Error Boundary (Class Component) — catches unhandled JS errors, renders fallback UI
    │   │
    │   └── layouts/
    │       ├── navbar/
    │       │   ├── Navbar.jsx    # Fixed header: logo, nav links, theme toggle, mobile menu
    │       │   └── NavigationLink.jsx  # Nav link: route (Link) atau anchor (a), mobile/desktop variant
    │       └── footer/
    │           ├── Footer.jsx    # Footer: brand, nav, contact, social, policies
    │           └── FooterLink.jsx  # Footer link: route (Link) atau anchor (a), hover underline
    │
    ├── features/
    │   ├── home/
    │   │   ├── HeroSection.jsx              # Hero: heading, CTA, browser mockup, floating badges
    │   │   ├── ServiceSection.jsx           # Layanan: grid 6 card dari serviceData
    │   │   ├── ValuePropositionSection.jsx  # Why Fractabase: 6 benefit cards
    │   │   ├── WorkProcessSection.jsx       # 5 langkah kerja (timeline zigzag)
    │   │   ├── ProjectSection.jsx           # Portfolio: filter kategori, show more/less
    │   │   └── ContactSection.jsx           # Form kontak + info kontak (validasi, country code dropdown)
    │   ├── about/
    │   │   ├── HeroSection.jsx              # About Hero: animated title with 3D space background
    │   │   ├── StorySection.jsx             # Company story & journey (2-column layout with image)
    │   │   ├── VisionMissionSection.jsx     # Vision & Mission cards with icons
    │   │   ├── ValuesSection.jsx            # Core values grid with icons & descriptions
    │   │   ├── TeamSection.jsx              # Team member cards with social links
    │   │   ├── CTASection.jsx               # Call-to-action section (link to contact)
    │   │   ├── Object3DSpace.jsx            # 3D floating objects background (Canvas + GSAP)
    │   │   └── BackgroundDecorations.jsx    # Animated gradient orbs background
    │   ├── services/
    │   │   ├── HeroSection.jsx              # Services Hero: headline & intro copy
    │   │   ├── DetailServiceSection.jsx     # Detail layanan: service cards dengan icon, badge, features
    │   │   ├── EngagementModelSection.jsx   # Model kerja sama: Fixed Price, Time & Material, Dedicated Team
    │   │   ├── ProvenResultSection.jsx      # Bukti hasil: metrics strip + case highlights
    │   │   ├── FAQSection.jsx               # FAQ accordion: pertanyaan umum layanan
    │   │   ├── CTASection.jsx               # Call-to-action: konsultasi gratis
    │   │   ├── ServicesBackground.jsx       # Background decoration: animated elements
    │   │   └── AnimatedCounter.jsx          # Utility: animated number counter untuk metrics
    │   ├── privacy-policy/
    │   │   ├── PrivacyPolicyHeader.jsx      # Header: title, last updated, intro
    │   │   ├── PrivacyPolicySection.jsx     # Main content: TOC + section cards
    │   │   └── PrivacySectionCard.jsx       # Card component: per-section content card
    │   ├── terms-and-conditions/
    │   │   ├── TermsAndConditionsHeader.jsx # Header: title, last updated, intro
    │   │   ├── TermsAndConditionsSection.jsx # Main content: TOC + section cards
    │   │   └── TermsSectionCard.jsx         # Card component: per-section content card
    │   ├── under-maintenance/
    │   │   └── UnderMaintenanceSection.jsx  # Section under maintenance: particle canvas + centered content
    │   ├── not-found/
    │   │   └── NotFoundSection.jsx          # Section 404: animated 404 numbers, particle canvas, dual CTA (home + back)
    │   ├── server-error/
    │   │   └── ServerErrorSection.jsx       # Section 500: animated 500 numbers, particle canvas, dual CTA (reload + home)
    │   └── compliance/
    │       └── ComplianceSection.jsx        # Compliance & legalitas (khusus korporat/B2B) — belum di-import
    │
    ├── pages/
    │   ├── home/
    │   │   ├── Home.jsx          # Home page: gabungan semua section
    │   │   └── Home.module.css   # CSS module: background pattern hero & work-process
    │   ├── about-us/
    │   │   └── AboutUs.jsx       # About Us page: company story, vision/mission, values, team
    │   ├── services/
    │   │   └── Services.jsx      # Services page: detail layanan, engagement model, FAQ, CTA
    │   ├── privacy-policy/
    │   │   └── PrivacyPolicy.jsx # Privacy Policy page: header + TOC + section cards
    │   ├── terms-and-conditions/
    │   │   └── TermsAndConditions.jsx # Terms & Conditions page: header + TOC + section cards
    │   ├── under-maintenance/
    │   │   └── UnderMaintenance.jsx      # Halaman placeholder untuk rute yang belum siap
    │   ├── not-found/
    │   │   └── NotFound.jsx             # Halaman 404 Not Found (catch-all route path="*")
    │   └── server-error/
    │       └── ServerError.jsx          # Halaman 500 Internal Server Error (runtime crash fallback)
    │
    ├── data/
    │   ├── aboutData.js             # Data About Us: vision, mission, values (icon, title, description)
    │   ├── benefits.js              # Data benefit/value proposition (icon, title, description)
    │   ├── compliance.js            # Data compliance & legalitas (icon, title, desc)
    │   ├── contactFormData.js       # Data form kontak: PROJECT_TYPES, BUDGET_RANGES, TIME_TARGETS, COUNTRY_CODES
    │   ├── contactInfo.js           # Data kontak (email, WA, address, hours) & social links
    │   ├── privacyPolicyData.js     # Data Privacy Policy: sections dengan title, icon, highlight, content
    │   ├── projects.js              # Data portfolio (id, category, client, title, result, techStack)
    │   ├── serviceData.js           # Data layanan (icon, badge, title, description, features)
    │   ├── team.js                  # Data team members (name, role, bio, avatar, social links)
    │   ├── termsAndConditionsData.js # Data Terms & Conditions: sections dengan title, icon, highlight, content
    │   └── workProcessSteps.js      # Data langkah kerja (num, icon, title, desc)
    │
    ├── hooks/
    │   ├── useContactForm.js        # Custom hook untuk form kontak (state, validasi, submit)
    │   ├── useOnlineStatus.js       # Custom hook untuk melacak status online/offline browser
    │   ├── useScrollSpy.js          # Custom hook untuk scroll-spy TOC legal pages
    │   └── useParticleNetwork.js    # Custom hook untuk canvas particle network animation
    │
    ├── utils/
    │   ├── validators.js            # Fungsi validasi (email, phone, required)
    │   └── formatPhoneNumber.js     # Fungsi format nomor telepon
    │
    └── assets/
        ├── hero.png              # ⚠️ Hero image — tidak di-import ke mana pun
        ├── vite.svg              # ⚠️ Vite logo — tidak di-import ke mana pun
        ├── react.svg             # ⚠️ React logo — tidak di-import ke mana pun
        └── images/
            └── image-1.svg       # ⚠️ SVG image — tidak di-import ke mana pun
```

---

## 2. Penjelasan Tiap Folder

### `src/`

- **Fungsi**: Source code utama seluruh aplikasi
- **Boleh**: Semua folder dan file JavaScript/CSS/asset yang menjadi bagian dari aplikasi
- **Tidak boleh**: File konfigurasi build (harus di root), file dokumentasi selain yang sudah ada, file temporary/scratch

### `src/styles/`

- **Fungsi**: Global styles dan design tokens
- **Berkas**: `index.css` — Tailwind import, CSS variables (`:root` & `[data-theme="dark"]`), `@theme` block, global utility, global reset/base styles
- **Boleh**: File CSS global lainnya jika diperlukan (misal: `fonts.css`, `animations.css`)
- **Tidak boleh**: CSS Module (taruh di folder page/feature terkait), inline style di JSX (pakai utility class atau token)

### `src/theme/`

- **Fungsi**: Semua yang berkaitan dengan sistem tema (light/dark/device)
- **Berkas**: `ThemeContext.js` (context & constants), `ThemeProvider.jsx` (provider & logic), `ThemeToggle.jsx` (UI toggle)
- **Boleh**: Komponen/hook terkait tema lainnya
- **Tidak boleh**: Logika yang tidak berhubungan dengan tema

### `src/components/`

- **Fungsi**: Komponen UI reusable
- **Subfolder**: `common/` (dipakai banyak tempat), `layouts/` (struktur halaman: navbar, footer)
- **Boleh**: Komponen yang benar-benar dipakai di 2+ tempat
- **Tidak boleh**: Komponen yang hanya dipakai di 1 section/fitur (taruh di folder feature tersebut)

### `src/components/common/`

- **Fungsi**: Komponen reusable yang dipakai di banyak tempat/feature
- **Berkas**: `Icons.jsx`, `IconWrapper.jsx`, `Card.jsx` (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardBadge), `Heading.jsx` (Heading primitive dengan tagline, title, paragraph, align), `LegalTOC.jsx` (shared TOC untuk legal pages), `OfflineNotice.jsx` (global connection status banner), `ErrorBoundary.jsx` (React Error Boundary — Class Component untuk menangkap unhandled JS errors dan render fallback UI)
- **Boleh**: Komponen UI generik lainnya (Button, Badge, Modal, dll)
- **Tidak boleh**: Komponen yang spesifik hanya untuk 1 feature (misal: `HeroCard` hanya untuk Hero)

### `src/components/layouts/`

- **Fungsi**: Komponen struktur/layout halaman yang dipakai global
- **Subfolder**: `navbar/`, `footer/`
- **Boleh**: Layout component lainnya (Sidebar, Layout wrapper, dll)
- **Tidak boleh**: Komponen yang bukan layout (pindah ke `common/` atau `features/`)

### `src/features/`

- **Fungsi**: Section/fitur yang menyusun halaman. Setiap folder = 1 kelompok section terkait
- **Subfolder aktif**: `home/` (6 section Home page), `about/` (8 section About page), `services/` (8 section Services page), `privacy-policy/` (3 komponen legal page), `terms-and-conditions/` (3 komponen legal page), `under-maintenance/` (1 section placeholder), `not-found/` (1 section 404), `server-error/` (1 section 500)
- **Subfolder belum aktif**: `compliance/` (section compliance belum di-import)
- **Boleh**: Komponen yang spesifik hanya untuk section tersebut, CSS Module section, data lokal section, komponen 3D/animasi spesifik page (seperti `Object3DSpace`, `BackgroundDecorations`)
- **Tidak boleh**: Komponen yang dipakai di section lain (pindah ke `common/`)

### `src/pages/`

- **Fungsi**: Halaman/route yang dirender oleh React Router
- **Subfolder aktif**: `home/` (halaman utama + CSS Module), `about-us/` (tentang kami), `services/` (layanan), `privacy-policy/` (kebijakan privasi), `terms-and-conditions/` (syarat & ketentuan), `under-maintenance/` (placeholder rute belum siap), `not-found/` (404 catch-all), `server-error/` (500 runtime crash fallback)
- **Boleh**: Komponen spesifik page, CSS Module page, komposisi section menjadi halaman
- **Tidak boleh**: Komponen reusable (pindah ke `components/`), data statis global (pindah ke `data/`)

### `src/data/`

- **Fungsi**: Data statis yang dipakai oleh komponen/halaman
- **Berkas**:
  - `aboutData.js` — Data About Us: vision, mission, values (icon, title, description)
  - `benefits.js` — Data benefit/value proposition (icon, title, description)
  - `compliance.js` — Data compliance & legalitas (icon, title, desc)
  - `contactFormData.js` — Data form kontak: PROJECT_TYPES, BUDGET_RANGES, TIME_TARGETS, COUNTRY_CODES
  - `contactInfo.js` — Data kontak (email, WA, address, hours) & social links
  - `privacyPolicyData.js` — Data Privacy Policy: sections dengan title, icon, highlight, content
  - `projects.js` — Data portfolio (id, category, client, title, result, techStack)
  - `serviceData.js` — Data layanan (icon, badge, title, description, features)
  - `team.js` — Data team members (name, role, bio, avatar, social links)
  - `termsAndConditionsData.js` — Data Terms & Conditions: sections dengan title, icon, highlight, content
  - `workProcessSteps.js` — Data langkah kerja (num, icon, title, desc)
- **Boleh**: File data statis lainnya (misal: `testimonials.js`, `faq.js`)
- **Tidak boleh**: Fungsi/logika yang bukan data (pindah ke `utils/` atau `hooks/`), data yang hanya dipakai 1 komponen (bisa taruh di file komponen)

### `src/assets/`

- **Fungsi**: Asset statis (gambar, icon, font)
- **Subfolder**: `images/`
- **Boleh**: Gambar, SVG, font, asset lainnya
- **Tidak boleh**: File JavaScript/CSS

### `src/hooks/`

- **Fungsi**: Custom hooks React — logic stateful yang bisa dipakai ulang di beberapa komponen
- **Berkas**: `useContactForm.js` — custom hook untuk form kontak (state, validasi, submit logic, network failure check via useOnlineStatus), `useOnlineStatus.js` — custom hook untuk status koneksi internet (navigator.onLine & event listeners), `useScrollSpy.js` — custom hook scroll-spy untuk legal page TOC (IntersectionObserver-based), `useParticleNetwork.js` — custom hook canvas particle network animation (autonomous particles + proximity connections + cursor gravity)
- **Boleh**: Custom hooks lainnya yang benar-benar dipakai di 2+ komponen
- **Tidak boleh**: Logic yang hanya dipakai di 1 komponen (tetap di file komponen), fungsi murni tanpa React hook (taruh di `utils/`)

### `src/utils/`

- **Fungsi**: Fungsi utility/helper murni (pure functions) — tidak bergantung pada React hook/state
- **Berkas**: `validators.js` (validasi email, phone, required), `formatPhoneNumber.js` (format nomor telepon)
- **Boleh**: Fungsi formatter, validator, parser/transformer data, fungsi perhitungan, fungsi generate/format string
- **Tidak boleh**: Fungsi yang bergantung pada React hook/state (taruh di `hooks/`), komponen React (taruh di `components/` atau `features/`)

---

## 3. Penjelasan File Kunci

| File                                               | Fungsi                                                                                                                |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `index.html`                                       | Entry point HTML. Berisi script untuk apply theme sebelum React load (mencegah flash).                                |
| `vite.config.js`                                   | Konfigurasi build: plugin React & Tailwind CSS.                                                                       |
| `eslint.config.js`                                 | Konfigurasi ESLint (flat config): rules, plugins react-hooks & react-refresh.                                         |
| `src/main.jsx`                                     | Entry point React. Mount `<App />` ke `#root` dengan StrictMode.                                                      |
|| `src/App.jsx`                                      | Root component. Bungkus dengan `ThemeProvider` dan `BrowserRouter`. Render `Navbar`, `OfflineNotice`, `ErrorBoundary` (wraps `Routes`), `Footer`. |
| `src/styles/index.css`                             | Design tokens (CSS variables), Tailwind import, `@theme` block, global styles, keyframes.                             |
| `src/theme/ThemeContext.js`                        | Context untuk state tema. Export `THEMES`, `THEME_STORAGE_KEY`, `useTheme()`.                                         |
| `src/theme/ThemeProvider.jsx`                      | Provider yang resolve tema (light/dark/device), apply ke `document.documentElement`, listen OS preference.            |
| `src/theme/ThemeToggle.jsx`                        | UI untuk ganti tema. Mobile: 1 button cycle. Desktop: 3 button group.                                                 |
| `src/components/common/Icons.jsx`                  | Semua SVG icon sebagai komponen React. Centralized — tidak boleh inline `<svg>` di tempat lain.                       |
| `src/components/common/IconWrapper.jsx`            | Wrapper SVG reusable dengan default viewBox, stroke, className.                                                       |
| `src/components/common/Card.jsx`                   | Card primitives: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `CardBadge`.      |
| `src/components/common/Heading.jsx`                | Heading primitive: `tagline`, `title`, `paragraph`, `align`. Reusable untuk section heading dengan border-bottom.     |
| `src/components/common/LegalTOC.jsx`                | Shared Table of Contents for legal pages: `LegalMobileTOC` (mobile dropdown) and `LegalDesktopTOC` (sticky sidebar).  |
|| `src/components/common/OfflineNotice.jsx`           | Global connection status banner: appears app-wide when offline, shows brief confirmation when reconnected.            |
|| `src/components/common/ErrorBoundary.jsx`           | React Error Boundary (Class Component): catches unhandled JS errors in render tree, displays fallback UI instead of white screen of death. |
|| `src/components/layouts/navbar/Navbar.jsx`         | Fixed header: logo, nav links (menggunakan NavigationLink), theme toggle, mobile dropdown menu.                       |
| `src/components/layouts/navbar/NavigationLink.jsx` | Nav link reusable: mendukung route (`Link`) atau anchor (`a`), variant mobile & desktop, animasi stagger.             |
| `src/components/layouts/footer/Footer.jsx`         | Footer: brand info, nav links, contact info, social links, policies, theme toggle.                                    |
| `src/components/layouts/footer/FooterLink.jsx`     | Footer link reusable: mendukung route (`Link`) atau anchor (`a`), hover underline animation.                          |
| `src/pages/home/Home.jsx`                          | Home page. Gabungan section: Hero, Services, ValueProposition, WorkProcess, Project, Contact.                         |
| `src/pages/home/Home.module.css`                   | CSS Module untuk Home: background pattern hero (SVG fractal) & work-process.                                          |
| `src/pages/about-us/AboutUs.jsx`                   | About Us page. Gabungan section: Hero, Story, VisionMission, Values, Team, CTA.                                       |
| `src/pages/services/Services.jsx`                  | Services page. Gabungan section: Hero, DetailService, EngagementModel, ProvenResult, FAQ, CTA.                        |
| `src/pages/privacy-policy/PrivacyPolicy.jsx`       | Privacy Policy page. Perakit: PrivacyPolicyHeader + PrivacyPolicySection (loop PrivacySectionCard).                   |
| `src/pages/terms-and-conditions/TermsAndConditions.jsx` | Terms & Conditions page. Perakit: TermsAndConditionsHeader + TermsAndConditionsSection (loop TermsSectionCard).  |
|| `src/pages/under-maintenance/UnderMaintenance.jsx` | Halaman placeholder "Under Maintenance" untuk rute yang belum siap (/projects, /contact). Perakit: UnderMaintenanceSection. |
|| `src/pages/not-found/NotFound.jsx`                 | Halaman 404 Not Found (catch-all route path="*"). Perakit: NotFoundSection dengan animasi 404 & partikel canvas.    |
|| `src/pages/server-error/ServerError.jsx`           | Halaman 500 Internal Server Error (route path="/500" + ErrorBoundary fallback). Perakit: ServerErrorSection dengan animasi 500 & partikel canvas. |
| `src/features/home/HeroSection.jsx`                | Hero section: heading, CTA, browser mockup, floating badges. Menggunakan Icons.                                       |
| `src/features/home/ServiceSection.jsx`             | Layanan: grid 6 card dari serviceData. Menggunakan Card, Heading, Icons.                                              |
| `src/features/home/ValuePropositionSection.jsx`    | Why Fractabase: 6 benefit cards. Menggunakan Card, Heading, benefits data.                                            |
| `src/features/home/WorkProcessSection.jsx`         | 5 langkah kerja (timeline zigzag). Menggunakan Card, Heading, workProcessSteps data.                                  |
| `src/features/home/ProjectSection.jsx`             | Portfolio: filter kategori, show more/less. Menggunakan Icons, Heading, projects data.                                |
| `src/features/home/ContactSection.jsx`             | Form kontak + info kontak. Menggunakan Card, Icons, useContactForm, validators, contactFormData, contactInfo.         |
| `src/features/about/HeroSection.jsx`               | About Hero: animated title dengan 3D space background (Object3DSpace + BackgroundDecorations).                        |
| `src/features/about/StorySection.jsx`              | Company story & journey (2-column layout with image).                                                                 |
| `src/features/about/VisionMissionSection.jsx`      | Vision & Mission: 2 card dengan icons.                                                                                |
| `src/features/about/ValuesSection.jsx`             | Core values grid dengan icons & descriptions.                                                                         |
| `src/features/about/TeamSection.jsx`               | Team member cards dengan photo, role, bio, dan social links.                                                          |
| `src/features/about/CTASection.jsx`                | Call-to-action section (link ke halaman contact).                                                                     |
| `src/features/about/Object3DSpace.jsx`             | 3D floating objects background (Canvas + GSAP). Dipakai oleh HeroSection About.                                       |
| `src/features/about/BackgroundDecorations.jsx`     | Animated gradient orbs background. Dipakai oleh HeroSection About.                                                    |
| `src/features/services/HeroSection.jsx`            | Services Hero: headline, intro copy, simple layout.                                                                    |
| `src/features/services/DetailServiceSection.jsx`   | Detail layanan: grid cards dengan icon, badge, description, features list.                                             |
| `src/features/services/EngagementModelSection.jsx` | Model kerja sama: Fixed Price, Time & Material, Dedicated Team (card layout).                                         |
| `src/features/services/ProvenResultSection.jsx`    | Bukti hasil: animated metrics strip + case highlights.                                                                 |
| `src/features/services/FAQSection.jsx`             | FAQ: accordion pertanyaan umum layanan.                                                                                |
| `src/features/services/CTASection.jsx`             | Call-to-action: konsultasi gratis, link ke contact.                                                                    |
| `src/features/services/ServicesBackground.jsx`     | Background decoration: animated elements untuk Services page.                                                          |
| `src/features/services/AnimatedCounter.jsx`        | Utility component: animated number counter untuk metrics/stats.                                                        |
| `src/features/privacy-policy/PrivacyPolicyHeader.jsx` | Privacy Policy header: title, last updated, intro text.                                                              |
| `src/features/privacy-policy/PrivacyPolicySection.jsx` | Privacy Policy main: TOC (mobile/desktop) + section cards loop.                                                     |
| `src/features/privacy-policy/PrivacySectionCard.jsx` | Privacy Policy card: individual section content dengan highlight boxes.                                              |
| `src/features/terms-and-conditions/TermsAndConditionsHeader.jsx` | Terms & Conditions header: title, last updated, intro text.                                             |
| `src/features/terms-and-conditions/TermsAndConditionsSection.jsx` | Terms & Conditions main: TOC (mobile/desktop) + section cards loop.                                    |
| `src/features/terms-and-conditions/TermsSectionCard.jsx` | Terms & Conditions card: individual section content dengan highlight boxes.                                    |
| `src/features/under-maintenance/UnderMaintenanceSection.jsx` | Section Under Maintenance: particle canvas (primary cyan) + centered content (headline, paragraph, CTA). Full Tailwind v4. |
|| `src/features/not-found/NotFoundSection.jsx`       | Section 404: animated 404 numbers, particle canvas, dual CTA (home + back), GSAP entrance animation.                   |
|| `src/features/server-error/ServerErrorSection.jsx` | Section 500: animated 500 numbers, particle canvas, dual CTA (reload + home), GSAP entrance animation.                 |
|| `src/features/compliance/ComplianceSection.jsx`    | Section compliance & legalitas (korporat/B2B). Menggunakan Card, Icons, compliance data. Belum di-import ke mana pun. |
| `src/data/aboutData.js`                            | Data About Us: vision, mission, values (icon, title, description).                                                    |
| `src/data/benefits.js`                             | Data benefit/value proposition: icon, title, description.                                                             |
| `src/data/compliance.js`                           | Data compliance & legalitas: icon, title, desc.                                                                       |
| `src/data/contactFormData.js`                      | Data form kontak: PROJECT_TYPES, BUDGET_RANGES, TIME_TARGETS, COUNTRY_CODES.                                          |
| `src/data/contactInfo.js`                          | Data kontak (email, whatsapp, address, hours) & social links (github, linkedin, whatsapp, email).                     |
| `src/data/privacyPolicyData.js`                    | Data Privacy Policy: sections dengan title, icon, highlight, content (paragraphs & lists).                            |
| `src/data/projects.js`                             | Data portfolio: id, category, categoryLabel, client, title, description, result, techStack, ctaLink.                  |
| `src/data/serviceData.js`                          | Data layanan: icon, badge, badgeVariant, title, description, features, actionText.                                    |
| `src/data/team.js`                                 | Data team members: name, role, bio, avatar, social links (linkedin, twitter, github).                                 |
| `src/data/termsAndConditionsData.js`               | Data Terms & Conditions: sections dengan title, icon, highlight, content (paragraphs & lists).                        |
| `src/data/workProcessSteps.js`                     | Data langkah kerja: num, icon, title, desc.                                                                           |
| `src/hooks/useContactForm.js`                      | Custom hook untuk form kontak: state management, validasi, submit logic, network failure handling via useOnlineStatus. |
| `src/hooks/useOnlineStatus.js`                     | Custom hook untuk melacak status online/offline browser via navigator.onLine & window events.                        |
| `src/hooks/useScrollSpy.js`                        | Custom hook scroll-spy untuk legal page TOC (IntersectionObserver-based).                                             |
| `src/hooks/useParticleNetwork.js`                  | Custom hook untuk canvas particle network animation — autonomous particles + proximity connections + cursor gravity.  |
| `src/utils/validators.js`                          | Fungsi validasi: email regex, phone length, required field.                                                           |
| `src/utils/formatPhoneNumber.js`                   | Fungsi format nomor telepon menjadi format Indonesia (xxx-xxxx-xxxx).                                                 |

---

## 4. Arsitektur & Design System

### Layout Pattern

```
App (ThemeProvider > BrowserRouter > AppRoutes)
  ├── Navbar (fixed top, outside Routes) — navigasi lintas rute
  ├── OfflineNotice (global connection status banner)
  ├── ErrorBoundary (wraps Routes — catches runtime errors)
  │   └── Routes
  │       ├── Home ("/")
  │       │   ├── HeroSection
  │       │   ├── ServiceSection
  │       │   ├── ValuePropositionSection
  │       │   ├── WorkProcessSection
  │       │   ├── ProjectSection
  │       │   └── ContactSection
  │       ├── AboutUs ("/about-us")
  │       │   ├── HeroSection
  │       │   ├── StorySection
  │       │   ├── VisionMissionSection
  │       │   ├── ValuesSection
  │       │   ├── TeamSection
  │       │   └── CTASection
  │       ├── Services ("/services")
  │       │   ├── HeroSection
  │       │   ├── DetailServiceSection
  │       │   ├── EngagementModelSection
  │       │   ├── ProvenResultSection
  │       │   ├── FAQSection
  │       │   └── CTASection
  │       ├── PrivacyPolicy ("/privacy-policy")
  │       │   ├── PrivacyPolicyHeader
  │       │   └── PrivacyPolicySection (with PrivacySectionCard loop)
  │       ├── TermsAndConditions ("/terms-and-conditions")
  │       │   ├── TermsAndConditionsHeader
  │       │   └── TermsAndConditionsSection (with TermsSectionCard loop)
  │       ├── UnderMaintenance ("/projects", "/contact")
  │       │   └── UnderMaintenanceSection
  │       ├── ServerError ("/500")
  │       │   └── ServerErrorSection
  │       └── NotFound (path="*")
  │           └── NotFoundSection
  └── Footer (conditional: hidden for /projects, /contact, /500)
```

### Design System

- **Design Tokens**: CSS variables di `src/styles/index.css` (`:root` & `[data-theme="dark"]`)
- **60-30-10 Rule**: 60% light base (#f8fafc) + primary cyan, 30% secondary violet, 10% tertiary peach
- **Tailwind v4**: CSS-first config via `@theme` block (alias `--color-*`), `@utility` untuk custom utility
- **Icons**: Centralized di `Icons.jsx` via `IconWrapper.jsx` — never inline `<svg>`
- **Card System**: Modular primitives di `Card.jsx` (variant, hoverable, badge)
- **Heading Primitive**: Reusable `Heading.jsx` untuk section heading dengan tagline & border
- **Navigation Link**: Reusable `NavigationLink.jsx` dengan support route & anchor, animasi stagger

### State Management

- **Theme**: React Context (`ThemeContext`) + localStorage + OS preference (`prefers-color-scheme`)
- **Form**: Local state (`useState`) di `ContactSection` via `useContactForm` hook (state, validasi, submit)
- **Navbar**: Local state (`useState`) untuk mobile menu toggle

### Tech Stack

| Kategori   | Teknologi                                |
| ---------- | ---------------------------------------- |
| Framework  | React 19                                 |
| Build Tool | Vite 8                                   |
| Styling    | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Routing    | React Router DOM 7                       |
| Animation  | GSAP 3.15 + ScrollTrigger                |
| Linting    | ESLint 10 + react-hooks + react-refresh  |
| Commit     | Commitizen + Commitlint (conventional)   |
| Release    | standard-version                         |

---

## 5. Aturan Penempatan File Baru

### Section/fitur baru (mirip section yang sudah ada)

- **Taruh di**: `src/features/<nama-section>/`
- **Struktur**: Ikut pola yang sudah ada — 1 folder per section, berisi file `.jsx` untuk komponen section
- **Contoh**: Section "Testimonials" baru → `src/features/testimonials/TestimonialSection.jsx`
- **Jika butuh CSS Module**: Taruh di folder yang sama — `src/features/testimonials/TestimonialSection.module.css`
- **Jika butuh data statis**: Taruh di `src/data/` (misal: `testimonials.js`)

### Komponen reusable yang dipakai lebih dari satu tempat

- **Taruh di**: `src/components/common/`
- **Penamaan**: PascalCase `.jsx` — contoh: `Button.jsx`, `Modal.jsx`, `Badge.jsx`
- **Jika butuh subfolder**: Buat hanya jika komponen tersebut cukup kompleks (misal: `src/components/common/Button/Button.jsx`)

### Komponen yang spesifik hanya untuk satu section/fitur

- **Taruh di**: `src/features/<nama-section>/` — bersama file section-nya
- **JANGAN taruh di**: `src/components/common/` (karena tidak reusable)
- **Contoh**: `Object3DSpace.jsx` hanya untuk About → taruh di `src/features/about/`

### Halaman/route baru selain Home

- **Taruh di**: `src/pages/<nama-page>/`
- **Struktur**: Ikut pola Home — 1 folder per page, berisi file `.jsx` untuk halaman
- **Contoh**: Halaman About → `src/pages/about-us/AboutUs.jsx`
- **CSS Module page**: Taruh di folder yang sama — `src/pages/<nama-page>/<NamaPage>.module.css`
- **Jangan lupa**: Daftarkan route baru di `src/App.jsx` pada `<Routes>`

### Data statis baru (mirip data yang sudah ada)

- **Taruh di**: `src/data/`
- **Penamaan**: camelCase `.js` — contoh: `testimonials.js`, `faq.js`
- **Format**: Export array of objects, konsisten dengan field yang sudah ada di `projects.js` / `serviceData.js`

### Asset gambar/icon baru

- **Asset global** (dipakai banyak halaman, misal: logo, illustration) → `src/assets/` atau `src/assets/images/`
- **Asset spesifik section** (hanya dipakai 1 section) → taruh di `src/features/<nama-section>/assets/` (buat subfolder `assets/` di dalam folder section)
- **Icon SVG** → Jangan taruh sebagai file. Tambahkan sebagai komponen di `src/components/common/Icons.jsx`

### CSS Module baru

- **Taruh di**: Folder yang sama dengan komponen/page yang memakainya
- **Kapan pakai CSS Module**: Ketika style benar-benar spesifik untuk 1 komponen/page dan tidak reusable
- **Kapan pakai utility class**: Selama bisa pakai Tailwind utility atau custom utility yang sudah ada di `index.css`, pakai itu. Jangan buat CSS Module hanya untuk style sederhana.

### File konfigurasi baru (jika ada)

- **Taruh di**: Root project (`/`)
- **Contoh**: `eslint.config.js`, `commitlint.config.js`
- **Jangan taruh di**: `src/` (kecuali konfigurasi spesifik feature yang memang harus di sana)

### Custom hook baru

- **Taruh di**: `src/hooks/`
- **Penamaan**: camelCase `.js` dengan prefix `use` — contoh: `useFormValidator.js`, `useScrollPosition.js`
- **Aturan**: Harus dipakai di 2+ komponen. Jika hanya dipakai 1 komponen, tetap di file komponen tersebut.

### Utility/helper function baru

- **Taruh di**: `src/utils/`
- **Penamaan**: camelCase `.js` — contoh: `formatDate.js`, `debounce.js`, `storage.js`
- **Aturan**: Harus berupa pure function (tanpa React hook). Jika bergantung pada React hook/state, jadikan custom hook di `src/hooks/`.

---

## 6. Naming Convention

| Tipe                         | Konvensi                                        | Contoh                                            |
| ---------------------------- | ----------------------------------------------- | ------------------------------------------------- |
| Component (file)             | PascalCase `.jsx`                               | `HeroSection.jsx`, `Navbar.jsx`                   |
| Component (folder)           | lowercase (nama section)                        | `about/`, `home/`, `compliance/`                  |
| Context/Hook (file)          | camelCase `.js`                                 | `ThemeContext.js`                                 |
| Context provider             | PascalCase `.jsx`                               | `ThemeProvider.jsx`                               |
| Data file                    | camelCase `.js`                                 | `serviceData.js`, `projects.js`                   |
| CSS Module                   | PascalCase `.module.css`                        | `Home.module.css`                                 |
| CSS global                   | kebab-case `.css`                               | `index.css`                                       |
| Layout component             | PascalCase `.jsx`                               | `Navbar.jsx`, `Footer.jsx`                        |
| Common component             | PascalCase `.jsx`                               | `Card.jsx`, `Icons.jsx`, `Heading.jsx`            |
| Icon component               | PascalCase (key di Icons.jsx)                   | `Icons.Code`, `Icons.ArrowRight`                  |
| Asset file (gambar/SVG/font) | kebab-case `.ext` (lowercase, hyphen-separated) | `hero.png`, `company-logo.svg`, `banner-home.svg` |
| Custom hook                  | camelCase `.js` dengan prefix `use`             | `useContactForm.js`, `useScrollPosition.js`       |
| Utility function             | camelCase `.js`                                 | `formatPhoneNumber.js`, `validators.js`           |

---

## 7. Do's and Don'ts

### JANGAN:

1. **Membuat folder baru di root/src tanpa alasan jelas** — Setiap folder baru harus mengikuti pola yang sudah ada (`features/`, `pages/`, `components/`, dll)
2. **Duplikasi struktur yang sudah ada** — Jika sudah ada di `components/common/`, jangan buat lagi di `features/`
3. **Memindahkan atau me-rename file tanpa mengecek dan memperbarui semua import/referensi** — Selalu cari semua file yang meng-import file yang akan diubah
4. **Menghapus file tanpa konfirmasi** — Termasuk file yang "tidak terlihat di-import" (mungkin belum di-import, bukan tidak terpakai)
5. **Menaruh komponen/logic yang sifatnya spesifik section di folder reusable** — Jika hanya dipakai 1 section, taruh di folder section tersebut
6. **Membuat pola/style baru yang bertentangan dengan konvensi yang sudah ada** — Misal: membuat inline `<svg>` (harus via `Icons.jsx`), atau membuat warna baru di luar design tokens
7. **Menaruh data statis di dalam file komponen** — Jika data dipakai di lebih dari 1 tempat, taruh di `src/data/`
8. **Menaruh asset icon sebagai file SVG** — Icon harus berupa komponen React di `Icons.jsx`, bukan file SVG terpisah
9. **Membuat CSS Module untuk style yang bisa pakai utility class** — Prioritas: Tailwind utility → custom utility di `index.css` → CSS Module (jika benar-benar spesifik)

### BOLEH:

1. **Menambah komponen baru di `components/common/`** — Jika benar-benar reusable di 2+ tempat
2. **Menambah section baru di `features/`** — Ikut struktur folder yang sudah ada
3. **Menambah data baru di `data/`** — Ikut format yang sudah ada
4. **Menambah route baru di `App.jsx`** — Ikut pola `<Route path="..." element={...} />`
5. **Menambah design token baru di `index.css`** — Ikut pola `--nama-token` dan alias `@theme`

---

## 8. Catatan Ambiguitas

### ⚠️ `src/features/compliance/ComplianceSection.jsx` — Tidak di-import ke mana pun

- File ini sudah memiliki konten lengkap, tapi **tidak ada file lain yang meng-importnya** (tidak ada di `Home.jsx`, tidak ada di page lain).
- Tidak jelas apakah ini section yang belum dipakai, atau section yang seharusnya sudah dimasukkan ke halaman tertentu.
- **Perlu konfirmasi user**: Apakah akan dimasukkan ke halaman tertentu, atau dihapus?

### ⚠️ `src/assets/hero.png` — Tidak di-import ke mana pun

- File gambar ini ada di `src/assets/`, tapi **tidak ada file yang meng-importnya**.
- Tidak jelas apakah ini asset yang belum dipakai, atau asset yang seharusnya sudah dipakai di `HeroSection.jsx`.
- **Perlu konfirmasi user**: Apakah akan dipakai, atau dihapus?

### ⚠️ `src/assets/images/image-1.svg` — Tidak di-import ke mana pun

- File SVG ini ada, tapi **tidak ada file yang meng-importnya**.
- Tidak jelas apakah ini asset yang belum dipakai, atau asset yang seharusnya sudah dipakai di section tertentu.
- **Perlu konfirmasi user**: Apakah akan dipakai, atau dihapus?

### ⚠️ `src/assets/vite.svg` — Tidak di-import ke mana pun

- File logo Vite ini ada, tapi **tidak ada file yang meng-importnya**.
- Kemungkinan ini adalah default asset dari template Vite yang tidak dihapus.
- **Perlu konfirmasi user**: Apakah akan dihapus, atau dipakai untuk sesuatu?

### ⚠️ `src/assets/react.svg` — Tidak di-import ke mana pun

- File logo React ini ada, tapi **tidak ada file yang meng-importnya**.
- Kemungkinan ini adalah default asset dari template Vite yang tidak dihapus.
- **Perlu konfirmasi user**: Apakah akan dihapus, atau dipakai untuk sesuatu?

---

## 9. Catatan Update

**INSTRUKSI TEGAS:**

Setiap kali ada perubahan struktur project — baik penambahan folder/file baru, pemindahan file, penggantian nama file/folder, penghapusan file/folder, atau munculnya pola baru — file `STRUCTURE-PROJECT.md` ini **WAJIB diperbarui** mengikuti perubahan tersebut.

Tujuannya agar file ini tetap menjadi **source of truth** struktur project — bukan dokumentasi yang cepat basi dan tidak mencerminkan kondisi asli.

**Siapa yang harus update:**

- AI Agent yang melakukan perubahan struktur
- Atau user yang melakukan perubahan (ingatkan AI Agent untuk update dokumentasi ini)

**Kapan update:**

- Setiap kali ada perubahan struktur project
- Sebelum sesi kerja selesai (jika ada perubahan)
- Setiap kali ada penambahan/penghapusan/perpindahan file/folder

---

## 10. Riwayat Revisi

| Tanggal    | Perubahan                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2026-09-11 | Update struktur features — semua section Home dipindah ke features/home/. Menghapus referensi folder individual (hero, project, services, dll). Menambahkan FooterLink.jsx. Menghapus catatan folder kosong.                                                                                                                                                                                                                                                                                                                                                       |
| 2026-09-15 | **REFACTOR** Privacy Policy + Terms & Conditions split per-section: (1) Pecah KEDUANYA menjadi one-section-one-file pattern (components/, hooks/, sections/), (2) Shared TOC + useScrollSpy hook, (3) Terms: tambah 3-layer hero parallax (grid, symbols, counter) + section depth parallax (number/content speed difference) + highlight border grow animation, (4) Rewrite copy Terms: aktif voice, hapus AI slop, substance unchanged, (5) Color audit: 60% (bg-surface, border-line) + 30% (bg-tertiary highlight) + 10% (text-primary, text-tertiary accent). |
| 2026-09-18 | **feat/about-us**: (1) Tambah `src/features/about/` — 8 komponen section (HeroSection, StorySection, VisionMissionSection, ValuesSection, TeamSection, CTASection, Object3DSpace, BackgroundDecorations), (2) Tambah `src/pages/about-us/AboutUs.jsx`, (3) Tambah `src/data/aboutData.js` + `src/data/team.js`, (4) Tambah `README.md` + `eslint.config.js` di root, (5) Hapus pages & features privacy-policy dan terms-and-conditions (sudah tidak ada di codebase), (6) Update Layout Pattern diagram dengan route `/about-us`.                                 |
| 2026-09-22 | **feat/services**: (1) Tambah `src/features/services/` — 8 komponen section (HeroSection, DetailServiceSection, EngagementModelSection, ProvenResultSection, FAQSection, CTASection, ServicesBackground, AnimatedCounter), (2) Tambah `src/pages/services/Services.jsx`, (3) Update `src/data/serviceData.js` dengan field tambahan (useCase, timeline, targetClients, provenResult), (4) Cinematic parallax: multi-layer depth (grid/orbs/nodes), SVG path draw on scroll, staggered card reveal, mouse-track glow, (5) Route `/services` aktif di App.jsx. |
| 2026-09-22 | **feat/legal-pages**: (1) Tambah `src/features/privacy-policy/` — 3 komponen (PrivacyPolicyHeader, PrivacyPolicySection, PrivacySectionCard), (2) Tambah `src/features/terms-and-conditions/` — 3 komponen (TermsAndConditionsHeader, TermsAndConditionsSection, TermsSectionCard), (3) Tambah `src/pages/privacy-policy/PrivacyPolicy.jsx` + `src/pages/terms-and-conditions/TermsAndConditions.jsx`, (4) Tambah `src/data/privacyPolicyData.js` + `src/data/termsAndConditionsData.js`, (5) Tambah `src/components/common/LegalTOC.jsx` (shared TOC: mobile dropdown + desktop sticky sidebar), (6) Tambah `src/hooks/useScrollSpy.js` (IntersectionObserver-based scroll-spy), (7) Asymmetric two-column layout dengan sticky TOC, highlight boxes untuk critical sections, scroll-driven parallax. |
| 2026-09-23 | **feat/under-maintenance**: (1) Tambah `src/features/under-maintenance/UnderMaintenanceSection.jsx` (section particle canvas + centered content, full Tailwind v4), (2) Tambah `src/pages/under-maintenance/UnderMaintenance.jsx` (halaman perakit section), (3) Tambah `src/hooks/useParticleNetwork.js` (hook canvas network partikel terhubung otonom + proximity lines + cursor gravity), (4) Pewarnaan 60-30-10: partikel canvas menggunakan `--primary-color` (cyan, 60% dominant), aksen titik `--tertiary-color` (amber, 10%), (5) Section height `h-[calc(100svh-4rem)]` agar konten pas di viewport tanpa scroll dengan Navbar+Footer tetap render. |
| 2026-09-24 | **feat/error-pages**: (1) Tambah `src/features/not-found/NotFoundSection.jsx` (404 page: broken fractal motif, mouse-driven parallax shapes, dual CTA pattern, quick nav links), (2) Tambah `src/pages/not-found/NotFound.jsx` (catch-all route `path="*"`), (3) Full-viewport without scroll: `h-screen overflow-hidden` pada main dan section, (4) Conditional footer hiding: route metadata di App.jsx, Footer baca dari useLocation, (5) 60-30-10 color discipline enforced, NO background grid (AI slop), clean geometric brand motifs. |
| 2026-09-26 | **feat/offline-notice**: (1) Tambah `src/components/common/OfflineNotice.jsx` (global connection status banner: floating corner badge dengan dark glassmorphism dan radar pulse animation), (2) Tambah `src/hooks/useOnlineStatus.js` (track browser online/offline status via navigator.onLine & window events), (3) Update `src/hooks/useContactForm.js` — network error detection via useOnlineStatus, form error state untuk network failure, (4) Update `src/features/home/ContactSection.jsx` — display network error message saat offline/submit gagal, (5) App.jsx refactor: split menjadi AppRoutes wrapper component untuk conditional footer rendering, OfflineNotice mount setelah Navbar, (6) Amber styling untuk connectivity warnings, aria-live="polite" accessibility. |
| 2026-09-26 | **feat/error-pages**: (1) Tambah `src/components/common/ErrorBoundary.jsx` (React Class Component Error Boundary untuk menangkap runtime crash & unhandled JS errors), (2) Tambah `src/features/server-error/ServerErrorSection.jsx` & `src/pages/server-error/ServerError.jsx` (halaman 500 React dengan partikel network & GSAP entrance), (3) Tambah `public/500.html` (static HTML fallback untuk Vercel edge/CDN level 500 error), (4) Tambah rute `/500` di `src/App.jsx` & bungkus `<Routes>` dengan `<ErrorBoundary>`, (5) Tambah ikon `RefreshCw` dan `AlertTriangle` di `src/components/common/Icons.jsx`. |
