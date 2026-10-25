import { useState, useEffect, useCallback } from 'react';
 
import { findQueue } from './queue.js';
 
import {
  muatNomorSaya,
  simpanNomorSaya,
} from './storage.js';
 
import {
  ambilDaftarAntrean,
  buatAntrean,
  panggilAntreanBerikutnya,
  selesaikanAntrean,
} from './api/queueApi.js';
 
export function useQueue() {
  const [muatan, setMuatan] = useState({ status: 'memuat', antrean: [], galat: null });
 
  /* Galat dari aksi terakhir, dan penanda bahwa sebuah aksi masih berjalan.
     Yang kedua dipakai untuk mematikan tombol supaya satu klik tidak terkirim
     dua kali. */
  const [pesan, setPesan] = useState('');
  const [sibuk, setSibuk] = useState(false);
 
  /* Nomor milik pengunjung ini disimpan sebagai id saja. Isinya yang lengkap
     — status, jam dipanggil — selalu diambil dari daftar terbaru, sehingga
     tidak mungkin basi. */
  const [idSaya, setIdSaya] = useState(muatNomorSaya);
 
  /* useCallback membuat fungsi ini tetap sama di antara render, sehingga
     useEffect di bawahnya tidak menganggapnya berubah setiap kali. */
  const muatUlang = useCallback(async () => {
    setMuatan((sebelum) => ({ ...sebelum, status: 'memuat' }));
    try {
      const antrean = await ambilDaftarAntrean();
      setMuatan({ status: 'siap', antrean, galat: null });
    } catch (galat) {
      setMuatan({ status: 'galat', antrean: [], galat });
    }
  }, []);
 
  useEffect(() => {
    muatUlang();
  }, [muatUlang]);
 
  /* Setiap aksi mengikuti alur yang sama: kirim, lalu ambil ulang daftarnya.
     Mengambil ulang — dan bukan menambal daftar di layar sendiri — adalah
     kebiasaan yang benar begitu datanya dimiliki server: yang ditampilkan
     selalu apa yang benar-benar tersimpan, bukan tebakan.
     Perhatikan daftarnya diperbarui TANPA melewati status "memuat" lagi.
     Mengosongkan layar sesaat setiap kali tombol ditekan membuat halaman
     berkedip padahal datanya sudah ada.
     Sejak review Minggu 08, aksi dan penyegaran punya try sendiri-sendiri. */
  async function jalankan(aksi) {
    setSibuk(true);
    setPesan('');
 
    let hasil = null;
 
    try {
      hasil = await aksi();
    } catch (galat) {
      setPesan(galat.message);
    }
 
    /* Daftar diambil ulang apa pun hasil aksinya — yang berhasil mengubah
       isinya, dan yang ditolak perlu memastikan layar tidak menampilkan
       tebakan. */
    try {
      setMuatan({ status: 'siap', antrean: await ambilDaftarAntrean(), galat: null });
    } catch {
      /* Gagal menyegarkan tidak membatalkan aksi yang sudah terjadi.
         Yang di layar hanya tertinggal sesaat, dan tombol "Coba lagi" pada
         keadaan galat tetap tersedia. */
    }
 
    setSibuk(false);
    return hasil;
  }
 
  async function ambilNomor() {
    const dibuat = await jalankan(() => buatAntrean());
    if (!dibuat) return;
    setIdSaya(dibuat.id);
    simpanNomorSaya(dibuat.id);
  }
 
  return {
    status: muatan.status,
    antrean: muatan.antrean,
    galat: muatan.galat,
    nomorSaya: idSaya === null ? null : findQueue(muatan.antrean, idSaya),
    pesan,
    sibuk,
    muatUlang,
    ambilNomor,
    panggilBerikutnya: () => jalankan(() => panggilAntreanBerikutnya()),
    selesaikan: (id) => jalankan(() => selesaikanAntrean(id)),
  };
}