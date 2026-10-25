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
      myQueueId: Number.isInteger(data.myQueueId) ? data.myQueueId : null,
    };
  } catch {
    /* JSON rusak atau penyimpanan tidak dapat dibaca. */
    return emptyState();
  }
}
export function simpan(state) {
  try {
    localStorage.setItem(KUNCI, JSON.stringify(state));
  } catch {
    /* Dapat gagal pada mode penyamaran atau ketika penyimpanan penuh.
       Aplikasi tetap berjalan, hanya tidak bertahan setelah dimuat ulang. */
  }
}
