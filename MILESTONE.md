# QueueApp Milestone Tracker

Dokumen ini mencatat perkembangan QueueApp berdasarkan modul praktikum Minggu 01 sampai Minggu 08. Status setiap milestone disesuaikan dengan pekerjaan yang telah dilakukan dan hasil verifikasi yang tersedia.

## Week 01 — Discovery & Environment

### Status

- [x] Repository Git disiapkan.
- [x] File `.gitignore` dibuat.
- [x] File `.env.example` dibuat.
- [x] File `docker-compose.yml` dibuat.
- [x] Layanan MySQL dikonfigurasi.
- [x] Server placeholder disiapkan.
- [x] Web placeholder disiapkan.
- [x] `docs/requirements.md` dibuat.
- [x] `PRD.md` dibuat.
- [x] `MILESTONE.md` dibuat.
- [x] Lingkungan Docker Compose diuji.

### Verifikasi

- Web: `http://localhost:5173/`
- Server: `http://localhost:3001/`
- MySQL: port host `3307`

### Hasil

Lingkungan pengembangan awal berhasil dijalankan menggunakan Docker Compose.

## Week 02 — Requirements & Perancangan

### Status

- [ ] Kebutuhan aplikasi diperinci sesuai modul Minggu 02.
- [ ] User story dan kebutuhan fungsional diperiksa.
- [ ] Arsitektur sistem diperinci.
- [ ] Hasil pekerjaan dibandingkan dengan checkpoint modul.
- [ ] Tag `week-02` diverifikasi.

### Verifikasi

Periksa `docs/requirements.md`, `PRD.md`, serta berkas perancangan yang diwajibkan modul Minggu 02.

### Hasil

Bagian ini perlu diperbarui berdasarkan berkas dan checkpoint Week 02 yang benar-benar tersedia di repository.

## Week 03 — UI/UX + HTML

### Status

- [x] Struktur halaman antrean dibuat.
- [x] Halaman pengambilan nomor dibuat.
- [x] Halaman login petugas dibuat.
- [x] Dashboard petugas dibuat.
- [x] Alur pengguna pengunjung dan petugas dirancang.
- [x] Struktur HTML dasar disiapkan.
- [x] Hasil pekerjaan disimpan dalam Git.

### Berkas Utama

- `web/index.html`
- `web/take-queue.html`
- `web/admin-login.html`
- `web/admin-dashboard.html`
- `docs/ui-flow.md`

### Hasil

Empat halaman dasar aplikasi tersedia untuk dilanjutkan ke tahap styling.

## Week 04 — CSS & Responsive Design

### Status

- [x] Stylesheet utama dibuat.
- [x] Tampilan halaman pengunjung diperbaiki.
- [x] Tampilan formulir login diperbaiki.
- [x] Tampilan dashboard petugas diperbaiki.
- [x] Layout responsif diterapkan.
- [x] Tampilan diuji pada ukuran layar yang berbeda.
- [x] Perubahan disimpan dan digabungkan melalui Pull Request.

### Berkas Utama

- `web/src/styles/style.css`
- `web/src/pages/`
- `web/src/components/`
- `docs/ui-flow.md`

### Hasil

Halaman aplikasi memiliki styling dan layout responsif sebagai dasar penambahan interaksi.

## Week 05 — JavaScript Foundation

### Status

- [x] Logika antrean dibuat.
- [x] Pengambilan nomor antrean diterapkan.
- [x] Pemanggilan antrean diterapkan.
- [x] Penyelesaian antrean diterapkan.
- [x] Data antrean disimpan di `localStorage`.
- [x] Halaman pengunjung dan petugas dihubungkan dengan logika JavaScript.
- [x] Alur antrean dasar diuji.
- [x] Perubahan disimpan melalui Git dan Pull Request.

### Berkas Utama

- `web/js/queue.js`
- `web/js/format.js`
- `web/js/home.js`
- `web/js/take-queue.js`
- `web/js/admin-login.js`
- `web/js/admin-dashboard.js`

### Hasil

