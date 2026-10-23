import React, { useState } from 'react';
import { PLANTS_DATA } from '../data/curriculumData';
import { Illustration } from './Illustrations';
import { soundFx } from '../utils/soundEffects';
import { CheckCircle2, ArrowRight, ArrowLeft, Sun, CloudRain, Wind, Sprout, Star } from 'lucide-react';

interface ModulePlantProps {
  onCompleteModule: (moduleId: string) => void;
  isCompleted: boolean;
}

export const ModulePlant: React.FC<ModulePlantProps> = ({ onCompleteModule, isCompleted }) => {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const [selectedWeatherTab, setSelectedWeatherTab] = useState<'baik' | 'buruk'>('baik');
  const [simCup, setSimCup] = useState<number>(1);

  const plant = PLANTS_DATA[0]; // Tanaman Tomat
  const currentStage = plant.stages[activeStageIdx];

  const handleNext = () => {
    soundFx.playClick();
    if (activeStageIdx < plant.stages.length - 1) {
      setActiveStageIdx(activeStageIdx + 1);
    }
  };

  const handlePrev = () => {
    soundFx.playClick();
    if (activeStageIdx > 0) {
      setActiveStageIdx(activeStageIdx - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Header Banner */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 rounded-3xl p-5 sm:p-6 text-white shadow-lg relative overflow-hidden">
        <div className="absolute -right-8 -bottom-10 opacity-20 pointer-events-none">
          <Illustration type="tomat-buah" className="w-64 h-64" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <span>🌱 Bab 4 IPAS Kelas 3</span>
            <span>•</span>
            <span>Siklus Hidup Tumbuhan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading drop-shadow-xs">
            Rahasia Tumbuhan Tumbuh Menjadi Buah! 🍅
          </h2>
          <p className="text-emerald-50 text-sm sm:text-base mt-1.5 font-medium leading-relaxed">
            Tanpa tumbuhan, manusia dan hewan tidak bisa makan dan bernapas. Tumbuhan memulai hidupnya dari <strong>biji kecil</strong> hingga menjadi pohon rindang yang menghasilkan buah lezat!
          </p>
        </div>
      </div>

      {/* 5-Step Timeline Navigation */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border-3 border-emerald-200 shadow-md">
        <div className="flex items-center justify-between pb-4 border-b border-emerald-100 mb-6 gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 sm:gap-3">
            {plant.stages.map((stage, idx) => {
              const isCurrent = idx === activeStageIdx;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => {
                    soundFx.playPop();
                    setActiveStageIdx(idx);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl font-black text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap ${
                    isCurrent
                      ? 'bg-emerald-600 text-white shadow-md scale-105 ring-2 ring-emerald-300'
                      : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-xs">
                    {stage.stageNumber}
                  </span>
                  <span>{stage.name.replace(/^\d+\.\s*/, '')}</span>
                </button>
              );
            })}
          </div>
          <span className="text-xs font-bold text-slate-500 whitespace-nowrap hidden sm:inline">
            Tahap {activeStageIdx + 1} dari {plant.stages.length}
          </span>
        </div>

        {/* Stage Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Illustration Card */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-emerald-50/80 to-teal-50/60 rounded-3xl border-2 border-emerald-200">
            <div className="relative group">
              <div className="w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <Illustration type={currentStage.svgType} className="w-full h-full drop-shadow-md" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white px-3 py-1 rounded-2xl border-2 border-emerald-300 shadow-xs flex items-center gap-1.5">
                <span className="text-xs font-black text-emerald-800">Tahap #{currentStage.stageNumber}</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-lg font-black text-slate-800 font-heading">
                {currentStage.name}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Contoh: Tomat, Pepaya, dan Kacang Hijau
              </p>
            </div>
          </div>

          {/* Bite-sized Details */}
          <div className="md:col-span-7 space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 inline-block">
                Perjalanan Daur Hidup
              </span>
              <p className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                {currentStage.description}
              </p>
            </div>

            {/* Bullet Points */}
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <span className="text-xs font-black text-slate-600 uppercase tracking-wide">
                Hal Penting di Tahap Ini:
              </span>
              <ul className="space-y-2">
                {currentStage.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base font-semibold text-slate-700">
                    <span className="text-emerald-500 text-base mt-0.5">🌱</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fun Fact */}
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300">
              <div className="text-2xl mt-0.5">💡</div>
              <div>
                <span className="text-xs font-extrabold uppercase text-emerald-900 block">
                  Fakta Menakjubkan
                </span>
                <p className="text-xs sm:text-sm font-bold text-emerald-800 leading-tight">
                  {currentStage.funFact}
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeStageIdx === 0}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeStageIdx === 0
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 active:scale-95'
                }`}
              >
                <ArrowLeft className="w-4 h-4" /> Tahap Sebelumnya
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={activeStageIdx === plant.stages.length - 1}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeStageIdx === plant.stages.length - 1
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md active:scale-95'
                }`}
              >
                Tahap Berikutnya <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Essential Needs of Plants Grid */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-3 border-emerald-200 shadow-md">
        <h3 className="text-lg font-extrabold text-slate-800 font-heading mb-1 flex items-center gap-2">
          <span>4 Kebutuhan Tumbuhan Agar Tumbuh Subur ☀️💧</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mb-4">
          Seperti kita yang butuh makanan dan minuman, tumbuhan membutuhkan 4 hal alami ini:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-2xl bg-sky-50 border-2 border-sky-300 text-center">
            <div className="text-3xl mb-1">💧</div>
            <h5 className="font-extrabold text-sky-900 text-sm">1. Air Bersih</h5>
            <p className="text-xs font-semibold text-sky-800 mt-1">
              Diserap akar untuk melarutkan makanan dan menjaga kesegaran batang.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-center">
            <div className="text-3xl mb-1">☀️</div>
            <h5 className="font-extrabold text-amber-900 text-sm">2. Sinar Matahari</h5>
            <p className="text-xs font-semibold text-amber-800 mt-1">
              Energi hangat bagi daun hijau untuk memasak makanan (fotosintesis).
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-teal-50 border-2 border-teal-300 text-center">
            <div className="text-3xl mb-1">🌬️</div>
            <h5 className="font-extrabold text-teal-900 text-sm">3. Udara Bersih</h5>
            <p className="text-xs font-semibold text-teal-800 mt-1">
              Menghirup karbon dioksida dan menghasilkan oksigen segar bagi manusia!
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-orange-50 border-2 border-orange-300 text-center">
            <div className="text-3xl mb-1">🪴</div>
            <h5 className="font-extrabold text-orange-900 text-sm">4. Tanah Subur</h5>
            <p className="text-xs font-semibold text-orange-800 mt-1">
              Menyediakan mineral & nutrisi makanan yang menyehatkan tanaman.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Weather Effect & Care Section */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-3 border-emerald-200 shadow-md">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <div>
            <h3 className="text-lg font-extrabold text-slate-800 font-heading flex items-center gap-2">
              <span>Pengaruh Cuaca & Cara Kita Merawat Tumbuhan 🌦️</span>
            </h3>
            <p className="text-xs text-slate-500">
              Pelajari bagaimana cuaca memengaruhi siklus hidup tumbuhan (Buku IPAS hal. 87-88)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                setSelectedWeatherTab('baik');
              }}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs cursor-pointer ${
                selectedWeatherTab === 'baik'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-emerald-100 text-emerald-900'
              }`}
            >
              ☀️ Pengaruh Cuaca Baik
            </button>
            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                setSelectedWeatherTab('buruk');
              }}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs cursor-pointer ${
                selectedWeatherTab === 'buruk'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-rose-100 text-rose-900'
              }`}
            >
              🌧️ Cuaca Buruk & Solusinya
            </button>
          </div>
        </div>

        {selectedWeatherTab === 'baik' ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-yellow-50 border border-yellow-200">
              <Sun className="w-6 h-6 text-yellow-500 mb-1" />
              <h5 className="font-bold text-slate-800 text-sm">Cuaca Cerah & Hangat</h5>
              <p className="text-xs text-slate-600 mt-1">
                Tumbuhan memperoleh banyak sinar matahari untuk memasak makanan secara maksimal.
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200">
              <CloudRain className="w-6 h-6 text-sky-500 mb-1" />
              <h5 className="font-bold text-slate-800 text-sm">Hujan yang Cukup</h5>
              <p className="text-xs text-slate-600 mt-1">
                Tanah menjadi lembap sejuk, akar mudah menyerap air dan garam mineral.
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-200">
              <Wind className="w-6 h-6 text-teal-500 mb-1" />
              <h5 className="font-bold text-slate-800 text-sm">Angin Lembut Sepoi</h5>
              <p className="text-xs text-slate-600 mt-1">
                Membantu menyebarkan biji ke tempat baru dan membantu serbuk sari menempel pada bunga.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200">
                <span className="text-xs font-black uppercase text-rose-800">Tantangan Cuaca Panas Ekstrem:</span>
                <p className="text-xs sm:text-sm font-bold text-rose-950 mt-1">
                  Kemarau panjang membuat tanah retak kering dan tanaman layu mati kehausan.
                </p>
                <div className="mt-2 text-xs font-semibold text-emerald-800 bg-white p-2 rounded-xl border border-emerald-200">
                  💡 Solusi Petani & Kita: Menyiram air secara rutin dan memasang irigasi buatan.
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200">
                <span className="text-xs font-black uppercase text-indigo-800">Tantangan Hujan Badai Lebat:</span>
                <p className="text-xs sm:text-sm font-bold text-indigo-950 mt-1">
                  Banjir dapat membuat akar membusuk dan angin kencang dapat merobohkan batang.
                </p>
                <div className="mt-2 text-xs font-semibold text-emerald-800 bg-white p-2 rounded-xl border border-emerald-200">
                  💡 Solusi Petani & Kita: Menanam tanaman di rumah kaca (greenhouse) dan menanam pohon besar penahan angin.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mini Observation Simulation: 3 Gelas Kacang Hijau (Buku IPAS hal. 84) */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-5 sm:p-6 border-3 border-amber-300 shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🧪</span>
          <h4 className="font-extrabold text-amber-950 font-heading text-lg">
            Simulasi Penyelidikan: Biji Kacang Hijau di 3 Gelas Plastik
          </h4>
        </div>
        <p className="text-xs sm:text-sm text-amber-900 mb-4">
          Klik masing-masing gelas untuk melihat apa yang terjadi pada biji kacang hijau:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => {
              soundFx.playPop();
              setSimCup(1);
            }}
            className={`p-4 rounded-2xl border-3 text-left transition-all cursor-pointer ${
              simCup === 1
                ? 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-200'
                : 'bg-white/60 border-slate-200 hover:bg-white'
            }`}
          >
            <div className="text-3xl mb-1">🥤🌱</div>
            <span className="font-extrabold text-sm text-slate-800 block">Gelas A (Kapas Basah + Sinar)</span>
            <span className="text-xs text-emerald-700 font-bold mt-1 block">
              ✅ Tumbuh subur, akar kuat, dan daun hijau segar!
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundFx.playPop();
              setSimCup(2);
            }}
            className={`p-4 rounded-2xl border-3 text-left transition-all cursor-pointer ${
              simCup === 2
                ? 'bg-white border-amber-500 shadow-md ring-2 ring-amber-200'
                : 'bg-white/60 border-slate-200 hover:bg-white'
            }`}
          >
            <div className="text-3xl mb-1">🥤🟤</div>
            <span className="font-extrabold text-sm text-slate-800 block">Gelas B (Kapas Kering / Tanpa Air)</span>
            <span className="text-xs text-amber-700 font-bold mt-1 block">
              ⚠️ Biji tetap tertidur & tidak berkecambah sama sekali.
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundFx.playPop();
              setSimCup(3);
            }}
            className={`p-4 rounded-2xl border-3 text-left transition-all cursor-pointer ${
              simCup === 3
                ? 'bg-white border-purple-500 shadow-md ring-2 ring-purple-200'
                : 'bg-white/60 border-slate-200 hover:bg-white'
            }`}
          >
            <div className="text-3xl mb-1">🥤📦</div>
            <span className="font-extrabold text-sm text-slate-800 block">Gelas C (Ada Air, Tapi Gelap Gulita)</span>
            <span className="text-xs text-purple-700 font-bold mt-1 block">
              ⚠️ Batang memanjang pucat & daun berwarna kuning lemas.
            </span>
          </button>
        </div>
      </div>

      {/* Completion Banner */}
      <div className="bg-emerald-50 border-2 border-emerald-300 rounded-3xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-2xl shadow-sm">
            {isCompleted ? <CheckCircle2 className="w-7 h-7" /> : <Star className="w-7 h-7 text-yellow-300 fill-yellow-300" />}
          </div>
          <div>
            <h4 className="font-extrabold text-emerald-950 font-heading text-base sm:text-lg">
              {isCompleted ? 'Modul Tumbuhan Telah Selesai Dipelajari! 🍅' : 'Sudah Paham Siklus Hidup Tumbuhan?'}
            </h4>
            <p className="text-xs sm:text-sm text-emerald-800 font-medium">
              Selesaikan modul ini untuk menambah bintang dan membuka lencana Sahabat Tunas Hijau!
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            soundFx.playCelebrate();
            onCompleteModule('tumbuhan');
          }}
          disabled={isCompleted}
          className={`px-5 py-2.5 rounded-2xl font-black text-sm transition-all shadow-md cursor-pointer ${
            isCompleted
              ? 'bg-emerald-200 text-emerald-800 cursor-default'
              : 'bg-emerald-600 hover:bg-emerald-700 text-white active:scale-95'
          }`}
        >
          {isCompleted ? '✅ Sudah Selesai' : 'Tandai Selesai & Ambil Bintang ⭐'}
        </button>
      </div>
    </div>
  );
};
