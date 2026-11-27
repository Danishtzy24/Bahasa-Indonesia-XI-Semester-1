# Bahasa Indonesia — TypeScript + Vite

Shell desain **identik dengan proyek Bahasa Inggris (XI/Semester 1)** — hanya materi, warna, dan gambar yang disesuaikan. Tema **biru muda**, tanpa emoji.

- 6 bab (lengkap): Teks Argumentasi · Teks Prosedur · Teks Berita · Cerpen & Cerita Sejarah · Unsur Intrinsik & Ekstrinsik · Kaidah Kebahasaan.
- 37 topik visual interaktif (diagram langkah, potongan kalimat, 5W+1H, kronologi, tumpukan lapis, blok kalimat, dll.).
- Bank **145 soal** campuran Benar/Salah, teks pendek, dan PGK kompleks — per bab 17–18 soal, pembahasan lengkap.
- **Uji Kemampuan 40 soal** (25 BS · 5 teks · 10 PGK) diacak dari 6 bab; breakdown nilai per kelompok.
- Penyimpanan browser tetap berfungsi; fallback mode sementara jika localStorage diblokir.
- Penyimpanan browser tetap berfungsi; fallback mode sementara jika localStorage diblokir.
- Animasi, aksesibilitas, dan setelan reduced-motion shell asli dipertahankan.

## Konten

- `src/content.ts`: materi, bank soal, kunci, dan pembahasan bertipe Course.
- `src/visuals.ts`: visual interaktif tiap topik.
- `src/app.ts`: logika shell (diadaptasi untuk soal campuran dan 6 bab).
- `src/styles.css`: shell asli dengan rotasi warna ungu → biru muda.

## Menjalankan source TypeScript

Gunakan **Node.js 20.19+** (atau 22.12+ yang didukung Vite).

```bash
npm ci
npm run dev
```

```bash
npm run typecheck
npm run build
npm run preview
```

`npm run build` menjalankan pemeriksaan TypeScript, lalu menghasilkan `dist/`.

## Langsung upload tanpa build

Folder **siap-upload/** berisi hasil build produksi. Upload **isi** folder itu ke hosting statis. Untuk preview lokal:

```bash
cd siap-upload
python -m http.server 3000
```

Jangan membuka index.html dengan double-click/file://: modul browser memerlukan HTTP server.

Untuk Vercel: Root Directory = folder proyek ini, Build Command = `npm run build`, Output Directory = `dist`, Install Command = `npm ci`.
