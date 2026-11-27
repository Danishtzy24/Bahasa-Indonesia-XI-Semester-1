import { esc } from './dom';
import { icon, CHAPTER_ICONS } from './art';
import type { VisualModel, VisualItem, LessonSection } from './types';
/* Ringkasan visual interaktif pendamping materi lengkap. */
const token=(text: string,role: string='verb')=>({text,role});
const sample=(label: string,sentence: string,formula: string,meaning='',cue=''): VisualItem=>({label,parts:sentence.split('|').map((s,i)=>token(s,['subject','verb','object','extra'][i]||'extra')),formula,meaning,cue});
const lab=(note: string,kind: string,items: VisualItem[]): VisualModel=>({note,kind,items});
const flat=(s: string)=>esc(s.replace(/\|/g,' · '));
export const VISUALS: Record<string, VisualModel> = {
/* ---------- Bab 1 · Teks Argumentasi ---------- */
's1-1':lab('Pendapat + alasan + bukti = argumentasi yang sah.','flow',[
 sample('Pengertian','Pendapat|alasan dan bukti|Meyakinkan pembaca','Klaim berbukti','Teks argumentasi berisi pendapat penulis disertai alasan dan fakta.'),
 sample('Tujuan','Meyakinkan|membuktikan|Berpikir kritis','Empat tujuan utama','Meyakinkan, menyampaikan gagasan berbasis fakta, membuktikan, mengajak kritis.'),
 sample('Kontrol','Opini kosong|Tanpa bukti|Bukan argumentasi','Harus berbukti','Pendapat tanpa fakta hanya opini biasa — sering jadi jebakan soal.')]),
's1-2':lab('Enam ciri — sering diuji benar/salah.','steps',[
 sample('Ciri 01','Pendapat|penulis','Inti teks','Berisi pendapat atau pandangan penulis.'),
 sample('Ciri 02','Fakta|data atau bukti','Penunjang klaim','Setiap pendapat didukung bukti yang dapat diverifikasi.'),
 sample('Ciri 03','Alasan|logis','Jalan berpikir','Alasan menghubungkan pendapat dengan bukti.'),
 sample('Ciri 04','Meyakinkan|pembaca','Tujuan akhir','Bahasa jelas dan objektif — bukan emosional.')]),
's1-3':lab('Tiga struktur, dibaca berurutan.','flow',[
 sample('01 · Pendahuluan','Memperkenalkan|masalah|topik dibahas','Awal teks','Masalah diperkenalkan lebih dulu.'),
 sample('02 · Argumen','Pendapat|alasan|fakta pendukung','Bagian inti','Rangkaian klaim + bukti.'),
 sample('03 · Penegasan','Kesimpulan|penguatan|pendapat ulang','Akhir teks','Mengulang klaim — bukan topik baru.')]),
's1-4':lab('Dua jenis dibedakan urutan sebab-akibat.','compare',[
 sample('Sebab-akibat','Sampah|tersumbat|risiko banjir','Penyebab dulu','Dimulai dari penyebab lalu akibatnya.'),
 sample('Akibat-sebab','Banjir|sering terjadi|penyebabnya sampah','Akibat dulu','Dimulai dari peristiwa lalu mencari penyebab.'),
 sample('Bedanya','Lihat|kalimat pertama','Trik soal','Kalimat awal menentukan jenisnya.')]),
's1-5':lab('Kaidah bahasa khas teks argumentasi.','sentence',[
 sample('Pendapat','Menurut saya|sebaiknya|perlu','Penanda pendapat','Kata yang menyatakan pendapat.'),
 sample('Kausalitas','Karena|sebab|sehingga','Sebab-akibat','Konjungsi penghubung sebab dan akibat.'),
 sample('Mental','Meyakini|berpendapat|menganggap','Kerja mental','Berkaitan pikiran, perasaan, tanggapan.'),
 sample('Rujukan','Ini|itu|tersebut','Merujuk kembali','Menunjuk hal yang telah disebutkan.')]),
's1-6':lab('Fakta dapat dibuktikan — opini penilaian.','compare',[
 sample('Fakta','Zona waktu|Indonesia|terukur','Objektif','Dapat dibuktikan dengan data.'),
 sample('Opini','Paling|menyenangkan|subjektif','Penilaian','Bergantung pemikiran seseorang.'),
 sample('Jebakan','Angka|belum tentu|fakta','Kunci: terukur','Kuncinya dapat dibuktikan atau tidak.')]),

/* ---------- Bab 4 · Cerpen & Cerita Sejarah ---------- */
's4-1':lab('Cerpen: fiksi singkat, satu konflik utama.','steps',[
 sample('Pengertian','Prosa|fiksi|singkat terfokus','Karya sastra','Menceritakan konflik tokoh secara singkat.'),
 sample('Ciri 01','Satu|konflik utama','Fokus tajam','Tokoh terbatas — bukan banyak sejajar.'),
 sample('Ciri 02','Alur|amanat','Pesan cerita','Mengandung pesan atau pelajaran.'),
 sample('Sifat','Fiksi|rekaan|inspirasi nyata','Boleh nyata','Fiksi meski bisa terinspirasi kejadian nyata.')]),
's4-2':lab('Enam struktur — abstrak & koda opsional.','flow',[
 sample('Abstrak','Gambaran|awal|opsional','Boleh ada','Sifatnya opsional.'),
 sample('Orientasi','Tokoh|latar|situasi','Wajib','Pengenalan awal cerita.'),
 sample('Komplikasi','Masalah|muncul|konflik','Wajib','Konflik mulai terbentuk.'),
 sample('Resolusi','Penyelesaian|masalah','Wajib','Masalah diselesaikan — koda pesan (opsional).')]),
's4-3':lab('Cerita sejarah: peristiwa masa lalu + kronologi.','steps',[
 sample('Pengertian','Peristiwa|masa lalu|latar sejarah','Karya naratif','Memperhatikan waktu, tempat, tokoh, kejadian.'),
 sample('Bentuk','Faktual|fiksi sejarah|dua sah','Dua bentuk','Faktual = nyata; fiksi = rekaan berlatar sejarah.'),
 sample('Ciri','Kronologi|nilai|kehidupan','Urutan waktu','Menggunakan urutan waktu dan bernilai kehidupan.')]),
's4-4':lab('Struktur cerita sejarah menonjolkan puncak konflik.','flow',[
 sample('Orientasi','Tokoh|waktu|tempat','Pengenalan','Keadaan awal.'),
 sample('Peristiwa|Konflik','Pertentangan|muncul','Pengungkapan','Awal peristiwa → konflik.'),
 sample('Puncak','Bagian|paling|menegangkan','Klimaks','Titik paling menegangkan.'),
 sample('Penyelesaian|Koda','Konflik|selesai|pesan','Penutup','Diselesaikan lalu pesan cerita.')]),
's4-5':lab('Cerpen bebas latar — cerita sejarah berpijak masa lalu.','compare',[
 sample('Cerpen','Satu|konflik|latar bebas','Umumnya fiksi','Tokoh boleh rekaan.'),
 sample('Sejarah','Peristiwa|masa lalu|kronologi','Faktual/fiksi','Latar terkait periode sejarah.'),
 sample('Jebakan','Wajib|faktual|dua-duanya','Salah','Hanya cerita sejarah faktual yang wajib nyata.')]),
's4-6':lab('Langkah membaca dua karya naratif.','steps',[
 sample('Cerpen','Tokoh|konflik|amanat','Empat langkah','Tandai tokoh, lacak konflik, cari latar, simpulkan amanat.'),
 sample('Sejarah','Tahun|kronologi|fakta','Baca urutan','Catat periode, susun kronologi, pisahkan fakta/imajinasi.'),
 sample('Nilai','Sifat|baik|tokoh','Jawab soal','Nilai kehidupan = sifat baik dari tindakan tokoh.')]),

/* ---------- Bab 5 · Unsur Intrinsik & Ekstrinsik ---------- */
's5-1':lab('Intrinsik membangun cerita dari dalam.','steps',[
 sample('Pengertian','Dari|dalam|cerita','Membangun karya','Unsur yang menyusun karya sastra dari dalam.'),
 sample('Tema','Gagasan|utama|persoalan','Pokok cerita','Persahabatan, perjuangan, pengorbanan…'),
 sample('Tokoh|Alur','Pelaku|peristiwa|berurutan','Jalan cerita','Pelaku dan rangkaian peristiwa.'),
 sample('Kunci','Tunjuk|di|teks','Intrinsik','Kalau bisa ditunjuk pada kutipan = intrinsik.')]),
's5-2':lab('Tema, tokoh, penokohan — analitik vs dramatik.','compare',[
 sample('Tema','Pengorbanan|orang tua|gagasan','Bukan judul','Tema gagasan; judul nama karya.'),
 sample('Analitik','"Rina|jujur"|dijelaskan langsung','Langsung','Pengarang menyebut sifat.'),
 sample('Dramatik','Mengembalikan|dompet|tanpa diminta','Lewat aksi','Sifat terlihat dari tindakan/dialog.')]),
's5-3':lab('Alur dan latar: tempat, waktu, suasana.','steps',[
 sample('Alur maju','Awal|→|akhir','Bergerak maju','Peristiwa berurutan normal.'),
 sample('Alur mundur','Masa kini|flashback|masa lalu','Kembali ke belakang','Penanda: dulu, pada masa kecil.'),
 sample('Latar','Tempat|waktu|suasana','Tiga jenis','Rumah/pagi/sedih dalam satu kalimat.')]),
's5-4':lab('Sudut pandang dan amanat.','chat',[
 sample('Orang pertama','Aku|saya|pelaku utama','Tokoh bicara','Aku sebagai pusat cerita.'),
 sample('Orang ketiga','Dia|serba tahu|pengamat','Dia/Li','Serba tahu = tahu pikiran; pengamat = terlihat saja.'),
 sample('Amanat','Pesan|pelajaran|umum','Bukan ringkasan','Pilih pesan moral, bukan ulasan peristiwa.')]),
's5-5':lab('Ekstrinsik: pengaruh dari luar karya.','steps',[
 sample('Pengarang','Latar|belakang|kehidupan','Dari luar','Pengalaman & pandangan pengarang.'),
 sample('Masyarakat','Sosial|budaya|politik|ekonomi','Kondisi luar','Keadaan masyarakat saat karya dibuat.'),
 sample('Nilai','Moral|sosial|agama|budaya','Lima nilai','Nilai kehidupan yang melingkupi cerita.')]),
's5-6':lab('Intrinsik vs ekstrinsik — in = dalam, ex = luar.','compare',[
 sample('Intrinsik','Tema|alur|latar|amanat','Dari dalam','Membentuk jalan cerita.'),
 sample('Ekstrinsik','Pengarang|politik|sosial','Dari luar','Memengaruhi penciptaan.'),
 sample('Latihan','Sudut pandang|politik|I-E','I · E','Sudut pandang=I; kondisi politik=E.')]),

/* ---------- Bab 6 · Kaidah Kebahasaan ---------- */
's6-1':lab('Fakta terukur — opini penilaian.','compare',[
 sample('Fakta','Proklamasi|17 Agustus|1945','Dapat dibuktikan','Informasi nyata.'),
 sample('Opini','Menurut saya|paling|menyenangkan','Penilaian','Pendapat seseorang.'),
 sample('Penanda','Angka|tanggal|menurut saya','Cek konteks','Ada penanda opini → opini.')]),
's6-2':lab('Tujuh jenis konjungsi — hafalkan fungsi.','steps',[
 sample('Temporal','Kemudian|setelah itu|sebelum','Urutan waktu','Menunjukkan waktu/urutan.'),
 sample('Kausalitas','Karena|sebab|sehingga','Sebab-akibat','Hubungan sebab dan akibat.'),
 sample('Pertentangan','Tetapi|namun|sedangkan','Perlawanan','Menunjukkan pertentangan.'),
 sample('Tujuan|Syarat','Agar|jika|asalkan','Niat & syarat','Tujuan dan persyaratan.')]),
's6-3':lab('Tiga jenis verba — material, mental, relasional.','compare',[
 sample('Material','Berlari|memotong|menulis','Tindakan fisik','Bisa dilihat mata.'),
 sample('Mental','Berpikir|merasa|menyadari','Aktivitas pikiran','Terjadi di kepala.'),
 sample('Relasional','Adalah|merupakan|menjadi','Menghubungkan','Menyambung subjek dengan identitas.')]),
's6-4':lab('Nomina, adjektiva, adverbia — tiga kelas kata.','steps',[
 sample('Nomina','Sekolah|siswa|buku','Kata benda','Nama orang/tempat/benda/konsep.'),
 sample('Adjektiva','Indah|rajin|cerdas','Kata sifat','Menjelaskan sifat/keadaan.'),
 sample('Adverbia','Kemarin|perlahan|sering','Keterangan','Waktu, tempat, cara, frekuensi.')]),
's6-5':lab('Ragam kalimat: kutipan, aktif-pasif, perintah.','chat',[
 sample('Langsung','"Jangan|lupa|belajar"','Tanda petik','Mengutip ucapan langsung.'),
 sample('Aktif-Pasif','Siswa|membersihkan|kelas','Di- + oleh','Aktif: pelaku dulu; pasif: objek dulu.'),
 sample('Imperatif','Tutup|pintu|itu!','Perintah','Deklaratif = pernyataan; interogatif = tanya.')]),
's6-6':lab('Kata baku vs tidak baku — pola ejaan lama.','compare',[
 sample('Baku','Izin|nasihat|praktik|risiko','KBBI','Ejaan modern resmi.'),
 sample('Tidak baku','Ijin|nasehat|praktek|resiko','Hindari','Pola lama / w-y salah.'),
 sample('Jebakan','Resiko|terdengar|umum','Tetap salah','Umum ≠ baku.')]),
's6-7':lab('Lima majas wajib — kenali penandanya.','sentence',[
 sample('Personifikasi','Angin|berbisik|manusia','Benda hidup','Benda mati bersifat manusia.'),
 sample('Simile','Bagaikan|seperti|laksana','Ada penanda','Pembanding dengan kata pembanding.'),
 sample('Hiperbola|Ironi','Seribu|tahun|pujian sinis','Berlebihan / balik','Hiperbola = lebihan; ironi = berlawanan.')]),

/* ---------- Bab 2 · Teks Prosedur (adaptif) ---------- */
's2-1':lab('Prosedur = urutan langkah menuju satu tujuan.','steps',[
 sample('Pengertian','Teks yang berisi|langkah-langkah|secara berurutan','Petunjuk melakukan sesuatu','Prosedur = tahapan untuk melakukan, membuat, atau menggunakan sesuatu.'),
 sample('Tujuan','Memberikan|petunjuk|kepada pembaca','Benar · teratur · sesuai urutan','Agar pembaca dapat melakukan kegiatan dengan benar dan mencapai hasil yang sama.'),
 sample('Contoh','Cara membuat|nasi goreng|dan akun email','Dipakai sehari-hari','Resep masakan, panduan alat, hingga langkah membuat akun email.')]),
's2-2':lab('Empat ciri paling menonjol — sisanya ada di detail.','steps',[
 sample('Ciri 01','Berisi|langkah-langkah|yang harus dilakukan','Inti teks prosedur','Langkah jelas dan dapat diikuti pembaca.'),
 sample('Ciri 02','Disusun|berurutan|dan sistematis','Urutan jelas','Dari langkah awal sampai akhir tanpa melompat.'),
 sample('Ciri 03','Menggunakan|kalimat perintah|atau instruksi','Bahasa imperatif','Contoh: masukkan, tekan, aduk.'),
 sample('Ciri 04','Memiliki|tujuan|yang ingin dicapai','Hasil akhir','Tujuan selalu dijelaskan di awal teks.')]),
's2-3':lab('Empat bagian struktur, dibaca berurutan.','steps',[
 sample('01 · Tujuan','Menjelaskan|hasil|yang ingin dicapai','Contoh: cara membuat jus mangga','Selalu berada di awal teks.'),
 sample('02 · Alat & Bahan','Mangga|air dan gula|blender dan gelas','Tidak selalu ada!','Biasanya muncul pada prosedur pembuatan sesuatu.'),
 sample('03 · Langkah','Kupas|potong|blender|tuangkan','Bagian inti teks','Urutan tindakan untuk mencapai tujuan.'),
 sample('04 · Penutup','Hasil|kesimpulan|informasi tambahan','Opsional','Boleh ada, boleh tidak — bukan bagian wajib.')]),
's2-4':lab('Ikuti urutan membuat jus mangga.','juice',[
 sample('01 · Kupas','Kupas|kulit mangga|hingga bersih','LANGKAH 1','Kupas kulit mangga sampai bersih.'),
 sample('02 · Potong','Potong|daging mangga|menjadi beberapa bagian','LANGKAH 2','Potong daging mangga agar mudah diblender.'),
 sample('03 · Blender','Tambahkan air dan gula,|lalu blender|hingga halus','LANGKAH 3','Masukkan potongan ke blender, tambahkan air dan gula, blender hingga halus.'),
 sample('04 · Tuang','Tuangkan|jus mangga|ke dalam gelas','LANGKAH 4','Tuang jus ke dalam gelas dan jus siap dinikmati.')]),
's2-5':lab('Lima kaidah bahasa khas teks prosedur.','sentence',[
 sample('Imperatif','Masukkan|air|ke dalam panci.','Kalimat perintah','Imperatif = kalimat perintah atau instruksi, tanpa subjek.'),
 sample('Material','Ibu|memotong|bawang.','Kata kerja material','Tindakan fisik: memotong, mengaduk, menekan, mengangkat.'),
 sample('Temporal','Pertama,|kupas|mangga.','Konjungsi temporal','Pertama, kemudian, setelah itu, selanjutnya, terakhir.'),
 sample('Keterangan','Aduk|secara perlahan|','Kata keterangan','Cara: secara perlahan · waktu: selama 10 menit · jumlah: secukupnya.'),
 sample('Bilangan','Tambahkan|dua sendok|gula.','Kata bilangan','Menunjukkan jumlah atau urutan: dua sendok, langkah pertama.')]),
's2-6':lab('Tiga jenis prosedur + satu jebakan soal.','steps',[
 sample('Sederhana','Langkah|sedikit|mudah dilakukan','Contoh: menyalakan lampu','Langkahnya sedikit dan mudah dilakukan.'),
 sample('Kompleks','Banyak|tahapan|yang berurutan','Contoh: kartu identitas','Tahapan banyak dan harus dikerjakan berurutan.'),
 sample('Protokol','Tidak|harus kaku|berurutan','Tujuan tetap tercapai','Tahapan boleh dikerjakan bersamaan selama tujuan tercapai.'),
 sample('Jebakan','Alat dan bahan|tidak selalu|ada','Ingat juga: penutup opsional','Jawaban "semua teks prosedur wajib punya alat dan bahan" pasti salah.')]),

/* ---------- Bab 3 · Teks Berita ---------- */
's3-1':lab('Inovasi = baru atau pengembangan yang lebih baik.','steps',[
 sample('Pengertian','Berita tentang|penemuan|atau pembaruan','Ide · produk · teknologi · metode','Informasi cara baru yang memberi manfaat atau solusi bagi masyarakat.'),
 sample('Inovasi','Baru|atau pengembangan|yang sudah ada','Tidak harus dari nol','Pengembangan sesuatu agar lebih baik, efektif, atau bermanfaat.'),
 sample('Tujuan','Memberi info|penemuan|dan manfaatnya','Menambah wawasan','Mengenalkan perkembangan iptek dan solusi atas masalah.')]),
's3-2':lab('Ciri berita inovasi yang faktual dan aktual.','steps',[
 sample('Ciri 01','Membahas|penemuan|atau pembaruan','Inti pemberitaan','Ada ide, produk, atau cara baru yang dibahas.'),
 sample('Ciri 02','Faktual|dan aktual|','Dapat dipercaya','Informasi nyata dan masih baru atau relevan.'),
 sample('Ciri 03','Menjelaskan|manfaat|inovasi','Solusi bagi masyarakat','Manfaat inovasi selalu dijelaskan.'),
 sample('Ciri 04','Disertai|data|pendapat ahli','Hasil penelitian','Bisa memuat fakta, hasil penelitian, atau pendapat ahli.')]),
's3-3':lab('Empat bagian berita pada koran.','paper',[
 sample('01 · Headline','Judul|inti berita|singkat dan menarik','Mahasiswa Kembangkan Alat Penyiram Otomatis','Menggambarkan pokok berita.'),
 sample('02 · Lead','Informasi|paling penting|inti pemberitaan','Pembuka: siapa · apa · kapan · di mana · mengapa','Teras berita = pembuka, bukan penutup!'),
 sample('03 · Body','Latar belakang|cara kerja|manfaat|hasil uji','Lengkap dan terperinci','Tubuh berita menjelaskan informasi secara rinci.'),
 sample('04 · Leg','Informasi|tambahan|pelengkap','Kepentingannya lebih rendah','Ekor berita melengkapi bagian sebelumnya.')]),
's3-4':lab('Cek kelengkapan berita dengan 6 unsur.','w6',[
 sample('01 · What','Pembuatan|alat pendeteksi|banjir otomatis','What · apa peristiwa?','Apa peristiwa yang terjadi?'),
 sample('02 · Who','Sebuah|kelompok|mahasiswa','Who · siapa terlibat?','Siapa yang terlibat?'),
 sample('03 · When','Januari|2026|','When · kapan?','Kapan peristiwa terjadi?'),
 sample('04 · Where','Bandung|','Where · di mana?','Di mana peristiwa terjadi?'),
 sample('05 · Why','Membantu tahu|potensi banjir|lebih awal','Why · mengapa?','Mengapa peristiwa terjadi?'),
 sample('06 · How','Dengan|mengembangkan|alat deteksi','How · bagaimana?','Bagaimana peristiwa terjadi?')]),
's3-5':lab('Kutipan, pewarta, dan mental — jangan tertukar.','chat',[
 sample('Kalimat langsung','"Alat ini dapat membantu petani,"|jelas|salah satu peneliti.','Kutipan + tanda petik','Mengutip perkataan seseorang secara langsung.'),
 sample('Pewarta','Peneliti|menjelaskan|cara kerja alat.','Kata kerja pewarta','Mengatakan, menjelaskan, mengungkapkan, melaporkan.'),
 sample('Mental','Pakar|memperkirakan|alat ini efisien.','Kata kerja mental','Menilai, menganggap, memahami, memperkirakan.'),
 sample('Temporal','Alat diuji,|kemudian|dipasang di sawah.','Konjungsi temporal','Kemudian, setelah itu, sebelumnya, selanjutnya.')]),
's3-6':lab('Enam syarat berita baik + bedakan fakta dan opini.','steps',[
 sample('Faktual','Berdasarkan|fakta|atau kenyataan','Syarat 01','Bisa dibuktikan kebenarannya.'),
 sample('Aktual','Informasi|masih baru|atau relevan','Syarat 02','Up to date, bukan berita lama.'),
 sample('Objektif','Disampaikan|tanpa|memihak','Syarat 03','Tidak memihak pihak mana pun.'),
 sample('Akurat','Benar|dan dapat|dipertanggungjawabkan','Syarat 04','Tepat dan dapat dipercaya.'),
 sample('Lengkap · Jelas','Info penting|dengan bahasa|mudah dipahami','Syarat 05 · 06','Kebutuhan pembaca terpenuhi dan mudah dimengerti.'),
 sample('Fakta ≠ Opini','Fakta|dapat dibuktikan|opini tidak','Jebakan soal','"Penemuan terbaik sepanjang masa" adalah opini, bukan fakta.')]),
};

