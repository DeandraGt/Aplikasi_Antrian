
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
      <DataState
        status={status}
        galat={galat}
        onCobaLagi={onMuatUlang}
      >
        <p>
          {dipanggil
            ? `Antrean saat ini sudah sampai ${dipanggil.queueNumber}, dengan ${waitingQueues(antrean).length} antrean menunggu.`
            : 'Belum ada antrean yang sedang dipanggil.'}
        </p>

        {/* Halaman tidak mengambil nomor sendiri; ia meneruskan permintaan
            itu ke atas lewat callback yang diterimanya dari App. */}
        <QueueForm
          onAmbil={onAmbil}
          sibuk={sibuk}
          pesan={pesan}
        />

        <QueueStatus antrean={nomorSaya} />
      </DataState>
    </Layout>
  );
}
