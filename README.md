# 🚀 Misi Roket: Petualangan Tata Surya
> *Game Edukasi Interaktif IPA Tata Surya untuk Siswa SD Kelas 5–6 (Fase C) & SMP Kelas 7 (Fase D)*

Selamat datang di **Misi Roket: Petualangan Tata Surya**! Game berbasis web ini dirancang secara khusus untuk membantu siswa memahami konsep-konsep sains astronomi melalui eksplorasi aktif, simulasi fisika antariksa, dan tantangan interaktif di setiap planet.

---

## 🌟 Fitur Utama & Keunggulan Edukatif

1. **10 Level Petualangan dengan Mekanik Unik Tiap Planet:**
   - **Level 1 (Merkurius):** *Thermal Speed Quiz* — tantangan navigasi cepat mengatasi selisih suhu ekstrem siang-malam (-180°C s.d. 430°C) akibat ketiadaan atmosfer.
   - **Level 2 (Venus):** *Greenhouse Thermostat Puzzle* — teka-teki visual perangkap panas gas Karbon Dioksida (CO₂ 96%) dan rotasi retrograd.
   - **Level 3 (Bumi):** *Atmosphere Drag & Drop + Orbit Lab* — menyusun 5 lapisan atmosfer (Troposfer s.d. Eksosfer) dan mengaitkan fenomena rotasi (siang/malam) serta revolusi (musim & tahun).
   - **Level 4 (Mars):** *Rocket Lander Physics Simulator* — mengatur daya dorong roket (*Thrust*) untuk mendarat mulus di gravitasi 38% Bumi, diselingi fakta mineral besi oksida dan satelit Phobos & Deimos.
   - **Level 5 (Jupiter):** *Planetary Scale Sorter* — menyusun urutan skala 8 planet dari terkecil hingga terbesar berdasarkan diameter aktual.
   - **Level 6 (Saturnus):** *Ring Particle Catcher* — mini-game refleks kanvas menangkap partikel es murni cincin dan mempelajari densitas Saturnus yang lebih ringan dari air.
   - **Level 7 (Uranus):** *Tilted Card Matcher* — mencocokkan kartu anomali kemiringan poros rotasi 98° ("menggelinding"), atmosfer metana, dan raksasa es.
   - **Level 8 (Neptunus):** *Supersonic Storm Run* — mengkalkulasikan jarak orbit 30 AU, periode revolusi 165 tahun, dan angin tercepat di tata surya (>2.000 km/jam).
   - **Level 9 (Bonus - Pluto & Sabuk Asteroid):** *Dwarf Planet Detective* — menganalisis 3 syarat resmi planet menurut Resolusi IAU 2006 dan posisi Sabuk Asteroid.
   - **Level 10 (Level Akhir - Ujian Komandan):** Evaluasi komprehensif menguji perbandingan planet dalam vs luar, hukum Kepler, dan eksplorasi antariksa.

2. **Gamifikasi Berorientasi Pembelajaran:**
   - **Bahan Bakar & Energi Roket:** Jawaban tepat memulihkan daya dorong; kesalahan mengurangi bahan bakar secara wajar.
   - **Sistem Bintang (1–3 Bintang):** Memotivasi ketepatan dan pemahaman konsep.
   - **Buku Catatan Astronaut (Codex):** Terbuka bertahap berisi ringkasan fakta menakjubkan dan data teleskopik tiap planet.
   - **Hangar Kustomisasi Roket:** Membuka variasi lambung roket (Elang Surya, Fantom Nebula, Titan Plasma) menggunakan bintang yang terkumpul.
   - **Umpan Balik Instan & Analisis:** Layar hasil menampilkan daftar *"Topik yang Perlu Diulang"* agar siswa tahu materi mana yang harus dipelajari kembali.
   - **Petunjuk Bertahap (*Scaffolded Hints*):** Bantuan penjelasan konsep sebelum menjawab, melatih penalaran tanpa rasa takut salah.

3. **Teknologi Mandiri & Zero External Dependencies:**
   - Dibuat dengan HTML5, CSS3 Glassmorphism responsif, dan JavaScript murni.
   - Seluruh grafis planet dan roket digambar secara prosedural dengan **SVG Dinamis & HTML5 Canvas**.
   - Efek suara dan musik latar ambient kosmik disintesis langsung menggunakan **Web Audio API** native (tidak memerlukan file audio eksternal).
   - Progres bermain tersimpan otomatis di `localStorage`.

---

## 💻 Cara Menjalankan Game

Game ini sangat fleksibel dan dapat dijalankan dengan dua cara mudah:

