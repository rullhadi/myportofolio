export type { Project, SimpleProjectInput } from './projects';
export { projects, rawProjects, createProjects, CLOUDFLARE_CONFIG, resolveProjectImage } from './projects';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  description: string;
  achievements?: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

export const personalInfo = {
  // =========================================================================
  // 1. DATA UTAMA (NAMA & FOTO)
  // =========================================================================
  name: "Nama Anda",
  role: "Drafter Struktur & CAD Designer | Mahasiswa S1 Teknik Sipil",
  titleIndo: "Drafter Konstruksi Bangunan & Rancang Bangun Kapal",
  avatar: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  location: "Indonesia",
  availability: "Aktif Bekerja • Terbuka untuk Freelance Drafter & Diskusi Proyek",

  // Ringkasan singkat profil di bawah nama (Hero)
  bio: "Perintis karier dengan fondasi kejuruan dari SMK Desain Rancang Bangun Kapal dan saat ini sedang aktif menempuh studi S1 Teknik Sipil. Berpengalaman 2+ tahun bekerja sebagai drafter di sebuah PT serta pengalaman PKL industri, terbiasa memproduksi shop drawing, as-built drawing, detail penulangan beton, sambungan baja, dan gambar rencana perkapalan dengan presisi tinggi menggunakan AutoCAD 2D/3D.",

  // =========================================================================
  // 2. HERO SECTION (BAGIAN DEPAN PALING ATAS)
  // =========================================================================
  hero: {
    // Label keahlian di atas nama (bisa 2 atau lebih)
    specialties: ["Rancang Bangun Kapal", "Teknik Sipil & Struktur"],
    // Teks keterangan di samping lokasi
    metaText: "AutoCAD 2D/3D • Shop & As-Built Drawing",
    // Kartu kecil di atas foto profil
    overlayBadge: "Drafter Struktur & CAD",
    overlaySub: "SMK Kapal • S1 Teknik Sipil",
  },

  // =========================================================================
  // 3. TENTANG SAYA (ABOUT SECTION)
  // =========================================================================
  about: {
    heading: "Dedikasi Drafting & Rekayasa Konstruksi",
    subheading: "Menggabungkan kedisiplinan gambar teknik rancang bangun kapal SMK dengan wawasan keilmuan S1 Teknik Sipil dan pengalaman drafter profesional.",
    
    // Foto & kartu di samping cerita tentang saya
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    imageBadge: "Gambar Kerja Perkapalan & Bangunan",
    imageTitle: "Ketelitian Drafting & Gambar Kerja Lapangan",
    imageDesc: "Terbiasa menyusun shop drawing, as-built drawing, bukaan pelat lambung kapal, dan detail penulangan konstruksi siap pakai di proyek.",

    // Paragraf cerita tentang Anda (bisa tambah atau ubah kalimatnya sesuka hati)
    paragraphs: [
      "Salam kenal, saya Nama Anda. Saya adalah drafter perintis dengan fondasi kejuruan kuat dari SMK Desain Rancang Bangun Kapal dan saat ini sedang aktif menempuh perkuliahan di jurusan S1 Teknik Sipil.",
      "Perjalanan profesional saya diawali dari pengalaman Praktik Kerja Lapangan (PKL) di industri maritim, di mana saya mengasah keterampilan penggambaran lines plan, general arrangement, dan detail konstruksi lambung kapal.",
      "Saat ini, saya telah bekerja selama kurang lebih 2 tahun di sebuah PT sebagai drafter struktur dan konstruksi, memproduksi shop drawing rangka baja, detail penulangan beton bertulang, hingga as-built drawing dengan ketelitian tinggi di AutoCAD."
    ],

    // 3 Kartu Keunggulan / Pilar Utama
    pillars: [
      {
        title: "Presisi AutoCAD",
        desc: "Shop drawing, toleransi skala, etiket standar, dan manajemen layer rapi.",
        color: "sky" as const
      },
      {
        title: "Fondasi Vokasi & Sipil",
        desc: "Kombinasi ketelitian rancang bangun kapal & pemahaman struktur bangunan sipil.",
        color: "emerald" as const
      },
      {
        title: "Siap Terap Proyek",
        desc: "Pengalaman kerja 2+ tahun dan pemahaman alur revisi gambar lapangan (redline).",
        color: "amber" as const
      }
    ]
  },

  // =========================================================================
  // 4. KONTAK & SOSIAL MEDIA
  // =========================================================================
  email: "namaanda@example.com",
  phone: "+62 812-9876-5432",
  contactNote: "⚡ Respon cepat dalam 24 jam kerja. Siap untuk konsultasi teknis, review gambar kerja, serta diskusi proyek.",
  socials: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "mailto:namaanda@example.com",
    whatsapp: "https://wa.me/6281298765432",
    portfolioDrive: "#"
  },

  // =========================================================================
  // 5. STATISTIK ANGKA (TAMPIL DI HALAMAN ABOUT)
  // =========================================================================
  stats: [
    { label: "Tahun Pengalaman Kerja", value: "2+" },
    { label: "Proyek Gambar Dikerjakan", value: "20+" },
    { label: "Presisi & Kerapian Dokumen", value: "100%" },
    { label: "Latar Belakang Vokasi & S1", value: "SMK & Sipil" }
  ],

  // =========================================================================
  // 6. TEKS DI FOOTER (PALING BAWAH)
  // =========================================================================
  footerBadge: "Rancang Bangun Kapal & S1 Teknik Sipil",
  footerNote: "Pengalaman Drafter 2+ Tahun • Mahasiswa Aktif S1 Sipil"
};

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "CAD Drafter (Struktur & Konstruksi)",
    company: "PT Konstruksi & Rekayasa Bangunan",
    location: "Indonesia",
    period: "2023 - Sekarang (Kurang Lebih 2 Tahun)",
    description: [
      "Memproduksi dan mengembangkan Shop Drawing serta As-Built Drawing untuk proyek struktur beton bertulang dan rangka baja berdasarkan arahan site engineer.",
      "Membuat gambar detail penulangan balok, kolom, pelat, dan pondasi lengkap dengan tabel jadwal pembesian (Bar Bending Schedule).",
      "Menyusun detail potongan sambungan konstruksi baja, pelat buhul, angkur, dan bracing dengan skala dan toleransi presisi.",
      "Melakukan revisi gambar kerja berkala sesuai kondisi aktual lapangan (site revision / redline mark-up) dan koordinasi lintas divisi.",
      "Mengelola standar layering, dimensi, etiket gambar (title block), dan kesiapan cetak plotting/layout gambar proyek."
    ],
    technologies: ["AutoCAD 2D/3D", "Shop Drawing", "As-Built Drawing", "Detail Pembesian", "Konstruksi Baja", "Plotting & Layout"]
  },
  {
    id: "exp-2",
    role: "Junior Drafter Magang (Praktik Kerja Lapangan / PKL)",
    company: "PT Galangan & Desain Rancang Bangun Maritim",
    location: "Indonesia",
    period: "Periode PKL SMK (6 Bulan)",
    description: [
      "Membantu drafter senior dalam penyusunan dan perapian gambar kerja konstruksi lambung kapal (hull construction) dan Lines Plan.",
      "Melakukan digitalisasi sketsa manual menjadi gambar kerja digital 2D di AutoCAD untuk detail sekat kedap air dan gading kapal.",
      "Mempelajari dan mempraktikkan bukaan pelat lambung serta pembacaan simbol-simbol pengelasan standar perkapalan.",
      "Melakukan observasi lapangan di area workshop/galangan guna memastikan kesesuaian gambar fabrikasi dengan perakitan komponen aktual."
    ],
    technologies: ["AutoCAD 2D", "Lines Plan", "Konstruksi Lambung", "General Arrangement", "Bukaan Pelat", "Standar Gambar Vokasi"]
  }
];

