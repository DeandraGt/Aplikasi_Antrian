import { Link } from 'react-router-dom';
import { currentCalled, waitingQueues } from '../queue.js';
import Layout from '../components/Layout.jsx';
import DataState from '../components/DataState.jsx';
import QueueForm from '../components/QueueForm.jsx';
import QueueStatus from '../components/QueueStatus.jsx';

export default function TakeQueuePage({
  status,
  galat,
  antrean,
  nomorSaya,
  pesan,
  sibuk,
  onAmbil,
  onMuatUlang,
}) {
  const dipanggil = currentCalled(antrean);

  return (
    <Layout
      judul="Ambil Nomor Antrean"
      catatan="Minggu 07: routing dan lapisan data. Nomor dibuat di peramban ini dan belum dikirim ke mana pun."
    >
      <DataState status={status} galat={galat} onCobaLagi={onMuatUlang}>
        <p>
          {dipanggil
            ? `Antrean saat ini sudah sampai ${dipanggil.queueNumber}, dengan ${waitingQueues(antrean).length} antrean menunggu.`
            : 'Belum ada antrean yang sedang dipanggil.'}
        </p>

        {/* Halaman tidak mengambil nomor sendiri; ia meneruskan permintaan
            itu ke atas lewat callback yang diterimanya dari App. */}
        <QueueForm onAmbil={onAmbil} sibuk={sibuk} pesan={pesan} />

        <QueueStatus antrean={nomorSaya} />
      </DataState>

      {/* Langkah berikutnya tidak bergantung pada data antrean, jadi ia
          ditaruh di luar DataState dan tetap terbaca walaupun antreannya
          gagal dimuat. Tautannya memakai Link, bukan <a href>, supaya
          berpindah halaman tanpa memuat ulang dokumen. */}
      <section aria-labelledby="judul-langkah">
        <h2 id="judul-langkah">Selanjutnya</h2>
        <ol>
          <li>Simpan atau catat nomor antrean Anda.</li>
          <li>Perhatikan halaman <Link to="/">Antrean Saat Ini</Link>.</li>
          <li>Menuju loket ketika nomor Anda dipanggil.</li>
        </ol>
      </section>
    </Layout>
  );
}

