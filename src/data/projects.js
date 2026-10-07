// Data project untuk PortfolioSection (Home) dan Halaman Portfolio (/projects).
// Field wajib konsisten: id, category (slug lowercase), categoryLabel (label tampilan),
// client, title, description, result, techStack (array string), ctaLink.
// `image` = ilustrasi Unsplash sesuai kategori (fallback teks jika gagal load).
// Query param ?auto=format&fit=crop&w=960&q=70 untuk ukuran & kompresi wajar.

export const categoryLabels = {
  web: "Web Application",
  mobile: "Mobile Application",
  landing: "Landing Page",
  game: "Game Development",
  custom: "Custom Software",
  system: "Internal System",
};

export const projects = [
  {
    id: "proj-01",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=960&q=70",
    category: "web",
    categoryLabel: categoryLabels.web,
    client: "PT. Logistik Sukses Mandiri",
    title: "Sistem Manajemen Inventaris & POS Real-time",
    description:
      "Dashboard manajemen stok barang berbasis web interaktif dengan pemindai barcode otomatis, terintegrasi dengan sistem kasir cabang secara real-time.",
    result: "Efisiensi operasional naik 60% & human-error berkurang drastis.",
    techStack: ["React JS", "Node.js", "PostgreSQL", "Tailwind"],
    ctaLink: "#",
  },
  {
    id: "proj-02",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=960&q=70",
    category: "mobile",
    categoryLabel: categoryLabels.mobile,
    client: "Koperasi Maju Jaya",
    title: "Aplikasi Simpan Pinjam Digital",
    description:
      "Aplikasi mobile untuk anggota koperasi mengajukan pinjaman, memantau simpanan, dan menerima notifikasi jatuh tempo secara langsung.",
    result: "Waktu proses pengajuan pinjaman turun dari 3 hari menjadi kurang dari 1 jam.",
    techStack: ["Flutter", "Firebase", "REST API"],
    ctaLink: "#",
  },
  {
    id: "proj-03",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=960&q=70",
    category: "landing",
    categoryLabel: categoryLabels.landing,
    client: "Bright Edu Center",
    title: "Website Company Profile & Pendaftaran Siswa",
    description:
      "Landing page dengan formulir pendaftaran online, integrasi pembayaran DP, dan halaman testimoni orang tua siswa.",
    result: "Konversi pendaftaran online naik 34% dalam 2 bulan pertama.",
    techStack: ["Next.js", "Tailwind", "Midtrans"],
    ctaLink: "#",
  },
  {
    id: "proj-04",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=960&q=70",
    category: "web",
    categoryLabel: categoryLabels.web,
    client: "CV. Berkah Abadi",
    title: "Sistem Payroll & Absensi Karyawan",
    description:
      "Sistem internal untuk perhitungan gaji karyawan secara otomatis, mencatat absensi berbasis lokasi, dan menyusun laporan pajak bulanan.",
    result: "Proses payroll bulanan yang tadinya 2 hari kini selesai dalam hitungan menit.",
    techStack: ["React JS", "Express", "MySQL"],
    ctaLink: "#",
  },
  {
    id: "proj-05",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=960&q=70",
    category: "mobile",
    categoryLabel: categoryLabels.mobile,
    client: "Warung Pintar Nusantara",
    title: "Aplikasi Kasir & Manajemen Stok UMKM",
    description:
      "Aplikasi kasir mobile untuk pelaku UMKM dengan fitur pencatatan stok, laporan penjualan harian, dan cetak struk via bluetooth printer.",
    result: "Digunakan aktif oleh 500+ pedagang UMKM di 3 kota besar.",
    techStack: ["React Native", "Supabase"],
    ctaLink: "#",
  },
  {
    id: "proj-06",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=960&q=70",
    category: "landing",
    categoryLabel: categoryLabels.landing,
    client: "Griya Sehat Klinik",
    title: "Website Reservasi & Profil Klinik",
    description: "Website reservasi jadwal dokter online dengan integrasi WhatsApp untuk konfirmasi otomatis.",
    result: "No-show pasien berkurang 40% berkat pengingat otomatis via WhatsApp.",
    techStack: ["Vue.js", "Tailwind", "WhatsApp API"],
    ctaLink: "#",
  },
  {
    id: "proj-07",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=960&q=70",
    category: "game",
    categoryLabel: categoryLabels.game,
    client: "Nusa Eduka Media",
    title: "Game Edukasi Interaktif Sejarah & Budaya",
    description:
      "Game petualangan 2D interaktif berbasis web dan mobile untuk siswa sekolah dasar dalam mempelajari sejarah dan ragam budaya Indonesia.",
    result: "Retensi belajar siswa meningkat 50% dibanding metode pembelajaran konvensional.",
    techStack: ["Unity 2D", "WebGL", "C#"],
    ctaLink: "#",
  },
  {
    id: "proj-08",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=960&q=70",
    category: "system",
    categoryLabel: categoryLabels.system,
    client: "PT. Trans Logistik Indonesia",
    title: "Platform Tracking Armada & Integrasi Telemetri",
    description:
      "Sistem pemantauan posisi armada truk secara real-time, estimasi waktu kedatangan (ETA), dan kalkulasi konsumsi bahan bakar kustom.",
    result: "Efisiensi rute pengiriman meningkat 28% dan biaya bahan bakar turun 15%.",
    techStack: ["React JS", "Go", "MQTT", "PostgreSQL"],
    ctaLink: "#",
  },
  {
    id: "proj-09",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=960&q=70",
    category: "custom",
    categoryLabel: categoryLabels.custom,
    client: "Manufaktur Presisi Utama",
    title: "Sistem Otomasi Dokumen Quality Control",
    description:
      "Software custom untuk digitalisasi lembar inspeksi mutu pabrik dengan validasi data otomatis dan ekspor sertifikat hasil uji PDF.",
    result: "Mengeliminasi 100% kertas laporan fisik dan mempercepat audit sertifikasi.",
    techStack: ["Python", "FastAPI", "React JS"],
    ctaLink: "#",
  },
];
