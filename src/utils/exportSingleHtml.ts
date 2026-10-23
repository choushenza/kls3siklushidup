/**
 * Generates and triggers download of a 100% self-contained single-file HTML version
 * for teachers and students at Saung Pintar Dukuhwaru to run offline on any computer.
 */

export function downloadStandaloneHtml() {
  const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Saung Pintar Dukuhwaru - Petualangan Siklus Hidup</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
  <style>
    body { font-family: 'Fredoka', 'Nunito', sans-serif; }
    h1, h2, h3, h4, .font-heading { font-family: 'Fredoka', cursive, sans-serif; }
  </style>
</head>
<body class="bg-amber-50/50 text-slate-800 antialiased min-h-screen flex flex-col">
  <!-- Top Bar -->
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-4 border-amber-200 shadow-sm py-3 px-4 sm:px-8">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-emerald-400 flex items-center justify-center text-2xl shadow-md border-2 border-white">
          🌿
        </div>
        <div>
          <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
            Saung Pintar Dukuhwaru • IPAS Kelas 3 SD
          </span>
          <h1 class="text-xl sm:text-2xl font-bold text-slate-800 font-heading">
            Petualangan Siklus Hidup ✨
          </h1>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="px-3 py-1.5 rounded-2xl bg-yellow-100 border-2 border-yellow-400 text-yellow-900 font-bold text-sm">
          ⭐ <span id="stars-val">40</span> Bintang
        </div>
        <button onclick="window.print()" class="px-3.5 py-1.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md">
          🖨️ Cetak Halaman
        </button>
      </div>
    </div>
  </header>

  <!-- Navigation Tabs -->
  <nav class="bg-amber-100/70 border-b border-amber-200 px-4 py-2 flex items-center justify-center gap-2 overflow-x-auto">
    <button onclick="showTab('hewan')" id="tab-btn-hewan" class="px-4 py-2 rounded-2xl font-black text-sm bg-white text-emerald-900 shadow-sm border-2 border-emerald-400">🦋 1. Siklus Hewan</button>
    <button onclick="showTab('tumbuhan')" id="tab-btn-tumbuhan" class="px-4 py-2 rounded-2xl font-black text-sm bg-white/60 text-slate-700 hover:bg-white border-2 border-transparent">🌱 2. Siklus Tumbuhan</button>
    <button onclick="showTab('pelestarian')" id="tab-btn-pelestarian" class="px-4 py-2 rounded-2xl font-black text-sm bg-white/60 text-slate-700 hover:bg-white border-2 border-transparent">🛡️ 3. Pahlawan Alam</button>
    <button onclick="showTab('game')" id="tab-btn-game" class="px-4 py-2 rounded-2xl font-black text-sm bg-white/60 text-slate-700 hover:bg-white border-2 border-transparent">🧩 4. Arena Game</button>
    <button onclick="showTab('kuis')" id="tab-btn-kuis" class="px-4 py-2 rounded-2xl font-black text-sm bg-white/60 text-slate-700 hover:bg-white border-2 border-transparent">⭐ 5. Kuis Pintar</button>
  </nav>

  <!-- Main Content Container -->
  <main class="max-w-5xl mx-auto px-4 py-6 flex-1 w-full space-y-6">
    <!-- SECTION 1: HEWAN -->
    <div id="section-hewan" class="space-y-6">
      <div class="bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl p-6 text-white shadow-md">
        <h2 class="text-2xl font-black font-heading">🐾 Siklus Hidup & Metamorfosis Hewan</h2>
        <p class="text-amber-50 text-sm mt-1">Mempelajari daur hidup kupu-kupu, katak, belalang, dan kucing!</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white p-5 rounded-3xl border-3 border-amber-200 shadow-sm">
          <span class="text-xs font-black text-purple-700 bg-purple-100 px-3 py-1 rounded-full">Metamorfosis Sempurna</span>
          <h3 class="text-lg font-black text-slate-800 font-heading mt-2">Kupu-Kupu & Katak 🦋🐸</h3>
          <p class="text-sm text-slate-600 mt-1 font-semibold">Bentuk tubuh saat kecil sangat berbeda dengan induknya dan <strong>ADA tahap pupa (kepompong)</strong>.</p>
          <div class="mt-3 p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs font-bold text-amber-900 space-y-1">
            <p>1. Telur di balik daun</p>
            <p>2. Ulat (Larva) makan daun hijau</p>
            <p>3. Kepompong (Pupa) masa diam</p>
            <p>4. Kupu-Kupu Dewasa sayap indah</p>
          </div>
        </div>
        <div class="bg-white p-5 rounded-3xl border-3 border-amber-200 shadow-sm">
          <span class="text-xs font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">Metamorfosis Tidak Sempurna</span>
          <h3 class="text-lg font-black text-slate-800 font-heading mt-2">Belalang & Kecoak 🦗</h3>
          <p class="text-sm text-slate-600 mt-1 font-semibold">Bentuk tubuh anak mirip induknya sejak menetas (nimfa), dan <strong>TIDAK ADA tahap kepompong</strong>.</p>
          <div class="mt-3 p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs font-bold text-emerald-900 space-y-1">
            <p>1. Telur di tanah/tanaman</p>
            <p>2. Nimfa (anak kecil mirip induk, belum bersayap)</p>
            <p>3. Belalang Dewasa (bersayap lengkap)</p>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION 2: TUMBUHAN -->
    <div id="section-tumbuhan" class="hidden space-y-6">
      <div class="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-6 text-white shadow-md">
        <h2 class="text-2xl font-black font-heading">🌱 Siklus Hidup Tumbuhan (Tomat & Pepaya)</h2>
        <p class="text-emerald-50 text-sm mt-1">Dari biji kecil di tanah subur hingga menjadi pohon berbuah ranum!</p>
      </div>
      <div class="bg-white p-6 rounded-3xl border-3 border-emerald-200 shadow-sm space-y-4">
        <h3 class="text-lg font-black text-slate-800 font-heading">5 Tahapan Daur Hidup Pohon Tomat:</h3>
        <div class="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
          <div class="p-3 bg-amber-50 rounded-2xl border border-amber-200">
            <div class="text-3xl mb-1">🟤</div>
            <span class="text-xs font-black block">1. Biji di Tanah</span>
          </div>
          <div class="p-3 bg-emerald-50 rounded-2xl border border-emerald-200">
            <div class="text-3xl mb-1">🌱</div>
            <span class="text-xs font-black block">2. Kecambah</span>
          </div>
          <div class="p-3 bg-teal-50 rounded-2xl border border-teal-200">
            <div class="text-3xl mb-1">🌿</div>
            <span class="text-xs font-black block">3. Tanaman Muda</span>
          </div>
          <div class="p-3 bg-yellow-50 rounded-2xl border border-yellow-200">
            <div class="text-3xl mb-1">🌼</div>
            <span class="text-xs font-black block">4. Berbunga</span>
          </div>
          <div class="p-3 bg-rose-50 rounded-2xl border border-rose-200">
            <div class="text-3xl mb-1">🍅</div>
            <span class="text-xs font-black block">5. Buah Berbiji</span>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION 3: PELESTARIAN -->
    <div id="section-pelestarian" class="hidden space-y-6">
      <div class="bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-6 text-white shadow-md">
        <h2 class="text-2xl font-black font-heading">🛡️ Pahlawan Pelestarian Saung Pintar Dukuhwaru</h2>
        <p class="text-sky-50 text-sm mt-1">Aksi nyata menjaga kelestarian hewan dan tumbuhan di lingkungan sekitar!</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="bg-white p-5 rounded-3xl border-2 border-sky-200 shadow-sm">
          <span class="text-2xl">🌸</span>
          <h4 class="font-black text-slate-800 mt-1">Menanam Bunga di Halaman</h4>
          <p class="text-xs text-slate-600 font-semibold mt-1">Membantu kupu-kupu & lebah mencari nektar manis dan membantu penyerbukan tanaman.</p>
        </div>
        <div class="bg-white p-5 rounded-3xl border-2 border-sky-200 shadow-sm">
          <span class="text-2xl">💧</span>
          <h4 class="font-black text-slate-800 mt-1">Menyiram Tanaman Saat Kemarau</h4>
          <p class="text-xs text-slate-600 font-semibold mt-1">Mencegah tanaman layu dan mati kekeringan pada saat terik panas matahari.</p>
        </div>
      </div>
    </div>

    <!-- SECTION 4: GAME -->
    <div id="section-game" class="hidden space-y-6">
      <div class="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-6 text-white shadow-md">
        <h2 class="text-2xl font-black font-heading">🧩 Arena Game Susun Urutan Daur Hidup</h2>
        <p class="text-purple-100 text-sm mt-1">Teka-teki mandiri: urutkan daur hidup kupu-kupu dari awal sampai dewasa!</p>
      </div>
      <div class="bg-white p-6 rounded-3xl border-3 border-purple-200 shadow-sm text-center space-y-4">
        <p class="font-extrabold text-slate-700">Urutan Daur Hidup Kupu-Kupu:</p>
        <div class="flex items-center justify-center gap-3 flex-wrap">
          <span class="px-4 py-2 bg-amber-100 rounded-2xl font-black text-sm">1. Telur 🥚</span>
          <span class="text-slate-400">➡️</span>
          <span class="px-4 py-2 bg-lime-100 rounded-2xl font-black text-sm">2. Ulat 🐛</span>
          <span class="text-slate-400">➡️</span>
          <span class="px-4 py-2 bg-yellow-100 rounded-2xl font-black text-sm">3. Kepompong 🥜</span>
          <span class="text-slate-400">➡️</span>
          <span class="px-4 py-2 bg-pink-100 rounded-2xl font-black text-sm">4. Kupu-Kupu 🦋</span>
        </div>
        <button onclick="confetti()" class="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-black text-sm rounded-2xl shadow-md cursor-pointer">
          Hore! Periksa Urutan ✨
        </button>
      </div>
    </div>

    <!-- SECTION 5: KUIS -->
    <div id="section-kuis" class="hidden space-y-6">
      <div class="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-3xl p-6 text-white shadow-md">
        <h2 class="text-2xl font-black font-heading">⭐ Kuis Mandiri Pahlawan Alam (30 Soal & Leaderboard)</h2>
        <p class="text-amber-50 text-sm mt-1">Uji pemahamanmu tentang Bab 4 IPAS Kelas 3 SD dan catat namamu di Papan Juara Saung Pintar Dukuhwaru!</p>
      </div>
      <div class="bg-white p-6 rounded-3xl border-3 border-amber-300 shadow-sm space-y-4">
        <div class="flex items-center justify-between pb-2 border-b border-amber-100">
          <span class="text-xs font-black bg-amber-100 text-amber-900 px-3 py-1 rounded-full">Tantangan 30 Soal Kurikulum Resmi</span>
          <span class="text-xs font-bold text-slate-500">Papan juara kosong — jadilah yang pertama! 🏆</span>
        </div>
        <h4 class="font-extrabold text-lg text-slate-800">Soal Contoh: Hewan yang mengalami metamorfosis sempurna memiliki tahap khusus bernama...</h4>
        <div class="space-y-2">
          <button onclick="checkKuisAnswer(true)" class="w-full p-3 bg-amber-50 hover:bg-amber-100 rounded-2xl font-bold text-left text-sm border border-amber-200">A. Pupa (Kepompong)</button>
          <button onclick="checkKuisAnswer(false)" class="w-full p-3 bg-amber-50 hover:bg-amber-100 rounded-2xl font-bold text-left text-sm border border-amber-200">B. Langsung bertelur</button>
          <button onclick="checkKuisAnswer(false)" class="w-full p-3 bg-amber-50 hover:bg-amber-100 rounded-2xl font-bold text-left text-sm border border-amber-200">C. Hibernasi musim dingin</button>
        </div>
        <div id="kuis-feedback" class="hidden p-3 rounded-2xl font-bold text-sm"></div>

        <!-- Leaderboard Preview Table -->
        <div class="mt-6 p-4 rounded-2xl bg-amber-50/70 border-2 border-amber-300">
          <h5 class="font-black text-amber-950 text-sm flex items-center gap-1.5 mb-2">
            🏆 Papan Juara Siswa Saung Pintar Dukuhwaru
          </h5>
          <div class="text-xs space-y-1 font-semibold text-slate-700">
            <div class="p-3 bg-white rounded-xl border border-dashed border-amber-300 text-center text-slate-500">
              Belum ada peserta. Selesaikan kuis di aplikasi online untuk masuk papan juara Supabase. 🌟
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="bg-white border-t border-amber-200 py-4 text-center text-xs text-slate-500">
    Bimbingan Belajar Saung Pintar Dukuhwaru • Media Edukasi IPAS Kelas 3 SD
  </footer>

  <script>
    function showTab(tabId) {
      const tabs = ['hewan', 'tumbuhan', 'pelestarian', 'game', 'kuis'];
      tabs.forEach(t => {
        document.getElementById('section-' + t).classList.add('hidden');
        document.getElementById('tab-btn-' + t).className = 'px-4 py-2 rounded-2xl font-black text-sm bg-white/60 text-slate-700 hover:bg-white border-2 border-transparent';
      });
      document.getElementById('section-' + tabId).classList.remove('hidden');
      document.getElementById('tab-btn-' + tabId).className = 'px-4 py-2 rounded-2xl font-black text-sm bg-white text-emerald-900 shadow-sm border-2 border-emerald-400';
    }

    function checkKuisAnswer(isCorrect) {
      const fb = document.getElementById('kuis-feedback');
      fb.classList.remove('hidden');
      if (isCorrect) {
        fb.className = 'p-3 rounded-2xl font-bold text-sm bg-emerald-100 text-emerald-900 border border-emerald-300';
        fb.innerText = '✅ Hebat sekali! Jawaban A benar: Metamorfosis sempurna memiliki tahap pupa (kepompong).';
        if (typeof confetti === 'function') confetti();
      } else {
        fb.className = 'p-3 rounded-2xl font-bold text-sm bg-amber-100 text-amber-900 border border-amber-300';
        fb.innerText = 'Coba cermati lagi ya! Metamorfosis sempurna melewati masa diam kepompong.';
      }
    }
  </script>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'saung_pintar_siklus_hidup_mandiri.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
