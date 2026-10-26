export interface Course {
  id: string;
  code: string;
  name: string;
  sks: number;
  category: 'Keahlian Inti' | 'Dasar Komputasi' | 'Bisnis & Manajemen' | 'Wajib Umum';
  lecturer: string;
  schedule: string;
  description: string;
  topics: string[];
  competencies: string[];
  status: 'Sedang Ditempuh' | 'Selesai';
}

export interface Project {
  id: string;
  title: string;
  category: 'Algoritma & Pemrograman' | 'Basis Data & SQL' | 'Desain Web' | 'Analisis Sistem';
  courseOrigin: string;
  date: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  problemSolved: string;
  techStack: string[];
  features: string[];
  demoType: 'code' | 'diagram' | 'web';
  codeSnippet?: string;
  simulatedOutput?: string;
  architectureDetails?: string;
}

export const STUDENT_PROFILE = {
  name: 'Muhammad Jamil Qolbi',
  shortName: 'Jamil Qolbi',
  title: 'Mahasiswa S1 Sistem Informasi - Semester 1',
  university: 'Universitas Komputama Majenang',
  universityShort: 'UNIKOM Majenang',
  faculty: 'Fakultas Ilmu Komputer & Teknologi Informasi',
  major: 'Sistem Informasi (S1)',
  semester: 1,
  totalSKS: 19,
  origin: 'Sumatera Utara',
  currentLocation: 'Majenang, Cilacap, Jawa Tengah',
  email: 'mjamilqolbi@gmail.com',
  whatsapp: '+6281234567890',
  photoUrl: '/src/assets/images/hero_portrait_anime_1792988405580.jpg',
  animePhotoUrl: '/src/assets/images/hero_portrait_anime_1792988405580.jpg',
  originalPhotoUrl: '/assets/aistudio/IMG_20260930_180746_523_1fcbde3b.jpg',
  bio: 'Mahasiswa perantau asal Sumatera Utara yang kini menempuh studi S1 Sistem Informasi Semester 1 di Universitas Komputama Majenang. Berdedikasi mendalami integrasi logika bisnis, algoritma pemrograman, perancangan basis data, dan arsitektur sistem informasi modern.',
  targetCareer: 'Sistem Analis & Pengembang Solusi Digital',
  quote: 'Menjembatani kompleksitas teknologi dengan kebutuhan nyata bisnis dan masyarakat.',
  skills: [
    { name: 'Algoritma & Dasar Pemrograman (C++ & Python)', level: 'Dasar Aktif' },
    { name: 'Pemodelan Basis Data & ERD (MySQL)', level: 'Perancangan Konseptual' },
    { name: 'Analisis Alur Bisnis (DFD & Flowchart)', level: 'Analisis Sistem' },
    { name: 'Web Dasar (HTML5, Tailwind CSS, JS)', level: 'Frontend Fundamental' },
    { name: 'Git & Version Control', level: 'Dasar Kolaborasi' },
    { name: 'Dokumentasi & Komunikasi Teknis', level: 'Akademik' },
  ],
  academicPhilosophy: 'Sebagai mahasiswa tahun pertama asal Sumatera Utara yang menuntut ilmu di Majenang, saya memandang Sistem Informasi bukan sekadar baris kode, melainkan sarana analitis strategis untuk mentransformasikan operasi manual menjadi ekosistem digital yang efisien, transparan, dan terukur.'
};

