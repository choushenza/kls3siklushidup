import { OrganismData, QuizQuestion, SequenceLevel, ConservationCard } from '../types';

export const ORGANISMS_DATA: OrganismData[] = [
  {
    id: 'kupu-kupu',
    name: 'Kupu-Kupu Cantik',
    category: 'hewan',
    type: 'metamorfosis-sempurna',
    summary: 'Mengalami perubahan bentuk yang sangat besar dan melewati masa diam (kepompong/pupa).',
    habitat: 'Taman bunga, kebun, dan pepohonan',
    hasPupa: true,
    stages: [
      {
        id: 'kupu-1-telur',
        stageNumber: 1,
        name: 'Telur Kecil',
        badge: 'Tahap 1',
        description: 'Induk kupu-kupu menaruh telur kecilnya di balik permukaan daun hijau yang segar.',
        keyPoints: [
          'Ukurannya sangat kecil dan bulat/lonjong.',
          'Ditempel erat di daun agar tidak jatuh ditiup angin.',
          'Menetas dalam waktu 3 hingga 5 hari.'
        ],
        funFact: 'Induk kupu-kupu memilih daun yang nanti bisa langsung dimakan oleh bayinya!',
        svgType: 'kupu-telur',
        colorTheme: {
          bg: 'bg-emerald-50',
          border: 'border-emerald-300',
          text: 'text-emerald-900',
          accent: 'bg-emerald-500'
        }
      },
      {
        id: 'kupu-2-ulat',
        stageNumber: 2,
        name: 'Ulat yang Lapar (Larva)',
        badge: 'Tahap 2',
        description: 'Telur menetas menjadi ulat mungil. Ulat suka sekali makan daun hijau untuk tumbuh besar.',
        keyPoints: [
          'Memiliki tubuh berbuku-buku dan banyak kaki kecil.',
          'Makan daun secara teratur dan berganti kulit beberapa kali.',
          'Sangat penting sebagai makanan burung di alam bebas.'
        ],
        funFact: 'Ulat bisa makan berulang kali hingga berat tubuhnya bertambah ratusan kali lipat!',
        svgType: 'kupu-ulat',
        colorTheme: {
          bg: 'bg-lime-50',
          border: 'border-lime-300',
          text: 'text-lime-900',
          accent: 'bg-lime-500'
        }
      },
      {
        id: 'kupu-3-pupa',
        stageNumber: 3,
        name: 'Kepompong Ajaib (Pupa)',
        badge: 'Tahap 3',
        description: 'Ulat membuat cangkang pelindung lalu beristirahat diam. Di dalamnya terjadi keajaiban!',
        keyPoints: [
          'Ulat menggantung di ranting dan membungkus dirinya.',
          'Tampak diam dari luar, tetapi di dalam tubuhnya berubah menjadi kupu-kupu.',
          'Masa berdiam diri ini disebut tahap Pupa.'
        ],
        funFact: 'Tahap pupa inilah ciri utama dari hewan bermetamorfosis sempurna!',
        svgType: 'kupu-pupa',
        colorTheme: {
          bg: 'bg-amber-50',
          border: 'border-amber-300',
          text: 'text-amber-900',
          accent: 'bg-amber-500'
        }
      },
      {
        id: 'kupu-4-dewasa',
        stageNumber: 4,
        name: 'Kupu-Kupu Dewasa (Imago)',
        badge: 'Tahap 4',
        description: 'Kupu-kupu keluar dari kepompong dengan sayap indah berwarna-warni yang siap terbang!',
        keyPoints: [
          'Memiliki sayap indah beraneka warna dan corak.',
          'Menghisap nektar manis dari bunga-bunga mekar.',
          'Membantu penyerbukan sehingga tanaman bisa menghasilkan buah.'
        ],
        funFact: 'Tanpa bantuan kupu-kupu, bunga akan sulit berbuah dan biji baru tidak tercipta.',
        svgType: 'kupu-dewasa',
        colorTheme: {
          bg: 'bg-pink-50',
          border: 'border-pink-300',
          text: 'text-pink-900',
          accent: 'bg-pink-500'
        }
      }
    ]
  },
  {
    id: 'katak',
    name: 'Katak Hijau Lincah',
    category: 'hewan',
    type: 'metamorfosis-sempurna',
    summary: 'Katak hidup di dua alam (air dan darat) dengan perubahan bentuk yang sangat menakjubkan.',
    habitat: 'Kolam air tawar, rawa-rawa, dan sungai kecil',
    hasPupa: true,
    stages: [
      {
        id: 'katak-1-telur',
        stageNumber: 1,
        name: 'Telur di Air',
        badge: 'Tahap 1',
        description: 'Katak bertelur di dalam air yang tenang dalam kelompok gumpalan berlendir kenyal.',
        keyPoints: [
          'Diselimuti lendir agar terlindung dari pemangsa dan tidak hanyut.',
          'Di dalam butiran telur terdapat embrio yang mulai berkembang.',
          'Menetas menjadi berudu perenang.'
        ],
        funFact: 'Satu induk katak bisa mengeluarkan ratusan telur sekaligus di air!',
        svgType: 'katak-telur',
        colorTheme: {
          bg: 'bg-sky-50',
          border: 'border-sky-300',
          text: 'text-sky-900',
          accent: 'bg-sky-500'
        }
      },
      {
        id: 'katak-2-berudu',
        stageNumber: 2,
        name: 'Berudu (Kecebong)',
        badge: 'Tahap 2',
        description: 'Berudu menetas di air, bernapas dengan insang seperti ikan dan berenang memakai ekor panjang.',
        keyPoints: [
          'Belum memiliki kaki sama sekali.',
          'Bernapas menggunakan insang halus di dalam air.',
          'Makan lumut dan tumbuhan air kecil.'
        ],
        funFact: 'Bentuk berudu sangat berbeda dari induknya sampai sering dikira anak ikan!',
        svgType: 'katak-berudu',
        colorTheme: {
          bg: 'bg-cyan-50',
          border: 'border-cyan-300',
          text: 'text-cyan-900',
          accent: 'bg-cyan-500'
        }
      },
      {
        id: 'katak-3-berkaki',
        stageNumber: 3,
        name: 'Berudu Berkaki & Katak Muda',
        badge: 'Tahap 3',
        description: 'Tumbuh dua kaki belakang, disusul dua kaki depan. Ekornya perlahan menyusut pendek.',
        keyPoints: [
          'Kaki belakang tumbuh lebih dulu untuk membantu melompat.',
          'Paru-paru mulai terbentuk menggantikan insang.',
          'Ekor mengecil dan terserap ke dalam tubuhnya.'
        ],
        funFact: 'Katak muda mulai bisa bernapas di udara bebas dan naik ke daratan!',
        svgType: 'katak-muda',
        colorTheme: {
          bg: 'bg-teal-50',
          border: 'border-teal-300',
          text: 'text-teal-900',
          accent: 'bg-teal-500'
        }
      },
      {
        id: 'katak-4-dewasa',
        stageNumber: 4,
        name: 'Katak Dewasa',
        badge: 'Tahap 4',
        description: 'Katak tidak berekor lagi, memiliki kaki belakang kuat untuk melompat tinggi dan bersuara nyaring.',
        keyPoints: [
          'Bernapas dengan paru-paru dan kulit basahnya yang lembap.',
          'Pandai melompat di darat dan berenang gesit di air.',
          'Memakan serangga pengganggu seperti nyamuk dan lalat.'
        ],
        funFact: 'Katak membantu petani dan lingkungan karena senang memangsa nyamuk nakal!',
        svgType: 'katak-dewasa',
        colorTheme: {
          bg: 'bg-emerald-50',
          border: 'border-emerald-300',
          text: 'text-emerald-900',
          accent: 'bg-emerald-500'
        }
      }
    ]
  },
  {
    id: 'belalang',
    name: 'Belalang & Kecoak',
    category: 'hewan',
    type: 'metamorfosis-tidak-sempurna',
    summary: 'Metamorfosis tidak sempurna: bentuk tubuh anak mirip induknya sejak menetas dan TIDAK ada tahap kepompong.',
    habitat: 'Padang rumput, kebun, dan semak-semak',
    hasPupa: false,
    stages: [
      {
        id: 'belalang-1-telur',
        stageNumber: 1,
        name: 'Telur',
        badge: 'Tahap 1',
        description: 'Telur diletakkan di dalam tanah gembur atau celah tanaman yang aman.',
        keyPoints: [
          'Diletakkan di tempat tersembunyi agar hangat.',
          'Berdiam diri beberapa hari hingga menetas.',
          'Tidak diselimuti kepompong.'
        ],
        funFact: 'Kecoak menyimpan telurnya di dalam kantung pelindung khusus bernama ooteka.',
        svgType: 'belalang-telur',
        colorTheme: {
          bg: 'bg-amber-50',
          border: 'border-amber-300',
          text: 'text-amber-900',
          accent: 'bg-amber-500'
        }
      },
      {
        id: 'belalang-2-nimfa',
        stageNumber: 2,
        name: 'Nimfa (Belalang Muda)',
        badge: 'Tahap 2',
        description: 'Saat menetas, bentuknya sudah mirip induknya! Hanya saja badannya kecil dan belum bersayap.',
        keyPoints: [
          'Bentuk tubuh sudah menyerupai belalang dewasa.',
          'Belum memiliki sayap yang sempurna untuk terbang tinggi.',
          'Mengalami beberapa kali pergantian kulit saat bertambah besar.'
        ],
        funFact: 'Anak belalang atau nimfa sudah bisa melompat gesit seperti induknya!',
        svgType: 'belalang-nimfa',
        colorTheme: {
          bg: 'bg-lime-50',
          border: 'border-lime-300',
          text: 'text-lime-900',
          accent: 'bg-lime-500'
        }
      },
      {
        id: 'belalang-3-dewasa',
        stageNumber: 3,
        name: 'Belalang Dewasa (Imago)',
        badge: 'Tahap 3',
        description: 'Tubuh sudah tumbuh maksimal, memiliki sayap lengkap untuk terbang dan kaki kokoh.',
        keyPoints: [
          'Sayap sudah tumbuh sempurna dan bisa terbang.',
          'Bisa berkembang biak untuk menghasilkan telur baru.',
          'Tidak pernah menjadi kepompong sama sekali.'
        ],
        funFact: 'Pada metamorfosis tidak sempurna, siklusnya hanya: Telur -> Nimfa -> Dewasa!',
        svgType: 'belalang-dewasa',
        colorTheme: {
          bg: 'bg-green-50',
          border: 'border-green-300',
          text: 'text-green-900',
          accent: 'bg-green-500'
        }
      }
    ]
  },
  {
    id: 'kucing',
    name: 'Kucing & Hewan Mamalia',
    category: 'hewan',
    type: 'tanpa-metamorfosis',
    summary: 'Tidak mengalami perubahan bentuk (tanpa metamorfosis). Anak kucing langsung mirip dengan induknya sejak lahir.',
    habitat: 'Sekitar rumah, lingkungan manusia',
    hasPupa: false,
    stages: [
      {
        id: 'kucing-1-bayi',
        stageNumber: 1,
        name: 'Bayi Kucing (Kitten)',
        badge: 'Tahap 1',
        description: 'Dilahirkan oleh induk kucing, menyusu pada induknya, dan berbulu lembut.',
        keyPoints: [
          'Bentuk tubuh sudah sama persis dengan induknya: ada telinga, mata, ekor, dan 4 kaki.',
          'Hanya berbeda ukuran tubuh yang masih mungil.',
          'Mendapatkan air susu penuh gizi dari induknya.'
        ],
        funFact: 'Mata anak kucing baru terbuka sempurna setelah berusia sekitar 1-2 minggu.',
        svgType: 'kucing-bayi',
        colorTheme: {
          bg: 'bg-orange-50',
          border: 'border-orange-300',
          text: 'text-orange-900',
          accent: 'bg-orange-500'
        }
      },
      {
        id: 'kucing-2-remaja',
        stageNumber: 2,
        name: 'Kucing Remaja',
        badge: 'Tahap 2',
        description: 'Mulai lincah berlari, bermain bola, dan belajar berburu makanan sendiri.',
        keyPoints: [
          'Tubuh bertambah besar, lincah, dan kuat.',
          'Mulai makan makanan padat seperti ikan atau makanan kucing.',
          'Bentuknya tetap sama, tidak berubah wujud.'
        ],
        funFact: 'Kucing remaja sangat suka bermain untuk melatih ketangkasannya!',
        svgType: 'kucing-remaja',
        colorTheme: {
          bg: 'bg-amber-50',
          border: 'border-amber-300',
          text: 'text-amber-900',
          accent: 'bg-amber-500'
        }
      },
      {
        id: 'kucing-3-dewasa',
        stageNumber: 3,
        name: 'Kucing Dewasa',
        badge: 'Tahap 3',
        description: 'Tumbuh besar sempurna, mandiri, dan dapat melahirkan anak kucing baru.',
        keyPoints: [
          'Tubuh sudah mencapai ukuran maksimal.',
          'Dapat berkembang biak dengan cara melahirkan.',
          'Bulu dan gigi tumbuh dengan kuat.'
        ],
        funFact: 'Ayam dan sapi juga memiliki siklus tanpa metamorfosis karena bentuknya sama sejak lahir!',
        svgType: 'kucing-dewasa',
        colorTheme: {
          bg: 'bg-yellow-50',
          border: 'border-yellow-300',
          text: 'text-yellow-900',
          accent: 'bg-yellow-500'
        }
      }
    ]
  }
];