Prototipe antrean interaktif dapat digunakan dan data antrean dapat bertahan setelah halaman dimuat ulang melalui `localStorage`.

## Week 06 — React + Vite

### Status

- [x] React dan Vite dikonfigurasi.
- [x] Dependency dan `package-lock.json` dibuat.
- [x] Logika antrean dipisahkan ke `src/queue.js`.
- [x] Penyimpanan data dipisahkan ke `src/storage.js`.
- [x] Hook antrean disiapkan di `src/useQueue.js`.
- [x] Komponen dan halaman React dibuat.
- [x] Stylesheet dipindahkan ke `src/styles/style.css`.
- [x] Entry point React disiapkan.
- [x] Konfigurasi Docker Compose diperbarui untuk Vite.
- [x] Build produksi berhasil pada tahap Week 06.
- [x] Halaman dan alur antrean dasar diuji melalui Docker.
- [x] Struktur frontend dikembangkan lebih lanjut pada Week 07 menggunakan React Router.

### Berkas Utama

- `web/package.json`
- `web/package-lock.json`
- `web/vite.config.js`
- `web/src/`
- `web/index.html`
- `docker-compose.yml`

### Verifikasi

- [x] `npm.cmd run build` berhasil pada tahap Week 06.
- [x] Halaman dan alur antrean dasar diuji pada tahap Week 06.

### Hasil

Frontend QueueApp telah dimigrasikan ke React dan Vite. Pada tahap Week 06, aplikasi menggunakan beberapa entry HTML. Struktur tersebut kemudian dikembangkan pada Week 07 menjadi satu `index.html` dengan React Router.

## Week 07 — React Integration & Routing

### Status Implementasi

- [x] React Router ditambahkan sebagai dependency.
- [x] Aplikasi menggunakan satu dokumen HTML sebagai entry point.
- [x] Routing sisi klien disiapkan untuk halaman utama.
- [x] Routing halaman pengambilan nomor antrean disiapkan.
- [x] Routing halaman login petugas disiapkan.
- [x] Routing dashboard petugas disiapkan.
- [x] Halaman Not Found disiapkan untuk alamat yang tidak terdaftar.
- [x] Pengelolaan state antrean dipusatkan melalui `App.jsx` dan `useQueue.js`.
- [x] Lapisan data berbasis Promise disiapkan melalui `queueApi.js`.
- [x] Komponen loading dan error disiapkan melalui `DataState.jsx`.

### Berkas Utama

- `web/index.html`
- `web/vite.config.js`
- `web/src/main.jsx`
- `web/src/App.jsx`
- `web/src/useQueue.js`
- `web/src/api/queueApi.js`
- `web/src/components/`
- `web/src/pages/`
- `web/src/styles/style.css`
- `docker-compose.yml`

### Verifikasi Lanjutan

- [x] Path routing diperiksa melalui browser.
- [x] Navigasi ant halaman diperiksa.
- [x] Keadaan loading dan error diperiksa.
- [x] Pengambilan, pemanggilan, dan penyelesaian antrean diperiksa.
- [x] Data antrean diperiksa setelah halaman dimuat ulang.

### Hasil

QueueApp menggunakan React Router untuk mengelola perpindahan halaman melalui satu dokumen HTML. Pengelolaan state antrean dipusatkan di React, sedangkan lapisan data menggunakan Promise untuk mengelola operasi data. Data masih dikelola secara lokal dan belum menggunakan API server sungguhan maupun database terpusat.

## Week 08 — UTS / Web MVP

### Status Implementasi

- [x] Perbaikan aturan pemanggilan antrean diterapkan pada logika antrean.
- [x] Satu tindakan pemanggilan hanya memanggil satu antrean.
- [x] Antarmuka petugas disesuaikan agar pemanggilan berikutnya tidak tersedia ketika masih ada antrean berstatus `CALLED`.
- [x] Penanganan penyegaran data diperbaiki agar kegagalan mengambil daftar terbaru tidak otomatis membuat tindakan sebelumnya dilaporkan gagal.
- [x] Versi aplikasi frontend diperbarui menjadi `0.8.0`.
- [x] Dokumentasi alur antarmuka diperbarui.
- [x] Dokumentasi arsitektur diperbarui.
- [x] README diperbarui.
- [x] Milestone tracker diperbarui.

