import { STATUS, emptyState } from "./queue.js";

/* Kunci diberi akhiran versi. Bentuk datanya berubah pada Minggu 07 —
   myQueueId keluar dari daftar antrean — jadi versinya naik, dan data lama
   berbentuk v1 diabaikan dengan sendirinya tanpa kode migrasi. */
export const KUNCI_ANTREAN = "queueapp.antrean.v2";
export const KUNCI_NOMOR_SAYA = "queueapp.nomor-saya.v2";
/* ---- 1. Daftar antrean (kelak: MySQL) ------------------------------------
   Data yang dimuat kembali TIDAK dipercaya begitu saja. Isinya dapat
   tertinggal dari versi lama, rusak separuh, atau diubah siapa pun lewat
   peralatan pengembang. Kebiasaan yang sama berlaku nanti untuk data yang
   datang dari API pada Minggu 11. */
function bentuknyaBenar(data) {
  return (
    data !== null &&
    typeof data === "object" &&
    Number.isInteger(data.lastNumber) &&
    Array.isArray(data.queues) &&
    data.queues.every(
      (queue) =>
        Number.isInteger(queue.id) &&
        typeof queue.queueNumber === "string" &&
        Object.hasOwn(STATUS, queue.status),
    )
  );
}
export function muatAntrean() {
  try {
    const teks = localStorage.getItem(KUNCI_ANTREAN);
    if (!teks) return emptyState();
    const data = JSON.parse(teks);
    if (!bentuknyaBenar(data)) return emptyState();
    return {
      lastNumber: data.lastNumber,
      queues: data.queues,
    };
  } catch {
    /* JSON rusak atau penyimpanan tidak dapat dibaca. */
    return emptyState();
  }
}
export function simpanAntrean(state) {
  try {
    localStorage.setItem(KUNCI_ANTREAN, JSON.stringify(state));
  } catch {
    /* Dapat gagal pada mode penyamaran atau ketika penyimpanan penuh.
       Aplikasi tetap berjalan, hanya tidak bertahan setelah dimuat ulang. */
  }
}
/* ---- 2. Nomor saya -------------------------------------------------------
   Id antrean milik pengunjung ini disimpan terpisah dari daftar antrean:
   daftar antrean berumur berbeda dengan nomor milik perangkat ini. */
export function muatNomorSaya() {
  try {
    const teks = localStorage.getItem(KUNCI_NOMOR_SAYA);
    if (!teks) return null;
    const id = JSON.parse(teks);
    return Number.isInteger(id) ? id : null;
  } catch {
    /* JSON rusak atau penyimpanan tidak dapat dibaca. */
    return null;
  }
}
export function simpanNomorSaya(id) {
  try {
    localStorage.setItem(KUNCI_NOMOR_SAYA, JSON.stringify(id));
  } catch {
    /* Boleh gagal tanpa menghentikan aplikasi, sama seperti simpanAntrean. */
  }
}