export const PLANTS_DATA: OrganismData[] = [
  {
    id: 'tanaman-tomat',
    name: 'Tanaman Tomat',
    category: 'tumbuhan',
    type: 'tumbuhan',
    summary: 'Siklus hidup tumbuhan dimulai dari biji kecil, tumbuh menjadi tunas berkecambah, pohon berbunga, hingga berbuah ranum.',
    habitat: 'Kebun sekolah, pekarangan rumah Saung Pintar Dukuhwaru, dan sawah petani',
    hasPupa: false,
    stages: [
      {
        id: 'tomat-1-biji',
        stageNumber: 1,
        name: '1. Biji Tomat di Tanah',
        badge: 'Tahap 1',
        description: 'Biji kecil ditanam di dalam tanah gembur yang subur dan disiram air secara teratur.',
        keyPoints: [
          'Biji menyimpan cadangan makanan di dalamnya.',
          'Memerlukan air dan udara tanah agar bisa bangun dari tidur.',
          'Kulit biji melunak saat terkena air siraman.'
        ],
        funFact: 'Biji tomat sangat kecil tetapi di dalamnya sudah tersimpan calon pohon tomat besar!',
        svgType: 'tomat-biji',
        colorTheme: {
          bg: 'bg-amber-50',
          border: 'border-amber-300',
          text: 'text-amber-900',
          accent: 'bg-amber-500'
        }
      },
      {
        id: 'tomat-2-kecambah',
        stageNumber: 2,
        name: '2. Kecambah (Benih Tumbuh)',
        badge: 'Tahap 2',
        description: 'Akar kecil tumbuh ke bawah menyerap air, lalu batang mungil dan daun benih menyembul ke atas!',
        keyPoints: [
          'Akar tumbuh lebih dulu ke dalam tanah untuk mencari air.',
          'Batang kecil tumbuh ke atas mencari sinar matahari.',
          'Daun benih pertama memberi makanan awal bagi kecambah.'
        ],
        funFact: 'Setelah daun pertama terbuka, tanaman mulai bisa membuat makanannya sendiri lewat fotosintesis!',
        svgType: 'tomat-kecambah',
        colorTheme: {
          bg: 'bg-emerald-50',
          border: 'border-emerald-300',
          text: 'text-emerald-900',
          accent: 'bg-emerald-500'
        }
      },
      {
        id: 'tomat-3-muda',
        stageNumber: 3,
        name: '3. Tanaman Muda yang Makin Tinggi',
        badge: 'Tahap 3',
        description: 'Batang makin tinggi, daun hijau makin lebat, dan akar menyerap air serta mineral tanah.',
        keyPoints: [
          'Daun menyerap sinar matahari hangat untuk memasak makanan.',
          'Akar bercabang banyak mencengkeram tanah dengan kokoh.',
          'Tanaman butuh disiram setiap hari agar tidak layu.'
        ],
        funFact: 'Sinar matahari pagi sangat disukai tanaman agar bisa tumbuh subur dan sehat!',
        svgType: 'tomat-muda',
        colorTheme: {
          bg: 'bg-teal-50',
          border: 'border-teal-300',
          text: 'text-teal-900',
          accent: 'bg-teal-500'
        }
      },
      {
        id: 'tomat-4-bunga',
        stageNumber: 4,
        name: '4. Tumbuhan Dewasa & Bunga Kuning',
        badge: 'Tahap 4',
        description: 'Muncul bunga-bunga kuning cantik yang siap dibantu penyerbukannya oleh lebah dan kupu-kupu.',
        keyPoints: [
          'Bunga kuning adalah calon tempat tumbuhnya buah.',
          'Serangga dan angin membantu serbuk sari menempel.',
          'Setelah penyerbukan, kelopak bunga rontok dan membentuk buah kecil.'
        ],
        funFact: 'Kupu-kupu dan lebah sangat berjasa membuat bunga tomat menjadi buah lezat!',
        svgType: 'tomat-bunga',
        colorTheme: {
          bg: 'bg-yellow-50',
          border: 'border-yellow-300',
          text: 'text-yellow-900',
          accent: 'bg-yellow-500'
        }
      },
      {
        id: 'tomat-5-buah',
        stageNumber: 5,
        name: '5. Buah Tomat Merah Berisi Biji',
        badge: 'Tahap 5',
        description: 'Buah membesar dari hijau menjadi merah matang dan manis, berisi banyak biji baru di dalamnya.',
        keyPoints: [
          'Buah kaya vitamin yang menyehatkan tubuh manusia.',
          'Di dalam buah terdapat biji-biji baru.',
          'Biji di dalam buah bisa ditanam kembali untuk mengulang siklus hidup!'
        ],
        funFact: 'Siklus hidup terjadi berulang seperti lingkaran tanpa akhir: Biji -> Pohon -> Buah -> Biji lagi!',
        svgType: 'tomat-buah',
        colorTheme: {
          bg: 'bg-rose-50',
          border: 'border-rose-300',
          text: 'text-rose-900',
          accent: 'bg-rose-500'
        }
      }
    ]
  }
];

