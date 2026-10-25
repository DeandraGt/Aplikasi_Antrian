# Week 08 — UTS / Web MVP Checkpoint

## 1. Keadaan yang Dibekukan

```text
          React + Vite + React Router
                     ↓
             api/queueApi.js
              (lapisan data)
                     ↓
              localStorage
                peramban
```

Aplikasi web QueueApp berjalan tanpa backend. Empat layar memiliki alamat masing-masing, data antrean melewati satu lapisan data, dan keadaan memuat, gagal, serta kosong memiliki tampilan tersendiri.

| Sudah tersedia | Belum tersedia dan direncanakan |
|---|---|
| React + Vite (Minggu 06) | Express (Minggu 09) |
| Routing sisi klien (Minggu 07) | MySQL (Minggu 10) |
| Lapisan pemanggilan data (Minggu 07) | REST API sungguhan (Minggu 11) |
| Validasi form di sisi halaman | React Native (Minggu 12) |
| Keadaan memuat, gagal, dan kosong | Autentikasi (Minggu 13) |

Data antrean masih disimpan di peramban melalui `localStorage`. Karena itu, checkpoint ini membuktikan kelengkapan alur frontend, bukan implementasi backend.

## 2. Hasil Review Requirement

### FR-06 — Satu aksi mengubah tepat satu antrean

Sebelum perbaikan, pemanggilan antrean berikutnya dapat menyelesaikan antrean yang sedang dipanggil secara otomatis. Perilaku tersebut tidak sesuai dengan FR-06.

Perbaikannya adalah menolak pemanggilan antrean baru selama masih ada antrean berstatus `CALLED`. Petugas harus menekan tombol Selesaikan terlebih dahulu.

### Aksi berhasil tidak boleh dilaporkan gagal karena refresh

Aksi antrean dan penyegaran daftar dipisahkan ke dalam blok `try/catch` yang berbeda. Dengan demikian, kegagalan mengambil ulang daftar tidak seharusnya membuat aksi yang sudah berhasil dilaporkan sebagai gagal.

### Konsistensi antarmuka

Tombol Panggil Antrean Berikutnya dinonaktifkan selama ada antrean yang sedang dipanggil atau ketika aksi masih berjalan. Antarmuka mengikuti aturan yang sama dengan logika antrean.

### Dokumentasi alur

Dokumentasi `docs/ui-flow.md`, `docs/architecture.md`, dan `README.md` telah diperbarui agar menjelaskan alur aplikasi serta struktur proyek terbaru. Referensi stylesheet menggunakan `web/src/styles/style.css` sesuai dengan struktur proyek React + Vite.

## 3. Catatan Dokumentasi

Dokumentasi alur dan arsitektur telah diperbarui agar sesuai dengan struktur proyek QueueApp saat ini. Berkas stylesheet berada di `web/src/styles/style.css`, sedangkan pengelolaan data antrean frontend menggunakan lapisan data di `web/src/api/queueApi.js` dan penyimpanan `localStorage`.

Checkpoint ini mendokumentasikan kondisi Web MVP pada Minggu 08. Integrasi backend dan database belum termasuk dalam checkpoint ini.

## 4. Batas Checkpoint

Checkpoint Week 08 mempertahankan aplikasi sebagai Web MVP tanpa backend.

Pekerjaan yang belum termasuk dalam checkpoint ini meliputi:

- Backend Express pada Minggu 09.
- Integrasi MySQL pada Minggu 10.
- REST API sungguhan pada Minggu 11.
- Aplikasi React Native pada Minggu 12.
- Autentikasi sungguhan pada Minggu 13.

## 5. Skenario Demo

Mulai dengan keadaan peramban yang bersih melalui konsol browser:

```js
localStorage.clear();
location.reload();
```

| No. | Langkah | Hasil yang diharapkan |
|---:|---|---|
| 1 | Buka `/` | Bagian Sedang Dipanggil menampilkan `—` dan status antrean terlihat. |
| 2 | Klik Ambil Nomor | Alamat berubah menjadi `/queue` tanpa memuat ulang halaman. |
| 3 | Tekan Ambil Nomor Antrean | Tombol menampilkan proses pengambilan, lalu nomor `A001` muncul. |
| 4 | Tekan sekali lagi | Nomor berikutnya `A002` muncul tanpa bentrok. |
| 5 | Klik Antrean Saat Ini | Dua antrean menunggu dan nomor milik pengunjung ditampilkan. |
| 6 | Buka `/admin/login`, lalu tekan Masuk dengan isian kosong | Pesan `Email wajib diisi.` muncul dan fokus berpindah ke kolom email. |
| 7 | Masukkan email tanpa karakter `@` | Pesan `Format email tidak valid.` muncul. |
| 8 | Isi form dengan benar, lalu tekan Masuk | Halaman berpindah ke `/admin/dashboard`. |
| 9 | Tekan Panggil Antrean Berikutnya | `A001` menjadi `CALLED` dan waktu pemanggilan tercatat. |
| 10 | Perhatikan tombol panggil | Tombol dinonaktifkan dan petugas diminta menyelesaikan `A001` terlebih dahulu. |
| 11 | Tekan Selesaikan A001 | `A001` menjadi `COMPLETED` dan tombol panggil aktif kembali. |
| 12 | Tekan Panggil Antrean Berikutnya | `A002` menjadi `CALLED`. |
| 13 | Tekan tombol mundur browser | Browser kembali ke layar sebelumnya dan alamat ikut berubah. |
| 14 | Buka `/apa-saja` | Halaman Tidak Ditemukan muncul beserta tautan pemulihan. |
| 15 | Muat ulang `/admin/dashboard` | Halaman dashboard tetap terbuka, bukan halaman 404. |
| 16 | Muat ulang halaman mana pun | Data antrean tetap tersimpan di peramban. |
| 17 | Ubah `SIMULASI_GAGAL` menjadi `true`, lalu buka layar yang menggunakan data | Pesan galat dan tombol Coba lagi muncul, sementara navigasi tetap dapat digunakan. Setelah pengujian, kembalikan nilainya menjadi `false`. |

**Catatan pengujian:** Langkah 1–16 telah dilaporkan aman berdasarkan hasil demo. Simulasi error pada langkah 17 juga telah dicoba, dan nilai `SIMULASI_GAGAL` telah dikembalikan menjadi `false`.

Pengujian tersebut mencakup pemuatan data yang gagal. Skenario khusus ketika aksi antrean berhasil tetapi penyegaran daftar setelahnya gagal belum dinyatakan teruji secara terpisah.

## 6. Batas yang Dibawa ke Minggu 09

Checkpoint ini memastikan bahwa alur pengunjung dan petugas dapat diperagakan tanpa backend. Data masih disimpan di peramban, sehingga integrasi backend dan database menjadi pekerjaan minggu berikutnya.

Ringkasan demo:

1. Pengunjung membuka halaman utama dan mengambil nomor `A001` serta `A002`.
2. Pengunjung memeriksa status antrean.
3. Petugas mengisi form login dan masuk ke dashboard. Form ini belum melakukan autentikasi sungguhan.
4. Petugas memanggil `A001`, menyelesaikannya, lalu memanggil `A002`.
5. Navigasi mundur, halaman tidak ditemukan, dan pemuatan ulang diperiksa.
6. Data antrean dipastikan tetap tersimpan di peramban.
7. Simulasi kegagalan pemuatan data diperiksa, lalu pengaturan simulasi dikembalikan ke `false`.