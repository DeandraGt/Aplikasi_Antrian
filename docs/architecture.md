# QueueApp — Architecture Documentation

## 1. Gambaran Umum

QueueApp adalah aplikasi antrean sederhana yang dikembangkan sebagai proyek praktikum mata kuliah Web and Mobile Technology. Aplikasi ini membantu pengunjung mengambil nomor antrean dan melihat status antrean, sedangkan petugas dapat memantau, memanggil, dan menyelesaikan antrean.

Pengembangan QueueApp dilakukan secara bertahap. Minggu 01 berfokus pada persiapan lingkungan, kemudian dilanjutkan dengan perancangan kebutuhan, struktur HTML, CSS responsif, JavaScript, React + Vite, integrasi React Router, dan penyempurnaan Web MVP pada Minggu 08.

Pada checkpoint Week 08, aplikasi masih menggunakan penyimpanan lokal di sisi klien. Integrasi dengan REST API sungguhan dan database terpusat belum menjadi bagian dari implementasi antrean saat ini.

## 2. Tujuan Sistem

QueueApp dikembangkan untuk:

1. Memudahkan pengunjung mengambil nomor antrean.
2. Menampilkan status antrean yang sedang dipanggil dan masih menunggu.
3. Membantu petugas mengelola antrean melalui dashboard.
4. Menyediakan antarmuka yang dapat digunakan pada berbagai ukuran layar.
5. Menerapkan pengembangan aplikasi secara bertahap dengan struktur kode yang terorganisasi.

## 3. Peran Pengguna

### 3.1 Pengunjung

Pengunjung dapat:

- Melihat antrean yang sedang dipanggil.
- Melihat daftar antrean yang menunggu.
- Mengambil nomor antrean baru.
- Melihat status nomor antrean yang diambil.

### 3.2 Petugas

Petugas dapat:

- Membuka halaman login.
- Mengakses dashboard melalui simulasi login.
- Melihat ringkasan dan daftar antrean.
- Memanggil antrean berikutnya sesuai urutan.
- Menyelesaikan antrean yang sedang dipanggil.

Login pada tahap ini masih berupa simulasi dan belum menggunakan autentikasi sungguhan.

## 4. Perkembangan Arsitektur Minggu 01–08

### Minggu 01 — Discovery & Environment

Tahap pertama berfokus pada persiapan lingkungan pengembangan. Docker Compose digunakan untuk menjalankan tiga layanan utama:

- **Web:** menyediakan antarmuka aplikasi.
- **Server:** disiapkan sebagai layanan backend.
- **MySQL:** disiapkan sebagai layanan basis data.

Pada tahap awal, aplikasi masih berupa placeholder. Tujuannya adalah memastikan lingkungan pengembangan berjalan sebelum fitur aplikasi dibangun.

### Minggu 02 — Requirements & System Design

Tahap ini berfokus pada pendefinisian masalah, kebutuhan pengguna, ruang lingkup aplikasi, dan rancangan awal sistem.

Dokumentasi kebutuhan menjadi dasar untuk menentukan fitur, peran pengguna, batas MVP, serta fitur yang belum dikerjakan pada tahap awal.

### Minggu 03 — UI/UX & HTML

Struktur antarmuka dibuat menggunakan HTML semantik dengan empat halaman awal:

- `index.html` — Antrean Saat Ini.
- `take-queue.html` — Ambil Nomor Antrean.
- `admin-login.html` — Login Petugas.
- `admin-dashboard.html` — Dashboard Petugas.

Tahap ini berfokus pada struktur konten, label formulir, tabel, navigasi, dan aksesibilitas dasar.

### Minggu 04 — CSS & Responsive Design

CSS ditambahkan untuk membentuk tampilan aplikasi yang lebih teratur dan responsif.

Pendekatan mobile-first digunakan agar antarmuka dapat digunakan pada layar kecil maupun besar. Komponen seperti formulir, tombol, navigasi, dan tabel disesuaikan agar lebih mudah digunakan.

### Minggu 05 — JavaScript

