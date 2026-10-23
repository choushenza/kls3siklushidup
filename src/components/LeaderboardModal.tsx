import React, { useState } from 'react';
import { LeaderboardEntry } from '../types';
import { soundFx } from '../utils/soundEffects';
import { Trophy, X, RefreshCw, Loader2, AlertCircle, Sparkles } from 'lucide-react';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  entries: LeaderboardEntry[];
  currentStudentName: string;
  isLoading?: boolean;
  errorMessage?: string | null;
  onRefresh: () => void;
  onStartQuizAgain?: () => void;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  isOpen,
  onClose,
  entries,
  currentStudentName,
  isLoading = false,
  errorMessage = null,
  onRefresh,
  onStartQuizAgain,
}) => {
  const [filter, setFilter] = useState<'top10' | 'all'>('top10');

  if (!isOpen) return null;

  const displayEntries = filter === 'top10' ? entries.slice(0, 10) : entries;
  const hasEntries = entries.length > 0;
  const normalizedCurrentName = currentStudentName.trim().toLowerCase();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border-4 border-amber-300 p-5 sm:p-7 my-6">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            soundFx.playPop();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
          title="Tutup Papan Juara"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Branding */}
        <div className="text-center mb-5">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center text-3xl shadow-md border-2 border-white mb-2">
            🏆
          </div>
          <span className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300 inline-block mb-1">
            Bimbingan Belajar Saung Pintar Dukuhwaru
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 font-heading">
            Papan Juara Kuis Pintar 🌟
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
            Daftar peringkat nilai tertinggi kuis 30 soal materi Siklus Hidup!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-amber-100">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                setFilter('top10');
              }}
              className={`px-3.5 py-1.5 rounded-xl font-black text-xs cursor-pointer transition-all ${
                filter === 'top10'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
              }`}
            >
              Top 10 Bintang 🥇
            </button>
            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                setFilter('all');
              }}
              className={`px-3.5 py-1.5 rounded-xl font-black text-xs cursor-pointer transition-all ${
                filter === 'all'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
              }`}
            >
              Semua Peserta ({entries.length})
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              soundFx.playPop();
              onRefresh();
            }}
            disabled={isLoading}
            className="text-[11px] font-bold text-slate-500 hover:text-slate-700 flex items-center gap-1 cursor-pointer disabled:opacity-50 disabled:cursor-wait"
            title="Muat ulang data dari Supabase"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Memuat...' : 'Muat Ulang'}
          </button>
        </div>

        {/* Error Notice */}
        {errorMessage && (
          <div className="mb-4 p-3 rounded-2xl bg-rose-50 border-2 border-rose-200 text-rose-800 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="text-xs font-semibold leading-relaxed">
              <p className="font-black">Papan juara belum bisa dimuat.</p>
              <p className="mt-0.5 break-words">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Leaderboard Entries List */}
        <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1 no-scrollbar">
          {isLoading && !hasEntries ? (
            <div className="py-12 flex flex-col items-center justify-center gap-3 text-slate-500">
              <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
              <p className="text-sm font-bold">Memuat papan juara dari Supabase...</p>
            </div>
          ) : !hasEntries ? (
            <div className="py-10 px-4 flex flex-col items-center justify-center text-center gap-3 bg-amber-50/60 rounded-2xl border-2 border-dashed border-amber-300">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-amber-300 flex items-center justify-center shadow-xs">
                <Trophy className="w-8 h-8 text-amber-400" />
              </div>
              <div>
                <p className="font-black text-slate-800 font-heading">Belum ada peserta di papan juara</p>
                <p className="text-xs font-semibold text-slate-500 mt-1 max-w-sm">
                  Papan juara masih kosong. Selesaikan Kuis 30 Soal dan jadilah siswa pertama yang
                  menorehkan namanya di sini! <Sparkles className="w-3.5 h-3.5 inline text-amber-500" />
                </p>
              </div>
              {onStartQuizAgain && (
                <button
                  type="button"
                  onClick={() => {
                    soundFx.playPop();
                    onClose();
                    onStartQuizAgain();
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs shadow-xs cursor-pointer"
                >
                  Mulai Kuis Sekarang 🎯
                </button>
              )}
            </div>
          ) : (
            displayEntries.map((entry, idx) => {
              const isTop1 = idx === 0;
              const isTop2 = idx === 1;
              const isTop3 = idx === 2;
              const isCurrentUser =
                entry.isCurrentUser ||
                (normalizedCurrentName.length > 0 &&
                  entry.name.toLowerCase().includes(normalizedCurrentName));

              let rankBadge = (
                <span className="w-8 h-8 rounded-xl bg-slate-100 font-black text-xs sm:text-sm text-slate-600 flex items-center justify-center">
                  #{idx + 1}
                </span>
              );

              let rowBg = 'bg-white hover:bg-amber-50/50 border-slate-200';

              if (isTop1) {
                rankBadge = (
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-yellow-400 to-amber-300 text-white font-black text-lg flex items-center justify-center shadow-sm">
                    🥇
                  </div>
                );
                rowBg = 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-300 ring-2 ring-amber-200';
              } else if (isTop2) {
                rankBadge = (
                  <div className="w-9 h-9 rounded-xl bg-slate-200 text-slate-700 font-black text-lg flex items-center justify-center shadow-sm">
                    🥈
                  </div>
                );
                rowBg = 'bg-slate-50 border-slate-300';
              } else if (isTop3) {
                rankBadge = (
                  <div className="w-9 h-9 rounded-xl bg-amber-200/80 text-amber-900 font-black text-lg flex items-center justify-center shadow-sm">
                    🥉
                  </div>
                );
                rowBg = 'bg-amber-50/40 border-amber-200';
              }

              if (isCurrentUser) {
                rowBg += ' ring-2 ring-emerald-400 border-emerald-400';
              }

              return (
                <div
                  key={entry.id}
                  className={`p-3 sm:p-3.5 rounded-2xl border-2 flex items-center justify-between gap-3 transition-all ${rowBg}`}
                >
                  {/* Left: Rank & Name */}
                  <div className="flex items-center gap-3 min-w-0">
                    {rankBadge}
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-extrabold text-sm sm:text-base text-slate-800 truncate font-heading">
                          {entry.name}
                        </span>
                        {isCurrentUser && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black border border-emerald-300">
                            Kamu! ✨
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 block">
                        {entry.correctCount} dari {entry.totalQuestions} soal benar • {entry.date}
                      </span>
                    </div>
                  </div>

                  {/* Right: Score & Stars */}
                  <div className="text-right shrink-0">
                    <div className="flex items-center justify-end gap-1 text-amber-600 font-black text-base sm:text-lg font-heading">
                      <span>{entry.score}</span>
                      <span className="text-xs text-slate-400 font-bold">/ 100</span>
                    </div>
                    <span className="text-[11px] font-bold text-yellow-700 bg-yellow-100/80 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                      ⭐ +{entry.starsEarned}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer actions */}
        <div className="mt-5 pt-3 border-t border-amber-100 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <p className="text-xs font-semibold text-slate-500 text-center sm:text-left">
            💡 Semakin banyak soal terjawab benar, semakin tinggi posisimu di papan juara!
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {onStartQuizAgain && (
              <button
                type="button"
                onClick={() => {
                  soundFx.playPop();
                  onClose();
                  onStartQuizAgain();
                }}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-xs cursor-pointer"
              >
                Coba Kuis Lagi 🎯
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                soundFx.playPop();
                onClose();
              }}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
