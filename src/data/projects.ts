export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  specsUrl?: string;
  docsUrl?: string;
  featured?: boolean;
}

/**
 * Konfigurasi Cloudflare Storage
 * Bisa diset di file .env dengan variabel:
 * - VITE_CF_R2_URL=https://pub-xxxxxx.r2.dev (atau domain kustom: https://cdn.domainmu.com)
 * - VITE_CF_IMAGES_URL=https://imagedelivery.net/<ACCOUNT_HASH>
 */
export const CLOUDFLARE_CONFIG = {
  // R2 (S3-compatible storage) public URL
  r2PublicUrl: (import.meta.env.VITE_CF_R2_URL as string) || '',

  // Cloudflare Images delivery URL
  cfImagesUrl: (import.meta.env.VITE_CF_IMAGES_URL as string) || '',
};

/**
 * Format input proyek yang simpel & praktis untuk ditambahkan:
 * - id otomatis dibuat jika tidak diisi
 * - category cukup ketik 'bangunan' atau 'kapal'
 * - tags cukup ketik string dipisah koma (cth: "AutoCAD 2D, Shop Drawing, Baja")
 * - image bisa nama file di R2 ('dwg-01.png'), Cloudflare Images ('cf:ID'), atau URL langsung (https://...)
 */
export interface SimpleProjectInput {
  title: string;
  category: 'bangunan' | 'kapal' | 'Konstruksi Bangunan' | 'Konstruksi Perkapalan' | string;
  description: string;
  image: string;
  tags?: string[] | string;
  id?: string;
  specsUrl?: string;
  docsUrl?: string;
  featured?: boolean;
}

/**
 * Helper untuk mengubah input gambar menjadi URL lengkap:
 * 1. URL langsung (https://...) -> dipakai langsung
 * 2. Prefix 'cf:' -> diubah ke URL Cloudflare Images (https://imagedelivery.net/...)
 * 3. Prefix 'r2:' atau nama file biasa ('drawing.png') -> otomatis digabung dengan R2 Public URL
 */
export const resolveProjectImage = (image: string, variant: string = 'public'): string => {
  if (!image) {
    return 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80';
  }

  // Jika sudah URL penuh atau path root lokal (/images/...)
  if (image.startsWith('http://') || image.startsWith('https://') || image.startsWith('data:') || image.startsWith('/')) {
    return image;
  }

  // Format Cloudflare Images: "cf:image-id" atau "cf:image-id/variant"
  if (image.startsWith('cf:')) {
    const raw = image.slice(3).trim();
    const [id, customVariant] = raw.split('/');
    const base = CLOUDFLARE_CONFIG.cfImagesUrl.replace(/\/+$/, '');
    if (base) {
      return `${base}/${id}/${customVariant || variant}`;
    }
    return `https://imagedelivery.net/${id}/${customVariant || variant}`;
  }

  // Format Cloudflare R2 (S3-compatible storage)
  // Bisa ditulis "r2:nama-file.png" atau langsung "nama-file.png"
  const fileName = image.startsWith('r2:') ? image.slice(3).trim() : image.trim();
  const r2Base = CLOUDFLARE_CONFIG.r2PublicUrl.replace(/\/+$/, '');

  if (r2Base) {
    return `${r2Base}/${fileName.replace(/^\/+/, '')}`;
  }

  // Jika R2 belum diisi, fallback ke folder public lokal /projects/nama-file.png
  return `/projects/${fileName}`;
};

const normalizeCategory = (cat: string): string => {
  const lower = cat.toLowerCase();
  if (lower === 'bangunan' || lower.includes('bangunan') || lower.includes('sipil') || lower.includes('gedung')) {
    return 'Konstruksi Bangunan';
  }
  if (lower === 'kapal' || lower.includes('kapal') || lower.includes('maritim') || lower.includes('perkapalan')) {
    return 'Konstruksi Perkapalan';
  }
  return cat;
};

const normalizeTags = (tags?: string[] | string): string[] => {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags;
  return tags.split(',').map((t) => t.trim()).filter(Boolean);
};

export const createProjects = (list: SimpleProjectInput[]): Project[] => {
  return list.map((item, idx) => ({
    id: item.id || `proj-${idx + 1}`,
    title: item.title,
    category: normalizeCategory(item.category),
    description: item.description,
    image: resolveProjectImage(item.image),
    tags: normalizeTags(item.tags),
    specsUrl: item.specsUrl || '#',
    docsUrl: item.docsUrl || '#',
    featured: item.featured ?? false,
  }));
};

/**
 * =========================================================================
 * DAFTAR PROYEK (CUKUP EDIT / TAMBAH DI SINI)
 * =========================================================================
 * Format super simpel:
 * {
 *   title: "Judul Proyek",
 *   category: "bangunan" | "kapal",
 *   description: "Penjelasan gambar / proyek",
 *   image: "nama-file.jpg" // atau "r2:nama-file.png", "cf:ID-IMAGE", atau "https://..."
 *   tags: "AutoCAD 2D, Shop Drawing, Detail Baja", // string dipisah koma
 *   featured: true // opsional
 * }
 */
export const rawProjects: SimpleProjectInput[] = [
  {
    title: "Shop Drawing Struktur Rangka Baja & Gudang",
    category: "bangunan",
    description: "Penyusunan gambar kerja detail (shop drawing) struktur kolom baja WF, balok pengikat, bracing, dan detail sambungan pelat buhul baut mutu tinggi yang siap diaplikasikan di lapangan.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    tags: "AutoCAD 2D, Shop Drawing, Struktur Baja WF, Detail Sambungan, Drafter Kerja",
    featured: true
  },
  {
    title: "As-Built Drawing & Detail Pembesian Beton Bertulang",
    category: "bangunan",
    description: "Pembuatan as-built drawing struktur gedung beton bertulang, mencakup detail penulangan sloof, kolom, balok lantai, dan pelat bordes sesuai hasil koordinasi dan pengukuran aktual di lapangan.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=800&q=80",
    tags: "As-Built Drawing, AutoCAD, Beton Bertulang, Bar Bending, Gambar Kerja",
    featured: true
  },
  {
    title: "Penggambaran Lines Plan & General Arrangement Kapal",
    category: "kapal",
    description: "Proyek penyusunan rencana garis lambung kapal (lines plan) dan penataan ruangan rencana umum (general arrangement) yang dikerjakan saat periode PKL galangan kapal dan kejuruan SMK.",
    image: "https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80",
    tags: "Rancang Bangun Kapal, Lines Plan, General Arrangement, AutoCAD 2D, Pengalaman PKL",
    featured: true
  },
  {
    title: "Detail Konstruksi Sekat Kedap & Bukaan Pelat Lambung",
    category: "kapal",
    description: "Drafting detail konstruksi sekat kedap air, profil penguat (stiffener), dan pola bukaan pelat lambung (shell expansion) untuk mendukung efisiensi proses pemotongan dan perakitan kapal.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    tags: "Konstruksi Lambung, Bukaan Pelat, AutoCAD, Detail Fabrikasi, Maritim",
    featured: false
  }
];

export const projects: Project[] = createProjects(rawProjects);
