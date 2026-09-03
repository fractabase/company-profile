// Data project untuk PortfolioSection.
// Field wajib konsisten: id, category (slug lowercase), categoryLabel (label tampilan),
// client, title, description, result, techStack (array string), ctaLink.
// `image` = ilustrasi Unsplash sesuai kategori (fallback teks jika gagal load).
// Query param ?auto=format&fit=crop&w=960&q=70 untuk ukuran & kompresi wajar.

export const categoryLabels = {
  web: "Web Application",
  mobile: "Mobile Application",
  landing: "Landing Page",
};

export const projects = [
  {
    id: "proj-01",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=960&q=70",
    category: "web",
    categoryLabel: "Web Application / Enterprise",
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
    categoryLabel: "Mobile Application",
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
    categoryLabel: "Landing Page / Marketing",
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
    categoryLabel: "Web Application / Internal Tool",
    client: "CV. Berkah Abadi",
    title: "Sistem Payroll & Absensi Karyawan",
    description:
      "Sistem internal untuk perhitungan gaji otomatis, absensi berbasis lokasi, dan laporan pajak karyawan bulanan.",
    result: "Proses payroll bulanan yang tadinya 2 hari kini selesai dalam hitungan menit.",
    techStack: ["React JS", "Express", "MySQL"],
    ctaLink: "#",
  },
  {
    id: "proj-05",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=960&q=70",
    category: "mobile",
    categoryLabel: "Mobile Application",
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
    categoryLabel: "Landing Page / Marketing",
    client: "Griya Sehat Klinik",
    title: "Website Reservasi & Profil Klinik",
    description: "Website reservasi jadwal dokter online dengan integrasi WhatsApp untuk konfirmasi otomatis.",
    result: "No-show pasien berkurang 40% berkat pengingat otomatis via WhatsApp.",
    techStack: ["Vue.js", "Tailwind", "WhatsApp API"],
    ctaLink: "#",
  },
];
