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
├── CHANGELOG.md                  # Riwayat perubahan versi (standard-version)
├── STRUCTURE-PROJECT.md          # File ini — peta struktur project
│
├── node_modules/                 # Dependencies (auto-generated, jangan di-edit)
│   └── ...
│
├── dist/                         # Build output (auto-generated, jangan di-edit)
│   └── ...
│
└── src/                          # Source code utama
    ├── main.jsx                  # Entry point React (render ke #root)
    ├── App.jsx                   # Root component: ThemeProvider + BrowserRouter + Routes
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
    │   │   └── Heading.jsx       # Heading primitive: tagline, title, paragraph, align
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
    │   └── compliance/
    │       └── ComplianceSection.jsx        # Compliance & legalitas (khusus korporat/B2B) — belum di-import
    │
    ├── pages/
    │   └── home/
    │       ├── Home.jsx          # Home page: gabungan semua section
    │       └── Home.module.css   # CSS module: background pattern hero & work-process
    │
    ├── data/
    │   ├── benefits.js              # Data benefit/value proposition (icon, title, description)
    │   ├── compliance.js            # Data compliance & legalitas (icon, title, desc)
    │   ├── contactFormData.js       # Data form kontak: PROJECT_TYPES, BUDGET_RANGES, TIME_TARGETS, COUNTRY_CODES
    │   ├── contactInfo.js           # Data kontak (email, WA, address, hours) & social links
    │   ├── projects.js              # Data portfolio (id, category, client, title, result, techStack)
    │   ├── serviceData.js           # Data layanan (icon, badge, title, description, features)
    │   └── workProcessSteps.js      # Data langkah kerja (num, icon, title, desc)
    │
    ├── hooks/
    │   └── useContactForm.js        # Custom hook untuk form kontak (state, validasi, submit)
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
- **Berkas**: `Icons.jsx`, `IconWrapper.jsx`, `Card.jsx` (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardBadge), `Heading.jsx` (Heading primitive dengan tagline, title, paragraph, align)
- **Boleh**: Komponen UI generik lainnya (Button, Badge, Modal, dll)
- **Tidak boleh**: Komponen yang spesifik hanya untuk 1 feature (misal: `HeroCard` hanya untuk Hero)

### `src/components/layouts/`

- **Fungsi**: Komponen struktur/layout halaman yang dipakai global
- **Subfolder**: `navbar/`, `footer/`
- **Boleh**: Layout component lainnya (Sidebar, Layout wrapper, dll)
- **Tidak boleh**: Komponen yang bukan layout (pindah ke `common/` atau `features/`)

### `src/features/`

- **Fungsi**: Section/fitur yang menyusun halaman. Setiap folder = 1 kelompok section terkait
- **Subfolder**: `home/` (section-section penyusun Home page), `compliance/` (section compliance)
- **Boleh**: Komponen yang spesifik hanya untuk section tersebut, CSS Module section, data lokal section
- **Tidak boleh**: Komponen yang dipakai di section lain (pindah ke `common/`)

### `src/pages/`

- **Fungsi**: Halaman/route yang dirender oleh React Router
- **Subfolder aktif**: `home/` (satu-satunya halaman yang ada)
- **Boleh**: Komponen spesifik page, CSS Module page, komposisi section menjadi halaman
- **Tidak boleh**: Komponen reusable (pindah ke `components/`), data statis global (pindah ke `data/`)

### `src/data/`

- **Fungsi**: Data statis yang dipakai oleh komponen/halaman
- **Berkas**:
  - `benefits.js` — Data benefit/value proposition (icon, title, description)
  - `compliance.js` — Data compliance & legalitas (icon, title, desc)
  - `contactFormData.js` — Data form kontak: PROJECT_TYPES, BUDGET_RANGES, TIME_TARGETS, COUNTRY_CODES
  - `contactInfo.js` — Data kontak (email, WA, address, hours) & social links
  - `projects.js` — Data portfolio (id, category, client, title, result, techStack)
  - `serviceData.js` — Data layanan (icon, badge, title, description, features)
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
- **Berkas**: `useContactForm.js` — custom hook untuk form kontak (state, validasi, submit)
- **Boleh**: Custom hooks lainnya yang benar-benar dipakai di 2+ komponen
- **Tidak boleh**: Logic yang hanya dipakai di 1 komponen (tetap di file komponen), fungsi murni tanpa React hook (taruh di `utils/`)

