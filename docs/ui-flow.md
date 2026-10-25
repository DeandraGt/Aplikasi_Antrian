# QueueApp — UI Flow

## 1. Peta Layar

QueueApp adalah aplikasi antrean dengan dua jenis pengguna utama: pengunjung dan petugas. Pada Week 08, antarmuka menggunakan React dan React Router untuk menampilkan halaman dalam satu aplikasi web.

| Layar | Route | Pengguna | Fungsi |
|---|---|---|---|
| Antrean Saat Ini | `/` | Pengunjung | Melihat informasi antrean dan masuk ke halaman pengambilan nomor |
| Ambil Nomor | `/queue` | Pengunjung | Membuat nomor antrean dan melihat daftar/status antrean |
| Masuk sebagai Petugas | `/admin/login` | Petugas | Memvalidasi kelengkapan dan format isian login |
| Dashboard Petugas | `/admin/dashboard` | Petugas | Memanggil dan menyelesaikan antrean |
| Not Found | Route tidak dikenal | Semua pengguna | Menampilkan halaman pemulihan untuk alamat yang tidak terdaftar |

## 2. Alur Pengunjung

1. Pengunjung membuka halaman Antrean Saat Ini pada route `/`.
2. Pengunjung membuka halaman Ambil Nomor pada route `/queue`.
3. Pengunjung mengambil nomor antrean.
4. Aplikasi membuat nomor antrean baru, misalnya A001, kemudian A002.
5. Pengunjung dapat melihat data antrean yang tersedia.
6. Data antrean disimpan pada `localStorage` browser sehingga tetap tersedia setelah halaman dimuat ulang pada browser yang sama.

## 3. Alur Petugas

1. Petugas membuka `/admin/login`.
2. Petugas mengisi email dan password.
3. Form memeriksa kelengkapan isian dan format email.
4. Jika validasi form berhasil, petugas diarahkan ke `/admin/dashboard`.
5. Petugas menekan tombol **Panggil Antrean Berikutnya**.
6. Antrean menunggu terdepan berubah menjadi `CALLED`.
7. Selama masih ada antrean berstatus `CALLED`, tombol panggil berikutnya dinonaktifkan dan petugas harus menyelesaikan antrean tersebut terlebih dahulu.
8. Petugas menekan tombol **Selesaikan** pada antrean yang sedang dipanggil.
9. Antrean berubah menjadi `COMPLETED`, kemudian tombol panggil berikutnya dapat digunakan kembali.
10. Petugas dapat memanggil antrean menunggu berikutnya.

**Aturan utama FR-06:** satu aksi pemanggilan hanya mengubah satu antrean. Pemanggilan berikutnya tidak boleh menyelesaikan antrean yang sedang dipanggil secara otomatis.

## 4. Penanganan Keadaan dan Kesalahan

- **Memuat:** aplikasi menampilkan keadaan memuat ketika data sedang diambil.
- **Galat:** aplikasi menampilkan pesan kesalahan ketika operasi data gagal.
- **Coba lagi:** pengguna dapat mencoba kembali pemuatan data setelah terjadi kegagalan.
- **Validasi form:** form login menampilkan pesan ketika isian kosong atau format email tidak valid.
- **Antrean tidak tersedia:** aplikasi menolak pemanggilan apabila tidak ada antrean menunggu.
- **Antrean masih dipanggil:** aplikasi menolak pemanggilan berikutnya sebelum antrean saat ini diselesaikan.
- **Route tidak dikenal:** aplikasi menampilkan halaman Not Found dan menyediakan navigasi pemulihan.

Simulasi kegagalan dapat diaktifkan melalui konstanta `SIMULASI_GAGAL` pada `web/src/api/queueApi.js`. Setelah pengujian, nilainya harus dikembalikan menjadi `false`.

## 5. Struktur Antarmuka

Aplikasi menggunakan satu dokumen HTML dan React untuk merender halaman sesuai route.

- `web/src/main.jsx` menjadi titik masuk aplikasi.
- `web/src/App.jsx` mengatur route dan komponen halaman.
- `web/src/pages/` berisi komponen halaman.
- `web/src/components/` berisi komponen antarmuka yang digunakan kembali.
- `web/src/useQueue.js` mengelola state antrean dan status operasi data.
- `web/src/api/queueApi.js` menjadi lapisan akses data.
- `web/src/queue.js` menerapkan aturan bisnis antrean.
- `web/src/storage.js` menangani penyimpanan antrean di `localStorage`.

## 6. Aksesibilitas dan Navigasi

Antarmuka menggunakan elemen dan kontrol yang sesuai dengan fungsi masing-masing. Navigasi antarrute ditangani oleh React Router. Halaman yang tidak ditemukan menyediakan cara untuk kembali ke halaman aplikasi.

Validasi form memberikan pesan kepada pengguna saat isian tidak memenuhi ketentuan. Status antrean juga ditampilkan sebagai teks, bukan hanya melalui warna.

## 7. Batasan Week 08

- Data antrean masih disimpan secara lokal di browser melalui `localStorage`.
- Lapisan `queueApi.js` masih berupa mock dan belum mengirim permintaan ke API server sungguhan.
- MySQL dan layanan server pada lingkungan Docker belum digunakan sebagai backend antrean aktif.
- Login admin baru melakukan validasi form dan belum memverifikasi kredensial atau menerapkan autentikasi sungguhan.
- Penyimpanan lokal tidak menyinkronkan data antarbrowser atau perangkat.

## 8. Hasil Pengujian Week 08

Demo utama telah dijalankan dan dilaporkan berhasil, meliputi pengambilan nomor antrean, validasi form login, pemanggilan dan penyelesaian antrean secara bergantian, navigasi Back, halaman Not Found, reload halaman, persistensi data lokal, serta simulasi kegagalan dan pemulihan konfigurasi.

Rincian skenario demo dicatat pada `docs/uts-checkpoint.md`.