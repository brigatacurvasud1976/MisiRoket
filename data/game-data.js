/**
 * DATA TATA SURYA: MISI ROKET - PETUALANGAN TATA SURYA
 * Rujukan Sains: Kurikulum Merdeka IPA SMP/SD & NASA Solar System Exploration
 * Dirancang dengan validasi akurat, minimal 8 soal per level, dan fakta sains terverifikasi.
 */

window.SOLAR_GAME_DATA = {
  meta: {
    title: "Misi Roket: Petualangan Tata Surya",
    gradeLevel: "SD Kelas 5-6 & SMP Kelas 7",
    version: "1.0.0"
  },

  // DATA KUSTOMISASI ROKET
  rocketSkins: [
    { id: "classic_explorer", name: "Penjelajah Klasik", starsRequired: 0, color: "#ffffff", accent: "#ef4444", desc: "Roket standar misi antariksa pertama." },
    { id: "solar_falcon", name: "Elang Surya", starsRequired: 6, color: "#f59e0b", accent: "#3b82f6", desc: "Tahan radiasi dengan pelat emas termal." },
    { id: "nebula_phantom", name: "Fantom Nebula", starsRequired: 14, color: "#8b5cf6", accent: "#ec4899", desc: "Dilapisi partikel nanokristal kosmik." },
    { id: "plasma_titan", name: "Titan Plasma", starsRequired: 22, color: "#10b981", accent: "#06b6d4", desc: "Tenaga fusi ion untuk melintasi batas tata surya." }
  ],

  // DATA 10 LEVEL & PLANET
  levels: [
    {
      id: "mercury",
      name: "Merkurius",
      order: 1,
      category: "Planet Terestrial (Planet Dalam)",
      tagline: "Dunia Berbatu yang Ekstrem & Terdekat dari Matahari",
      color: "#a8a29e",
      glowColor: "rgba(168, 162, 158, 0.4)",
      sizeScale: 0.38,
      orbitDistanceRatio: 0.39, // AU
      unlockRequirement: 0,
      badge: {
        id: "badge_mercury",
        title: "Pelindung Termal",
        desc: "Berhasil menaklukkan suhu ekstrem dan ketiadaan atmosfer Merkurius."
      },
      summary: "Merkurius adalah planet terdekat dari Matahari sekaligus planet terkecil di tata surya kita. Karena hampir tidak memiliki atmosfer untuk menahan panas, suhu di Merkurius sangat ekstrem: siang hari mencapai sekitar 430°C dan malam hari anjlok hingga -180°C. Permukaannya dipenuhi kawah tubrukan mirip Bulan dan tidak memiliki satelit alami.",
      stats: {
        distanceFromSun: "Sekitar 58 juta km (0,39 AU)",
        diameter: "Sekitar 4.879 km (sepertiga ukuran Bumi)",
        surfaceTemp: "-180°C (malam) hingga 430°C (siang)",
        rotationPeriod: "Sekitar 59 hari Bumi",
        revolutionPeriod: "Sekitar 88 hari Bumi (tercepat)",
        satellites: "0 (Tidak ada satelit alami)",
        atmosphere: "Sangat tipis (eksosfer sementara)"
      },
      notebookFacts: [
        "Merkurius mengitari Matahari lebih cepat dari planet lain (hanya 88 hari Bumi untuk 1 tahun Merkurius).",
        "Ketiadaan atmosfer menyebabkan langit di Merkurius selalu tampak hitam bahkan di siang hari.",
        "Kawah terbesar di Merkurius bernama Caloris Basin, terbentuk akibat hantaman asteroid raksasa miliaran tahun lalu.",
        "Meskipun terdekat dari Matahari, Merkurius bukan planet terpanas karena tidak punya atmosfer penahan panas!"
      ],
      mechanicType: "speed_quiz",
      mechanicTitle: "Thermal Speed Quiz: Balapan Termal Merkurius",
      mechanicInstruction: "Jawab kuis cepat sebelum sensor roket kelebihan panas! Setiap jawaban tepat menstabilkan suhu perisai roket.",
      questions: [
        {
          id: "mer_q1",
          difficulty: 1,
          question: "Mengapa Merkurius mengalami perbedaan suhu yang sangat drastis antara siang dan malam hari?",
          options: [
            "Karena hampir tidak memiliki atmosfer untuk memerangkap dan menyebarkan panas",
            "Karena intinya terbuat dari es cair",
            "Karena Merkurius memiliki dua Matahari bergantian",
            "Karena Merkurius terlalu jauh dari Matahari"
          ],
          correctAnswer: 0,
          explanation: "Atmosfer berfungsi seperti selimut termal. Karena atmosfer Merkurius hampir tidak ada (hanya eksosfer tipis), panas Matahari langsung memanggang permukaan di siang hari dan langsung hilang ke luar angkasa saat malam.",
          hint: "Pikirkan apa yang menahan panas di Bumi agar malam hari tidak membeku."
        },
        {
          id: "mer_q2",
          difficulty: 1,
          question: "Berapa lama waktu yang dibutuhkan Merkurius untuk menyelesaikan satu kali putaran mengelilingi Matahari (revolusi)?",
          options: [
            "Sekitar 88 hari Bumi",
            "Sekitar 365 hari Bumi",
            "Sekitar 24 jam",
            "Sekitar 687 hari Bumi"
          ],
          correctAnswer: 0,
          explanation: "Karena posisinya paling dekat dengan gravitasi Matahari, orbit Merkurius paling pendek dan kecepatannya paling tinggi (~47 km/detik), menyelesaikan revolusi dalam sekitar 88 hari.",
          hint: "Planet terdekat dari Matahari memiliki periode tahun yang paling singkat."
        },
        {
          id: "mer_q3",
          difficulty: 2,
          question: "Benar atau Salah: Merkurius adalah planet terpanas di seluruh tata surya kita karena posisinya paling dekat dengan Matahari.",
          options: [
            "Salah, planet terpanas adalah Venus karena efek rumah kaca",
            "Benar, karena panas matahari berbanding lurus dengan jarak"
          ],
          correctAnswer: 0,
          explanation: "Salah! Meskipun Merkurius paling dekat ke Matahari, planet terpanas adalah Venus. Venus memiliki atmosfer super tebal yang memerangkap panas melalui efek rumah kaca dahsyat.",
          hint: "Ingat kembali planet tetangga Merkurius yang memiliki atmosfer tebal penuh karbon dioksida."
        },
        {
          id: "mer_q4",
          difficulty: 2,
          question: "Berapa jumlah satelit alami (bulan) yang mengelilingi planet Merkurius?",
          options: [
            "0 (Tidak memiliki satelit alami)",
            "1 satelit (seperti Bulan)",
            "2 satelit kecil",
            "14 satelit es"
          ],
          correctAnswer: 0,
          explanation: "Merkurius dan Venus adalah dua planet di tata surya kita yang sama sekali tidak memiliki satelit alami.",
          hint: "Dua planet terdalam sama-sama tidak memiliki satelit pengiring."
        },
        {
          id: "mer_q5",
          difficulty: 1,
          question: "Bagaimanakah penampakan permukaan Merkurius yang diamati oleh wahana antariksa seperti MESSENGER?",
          options: [
            "Dipenuhi kawah-kawah tubrukan mirip permukaan Bulan",
            "Dipenuhi lautan air cair yang sangat luas",
            "Tertutup lapisan es tebal berwarna biru",
            "Dipenuhi hutan purba hijau keemasan"
          ],
          correctAnswer: 0,
          explanation: "Tanpa atmosfer tebal untuk membakar meteoroid dan tanpa erosi air/angin, bekas tubrukan asteroid di Merkurius tetap abadi membentuk kawah-kawah luas.",
          hint: "Benda langit ini tidak punya cuaca/hujan, sehingga bekas benturan tidak pernah terhapus."
        },
        {
          id: "mer_q6",
          difficulty: 2,
          question: "Berdasarkan ukurannya, apakah posisi Merkurius dibandingkan 7 planet lainnya?",
          options: [
            "Planet terkecil di antara 8 planet utama",
            "Planet terbesar kedua setelah Jupiter",
            "Ukurannya persis sama dengan Bumi",
            "Lebih besar daripada Mars dan Venus"
          ],
          correctAnswer: 0,
          explanation: "Sejak Pluto diklasifikasikan sebagai planet kerdil pada 2006, Merkurius adalah planet terkecil di tata surya (hanya sedikit lebih besar dari Bulan kita).",
          hint: "Diameternya hanya sekitar 4.879 km, sepertiga ukuran Bumi."
        },
        {
          id: "mer_q7",
          difficulty: 3,
          question: "Merkurius berotasi sangat lambat pada porosnya. Satu kali rotasi (hari sideris) Merkurius setara dengan sekitar...",
          options: [
            "59 hari di Bumi",
            "24 jam di Bumi",
            "12 jam di Bumi",
            "365 hari di Bumi"
          ],
          correctAnswer: 0,
          explanation: "Merkurius membutuhkan sekitar 59 hari Bumi untuk satu putaran penuh pada porosnya, menjadikannya planet dengan putaran poros yang sangat lambat.",
          hint: "Satu putaran rotasinya membutuhkan waktu hampir 2 bulan kalender Bumi."
        },
        {
          id: "mer_q8",
          difficulty: 3,
          question: "Jika kamu berdiri di sisi siang hari Merkurius dan melihat ke langit, apa warna langit yang akan kamu lihat?",
          options: [
            "Hitam pekat bertabur bintang karena tidak ada atmosfer yang membiaskan cahaya",
            "Biru terang sama seperti langit di Bumi",
            "Kuning keemasan karena dekat dengan Matahari",
            "Merah tua menyala karena radiasi tinggi"
          ],
          correctAnswer: 0,
          explanation: "Di Bumi, langit berwarna biru karena molekul udara menyebarkan sinar matahari (Rayleigh scattering). Tanpa atmosfer, langit siang Merkurius tetap hitam pekat!",
          hint: "Ingat prinsip pembiasan cahaya membutuhkan medium partikel gas udara."
        }
      ]
    },

    {
      id: "venus",
      name: "Venus",
      order: 2,
      category: "Planet Terestrial (Planet Dalam)",
      tagline: "Dunia Terpanas dengan Selimut Karbon Dioksida Super Tebal",
      color: "#eab308",
      glowColor: "rgba(234, 179, 8, 0.4)",
      sizeScale: 0.95,
      orbitDistanceRatio: 0.72,
      unlockRequirement: 1,
      badge: {
        id: "badge_venus",
        title: "Penakluk Efek Rumah Kaca",
        desc: "Menguasai rahasia atmosfer CO2 dan penyebab Venus menjadi planet terpanas."
      },
      summary: "Venus sering dijuluki 'kembaran Bumi' karena ukuran, massa, dan gravitasinya hampir sama. Namun lingkungannya adalah neraka vulkanik! Atmosfernya 96% terdiri dari karbon dioksida dengan awan asam sulfat yang memerangkap panas matahari secara ekstrem. Akibatnya, suhu permukaan Venus mencapai rata-rata sekitar 465°C—cukup untuk melelehkan timbal!",
      stats: {
        distanceFromSun: "Sekitar 108 juta km (0,72 AU)",
        diameter: "Sekitar 12.104 km (hampir sama dengan Bumi)",
        surfaceTemp: "Rata-rata sekitar 465°C (planet terpanas)",
        rotationPeriod: "Sekitar 243 hari Bumi (berputar terbalik/retrograd)",
        revolutionPeriod: "Sekitar 225 hari Bumi",
        satellites: "0 (Tidak ada satelit alami)",
        atmosphere: "Super padat (96% Karbon Dioksida, awan Asam Sulfat)"
      },
      notebookFacts: [
        "Satu hari di Venus (243 hari Bumi) lebih lama daripada satu tahunnya (225 hari Bumi)!",
        "Venus berotasi secara retrograd (terbalik dari timur ke barat), sehingga Matahari terbit di barat.",
        "Tekanan atmosfer di permukaan Venus sekitar 90 kali lipat lebih berat daripada tekanan di Bumi.",
        "Di langit senja atau fajar, Venus bersinar sangat terang dan sering dijuluki 'Bintang Kejora' atau 'Bintang Fajar'."
      ],
      mechanicType: "greenhouse_puzzle",
      mechanicTitle: "Greenhouse Puzzle: Keseimbangan Atmosfer Panas Venus",
      mechanicInstruction: "Analisis perangkap panas gas rumah kaca dan arah rotasi anomali Venus untuk membuka gerbang perisai pelindung!",
      questions: [
        {
          id: "ven_q1",
          difficulty: 1,
          question: "Mengapa Venus menjadi planet terpanas di tata surya, mengalahkan Merkurius yang lebih dekat ke Matahari?",
          options: [
            "Karena atmosfer tebalnya yang kaya CO2 menciptakan efek rumah kaca tak terkendali",
            "Karena Venus memiliki seratus Matahari kecil di atmosfernya",
            "Karena inti Venus terus meledak seperti bom nuklir",
            "Karena jarak Venus jauh lebih dekat ke Matahari daripada Merkurius"
          ],
          correctAnswer: 0,
          explanation: "Atmosfer Venus yang padat (96% karbon dioksida) memerangkap radiasi inframerah matahari tanpa bisa lepas kembali, memicu efek rumah kaca dahsyat hingga suhunya ~465°C.",
          hint: "Fokus pada peran gas Karbon Dioksida (CO2) dalam menahan radiasi panas."
        },
        {
          id: "ven_q2",
          difficulty: 1,
          question: "Gas apakah yang mendominasi lebih dari 96% komposisi atmosfer planet Venus?",
          options: [
            "Karbon Dioksida (CO2)",
            "Oksigen murni (O2)",
            "Helium dan Hidrogen",
            "Uap air murni"
          ],
          correctAnswer: 0,
          explanation: "Lebih dari 96% atmosfer Venus adalah gas karbon dioksida (CO2), sementara sisanya sebagian besar adalah nitrogen dan awan tetesan asam sulfat pekat.",
          hint: "Gas yang sama yang dihasilkan dari pernapasan dan pembakaran bahan bakar fosil di Bumi."
        },
        {
          id: "ven_q3",
          difficulty: 2,
          question: "Awan tebal yang menyelimuti planet Venus dan memantulkan banyak cahaya matahari tersusun dari senyawa...",
          options: [
            "Tetesan asam sulfat (H2SO4)",
            "Kristal es air tawar",
            "Kapas organik alami",
            "Minyak tanah cair"
          ],
          correctAnswer: 0,
          explanation: "Awan Venus terdiri dari tetesan asam sulfat korosif yang sangat memantulkan cahaya (albedo tinggi), menjadikannya sangat berkilau di langit malam Bumi.",
          hint: "Zat kimia ini dikenal sangat asam dan sering dipakai dalam aki kendaraan."
        },
        {
          id: "ven_q4",
          difficulty: 2,
          question: "Apa keunikan arah putaran rotasi planet Venus jika dibandingkan dengan mayoritas planet lain seperti Bumi?",
          options: [
            "Berotasi secara terbalik (retrograd), dari timur ke barat",
            "Berotasi ke atas dan ke bawah secara vertikal",
            "Tidak berputar sama sekali selamanya",
            "Berotasi sepuluh kali lebih cepat daripada Bumi"
          ],
          correctAnswer: 0,
          explanation: "Venus berotasi dari timur ke barat (retrograd). Akibatnya, pengamat hipotetis di Venus akan melihat Matahari terbit dari barat dan terbenam di timur!",
          hint: "Arah putarannya berlawanan dengan arah jarum jam normal sebagian besar planet."
        },
        {
          id: "ven_q5",
          difficulty: 1,
          question: "Mengapa Venus sering dijuluki sebagai 'Kembaran Bumi' (Earth's Twin)?",
          options: [
            "Karena ukuran diameter, massa, dan kerapatannya sangat mirip dengan Bumi",
            "Karena memiliki lautan, tumbuhan, dan manusia yang hidup di sana",
            "Karena memiliki bulan yang persis sama dengan satelit Bumi",
            "Karena warnanya sama persis biru kehijauan"
          ],
          correctAnswer: 0,
          explanation: "Venus berukuran sekitar 95% ukuran Bumi dan massanya sekitar 80% massa Bumi, menjadikannya kembaran fisik terdekat meskipun iklimnya sangat bertolak belakang.",
          hint: "Perhatikan parameter ukuran fisik, bukan kondisi iklim atau kehidupan."
        },
        {
          id: "ven_q6",
          difficulty: 2,
          question: "Di Indonesia, planet Venus sering terlihat sangat terang di langit fajar atau senja dan populer dengan sebutan...",
          options: [
            "Bintang Kejora atau Bintang Fajar",
            "Bintang Pari (Salib Selatan)",
            "Komet Halley",
            "Bintang Kutub Polaris"
          ],
          correctAnswer: 0,
          explanation: "Karena memantulkan cahaya matahari dengan sangat baik dan dekat dengan Bumi, Venus adalah benda langit alami paling terang ke-3 setelah Matahari dan Bulan.",
          hint: "Sebutan tradisional Nusantara untuk bintang fajar penanda subuh/maghrib."
        },
        {
          id: "ven_q7",
          difficulty: 3,
          question: "Perbandingan menarik di Venus: manakah pernyataan yang benar mengenai panjang hari dan panjang tahun di planet ini?",
          options: [
            "Satu hari Venus (rotasi ~243 hari Bumi) lebih lama daripada satu tahunnya (revolusi ~225 hari Bumi)",
            "Satu hari Venus jauh lebih singkat daripada satu hari Bumi (hanya 6 jam)",
            "Satu tahun Venus sama persis dengan 10 tahun Bumi",
            "Venus tidak memiliki pergantian tahun sama sekali"
          ],
          correctAnswer: 0,
          explanation: "Rotasi Venus sangat lambat (243 hari Bumi) sedangkan revolusinya 225 hari Bumi. Jadi, satu hari di Venus lebih panjang daripada satu tahunnya!",
          hint: "Planet ini berputar pada porosnya lebih lambat daripada laju orbit mengelilingi Matahari."
        },
        {
          id: "ven_q8",
          difficulty: 3,
          question: "Berapakah perkiraan tekanan atmosfer di permukaan padat Venus dibandingkan dengan tekanan di permukaan laut Bumi?",
          options: [
            "Sekitar 90 kali lipat lebih tinggi dari tekanan atmosfer Bumi",
            "Sama persis dengan tekanan udara di Bumi",
            "Separuh dari tekanan udara di Bumi",
            "Nol, karena ruang hampa udara total"
          ],
          correctAnswer: 0,
          explanation: "Tekanan udara di permukaan Venus mencapai sekitar 90–92 bar, setara dengan tekanan di kedalaman sekitar 900 meter di bawah samudra Bumi!",
          hint: "Tekanannya sangat luar biasa besar hingga mampu meremukkan kapal selam biasa."
        }
      ]
    },

    {
      id: "earth",
      name: "Bumi",
      order: 3,
      category: "Planet Terestrial (Planet Dalam)",
      tagline: "Satu-satunya Rumah Kehidupan dengan Air Cair dan Atmosfer Seimbang",
      color: "#3b82f6",
      glowColor: "rgba(59, 130, 246, 0.4)",
      sizeScale: 1.0,
      orbitDistanceRatio: 1.0,
      unlockRequirement: 2,
      badge: {
        id: "badge_earth",
        title: "Penjaga Biosfer",
        desc: "Menguasai struktur pelindung atmosfer Bumi dan mekanisme rotasi-revolusi."
      },
      summary: "Bumi adalah planet ketiga dari Matahari dan satu-satunya tempat di alam semesta yang terbukti menampung kehidupan. Sekitar 71% permukaan Bumi ditutupi air cair. Atmosfer Bumi yang terdiri dari 78% nitrogen dan 21% oksigen, dilindungi lapisan ozon dan medan magnet bumi (magnetosfer) dari bahaya radiasi kosmik dan badai matahari.",
      stats: {
        distanceFromSun: "Sekitar 149,6 juta km (1,0 AU)",
        diameter: "Sekitar 12.742 km",
        surfaceTemp: "Rata-rata sekitar 15°C (nyaman untuk biosfer)",
        rotationPeriod: "Sekitar 23 jam 56 menit (dibulatkan 24 jam)",
        revolutionPeriod: "Sekitar 365,25 hari (1 tahun kalender)",
        satellites: "1 (Bulan / Luna)",
        atmosphere: "78% Nitrogen, 21% Oksigen, 0.9% Argon, uap air, CO2"
      },
      notebookFacts: [
        "Kemiringan sumbu rotasi Bumi (23,5°) menghasilkan 4 musim di wilayah subtropis dan kutub.",
        "Medan magnet Bumi membelokkan partikel angin matahari dan menciptakan fenomena Aurora yang indah di kutub.",
        "Atmosfer Bumi terdiri dari 5 lapisan utama: Troposfer, Stratosfer, Mesosfer, Termosfer, dan Eksosfer.",
        "Bulan adalah satelit alami Bumi yang gravitasi tarikannya menyebabkan pasang surut air laut."
      ],
      mechanicType: "atmosphere_drag_drop",
      mechanicTitle: "Atmosphere & Orbit Lab: Laboratorium Lapisan Bumi",
      mechanicInstruction: "Susun 5 lapisan atmosfer Bumi secara berurutan dari yang terendah ke tertinggi, lalu selesaikan simulasi rotasi & revolusi!",
      atmosphereLayers: [
        { id: "troposfer", name: "Troposfer", altitude: "0 - 12 km", desc: "Tempat terjadinya cuaca, awan, hujan, dan tempat hidup makhluk Bumi.", order: 1 },
        { id: "stratosfer", name: "Stratosfer", altitude: "12 - 50 km", desc: "Tempat pesawat jet melintas dan terdapat Lapisan Ozon penyerap radiasi UV.", order: 2 },
        { id: "mesosfer", name: "Mesosfer", altitude: "50 - 85 km", desc: "Lapisan dingin pelindung Bumi tempat meteoroid terbakar habis.", order: 3 },
        { id: "termosfer", name: "Termosfer (Ionosfer)", altitude: "85 - 600 km", desc: "Suhu sangat tinggi, tempat lintasan ISS dan terjadinya fenomena Aurora.", order: 4 },
        { id: "eksosfer", name: "Eksosfer", altitude: "> 600 km", desc: "Lapisan terluar yang berbatasan langsung dengan ruang hampa antariksa.", order: 5 }
      ],
      questions: [
        {
          id: "ear_q1",
          difficulty: 1,
          question: "Peristiwa alam apakah yang diakibatkan langsung oleh perputaran Bumi pada porosnya sendiri (Rotasi Bumi)?",
          options: [
            "Pergantian siang dan malam serta gerak semu harian benda langit",
            "Pergantian empat musim di belahan bumi utara dan selatan",
            "Perubahan lamanya waktu satu tahun kalender masehi",
            "Gerhana bulan total setiap akhir pekan"
          ],
          correctAnswer: 0,
          explanation: "Rotasi Bumi (putaran poros selama 24 jam) menyebabkan sisi bumi menghadap dan membelakangi matahari secara bergantian (siang dan malam).",
          hint: "Pikirkan fenomena harian yang terjadi setiap 24 jam sekali."
        },
        {
          id: "ear_q2",
          difficulty: 1,
          question: "Di lapisan atmosfer manakah fenomena cuaca seperti pembentukan awan, hujan, petir, dan angin terjadi?",
          options: [
            "Troposfer (lapisan paling dasar)",
            "Termosfer (lapisan tempat satelit)",
            "Eksosfer (lapisan luar)",
            "Mesosfer (lapisan tengah)"
          ],
          correctAnswer: 0,
          explanation: "Troposfer adalah lapisan paling bawah (0–12 km) yang menampung hampir seluruh uap air atmosfer bumi, sehingga semua fenomena cuaca berlangsung di sini.",
          hint: "Lapisan terendah tempat kita menghirup udara setiap hari."
        },
        {
          id: "ear_q3",
          difficulty: 2,
          question: "Lapisan Ozon (O3) yang sangat penting melindungi kehidupan makhluk hidup dari radiasi sinar ultraviolet (UV) terletak pada lapisan...",
          options: [
            "Stratosfer",
            "Troposfer",
            "Mesosfer",
            "Eksosfer"
          ],
          correctAnswer: 0,
          explanation: "Lapisan Ozon berada di stratosfer (ketinggian sekitar 15–35 km) yang menyerap sebagian besar radiasi berbahaya ultraviolet-B dari Matahari.",
          hint: "Lapisan kedua di atas troposfer, tempat pesawat jet sering terbang tenang."
        },
        {
          id: "ear_q4",
          difficulty: 2,
          question: "Pergerakan Bumi mengelilingi Matahari pada orbitnya disebut Revolusi Bumi. Revolusi Bumi bersama kemiringan poros 23,5° mengakibatkan...",
          options: [
            "Pergantian musim dan perbedaan lamanya siang-malam di berbagai belahan bumi",
            "Pasang surut air laut harian",
            "Terjadinya gempa bumi tektonik secara serentak",
            "Pergantian siang dan malam setiap 12 jam"
          ],
          correctAnswer: 0,
          explanation: "Revolusi bumi selama ~365,25 hari dengan kemiringan sumbu 23,5° menghasilkan variasi intensitas cahaya matahari sepanjang tahun, memicu pergantian musim.",
          hint: "Peristiwa tahunan yang mengubah iklim musim dingin, semi, panas, dan gugur."
        },
        {
          id: "ear_q5",
          difficulty: 1,
          question: "Gas terbanyak yang menyusun udara bersih di atmosfer planet Bumi kita adalah...",
          options: [
            "Gas Nitrogen (sekitar 78%)",
            "Gas Oksigen (sekitar 95%)",
            "Gas Karbon Dioksida (sekitar 50%)",
            "Gas Hidrogen murni (sekitar 80%)"
          ],
          correctAnswer: 0,
          explanation: "Atmosfer Bumi terdiri dari 78% gas Nitrogen (N2) dan sekitar 21% gas Oksigen (O2). Karbon dioksida hanya menyusun sekitar 0,04%.",
          hint: "Bukan oksigen, melainkan gas yang sering digunakan untuk mengisi ban kendaraan."
        },
        {
          id: "ear_q6",
          difficulty: 2,
          question: "Lapisan atmosfer manakah yang bertindak sebagai perisai pelindung yang membakar habis meteoroid sebelum menabrak tanah Bumi?",
          options: [
            "Mesosfer",
            "Troposfer",
            "Eksosfer",
            "Inti bumi bagian luar"
          ],
          correctAnswer: 0,
          explanation: "Di Mesosfer (lapisan tengah pada ketinggian 50–85 km), gesekan antara meteoroid yang melaju kencang dan partikel gas menghasilkan panas ekstrem yang membakar meteoroid.",
          hint: "Awalan katanya 'Meso' yang berarti tengah."
        },
        {
          id: "ear_q7",
          difficulty: 3,
          question: "Apakah nama satelit alami satu-satunya yang setia mengitari Bumi dan mempengaruhi fenomena pasang surut air laut?",
          options: [
            "Bulan (Luna)",
            "Titan",
            "Phobos",
            "Europa"
          ],
          correctAnswer: 0,
          explanation: "Bumi hanya memiliki 1 satelit alami resmi yaitu Bulan (Luna), yang gravitasinya menarik air laut menghasilkan pasang dan surut periodik.",
          hint: "Objek paling terang di langit malam kita."
        },
        {
          id: "ear_q8",
          difficulty: 3,
          question: "Berapa lama periode waktu yang ditempuh Bumi untuk melakukan satu kali revolusi mengelilingi Matahari secara presisi?",
          options: [
            "365 hari 6 jam (sekitar 365,25 hari)",
            "Tepat 300 hari tanpa sisa jam",
            "24 jam 50 menit",
            "700 hari kalender"
          ],
          correctAnswer: 0,
          explanation: "Satu tahun revolusi bumi memakan waktu sekitar 365 hari 6 jam. Akumulasi sisa 6 jam (0,25 hari) tiap tahun inilah yang membentuk tahun kabisat (366 hari) tiap 4 tahun!",
          hint: "Alasan mengapa ada tanggal 29 Februari setiap empat tahun sekali."
        }
      ]
    },

    {
      id: "mars",
      name: "Mars",
      order: 4,
      category: "Planet Terestrial (Planet Dalam)",
      tagline: "Planet Merah Penuh Misteri dengan Gunung Tertinggi",
      color: "#ef4444",
      glowColor: "rgba(239, 68, 68, 0.4)",
      sizeScale: 0.53,
      orbitDistanceRatio: 1.52,
      unlockRequirement: 3,
      badge: {
        id: "badge_mars",
        title: "Penerbang Lembah Merah",
        desc: "Sukses mendaratkan roket di permukaan berdebu Mars dan menaklukkan gravitasinya."
      },
      summary: "Mars dijuluki 'Planet Merah' karena tanah dan debunya kaya akan mineral besi teroksidasi (karat). Mars memiliki atmosfer tipis berkarbon dioksida dan suhu dingin rata-rata -60°C. Di planet ini terdapat gunung berapi tertinggi di tata surya, Olympus Mons (hampir 3 kali tinggi Gunung Everest), dan dua bulan mini bernama Phobos dan Deimos.",
      stats: {
        distanceFromSun: "Sekitar 228 juta km (1,52 AU)",
        diameter: "Sekitar 6.779 km (sekitar separuh Bumi)",
        surfaceTemp: "-140°C hingga 20°C (rata-rata -60°C)",
        rotationPeriod: "24 jam 37 menit (sangat mirip dengan Bumi)",
        revolutionPeriod: "Sekitar 687 hari Bumi",
        satellites: "2 (Phobos dan Deimos)",
        atmosphere: "Tipis (sekitar 95% Karbon Dioksida)"
      },
      notebookFacts: [
        "Olympus Mons di Mars adalah gunung berapi terbesar di tata surya dengan tinggi sekitar 22 km!",
        "Valles Marineris adalah ngarai raksasa di Mars yang panjangnya setara jarak dari Sabang sampai Merauke.",
        "Gravitasi Mars hanya sekitar 38% gravitasi Bumi; jika beratmu 50 kg di Bumi, di Mars kamu hanya seberat 19 kg!",
        "Dua satelit Mars, Phobos dan Deimos, diperkirakan adalah asteroid purba yang tertangkap oleh gravitasi Mars."
      ],
      mechanicType: "mars_lander",
      mechanicTitle: "Mars Lunar Lander: Pendaratan Halus Gravitasi 38%",
      mechanicInstruction: "Gunakan semburan pendorong pendarat (Thrust) untuk mendaratkan roket dengan kecepatan aman (< 2 m/s) sambil menjawab pertanyaan navigasi Mars!",
      landerConfig: {
        gravity: 1.8, // skala gravitasi simulasi
        safeLandingSpeed: 2.2,
        startingFuel: 100
      },
      questions: [
        {
          id: "mar_q1",
          difficulty: 1,
          question: "Zat kimia apakah yang melimpah di permukaan tanah Mars sehingga menyebabkan planet ini tampak berwarna merah mencolok?",
          options: [
            "Besi Oksida (karat besi)",
            "Tembaga cair panas",
            "Belerang kuning aktif",
            "Emas dan permata rubi"
          ],
          correctAnswer: 0,
          explanation: "Debu dan batuan Mars sangat kaya akan senyawa besi oksida (Fe2O3) atau karat, yang menyebarkan warna kemerahan saat terkena cahaya matahari.",
          hint: "Bahan yang sama yang terbentuk pada pagar besi berkarat di Bumi."
        },
        {
          id: "mar_q2",
          difficulty: 1,
          question: "Berapa banyak satelit alami yang dimiliki oleh planet Mars dan apa nama kedua satelit tersebut?",
          options: [
            "2 satelit, bernama Phobos dan Deimos",
            "1 satelit, bernama Ganymede",
            "4 satelit, bernama Io, Europa, Kalisto, dan Titan",
            "Tidak memiliki satelit sama sekali"
          ],
          correctAnswer: 0,
          explanation: "Mars memiliki 2 satelit alami berukuran kecil dan berbentuk tidak beraturan seperti kentang, yaitu Phobos (rasa takut) dan Deimos (panik).",
          hint: "Nama dewa pengiring perang dalam mitologi Yunani Kuno berjumlah dua."
        },
        {
          id: "mar_q3",
          difficulty: 2,
          question: "Gunung berapi perisai tertinggi di seluruh tata surya kita berada di planet Mars. Gunung tersebut bernama...",
          options: [
            "Olympus Mons (tinggi ~22 km)",
            "Gunung Everest (tinggi ~8,8 km)",
            "Mauna Kea",
            "Gunung Krakatau"
          ],
          correctAnswer: 0,
          explanation: "Olympus Mons menjulang setinggi 22 km di atas dataran Mars, hampir tiga kali lipat ketinggian Gunung Everest di Bumi!",
          hint: "Namanya diambil dari tempat kediaman dewa-dewi mitologi Olympus."
        },
        {
          id: "mar_q4",
          difficulty: 2,
          question: "Jika kamu melompat di permukaan Mars, kamu akan melompat jauh lebih tinggi daripada di Bumi. Hal ini terjadi karena...",
          options: [
            "Gravitasi permukaan Mars hanya sekitar 38% dari gravitasi Bumi",
            "Mars tidak memiliki gravitasi sama sekali",
            "Tanah Mars terbuat dari bahan karet elastis",
            "Udara di Mars sangat dingin sehingga tubuh menjadi ringan"
          ],
          correctAnswer: 0,
          explanation: "Massa Mars jauh lebih kecil daripada Bumi, sehingga percepatan gravitasi permukaannya hanya sekitar 3,7 m/s² (sekitar 38% gravitasi Bumi).",
          hint: "Massa planet yang lebih kecil menghasilkan daya tarik gravitasi yang lebih lemah."
        },
        {
          id: "mar_q5",
          difficulty: 1,
          question: "Panjang satu hari rotasi (sol) di Mars ternyata sangat mirip dengan panjang hari di Bumi, yaitu sekitar...",
          options: [
            "24 jam 37 menit",
            "12 jam tepat",
            "100 jam penuh",
            "58 hari Bumi"
          ],
          correctAnswer: 0,
          explanation: "Satu hari matahari di Mars (disebut 'sol') berdurasi 24 jam 39 menit dan 35 detik, menjadikannya planet dengan ritme harian paling mirip Bumi.",
          hint: "Hanya terpaut sekitar setengah jam lebih lama dari 1 hari di Bumi."
        },
        {
          id: "mar_q6",
          difficulty: 2,
          question: "Mengapa air cair tidak dapat bertahan lama di permukaan terbuka Mars pada saat ini?",
          options: [
            "Karena tekanan atmosfer Mars sangat tipis dan suhunya dingin sehingga air langsung menguap atau membeku",
            "Karena dihisap oleh tanaman purba",
            "Karena air langsung bereaksi menjadi minyak bumi",
            "Karena Mars terlalu panas melebihi suhu Matahari"
          ],
          correctAnswer: 0,
          explanation: "Tekanan atmosfer Mars yang kurang dari 1% tekanan Bumi membuat titik didih air sangat rendah. Air cair akan mendidih menguap cepat atau membeku menjadi es abadi.",
          hint: "Pikirkan dampak tekanan udara yang sangat rendah dan suhu yang membekukan."
        },
        {
          id: "mar_q7",
          difficulty: 3,
          question: "Ngarai raksasa terdalam dan terpanjang di planet Mars yang membentang lebih dari 4.000 km disebut...",
          options: [
            "Valles Marineris",
            "Grand Canyon Arizona",
            "Palung Mariana",
            "Lembah Silicon"
          ],
          correctAnswer: 0,
          explanation: "Valles Marineris adalah sistem ngarai raksasa di khatulistiwa Mars yang panjangnya mencapai lebih dari seperlima keliling planet Mars!",
          hint: "Namanya diabadikan dari wahana antariksa penjelajah Mariner 9."
        },
        {
          id: "mar_q8",
          difficulty: 3,
          question: "Di kutub utara dan kutub selatan Mars terdapat tudung es abadi. Apakah komposisi utama tudung es tersebut?",
          options: [
            "Es air tawar yang dilapisi lapisan karbon dioksida beku (dry ice)",
            "Gumpalan es amonia dan belerang",
            "Kaca kristal padat alami",
            "Lava beku dari batu basal"
          ],
          correctAnswer: 0,
          explanation: "Tudung kutub Mars terdiri dari cadangan es air tawar yang sangat banyak, dan pada musim dingin diselimuti lapisan 'dry ice' (karbon dioksida beku).",
          hint: "Kombinasi air beku dan gas CO2 beku yang sering disebut es kering."
        }
      ]
    },

    {
      id: "jupiter",
      name: "Jupiter",
      order: 5,
      category: "Planet Gas Raksasa (Planet Luar)",
      tagline: "Raja Planet dengan Badai Abadi Bintik Merah Raksasa",
      color: "#f97316",
      glowColor: "rgba(249, 115, 22, 0.4)",
      sizeScale: 2.2,
      orbitDistanceRatio: 5.2,
      unlockRequirement: 4,
      badge: {
        id: "badge_jupiter",
        title: "Penguasa Gravitasi Raksasa",
        desc: "Mampu membandingkan skala raksasa Jupiter dan mengenal sistem badai kosmiknya."
      },
      summary: "Jupiter adalah planet terbesar di tata surya dengan massa 2,5 kali lipat gabungan seluruh planet lainnya! Sebagai planet gas raksasa, Jupiter tidak memiliki permukaan padat untuk dipijak. Ciri paling terkenalnya adalah 'Bintik Merah Raksasa', yaitu badai antosiklonik dahsyat yang sudah mengamuk selama ratusan tahun dan ukurannya lebih besar daripada Bumi.",
      stats: {
        distanceFromSun: "Sekitar 778 juta km (5,2 AU)",
        diameter: "Sekitar 139.820 km (11 kali diameter Bumi)",
        surfaceTemp: "Sekitar -110°C di puncak awan",
        rotationPeriod: "Sekitar 9 jam 55 menit (rotasi tercepat)",
        revolutionPeriod: "Sekitar 11,86 tahun Bumi (hampir 12 tahun)",
        satellites: "95 satelit terkonfirmasi (termasuk 4 satelit Galileo)",
        atmosphere: "90% Hidrogen, 10% Helium, jejak Metana dan Amonia"
      },
      notebookFacts: [
        "Semua planet lain di tata surya bisa muat di dalam ruang kosong di dalam perut Jupiter!",
        "Ganymede, salah satu satelit Jupiter, adalah satelit terbesar di tata surya (bahkan lebih besar dari planet Merkurius).",
        "Jupiter berputar pada porosnya sangat kencang: hanya butuh kurang dari 10 jam untuk satu hari!",
        "Jupiter memiliki cincin debu tipis dan samar yang ditemukan oleh wahana Voyager 1 pada tahun 1979."
      ],
      mechanicType: "size_sorter",
      mechanicTitle: "Planetary Scale Sorter: Urutkan Skala Ukuran Planet",
      mechanicInstruction: "Urutkan planet-planet dari yang terkecil hingga terbesar berdasarkan diameternya untuk menstabilkan pemindai radar Jupiter!",
      sorterPlanets: [
        { name: "Merkurius", diameterKm: 4879, scaleRank: 1 },
        { name: "Mars", diameterKm: 6779, scaleRank: 2 },
        { name: "Venus", diameterKm: 12104, scaleRank: 3 },
        { name: "Bumi", diameterKm: 12742, scaleRank: 4 },
        { name: "Neptunus", diameterKm: 49244, scaleRank: 5 },
        { name: "Uranus", diameterKm: 50724, scaleRank: 6 },
        { name: "Saturnus", diameterKm: 116460, scaleRank: 7 },
        { name: "Jupiter", diameterKm: 139820, scaleRank: 8 }
      ],
      questions: [
        {
          id: "jup_q1",
          difficulty: 1,
          question: "Apakah fenomena alamiah yang membentuk tanda legendaris 'Bintik Merah Raksasa' (Great Red Spot) pada Jupiter?",
          options: [
            "Badai antisiklon raksasa berkekuatan tinggi yang sudah berlangsung ratusan tahun",
            "Danau lava merah yang sangat panas",
            "Kawah bekas hantaman asteroid raksasa purba",
            "Bintik pigmen lumut merah di permukaan padat"
          ],
          correctAnswer: 0,
          explanation: "Bintik Merah Raksasa adalah pusaran badai berputar raksasa bertekanan tinggi di atmosfer Jupiter yang ukurannya bisa menelan satu buah planet Bumi!",
          hint: "Bukan lubang atau batuan, melainkan pusaran angin gas atmosferik."
        },
        {
          id: "jup_q2",
          difficulty: 1,
          question: "Komposisi utama apakah yang menyusun sebagian besar badan planet Jupiter?",
          options: [
            "Gas Hidrogen dan Helium",
            "Batuan granit dan besi padat",
            "Es air beku dan garam",
            "Lava cair mendidih"
          ],
          correctAnswer: 0,
          explanation: "Sebagai 'Gas Giant', Jupiter tersusun dari sekitar 90% gas hidrogen dan 10% helium, komposisi yang sangat mirip dengan materi pembentuk Matahari.",
          hint: "Dua elemen gas paling ringan dan paling melimpah di alam semesta."
        },
        {
          id: "jup_q3",
          difficulty: 2,
          question: "Jupiter memiliki rotasi tercepat di antara seluruh planet di tata surya. Berapakah lama satu hari di Jupiter?",
          options: [
            "Hanya sekitar 9 jam 55 menit",
            "Sekitar 24 jam penuh",
            "Sekitar 59 hari Bumi",
            "Sekitar 1 tahun Bumi"
          ],
          correctAnswer: 0,
          explanation: "Meskipun ukurannya super raksasa, Jupiter berputar luar biasa kencang: hanya membutuhkan waktu sekitar 9 jam 55 menit untuk satu putaran penuh.",
          hint: "Waktu satu harinya tidak sampai setengah hari Bumi!"
        },
        {
          id: "jup_q4",
          difficulty: 2,
          question: "Empat satelit terbesar Jupiter yang pertama kali ditemukan oleh astronom Galileo Galilei tahun 1610 adalah...",
          options: [
            "Io, Europa, Ganymede, dan Callisto",
            "Phobos, Deimos, Titan, dan Triton",
            "Bulan, Ceres, Pluto, dan Charon",
            "Ariel, Umbriel, Titania, dan Oberon"
          ],
          correctAnswer: 0,
          explanation: "Satelit Galilean terdiri dari Io (vulkanik aktif), Europa (samudra bawah es), Ganymede (terbesar di tata surya), dan Callisto (berkawah banyak).",
          hint: "Empat nama satelit yang berawalan dari Io, Eu..., Gan..., dan Cal..."
        },
        {
          id: "jup_q5",
          difficulty: 1,
          question: "Manakah satelit alami milik Jupiter yang berukuran paling besar di tata surya (bahkan melebihi diameter Merkurius)?",
          options: [
            "Ganymede",
            "Titan",
            "Bulan",
            "Europa"
          ],
          correctAnswer: 0,
          explanation: "Ganymede memiliki diameter sekitar 5.268 km, menjadikannya satelit terbesar di tata surya dan satu-satunya satelit yang memiliki medan magnetnya sendiri.",
          hint: "Satelit raksasa yang berawalan huruf 'G'."
        },
        {
          id: "jup_q6",
          difficulty: 2,
          question: "Ditinjau dari massanya, seberapa besarkah massa planet Jupiter dibandingkan dengan planet-planet lain di tata surya?",
          options: [
            "Lebih dari 2,5 kali lipat gabungan seluruh massa planet lain disatukan",
            "Hampir sama dengan gabungan Bumi dan Mars",
            "Lebih kecil daripada massa Saturnus",
            "Tepat sama dengan massa Matahari"
          ],
          correctAnswer: 0,
          explanation: "Massa Jupiter sangat luar biasa: sekitar 318 kali massa Bumi dan lebih dari 2,5 kali massa seluruh planet di tata surya digabungkan!",
          hint: "Massa Jupiter jauh melebihi penjumlahan 7 planet lainnya bersama-sama."
        },
        {
          id: "jup_q7",
          difficulty: 3,
          question: "Mengapa para astronot tidak bisa mendaratkan pesawat antariksa di permukaan planet Jupiter layaknya di Bumi atau Mars?",
          options: [
            "Karena Jupiter tidak memiliki permukaan padat, melainkan atmosfer gas tebal yang semakin ke dalam menjadi cairan super panas bertekanan ekstrem",
            "Karena Jupiter terbuat dari kaca tipis yang mudah pecah",
            "Karena Jupiter dilindungi kubah medan gaya alien",
            "Karena gravitasi Jupiter justru menolak dan melontarkan semua benda"
          ],
          correctAnswer: 0,
          explanation: "Jupiter adalah raksasa gas tanpa batas permukaan padat. Wahana yang masuk akan hancur dan meleleh akibat tekanan dan suhu ribuan derajat di kedalaman atmosfer.",
          hint: "Karakteristik planet gas jovian yang tidak memiliki pijakan tanah keras."
        },
        {
          id: "jup_q8",
          difficulty: 3,
          question: "Berapa lama waktu yang dibutuhkan Jupiter untuk menyelesaikan satu kali orbit mengelilingi Matahari (1 tahun Jupiter)?",
          options: [
            "Sekitar 11,86 tahun Bumi (hampir 12 tahun)",
            "Sekitar 365 hari Bumi",
            "Sekitar 84 tahun Bumi",
            "Sekitar 2 tahun Bumi"
          ],
          correctAnswer: 0,
          explanation: "Dengan jarak rata-rata 5,2 AU dari Matahari, orbit Jupiter memakan waktu sekitar 11,86 tahun Bumi untuk satu revolusi lengkap.",
          hint: "Ketika kamu berumur 12 tahun di Bumi, Jupiter baru genap mengelilingi Matahari satu kali."
        }
      ]
    },

    {
      id: "saturn",
      name: "Saturnus",
      order: 6,
      category: "Planet Gas Raksasa (Planet Luar)",
      tagline: "Permata Tata Surya dengan Sistem Cincin Es Termegah",
      color: "#eab308",
      glowColor: "rgba(234, 179, 8, 0.4)",
      sizeScale: 1.9,
      orbitDistanceRatio: 9.5,
      unlockRequirement: 5,
      badge: {
        id: "badge_saturn",
        title: "Penakluk Cincin Saturnus",
        desc: "Mengumpulkan partikel cincin es dan mengungkap rahasia densitas planet Saturnus."
      },
      summary: "Saturnus adalah planet keenam dari Matahari dan planet terbesar kedua. Ciri paling menakjubkan adalah sistem cincinnya yang sangat spektakuler, membentang hingga ratusan ribu kilometer namun tebalnya rata-rata hanya beberapa puluh meter! Cincin ini tersusun dari miliaran bongkahan es air dan debu batuan. Saturnus juga merupakan planet paling ringan; kerapatannya lebih kecil dari air!",
      stats: {
        distanceFromSun: "Sekitar 1,4 miliar km (9,5 AU)",
        diameter: "Sekitar 116.460 km (9 kali diameter Bumi)",
        surfaceTemp: "Sekitar -140°C di puncak atmosfer",
        rotationPeriod: "Sekitar 10 jam 33 menit",
        revolutionPeriod: "Sekitar 29,4 tahun Bumi",
        satellites: "146 satelit terkonfirmasi (terbanyak di tata surya)",
        atmosphere: "Sebagian besar Hidrogen dan Helium"
      },
      notebookFacts: [
        "Massa jenis rata-rata Saturnus (0,69 g/cm³) lebih kecil dari air (1 g/cm³). Jika ada bak air raksasa sebesar Saturnus, planet ini akan mengapung!",
        "Cincin Saturnus tersusun dari 99% partikel es air murni, mulai dari butiran seukuran kerikil hingga bongkahan sebesar rumah.",
        "Titan, satelit terbesar Saturnus, adalah satu-satunya satelit di tata surya yang memiliki atmosfer tebal dan danau hidrokarbon cair.",
        "Di kutub utara Saturnus terdapat fenomena pusaran awan berbentuk segi enam (heksagon) yang misterius."
      ],
      mechanicType: "ring_catcher",
      mechanicTitle: "Ring Particle Catcher: Navigasi Partikel Es Cincin",
      mechanicInstruction: "Kendalikan modul roket untuk menangkap partikel es murni cincin dan hindari serpihan mikrometeoroid berbahaya!",
      questions: [
        {
          id: "sat_q1",
          difficulty: 1,
          question: "Tersusun dari apakah sebagian besar cincin indah yang mengitari planet Saturnus?",
          options: [
            "Miliaran bongkahan es air murni, debu, dan batuan",
            "Satu lempengan kaca padat raksasa yang mengkilap",
            "Cahaya laser emas buatan",
            "Asap pabrik kimia angkasa"
          ],
          correctAnswer: 0,
          explanation: "Cincin Saturnus bukanlah piringan padat utuh, melainkan triliunan kepingan es air murni berukuran mikro hingga beberapa meter yang mengorbit bersama.",
          hint: "Pikirkan partikel air yang membeku menjadi butiran dan bongkahan es di antariksa."
        },
        {
          id: "sat_q2",
          difficulty: 2,
          question: "Jika kita memiliki sebuah kolam air raksasa yang luar biasa besar dan memasukkan Saturnus ke dalamnya, apa yang akan terjadi secara fisika?",
          options: [
            "Saturnus akan mengapung di atas air karena kerapatan massanya lebih kecil daripada air",
            "Saturnus akan langsung tenggelam ke dasar seperti batu",
            "Saturnus akan meledak menjadi bola api",
            "Air di kolam langsung menguap semuanya seketika"
          ],
          correctAnswer: 0,
          explanation: "Kerapatan rata-rata Saturnus adalah sekitar 0,687 g/cm³, lebih ringan daripada kerapatan air (1,0 g/cm³), menjadikannya satu-satunya planet yang bisa mengapung di air!",
          hint: "Benda yang massa jenisnya lebih rendah dari cairan akan terapung."
        },
        {
          id: "sat_q3",
          difficulty: 1,
          question: "Satelit terbesar milik Saturnus yang memiliki atmosfer tebal kaya nitrogen dan danau metana cair bernama...",
          options: [
            "Titan",
            "Phobos",
            "Bulan",
            "Triton"
          ],
          correctAnswer: 0,
          explanation: "Titan adalah satelit raksasa Saturnus dan satu-satunya bulan di tata surya dengan atmosfer padat serta siklus hujan dan danau metana cair.",
          hint: "Namanya berawal dari huruf 'T' dan mirip nama kaum raksasa mitologi."
        },
        {
          id: "sat_q4",
          difficulty: 2,
          question: "Berapa lama waktu yang dibutuhkan planet Saturnus untuk melakukan satu putaran revolusi penuh mengelilingi Matahari?",
          options: [
            "Sekitar 29,5 tahun Bumi",
            "Sekitar 365 hari",
            "Sekitar 5 tahun Bumi",
            "Sekitar 165 tahun Bumi"
          ],
          correctAnswer: 0,
          explanation: "Karena jaraknya sangat jauh dari Matahari (~1,4 miliar km), satu tahun di Saturnus setara dengan hampir tiga dekade kehidupan di Bumi (~29,5 tahun).",
          hint: "Hampir setara dengan usia seseorang dari lahir hingga umur tiga puluh tahun di Bumi."
        },
        {
          id: "sat_q5",
          difficulty: 2,
          question: "Meskipun cincin Saturnus membentang hingga selebar sekitar 280.000 km, berapakah perkiraan ketebalan rata-rata dari cincin utama tersebut?",
          options: [
            "Sangat tipis, rata-rata hanya sekitar 10 sampai 30 meter saja",
            "Setebal seribu kilometer padat",
            "Setebal diameter planet Bumi",
            "Tidak memiliki ketebalan sama sekali"
          ],
          correctAnswer: 0,
          explanation: "Sistem cincin utama Saturnus sangat tipis bagaikan kertas: membentang ratusan ribu kilometer tetapi tebal vertikalnya rata-rata hanya puluhan meter!",
          hint: "Sangat tipis, setara dengan ketinggian gedung bertingkat 3–8 lantai."
        },
        {
          id: "sat_q6",
          difficulty: 1,
          question: "Planet manakah di tata surya kita yang saat ini tercatat memiliki jumlah satelit alami (bulan) terbanyak yang telah terkonfirmasi?",
          options: [
            "Saturnus (dengan 146 satelit resmi)",
            "Bumi (dengan 1 satelit)",
            "Mars (dengan 2 satelit)",
            "Merkurius (dengan 0 satelit)"
          ],
          correctAnswer: 0,
          explanation: "Dengan penemuan terbaru, Saturnus memimpin daftar planet dengan jumlah bulan terbanyak di tata surya, yaitu sebanyak 146 satelit terkonfirmasi oleh IAU.",
          hint: "Planet pemilik cincin megah ini memegang rekor satelit terbanyak."
        },
        {
          id: "sat_q7",
          difficulty: 3,
          question: "Pola awan misterius berbentuk geometris apakah yang ditemukan oleh para ilmuwan di atmosfer kutub utara Saturnus?",
          options: [
            "Pola heksagon (segi enam raksasa)",
            "Pola lingkaran spiral sempurna",
            "Pola bintang bersegi lima",
            "Pola segitiga sama sisi"
          ],
          correctAnswer: 0,
          explanation: "Di kutub utara Saturnus terdapat struktur gelombang atmosfer abadi berbentuk heksagon (segi enam) dengan diameter selebar 30.000 km.",
          hint: "Bangun datar bersisi 6 yang bentuknya mirip sarang lebah madu."
        },
        {
          id: "sat_q8",
          difficulty: 3,
          question: "Wahana antariksa kerja sama NASA dan ESA yang meneliti Saturnus dan melepaskan robot pendarat Huygens ke Titan bernama...",
          options: [
            "Cassini-Huygens",
            "Apollo 11",
            "New Horizons",
            "Curiosity"
          ],
          correctAnswer: 0,
          explanation: "Misi Cassini-Huygens menjelajahi sistem Saturnus selama 13 tahun (2004–2017) dan memberikan data revolusioner tentang cincin, Titan, dan Enceladus.",
          hint: "Nama astronom Italia-Prancis terkenal pengamat divisi cincin Saturnus."
        }
      ]
    },

    {
      id: "uranus",
      name: "Uranus",
      order: 7,
      category: "Planet Raksasa Es (Ice Giant)",
      tagline: "Raksasa Es yang Menggelinding dengan Poros Miring 98 Derajat",
      color: "#38bdf8",
      glowColor: "rgba(56, 189, 248, 0.4)",
      sizeScale: 1.4,
      orbitDistanceRatio: 19.2,
      unlockRequirement: 6,
      badge: {
        id: "badge_uranus",
        title: "Penjelajah Poros Rebahan",
        desc: "Memahami anomali kemiringan rotasi ekstrem dan klasifikasi raksasa es Uranus."
      },
      summary: "Uranus adalah planet ketujuh dari Matahari dan planet pertama yang ditemukan dengan teleskop oleh William Herschel pada 1781. Uranus diklasifikasikan sebagai 'Raksasa Es' karena mantelnya didominasi es air, amonia, dan metana. Ciri paling uniknya adalah kemiringan poros rotasi mencapai sekitar 98 derajat, sehingga Uranus tampak 'menggelinding' di bidang orbitnya!",
      stats: {
        distanceFromSun: "Sekitar 2,9 miliar km (19,2 AU)",
        diameter: "Sekitar 50.724 km (4 kali diameter Bumi)",
        surfaceTemp: "Mencapai -224°C (salah satu yang terdingin)",
        rotationPeriod: "Sekitar 17 jam 14 menit (rotasi retrograd)",
        revolutionPeriod: "Sekitar 84 tahun Bumi",
        satellites: "28 satelit terkonfirmasi (sebagian dinamai tokoh Shakespeare)",
        atmosphere: "Hidrogen, Helium, dan gas Metana (warna cyan)"
      },
      notebookFacts: [
        "Kemiringan poros 98° menyebabkan masing-masing kutub Uranus mengalami siang hari terus menerus selama 42 tahun, diikuti 42 tahun malam!",
        "Gas metana di atmosfer Uranus menyerap spektrum cahaya merah dan memantulkan warna biru-kehijauan (cyan).",
        "Uranus memiliki 13 cincin tipis yang gelap, berbeda dari cincin es terang milik Saturnus.",
        "Satelit-satelit Uranus diberi nama berdasarkan karakter dari karya sastra William Shakespeare dan Alexander Pope (seperti Miranda, Titania, Puck)."
      ],
      mechanicType: "card_match",
      mechanicTitle: "Tilted Match Cards: Rahasia Poros & Raksasa Es",
      mechanicInstruction: "Cocokkan kartu karakteristik unik Uranus: poros miring 98°, atmosfer metana biru, dan raksasa es dingin!",
      matchPairs: [
        { id: "pair1", title: "Kemiringan Poros 98°", desc: "Planet berotasi menggelinding di bidang orbitnya, menimbulkan musim ekstrem 42 tahun." },
        { id: "pair2", title: "Gas Metana (CH4)", desc: "Menyerap cahaya merah matahari dan memantulkan warna biru kehijauan yang khas." },
        { id: "pair3", title: "Klasifikasi Raksasa Es", desc: "Komposisi kaya akan mantel air beku, es amonia, dan metana di atas inti berbatu." },
        { id: "pair4", title: "Satelit Miranda", desc: "Bulan Uranus dengan tebing ngarai terdalam di tata surya (Verona Rupes setinggi 20 km)." }
      ],
      questions: [
        {
          id: "ura_q1",
          difficulty: 1,
          question: "Apakah keunikan paling menonjol pada cara berputar (rotasi) planet Uranus pada porosnya?",
          options: [
            "Poros rotasinya miring sekitar 98°, sehingga Uranus berputar seperti bola yang menggelinding",
            "Uranus tidak berputar sama sekali selama miliaran tahun",
            "Uranus berputar melompat-lompat zig-zag",
            "Uranus berputar dengan kecepatan cahaya"
          ],
          correctAnswer: 0,
          explanation: "Sumbu rotasi Uranus miring 97,77° (hampir sejajar bidang orbit), diduga akibat tabrakan raksasa dengan protoplanet berukuran Bumi di masa awal tata surya.",
          hint: "Sumbu planet ini miring hampir 90 derajat rebahan ke samping."
        },
        {
          id: "ura_q2",
          difficulty: 1,
          question: "Senyawa gas apakah di atmosfer atas Uranus yang menyerap cahaya merah matahari sehingga membuat planet ini tampak berwarna biru kehijauan (cyan)?",
          options: [
            "Gas Metana (CH4)",
            "Gas Karbon Monoksida",
            "Uap raksa cair",
            "Gas Oksigen murni"
          ],
          correctAnswer: 0,
          explanation: "Metana di atmosfer atas Uranus menyerap panjang gelombang merah dari cahaya matahari dan memantulkan kembali cahaya biru-hijau ke angkasa.",
          hint: "Gas hidrokarbon alami yang berawalan dari huruf 'M'."
        },
        {
          id: "ura_q3",
          difficulty: 2,
          question: "Dalam astronomi modern, Uranus dan Neptunus diklasifikasikan ke dalam kategori khusus yang disebut...",
          options: [
            "Raksasa Es (Ice Giants)",
            "Planet Terestrial Berbatu",
            "Bintang Kerdil Putih",
            "Asteroid Sabuk Utama"
          ],
          correctAnswer: 0,
          explanation: "Berbeda dari Jupiter dan Saturnus yang mayoritas hidrogen/helium cair ('Gas Giants'), Uranus dan Neptunus kaya akan unsur yang lebih berat seperti es air, amonia, dan metana ('Ice Giants').",
          hint: "Istilah raksasa yang mengandung kata 'Es'."
        },
        {
          id: "ura_q4",
          difficulty: 2,
          question: "Akibat kemiringan sumbu 98°, berapa lama satu kutub di Uranus mengalami siang hari terus menerus selama revolusinya?",
          options: [
            "Sekitar 42 tahun siang berturut-turut",
            "Tepat 24 jam sehari",
            "Hanya 7 hari seminggu",
            "Tidak pernah mengalami siang sama sekali"
          ],
          correctAnswer: 0,
          explanation: "Karena periode orbitnya 84 tahun, separuh orbit (~42 tahun) menghadapkan salah satu kutub terus-menerus ke Matahari, sementara kutub lain mengalami malam abadi 42 tahun.",
          hint: "Separuh dari periode revolusi 84 tahun Uranus."
        },
        {
          id: "ura_q5",
          difficulty: 1,
          question: "Siapakah astronom yang pertama kali menemukan planet Uranus menggunakan teleskop buatannya pada tahun 1781?",
          options: [
            "William Herschel",
            "Galileo Galilei",
            "Isaac Newton",
            "Albert Einstein"
          ],
          correctAnswer: 0,
          explanation: "Sir William Herschel mengamati Uranus pada 13 Maret 1781 dari kebun rumahnya di Bath, Inggris, awalnya mengira benda tersebut adalah sebuah komet baru.",
          hint: "Astronom Inggris berdarah Jerman penemu radiasi inframerah."
        },
        {
          id: "ura_q6",
          difficulty: 2,
          question: "Berapa lama waktu yang dibutuhkan Uranus untuk mengelilingi Matahari satu putaran penuh (satu tahun Uranus)?",
          options: [
            "Sekitar 84 tahun Bumi",
            "Sekitar 12 tahun Bumi",
            "Sekitar 365 hari",
            "Sekitar 500 tahun Bumi"
          ],
          correctAnswer: 0,
          explanation: "Dengan jarak hampir 3 miliar kilometer dari Matahari, Uranus memerlukan waktu sekitar 84 tahun waktu Bumi untuk menyelesaikan satu putaran orbit.",
          hint: "Setara dengan rata-rata umur harapan hidup manusia seumur hidup."
        },
        {
          id: "ura_q7",
          difficulty: 3,
          question: "Satelit-satelit Uranus memiliki tradisi penamaan yang unik dalam tata surya kita, yaitu dinamai berdasarkan...",
          options: [
            "Tokoh-tokoh dalam karya sastra William Shakespeare dan Alexander Pope",
            "Nama-nama presiden Amerika Serikat",
            "Nama jenis bunga langka di dunia",
            "Nama dewa perang Romawi kuno"
          ],
          correctAnswer: 0,
          explanation: "Bulan-bulan Uranus seperti Oberon, Titania, Miranda, Ariel, dan Puck dinamai dari karakter dongeng dan teater karya William Shakespeare serta puisi Alexander Pope.",
          hint: "Penulis naskah drama terkenal dari Inggris pembuat kisah Romeo and Juliet."
        },
        {
          id: "ura_q8",
          difficulty: 3,
          question: "Satelit Uranus yang memiliki kenampakan tebing es raksasa Verona Rupes (tebing tertinggi di tata surya, ~20 km) bernama...",
          options: [
            "Miranda",
            "Titan",
            "Phobos",
            "Europa"
          ],
          correctAnswer: 0,
          explanation: "Miranda adalah satelit terkecil dari 5 bulan utama Uranus dengan geologi ekstrem dan tebing Verona Rupes setinggi lebih dari 20 kilometer!",
          hint: "Nama tokoh putri penyihir Prospero dalam drama The Tempest."
        }
      ]
    },

    {
      id: "neptune",
      name: "Neptunus",
      order: 8,
      category: "Planet Raksasa Es (Ice Giant)",
      tagline: "Penguasa Samudra Biru Kosmik dengan Badai Angin Supersonik",
      color: "#2563eb",
      glowColor: "rgba(37, 99, 235, 0.4)",
      sizeScale: 1.35,
      orbitDistanceRatio: 30.1,
      unlockRequirement: 7,
      badge: {
        id: "badge_neptune",
        title: "Penjelajah Badai Supersonik",
        desc: "Menembus angin tercepat tata surya dan menghitung tahun terpanjang Neptunus."
      },
      summary: "Neptunus adalah planet kedelapan sekaligus planet terjauh resmi dari Matahari dalam tata surya kita. Diberi nama dari dewa laut Romawi karena warnanya yang biru safir pekat. Neptunus memiliki cuaca paling liar dan ekstrem: kecepatan angin di atmosfernya bisa melampaui 2.000 km/jam (lebih cepat dari kecepatan suara di Bumi)! Satu tahun di Neptunus setara dengan 165 tahun Bumi.",
      stats: {
        distanceFromSun: "Sekitar 4,5 miliar km (30,1 AU)",
        diameter: "Sekitar 49.244 km (sedikit lebih kecil dari Uranus)",
        surfaceTemp: "Sekitar -218°C",
        rotationPeriod: "Sekitar 16 jam 6 menit",
        revolutionPeriod: "Sekitar 164,8 tahun Bumi (hampir 165 tahun)",
        satellites: "16 satelit terkonfirmasi (termasuk Triton yang membeku)",
        atmosphere: "Hidrogen, Helium, dan jejak Metana pekat"
      },
      notebookFacts: [
        "Neptunus adalah satu-satunya planet yang posisinya diprediksi lewat perhitungan matematika sebelum dilihat melalui teleskop pada 1846!",
        "Angin di atmosfer Neptunus berhembus hingga kecepatan lebih dari 2.100 km/jam, angin terkencang di tata surya.",
        "Sejak ditemukan tahun 1846, Neptunus baru menyelesaikan satu putaran orbit penuh mengelilingi Matahari pada tahun 2011!",
        "Triton, satelit terbesar Neptunus, mengorbit berlawanan arah dengan rotasi planetnya (retrograd) dan memiliki geiser nitrogen cair."
      ],
      mechanicType: "supersonic_storm",
      mechanicTitle: "Supersonic Storm Run: Tantangan Angin 2.000 Km/Jam",
      mechanicInstruction: "Kalkulasikan jarak orbit 30 AU dan hindari pusat pusaran badai Great Dark Spot dengan memilih kalkulasi navigasi yang tepat!",
      questions: [
        {
          id: "nep_q1",
          difficulty: 1,
          question: "Berapa lama waktu yang dibutuhkan planet Neptunus untuk menyelesaikan satu kali orbit penuh mengelilingi Matahari (1 tahun Neptunus)?",
          options: [
            "Sekitar 165 tahun Bumi",
            "Sekitar 84 tahun Bumi",
            "Sekitar 365 hari",
            "Sekitar 29 tahun Bumi"
          ],
          correctAnswer: 0,
          explanation: "Karena berjarak sekitar 4,5 miliar km (30 AU) dari Matahari, satu tahun di Neptunus setara dengan sekitar 164,8 tahun waktu di Bumi.",
          hint: "Hampir dua abad kalender kehidupan manusia di Bumi."
        },
        {
          id: "nep_q2",
          difficulty: 1,
          question: "Planet Neptunus memegang rekor cuaca paling ekstrem di tata surya dalam hal...",
          options: [
            "Kecepatan angin atmosfer tercepat (mencapai lebih dari 2.000 km/jam)",
            "Suhu permukaan paling panas di tata surya",
            "Letusan gunung berapi magma terbanyak",
            "Hujan asam paling mematikan"
          ],
          correctAnswer: 0,
          explanation: "Angin di atmosfer Neptunus bertiup dengan kecepatan supersonik melebihi 2.100 km/jam, tiga kali lebih cepat dari angin tornado terdahsyat di Bumi!",
          hint: "Kecepatan tiupan gas atmosfernya bahkan melebihi kecepatan suara."
        },
        {
          id: "nep_q3",
          difficulty: 2,
          question: "Bagaimanakah cara para astronom pertama kali menemukan keberadaan planet Neptunus pada tahun 1846?",
          options: [
            "Ditemukan melalui prediksi perhitungan matematika gravitasi sebelum diamati dengan teleskop",
            "Terlihat secara kebetulan oleh pelaut dengan mata telanjang di tengah malam",
            "Ditemukan oleh robot penjelajah darat yang mendarat di sana",
            "Diberitahukan oleh peta kuno kerajaan Romawi"
          ],
          correctAnswer: 0,
          explanation: "Astronom Urbain Le Verrier dan John Couch Adams menghitung bahwa keanehan orbit Uranus disebabkan tarikan gravitasi planet misterius. Johann Galle kemudian mengarahkan teleskop dan menemukan Neptunus persis di koordinat prediksi!",
          hint: "Keberhasilannya menjadi kemenangan besar hukum gravitasi Newton dan matematika kalkulus."
        },
        {
          id: "nep_q4",
          difficulty: 2,
          question: "Apakah nama satelit terbesar milik Neptunus yang mengorbit dengan arah retrograd (berlawanan arah jarum jam) dan memiliki geiser nitrogen cair aktif?",
          options: [
            "Triton",
            "Titan",
            "Ganymede",
            "Charon"
          ],
          correctAnswer: 0,
          explanation: "Triton adalah satelit terbesar Neptunus, bersuhu -235°C, dan diduga merupakan objek Sabuk Kuiper purba yang tertangkap oleh gravitasi Neptunus.",
          hint: "Nama dewa laut putra Poseidon yang membawa senjata trisula berawalan huruf 'T'."
        },
        {
          id: "nep_q5",
          difficulty: 1,
          question: "Mengapa Neptunus tampak berwarna biru safir yang jauh lebih cerah dan pekat daripada warna biru pucat Uranus?",
          options: [
            "Karena adanya komponen misterius tambahan dalam atmosfer metana Neptunus yang memperkuat warna biru",
            "Karena permukaannya berupa samudra air tawar cair yang luas",
            "Karena Neptunus dilapisi cat buatan astronot purba",
            "Karena menerima cahaya merah paling terang dari Matahari"
          ],
          correctAnswer: 0,
          explanation: "Walaupun atmosfer keduanya kaya akan gas metana, Neptunus memiliki konstituen atmosfer yang lebih pekat dan awan aktif yang membuatnya biru cerah.",
          hint: "Interaksi komponen gas di atmosfer dengan cahaya matahari."
        },
        {
          id: "nep_q6",
          difficulty: 2,
          question: "Ketika wahana Voyager 2 melintas di dekat Neptunus pada tahun 1989, para ilmuwan mendeteksi badai raksasa gelap bernama...",
          options: [
            "Great Dark Spot (Bintik Gelap Raksasa)",
            "Great Red Spot (Bintik Merah Raksasa)",
            "Badai Siklon Katrina",
            "Lubang Hitam Mini"
          ],
          correctAnswer: 0,
          explanation: "Voyager 2 mengabadikan 'Great Dark Spot', sistem badai antisiklonik berukuran sebesar planet Bumi di belahan selatan atmosfer Neptunus.",
          hint: "Bintik berwarna gelap di permukaan atmosfer Neptunus."
        },
        {
          id: "nep_q7",
          difficulty: 3,
          question: "Berapakah jarak rata-rata orbit planet Neptunus dari Matahari dalam satuan astronomi (Satuan Astronomi / AU)?",
          options: [
            "Sekitar 30 AU (30 kali lipat jarak Bumi-Matahari)",
            "Tepat 1 AU",
            "Sekitar 5 AU",
            "Sekitar 100 AU"
          ],
          correctAnswer: 0,
          explanation: "1 AU = jarak Bumi ke Matahari (~150 juta km). Neptunus berjarak sekitar 4,5 miliar km, setara dengan sekitar 30,1 AU.",
          hint: "Angka bulat puluhan tiga kali lipat dari jarak Saturnus."
        },
        {
          id: "nep_q8",
          difficulty: 3,
          question: "Satu-satunya wahana antariksa buatan manusia yang pernah berhasil terbang lintas dekat (flyby) mengamati Neptunus adalah...",
          options: [
            "Voyager 2 (pada tahun 1989)",
            "Apollo 13",
            "Curiosity Rover",
            "Sputnik 1"
          ],
          correctAnswer: 0,
          explanation: "Voyager 2 adalah satu-satunya wahana antariksa yang pernah mengunjungi Neptunus dan Uranus hingga hari ini, mengirimkan citra jarak dekat pertamanya.",
          hint: "Wahana kembar Voyager 1 yang menjelajah hingga ke planet-planet es luar."
        }
      ]
    },

    {
      id: "pluto_belt",
      name: "Pluto & Sabuk Asteroid",
      order: 9,
      category: "Planet Kerdil & Objek Sabuk Tata Surya",
      tagline: "Penjelajahan Batas: Misteri Pluto & Sabuk Asteroid",
      color: "#94a3b8",
      glowColor: "rgba(148, 163, 184, 0.4)",
      sizeScale: 0.25,
      orbitDistanceRatio: 39.5,
      unlockRequirement: 8,
      badge: {
        id: "badge_pluto",
        title: "Detektif Sabuk Kuiper",
        desc: "Menguasai 3 kriteria planet resmi IAU 2006 dan rahasia Sabuk Asteroid."
      },
      summary: "Mengapa Pluto yang dulu disebut planet ke-9 kini berstatus 'Planet Kerdil'? Pada tahun 2006, Persatuan Astronomi Internasional (IAU) menetapkan 3 syarat untuk disebut planet resmi. Pluto memenuhi dua syarat pertama (mengorbit matahari dan berbentuk bulat), namun gagal memenuhi syarat ketiga: Pluto belum membersihkan lingkungan orbitnya dari benda-benda es lain di Sabuk Kuiper. Di samping itu, di antara orbit Mars dan Jupiter terdapat Sabuk Asteroid yang berisi jutaan pecahan batuan antariksa purba!",
      stats: {
        location: "Sabuk Kuiper (Pluto) & Antara Mars-Jupiter (Sabuk Asteroid)",
        plutoDiameter: "Sekitar 2.376 km (lebih kecil dari Bulan kita)",
        plutoOrbit: "Sekitar 248 tahun Bumi (orbit lonjong miring 17°)",
        largestAsteroid: "Ceres (juga berstatus planet kerdil, diameter ~940 km)",
        plutoMoons: "5 satelit (Charon, Styx, Nix, Kerberos, Hydra)",
        classificationYear: "Resolusi IAU Sidang Praha Agustus 2006"
      },
      notebookFacts: [
        "3 Syarat Planet Resmi IAU: (1) Mengorbit Matahari, (2) Memiliki massa cukup sehingga gravitasinya membuat bentuknya bulat, (3) Telah membersihkan lingkungan sekitar orbitnya.",
        "Pluto memiliki dataran es nitrogen berbentuk hati raksasa bernama Tombaugh Regio.",
        "Charon, bulan terbesar Pluto, berukuran separuh ukuran Pluto sehingga keduanya sering disebut 'sistem planet kerdil ganda'.",
        "Sabuk Asteroid bukanlah ladang tabrakan rapat seperti di film fiksi; jarak rata-rata antar asteroid di sana mencapai jutaan kilometer!"
      ],
      mechanicType: "dwarf_detective",
      mechanicTitle: "Dwarf Planet Detective: Verifikasi 3 Kriteria IAU",
      mechanicInstruction: "Tentukan apakah objek antariksa memenuhi 3 syarat planet resmi IAU atau tergolong Planet Kerdil / Asteroid!",
      iauCriteria: [
        { id: "crit1", rule: "1. Mengorbit Matahari secara langsung (bukan satelit pengiring planet lain)" },
        { id: "crit2", rule: "2. Memiliki massa gravitasi cukup sehingga berotasi membentuk bola bulat (kesetimbangan hidrostatis)" },
        { id: "crit3", rule: "3. Telah 'membersihkan lingkungan orbitnya' (cleared the neighborhood) dari batuan/objek lain" }
      ],
      questions: [
        {
          id: "plu_q1",
          difficulty: 1,
          question: "Berdasarkan keputusan resmi International Astronomical Union (IAU) pada tahun 2006, mengapakah Pluto tidak lagi diklasifikasikan sebagai planet utama ke-9?",
          options: [
            "Karena Pluto belum membersihkan lingkungan sekitar orbitnya dari objek-objek lain di Sabuk Kuiper",
            "Karena Pluto meledak hancur berkeping-keping",
            "Karena Pluto tidak berputar mengelilingi Matahari",
            "Karena Pluto berbentuk kubus kotak dan tidak bulat"
          ],
          correctAnswer: 0,
          explanation: "Pluto berbagi orbit dengan ribuan objek es di Sabuk Kuiper dan massanya tidak dominan membersihkan jalurnya, sehingga tidak memenuhi kriteria ke-3 planet IAU.",
          hint: "Fokus pada syarat ketiga mengenai 'pembersihan area orbit sekitar'."
        },
        {
          id: "plu_q2",
          difficulty: 1,
          question: "Di manakah letak Sabuk Asteroid utama (Main Asteroid Belt) yang berisi jutaan bongkahan batuan sisa pembentukan tata surya?",
          options: [
            "Terletak di antara orbit planet Mars dan Jupiter",
            "Terletak di antara Bumi dan Bulan",
            "Terletak di dalam atmosfer Matahari",
            "Terletak di luar seluruh galaksi Bima Sakti"
          ],
          correctAnswer: 0,
          explanation: "Sabuk Asteroid utama berada di wilayah luas pemisah antara planet-planet batuan dalam (Mars) dan planet-planet gas luar (Jupiter).",
          hint: "Berada tepat di antara planet dalam terakhir dan planet luar pertama."
        },
        {
          id: "plu_q3",
          difficulty: 2,
          question: "Objek terbesar di Sabuk Asteroid yang berbentuk bulat dan juga resmi diklasifikasikan sebagai planet kerdil adalah...",
          options: [
            "Ceres",
            "Halley",
            "Vesta",
            "Eris"
          ],
          correctAnswer: 0,
          explanation: "Ceres memiliki diameter sekitar 940 km dan berbentuk bulat karena gravitasinya sendiri, menjadikannya satu-satunya planet kerdil di Sabuk Asteroid dalam.",
          hint: "Nama dewi pertanian Romawi yang berawalan huruf 'C'."
        },
        {
          id: "plu_q4",
          difficulty: 2,
          question: "Apakah nama satelit terbesar milik Pluto yang berukuran hampir separuh ukuran Pluto dan saling mengunci gravitasi (tidal locked)?",
          options: [
            "Charon",
            "Titan",
            "Phobos",
            "Europa"
          ],
          correctAnswer: 0,
          explanation: "Charon sangat besar dibandingkan Pluto (setengah diameter Pluto), sehingga pusat massa orbit keduanya berada di ruang kosong di antara mereka.",
          hint: "Nama pendayung perahu penyeberang arwah dalam mitologi Yunani."
        },
        {
          id: "plu_q5",
          difficulty: 1,
          question: "Ketika wahana antariksa New Horizons terbang melintasi Pluto pada tahun 2015, foto spektakuler apakah yang terlihat di permukaan Pluto?",
          options: [
            "Dataran es nitrogen berbentuk lambang hati raksasa (Tombaugh Regio)",
            "Kota kaca bercahaya",
            "Lautan lava api mendidih",
            "Patung batu raksasa"
          ],
          correctAnswer: 0,
          explanation: "Citra resolusi tinggi New Horizons memperlihatkan 'Tombaugh Regio', sebuah dataran es glasial nitrogen berwarna terang yang menyerupai bentuk hati cinta.",
          hint: "Bentuk geometris yang melambangkan kasih sayang."
        },
        {
          id: "plu_q6",
          difficulty: 2,
          question: "Wilayah di luar orbit Neptunus yang dipenuhi ribuan objek beku, komet purba, dan planet kerdil seperti Pluto dan Eris disebut...",
          options: [
            "Sabuk Kuiper (Kuiper Belt)",
            "Sabuk Asteroid Utama",
            "Cincin Saturnus",
            "Palung Samudra"
          ],
          correctAnswer: 0,
          explanation: "Sabuk Kuiper adalah piringan raksasa di tepi luar tata surya yang membentang dari jarak 30 AU hingga sekitar 50 AU dari Matahari.",
          hint: "Dinamai dari nama astronom Gerard Kuiper."
        },
        {
          id: "plu_q7",
          difficulty: 3,
          question: "Berapa lama waktu yang dibutuhkan Pluto untuk menyelesaikan satu kali orbit penuh mengelilingi Matahari?",
          options: [
            "Sekitar 248 tahun Bumi",
            "Sekitar 88 hari",
            "Sekitar 365 hari",
            "Sekitar 10 tahun Bumi"
          ],
          correctAnswer: 0,
          explanation: "Orbit Pluto sangat jauh dan lonjong, membutuhkan sekitar 248 tahun waktu Bumi untuk menyelesaikan satu putaran penuh.",
          hint: "Lebih dari dua abad kalender kehidupan di Bumi."
        },
        {
          id: "plu_q8",
          difficulty: 3,
          question: "Manakah di bawah ini yang merupakan daftar tiga kriteria resmi planet menurut definisi IAU 2006?",
          options: [
            "(1) Mengorbit Matahari, (2) Berbentuk bulat seimbang secara hidrostatik, (3) Telah membersihkan area lingkungan orbitnya",
            "(1) Memiliki cincin, (2) Memiliki air laut, (3) Memiliki minimal 1 bulan",
            "(1) Berwarna biru, (2) Berpenghuni alien, (3) Berukuran lebih besar dari Jupiter",
            "(1) Berputar dari barat ke timur, (2) Mengorbit bulan, (3) Berpermukaan emas"
          ],
          correctAnswer: 0,
          explanation: "Tiga pilar kriteria IAU 2006 menetapkan: objek harus mengelilingi bintang induk, memiliki massa cukup untuk bentuk bulat, dan dominan secara gravitasi di orbitnya.",
          hint: "Tiga syarat sains yang sudah kita pelajari di modul ringkasan materi."
        }
      ]
    },

    {
      id: "commander_exam",
      name: "Ujian Akhir Komandan",
      order: 10,
      category: "Evaluasi Komprehensif Misi Antariksa",
      tagline: "Uji Kecakapan Komandan Penjelajah Tata Surya",
      color: "#ec4899",
      glowColor: "rgba(236, 72, 153, 0.4)",
      sizeScale: 1.5,
      orbitDistanceRatio: 45.0,
      unlockRequirement: 9,
      badge: {
        id: "badge_commander",
        title: "Komandan Agung Tata Surya",
        desc: "Lulus Ujian Komandan Antariksa dengan menguasai seluruh konsep sains astronomi."
      },
      summary: "Selamat datang di Ujian Akhir Komandan Antariksa! Misi ini menguji pemahaman komprehensifmu tentang seluruh tata surya: perbandingan planet dalam vs planet luar, dinamika rotasi dan revolusi, skala ukuran, hingga misteri planet kerdil. Buktikan bahwa kamu layak menjadi Komandan Penerbang Antariksa Bintang Tiga!",
      stats: {
        examScope: "8 Planet Utama, Pluto, Asteroid, Matahari & Fenomena Fisika",
        targetScore: "Minimal 75% untuk mendapatkan Bintang 3 Komandan",
        challengeType: "Multi-domain synthesis, skenario eksplorasi, dan penalaran sains"
      },
      notebookFacts: [
        "Planet-planet terestrial (kebumian) berukuran lebih kecil, berbatu, padat, dan berada di dekat Matahari.",
        "Planet-planet jovian (gas & es) berukuran raksasa, tidak berpermukaan padat, dan memiliki banyak satelit serta cincin.",
        "Hukum gravitasi mengatur bahwa semakin jauh jarak suatu planet dari Matahari, semakin lambat kecepatan orbit dan semakin lama periode revolusinya.",
        "Bumi adalah satu-satunya planet yang berada di 'Goldilocks Zone' (Zona Layak Huni) dengan air cair stabil di permukaannya."
      ],
      mechanicType: "commander_exam",
      mechanicTitle: "Commanders Flight Evaluation: Ujian Sertifikasi Antariksa",
      mechanicInstruction: "Jawab kombinasi skenario komando antarplanet untuk mendapatkan lencana tertinggi Komandan Antariksa!",
      questions: [
        {
          id: "cmd_q1",
          difficulty: 2,
          question: "Manakah kelompok di bawah ini yang seluruh anggotanya tergolong sebagai 'Planet Dalam' (Planet Terestrial)?",
          options: [
            "Merkurius, Venus, Bumi, dan Mars",
            "Jupiter, Saturnus, Uranus, dan Neptunus",
            "Bumi, Mars, Jupiter, dan Saturnus",
            "Merkurius, Venus, Saturnus, dan Pluto"
          ],
          correctAnswer: 0,
          explanation: "Planet Dalam berada di sebelah dalam sabuk asteroid: Merkurius, Venus, Bumi, dan Mars. Semuanya berstruktur padat dan berbatu.",
          hint: "Empat planet terdekat dengan Matahari sebelum Sabuk Asteroid."
        },
        {
          id: "cmd_q2",
          difficulty: 2,
          question: "Manakah urutan planet yang benar dari yang terdekat hingga yang terjauh dari Matahari?",
          options: [
            "Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus",
            "Merkurius, Bumi, Venus, Mars, Saturnus, Jupiter, Neptunus, Uranus",
            "Venus, Merkurius, Bumi, Mars, Jupiter, Uranus, Saturnus, Neptunus",
            "Bumi, Mars, Merkurius, Venus, Jupiter, Saturnus, Neptunus, Uranus"
          ],
          correctAnswer: 0,
          explanation: "Urutan resmi 8 planet dari Matahari: Merkurius (1), Venus (2), Bumi (3), Mars (4), Jupiter (5), Saturnus (6), Uranus (7), dan Neptunus (8).",
          hint: "Gunakan jembatan keledai: Me-Ve-Bu-Ma-Ju-Sat-U-Nep."
        },
        {
          id: "cmd_q3",
          difficulty: 3,
          question: "Skenario Komando: Sebuah wahana antariksa mendarat di suatu planet dan mendeteksi: suhu 465°C, atmosfer 96% CO2, dan Matahari terbit dari barat. Planet apakah ini?",
          options: [
            "Venus",
            "Merkurius",
            "Mars",
            "Jupiter"
          ],
          correctAnswer: 0,
          explanation: "Data suhu ~465°C, atmosfer dominan CO2 (efek rumah kaca), dan rotasi retrograd (Matahari terbit dari barat) adalah ciri khas mutlak planet Venus.",
          hint: "Planet terpanas yang berputar terbalik dari timur ke barat."
        },
        {
          id: "cmd_q4",
          difficulty: 2,
          question: "Bagaimanakah hubungan antara jarak suatu planet dari Matahari dengan periode revolusinya (lama tahun planet)?",
          options: [
            "Semakin jauh jarak planet dari Matahari, semakin panjang periode revolusinya",
            "Semakin jauh jarak planet, semakin cepat waktu revolusinya",
            "Semua planet memiliki waktu revolusi yang persis sama",
            "Jarak tidak mempengaruhi orbit planet sama sekali"
          ],
          correctAnswer: 0,
          explanation: "Sesuai Hukum Kepler, orbit yang lebih jauh memiliki lintasan keliling yang lebih panjang dan tarikan gravitasi Matahari yang lebih lemah, sehingga revolusinya lebih lama.",
          hint: "Bandingkan Merkurius (88 hari) dengan Neptunus (165 tahun)."
        },
        {
          id: "cmd_q5",
          difficulty: 2,
          question: "Di antara pilihan planet berikut ini, manakah dua planet yang sama sekali tidak memiliki satelit alami?",
          options: [
            "Merkurius dan Venus",
            "Bumi dan Mars",
            "Mars dan Jupiter",
            "Uranus dan Neptunus"
          ],
          correctAnswer: 0,
          explanation: "Merkurius dan Venus adalah dua planet terdalam di tata surya yang tidak memiliki satelit alami sama sekali.",
          hint: "Dua planet terdekat dengan Matahari."
        },
        {
          id: "cmd_q6",
          difficulty: 3,
          question: "Apakah perbedaan mendasar antara fenomena Rotasi Bumi dan Revolusi Bumi?",
          options: [
            "Rotasi adalah putaran Bumi pada porosnya (penyebab siang/malam), sedangkan Revolusi adalah peredaran Bumi mengelilingi Matahari (penyebab pergantian musim)",
            "Rotasi menyebabkan pergantian tahun, sedangkan revolusi menyebabkan pergantian menit",
            "Rotasi terjadi sebulan sekali, sedangkan revolusi terjadi sehari sekali",
            "Keduanya adalah istilah yang sama persis tanpa perbedaan"
          ],
          correctAnswer: 0,
          explanation: "Rotasi = berputar pada poros sendiri (24 jam, siang-malam). Revolusi = mengitari Matahari (365,25 hari, musim & tahun).",
          hint: "Pikirkan putaran gasing sendiri (rotasi) vs mengitari lintasan sirkuit (revolusi)."
        },
        {
          id: "cmd_q7",
          difficulty: 3,
          question: "Mengapa Sabuk Asteroid yang terletak antara Mars dan Jupiter tidak pernah berhasil menggumpal membentuk satu buah planet yang utuh?",
          options: [
            "Karena gangguan gaya gravitasi raksasa dari planet Jupiter yang mengacaukan penggabungan batuan",
            "Karena terlalu dekat dengan panas Matahari",
            "Karena batuan di sana semuanya terbuat dari es gas yang mudah menguap",
            "Karena ditiup oleh badai angin Neptunus"
          ],
          correctAnswer: 0,
          explanation: "Gravitasi masif Jupiter terus mengaduk materi di sabuk asteroid, menghasilkan kecepatan tubrukan tinggi yang justru memecah batuan alih-alih menyatukannya menjadi planet.",
          hint: "Planet terbesar di dekatnya memiliki pengaruh gravitasi pengacau yang dominan."
        },
        {
          id: "cmd_q8",
          difficulty: 3,
          question: "Skenario Penyelidikan: Komandan mendeteksi sebuah benda langit yang mengorbit Matahari dan berbentuk bulat, namun jalurnya dipenuhi ribuan kepingan es lain. Benda ini diklasifikasikan sebagai...",
          options: [
            "Planet Kerdil (Dwarf Planet)",
            "Planet Terestrial Utama",
            "Satelit Alami (Bulan)",
            "Komet Berekor Api"
          ],
          correctAnswer: 0,
          explanation: "Karena berbentuk bulat dan mengorbit matahari tetapi belum membersihkan lingkungan sekitarnya, sesuai definisi IAU 2006 objek tersebut adalah Planet Kerdil.",
          hint: "Sama persis dengan status Pluto dan Ceres."
        }
      ]
    }
  ]
};
