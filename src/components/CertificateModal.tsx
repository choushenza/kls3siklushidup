import React from 'react';
import { ALL_BADGES } from '../utils/gameRules';
import { soundFx } from '../utils/soundEffects';
import { X, Printer, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  starsCount: number;
  quizScore: number;
  unlockedBadgeIds: string[];
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  studentName,
  starsCount,
  quizScore,
  unlockedBadgeIds,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border-4 border-amber-300 p-6 sm:p-10 my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            soundFx.playPop();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer print:hidden"
          title="Tutup Piagam"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Border Frame */}
        <div className="border-4 border-dashed border-amber-400 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-amber-50/40 via-white to-amber-50/30 text-center relative overflow-hidden">
          {/* Top Decorative Medallion */}
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center text-4xl shadow-md border-3 border-white mb-3">
            🏅
          </div>

          <div className="space-y-1 mb-4">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 inline-block">
              Bimbingan Belajar Saung Pintar Dukuhwaru
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-800 font-heading tracking-wide">
              PIAGAM PENGHARGAAN
            </h2>
            <p className="text-xs sm:text-sm font-bold text-amber-800">
              Pahlawan Pembelajar Mandiri • IPAS Kelas 3 SD
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-4">
            Dengan bangga piagam ini dianugerahkan kepada:
          </p>

          {/* Student Name */}
          <div className="my-3">
            <h3 className="text-2xl sm:text-3xl font-black text-amber-600 font-heading border-b-2 border-amber-300 pb-2 inline-block px-6">
              {studentName}
            </h3>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-slate-700 max-w-lg mx-auto leading-relaxed">
            Telah berhasil menyelesaikan rangkaian petualangan ilmiah <strong>IPAS Bab 4: Siklus Hidup yang Menakjubkan</strong>, menguasai metamorfosis hewan, pertumbuhan biji tanaman, serta aktif melakukan aksi pelestarian alam di Dukuhwaru.
          </p>

          {/* Stats Bar */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 my-5 p-3 rounded-2xl bg-amber-100/70 border border-amber-300 max-w-md mx-auto">
            <div>
              <span className="text-[11px] font-bold text-amber-800 uppercase block">⭐ Bintang</span>
              <span className="text-xl font-black text-amber-950 font-heading">{starsCount}</span>
            </div>
            <div className="w-px h-8 bg-amber-300" />
            <div>
              <span className="text-[11px] font-bold text-amber-800 uppercase block">🏆 Nilai Kuis</span>
              <span className="text-xl font-black text-amber-950 font-heading">{quizScore || 100} / 100</span>
            </div>
            <div className="w-px h-8 bg-amber-300" />
            <div>
              <span className="text-[11px] font-bold text-amber-800 uppercase block">🛡️ Gelar</span>
              <span className="text-xs font-black text-emerald-800">Pahlawan Alam</span>
            </div>
          </div>

          {/* Badges Collection */}
          <div className="my-4">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-2">
              Lencana Prestasi yang Dikumpulkan:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-lg mx-auto">
              {ALL_BADGES.map((b) => {
                const isUnlocked = unlockedBadgeIds.includes(b.id);
                return (
                  <div
                    key={b.id}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-black border transition-all ${
                      isUnlocked
                        ? 'bg-amber-100 border-amber-400 text-amber-950 shadow-xs'
                        : 'bg-slate-100 border-slate-200 text-slate-400 opacity-50'
                    }`}
                    title={b.description}
                  >
                    <span>{b.icon}</span>
                    <span>{b.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Signature / Date Section */}
          <div className="grid grid-cols-2 gap-4 mt-8 pt-4 border-t border-amber-200 text-xs font-semibold text-slate-600">
            <div>
              <p>Dukuhwaru, {currentDate}</p>
              <p className="mt-8 font-bold text-slate-800">Tutor Pembimbing Saung Pintar</p>
            </div>
            <div>
              <p className="text-emerald-700 font-bold">Terverifikasi Resmi</p>
              <div className="w-16 h-16 mx-auto mt-2 rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-600 font-black text-[10px] transform -rotate-12 bg-emerald-50/50">
                SAUNG PINTAR
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls for Printing & Close */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-end gap-3 print:hidden">
          <button
            type="button"
            onClick={handlePrint}
            className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
          >
            <Printer className="w-4 h-4" /> Cetak / Simpan PDF
          </button>
          <button
            type="button"
            onClick={() => {
              soundFx.playPop();
              onClose();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
