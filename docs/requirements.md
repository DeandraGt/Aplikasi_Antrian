## User Persona

### Customer
- **Tujuan:** dapat nomor antrian tanpa datang lebih awal, tahu kapan giliran, bisa batal kalau berhalangan
- **Kebutuhan:** registrasi/login cepat, pilihan layanan jelas, notifikasi saat dipanggil
- **Pain point:** antrian manual lama, takut terlewat dipanggil, sulit membatalkan

### Admin
- **Tujuan:** melihat semua antrian, memanggil customer sesuai urutan, menjaga daftar tetap bersih
- **Kebutuhan:** login khusus admin, dashboard jelas, aksi cepat (panggil, layani, hapus)
- **Pain point:** antrian batal masih tercatat, customer tidak merespons, sulit memantau banyak antrian

## User Story

### Customer
- Sebagai customer, saya ingin registrasi akun agar bisa memakai aplikasi.
- Sebagai customer, saya ingin login agar bisa mengakses layanan antrian.
- Sebagai customer, saya ingin memilih layanan agar masuk ke antrian yang tepat.
- Sebagai customer, saya ingin mengambil nomor antrian online agar tidak perlu datang lebih awal.
- Sebagai customer, saya ingin melihat status antrian agar tahu kapan giliran saya.
- Sebagai customer, saya ingin menerima notifikasi agar tidak terlewat saat dipanggil.
- Sebagai customer, saya ingin membatalkan antrian (opsional) agar slot bisa dipakai orang lain.

### Admin
- Sebagai admin, saya ingin login agar hanya petugas berwenang yang bisa mengelola antrian.
- Sebagai admin, saya ingin melihat daftar antrian agar tahu siapa yang menunggu.
- Sebagai admin, saya ingin mengelola status antrian agar data sesuai kondisi lapangan.
- Sebagai admin, saya ingin memanggil antrian agar pelayanan berjalan sesuai urutan.
- Sebagai admin, saya ingin menandai customer sudah dilayani agar riwayat tercatat.
- Sebagai admin, saya ingin menghapus antrian batal/selesai agar daftar tetap bersih.

## Functional Requirements

### Customer
- Registrasi akun dengan validasi; jika tidak valid tampil pesan error
- Login jika gagal tampil pesan error dan bisa login ulang
- Menampilkan beranda dan daftar layanan
- Customer memilih layanan lalu sistem memberi nomor antrian
- Menampilkan status antrian
- Mengirim notifikasi antrian
- Customer dapat membatalkan antrian

### Admin
- Login admin dengan username dan password
- Menampilkan dashboard dan daftar antrian
- Mengelola status antrian customer
- Memanggil antrian berstatus menunggu
- Menandai customer sudah dilayani
- Menghapus antrian batal/selesai

### Sistem
- Nomor antrian unik dan berurutan per layanan
- Perubahan status admin langsung terlihat di sisi customer
- Pembedaan hak akses customer dan admin


## Non-Functional Requirements

- Performance: halaman termuat maksimal 3 detik
- Real-time: status dan notifikasi sampai maksimal 5 detik
- Security: password di-hash, HTTPS, halaman admin hanya untuk admin
- Usability: antarmuka sederhana, pesan error jelas
- Reliability: data antrian tidak hilang saat aplikasi ditutup
- Data integrity: tidak ada nomor antrian ganda
- Compatibility: berjalan di berbagai ukuran layar

## Asumsi
- Status antrian: menunggu, dipanggil, dilayani, selesai, batal
- Akun admin dibuat manual (tidak ada registrasi admin)
- Pemantauan status memakai refresh/polling