### Verifikasi Pengujian

- [x] Pengunjung dapat membuka halaman utama dan halaman antrean.
- [x] Nomor antrean dapat diambil dan statusnya dapat dilihat.
- [x] Formulir login memeriksa kelengkapan isian.
- [x] Formulir login menolak format email yang tidak valid.
- [x] Formulir login dengan isian yang valid dapat melanjutkan ke dashboard; autentikasi sungguhan belum diterapkan.
- [x] Petugas dapat memanggil antrean berikutnya.
- [x] Pemanggilan berikutnya dinonaktifkan ketika antrean masih berstatus `CALLED`.
- [x] Antrean dapat diselesaikan.
- [x] Navigasi kembali dan halaman Not Found diperiksa.
- [x] Data antrean tetap tersedia setelah halaman dimuat ulang.
- [x] Simulasi kegagalan pemuatan data menampilkan pesan galat dan tombol coba lagi.
- [x] Flag simulasi kegagalan dikembalikan ke `false` setelah pengujian.

### Fokus Pemeriksaan

- Aturan FR-06: pemanggilan antrean berikutnya tidak boleh dilakukan selama masih ada antrean yang berstatus dipanggil.
- Satu tindakan pemanggilan hanya boleh mengubah satu antrean.
- Kegagalan penyegaran daftar tidak boleh mengubah hasil tindakan sebelumnya yang sudah berhasil.
- Navigasi, keadaan loading, galat, dan data antrean diperiksa melalui skenario demo.
- Data antrean masih disimpan pada `localStorage` di browser.

### Verifikasi Akhir yang Belum Dilakukan

- [ ] Build produksi diperiksa kembali setelah seluruh perubahan dokumentasi.
- [ ] Status Git dan perubahan file diperiksa.
- [ ] Riwayat commit Week 08 diperiksa.
- [ ] Tag `week-08` diverifikasi setelah proses Git selesai.
- [ ] Checkpoint akhir dipastikan sesuai dengan hasil verifikasi repository.

### Hasil

Pengujian demo Week 08 telah diselesaikan. Implementasi Web MVP dan dokumentasi telah diperbarui. Pemeriksaan build produksi dan verifikasi akhir Git masih perlu dilakukan sebelum checkpoint Week 08 dinyatakan selesai sepenuhnya.

## Ringkasan Week 01–08

| Minggu | Materi | Status |
|---|---|---|
| Week 01 | Discovery & Environment | Selesai pada tahap awal |
| Week 02 | Requirements & Perancangan | Perlu verifikasi |
| Week 03 | UI/UX + HTML | Selesai pada tahap awal |
| Week 04 | CSS & Responsive Design | Selesai pada tahap awal |
| Week 05 | JavaScript Foundation | Selesai pada tahap awal |
| Week 06 | React + Vite | Implementasi selesai; build dan pengujian pernah dilakukan |
| Week 07 | React Integration & Routing | Implementasi dan pengujian demo selesai |
| Week 08 | UTS / Web MVP | Implementasi, dokumentasi, dan pengujian demo selesai; verifikasi akhir Git masih menunggu |

## Catatan

Checklist implementasi, pengujian, dan verifikasi Git dibedakan agar dokumentasi tidak menyatakan checkpoint selesai sebelum seluruh pemeriksaan akhir dilakukan.

Week 02 dan keberadaan tag `week-02` perlu diperiksa pada repository. Build produksi setelah perubahan Week 08 juga perlu dijalankan kembali.

Pada Week 08, QueueApp masih merupakan Web MVP berbasis frontend. Data antrean belum terhubung dengan API backend maupun database terpusat. Formulir login petugas belum menerapkan autentikasi sungguhan.

Status akhir Week 08 dan keberadaan tag checkpoint hanya dinyatakan selesai setelah benar-benar diverifikasi.