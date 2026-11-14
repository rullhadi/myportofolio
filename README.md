# 📐 Portfolio

Portofolio web modern, interaktif, dan responsif untuk **Drafter Struktur Bangunan (Sipil)** dan **Rancang Bangun Kapal (Naval Architecture)**. Dibangun menggunakan React, TypeScript, Tailwind CSS, dan Vite.

---

## 🚀 Fitur Utama

- **⚡ Cepat & Ringan**: Dibangun dengan Vite + React 18 + TypeScript.
- **🎨 UI Modern & Responsif**: Tampilan clean dengan Tailwind CSS, dark mode toggle, dan animasi halus menggunakan Framer Motion.
- **📂 Ramah Pemula (Single Source of Truth)**: Semua teks, nama, bio, dan keahlian cukup diubah lewat `src/data/portfolio.ts` tanpa perlu mengubah kode komponen atau HTML.
- **☁️ Cloudflare R2 / S3 Image Support**: Otomatis menggabungkan nama file gambar dengan Cloudflare R2 (S3-compatible bucket) atau Cloudflare Images delivery URL.
- **📑 Filter Proyek Interaktif**: Filter portofolio gambar kerja berdasarkan kategori (*Konstruksi Bangunan* atau *Konstruksi Perkapalan*).
- **🔗 Kontak Cepat**: Tombol terintegrasi WhatsApp, Email, LinkedIn, dan GitHub di bagian Hero dan Kontak.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend**: [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Struktur Proyek

```text
├── .env.example                  # Template konfigurasi Cloudflare R2 / Images
├── PANDUAN_MENGISI_PORTOFOLIO.md # Panduan lengkap cara mengisi data untuk pemula
├── src/
│   ├── components/               # Komponen UI (Hero, About, Projects, Skills, dll.)
│   ├── data/
│   │   ├── portfolio.ts          # Pusat data profil, bio, riwayat, dan kontak
│   │   └── projects.ts           # Daftar proyek & resolver gambar Cloudflare R2
│   ├── App.tsx                   # Komponen utama halaman
│   └── main.tsx                  # Titik masuk aplikasi
├── public/                       # Aset publik statis
└── package.json                  # Dependensi dan script project
```

---

## 💻 Cara Menjalankan di Komputer Lokal

### 1. Prasyarat
Pastikan komputer sudah terinstal [Node.js](https://nodejs.org/) (versi 18 ke atas).

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```
Buka browser di URL yang tertera di terminal (biasanya `http://localhost:5173`).

### 4. Build untuk Produksi
```bash
npm run build
```
Hasil build siap rilis akan berada di folder `dist/`.

---

## ⚙️ Konfigurasi Penyimpanan Cloudflare (R2 / S3)

1. Salin file `.env.example` menjadi `.env`:
   ```bash
   cp .env.example .env
   ```
2. Isi URL bucket public Cloudflare R2 atau Cloudflare Images Anda:
   ```env
   VITE_CF_R2_URL=https://pub-xxxxxxxx.r2.dev
   VITE_CF_IMAGES_URL=https://imagedelivery.net/<ACCOUNT_HASH>
   ```
3. Di file `src/data/projects.ts`, cukup masukkan nama file gambar (contoh: `image: "gambar-proyek.png"`). Sistem otomatis mengarahkannya ke URL bucket Cloudflare R2 Anda.

---

## 📖 Panduan Mengubah Isi Data Diri
Lihat file **[PANDUAN_MENGISI_PORTOFOLIO.md](./PANDUAN_MENGISI_PORTOFOLIO.md)** untuk petunjuk lengkap mengubah nama, foto profil, riwayat kerja, studi, dan daftar keahlian teknis.