export const CONSERVATION_CARDS: ConservationCard[] = [
  {
    id: 'taman-bunga',
    title: 'Menanam Bunga di Halaman Saung Pintar',
    target: 'Kupu-kupu, Lebah, dan Bunga',
    icon: '🌸',
    problem: 'Taman gersang dan kotor membuat kupu-kupu dan lebah kehilangan makanan manis (nektar).',
    problemImpact: 'Bunga tidak dapat berbuah karena tidak ada serangga yang membantu penyerbukan.',
    solutionAction: 'Menanam aneka bunga berwarna-warni dan membersihkan sampah pekarangan.',
    heroOutcome: 'Kupu-kupu terbang riang, bunga berbuah lebat, dan lingkungan jadi asri sejuk!',
    badgeEarned: 'Sahabat Bunga & Kupu-Kupu'
  },
  {
    id: 'lindungi-ulat',
    title: 'Menjaga Ulat dan Ranting Pohon',
    target: 'Ulat Daun dan Burung Liar',
    icon: '🐛',
    problem: 'Sering menyemprot racun pembasmi serangga berlebihan karena takut daun bolong.',
    problemImpact: 'Burung pemakan ulat kelaparan, dan tidak ada lagi kepompong yang bisa berubah jadi kupu-kupu.',
    solutionAction: 'Biarkan beberapa tanaman alami tumbuh untuk ulat, jangan semprot racun kimia berbahaya.',
    heroOutcome: 'Burung berkicau merdu mendapat makanan alami, dan metamorfosis kupu-kupu tetap lestari!',
    badgeEarned: 'Pelindung Rantai Makanan'
  },
  {
    id: 'rawat-musim-kemarau',
    title: 'Menyiram Tanaman Saat Cuaca Panas',
    target: 'Tanaman Buah & Sayuran',
    icon: '💧',
    problem: 'Saat musim kemarau panjang, tanah mengering, retak-retak, dan tanaman layu kehausan.',
    problemImpact: 'Tanaman mati sebelum sempat berbunga dan menghasilkan panen.',
    solutionAction: 'Menyiram air secara teratur di pagi hari dan membuat peneduh dari terik matahari.',
    heroOutcome: 'Tanaman segar kembali berdiri tegak, daun hijau berseri, dan bunga bermekaran!',
    badgeEarned: 'Pahlawan Tunas Segar'
  },
  {
    id: 'tanam-pohon-rindang',
    title: 'Menanam Pohon Penahan Angin di Desa',
    target: 'Pohon Mangga & Lingkungan Dukuhwaru',
    icon: '🌳',
    problem: 'Pohon ditebang sembarangan membuat cuaca desa terasa sangat panas dan berdebu.',
    problemImpact: 'Hewan kehilangan tempat tinggal sarang dan tanah mudah terkikis saat hujan deras.',
    solutionAction: 'Melakukan reboisasi (menanam kembali bibit pohon rindang) bersama teman-teman les.',
    heroOutcome: 'Udara Dukuhwaru menjadi sejuk segar, banyak burung bersarang, dan tanah tetap subur!',
    badgeEarned: 'Penjaga Hijau Dukuhwaru'
  }
];

