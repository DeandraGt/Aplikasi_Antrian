import { currentCalled, waitingQueues } from '../queue.js';
import Layout from '../components/Layout.jsx';
import DataState from '../components/DataState.jsx';
import QueueDisplay from '../components/QueueDisplay.jsx';
import QueueStatus from '../components/QueueStatus.jsx';
import StatusLegend from '../components/StatusLegend.jsx';
 
export default function HomePage({ status, galat, antrean, nomorSaya, onMuatUlang }) {
  return (
    <Layout
      judul="Antrean Saat Ini"
      catatan="Minggu 08: checkpoint Web MVP. Seluruh alur antrean berjalan, tetapi datanya masih hidup di peramban ini — belum ada API maupun database."
    >
      <DataState status={status} galat={galat} onCobaLagi={onMuatUlang}>
        <QueueDisplay dipanggil={currentCalled(antrean)} menunggu={waitingQueues(antrean)} />
        <QueueStatus antrean={nomorSaya} tautanAmbil />
      </DataState>
      {/* Keterangan status tidak bergantung pada data, jadi ia tetap terbaca
          walaupun antreannya gagal dimuat. */}
      <StatusLegend />
    </Layout>
  );
}