### Opsi 1: Langsung Buka File (Paling Praktis)
Cukup klik dua kali (double-click) file `index.html` menggunakan browser modern apa pun (Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari). Game langsung aktif tanpa perlu koneksi internet!

### Opsi 2: Menggunakan Server Lokal Node.js
Jika komputer memiliki Node.js, buka terminal di folder proyek dan jalankan:
```bash
npm run dev
# atau
node serve.js
```
Lalu buka browser di alamat: `http://localhost:3000`

---

## 📚 Panduan Guru: Cara Mengubah atau Menambah Soal Baru

Semua data planet, ringkasan materi kurikulum, dan bank soal disimpan secara rapi pada file:
📁 **`data/game-data.js`**

### Struktur Objek Soal:
Setiap soal memiliki format standar berikut:
```javascript
{
  id: "mer_q9",                  // ID unik soal
  difficulty: 2,                 // Tingkat kesulitan: 1 (Dasar), 2 (Sedang), 3 (Tantangan)
  question: "Pertanyaan sains yang ingin diajukan kepada siswa?",
  options: [
    "Pilihan jawaban yang BENAR (posisi indeks 0)",
    "Pilihan pengecoh A",
    "Pilihan pengecoh B",
    "Pilihan pengecoh C"
  ],
  correctAnswer: 0,              // Indeks jawaban benar (0 = opsi pertama)
  explanation: "Umpan balik penjelasan ilmiah mengapa jawaban ini benar.",
  hint: "Petunjuk konsep jika siswa menekan tombol 'Butuh Petunjuk?'."
}
```

> **Tips untuk Guru:**
> - Bank soal saat ini sudah terisi **minimal 8 soal tervalidasi per planet**.
> - Anda dapat menambahkan soal baru sebanyak yang diinginkan ke dalam array `questions: [...]` pada planet yang bersangkutan.
> - Kuis secara otomatis mengacak urutan soal dan pilihan jawaban agar siswa tidak sekadar menghafal posisi huruf.

---

## 🪐 Ringkasan Standar Validasi Sains (Kurikulum Merdeka & IAU)

| Benda Langit | Jarak Rata-rata dari Matahari | Karakteristik Kunci | Satelit Alami |
|---|---|---|---|
| **Matahari** | Pusat Tata Surya | Bintang induk kelas G, 99,86% massa tata surya | - |
| **Merkurius** | ~58 juta km (0,39 AU) | Planet terkecil, suhu siang 430°C & malam -180°C | 0 |
| **Venus** | ~108 juta km (0,72 AU) | Planet terpanas (~465°C), atmosfer 96% CO₂, rotasi retrograd | 0 |
| **Bumi** | ~149,6 juta km (1,0 AU) | Air cair 71%, atmosfer O₂/N₂, 5 lapisan pelindung | 1 (Bulan) |
| **Mars** | ~228 juta km (1,52 AU) | Planet merah (besi oksida), Olympus Mons, gravitasi 38% Bumi | 2 (Phobos, Deimos) |
| **Jupiter** | ~778 juta km (5,2 AU) | Planet terbesar, Bintik Merah Raksasa, rotasi tercepat (~10 jam) | 95 (Ganymede terbesar) |
| **Saturnus** | ~1,4 miliar km (9,5 AU) | Cincin es murni, kerapatan lebih kecil dari air (mengapung) | 146 (Titan atmosfer tebal) |
| **Uranus** | ~2,9 miliar km (19,2 AU) | Raksasa es, poros miring 98° ("menggelinding"), metana biru cyan | 28 (Miranda) |
| **Neptunus** | ~4,5 miliar km (30,1 AU) | Planet terjauh resmi, angin >2.000 km/jam, revolusi ~165 tahun | 16 (Triton retrograd) |
| **Pluto** | ~5,9 miliar km (39,5 AU) | Planet Kerdil (Dwarf Planet) di Sabuk Kuiper (Resolusi IAU 2006) | 5 (Charon) |
| **Sabuk Asteroid** | Antara Mars & Jupiter | Jutaan batuan sisa pembentukan tata surya, Ceres terbesar (~940 km) | - |

---

## 📱 Aksesibilitas & Kompatibilitas
- **Layar Sentuh (Smartphone / Tablet):** Tombol besar dengan area sentuh minimal 44x44px dan navigasi sentuh interaktif.
- **Keyboard (Desktop / Laptop):** Mendukung tombol `Enter`, `Spasi` (pendorong roket), panah `Kiri/Kanan`, serta pembaca layar (*screen reader friendly* dengan atribut ARIA).
