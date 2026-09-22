export const privacyPolicyMeta = {
  title: "Kebijakan Privasi",
  lastUpdated: "22 September 2026",
  intro:
    "Fractabase Interactive mengelola data pribadi pengguna dengan standar perlindungan yang jelas dan bertanggung jawab. Kebijakan ini menjelaskan data yang kami kumpulkan melalui website, tujuan penggunaannya, batasan akses, serta hak hukum Anda sebagai pemilik data.",
};

export const privacyPolicySections = [
  {
    id: "informasi-dikumpulkan",
    num: "01",
    title: "Data yang Kami Kumpulkan",
    icon: "Database",
    content: {
      groups: [
        {
          label: "Data yang Anda kirimkan melalui formulir kontak dan konsultasi",
          items: [
            "Nama lengkap dan nama institusi, bisnis, atau perusahaan yang Anda wakili",
            "Alamat email aktif dan nomor kontak (telepon atau WhatsApp)",
            "Deskripsi proyek, rincian kebutuhan teknis, anggaran, target waktu, atau dokumen brief yang Anda sertakan",
          ],
        },
        {
          label: "Data teknis yang tercatat otomatis oleh server saat Anda mengakses website",
          items: [
            "Alamat Protokol Internet (IP address) dan lokasi perkiraan",
            "Identitas peramban (browser type and version) serta sistem operasi perangkat",
            "Halaman yang Anda akses, tautan perujuk (referrer URL), dan durasi kunjungan",
          ],
        },
        {
          label: "Komunikasi lanjutan pra-proyek",
          items: [
            "Riwayat percakapan email dan pesan teks yang Anda lakukan dengan tim Fractabase setelah pengiriman formulir",
          ],
        },
      ],
    },
  },
  {
    id: "tujuan-penggunaan",
    num: "02",
    title: "Tujuan Penggunaan Data",
    icon: "FileText",
    content: {
      items: [
        "Merespons pesan, pertanyaan, atau permintaan konsultasi teknis yang Anda ajukan",
        "Menyusun dokumen estimasi biaya, proposal teknis, dan rancangan ruang lingkup kerja (scope of work)",
        "Melakukan komunikasi penjadwalan diskusi dan koordinasi proyek yang disepakati",
        "Menganalisis performa lalu lintas website untuk mengoptimalkan navigasi dan keterbacaan konten",
      ],
      callout:
        "Fractabase Interactive tidak menjual, menyewakan, memperdagangkan, atau membagikan data kontak Anda kepada pihak ketiga mana pun untuk aktivitas pemasaran.",
    },
  },
  {
    id: "dasar-hukum",
    num: "03",
    title: "Dasar Hukum Pemrosesan",
    icon: "Scale",
    content: {
      intro: "Kami memproses data pribadi Anda dengan landasan hukum berikut:",
      items: [
        "Persetujuan eksplisit yang Anda berikan secara sadar saat mengirimkan formulir kontak pada website ini (Pasal 20 ayat (2) huruf a Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi)",
        "Langkah-langkah persiapan kontrak kerja sama perangkat lunak atas permintaan Anda sebelum perjanjian resmi disepakati",
        "Kepatuhan terhadap kewajiban hukum yang diatur dalam peraturan perundang-undangan Republik Indonesia",
      ],
    },
  },
  {
    id: "penyimpanan-keamanan",
    num: "04",
    title: "Penyimpanan & Keamanan Data",
    icon: "Shield",
    content: {
      securityNote:
        "Semua transmisi data pada website ini dilindungi protokol enkripsi Transport Layer Security (TLS/HTTPS). Akses ke data formulir kontak dibatasi ketat hanya untuk tim internal Fractabase yang berkepentingan langsung dengan penanganan calon klien.",
      retentionTable: {
        caption: "Masa Retensi Penyimpanan Data",
        headers: ["Kategori Informasi", "Batas Durasi Penyimpanan"],
        rows: [
          [
            "Formulir kontak yang tidak berlanjut ke kerja sama proyek",
            "Maksimal 12 bulan sejak tanggal formulir dikirimkan",
          ],
          [
            "Data korespondensi dan profil klien aktif",
            "Sepanjang durasi proyek berjalan hingga masa retensi administratif kontrak selesai",
          ],
          ["Data log teknis dan analitik agregat website", "Maksimal 26 bulan dalam format tanpa identitas langsung"],
        ],
      },
    },
  },
  {
    id: "pembagian-pihak-ketiga",
    num: "05",
    title: "Pembagian Data ke Pihak Ketiga",
    icon: "Users",
    content: {
      intro:
        "Kami tidak mengalihkan data Anda kepada pihak luar, kecuali kepada penyedia infrastruktur teknis berikut yang terikat komitmen kerahasiaan:",
      items: [
        "Penyedia infrastruktur hosting website dan peladen database yang menyimpan aset digital sistem kami",
        "Penyedia gateway pengiriman email dan notifikasi pesan untuk keperluan transmisi korespondensi",
        "Otoritas penegak hukum atau instansi pemerintah yang berwenang, apabila diwajibkan secara tegas oleh perintah pengadilan atau hukum Republik Indonesia",
      ],
    },
  },
  {
    id: "cookies",
    num: "06",
    title: "Cookies dan Teknologi Pelacakan",
    icon: "Cookie",
    content: {
      items: [
        "Cookies fungsional teknis: menyimpan preferensi tampilan seperti mode tema (terang/gelap) agar antarmuka tetap konsisten saat berpindah halaman",
        "Cookies analitik pihak ketiga: mengumpulkan metrik interaksi halaman secara anonim untuk evaluasi teknis performa situs",
      ],
      note: "Anda dapat mengatur penolakan atau penghapusan cookies melalui menu konfigurasi keamanan pada peramban web yang Anda gunakan.",
    },
  },
  {
    id: "hak-pengguna",
    num: "07",
    title: "Hak Anda Atas Data Pribadi",
    icon: "UserCheck",
    content: {
      intro:
        "Berdasarkan Bab IV Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda memiliki hak hukum sebagai subjek data:",
      rights: [
        {
          right: "Hak Akses & Salinan (Pasal 7)",
          desc: "Mendapatkan konfirmasi dan meminta salinan catatan data pribadi Anda yang tersimpan pada sistem kami.",
        },
        {
          right: "Hak Pembaruan & Koreksi (Pasal 6)",
          desc: "Memperbaiki ketidakakuratan, melengkapi data, atau memperbarui informasi profil yang tidak lagi relevan.",
        },
        {
          right: "Hak Penghapusan (Pasal 8)",
          desc: "Mengajukan penghapusan catatan data pribadi Anda dari database kami selama tidak bertentangan dengan kewajiban retensi hukum yang berlaku.",
        },
        {
          right: "Hak Penarikan Persetujuan (Pasal 9)",
          desc: "Menarik kembali izin pemrosesan data komunikasi yang pernah Anda berikan untuk interaksi selanjutnya.",
        },
      ],
      cta: "Untuk menjalankan hak-hak tersebut, kirimkan permohonan tertulis resmi ke alamat email kami di bawah.",
    },
  },
  {
    id: "kerahasiaan-proyek",
    num: "08",
    title: "Kerahasiaan Proyek Klien",
    icon: "Lock",
    content: {
      intro:
        "Ketentuan privasi ini berlaku spesifik untuk website publik ini. Terhadap data bisnis, kode sumber, skema arsitektur, dan material rahasia proyek pengembangan software milik klien, Fractabase Interactive menerapkan perlindungan mandiri melalui Non-Disclosure Agreement (NDA) serta kontrak kerja terpisah sebelum rekayasa dimulai.",
    },
  },
  {
    id: "perubahan-kebijakan",
    num: "09",
    title: "Perubahan Kebijakan",
    icon: "AlertCircle",
    content: {
      intro:
        "Kami dapat memperbarui redaksi kebijakan privasi ini untuk menyesuaikan perubahan hukum atau penambahan fitur layanan digital. Setiap revisi akan langsung dimuat pada halaman ini dengan tanggal pembaruan yang tercatat jelas di bagian pembuka.",
      note: "Kami menyarankan Anda meninjau dokumen ini secara berkala saat mengakses website.",
    },
  },
  {
    id: "kontak",
    num: "10",
    title: "Kontak",
    icon: "Mail",
    content: {
      intro:
        "Jika Anda memiliki pertanyaan mengenai tata kelola data ini atau ingin mengajukan hak subjek data, hubungi kami melalui saluran berikut:",
      contacts: [
        { label: "Email", value: "contact@fractabase.com" },
        { label: "WhatsApp", value: "+62 821-1976-0841" },
        { label: "Lokasi", value: "Kota Bekasi, Jawa Barat, Indonesia" },
      ],
    },
  },
];
