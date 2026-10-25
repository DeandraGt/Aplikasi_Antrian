# QueueApp

QueueApp adalah aplikasi antrean sederhana yang dikembangkan secara bertahap dalam praktikum Web and Mobile Technology. Aplikasi ini membantu pengunjung mengambil dan memantau nomor antrean serta membantu petugas mengelola proses pemanggilan dan penyelesaian antrean.

## Tujuan Proyek

Proyek ini dikembangkan untuk menerapkan proses pengembangan aplikasi secara bertahap, mulai dari identifikasi kebutuhan, perancangan antarmuka, pembuatan fitur, hingga migrasi frontend menggunakan React, Vite, dan React Router.

## Fitur Utama

- Menampilkan daftar antrean dan status antrean.
- Mengambil nomor antrean baru.
- Melihat posisi dan status antrean.
- Memanggil antrean berikutnya melalui halaman petugas.
- Menyelesaikan antrean yang sedang dipanggil.
- Mencegah pemanggilan antrean berikutnya ketika masih ada antrean berstatus `CALLED`.
- Menampilkan keadaan memuat, galat, dan data kosong pada antarmuka.
- Menyimpan data antrean pada browser menggunakan `localStorage`.
- Menyediakan halaman pengunjung dan petugas melalui React Router.

**Catatan:** Pada checkpoint Week 08, aplikasi masih berupa Web MVP berbasis frontend. Data antrean belum terhubung dengan REST API sungguhan maupun database terpusat. Formulir login juga belum menggunakan autentikasi sungguhan.

## Teknologi yang Digunakan

- **HTML:** menyusun struktur dokumen aplikasi.
- **CSS:** mengatur tampilan dan desain responsif.
- **JavaScript:** menangani logika dan interaksi aplikasi.
- **React:** membangun antarmuka berbasis komponen.
- **Vite:** menyediakan development server dan proses build frontend.
- **React Router:** mengelola navigasi ant halaman.
- **localStorage:** menyimpan data antrean secara lokal pada browser.
- **Docker Compose:** menjalankan lingkungan pengembangan.
- **MySQL:** layanan database yang disiapkan dalam lingkungan proyek.
- **Git dan GitHub:** mengelola versi dan riwayat pengembangan proyek.

## Perjalanan Pengembangan

### Week 01 — Discovery & Environment

Menyiapkan repository, kebutuhan awal proyek, konfigurasi environment, dan layanan Docker Compose. Pada tahap ini, layanan MySQL, server placeholder, dan web placeholder digunakan untuk menyiapkan lingkungan pengembangan.

Checkpoint: `week-01`

### Week 02 — Requirements & Perancangan

Memperjelas kebutuhan aplikasi, pengguna, ruang lingkup, dan rancangan sistem sebagai dasar pengembangan fitur pada minggu berikutnya.

Checkpoint: `week-02` — ketersediaan tag perlu diverifikasi pada repository.

### Week 03 — UI/UX + HTML

Membuat struktur dasar halaman aplikasi untuk menampilkan antrean, mengambil nomor antrean, login petugas, dan dashboard petugas. Tahap ini berfokus pada struktur halaman dan alur penggunaan.

Checkpoint: `week-03`

### Week 04 — CSS & Responsive Design

Menambahkan stylesheet untuk memperbaiki tampilan, formulir, tabel antrean, serta responsivitas halaman pada berbagai ukuran layar. Pendekatan yang digunakan adalah mobile-first dengan CSS biasa.

Checkpoint: `week-04`

### Week 05 — JavaScript Foundation

Menambahkan interaksi pada aplikasi, termasuk pengambilan nomor, pemanggilan antrean, penyelesaian antrean, dan penyimpanan data menggunakan `localStorage`.

Checkpoint: `week-05`

### Week 06 — React + Vite

Memigrasikan frontend dari JavaScript biasa ke React menggunakan Vite. Logika antrean, penyimpanan, komponen, halaman, dan entry point ditata ke dalam folder `src`. Struktur aplikasi kemudian dikembangkan menggunakan komponen React.

Checkpoint: `week-06`

### Week 07 — React Integration & Routing

Mengintegrasikan React Router agar pengguna dapat berpindah halaman melalui navigasi sisi klien. Aplikasi menggunakan satu dokumen HTML utama dengan empat path utama:

- `/` — halaman utama.
- `/queue` — halaman pengambilan dan pemantauan antrean.
- `/admin/login` — halaman login petugas.
- `/admin/dashboard` — dashboard petugas.

Pengelolaan state antrean dipusatkan melalui `useQueue.js`. Lapisan `queueApi.js` menyediakan operasi data berbasis Promise, sedangkan `DataState.jsx` menangani keadaan memuat dan galat.

Pada tahap ini, data antrean masih dikelola secara lokal dan belum terhubung dengan REST API sungguhan maupun database terpusat.

