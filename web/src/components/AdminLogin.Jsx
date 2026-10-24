import { useRef, useState } from 'react';

export default function AdminLogin({ onMasuk }) {
  /* Input terkendali: nilainya hidup di state React, bukan di dalam DOM.
     Dengan begitu React selalu tahu isi form tanpa perlu membacanya kembali
     dari elemen. */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [galat, setGalat] = useState(null);

  /* Ref dipakai untuk dua hal yang memang milik DOM dan bukan milik React:
     memindahkan fokus, dan membaca hasil pemeriksaan bawaan peramban. */
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  function tanganiSubmit(event) {
    event.preventDefault();

    /* Aturan ditulis sebagai daftar, bukan rangkaian if bersarang.
       Menambah aturan berarti menambah satu entri. */
    const aturan = [
      {
        ref: refEmail,
        salah: () => email.trim() === '',
        pesan: 'Email wajib diisi.',
      },
      {
        ref: refEmail,
        /* Bentuk email tidak diperiksa dengan pola buatan sendiri.
           Peramban sudah memeriksanya lewat type="email"; hasilnya dibaca
           dari validity.typeMismatch. Satu sumber kebenaran, bukan dua. */
        salah: () => refEmail.current.validity.typeMismatch,
        pesan: 'Format email tidak valid. Contoh: petugas@queueapp.test',
      },
      {
        ref: refPassword,
        salah: () => password === '',
        pesan: 'Password wajib diisi.',
      },
    ];

    const ditemukan = aturan.find((a) => a.salah());

    if (ditemukan) {
      setGalat({ pesan: ditemukan.pesan, ref: ditemukan.ref });
      ditemukan.ref.current.focus();
      return;
    }

    setGalat(null);
    onMasuk();
  }

  /* Tanda galat dihapus begitu pengguna mulai memperbaiki isiannya.
     Membiarkan pesan lama menempel padahal isinya sudah diubah hanya
     membingungkan. */
  const bersihkan = () => setGalat(null);

  const ditandai = (ref) =>
    galat?.ref === ref ? 'true' : undefined;

  return (
    <>
      <p>Halaman ini hanya untuk petugas. Pengunjung tidak perlu masuk.</p>

      <form onSubmit={tanganiSubmit} noValidate>
        <fieldset>
          <legend>Kredensial petugas</legend>

          {/* Selama kosong, CSS Minggu 04 menyembunyikan wadah ini lewat
              :empty sehingga tidak menyisakan ruang. */}
          <p className="pesan-galat" role="alert">
            {galat?.pesan ?? ''}
          </p>

          <p>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="username"
              required
              ref={refEmail}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                bersihkan();
              }}
              aria-invalid={ditandai(refEmail)}
              aria-describedby="bantuan-email"
            />
            <span className="bantuan" id="bantuan-email">
              Contoh: petugas@queueapp.test
            </span>
          </p>

          <p>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              required
              ref={refPassword}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                bersihkan();
              }}
              aria-invalid={ditandai(refPassword)}
            />
          </p>

          <button type="submit">Masuk</button>
        </fieldset>
      </form>
    </>
  );
}