export const COURSES: Course[] = [
  {
    id: 'algo-1',
    code: 'SI-101',
    name: 'Algoritma dan Pemrograman I',
    sks: 3,
    category: 'Keahlian Inti',
    lecturer: 'Dosen Pengampu Algoritma & Komputasi',
    schedule: 'Senin, 08.00 - 10.30 WIB',
    description: 'Mempelajari logika pemrograman prosedural, paradigma pemecahan masalah algoritmis, struktur kontrol perulangan dan percabangan, array berdimensi, serta modularisasi kode menggunakan fungsi.',
    topics: [
      'Pengenalan Logika Komputasi & Notasi Algoritma (Pseudocode & Flowchart)',
      'Tipe Data Primitif, Variabel, Konstanta & Operator Logika',
      'Struktur Kendali Percabangan (if-else, switch-case)',
      'Struktur Perulangan (for, while, do-while) & Nested Loop',
      'Array Satu Dimensi dan Multidimensi',
      'Fungsi, Parameter By Value & By Reference, dan Prosedur',
      'Algoritma Pencarian (Linear & Binary Search) serta Pengurutan Sederhana'
    ],
    competencies: [
      'Mampu merancang pseudocode dan flowchart untuk kasus nyata',
      'Mengimplementasikan struktur data array dan modularisasi fungsi',
      'Memecahkan masalah komputasional dengan efisiensi logika terstruktur'
    ],
    status: 'Sedang Ditempuh'
  },
  {
    id: 'psi-102',
    code: 'SI-102',
    name: 'Pengantar Sistem Informasi',
    sks: 3,
    category: 'Keahlian Inti',
    lecturer: 'Dosen Pengampu Tata Kelola Sistem Informasi',
    schedule: 'Selasa, 10.45 - 13.15 WIB',
    description: 'Memberikan pemahaman mendasar mengenai peran strategis sistem informasi dalam organisasi modern, siklus hidup pengembangan sistem (SDLC), integrasi proses bisnis, dan etika teknologi informasi.',
    topics: [
      'Konsep Dasar Sistem, Informasi, dan Sistem Informasi',
      'Komponen Sistem Informasi: Hardware, Software, Brainware, Data, Network',
      'Jenis Sistem Informasi: TPS, MIS, DSS, dan Enterprise Systems (ERP, CRM)',
      'Metodologi Pengembangan Sistem (SDLC, Waterfall, Agile Scrum)',
      'Analisis Kebutuhan Sistem dan Peran Analis Sistem',
      'Keamanan Informasi, Privasi Data, dan Etika Digital di Lingkungan Organisasi'
    ],
    competencies: [
      'Memahami keterkaitan antara proses bisnis dan arsitektur TI',
      'Mampu mengidentifikasi kebutuhan informasi para pemangku kepentingan',
      'Mengenal siklus hidup perancangan perangkat lunak perusahaan'
    ],
    status: 'Sedang Ditempuh'
  },
  {
    id: 'k-ti-103',
    code: 'SI-103',
    name: 'Konsep Teknologi Informasi & Komunikasi',
    sks: 2,
    category: 'Dasar Komputasi',
    lecturer: 'Dosen Pengampu Infrastruktur Komputasi',
    schedule: 'Rabu, 08.00 - 09.40 WIB',
    description: 'Menelaah fondasi arsitektur perangkat keras, sistem operasi komputer, topologi jaringan lokal dan global, pengenalan cloud computing, serta ekosistem internet modern.',
    topics: [
      'Evolusi Komputer dan Arsitektur Von Neumann',
      'Perangkat Keras Pemrosesan, Memori, dan Media Penyimpanan',
      'Sistem Operasi: Manajemen Proses, Memori, dan File System',
      'Dasar Jaringan Komputer, Model OSI Layer, dan Protokol TCP/IP',
      'Tren Teknologi: Cloud Computing, Virtualisasi, dan Internet of Things (IoT)'
    ],
    competencies: [
      'Mampu menganalisis spesifikasi kebutuhan infrastruktur perangkat keras dan jaringan',
      'Memahami mekanisme kerja internet dan transmisi data secara teknis'
    ],
    status: 'Sedang Ditempuh'
  },
  {
    id: 'diskrit-104',
    code: 'SI-104',
    name: 'Logika & Matematika Diskrit',
    sks: 3,
    category: 'Dasar Komputasi',
    lecturer: 'Dosen Pengampu Matematika Komputasi',
    schedule: 'Kamis, 08.00 - 10.30 WIB',
    description: 'Membangun kemampuan penalaran formal melalui logika proposisi, tabel kebenaran, teori himpunan, relasi dan fungsi, aljabar boolean, serta dasar teori graf untuk struktur data.',
    topics: [
      'Logika Proposisi, Nilai Kebenaran, dan Tabel Kebenaran',
      'Ekuivalensi Logis, Tautologi, dan Hukum-Hukum Logika',
      'Kuantor Universal dan Eksistensial',
      'Teori Himpunan, Operasi Himpunan, dan Diagram Venn',
      'Relasi, Sifat Relasi, dan Konsep Relasi Ekivalen',
      'Aljabar Boolean dan Penyederhanaan Rangkaian Logika'
    ],
    competencies: [
      'Menyusun argumen pembuktian logika secara matematis',
      'Menerapkan aljabar boolean dalam optimasi kondisi percabangan program'
    ],
    status: 'Sedang Ditempuh'
  },
  {
    id: 'manajemen-105',
    code: 'SI-105',
    name: 'Pengantar Manajemen & Bisnis',
    sks: 2,
    category: 'Bisnis & Manajemen',
    lecturer: 'Dosen Pengampu Manajemen & Kewirausahaan',
    schedule: 'Kamis, 13.00 - 14.40 WIB',
    description: 'Membahas prinsip-prinsip dasar fungsi manajemen (Planning, Organizing, Actuating, Controlling), struktur organisasi perusahaan, serta peran sistem informasi dalam keunggulan kompetitif.',
    topics: [
      'Fungsi Dasar Manajemen dan Lingkungan Bisnis Kontemporer',
      'Perencanaan Strategis dan Penetapan Tujuan Organisasi',
      'Struktur Organisasi dan Pembagian Kerja',
      'Manajemen Rantai Pasok (Supply Chain) dan Operasional',
      'Pemasaran Digital dan Transformasi Nilai Pelanggan'
    ],
    competencies: [
      'Mampu melihat teknologi dari sudut pandang efisiensi bisnis dan ROI',
      'Memahami dinamika organisasi saat mengadopsi solusi digital baru'
    ],
    status: 'Sedang Ditempuh'
  },
  {
    id: 'english-106',
    code: 'SI-106',
    name: 'Bahasa Inggris Komputer & Komunikasi Teknis',
    sks: 2,
    category: 'Wajib Umum',
    lecturer: 'Dosen Pengampu Bahasa Inggris Khusus TI',
    schedule: 'Jumat, 08.00 - 09.40 WIB',
    description: 'Meningkatkan kemahiran membaca dokumentasi teknis berbahasa Inggris, istilah TI internasional, penulisan laporan teknis, dan presentasi spesifikasi sistem.',
    topics: [
      'Hardware & Software Terminology in Global Computing',
      'Reading Technical Specifications and Software Documentation',
      'Writing User Guides & Requirement Statements in English',
      'Delivering Technical Presentations & Group Discussions'
    ],
    competencies: [
      'Mampu membaca dokumentasi API dan referensi pemrograman resmi',
      'Percaya diri dalam menyusun spesifikasi kebutuhan dalam bahasa Inggris'
    ],
    status: 'Sedang Ditempuh'
  },
  {
    id: 'agama-107',
    code: 'SI-107',
    name: 'Pendidikan Agama Islam & Etika Profesi',
    sks: 2,
    category: 'Wajib Umum',
    lecturer: 'Dosen Pengampu Nilai Karakter & Etika',
    schedule: 'Jumat, 13.30 - 15.10 WIB',
    description: 'Penanaman nilai-nilai spiritual, integritas akademik, kejujuran data, tanggung jawab sosial, serta etika profesional bagi praktisi teknologi informasi.',
    topics: [
      'Integrasi Keimanan dan Penguasaan Ilmu Pengetahuan Teknologi',
      'Etika Komunikasi dan Tanggung Jawab Moral di Ruang Siber',
      'Kejujuran Data dan Anti-Plagiarisme dalam Karya Akademik',
      'Pemanfaatan Teknologi untuk Kemaslahatan Umat dan Kemanusiaan'
    ],
    competencies: [
      'Menjunjung tinggi kode etik teknologi dan privasi data pengguna',
      'Memiliki integritas moral dalam pengembangan perangkat lunak'
    ],
    status: 'Sedang Ditempuh'
  },
  {
    id: 'pancasila-108',
    code: 'SI-108',
    name: 'Pancasila & Kewarganegaraan',
    sks: 2,
    category: 'Wajib Umum',
    lecturer: 'Dosen Pengampu Pendidikan Kebangsaan',
    schedule: 'Rabu, 10.00 - 11.40 WIB',
    description: 'Menguatkan kesadaran berbangsa dan bernegara, hukum siber di Indonesia (UU ITE), serta peran mahasiswa sebagai agen perubahan digital yang berwawasan nusantara.',
    topics: [
      'Pancasila sebagai Fondasi Etika Kehidupan Berbangsa',
      'Konstitusi Negara dan Hak Asasi Warga Negara di Era Informasi',
      'Literasi Hukum Siber dan Kedaulatan Digital Indonesia',
      'Semangat Persatuan dan Kebinekaan dalam Komunitas Teknologi'
    ],
    competencies: [
      'Memahami implikasi hukum pada pengembangan sistem digital',
      'Memiliki rasa nasionalisme dan dedikasi membangun daerah melalui TI'
    ],
    status: 'Sedang Ditempuh'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-algo-kasir',
    title: 'Sistem Kasir & Inventaris Mini Market (CLI)',
    category: 'Algoritma & Pemrograman',
    courseOrigin: 'Algoritma dan Pemrograman I (SI-101)',
    date: 'Oktober 2026',
    image: '/src/assets/images/project_algo_terminal_1792985289641.jpg',
    shortDesc: 'Program berbasis konsol untuk otomasi kasir toko, kalkulasi diskon bertingkat, pengecekan stok otomatis, dan pencatatan struk transaksi.',
    fullDesc: 'Proyek studi kasus semester 1 yang dibangun untuk mensimulasikan sistem point of sale (POS) pada toko ritel. Program ini menerapkan struktur data array of struct untuk menyimpan data barang (ID, nama, harga, stok), fungsi modular untuk setiap operasi bisnis, validasi input harga dan kuantitas, serta algoritma pencarian linear search untuk menemukan produk berdasarkan kode.',
    problemSolved: 'Membantu pemilik toko kelontong mengurangi kekeliruan perhitungan kasir manual dan mempercepat proses verifikasi sisa stok barang secara akurat.',
    techStack: ['C++', 'Python', 'Struktur Kontrol Algoritma', 'Terminal Interface', 'File I/O'],
    features: [
      'Katalog dinamis dengan kapasitas hingga 50 item barang',
      'Fitur tambah, ubah harga, dan restock barang masuk',
      'Pencarian produk cepat berdasarkan kode SKU atau nama barang',
      'Kalkulasi otomatis subtotal, pajak PPN 11%, dan diskon belanja',
      'Pencetakan struk digital ringkas langsung pada layar terminal'
    ],
    demoType: 'code',
    codeSnippet: `#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

struct Produk {
    string id;
    string nama;
    double harga;
    int stok;
};

void cetakStruk(Produk p[], int beliIdx, int qty, double uangBayar) {
    double total = p[beliIdx].harga * qty;
    double kembalian = uangBayar - total;
    cout << "\n========================================\n";
    cout << "     MINI MARKET KOMPUTAMA MAJENANG     \n";
    cout << "========================================\n";
    cout << "Item   : " << p[beliIdx].nama << " (" << p[beliIdx].id << ")\n";
    cout << "Qty    : " << qty << " x Rp " << fixed << setprecision(0) << p[beliIdx].harga << "\n";
    cout << "Total  : Rp " << total << "\n";
    cout << "Bayar  : Rp " << uangBayar << "\n";
    cout << "Kembali: Rp " << kembalian << "\n";
    cout << "========================================\n";
    cout << "Terima kasih atas kunjungan Anda!\n";
}`,
    simulatedOutput: `[INFO] Sistem Kasir Mini Market UNIKOM Siap...
Menu: [1] Lihat Katalog  [2] Cari Barang  [3] Transaksi Kasir  [4] Keluar
Pilihan > 3
Masukkan ID Barang: BRG-002 (Buku Tulis A5)
Jumlah Beli: 4 unit @ Rp 7.500
Subtotal: Rp 30.000
Uang Tunai: Rp 50.000

========================================
     MINI MARKET KOMPUTAMA MAJENANG     
========================================
Item   : Buku Tulis A5 (BRG-002)
Qty    : 4 x Rp 7500
Total  : Rp 30000
Bayar  : Rp 50000
Kembali: Rp 20000
========================================
[SUCCESS] Stok tersisa: 46 unit. Data transaksi tersimpan!`
  },
  {
    id: 'proj-erd-perpus',
    title: 'Desain Relasional & ERD Sistem Perpustakaan',
    category: 'Basis Data & SQL',
    courseOrigin: 'Konsep Teknologi Informasi & Basis Data',
    date: 'November 2026',
    image: '/src/assets/images/project_db_diagram_1792985290354.jpg',
    shortDesc: 'Perancangan skema basis data ternormalisasi (3NF) untuk otomasi sirkulasi buku, tracking denda peminjam, dan katalogisasi multi-penulis.',
    fullDesc: 'Rancangan arsitektur data konseptual dan fisik untuk sistem informasi perpustakaan perguruan tinggi. Mengintegrasikan 7 entitas utama (Buku, Kategori, Penulis, Anggota/Mahasiswa, Peminjaman, Detail Peminjaman, dan Denda) dengan relasi kardinalitas 1:N dan N:M yang diurai menggunakan junction table untuk mencegah redundansi dan anomali pembaruan.',
    problemSolved: 'Menghilangkan inkonsistensi pencatatan kartu pinjam manual, mencegah kehilangan aset buku, dan mempermudah rekapitulasi denda keterlambatan buku.',
    techStack: ['MySQL', 'Entity Relationship Diagram (ERD)', 'Data Normalization (3NF)', 'Data Dictionary', 'SQL DDL/DML'],
    features: [
      'Struktur tabel memenuhi prinsip 3NF (Third Normal Form)',
      'Primary Key & Foreign Key integrity constraint dengan CASCADE protection',
      'Tabel transaksi peminjaman dengan penanda tanggal jatuh tempo otomatis',
      'Query SQL view untuk memonitor daftar mahasiswa dengan status denda aktif',
      'Kamus data (Data Dictionary) lengkap dengan tipe data dan aturan validasi'
    ],
    demoType: 'diagram',
    architectureDetails: `ENTITAS UTAMA & RELASI:
1. ANGGOTA (id_anggota [PK], nim, nama, prodi, no_hp, email)
2. BUKU (id_buku [PK], isbn, judul, thn_terbit, stok_tersedia, id_kategori [FK])
3. KATEGORI (id_kategori [PK], nama_kategori)
4. PENULIS (id_penulis [PK], nama_penulis)
5. BUKU_PENULIS (id_buku [FK], id_penulis [FK]) [Junction Table M:N]
6. PEMINJAMAN (id_pinjam [PK], id_anggota [FK], tgl_pinjam, tgl_tenggat, status_kembali)
7. DENDA (id_denda [PK], id_pinjam [FK], jumlah_hari, total_denda, status_lunas)`
  },
  {
    id: 'proj-web-umkm',
    title: 'Portal Direktori & Profil Digital UMKM Majenang',
    category: 'Desain Web',
    courseOrigin: 'Praktikum Desain Web & TIK Mandiri',
    date: 'Desember 2026',
    image: '/src/assets/images/project_umkm_portal_1792985290304.jpg',
    shortDesc: 'Website profil responsif untuk mempromosikan produk lokal UMKM Majenang dengan katalog interaktif dan tombol penghubung langsung ke pedagang.',
    fullDesc: 'Pengembangan situs web statis modern bertema dark-minimalist yang ditujukan untuk membantu pelaku usaha mikro, kecil, dan menengah di Majenang memasarkan produk mereka secara online. Dibangun menggunakan standar HTML5 semantik, Tailwind CSS untuk styling responsif, dan JavaScript murni untuk filter kategori dinamis tanpa refresh halaman.',
    problemSolved: 'Banyak UMKM unggulan Majenang belum memiliki visibilitas digital mandiri. Portal ini memberikan etalase digital yang elegan, cepat diakses dari smartphone, dan mudah digunakan pembeli.',
    techStack: ['HTML5 Semantic', 'Tailwind CSS', 'JavaScript Modern', 'Mobile-First Design', 'Lucide Icons'],
    features: [
      'Tampilan antarmuka responsif yang nyaman diakses dari smartphone maupun PC',
      'Filter kategori usaha: Kuliner Khas, Kerajinan Tangan, Fashion, Jasa Lokal',
      'Modal pop-up detail produk dengan galeri foto dan informasi harga',
      'Integrasi tombol WhatsApp otomatis dengan pesan salam pembuka kustom',
      'Performa loading instan dengan optimasi aset gambar dan clean code'
    ],
    demoType: 'web',
    codeSnippet: `<!-- Snippet Komponen Kartu UMKM Responsif -->
<article class="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition">
  <div class="aspect-video w-full rounded-lg bg-zinc-800 mb-4 overflow-hidden">
    <img src="/assets/umkm-kopi.jpg" alt="Kopi Robusta Majenang" class="w-full h-full object-cover" />
  </div>
  <div class="flex items-center justify-between text-xs text-zinc-400 mb-2">
    <span>Kuliner & Hasil Tani</span>
    <span>Majenang Timur</span>
  </div>
  <h3 class="text-base font-semibold text-white mb-2">Kopi Robusta Lereng Majenang</h3>
  <p class="text-xs text-zinc-400 line-clamp-2 mb-4">Biji kopi pilihan petik merah dengan aroma khas rempah dan cokelat.</p>
  <a href="https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20produk%20Anda" 
     class="block text-center py-2 text-xs font-medium text-black bg-white rounded-md hover:bg-zinc-200">
    Hubungi Penjual via WA
  </a>
</article>`
  },
  {
    id: 'proj-dfd-analisis',
    title: 'Analisis Alur Bisnis & Pemodelan DFD Sistem Kasir',
    category: 'Analisis Sistem',
    courseOrigin: 'Pengantar Sistem Informasi (SI-102)',
    date: 'Januari 2027',
    image: '/src/assets/images/project_algo_terminal_1792985289641.jpg',
    shortDesc: 'Studi komprehensif alur operasional toko ritel, perancangan Diagram Konteks, DFD Level 1, dan identifikasi titik bottleneck proses bisnis.',
    fullDesc: 'Laporan analisis sistem akademik yang membedah proses transaksi ritel dari hulu ke hilir. Mencakup pemodelan alur penerimaan barang dari supplier, transaksi di meja kasir, rekonsiliasi kas harian, hingga pelaporan berkala ke manajer toko. Menghasilkan Diagram Konteks dan DFD Level 1 yang siap diimplementasikan oleh tim developer.',
    problemSolved: 'Mengidentifikasi inefisiensi pencatatan ganda pada nota fisik dan memberikan rekomendasi rancangan alur otomatisasi data kasir yang aman dan akuntabel.',
    techStack: ['Data Flow Diagram (DFD)', 'Context Diagram', 'Business Flowchart', 'Draw.io', 'Analisis Kebutuhan Sistem'],
    features: [
      'Diagram Konteks dengan 4 Entitas Eksternal (Pelanggan, Kasir, Supplier, Pemilik)',
      'DFD Level 1 yang memecah proses menjadi 4 sub-proses: Pendataan, Transaksi, Kas, Laporan',
      'Matriks identifikasi kelemahan sistem lama vs solusi sistem informasi baru',
      'Katalog spesifikasi kebutuhan fungsional (FR) dan non-fungsional (NFR)'
    ],
    demoType: 'diagram',
    architectureDetails: `ENTITAS EKSTERNAL:
1. PELANGGAN -> Mengirim pesanan/barang, pembayaran. Menerima struk belanja & kembalian.
2. KASIR -> Menginput transaksi, menerima uang, mencetak laporan kas kasir per shift.
3. SUPPLIER -> Mengirim faktur pengiriman & barang datang, menerima konfirmasi PO.
4. PEMILIK / MANAJER -> Menerima laporan penjualan harian, mingguan, serta status stok kritis.`
  }
];