export const SEQUENCE_LEVELS: SequenceLevel[] = [
  {
    id: 'seq-kupu',
    title: 'Level 1: Urutkan Siklus Kupu-Kupu',
    organismName: 'Kupu-Kupu (Metamorfosis Sempurna)',
    category: 'Hewan',
    description: 'Sentuh dan susun 4 tahapan daur hidup kupu-kupu dari awal menetas hingga bisa terbang!',
    targetOrder: ['kupu-telur', 'kupu-ulat', 'kupu-pupa', 'kupu-dewasa'],
    items: [
      { id: 'kupu-pupa', name: 'Kepompong (Pupa)', emoji: '🥜', description: 'Masa diam di dalam cangkang', svgType: 'kupu-pupa' },
      { id: 'kupu-telur', name: 'Telur Kecil', emoji: '🥚', description: 'Menempel di balik daun hijau', svgType: 'kupu-telur' },
      { id: 'kupu-dewasa', name: 'Kupu-Kupu Dewasa', emoji: '🦋', description: 'Sayap indah siap terbang bebas', svgType: 'kupu-dewasa' },
      { id: 'kupu-ulat', name: 'Ulat Daun (Larva)', emoji: '🐛', description: 'Suka makan daun segar', svgType: 'kupu-ulat' },
    ]
  },
  {
    id: 'seq-katak',
    title: 'Level 2: Urutkan Siklus Katak',
    organismName: 'Katak (Metamorfosis Sempurna)',
    category: 'Hewan',
    description: 'Susun metamorfosis katak dari telur di air sampai menjadi katak dewasa pelompat ulung!',
    targetOrder: ['katak-telur', 'katak-berudu', 'katak-muda', 'katak-dewasa'],
    items: [
      { id: 'katak-dewasa', name: 'Katak Dewasa', emoji: '🐸', description: 'Melompat tinggi & bersuara nyaring', svgType: 'katak-dewasa' },
      { id: 'katak-telur', name: 'Telur di Air', emoji: '🫧', description: 'Gumpalan telur kenyal di kolam', svgType: 'katak-telur' },
      { id: 'katak-muda', name: 'Katak Muda Berkaki', emoji: '🦎', description: 'Tumbuh kaki & ekor memendek', svgType: 'katak-muda' },
      { id: 'katak-berudu', name: 'Berudu (Kecebong)', emoji: '🐟', description: 'Berenang lincah memakai ekor', svgType: 'katak-berudu' },
    ]
  },
  {
    id: 'seq-belalang',
    title: 'Level 3: Urutkan Siklus Belalang',
    organismName: 'Belalang (Metamorfosis Tidak Sempurna)',
    category: 'Hewan',
    description: 'Susun siklus hidup belalang yang tidak memiliki tahap kepompong!',
    targetOrder: ['belalang-telur', 'belalang-nimfa', 'belalang-dewasa'],
    items: [
      { id: 'belalang-dewasa', name: 'Belalang Dewasa', emoji: '🦗', description: 'Bersayap sempurna & bisa terbang', svgType: 'belalang-dewasa' },
      { id: 'belalang-telur', name: 'Telur Tersembunyi', emoji: '🥚', description: 'Diletakkan di tanah atau tanaman', svgType: 'belalang-telur' },
      { id: 'belalang-nimfa', name: 'Nimfa (Belalang Muda)', emoji: '🌱', description: 'Mirip induknya tapi belum bersayap', svgType: 'belalang-nimfa' },
    ]
  },
  {
    id: 'seq-tomat',
    title: 'Level 4: Urutkan Siklus Tumbuhan Tomat',
    organismName: 'Pohon Tomat (Daur Hidup Tumbuhan)',
    category: 'Tumbuhan',
    description: 'Susun perjalanan biji tomat hingga menghasilkan buah merah lezat dan biji baru!',
    targetOrder: ['tomat-biji', 'tomat-kecambah', 'tomat-bunga', 'tomat-buah'],
    items: [
      { id: 'tomat-buah', name: 'Buah Tomat Ranum', emoji: '🍅', description: 'Merah segar berisi banyak biji baru', svgType: 'tomat-buah' },
      { id: 'tomat-biji', name: 'Biji di Tanah', emoji: '🟤', description: 'Ditanam di tanah subur yang disiram', svgType: 'tomat-biji' },
      { id: 'tomat-kecambah', name: 'Kecambah Berakar', emoji: '🌱', description: 'Akar menembus tanah, daun menyembul', svgType: 'tomat-kecambah' },
      { id: 'tomat-bunga', name: 'Pohon Berbunga Kuning', emoji: '🌼', description: 'Bunga mekar siap dibantu lebah', svgType: 'tomat-bunga' },
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Perjalanan hidup makhluk hidup dari lahir, tumbuh, berkembang, hingga menghasilkan anak disebut apa?',
    imageIcon: '🔄',
    options: [
      { id: 'A', text: 'Siklus hidup (daur hidup)', emoji: '✨' },
      { id: 'B', text: 'Tidur siang panjang', emoji: '😴' },
      { id: 'C', text: 'Perjalanan piknik', emoji: '🎒' },
      { id: 'D', text: 'Pergantian musim', emoji: '🍂' },
    ],
    correctAnswer: 'A',
    explanation: 'Siklus hidup atau daur hidup adalah tahapan pertumbuhan makhluk hidup dari awal hidup hingga dewasa dan menghasilkan makhluk hidup baru.'
  },
  {
    id: 2,
    question: 'Hewan manakah di bawah ini yang mengalami metamorfosis sempurna?',
    imageIcon: '🦋',
    options: [
      { id: 'A', text: 'Ayam dan Kucing', emoji: '🐱' },
      { id: 'B', text: 'Kupu-kupu dan Katak', emoji: '🐸' },
      { id: 'C', text: 'Kambing dan Sapi', emoji: '🐮' },
      { id: 'D', text: 'Belalang dan Kecoak', emoji: '🦗' },
    ],
    correctAnswer: 'B',
    explanation: 'Kupu-kupu dan katak mengalami metamorfosis sempurna karena bentuk tubuhnya saat kecil sangat berbeda dengan saat dewasa, serta ada tahap diam (kepompong/pupa).'
  },
  {
    id: 3,
    question: 'Apakah ciri utama dari metamorfosis sempurna yang TIDAK ada pada metamorfosis tidak sempurna?',
    imageIcon: '🔍',
    options: [
      { id: 'A', text: 'Ada tahap pupa (kepompong)', emoji: '🥜' },
      { id: 'B', text: 'Langsung bisa terbang', emoji: '🪶' },
      { id: 'C', text: 'Bentuk anaknya sama persis', emoji: '🐣' },
      { id: 'D', text: 'Tidak pernah bertelur', emoji: '❌' },
    ],
    correctAnswer: 'A',
    explanation: 'Pada metamorfosis sempurna terdapat tahap pupa (masa istirahat sebelum menjadi dewasa). Sedangkan metamorfosis tidak sempurna tidak memiliki tahap pupa.'
  },
  {
    id: 4,
    question: 'Saat menetas dari telur, anak katak yang berenang di air menggunakan ekor disebut...',
    imageIcon: '🫧',
    options: [
      { id: 'A', text: 'Nimfa', emoji: '🦗' },
      { id: 'B', text: 'Ulat', emoji: '🐛' },
      { id: 'C', text: 'Berudu (Kecebong)', emoji: '🐟' },
      { id: 'D', text: 'Kepompong', emoji: '🥜' },
    ],
    correctAnswer: 'C',
    explanation: 'Anak katak yang baru menetas dari telur disebut berudu atau kecebong. Ia berenang di air dan bernapas dengan insang.'
  },
  {
    id: 5,
    question: 'Daur hidup tumbuhan seperti tanaman tomat dan pepaya dimulai dari...',
    imageIcon: '🌱',
    options: [
      { id: 'A', text: 'Biji', emoji: '🟤' },
      { id: 'B', text: 'Buah matang', emoji: '🍅' },
      { id: 'C', text: 'Bunga mekar', emoji: '🌸' },
      { id: 'D', text: 'Batang kayu', emoji: '🪵' },
    ],
    correctAnswer: 'A',
    explanation: 'Siklus hidup tumbuhan berbiji dimulai dari biji yang ditanam di tanah subur dan mendapatkan siraman air serta udara.'
  },
  {
    id: 6,
    question: 'Apa fungsi utama bunga pada tanaman tomat atau pepaya?',
    imageIcon: '🌼',
    options: [
      { id: 'A', text: 'Tempat terjadinya penyerbukan calon buah', emoji: '🍯' },
      { id: 'B', text: 'Sebagai payung pelindung akar', emoji: '☂️' },
      { id: 'C', text: 'Untuk menakut-nakuti burung', emoji: '🦅' },
      { id: 'D', text: 'Menyerap air dari dalam tanah', emoji: '💧' },
    ],
    correctAnswer: 'A',
    explanation: 'Bunga adalah tempat terjadinya penyerbukan (dibantu serangga seperti lebah dan kupu-kupu) yang kemudian akan berkembang menjadi buah berisi biji.'
  },
  {
    id: 7,
    question: 'Mengapa kita tidak boleh membasmi semua ulat di kebun dengan racun berbahaya?',
    imageIcon: '🕊️',
    options: [
      { id: 'A', text: 'Karena ulat adalah makanan burung & calon kupu-kupu penyerbuk', emoji: '🌳' },
      { id: 'B', text: 'Karena ulat bisa menyiram tanaman', emoji: '🚿' },
      { id: 'C', text: 'Karena ulat membuat tanah retak', emoji: '⛰️' },
      { id: 'D', text: 'Karena racun ulat rasanya manis', emoji: '🍬' },
    ],
    correctAnswer: 'A',
    explanation: 'Ulat adalah makanan penting bagi burung, dan ulat yang besar akan menjadi kepompong lalu berubah jadi kupu-kupu yang membantu penyerbukan tanaman!'
  },
  {
    id: 8,
    question: 'Aksi pahlawan pelestarian apa yang bisa dilakukan anak SD di Saung Pintar Dukuhwaru saat musim kemarau panas?',
    imageIcon: '🏆',
    options: [
      { id: 'A', text: 'Menyiram tanaman dengan air secara rutin', emoji: '💧' },
      { id: 'B', text: 'Menebang pohon sembarangan', emoji: '🪓' },
      { id: 'C', text: 'Membuang sampah plastik ke got', emoji: '🗑️' },
      { id: 'D', text: 'Mengurung anak burung di kardus', emoji: '📦' },
    ],
    correctAnswer: 'A',
    explanation: 'Menyiram tanaman dengan air secara teratur di pagi hari menjaga tanaman tetap segar, tidak layu kekeringan, dan tumbuh subur!'
  },
  {
    id: 9,
    question: 'Hewan mamalia seperti kucing dan kelinci berkembang biak dengan cara...',
    imageIcon: '🐱',
    options: [
      { id: 'A', text: 'Melahirkan (beranak)', emoji: '🍼' },
      { id: 'B', text: 'Bertelur di air', emoji: '🥚' },
      { id: 'C', text: 'Menjadi kepompong', emoji: '🥜' },
      { id: 'D', text: 'Membelah diri', emoji: '✂️' },
    ],
    correctAnswer: 'A',
    explanation: 'Kucing, kelinci, sapi, dan paus adalah hewan mamalia yang berkembang biak dengan cara melahirkan anak.'
  },
  {
    id: 10,
    question: 'Mengapa siklus hidup kucing disebut "tanpa metamorfosis"?',
    imageIcon: '🐾',
    options: [
      { id: 'A', text: 'Karena bentuk bayi kucing sudah mirip induknya sejak lahir', emoji: '🐱' },
      { id: 'B', text: 'Karena kucing bisa berenang di dalam air', emoji: '🐟' },
      { id: 'C', text: 'Karena kucing mempunyai sayap', emoji: '🪽' },
      { id: 'D', text: 'Karena kucing pernah menjadi kepompong', emoji: '🥜' },
    ],
    correctAnswer: 'A',
    explanation: 'Pada siklus tanpa metamorfosis, anak yang lahir memiliki bentuk tubuh yang sama dengan induknya (punya telinga, mata, 4 kaki, ekor), hanya berbeda ukuran.'
  },
  {
    id: 11,
    question: 'Di manakah induk kupu-kupu biasanya meletakkan telur-telur kecilnya?',
    imageIcon: '🌿',
    options: [
      { id: 'A', text: 'Di balik permukaan daun hijau segar', emoji: '🍃' },
      { id: 'B', text: 'Di dalam air kolam yang dalam', emoji: '💧' },
      { id: 'C', text: 'Di atas atap rumah genteng', emoji: '🏠' },
      { id: 'D', text: 'Di dalam lubang es kutub', emoji: '🧊' },
    ],
    correctAnswer: 'A',
    explanation: 'Induk kupu-kupu menempelkan telurnya di balik daun hijau agar aman dari terpaan angin dan daun tersebut bisa langsung dimakan oleh larva ulat saat menetas.'
  },
  {
    id: 12,
    question: 'Apa nama tahap larva pada metamorfosis kupu-kupu?',
    imageIcon: '🐛',
    options: [
      { id: 'A', text: 'Ulat', emoji: '🐛' },
      { id: 'B', text: 'Berudu', emoji: '🐟' },
      { id: 'C', text: 'Nimfa', emoji: '🦗' },
      { id: 'D', text: 'Kecambah', emoji: '🌱' },
    ],
    correctAnswer: 'A',
    explanation: 'Larva pada kupu-kupu disebut ulat. Ulat memiliki banyak kaki kecil dan sangat lahap makan daun hijau untuk tumbuh besar.'
  },
  {
    id: 13,
    question: 'Tahap kepompong pada kupu-kupu juga dikenal dengan nama ilmiah...',
    imageIcon: '🥜',
    options: [
      { id: 'A', text: 'Pupa', emoji: '🥜' },
      { id: 'B', text: 'Imago', emoji: '🦋' },
      { id: 'C', text: 'Embrio', emoji: '🫧' },
      { id: 'D', text: 'Nimfa', emoji: '🦗' },
    ],
    correctAnswer: 'A',
    explanation: 'Tahap kepompong disebut pupa. Di dalam kepompong, tubuh ulat bertransformasi membentuk sayap, mata faset, dan kaki ramping kupu-kupu.'
  },
  {
    id: 14,
    question: 'Hewan dewasa yang sudah bersayap lengkap pada serangga disebut...',
    imageIcon: '🦋',
    options: [
      { id: 'A', text: 'Imago', emoji: '🦋' },
      { id: 'B', text: 'Larva', emoji: '🐛' },
      { id: 'C', text: 'Pupa', emoji: '🥜' },
      { id: 'D', text: 'Telur', emoji: '🥚' },
    ],
    correctAnswer: 'A',
    explanation: 'Imago adalah sebutan untuk hewan fase dewasa yang sudah matang dan mampu berkembang biak.'
  },
  {
    id: 15,
    question: 'Saat masih berudu di air, katak bernapas dengan menggunakan apa?',
    imageIcon: '🐟',
    options: [
      { id: 'A', text: 'Insang', emoji: '🌊' },
      { id: 'B', text: 'Hidung luar saja', emoji: '👃' },
      { id: 'C', text: 'Sayap', emoji: '🪶' },
      { id: 'D', text: 'Telinga', emoji: '👂' },
    ],
    correctAnswer: 'A',
    explanation: 'Berudu hidup sepenuhnya di dalam air dan bernapas menyerap oksigen air dengan insang, persis seperti ikan!'
  },
  {
    id: 16,
    question: 'Katak dewasa dapat hidup di darat dan di air karena bernapas dengan...',
    imageIcon: '🐸',
    options: [
      { id: 'A', text: 'Paru-paru dan kulit lembapnya', emoji: '🫁' },
      { id: 'B', text: 'Insang luar saja', emoji: '🐟' },
      { id: 'C', text: 'Ekor panjangnya', emoji: '〰️' },
      { id: 'D', text: 'Kantung udara sayap', emoji: '🪶' },
    ],
    correctAnswer: 'A',
    explanation: 'Katak dewasa adalah hewan amfibi. Mereka menghirup udara dengan paru-paru dan menyerap oksigen melalui kulitnya yang basah dan lembap.'
  },
  {
    id: 17,
    question: 'Pada metamorfosis katak, sepasang kaki manakah yang tumbuh terlebih dahulu?',
    imageIcon: '🦎',
    options: [
      { id: 'A', text: 'Kaki belakang', emoji: '🦵' },
      { id: 'B', text: 'Kaki depan', emoji: '🦶' },
      { id: 'C', text: 'Semua kaki tumbuh bersamaan', emoji: '✨' },
      { id: 'D', text: 'Sayap belakang', emoji: '🪽' },
    ],
    correctAnswer: 'A',
    explanation: 'Pada berudu, sepasang kaki belakang muncul terlebih dahulu untuk membantu berenang dan mendorong tubuh, disusul sepasang kaki depan.'
  },
  {
    id: 18,
    question: 'Anak belalang yang baru menetas dan bentuknya mirip induk tapi belum bersayap disebut...',
    imageIcon: '🦗',
    options: [
      { id: 'A', text: 'Nimfa', emoji: '🦗' },
      { id: 'B', text: 'Berudu', emoji: '🐟' },
      { id: 'C', text: 'Ulat', emoji: '🐛' },
      { id: 'D', text: 'Pupa', emoji: '🥜' },
    ],
    correctAnswer: 'A',
    explanation: 'Pada hewan bermetamorfosis tidak sempurna seperti belalang dan kecoak, anak yang baru menetas disebut nimfa.'
  },
  {
    id: 19,
    question: 'Berapa tahapan utama pada daur hidup belalang?',
    imageIcon: '🔢',
    options: [
      { id: 'A', text: '3 tahap (Telur -> Nimfa -> Dewasa)', emoji: '3️⃣' },
      { id: 'B', text: '10 tahap berulang', emoji: '🔟' },
      { id: 'C', text: '2 tahap saja', emoji: '2️⃣' },
      { id: 'D', text: '1 tahap tanpa perubahan', emoji: '1️⃣' },
    ],
    correctAnswer: 'A',
    explanation: 'Metamorfosis tidak sempurna pada belalang memiliki 3 tahapan utama: Telur ➔ Nimfa ➔ Belalang Dewasa (tanpa melewati kepompong).'
  },
  {
    id: 20,
    question: 'Selain belalang, hewan manakah yang juga mengalami metamorfosis tidak sempurna?',
    imageIcon: '🪳',
    options: [
      { id: 'A', text: 'Kecoak dan Capung', emoji: '🦗' },
      { id: 'B', text: 'Kupu-kupu dan Katak', emoji: '🦋' },
      { id: 'C', text: 'Nyamuk dan Lalat', emoji: '🦟' },
      { id: 'D', text: 'Kucing dan Sapi', emoji: '🐄' },
    ],
    correctAnswer: 'A',
    explanation: 'Kecoak, capung, jangkrik, dan belalang adalah contoh hewan yang mengalami metamorfosis tidak sempurna.'
  },
  {
    id: 21,
    question: 'Kantung pelindung keras tempat kecoak meletakkan kumpulan telurnya disebut...',
    imageIcon: '📦',
    options: [
      { id: 'A', text: 'Ooteka', emoji: '🛡️' },
      { id: 'B', text: 'Sarang burung', emoji: '🪺' },
      { id: 'C', text: 'Kepompong sutra', emoji: '🥜' },
      { id: 'D', text: 'Batang kayu', emoji: '🪵' },
    ],
    correctAnswer: 'A',
    explanation: 'Kecoak membungkus telur-telurnya di dalam kapsul pelindung khusus bernama ooteka agar terhindar dari pemangsa.'
  },
  {
    id: 22,
    question: 'Saat biji tomat ditanam di tanah subur, bagian apa yang tumbuh menembus ke bawah terlebih dahulu?',
    imageIcon: '🌱',
    options: [
      { id: 'A', text: 'Akar', emoji: '🌿' },
      { id: 'B', text: 'Bunga kuning', emoji: '🌼' },
      { id: 'C', text: 'Buah matang', emoji: '🍅' },
      { id: 'D', text: 'Duri tajam', emoji: '🌵' },
    ],
    correctAnswer: 'A',
    explanation: 'Akar tumbuh lebih dulu ke dalam tanah untuk mencengkeram tanah serta menyerap air dan garam mineral.'
  },
  {
    id: 23,
    question: 'Daun pertama yang muncul saat biji mulai berkecambah dinamakan...',
    imageIcon: '🍃',
    options: [
      { id: 'A', text: 'Daun benih (kotiledon)', emoji: '🌱' },
      { id: 'B', text: 'Kelopak mawar', emoji: '🌹' },
      { id: 'C', text: 'Ranting kering', emoji: '🪵' },
      { id: 'D', text: 'Kulit buah', emoji: '🍎' },
    ],
    correctAnswer: 'A',
    explanation: 'Daun benih memberikan cadangan makanan awal bagi tunas kecil sebelum daun sejati tumbuh lebat.'
  },
  {
    id: 24,
    question: 'Proses di mana daun tanaman membuat makanannya sendiri dengan bantuan cahaya matahari disebut...',
    imageIcon: '☀️',
    options: [
      { id: 'A', text: 'Fotosintesis', emoji: '🍃' },
      { id: 'B', text: 'Metamorfosis', emoji: '🦋' },
      { id: 'C', text: 'Hibernasi', emoji: '❄️' },
      { id: 'D', text: 'Evaporasi', emoji: '💨' },
    ],
    correctAnswer: 'A',
    explanation: 'Fotosintesis adalah proses tumbuhan hijau memasak makanannya menggunakan air, karbon dioksida dari udara, dan energi sinar matahari.'
  },
  {
    id: 25,
    question: 'Di dalam buah pepaya atau tomat yang matang terdapat bagian penting yang dapat ditanam kembali, yaitu...',
    imageIcon: '🍅',
    options: [
      { id: 'A', text: 'Biji', emoji: '🟤' },
      { id: 'B', text: 'Kulit kayu', emoji: '🪵' },
      { id: 'C', text: 'Batu kerikil', emoji: '🪨' },
      { id: 'D', text: 'Ulat daun', emoji: '🐛' },
    ],
    correctAnswer: 'A',
    explanation: 'Di dalam buah tersimpan banyak biji. Jika biji ini ditanam kembali di tanah subur, siklus hidup tumbuhan akan berulang dari awal!'
  },
  {
    id: 26,
    question: 'Pada percobaan 3 gelas plastik di Saung Pintar, apa yang terjadi pada biji kacang hijau di gelas tanpa air?',
    imageIcon: '🥤',
    options: [
      { id: 'A', text: 'Biji tidak berkecambah (tetap tertidur)', emoji: '💤' },
      { id: 'B', text: 'Langsung menghasilkan buah lebat', emoji: '🍇' },
      { id: 'C', text: 'Tumbuh bunga berwarna ungu', emoji: '🌸' },
      { id: 'D', text: 'Berubah menjadi kepompong', emoji: '🥜' },
    ],
    correctAnswer: 'A',
    explanation: 'Air sangat penting untuk memicu perkecambahan. Tanpa air, biji tidak bisa mengaktifkan cadangan makanannya dan tetap tertidur.'
  },
  {
    id: 27,
    question: 'Jika tanaman ditaruh di dalam kardus tertutup rapat yang gelap gulita tanpa cahaya, tanaman akan...',
    imageIcon: '📦',
    options: [
      { id: 'A', text: 'Batang memanjang pucat dan daun lemas kekuningan', emoji: '🍂' },
      { id: 'B', text: 'Tumbuh semakin hijau segar dan kokoh', emoji: '🌳' },
      { id: 'C', text: 'Menghasilkan oksigen melimpah', emoji: '💨' },
      { id: 'D', text: 'Berbuah sangat manis', emoji: '🍉' },
    ],
    correctAnswer: 'A',
    explanation: 'Tanpa sinar matahari, tanaman tidak bisa berfotosintesis menghasilkan zat hijau daun (klorofil), sehingga batangnya lemah pucat dan daunnya kuning.'
  },
  {
    id: 28,
    question: 'Bagaimana cara petani mengatasi tanaman agar tidak rusak saat terjadi hujan badai dan angin kencang?',
    imageIcon: '🏡',
    options: [
      { id: 'A', text: 'Menanam di rumah kaca & membuat pohon penahan angin', emoji: '🛡️' },
      { id: 'B', text: 'Menebang seluruh tanaman sampai habis', emoji: '🪓' },
      { id: 'C', text: 'Menyiram dengan air panas mendidih', emoji: '☕' },
      { id: 'D', text: 'Membiarkan sawah tergenang banjir berhari-hari', emoji: '🌊' },
    ],
    correctAnswer: 'A',
    explanation: 'Rumah kaca melindungi tanaman dari angin ribut dan hujan es, serta pohon pelindung di pinggir ladang menahan hembusan angin kencang.'
  },
  {
    id: 29,
    question: 'Apa manfaat kupu-kupu yang hinggap mengisap nektar dari bunga ke bunga?',
    imageIcon: '🌸',
    options: [
      { id: 'A', text: 'Membantu penyerbukan sehingga bunga bisa menjadi buah', emoji: '🍎' },
      { id: 'B', text: 'Membuat bunga cepat layu dan gugur', emoji: '🥀' },
      { id: 'C', text: 'Mematahkan tangkai tanaman', emoji: '🪵' },
      { id: 'D', text: 'Menghilangkan semua bau wangi bunga', emoji: '👃' },
    ],
    correctAnswer: 'A',
    explanation: 'Saat mengisap nektar madu, serbuk sari menempel pada tubuh kupu-kupu lalu berpindah ke putik bunga lain sehingga terjadi penyerbukan buah.'
  },
  {
    id: 30,
    question: 'Aksi nyata menanam bibit pohon rindang di sekitar Saung Pintar Dukuhwaru sangat bermanfaat karena...',
    imageIcon: '🌳',
    options: [
      { id: 'A', text: 'Menyejukkan udara, menyediakan oksigen, dan mencegah banjir', emoji: '🍃' },
      { id: 'B', text: 'Membuat halaman menjadi sangat gelap dan kotor', emoji: '🌑' },
      { id: 'C', text: 'Mengusir semua burung yang ingin bernyanyi', emoji: '🐦' },
      { id: 'D', text: 'Menghabiskan seluruh air di dalam tanah', emoji: '🏜️' },
    ],
    correctAnswer: 'A',
    explanation: 'Pohon rindang adalah pahlawan bumi! Akar pohon menahan air tanah dan daunnya menyaring udara kotor menjadi udara sejuk kaya oksigen bagi kita semua.'
  }
];
