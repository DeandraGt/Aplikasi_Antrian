export default function QueueForm({ onAmbil, sibuk, pesan }) {
  function tanganiSubmit(event) {
    /* Sama seperti Minggu 05: tanpa ini peramban mengirim form dan memuat
       ulang halaman. Yang berubah hanya tempatnya — dulu dipasang dengan
       addEventListener, sekarang dioper sebagai prop onSubmit. */
    event.preventDefault();
    onAmbil();
  }
  return (
    <section aria-labelledby="judul-ambil">
      <h2 id="judul-ambil">Ambil Nomor</h2>
      <form id="form-ambil" onSubmit={tanganiSubmit}>
        <fieldset>
          <legend>Konfirmasi pengambilan antrean</legend>
          <p>
            Nomor antrean akan dibuatkan untuk Anda. Anda tidak perlu mengisi
            data apa pun.
          </p>
          {/* Dimatikan selama permintaan berjalan, supaya satu klik tidak
              membuat dua nomor. */}
          <button type="submit" disabled={sibuk}>Ambil Nomor Antrean</button>
        </fieldset>
      </form>
      {/* Galat dari aksi terakhir; kosong berarti tidak tampil. */}
      <p className="pesan-galat" role="alert">{pesan}</p>
    </section>
  );
}
