# 📖 Panduan Lengkap Mengisi & Mengedit Portofolio (Untuk Pemula)

Portofolio ini sudah dirancang sangat praktis: **Anda TIDAK PERLU menyentuh kode HTML / React / CSS**.  
Semua teks, nama, foto, keahlian, dan proyek cukup diubah lewat **2 file data saja**:

---

## 🗂️ 1. Dua File Tempat Mengubah Data

| File | Isi yang Diatur |
| :--- | :--- |
| **`src/data/portfolio.ts`** | Nama, foto profil, teks Hero (tengah), cerita About, kontak, sosmed, pengalaman kerja, pendidikan, & keahlian. |
| **`src/data/projects.ts`** | Daftar portofolio gambar kerja/proyek & link gambar (Cloudflare R2 / S3 / Images / URL). |

---

## ✏️ 2. Cara Mengubah Data Pribadi & Hero (Bagian Tengah Atas)

Buka file **`src/data/portfolio.ts`**. Di bagian paling atas terdapat objek `personalInfo`:

```typescript
export const personalInfo = {
  // 1. Ganti Nama, Profesi, dan Lokasi Anda
  name: "Nama Lengkap Anda",
  role: "Drafter Struktur & CAD Designer | Mahasiswa S1 Teknik Sipil",
  location: "Indonesia",
  availability: "Aktif Bekerja • Terbuka untuk Freelance Drafter",

  // 2. Foto Profil (bisa URL link internet atau file lokal di folder public/avatar.jpg)
  avatar: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",

  // 3. Ringkasan Singkat (Bio di bawah nama pada Hero)
  bio: "Perintis karier dari SMK Desain Rancang Bangun Kapal dan saat ini...",

  // 4. Hero Section (Teks di tengah halaman depan)
  hero: {
    specialties: ["Rancang Bangun Kapal", "Teknik Sipil & Struktur"], // Label di atas nama
    metaText: "AutoCAD 2D/3D • Shop & As-Built Drawing", // Label di samping lokasi
    overlayBadge: "Drafter Struktur & CAD", // Teks pada kartu di atas foto
    overlaySub: "SMK Kapal • S1 Teknik Sipil", // Subteks pada kartu foto
  },
  ...
};
```

---

## 📖 3. Cara Mengubah Cerita & Keunggulan di Halaman "Tentang Saya" (About)

Masih di file **`src/data/portfolio.ts`**, cari bagian `about`:

```typescript
about: {
  heading: "Dedikasi Drafting & Rekayasa Konstruksi",
  subheading: "Menggabungkan kedisiplinan gambar teknik SMK dengan S1 Teknik Sipil.",

  // Foto & Keterangan di samping cerita Anda
  image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  imageBadge: "Gambar Kerja Perkapalan & Bangunan",
  imageTitle: "Ketelitian Drafting & Gambar Kerja Lapangan",
  imageDesc: "Terbiasa menyusun shop drawing, as-built drawing, dll.",

  // Cerita Anda (bisa tambah atau ubah paragraf sesuka hati):
  paragraphs: [
    "Salam kenal, saya [Nama Anda]...",
    "Perjalanan saya berawal dari PKL di...",
    "Saat ini saya bekerja sebagai drafter..."
  ],

  // 3 Kartu Keunggulan:
  pillars: [
    {
      title: "Presisi AutoCAD",
      desc: "Shop drawing, toleransi skala, etiket standar, layer rapi.",
      color: "sky"
    },
    ...
  ]
}
```

---

## 📞 4. Cara Mengubah Nomor WhatsApp, Email & Sosmed

Masih di file **`src/data/portfolio.ts`**, cari bagian kontak:

```typescript
email: "emailanda@gmail.com",
phone: "+62 812-3456-7890",

socials: {
  linkedin: "https://linkedin.com/in/username-anda",
  github: "https://github.com/username-anda",
  email: "mailto:emailanda@gmail.com",
  whatsapp: "https://wa.me/6281234567890", // Ganti dengan nomor WA (awali 62)
  portfolioDrive: "https://drive.google.com/..."
}
```

---

## 🏗️ 5. Cara Tambah Proyek Baru & Gambar dari Cloudflare

Buka file **`src/data/projects.ts`**, lalu tambahkan data baru ke dalam array `rawProjects`:

```typescript
{
  title: "Shop Drawing Detail Pondasi & Kolom",
  category: "bangunan", // Cukup tulis 'bangunan' atau 'kapal'
  description: "Gambar kerja penulangan pondasi telapak dan pembesian kolom gedung.",
  image: "pondasi-01.png", // Otomatis mengarah ke Cloudflare R2 jika diset
  tags: "AutoCAD 2D, Shop Drawing, Detail Pembesian", // Tulis string dipisah koma
  featured: true // true jika ingin disorot
}
```

### Cara Menghubungkan Cloudflare R2 (S3 Storage)
1. Buat file bernama `.env` di folder utama (sejajar dengan `package.json`).
2. Tulis URL bucket Cloudflare R2 Anda:
   ```env
   VITE_CF_R2_URL=https://pub-xxxxxxxx.r2.dev
   ```
3. Sekarang Anda cukup menuliskan nama file gambarnya saja di `image: "nama-gambar.png"`, sistem otomatis mengubahnya menjadi `https://pub-xxxxxxxx.r2.dev/nama-gambar.png`.

---

## 🚀 6. Cara Melihat Hasil Perubahan di Browser

Jalankan perintah ini di terminal:
```bash
npm run dev
```
Buka link lokal yang muncul (biasanya `http://localhost:5173`). Setiap kali Anda mengubah dan menyimpan file di `src/data/portfolio.ts` atau `src/data/projects.ts`, browser akan langsung terupdate otomatis!
