import React from 'react';
import { CONSERVATION_CARDS } from '../data/curriculumData';
import { soundFx } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { ShieldCheck, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

interface ModuleConservationProps {
  completedActions: string[];
  onToggleAction: (actionId: string) => void;
  onCompleteModule: (moduleId: string) => void;
  isCompleted: boolean;
}

export const ModuleConservation: React.FC<ModuleConservationProps> = ({
  completedActions,
  onToggleAction,
  onCompleteModule,
  isCompleted,
}) => {
  const handleActionClick = (cardId: string) => {
    soundFx.playCelebrate();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
    });
    onToggleAction(cardId);
  };

  return (
    <div className="space-y-6">
      {/* Intro Hero Banner */}
      <div className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 rounded-3xl p-5 sm:p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <span>🛡️ Bab 4 IPAS Kelas 3</span>
            <span>•</span>
            <span>Aksi Pelestarian Alam</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading drop-shadow-xs">
            Pahlawan Pelestarian Saung Pintar Dukuhwaru! 🌟
          </h2>
          <p className="text-sky-50 text-sm sm:text-base mt-1.5 font-medium leading-relaxed">
            Hewan dan tumbuhan membutuhkan bantuan kita agar siklus hidup mereka tidak terputus. Klik tombol aksi nyata di bawah ini untuk menyelamatkan alam sekitar kita!
          </p>
        </div>
      </div>

      {/* Mission Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {CONSERVATION_CARDS.map((card) => {
          const isDone = completedActions.includes(card.id);

          return (
            <div
              key={card.id}
              className={`rounded-3xl p-5 sm:p-6 border-3 transition-all duration-300 shadow-md ${
                isDone
                  ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-400 ring-2 ring-emerald-200'
                  : 'bg-white border-sky-200 hover:border-sky-300'
              }`}
            >
              {/* Header Card */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${
                      isDone ? 'bg-emerald-500 text-white' : 'bg-sky-100 text-sky-800'
                    }`}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                      Sasaran: {card.target}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-800 font-heading leading-tight">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {isDone && (
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs border border-emerald-300 whitespace-nowrap">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Selesai
                  </span>
                )}
              </div>

              {/* Problem vs Hero Solution */}
              <div className="space-y-3 my-4">
                <div className="p-3 rounded-2xl bg-rose-50/80 border border-rose-200">
                  <span className="text-xs font-black text-rose-800 uppercase block">
                    ⚠️ Masalah di Sekitar Kita:
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-rose-950 mt-0.5">
                    {card.problem}
                  </p>
                  <p className="text-xs font-medium text-rose-800 mt-1 italic">
                    Dampak: {card.problemImpact}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-emerald-50/90 border border-emerald-200">
                  <span className="text-xs font-black text-emerald-800 uppercase block">
                    💡 Tindakan Kebaikan Kita:
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-950 mt-0.5">
                    {card.solutionAction}
                  </p>
                </div>

                {isDone && (
                  <div className="p-3 rounded-2xl bg-amber-50 border-2 border-amber-300 animate-fadeIn">
                    <span className="text-xs font-black text-amber-900 uppercase flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" /> Hasil Luar Biasa:
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-amber-900 mt-0.5">
                      {card.heroOutcome}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => handleActionClick(card.id)}
                className={`w-full py-3 px-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                  isDone
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-sky-500 hover:bg-sky-600 text-white active:scale-98'
                }`}
              >
                {isDone ? (
                  <>
                    <ShieldCheck className="w-5 h-5" /> Aksi Pahlawan Berhasil Dilakukan! ⭐
                  </>
                ) : (
                  <>
                    <HeartHandshake className="w-5 h-5" /> Lakukan Aksi Pahlawan Ini! 🚀
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Completion Banner */}
      <div className="bg-sky-50 border-2 border-sky-300 rounded-3xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center text-2xl shadow-sm">
            🛡️
          </div>
          <div>
            <h4 className="font-extrabold text-sky-950 font-heading text-base sm:text-lg">
              {completedActions.length === 4
                ? 'Semua Aksi Pahlawan Selesai Dilakukan! 🌟'
                : `${completedActions.length} dari 4 Aksi Pahlawan Terlaksana`}
            </h4>
            <p className="text-xs sm:text-sm text-sky-800 font-medium">
              Lakukan keempat aksi kebaikan di atas untuk menuntaskan materi pelestarian alam Saung Pintar!
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            soundFx.playCelebrate();
            onCompleteModule('pelestarian');
          }}
          disabled={isCompleted || completedActions.length < 4}
          className={`px-5 py-2.5 rounded-2xl font-black text-sm transition-all shadow-md cursor-pointer ${
            isCompleted
              ? 'bg-emerald-200 text-emerald-800 cursor-default'
              : completedActions.length < 4
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'bg-sky-600 hover:bg-sky-700 text-white active:scale-95'
          }`}
        >
          {isCompleted ? '✅ Modul Selesai' : 'Klaim Bintang Pahlawan ⭐'}
        </button>
      </div>
    </div>
  );
};