### `src/utils/`

- **Fungsi**: Fungsi utility/helper murni (pure functions) — tidak bergantung pada React hook/state
- **Berkas**: `validators.js` (validasi email, phone, required), `formatPhoneNumber.js` (format nomor telepon)
- **Boleh**: Fungsi formatter, validator, parser/transformer data, fungsi perhitungan, fungsi generate/format string
- **Tidak boleh**: Fungsi yang bergantung pada React hook/state (taruh di `hooks/`), komponen React (taruh di `components/` atau `features/`)

---

## 3. Penjelasan File Kunci

| File                                       | Fungsi                                                                                                                        |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `index.html`                               | Entry point HTML. Berisi script untuk apply theme sebelum React load (mencegah flash).                                        |
| `vite.config.js`                           | Konfigurasi build: plugin React & Tailwind CSS.                                                                               |
| `src/main.jsx`                             | Entry point React. Mount `<App />` ke `#root` dengan StrictMode.                                                              |
| `src/App.jsx`                              | Root component. Bungkus dengan `ThemeProvider` dan `BrowserRouter`. Render `Navbar`, `Routes`, `Footer`.                      |
| `src/styles/index.css`                     | Design tokens (CSS variables), Tailwind import, `@theme` block, global styles, keyframes.                                     |
| `src/theme/ThemeContext.js`                | Context untuk state tema. Export `THEMES`, `THEME_STORAGE_KEY`, `useTheme()`.                                                 |
| `src/theme/ThemeProvider.jsx`              | Provider yang resolve tema (light/dark/device), apply ke `document.documentElement`, listen OS preference.                    |
| `src/theme/ThemeToggle.jsx`                | UI untuk ganti tema. Mobile: 1 button cycle. Desktop: 3 button group.                                                         |
| `src/components/common/Icons.jsx`          | Semua SVG icon sebagai komponen React. Centralized — tidak boleh inline `<svg>` di tempat lain.                               |
| `src/components/common/IconWrapper.jsx`    | Wrapper SVG reusable dengan default viewBox, stroke, className.                                                               |
| `src/components/common/Card.jsx`           | Card primitives: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `CardBadge`.              |
| `src/components/common/Heading.jsx`        | Heading primitive: `tagline`, `title`, `paragraph`, `align`. Reusable untuk section heading dengan border-bottom.              |
| `src/components/layouts/navbar/Navbar.jsx` | Fixed header: logo, nav links (menggunakan NavigationLink), theme toggle, mobile dropdown menu.                               |
| `src/components/layouts/navbar/NavigationLink.jsx` | Nav link reusable: mendukung route (`Link`) atau anchor (`a`), variant mobile & desktop, animasi stagger.             |
| `src/components/layouts/footer/Footer.jsx` | Footer: brand info, nav links, contact info, social links, policies, theme toggle.                                            |
| `src/pages/home/Home.jsx`                  | Home page. Gabungan section: Hero, Services, ValueProposition, WorkProcess, Project, Contact.                                |
| `src/pages/home/Home.module.css`           | CSS Module untuk Home: background pattern hero (SVG fractal) & work-process.                                                  |
| `src/data/benefits.js`                     | Data benefit/value proposition: icon, title, description.                                                                     |
| `src/data/compliance.js`                   | Data compliance & legalitas: icon, title, desc.                                                                               |
| `src/data/contactFormData.js`              | Data form kontak: PROJECT_TYPES, BUDGET_RANGES, TIME_TARGETS, COUNTRY_CODES.                                                  |
| `src/data/contactInfo.js`                  | Data kontak (email, whatsapp, address, hours) & social links (github, linkedin, whatsapp, email).                             |
| `src/data/projects.js`                     | Data portfolio: id, category, categoryLabel, client, title, description, result, techStack, ctaLink.                          |
| `src/data/serviceData.js`                  | Data layanan: icon, badge, badgeVariant, title, description, features, actionText.                                            |
| `src/data/workProcessSteps.js`             | Data langkah kerja: num, icon, title, desc.                                                                                   |
| `src/features/home/HeroSection.jsx`              | Hero section: heading, CTA, browser mockup, floating badges. Menggunakan Icons. |
| `src/features/home/ServiceSection.jsx`           | Layanan: grid 6 card dari serviceData. Menggunakan Card, Heading, Icons. |
| `src/features/home/ValuePropositionSection.jsx`  | Why Fractabase: 6 benefit cards. Menggunakan Card, Heading, benefits data. |
| `src/features/home/WorkProcessSection.jsx`       | 5 langkah kerja (timeline zigzag). Menggunakan Card, Heading, workProcessSteps data. |
| `src/features/home/ProjectSection.jsx`           | Portfolio: filter kategori, show more/less. Menggunakan Icons, Heading, projects data. |
| `src/features/home/ContactSection.jsx`           | Form kontak + info kontak. Menggunakan Card, Icons, useContactForm hook, validators, contactFormData, contactInfo. |
| `src/features/compliance/ComplianceSection.jsx` | Section compliance & legalitas (korporat/B2B). Menggunakan Card, Icons, compliance data. |
| `src/hooks/useContactForm.js`              | Custom hook untuk form kontak: state management, validasi, submit logic.                                                      |
| `src/utils/validators.js`                  | Fungsi validasi: email regex, phone length, required field.                                                                   |
| `src/utils/formatPhoneNumber.js`           | Fungsi format nomor telepon menjadi format Indonesia (xxx-xxxx-xxxx).                                                         |

