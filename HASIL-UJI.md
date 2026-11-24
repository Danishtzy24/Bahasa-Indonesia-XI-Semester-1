# Pemeriksaan paket TypeScript

- npm run typecheck: lulus.
- npm run build: lulus (Vite production build).
- Pengujian browser Chromium pada hasil build, bukan hanya dev server.
- Lebar 320, 360, 390, 620, 768, 1024, 1440, 1920 px: tidak ada overflow horizontal halaman.
- Tidak ada JavaScript page error atau respons HTTP gagal pada suite produksi.
- 8 bab, 51 visual lab, seluruh 175 variasi diuji; 72 soal bab dinilai 100 dengan jawaban benar; set campuran 10 soal mencakup 8 kelompok dan dinilai 100. Nilai tersimpan setelah reload. Navigasi bab cepat, animasi keluar/masuk, disclosure, dan penutupan dialog diuji pada reduced-motion nonaktif; idle tanpa animasi aktif.

Folder siap-upload adalah salinan hasil build source yang disertakan. Paket memakai dependency lock; tidak menyertakan node_modules. File JS hanya di hasil kompilasi siap-upload, source logika berada di src/*.ts.
