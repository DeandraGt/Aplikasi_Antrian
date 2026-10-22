function tampilkanYangMenunggu() {
  const daftar = waitingQueues();
  const wadah = el("daftar-menunggu");
  /* Dikosongkan dulu, lalu diisi ulang. Untuk daftar sependek ini itu cara
paling sederhana dan paling mudah dibaca. */
  wadah.replaceChildren();
  if (daftar.length === 0) {
    el("jumlah-menunggu").textContent = "Belum ada antrean yang menunggu.";
    return;
  }
  el("jumlah-menunggu").textContent =
    `${daftar.length} antrean masih menunggu.`;
  for (const antrean of daftar) {
    const item = document.createElement("li");
    /* textContent, bukan innerHTML. Isi apa pun diperlakukan sebagai teks,
tidak pernah sebagai HTML — kebiasaan yang mencegah XSS begitu data
datang dari luar pada Minggu 11. */
    item.textContent = antrean.queueNumber;
    wadah.append(item);
  }
}