export const TIMELINE_JOURNEY = [
  {
    period: 'Asal Daerah',
    title: 'Putra Daerah Sumatera Utara',
    description: 'Tumbuh besar di Sumatera Utara, membentuk karakter disiplin, kemandirian, dan semangat juang tinggi dalam menuntut ilmu di dunia teknologi informasi.'
  },
  {
    period: 'Agustus 2026',
    title: 'Merantau & Memulai Studi di Majenang',
    description: 'Memilih merantau ke Majenang, Cilacap, Jawa Tengah untuk menempuh pendidikan sarjana Program Studi Sistem Informasi di Universitas Komputama Majenang.'
  },
  {
    period: 'Semester 1 (2026/2027)',
    title: 'Membangun Fondasi Komputasi & Bisnis',
    description: 'Fokus menuntaskan 19 SKS mata kuliah semester 1: mendalami logika algoritma pemrograman, konsep teknologi informasi, aljabar boolean, dan pemahaman tata kelola bisnis.'
  },
  {
    period: 'Target Akademik',
    title: 'Eksplorasi Proyek Nyata & Magang',
    description: 'Menargetkan portofolio studi kasus sistem informasi mandiri, partisipasi kompetisi akademik, serta persiapan sertifikasi keahlian data dan sistem analis.'
  }
];
