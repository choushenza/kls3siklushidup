import React, { useState } from 'react';
import { SEQUENCE_LEVELS } from '../data/curriculumData';
import { Illustration } from './Illustrations';
import { validateSequence } from '../utils/gameRules';
import { soundFx } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { ArrowLeft, ArrowRight, RotateCcw, Check, Sparkles, Trophy } from 'lucide-react';

interface ModuleGameProps {
  solvedGames: string[];
  onSolveLevel: (levelId: string) => void;
}

export const ModuleGame: React.FC<ModuleGameProps> = ({ solvedGames, onSolveLevel }) => {
  const [currentLevelIdx, setCurrentLevelIdx] = useState<number>(0);
  const currentLevel = SEQUENCE_LEVELS[currentLevelIdx];

  // Working order of items in this level
  const [userOrder, setUserOrder] = useState<string[]>(() =>
    currentLevel.items.map((it) => it.id)
  );

  const [feedback, setFeedback] = useState<{
    status: 'idle' | 'correct' | 'incorrect';
    message: string;
  }>({ status: 'idle', message: '' });

  // Update working order when level changes
  const switchLevel = (idx: number) => {
    soundFx.playPop();
    setCurrentLevelIdx(idx);
    const newLvl = SEQUENCE_LEVELS[idx];
    setUserOrder(newLvl.items.map((it) => it.id));
    setFeedback({ status: 'idle', message: '' });
  };

  // Move item left
  const moveLeft = (index: number) => {
    if (index === 0) return;
    soundFx.playClick();
    const newOrder = [...userOrder];
    const temp = newOrder[index - 1];
    newOrder[index - 1] = newOrder[index];
    newOrder[index] = temp;
    setUserOrder(newOrder);
    setFeedback({ status: 'idle', message: '' });
  };

  // Move item right
  const moveRight = (index: number) => {
    if (index === userOrder.length - 1) return;
    soundFx.playClick();
    const newOrder = [...userOrder];
    const temp = newOrder[index + 1];
    newOrder[index + 1] = newOrder[index];
    newOrder[index] = temp;
    setUserOrder(newOrder);
    setFeedback({ status: 'idle', message: '' });
  };

  // Reset to original shuffle
  const handleReset = () => {
    soundFx.playPop();
    setUserOrder(currentLevel.items.map((it) => it.id));
    setFeedback({ status: 'idle', message: '' });
  };

  // Check sequence answer
  const handleCheck = () => {
    const isCorrect = validateSequence(userOrder, currentLevel.targetOrder);

    if (isCorrect) {
      soundFx.playCelebrate();
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
      });
      setFeedback({
        status: 'correct',
        message: 'Hore! Hebat sekali, urutan daur hidupmu tepat 100%! 🌟 Kamu anak yang sangat mandiri dan cermat!',
      });
      onSolveLevel(currentLevel.id);
    } else {
      soundFx.playTryAgain();
      setFeedback({
        status: 'incorrect',
        message: 'Urutan masih belum tepat. Ayo coba cermati kembali dan tukar posisinya dengan teliti. Kamu pasti bisa! 💪',
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Banner */}
      <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-3xl p-5 sm:p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <span>🧩 Arena Game Interaktif</span>
            <span>•</span>
            <span>Teka-Teki Urutkan Siklus</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading drop-shadow-xs">
            Susun Urutan Daur Hidup! 🎯
          </h2>
          <p className="text-purple-100 text-sm sm:text-base mt-1.5 font-medium leading-relaxed">
            Gunakan tombol panah kiri ⬅️ dan kanan ➡️ pada setiap kartu untuk mengatur tahapan dari nomor 1 sampai selesai secara berurutan.
          </p>
        </div>
      </div>

      {/* Level Selector Tabs */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar">
        {SEQUENCE_LEVELS.map((lvl, idx) => {
          const isCurrent = idx === currentLevelIdx;
          const isSolved = solvedGames.includes(lvl.id);

          return (
            <button
              key={lvl.id}
              type="button"
              onClick={() => switchLevel(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-black text-xs sm:text-sm whitespace-nowrap transition-all shadow-xs cursor-pointer ${
                isCurrent
                  ? 'bg-purple-600 text-white shadow-md scale-102 ring-2 ring-purple-300'
                  : 'bg-white text-slate-700 hover:bg-purple-50 border border-slate-200'
              }`}
            >
              <span>{lvl.category === 'Hewan' ? '🐾' : '🌱'}</span>
              <span>Level {idx + 1}</span>
              {isSolved && <span className="text-yellow-400">⭐</span>}
            </button>
          );
        })}
      </div>

      {/* Active Game Level Workspace */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border-3 border-purple-200 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-purple-100">
          <div>
            <div className="inline-block px-3 py-0.5 rounded-full bg-purple-100 text-purple-800 text-xs font-black mb-1">
              {currentLevel.organismName}
            </div>
            <h3 className="text-xl font-black text-slate-800 font-heading">
              {currentLevel.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {currentLevel.description}
            </p>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer self-start sm:self-auto"
            title="Kembalikan urutan awal"
          >
            <RotateCcw className="w-4 h-4" /> Acak Ulang
          </button>
        </div>

        {/* Ordered Cards Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {userOrder.map((itemId, idx) => {
            const item = currentLevel.items.find((it) => it.id === itemId);
            if (!item) return null;

            return (
              <div
                key={item.id}
                className="bg-gradient-to-b from-purple-50/70 to-indigo-50/50 rounded-3xl p-4 border-3 border-purple-200 flex flex-col justify-between items-center text-center shadow-sm relative group hover:border-purple-400 transition-all"
              >
                {/* Step Position Badge */}
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-black text-sm flex items-center justify-center shadow-md mb-2">
                  #{idx + 1}
                </div>

                {/* Vector Illustration */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center my-2 transform group-hover:scale-105 transition-transform">
                  <Illustration type={item.svgType} className="w-full h-full drop-shadow-xs" />
                </div>

                {/* Details */}
                <div className="my-2">
                  <h4 className="font-black text-slate-800 text-sm sm:text-base font-heading">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium leading-tight">
                    {item.description}
                  </p>
                </div>

                {/* Reorder Arrows */}
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-purple-200/60 w-full justify-center">
                  <button
                    type="button"
                    onClick={() => moveLeft(idx)}
                    disabled={idx === 0}
                    className={`p-2 rounded-xl text-xs font-black flex items-center justify-center transition-all ${
                      idx === 0
                        ? 'opacity-30 cursor-not-allowed bg-slate-100 text-slate-400'
                        : 'bg-white hover:bg-purple-100 text-purple-700 shadow-xs active:scale-95 border border-purple-200 cursor-pointer'
                    }`}
                    title="Geser ke kiri / posisi sebelumnya"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <span className="text-xs font-bold text-slate-400">Tukar</span>

                  <button
                    type="button"
                    onClick={() => moveRight(idx)}
                    disabled={idx === userOrder.length - 1}
                    className={`p-2 rounded-xl text-xs font-black flex items-center justify-center transition-all ${
                      idx === userOrder.length - 1
                        ? 'opacity-30 cursor-not-allowed bg-slate-100 text-slate-400'
                        : 'bg-white hover:bg-purple-100 text-purple-700 shadow-xs active:scale-95 border border-purple-200 cursor-pointer'
                    }`}
                    title="Geser ke kanan / posisi berikutnya"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button & Instant Feedback */}
        <div className="mt-8 pt-6 border-t border-purple-100 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={handleCheck}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black text-base shadow-lg active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Check className="w-5 h-5" /> Periksa Urutan Saya! ✨
          </button>

          {/* Feedback Display */}
          {feedback.status === 'correct' && (
            <div className="w-full max-w-xl p-4 rounded-2xl bg-emerald-100 border-2 border-emerald-400 text-emerald-950 font-bold text-center text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs animate-bounce-slow">
              <Sparkles className="w-6 h-6 text-emerald-600 shrink-0" />
              <span>{feedback.message}</span>
            </div>
          )}

          {feedback.status === 'incorrect' && (
            <div className="w-full max-w-xl p-4 rounded-2xl bg-amber-100 border-2 border-amber-400 text-amber-950 font-bold text-center text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs">
              <span className="text-xl">💪</span>
              <span>{feedback.message}</span>
            </div>
          )}
        </div>
      </div>

      {/* Completion Status of All Games */}
      <div className="bg-purple-50 border-2 border-purple-300 rounded-3xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-500 text-white flex items-center justify-center text-2xl shadow-sm">
            <Trophy className="w-7 h-7 text-yellow-300" />
          </div>
          <div>
            <h4 className="font-extrabold text-purple-950 font-heading text-base sm:text-lg">
              {solvedGames.length === SEQUENCE_LEVELS.length
                ? 'Semua Level Game Berhasil Dituntaskan! 🏆'
                : `${solvedGames.length} dari ${SEQUENCE_LEVELS.length} Level Game Telah Diselesaikan`}
            </h4>
            <p className="text-xs sm:text-sm text-purple-800 font-medium">
              Selesaikan semua level untuk membuktikan kemandirianmu dan membuka lencana Pakar Urutan Siklus!
            </p>
          </div>
        </div>

        {currentLevelIdx < SEQUENCE_LEVELS.length - 1 && (
          <button
            type="button"
            onClick={() => switchLevel(currentLevelIdx + 1)}
            className="px-5 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-black text-sm shadow-md cursor-pointer active:scale-95"
          >
            Lanjut Level Berikutnya ➡️
          </button>
        )}
      </div>
    </div>
  );
};
