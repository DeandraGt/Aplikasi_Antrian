export default function HomePage({ status, galat, antrean, nomorSaya, onMuatUlang }) {
return (
<Layout
judul="Antrean Saat Ini"
catatan="Minggu 07: routing dan lapisan data. Data antrean masih hidup di peramban ini — belum 
ada API maupun database."
>
<DataState status={status} galat={galat} onCobaLagi={onMuatUlang}>
<QueueDisplay dipanggil={currentCalled(antrean)} menunggu={waitingQueues(antrean)} />
<QueueStatus antrean={nomorSaya} tautanAmbil />
</DataState>
);
{/* Keterangan status tidak bergantung pada data, jadi ia tetap terbaca
walaupun antreannya gagal dimuat. */}
<StatusLegend />
</Layout>
);
}
