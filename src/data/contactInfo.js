import { Icons } from "../components/common/Icons";

export const contactInfo = [
  {
    key: "email",
    icon: Icons.Mail,
    label: "Email",
    value: "info@fractabase.com",
    href: "mailto:info@fractabase.com",
    note: "Untuk brief proyek, dokumen pendukung, dan korespondensi resmi.",
  },
  {
    key: "whatsapp",
    icon: Icons.WhatsApp,
    label: "WhatsApp",
    value: "+62 813-8349-9425",
    href: "https://wa.me/6281383499425",
    note: "Chat langsung untuk respon cepat",
  },
  {
    key: "address",
    icon: Icons.Location,
    label: "Location",
    value: "Mustika Jaya, Kota Bekasi, Jawa Barat, Indonesia",
    href: null,
    note: "Kota Bekasi, Indonesia",
  },
  {
    key: "hours",
    icon: Icons.Time,
    label: "Working Hours",
    value: "Flexible",
    href: null,
    note: "Respons 1x24 jam (Email/WA). Jadwal pertemuan: 09:00-17:00 WIB",
  },
];

export const socialLinks = [
  { key: "github", label: "Github", icon: Icons.Github, href: "https://github.com/" },
  { key: "linkedin", label: "LinkedIn", icon: Icons.LinkedIn, href: "https://linkedin.com/" },
  { key: "whatsapp", label: "WhatsApp", icon: Icons.WhatsApp, href: "https://wa.me/6281383499425" },
  { key: "email", label: "Email", icon: Icons.Mail, href: "mailto:info@fractabase.com" },
];

/**
 * Saluran komunikasi untuk halaman /contact (InfoCardsSection)
 */
export const contactChannels = [
  {
    id: "email",
    key: "email",
    icon: Icons.Mail,
    label: "Email Resmi",
    value: "info@fractabase.com",
    href: "mailto:info@fractabase.com",
    detail: "Untuk brief proyek, dokumen pendukung, dan korespondensi resmi.",
    isAccent: false,
  },
  {
    id: "whatsapp",
    key: "whatsapp",
    icon: Icons.WhatsApp,
    label: "WhatsApp Fast Response",
    value: "+62 813-8349-9425",
    href: "https://wa.me/6281383499425",
    detail: "Respons cepat untuk diskusi awal dan penjadwalan sesi konsultasi langsung.",
    isAccent: false,
  },
  {
    id: "location",
    key: "location",
    icon: Icons.Location,
    label: "Lokasi",
    value: "Mustika Jaya, Kota Bekasi, Jawa Barat, Indonesia",
    href: null,
    detail: "Respons 1x24 jam pada hari kerja, tidak termasuk libur nasional",
    isAccent: false,
  },
  {
    id: "nda",
    key: "nda",
    icon: Icons.Shield,
    label: "Garansi Kerahasiaan (NDA)",
    value: "Non-Disclosure Agreement Tersedia",
    href: null,
    detail: "Kerahasiaan ide, data bisnis, dan hak cipta proyek Anda terlindungi penuh sebelum diskusi teknis dimulai.",
    isAccent: true,
  },
];

/**
 * Tahapan alur kerja setelah formulir pengajuan dikirimkan
 */
export const afterSubmitSteps = [
  {
    num: "01",
    title: "Tim Meninjau Kebutuhan",
    desc: "Kami membaca brief Anda dan menyiapkan agenda diskusi teknis.",
  },
  {
    num: "02",
    title: "Diskusi Lanjutan",
    desc: "Klarifikasi lingkup, ekspektasi hasil, dan kendala yang perlu diantisipasi.",
  },
  {
    num: "03",
    title: "Proposal & Estimasi",
    desc: "Dokumen penawaran berisi scope, timeline, dan perkiraan biaya dikirimkan.",
  },
];

/**
 * Daftar pertanyaan yang sering diajukan seputar konsultasi proyek (FAQSection)
 */
export const contactFaqList = [
  {
    id: "faq-estimasi-biaya",
    question: "Bagaimana proses dan perhitungan estimasi biaya proyek?",
    answer:
      "Perhitungan biaya didasarkan pada ruang lingkup pekerjaan, tingkat kompleksitas arsitektur, integrasi sistem pihak ketiga, serta perkiraan jam kerja tim developer. Setelah Anda mengirimkan brief kebutuhan, kami menyusun rincian kebutuhan kerja dan memberikan proposal penawaran transparan tanpa biaya tersembunyi.",
    category: "Harga",
  },
  {
    id: "faq-alur-nda",
    question: "Bagaimana alur penandatanganan Non-Disclosure Agreement (NDA)?",
    answer:
      "Apabila proyek Anda membutuhkan perlindungan informasi khusus, kami dapat menandatangani dokumen NDA terlebih dahulu sebelum sesi pembahasan teknis dimulai. Anda dapat menggunakan draf perjanjian dari perusahaan Anda sendiri atau memanfaatkan draf standar kerahasiaan yang kami sediakan.",
    category: "Kerahasiaan",
  },
  {
    id: "faq-kerahasiaan-data",
    question: "Bagaimana Fractabase menjamin keamanan dan kerahasiaan data proyek?",
    answer:
      "Seluruh data spesifikasi, rancangan bisnis, dan kode sumber proyek sepenuhnya merupakan hak milik klien. Kami menerapkan protokol pemisahan repositori kode, pembatasan akses data sensitif, dan komunikasi terenkripsi selama seluruh tahapan pengembangan berlangsung.",
    category: "Kerahasiaan",
  },
  {
    id: "faq-konsultasi-tanpa-spec",
    question: "Apakah saya tetap bisa berkonsultasi jika belum memiliki spesifikasi yang lengkap?",
    answer:
      "Bisa. Anda cukup menjelaskan masalah atau ide awal. Kami membantu merumuskan kebutuhan, prioritas fitur, dan tahapan pengerjaan yang sesuai dengan skala bisnis Anda.",
    category: "Proses",
  },
];
