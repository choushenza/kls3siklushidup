import React, { useState } from 'react';
import { ORGANISMS_DATA } from '../data/curriculumData';
import { Illustration } from './Illustrations';
import { soundFx } from '../utils/soundEffects';
import { CheckCircle2, ArrowRight, ArrowLeft, Star, Info } from 'lucide-react';

interface ModuleAnimalProps {
  onCompleteModule: (moduleId: string) => void;
  isCompleted: boolean;
}

export const ModuleAnimal: React.FC<ModuleAnimalProps> = ({ onCompleteModule, isCompleted }) => {
  const [selectedAnimalId, setSelectedAnimalId] = useState<string>('kupu-kupu');
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const [showComparison, setShowComparison] = useState<boolean>(false);

  const currentAnimal = ORGANISMS_DATA.find((a) => a.id === selectedAnimalId) || ORGANISMS_DATA[0];
  const currentStage = currentAnimal.stages[activeStageIdx] || currentAnimal.stages[0];

  const handleSelectAnimal = (id: string) => {
    soundFx.playPop();
    setSelectedAnimalId(id);
    setActiveStageIdx(0);
  };

  const handleNextStage = () => {
    soundFx.playClick();
    if (activeStageIdx < currentAnimal.stages.length - 1) {
      setActiveStageIdx(activeStageIdx + 1);
    }
  };

  const handlePrevStage = () => {
    soundFx.playClick();
    if (activeStageIdx > 0) {
      setActiveStageIdx(activeStageIdx - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Banner with Saung Pintar Vibe */}
      <div className="bg-gradient-to-r from-amber-400/90 via-orange-400/90 to-yellow-400/90 rounded-3xl p-5 sm:p-6 text-white shadow-lg relative overflow-hidden">
        <div className="absolute -right-8 -bottom-10 opacity-20 pointer-events-none">
          <Illustration type="kupu-dewasa" className="w-64 h-64" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <span>🐾 Bab 4 IPAS Kelas 3</span>
            <span>•</span>
            <span>Siklus Hidup Hewan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading drop-shadow-xs">
            Rahasia Kehidupan & Transformasi Hewan! 🦋
          </h2>
          <p className="text-amber-50 text-sm sm:text-base mt-1.5 font-medium leading-relaxed">
            Hewan berkembang biak dengan bertelur atau melahirkan. Ada yang bentuk anaknya langsung mirip induknya, tapi ada juga yang mengalami perubahan bentuk ajaib bernama <strong>Metamorfosis</strong>!
          </p>
        </div>
      </div>

      {/* Animal Selector Cards */}
      <div>
        <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
          <span>Pilih Hewan yang Ingin Kamu Selidiki:</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {ORGANISMS_DATA.map((animal) => {
            const isSelected = animal.id === selectedAnimalId;
            let iconEmoji = '🦋';
            let typeBadge = 'Sempurna';
            if (animal.id === 'katak') {
              iconEmoji = '🐸';
              typeBadge = 'Sempurna';
            } else if (animal.id === 'belalang') {
              iconEmoji = '🦗';
              typeBadge = 'Tdk Sempurna';
            } else if (animal.id === 'kucing') {
              iconEmoji = '🐱';
              typeBadge = 'Tanpa Metamorfosis';
            }

            return (
              <button
                key={animal.id}
                type="button"
                onClick={() => handleSelectAnimal(animal.id)}
                className={`flex flex-col items-center p-3.5 rounded-3xl border-3 text-center transition-all transform cursor-pointer ${
                  isSelected
                    ? 'bg-amber-100/90 border-amber-500 shadow-md scale-102 ring-4 ring-amber-200'
                    : 'bg-white border-slate-200 hover:border-amber-300 hover:bg-amber-50/50 shadow-xs'
                }`}
              >
                <div className="text-3xl sm:text-4xl mb-1.5">{iconEmoji}</div>
                <span className="font-extrabold text-sm sm:text-base text-slate-800 leading-tight">
                  {animal.name}
                </span>
                <span
                  className={`mt-1.5 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    animal.type === 'metamorfosis-sempurna'
                      ? 'bg-purple-100 text-purple-800'
                      : animal.type === 'metamorfosis-tidak-sempurna'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {typeBadge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage Explorer */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border-3 border-amber-200 shadow-md">
        {/* Stage Timeline Navigation Buttons */}
        <div className="flex items-center justify-between pb-4 border-b border-amber-100 mb-6 gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 sm:gap-3">
            {currentAnimal.stages.map((stage, idx) => {
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
                      ? 'bg-amber-500 text-white shadow-md scale-105 ring-2 ring-amber-300'
                      : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-xs">
                    {stage.stageNumber}
                  </span>
                  <span>{stage.name}</span>
                </button>
              );
            })}
          </div>
          <span className="text-xs font-bold text-slate-500 whitespace-nowrap hidden sm:inline">
            Tahap {activeStageIdx + 1} dari {currentAnimal.stages.length}
          </span>
        </div>

        {/* Stage Detail Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Visual Illustration Showcase */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-amber-50/80 to-orange-50/60 rounded-3xl border-2 border-amber-200">
            <div className="relative group">
              <div className="w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <Illustration type={currentStage.svgType} className="w-full h-full drop-shadow-md" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white px-3 py-1 rounded-2xl border-2 border-amber-300 shadow-xs flex items-center gap-1.5">
                <span className="text-xs font-black text-amber-800">Tahap #{currentStage.stageNumber}</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-lg font-black text-slate-800 font-heading">
                {currentStage.name}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Habitat: {currentAnimal.habitat}
              </p>
            </div>
          </div>

          {/* Bite-sized Chunked Explanation */}
          <div className="md:col-span-7 space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 inline-block">
                Penjelasan Singkat & Mudah
              </span>
              <p className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                {currentStage.description}
              </p>
            </div>

            {/* Key Bullet Points */}
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <span className="text-xs font-black text-slate-600 uppercase tracking-wide">
                Hal Penting di Tahap Ini:
              </span>
              <ul className="space-y-2">
                {currentStage.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base font-semibold text-slate-700">
                    <span className="text-amber-500 text-base mt-0.5">⭐</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fun Fact Card */}
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300">
              <div className="text-2xl mt-0.5">💡</div>
              <div>
                <span className="text-xs font-extrabold uppercase text-amber-900 block">
                  Tahukah Kamu?
                </span>
                <p className="text-xs sm:text-sm font-bold text-amber-800 leading-tight">
                  {currentStage.funFact}
                </p>
              </div>
            </div>

            {/* Stage Navigation Arrows */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={handlePrevStage}
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
                onClick={handleNextStage}
                disabled={activeStageIdx === currentAnimal.stages.length - 1}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeStageIdx === currentAnimal.stages.length - 1
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-amber-500 hover:bg-amber-600 text-white shadow-md active:scale-95'
                }`}
              >
                Tahap Berikutnya <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Matrix Accordion / Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-3 border-amber-200 shadow-md">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📊</span>
            <div>
              <h4 className="text-lg font-extrabold text-slate-800 font-heading">
                Tabel Ringkasan: Jenis Siklus Hidup Hewan
              </h4>
              <p className="text-xs text-slate-500">
                Pembeda utama berdasarkan ada atau tidaknya tahap kepompong (pupa)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              soundFx.playClick();
              setShowComparison(!showComparison);
            }}
            className="px-3.5 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs cursor-pointer"
          >
            {showComparison ? 'Sembunyikan Tabel ▲' : 'Buka Tabel Lengkap ▼'}
          </button>
        </div>

        {showComparison && (
          <div className="overflow-x-auto no-scrollbar pt-2">
            <table className="w-full text-left text-sm border-collapse min-w-[550px]">
              <thead>
                <tr className="bg-amber-100 text-amber-950 font-extrabold border-b-2 border-amber-300">
                  <th className="p-3 rounded-l-2xl">Jenis Siklus</th>
                  <th className="p-3">Perubahan Bentuk</th>
                  <th className="p-3">Tahap Kepompong (Pupa)?</th>
                  <th className="p-3 rounded-r-2xl">Contoh Hewan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100 font-semibold text-slate-700">
                <tr className="hover:bg-amber-50/60">
                  <td className="p-3 font-bold text-purple-700">Metamorfosis Sempurna</td>
                  <td className="p-3">Sangat berbeda sejak menetas</td>
                  <td className="p-3 text-emerald-700 font-bold">✅ Ada tahap Pupa</td>
                  <td className="p-3">Kupu-kupu, Katak, Nyamuk, Lalat</td>
                </tr>
                <tr className="hover:bg-amber-50/60">
                  <td className="p-3 font-bold text-emerald-700">Metamorfosis Tidak Sempurna</td>
                  <td className="p-3">Mirip induknya (nimfa), hanya belum bersayap</td>
                  <td className="p-3 text-rose-600 font-bold">❌ Tidak ada Pupa</td>
                  <td className="p-3">Belalang, Kecoak, Capung, Jangkrik</td>
                </tr>
                <tr className="hover:bg-amber-50/60">
                  <td className="p-3 font-bold text-blue-700">Tanpa Metamorfosis</td>
                  <td className="p-3">Sama persis sejak lahir, hanya bertambah besar</td>
                  <td className="p-3 text-rose-600 font-bold">❌ Tidak ada Pupa</td>
                  <td className="p-3">Kucing, Ayam, Kambing, Sapi, Ikan Paus</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Completion Banner */}
      <div className="bg-emerald-50 border-2 border-emerald-300 rounded-3xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-2xl shadow-sm">
            {isCompleted ? <CheckCircle2 className="w-7 h-7" /> : <Star className="w-7 h-7 text-yellow-300 fill-yellow-300" />}
          </div>
          <div>
            <h4 className="font-extrabold text-emerald-950 font-heading text-base sm:text-lg">
              {isCompleted ? 'Modul Hewan Telah Selesai Dipelajari! 🎉' : 'Sudah Paham Siklus Hidup Hewan?'}
            </h4>
            <p className="text-xs sm:text-sm text-emerald-800 font-medium">
              Tandai modul ini selesai untuk menambah kemajuan belajarmu dan mendapatkan Bintang Prestasi!
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            soundFx.playCelebrate();
            onCompleteModule('hewan');
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
