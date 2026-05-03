# Daily To Do List
## 19-04-2026

- [x] Membuat white motion trail untuk **cursor**
- [x] Tambahkan animasi `blink2` di `.bar-shadow` 

---

## 20-04-2026

- [ ] ~~Setiap `.persen` tertentu, munculkan **Special Scene**. Jika salah keputusan, set `.persen = 0%`~~
- [ ] ~~Setiap `.persen` tertentu, `.bar` akan berubah warna~~
- [x] Membuat white motion trail untuk **windah**
- [x] Buat `.bar` mengeluarkan glow ketika `.windah` diklik
- [x] Responsif `game.index` tahap awal (Masih Kacau kali)

---

## 21-04-2026

- [x] Selesaikan semua masalah responsif (@media untuk ukuran ukuran di inspect)
- [x] (Tambaham) Buat pause menu
- [x] (Tambahan) Buat tombol pause

---

## 22-04-2026

- [x] Buat sistem pause game
- [x] Buat `.pause-menu` menjadi responsif

---

## 23-04-2026

- [x] Buat story.html responsif

---

## 24-04-2026

- [x] Buat `.bar` responsif
- [x] Atur posisi tombol pause
- [x] Buat responsif maksimal di hp dengan dvh
- [x] Ganti px menjadi % di story.html

---

## 25-04-2026

- [x] Atur sistem tombol pause
- [x] Desain 1 versi .bar untuk `max-width: 320px` yang dipakai sampai `max-width: 425px`

---

## 26-04-2026 && 27-04-2026

- [ ] ~~Ganti satuan `Story.html` dengan `dvh` untuk vertikal dan `%` untuk sumbu horisontal dan ganti `translate` jadi inset custom~~
- [x] Ganti `Story.html` pakai `position: fixed;, nanti tes pakai satuan svh` COI

---

## 28-04-2026
- [x] Ganti pengatur sumbu x ganti pakai svw
- [x] Ubah semua base ukuran asset jadi 272px

---

## 29-04-2026
- [x] Atur posisi `sihir`
- [x] Atur ukuran `portal` di `game.html`
- [x] image-rendering: -webkit-optimize-contrast;
- [x] Buat sistem replay untuk mobile `game.html`

---

## 30-04-2026
- [x] Buat logic script button `Story Mode` dan `Timer Mode`
- [x] Pisahkan logic `.trail` ke file baru
- [x] **EXTRA:** Update UI `game.html`**

---

## 01-05-2026
- [x] Mikirin gameplay
- [x] **EXTRA:** Optimalisasi `LCP` dan `fetchpriority`
- [x] **EXTRA:** Hilangkan `Tap Highlight` dan Image `callout`
- [x] **EXTRA:** Update UI `game.html`
- [x] **EXTRA:** Optimalisasi `CLS`

---

## 02-05-2026
- [x] Buat sistem `Dimension`
- [x] Variasi warna `live`
- [ ] Rancang perencanaan scene saat `persen` tertentu 
- [x] Benerin `preload`

---

## 03-05-2026
- [ ] Rancang perencanaan scene saat `persen` tertentu

---


# Backlog

### [LOGIC] Gameplay Logic
* Integrasi **Secret Code** via "Inspect Element" saat `.persen = 100%`.


### [FE] UI/UX Improvements
* Ganti warna background saat *Timer Mode* dengan transisi halus.
* Animasi `translate` saat muncul harus dibuat *smooth*.
* Buat tampilan website lebih pixel (Inspirasi: https://catournament.org/)
* Record gameplay lalu ubah ke format `gif` untuk dibuat di index.
* Buat section bagian profile setiap karakter (Khusus "Narator" dibuat misteri).
* Optimalisasi SEO agar website bisa ditemukan lalu upload ke google search console


### [BE] Backend
* Simpan data hasil klik *Timer Mode* ke database **SQL**.
* Buat sistem login pakai akun google