JavaScript ditambahkan untuk menangani perilaku interaktif aplikasi, termasuk pengambilan nomor, perubahan status antrean, validasi formulir, dan interaksi dashboard.

Logika antrean dipisahkan dari kode tampilan agar aturan bisnis dapat digunakan kembali dan lebih mudah dirawat.

### Minggu 06 — React + Vite

Antarmuka mulai diintegrasikan menggunakan React dan Vite. Komponen dan halaman disusun menjadi bagian-bagian yang lebih mudah digunakan kembali.

Pengelolaan data antrean menggunakan fungsi dan hook agar perubahan data dapat ditampilkan kembali pada antarmuka.

### Minggu 07 — React Integration & Routing

Aplikasi menggunakan satu dokumen HTML dan React Router untuk berpindah halaman tanpa memuat ulang seluruh dokumen.

`App.jsx` menjadi pemilik utama state antrean melalui `useQueue.js`. Lapisan data pada `api/queueApi.js` menyediakan operasi berbasis Promise, sedangkan `DataState.jsx` menangani keadaan memuat dan galat.

Lapisan tersebut masih menggunakan penyimpanan lokal dan belum memanggil REST API sungguhan.

### Minggu 08 — UTS / Web MVP Checkpoint

Checkpoint Week 08 menyempurnakan alur utama Web MVP dan aturan pemanggilan antrean.

Pemanggilan antrean berikutnya tidak boleh otomatis menyelesaikan antrean yang sedang berstatus `CALLED`. Petugas harus menyelesaikan antrean tersebut terlebih dahulu sebelum memanggil antrean berikutnya.

Penanganan aksi juga dipisahkan dari proses penyegaran daftar agar kegagalan penyegaran tidak membuat aksi yang telah berhasil dilaporkan sebagai gagal.

## 5. Teknologi yang Digunakan

- **Docker Compose:** menjalankan lingkungan pengembangan.
- **MySQL:** layanan basis data yang disiapkan untuk pengembangan berikutnya.
- **HTML:** menyusun struktur konten.
- **CSS:** mengatur tampilan dan desain responsif.
- **JavaScript:** mengelola interaksi dan aturan antrean.
- **React:** membangun antarmuka berbasis komponen.
- **Vite:** menjalankan server pengembangan dan proses build.
- **React Router:** mengelola navigasi sisi klien.
- **localStorage:** mempertahankan data antrean secara lokal pada peramban.

## 6. Struktur Arsitektur pada Checkpoint Week 08

```text
Browser
   |
   v
web/index.html
   |
   v
src/main.jsx
   |
   v
BrowserRouter
   |
   v
App.jsx
   |
   +-- HomePage
   +-- TakeQueuePage
   +-- AdminLoginPage
   +-- AdminDashboardPage
   +-- NotFoundPage
   |
   v
useQueue.js
   |
   v
api/queueApi.js
   |
   +-- queue.js
   |     +-- Aturan bisnis antrean
   |
   +-- storage.js
         +-- Penyimpanan lokal
              |
              v
           localStorage
```

Komponen `Layout.jsx` digunakan bersama untuk menyediakan kerangka halaman dan navigasi. `DataState.jsx` digunakan untuk menampilkan status pemuatan data, pesan galat, atau konten halaman.

Arsitektur ini menggambarkan jalur pengelolaan data pada sisi klien. Server dan MySQL telah disiapkan dalam lingkungan pengembangan, tetapi belum menjadi backend aktif untuk operasi antrean pada checkpoint ini.

## 7. Routing

Aplikasi menggunakan empat path utama dan satu rute cadangan:

- `/` — melihat antrean saat ini.
- `/queue` — mengambil nomor antrean.
- `/admin/login` — masuk sebagai petugas.
- `/admin/dashboard` — mengelola antrean.
- `*` — menampilkan halaman NotFound untuk alamat yang tidak terdaftar.

Navigasi dikelola oleh React Router tanpa memuat ulang seluruh dokumen HTML.

## 8. Pengelolaan Data dan Aturan Bisnis