export const educations: EducationItem[] = [
  {
    id: "edu-1",
    degree: "S1 Teknik Sipil (Sedang Menempuh Studi)",
    institution: "Universitas / Institut Teknik",
    location: "Indonesia",
    period: "2022 - Sekarang (Mahasiswa Aktif)",
    description: "Mendalami rekayasa struktur sipil, mekanika rekayasa, teknologi beton dan bahan bangunan, mekanika tanah, hidrologi, serta pemodelan dan analisis struktur.",
    achievements: [
      "Menyeimbangkan komitmen profesional sebagai drafter aktif sambil menempuh pendidikan sarjana",
      "Menerapkan ilmu teori ketekniksipilan perkuliahan langsung pada penyusunan gambar kerja proyek di tempat kerja"
    ]
  },
  {
    id: "edu-2",
    degree: "SMK - Desain Rancang Bangun Kapal (Naval Architecture Drafting)",
    institution: "SMK Negeri Jurusan Desain Rancang Bangun Kapal",
    location: "Indonesia",
    period: "Lulus",
    description: "Pendidikan kejuruan fokus pada dasar menggambar teknik, proyeksi orthogonal, pembuatan rencana garis (Lines Plan), Rencana Umum (General Arrangement), dan bukaan pelat konstruksi kapal.",
    achievements: [
      "Menyelesaikan program Praktik Kerja Lapangan (PKL) di industri maritim/galangan dengan predikat sangat baik",
      "Memiliki fondasi drafting teknik yang disiplin, teliti, dan terbiasa dengan standar gambar kerja industri"
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Drafting & Pemodelan CAD",
    skills: [
      { name: "AutoCAD 2D Drafting (Shop Drawing & As-Built)", level: 95 },
      { name: "Detailing Penulangan Beton (Bar Bending)", level: 90 },
      { name: "Detail Sambungan Baja & Rangka Struktur", level: 88 },
      { name: "Manajemen Layer, Skala, Dimensi & Plotting", level: 94 },
      { name: "AutoCAD 3D Modeling Dasar & Isometrik", level: 82 },
      { name: "Redline Mark-up & Revisi Gambar Lapangan", level: 92 }
    ]
  },
  {
    title: "Rancang Bangun Kapal (Keahlian SMK)",
    skills: [
      { name: "Penggambaran Lines Plan (Rencana Garis)", level: 88 },
      { name: "Rencana Umum / General Arrangement (GA)", level: 86 },
      { name: "Detail Konstruksi Sekat, Gading & Geladak", level: 84 },
      { name: "Bukaan Pelat Lambung (Shell Expansion)", level: 82 },
      { name: "Pembacaan Simbol Pengelasan & Standar Maritim", level: 89 },
      { name: "Kesesuaian Fabrikasi & Perakitan Workshop", level: 85 }
    ]
  },
  {
    title: "Teknik Sipil & Perangkat Pendukung (Studi S1)",
    skills: [
      { name: "Gambar Denah, Tampak & Potongan Gedung", level: 90 },
      { name: "Detail Struktur Pondasi, Sloof, Kolom & Balok", level: 88 },
      { name: "Dasar Analisis Pembebanan Struktur (SAP2000)", level: 75 },
      { name: "Perhitungan Volume & Dasar BoQ / Opname", level: 82 },
      { name: "Pemodelan 3D SketchUp / Dasar BIM Revit", level: 78 },
      { name: "Microsoft Excel & Dokumentasi Laporan Teknis", level: 86 }
    ]
  }
];