---

## 4. Arsitektur & Design System

### Layout Pattern

```
App (ThemeProvider > BrowserRouter)
  ├── Navbar (fixed top, outside Routes) — navigasi lintas rute
  ├── Routes
  │   └── Home ("/")
  │       ├── HeroSection (features/home/HeroSection.jsx)
  │       ├── ServiceSection (features/home/ServiceSection.jsx)
  │       ├── ValuePropositionSection (features/home/ValuePropositionSection.jsx)
  │       ├── WorkProcessSection (features/home/WorkProcessSection.jsx)
  │       ├── ProjectSection (features/home/ProjectSection.jsx)
  │       └── ContactSection (features/home/ContactSection.jsx)
  └── Footer (outside Routes)
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
- **Contoh**: `HeroSection.jsx` seharusnya di `src/features/hero/`

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
- **Contoh**: `.eslintrc.js`, `commitlint.config.js`
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
| Component (folder)           | lowercase (nama section)                        | `hero/`, `contact/`, `work-process/`              |
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

Tujuannya agar file ini tetap menjadi **source of truth** struktur project — bukan dokumentasi yang cepat basa dan tidak mencerminkan kondisi asli.

**Siapa yang harus update:**

- AI Agent yang melakukan perubahan struktur
- Atau user yang melakukan perubahan (ingatkan AI Agent untuk update dokumentasi ini)

**Kapan update:**

- Setiap kali ada perubahan struktur project
- Sebelum sesi kerja selesai (jika ada perubahan)
- Setiap kali ada penambahan/penghapusan/perpindahan file/folder

---

## 10. Riwayat Revisi

| Tanggal | Perubahan |
|---------|-----------|
| 2026-09-11 | Update struktur features — semua section Home dipindah ke features/home/. Menghapus referensi folder individual (hero, project, services, dll). Menambahkan FooterLink.jsx. Menghapus catatan folder kosong. |
