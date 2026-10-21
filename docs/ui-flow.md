
| Layar | Berkas | Untuk | Requirement |
|---|---|---|---|
| Antrean Saat Ini | `index.html` | Pengunjung | FR-01 |
| Ambil Nomor | `take-queue.html` | Pengunjung | FR-02 |
| Masuk sebagai Petugas | `admin-login.html` | Petugas | FR-04 |
| Dashboard Petugas | `admin-dashboard.html` | Petugas | FR-05, FR-06, FR-07 |

Navigasi utama muncul di setiap halaman. Halaman yang sedang dibuka ditandai dengan `aria-current="page"`, sehingga pembaca layar dapat menyebutkan posisi pengguna saat ini.


### 2.1 Antrean Saat Ini — `index.html`

```text
┌──────────────────────────────────────────────┐
│ QueueApp                                     │
│                                              │
│ [Antrean Saat Ini] [Ambil Nomor] [Petugas]   │
├──────────────────────────────────────────────┤
│ # Antrean Saat Ini                           │
│                                              │
│ ## Sedang Dipanggil                          │
│                                              │
│ ┌────────┐                                   │
│ │  A003  │  dipanggil 09.15                  │
│ └────────┘                                   │
│                                              │
│ ## Menunggu                                  │
│                                              │
│ 2 antrean: A004  A005                        │
│                                              │
│ ## Nomor Antrean Anda                        │
│                                              │
│ belum mengambil nomor                        │
│ → Ambil nomor antrean                        │
│                                              │
│ ## Keterangan Status                         │
│                                              │
│ WAITING   menunggu dipanggil                 │
│ CALLED    sedang dipanggil                   │
│ COMPLETED selesai dilayani                   │
│                                              │
├──────────────────────────────────────────────┤
│ footer                                       │
└──────────────────────────────────────────────┘
```

Yang paling dicari pengunjung adalah nomor yang sedang dipanggil. Karena itu, bagian tersebut diletakkan paling atas.
