## User Persona

### Customer
- **Tujuan:** dapat nomor antrian tanpa datang lebih awal, tahu kapan giliran, bisa batal kalau berhalangan
- **Kebutuhan:** registrasi/login cepat, pilihan layanan jelas, notifikasi saat dipanggil
- **Pain point:** antrian manual lama, takut terlewat dipanggil, sulit membatalkan

### Admin
- **Tujuan:** melihat semua antrian, memanggil customer sesuai urutan, menjaga daftar tetap bersih
- **Kebutuhan:** login khusus admin, dashboard jelas, aksi cepat (panggil, layani, hapus)
- **Pain point:** antrian batal masih tercatat, customer tidak merespons, sulit memantau banyak antrian

---

## User Story

### Customer
- **UC-01** Sebagai customer, saya ingin registrasi akun agar bisa memakai aplikasi.
- **UC-02** Sebagai customer, saya ingin login agar bisa mengakses layanan antrian.
- **UC-03** Sebagai customer, saya ingin memilih layanan agar masuk ke antrian yang tepat.
- **UC-04** Sebagai customer, saya ingin mengambil nomor antrian online agar tidak perlu datang lebih awal.
- **UC-05** Sebagai customer, saya ingin melihat status antrian agar tahu kapan giliran saya.
- **UC-06** Sebagai customer, saya ingin menerima notifikasi agar tidak terlewat saat dipanggil.
- **UC-07** Sebagai customer, saya ingin membatalkan antrian (opsional) agar slot bisa dipakai orang lain.

### Admin
- **UA-01** Sebagai admin, saya ingin login agar hanya petugas berwenang yang bisa mengelola antrian.
- **UA-02** Sebagai admin, saya ingin melihat daftar antrian agar tahu siapa yang menunggu.
- **UA-03** Sebagai admin, saya ingin mengelola status antrian agar data sesuai kondisi lapangan.
- **UA-04** Sebagai admin, saya ingin memanggil antrian agar pelayanan berjalan sesuai urutan.
- **UA-05** Sebagai admin, saya ingin menandai customer sudah dilayani agar riwayat tercatat.
- **UA-06** Sebagai admin, saya ingin menghapus antrian batal/selesai agar daftar tetap bersih.

---

## Functional Requirements

### Customer
- FR-C01: Registrasi akun dengan validasi; jika tidak valid tampil pesan error
- FR-C02: Login; jika gagal tampil pesan error dan bisa login ulang
- FR-C03: Menampilkan beranda dan daftar layanan
- FR-C04: Customer memilih layanan lalu sistem memberi nomor antrian
- FR-C05: Menampilkan status antrian
- FR-C06: Mengirim notifikasi antrian
- FR-C07: Customer dapat membatalkan antrian

### Admin
- FR-A01: Login admin dengan username dan password
- FR-A02: Menampilkan dashboard dan daftar antrian
- FR-A03: Mengelola status antrian customer
- FR-A04: Memanggil antrian berstatus menunggu
- FR-A05: Menandai customer sudah dilayani
- FR-A06: Menghapus antrian batal/selesai

### Sistem
- FR-S01: Nomor antrian unik dan berurutan per layanan
- FR-S02: Perubahan status admin langsung terlihat di sisi customer
- FR-S03: Pembedaan hak akses customer dan admin

---

## Non-Functional Requirements

- NFR-01 **Performance:** halaman termuat maksimal 3 detik
- NFR-02 **Real-time:** status dan notifikasi sampai maksimal 5 detik
- NFR-03 **Security:** password di-hash, HTTPS, halaman admin hanya untuk admin
- NFR-04 **Usability:** antarmuka sederhana, pesan error jelas
- NFR-05 **Reliability:** data antrian tidak hilang saat aplikasi ditutup
- NFR-06 **Data integrity:** tidak ada nomor antrian ganda
- NFR-07 **Compatibility:** berjalan di berbagai ukuran layar

---

## Asumsi
- Status antrian: menunggu, dipanggil, dilayani, selesai, batal
- Akun admin dibuat manual (tidak ada registrasi admin)
- Pemantauan status memakai refresh/polling