/* Diagram blender jus mangga: tinggi cairan & potongan berubah tiap langkah. */
const JUICE_LEVEL=[0,16,34,48],JUICE_CHUNKS=[1,3,2,0];
function juiceDiagram(index: number): string{
 const level=JUICE_LEVEL[index]||0,chunks=JUICE_CHUNKS[index]||0,liqY=86-level;
 let art='';
 art+=`<ellipse cx="150" cy="118" rx="96" ry="6" fill="#4a7fae" opacity=".13"/>`;
 if(index===0)art+=`<ellipse cx="54" cy="82" rx="18" ry="14" fill="#f2b04a" stroke="#d9973a" stroke-width="2"/><path d="M54 68q4-8 12-9" stroke="#7fa9c9" stroke-width="3" stroke-linecap="round"/><path d="M37 96q11 4 22 1m5 2q9 2 15-1" stroke="#e0a04a" stroke-width="2" stroke-linecap="round"/><rect x="30" y="99" width="50" height="8" rx="4" fill="#dcebf7" stroke="#9fc3e2"/>`;
 if(index===1)art+=`<rect x="34" y="97" width="52" height="8" rx="4" fill="#dcebf7" stroke="#9fc3e2"/><rect x="44" y="84" width="19" height="12" rx="5" fill="#f7cd8d" stroke="#e0a04a" stroke-width="1.5"/><rect x="66" y="87" width="17" height="10" rx="5" fill="#f7cd8d" stroke="#e0a04a" stroke-width="1.5"/>`;
 art+=`<rect x="122" y="16" width="26" height="9" rx="3" fill="#356a94"/><rect x="116" y="25" width="38" height="11" rx="4" fill="#356a94"/><path d="M158 44h12a7 7 0 0 1 0 20h-10" stroke="#5f8fb8" stroke-width="6" fill="none"/><rect x="112" y="36" width="46" height="58" rx="9" fill="#eaf3fb" stroke="#5f8fb8" stroke-width="2.5"/>`;
 if(level>0){art+=`<rect x="116" y="${liqY}" width="38" height="${90-liqY}" rx="5" fill="#f2b04a"/><ellipse cx="135" cy="${liqY}" rx="19" ry="4" fill="#f7cd8d"/>`}
 for(let i=0;i<chunks;i++){const cx=121+i*11;art+=`<rect x="${cx}" y="${76-(i%2)*6}" width="9" height="7" rx="3" fill="#e8a044"/>`}
 if(index===2)art+=`<path d="M166 44q11 11 3 24m7-26q15 15 4 32" stroke="#9fc3e2" stroke-width="2.5" stroke-linecap="round"/>`;
 if(index===3)art+=`<path d="M158 50q36 6 38 38" stroke="#f2b04a" stroke-width="6" stroke-linecap="round" fill="none"/><rect x="188" y="82" width="30" height="33" rx="5" fill="#eaf3fb" stroke="#5f8fb8" stroke-width="2.5"/><path d="M192 106h22v5h-22Z" fill="#f2b04a"/><rect x="192" y="99" width="22" height="7" rx="2" fill="#f7cd8d"/>`;
 art+=`<rect x="120" y="94" width="30" height="18" rx="5" fill="#4a7fae"/><rect x="126" y="99" width="18" height="4" rx="2" fill="#cfe2f2"/><circle cx="144" cy="107" r="3" fill="#8fb8d6"/>`;
 return `<div class="tea-diagram"><svg viewBox="0 0 280 125" fill="none" aria-hidden="true">${art}</svg></div>`;
}
function labDiagram(v: VisualModel,index: number): string{const i=v.items[index];
 if(v.kind==='juice')return juiceDiagram(index);
 if(v.kind==='paper')return `<div class="paper-diagram">${v.items.map((it,j)=>`<span class="pd-row ${j===index?'current':j<index?'passed':''}"><i>${esc(it.label.replace(/^\d+ · /,''))}</i><b>${flat(it.formula)}</b></span>`).join('')}</div>`;
 if(v.kind==='w6')return `<div class="w6-diagram">${v.items.map((it,j)=>`<span class="wh-cell ${j===index?'current':''}"><b>${esc(it.label.replace(/^\d+ · /,''))}</b><i>${flat(it.formula)}</i></span>`).join('')}</div>`;
 if(v.kind==='line')return `<div class="line-diagram">${v.items.map((it,j)=>`<span class="ln-item ${j===index?'current':j<index?'passed':''}"><i>${j===index?'':'\u25cf'}</i><div><b>${esc(it.label)}</b><em>${flat(it.formula)}</em></div></span>`).join('')}</div>`;
 if(v.kind==='flow')return `<div class="flow-diagram">${v.items.map((it,j)=>`<span class="fd-card ${j===index?'current':j<index?'passed':''}"><i>${String(j+1).padStart(2,'0')}</i><div><b>${esc(it.label.replace(/^\d+ · /,''))}</b><em>${flat(it.formula)}</em></div></span>${j<v.items.length-1?'<em class="fd-arrow">↓</em>':''}`).join('')}</div>`;
 if(v.kind==='compare')return `<div class="compare-diagram"><span class="cd-col ${index===0||index===2?'current':''}"><i>FAKTA</i><small>berbukti · dapat dibuktikan</small></span><span class="cd-vs">≠</span><span class="cd-col other ${index===1||index===2?'current':''}"><i>INTERPRETASI</i><small>penafsiran · pandangan</small></span></div>`;
 if(v.kind==='chat')return `<div class="chat-diagram"><span class="chat-avatar">A</span><div class="chat-bubble">${icon('chat')}<i>${i.formula}</i><span></span><span></span><span></span></div><span class="chat-avatar other">B</span></div>`;
 if(v.kind==='steps')return `<div class="step-diagram">${v.items.map((it,j)=>`<span class="${j===index?'current':j<index?'passed':''}"><b>${j<index?'\u2713':String(j+1).padStart(2,'0')}</b><i>${it.label.replace(/^\d+ · /,'')}</i></span>`).join('')}</div>`;
 return `<div class="syntax-diagram"><span>A<small>AWAL</small></span><i>→</i><span>I<small>INTI</small></span><i>→</i><span>P<small>PELENGKAP / KETERANGAN</small></span></div>`;
}
export function labStageHTML(v: VisualModel,index: number){const i=v.items[index];
 return `${labDiagram(v,index)}<div class="sentence-pieces" lang="id">${i.parts.map((p,j)=>`<div class="sentence-piece piece-${p.role}"><b>${esc(p.text)}</b><small>${['AWAL','INTI','PELENGKAP','KETERANGAN'][j]||'KETERANGAN'}</small></div>`).join('')}</div><div class="lab-bottom"><div class="lab-formula">${icon('layers')}<span>${esc(i.formula)}</span></div>${i.meaning?`<p>${esc(i.meaning)}</p>`:''}</div>`}
export function visualHTML(s: LessonSection,chapterId: number){const v=VISUALS[s.id];return `<div class="visual-lab" data-lab="${s.id}" data-index="0"><div class="lab-caption"><span>${icon(CHAPTER_ICONS[chapterId-1])} ${esc(v.note)}</span><b>INTERAKTIF</b></div><div class="lab-controls" role="group" aria-label="Contoh ${esc(s.title)}">${v.items.map((it,i)=>`<button class="${i===0?'selected':''}" data-lab-choice="${i}" aria-pressed="${i===0}"><i class="lab-num" aria-hidden="true">${String(i+1).padStart(2,'0')}</i><span>${esc(it.label.replace(/^\d+ · /,''))}</span></button>`).join('')}</div><div class="lab-stage" aria-live="polite">${labStageHTML(v,0)}</div><div class="lab-pagination"><span>01 <i>/ ${String(v.items.length).padStart(2,'0')}</i></span><button data-lab-next>Contoh berikutnya ${icon('arrow')}</button></div></div>`}