`App.jsx` menggunakan `useQueue.js` sebagai pemilik state antrean. Halaman menerima data dan fungsi aksi melalui props sehingga setiap halaman tidak membuat salinan state antrean sendiri.

`queueApi.js` menyediakan operasi untuk:

- Membaca daftar antrean.
- Membuat antrean baru.
- Memanggil antrean berikutnya.
- Menyelesaikan antrean.

Operasi tersebut menggunakan Promise untuk menyimulasikan proses permintaan data.

`queue.js` berisi aturan bisnis, termasuk pembuatan nomor antrean dan perubahan status. `storage.js` menangani pembacaan serta penyimpanan data lokal.

### 8.1 Aturan Memanggil Antrean

Pemanggilan antrean harus mengikuti aturan berikut:

1. Sistem mencari antrean berstatus `WAITING` yang paling awal.
2. Jika tidak ada antrean berstatus `WAITING`, tidak ada antrean baru yang dipanggil.
3. Jika masih ada antrean berstatus `CALLED`, pemanggilan baru ditolak.
4. Jika tidak ada antrean yang sedang dipanggil, tepat satu antrean berstatus `WAITING` dapat berubah menjadi `CALLED`.
5. Petugas harus menyelesaikan antrean berstatus `CALLED` sebelum memanggil antrean berikutnya.

Dengan demikian, satu aksi pemanggilan hanya mengubah satu antrean dan tidak sekaligus menyelesaikan antrean sebelumnya.

### 8.2 Aturan Menyelesaikan Antrean

1. Petugas memilih aksi **Selesaikan** pada antrean yang sedang dipanggil.
2. Sistem memeriksa apakah perubahan status diperbolehkan.
3. Jika valid, status antrean berubah dari `CALLED` menjadi `COMPLETED`.
4. Setelah penyelesaian berhasil, petugas dapat memanggil antrean berikutnya jika masih ada antrean menunggu.

## 9. Status Antrean

Antrean memiliki tiga status utama:

- `WAITING`: antrean sedang menunggu giliran.
- `CALLED`: antrean sedang dipanggil.
- `COMPLETED`: antrean telah selesai.

Perubahan status mengikuti aturan bisnis di lapisan antrean. Halaman tidak boleh mengubah status secara bebas tanpa mengikuti aturan tersebut.

## 10. Penanganan Kondisi Antarmuka

Aplikasi menangani tiga kondisi utama data:

1. **Memuat:** ditampilkan saat data sedang diminta.
2. **Siap:** data berhasil diperoleh dan konten dapat ditampilkan.
3. **Galat:** data gagal dimuat sehingga pesan kesalahan dan tombol coba lagi ditampilkan.

Aksi yang sedang diproses juga menggunakan status sibuk agar tombol terkait tidak mudah ditekan berulang kali.

Aksi antrean dan penyegaran daftar ditangani secara terpisah. Jika aksi sudah berhasil tetapi penyegaran daftar gagal, hasil aksi tersebut tidak boleh dilaporkan sebagai gagal hanya karena proses penyegaran mengalami masalah.

## 11. Lingkungan Pengembangan

Docker Compose menjalankan layanan web, server, dan MySQL. Layanan web menggunakan Vite untuk pengembangan antarmuka React.

Pada checkpoint Week 08, layanan server dan MySQL masih merupakan bagian dari lingkungan pengembangan. Operasi antrean pada Web MVP masih menggunakan lapisan data lokal, bukan backend aktif yang menyimpan data pada database terpusat.

## 12. Batasan Sistem pada Checkpoint Week 08

- Operasi antrean belum menggunakan REST API sungguhan.
- Data antrean belum disimpan dalam database terpusat.
- Data lokal tidak otomatis tersinkronisasi antarperangkat.
- Login petugas masih berupa simulasi.
- Autentikasi dan otorisasi pengguna sungguhan belum tersedia.

Batasan tersebut menjadi bagian dari ruang lingkup pengembangan bertahap QueueApp. Integrasi backend dan database akan dikerjakan pada minggu praktikum berikutnya.