Checkpoint: `week-07`

### Week 08 — UTS / Web MVP

Menyempurnakan checkpoint Web MVP dengan meninjau alur antrean, konsistensi antarmuka, penanganan galat, serta dokumentasi proyek.

Perbaikan utama pada tahap ini meliputi:

- Memastikan satu tindakan pemanggilan hanya memanggil satu antrean.
- Mencegah pemanggilan antrean baru ketika masih ada antrean berstatus `CALLED`.
- Memisahkan tindakan antrean dari proses penyegaran daftar agar kegagalan penyegaran tidak membuat tindakan yang sudah berhasil dilaporkan sebagai gagal.
- Menyesuaikan halaman dan navigasi dengan struktur React Router.
- Memperbarui dokumentasi alur antarmuka, arsitektur, dan checkpoint UTS.

Checkpoint Week 08 menjadi titik pemeriksaan Web MVP sebelum pengembangan dilanjutkan ke tahap berikutnya. Status akhir checkpoint dan tag akan dipastikan setelah pemeriksaan serta proses Git selesai.

## Menjalankan Proyek

### Prasyarat

Pastikan perangkat telah memiliki:

- Git.
- Docker Desktop.
- Docker Compose.

Untuk menjalankan frontend secara langsung di luar Docker, gunakan Node.js dan npm yang sesuai dengan kebutuhan proyek.

### Langkah Menjalankan

Clone repository dan masuk ke direktori proyek:

```bash
git clone https://github.com/ckevinland-beep/Aplikasi-Antrian.git
cd Aplikasi-Antrian
```

Salin `.env.example` menjadi `.env` apabila file tersebut digunakan oleh konfigurasi lokal. Pada Windows, file dapat disalin melalui File Explorer.

Jalankan layanan menggunakan Docker Compose:

```bash
docker compose up -d
docker compose ps
```

Untuk melihat log layanan:

```bash
docker compose logs -f
```

Untuk menghentikan layanan:

```bash
docker compose down
```

Jangan memasukkan file `.env` ke repository karena dapat berisi konfigurasi lokal atau informasi sensitif.

### Alamat Demo

Setelah layanan web berjalan, buka alamat berikut:

- Halaman utama: http://localhost:5173/
- Halaman antrean: http://localhost:5173/queue
- Login petugas: http://localhost:5173/admin/login
- Dashboard petugas: http://localhost:5173/admin/dashboard

Endpoint server placeholder tersedia di http://localhost:3001 apabila layanan tersebut dijalankan oleh konfigurasi proyek.

**Catatan:** Alamat di atas merupakan alamat lokal pengembangan. Keberhasilan akses bergantung pada layanan Docker atau development server yang sedang berjalan.

## Struktur Repository

Struktur utama proyek setelah pengembangan React dan routing mencakup:

```text
Aplikasi-Antrian/
├── docs/
│   ├── architecture.md
│   ├── requirements.md
│   ├── ui-flow.md
│   └── uts-checkpoint.md
├── server/
├── web/
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── src/
│       ├── api/
│       │   └── queueApi.js
│       ├── components/
│       ├── pages/
│       ├── styles/
│       ├── App.jsx
│       ├── main.jsx
│       ├── queue.js
│       ├── storage.js
│       └── useQueue.js
├── .env.example
├── .gitignore
├── docker-compose.yml
├── MILESTONE.md
├── PRD.md
└── README.md
```

Struktur tersebut merupakan gambaran file utama proyek. Isi folder dapat bertambah atau berubah sesuai implementasi dan modul praktikum.

## Pengelolaan Versi

Pengembangan dilakukan menggunakan Git dengan cabang kerja mingguan, pesan commit yang menjelaskan perubahan, dan Pull Request untuk menggabungkan pekerjaan ke `main`.

Checkpoint yang telah digunakan pada tahapan pengembangan meliputi `week-01`, `week-03`, `week-04`, `week-05`, `week-06`, dan `week-07`. Ketersediaan tag `week-02` perlu diperiksa pada repository.

Checkpoint `week-08` akan ditetapkan setelah perubahan, dokumentasi, dan pemeriksaan akhir selesai dilakukan.

## Status Pengembangan

Pada Week 08, QueueApp berada pada tahap Web MVP berbasis React, Vite, dan React Router. Alur utama antrean menggunakan penyimpanan lokal pada browser, dengan perbaikan aturan pemanggilan antrean dan penanganan galat.

Aplikasi belum menggunakan REST API backend dan database terpusat sebagai sumber data aktif. Autentikasi petugas juga belum diterapkan secara sungguhan.

Pengembangan berikutnya akan mengikuti modul praktikum, dengan menjaga konsistensi implementasi, dokumentasi, dan pengelolaan versi proyek.