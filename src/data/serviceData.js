import { Icons } from "../components/common/Icons";

export const serviceData = [
  {
    slug: "website-dev",
    icon: Icons.Website,
    badge: "Populer UMKM",
    badgeVariant: "secondary",
    title: "Website Development",
    summary:
      "Kami mengembangkan company profile, landing page, portofolio, hingga toko online. Desain dan fungsionalitas disesuaikan dengan kebutuhan operasional bisnis Anda.",
    description:
      "Kami mengembangkan company profile, landing page, portofolio, dan website e-commerce yang teroptimasi untuk konversi serta kecepatan akses. Setiap proyek diawali perumusan tujuan bisnis, perancangan arsitektur informasi, desain antarmuka responsif, hingga implementasi kode yang terstruktur dan mudah dikelola.",
    features: ["React, Next.js, atau Laravel", "Desain Responsif & SEO", "Integrasi CMS & Analitik"],
    actionText: "Konsultasi Layanan",
    technologies: ["React", "Next.js", "Laravel", "Tailwind CSS"],
    useCase: "UMKM dan perusahaan yang membutuhkan company profile, landing page, atau toko online profesional.",
    useCaseShort: "UMKM, company profile, toko online",
    provenResult: "+40% peningkatan traffic dalam 3 bulan setelah peluncuran website",
    timeline: "2-4 minggu",
  },
  {
    slug: "web-app",
    icon: Icons.WebApp,
    badge: "Enterprise & B2B",
    badgeVariant: "secondary",
    title: "Web Application",
    summary:
      "Kami mengembangkan dashboard analitik, sistem informasi, CRM, dan panel administrasi internal berbasis web untuk mendukung operasional bisnis harian.",
    description:
      "Kami mengembangkan dashboard analitik, sistem informasi, CRM, dan panel administrasi internal berbasis web yang selaras dengan proses bisnis Anda. Aplikasi dirancang intuitif untuk mengotomatisasi alur kerja berulang sehingga tim bekerja lebih terarah dan efisien.",
    features: ["Custom Dashboard & CRM", "Sistem Inventory & POS", "Otomatisasi Alur Kerja"],
    actionText: "Bangun Web App",
    technologies: ["React", "Node.js", "PostgreSQL", "REST API"],
    useCase: "Perusahaan dan startup yang membutuhkan sistem internal, dashboard analitik, atau aplikasi bisnis kustom.",
    useCaseShort: "Startup, sistem internal, dashboard",
    provenResult: "Waktu pembuatan laporan berkurang dari 3 hari menjadi 4 jam setelah otomatisasi dashboard",
    timeline: "4-8 minggu",
  },
  {
    slug: "mobile-app",
    icon: Icons.Mobile,
    badge: "Cross-Platform",
    badgeVariant: "secondary",
    title: "Mobile Application",
    summary:
      "Kami mengembangkan aplikasi Android, iOS, dan cross-platform yang responsif serta mudah digunakan menggunakan Flutter atau React Native.",
    description:
      "Kami mengembangkan aplikasi Android, iOS, dan cross-platform yang responsif serta memberikan pengalaman konsisten di setiap perangkat. Pendekatan basis kode tunggal menjaga efisiensi proses pengembangan tanpa mengurangi kinerja native aplikasi.",
    features: ["Desain UI/UX Modern", "Integrasi Payment Gateway", "Rilis ke Play Store & App Store"],
    actionText: "Buat Aplikasi Mobile",
    technologies: ["Flutter", "React Native", "Firebase"],
    useCase: "Bisnis yang ingin menjangkau pengguna mobile untuk kebutuhan layanan pelanggan maupun operasional tim lapangan.",
    useCaseShort: "Bisnis, aplikasi mobile B2C/B2B",
    provenResult: "10.000+ unduhan pada bulan pertama setelah rilis aplikasi mobile",
    timeline: "4-10 minggu",
  },
  {
    slug: "custom-software",
    icon: Icons.CustomSoftware,
    badge: "Built-to-Spec",
    badgeVariant: "secondary",
    title: "Custom Software",
    summary:
      "Kami merancang perangkat lunak khusus mengikuti alur kerja dan kebutuhan spesifik bisnis Anda secara tepat sasaran.",
    description:
      "Kami merancang perangkat lunak khusus mengikuti alur kerja dan kebutuhan operasional bisnis Anda secara tepat sasaran. Struktur sistem dibangun secara modular, memungkinkan aplikasi dikembangkan lebih lanjut seiring pertumbuhan organisasi tanpa perlu merombak sistem dari awal.",
    features: ["Sesuai Alur Bisnis", "Integrasi Sistem Existing", "Skalabilitas & Pemeliharaan"],
    actionText: "Diskusikan Kebutuhan",
    technologies: ["Node.js", "Python", "PostgreSQL", "Docker"],
    useCase: "Perusahaan dengan alur operasional khusus yang tidak dapat diakomodasi oleh perangkat lunak siap pakai.",
    useCaseShort: "Proses bisnis unik, solusi kustom",
    provenResult: "Biaya operasional berkurang 35% setelah otomatisasi sistem kustom",
    timeline: "6-12 minggu",
  },
  {
    slug: "system-integration",
    icon: Icons.Integration,
    badge: "Efisiensi",
    badgeVariant: "secondary",
    title: "System Integration & Automation",
    summary:
      "Kami menghubungkan sistem yang sudah Anda gunakan dan mengotomatisasi proses manual menjadi alur kerja digital yang efisien.",
    description:
      "Kami menghubungkan infrastruktur yang sudah berjalan, seperti API pihak ketiga, gateway pembayaran, dan basis data perusahaan. Integrasi ini memangkas proses manual yang memakan waktu, memastikan perpindahan data berlangsung aman dan sinkron secara real-time.",
    features: ["Integrasi API & Layanan Eksternal", "Otomatisasi Alur Kerja", "Sinkronisasi Data Real-Time"],
    actionText: "Otomatisasi Sistem",
    technologies: ["REST API", "GraphQL", "Webhook", "Zapier/Make"],
    useCase: "Bisnis yang memiliki beberapa sistem terpisah dan membutuhkan sinkronisasi data terpusat secara otomatis.",
    useCaseShort: "Bisnis, integrasi multi-sistem",
    provenResult: "Waktu pemrosesan berkurang dari 4 jam menjadi 15 menit setelah integrasi sistem",
    timeline: "3-6 minggu",
  },
  {
    slug: "talent-augmentation",
    icon: Icons.Users,
    badge: "Dedicated Team",
    badgeVariant: "secondary",
    title: "IT Talent Augmentation",
    summary:
      "Kami menyediakan developer berpengalaman (frontend, backend, mobile) yang siap bergabung dan bekerja langsung dengan tim internal Anda.",
    description:
      "Kami menyediakan developer berpengalaman (frontend, backend, mobile) yang siap bergabung dan bekerja langsung dengan tim internal Anda. Tenaga ahli bekerja mengikuti standar teknis dan koordinasi proyek Anda, memberikan fleksibilitas kapasitas tim tanpa kendala rekrutmen konvensional.",
    features: ["Kontrak Fleksibel", "Perjanjian Kerahasiaan (NDA)", "Onboarding Terarah"],
    actionText: "Rekrut Tim Dedicated",
    technologies: ["React", "Node.js", "Flutter", "DevOps"],
    useCase: "Perusahaan atau startup yang membutuhkan tambahan kapasitas rekayasa perangkat lunak tanpa proses rekrutmen yang berbelit.",
    useCaseShort: "Perusahaan, penambahan kapasitas tim",
    provenResult: "Onboarding developer selesai dalam 2 minggu, 4x lebih cepat dari rekrutmen biasa",
    timeline: "1-2 minggu penempatan",
  },
];
