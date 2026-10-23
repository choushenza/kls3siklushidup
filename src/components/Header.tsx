import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Award, Download, User, Trophy } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

interface HeaderProps {
  studentName: string;
  setStudentName: (name: string) => void;
  starsCount: number;
  progressPercent: number;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenCertificate: () => void;
  onOpenLeaderboard: () => void;
  onExportHtml: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  studentName,
  setStudentName,
  starsCount,
  progressPercent,
  activeTab,
  setActiveTab,
  onOpenCertificate,
  onOpenLeaderboard,
  onExportHtml,
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(studentName);
  const [isMuted, setIsMuted] = useState(soundFx.isMuted);

  const toggleMute = () => {
    soundFx.isMuted = !soundFx.isMuted;
    setIsMuted(soundFx.isMuted);
    if (!soundFx.isMuted) {
      soundFx.playClick();
    }
  };

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
      setStudentName(tempName.trim());
    }
    setIsEditingName(false);
    soundFx.playPop();
  };

  const navItems = [
    { id: 'hewan', label: '1. Siklus Hewan', icon: '🦋', color: 'hover:bg-amber-100 hover:text-amber-900' },
    { id: 'tumbuhan', label: '2. Siklus Tumbuhan', icon: '🌱', color: 'hover:bg-emerald-100 hover:text-emerald-900' },
    { id: 'pelestarian', label: '3. Pahlawan Alam', icon: '🛡️', color: 'hover:bg-sky-100 hover:text-sky-900' },
    { id: 'game', label: '4. Arena Game', icon: '🧩', color: 'hover:bg-purple-100 hover:text-purple-900' },
    { id: 'kuis', label: '5. Kuis Pintar', icon: '⭐', color: 'hover:bg-yellow-100 hover:text-yellow-900' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-4 border-amber-200 shadow-sm transition-all">
      {/* Top Banner Branding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Logo & School Branding */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-emerald-400 flex items-center justify-center text-2xl shadow-md border-2 border-white transform hover:rotate-6 transition-transform">
              🌿
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  IPAS Kelas 3 SD
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                  Saung Pintar Dukuhwaru
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight font-heading flex items-center gap-2">
                Petualangan Siklus Hidup <Sparkles className="w-5 h-5 text-amber-500 fill-amber-400 inline" />
              </h1>
            </div>
          </div>

          {/* Student Profile & Action Controls */}
          <div className="flex items-center flex-wrap gap-2.5 sm:gap-3">
            {/* Student Name Card */}
            {isEditingName ? (
              <form onSubmit={handleSaveName} className="flex items-center gap-1.5">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  placeholder="Nama Siswa..."
                  autoFocus
                  className="px-3 py-1.5 text-sm font-semibold rounded-xl border-2 border-amber-400 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 w-36"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl shadow cursor-pointer"
                >
                  Simpan
                </button>
              </form>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setTempName(studentName);
                  setIsEditingName(true);
                  soundFx.playClick();
                }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 text-amber-900 font-bold text-sm shadow-xs transition-colors cursor-pointer"
                title="Klik untuk ganti nama siswa"
              >
                <div className="w-6 h-6 rounded-full bg-amber-300 flex items-center justify-center text-xs">
                  <User className="w-3.5 h-3.5 text-amber-800" />
                </div>
                <span>{studentName}</span>
                <span className="text-xs text-amber-600 font-normal">✏️</span>
              </button>
            )}

            {/* Stars Counter */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-yellow-100/90 border-2 border-yellow-400 text-yellow-900 font-bold text-sm shadow-xs animate-bounce-slow">
              <span className="text-lg">⭐</span>
              <span className="text-base font-extrabold">{starsCount}</span>
              <span className="text-xs text-yellow-700 hidden sm:inline">Bintang</span>
            </div>

            {/* Leaderboard Button */}
            <button
              type="button"
              onClick={() => {
                soundFx.playPop();
                onOpenLeaderboard();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              title="Lihat Papan Juara Kuis"
            >
              <Trophy className="w-4 h-4 text-yellow-300" />
              <span>Juara</span>
            </button>

            {/* Certificate Button */}
            <button
              type="button"
              onClick={() => {
                soundFx.playPop();
                onOpenCertificate();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              title="Lihat Piagam Penghargaan Siswa"
            >
              <Award className="w-4 h-4 text-yellow-300" />
              <span>Piagam</span>
            </button>

            {/* Offline HTML Download Button */}
            <button
              type="button"
              onClick={() => {
                soundFx.playPop();
                onExportHtml();
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-2xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 font-bold text-xs border border-slate-300 shadow-xs transition-colors cursor-pointer"
              title="Unduh File HTML Mandiri untuk dipakai offline di Saung Pintar"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden sm:inline">Unduh</span> .html
            </button>

            {/* Sound Toggle */}
            <button
              type="button"
              onClick={toggleMute}
              className={`p-2 rounded-2xl border-2 transition-all cursor-pointer ${
                isMuted
                  ? 'bg-slate-100 border-slate-300 text-slate-400'
                  : 'bg-teal-50 border-teal-400 text-teal-700 hover:bg-teal-100'
              }`}
              title={isMuted ? 'Nyalakan Suara Ceria' : 'Matikan Suara'}
              aria-label={isMuted ? 'Nyalakan Suara' : 'Matikan Suara'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-2.5 flex items-center gap-3">
          <div className="flex-1 bg-slate-100 rounded-full h-3.5 overflow-hidden border border-slate-200 p-0.5">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 rounded-full transition-all duration-700 shadow-sm"
              style={{ width: `${Math.max(5, progressPercent)}%` }}
            />
          </div>
          <span className="text-xs font-black text-slate-600 whitespace-nowrap">
            {progressPercent}% Petualangan Selesai 🚀
          </span>
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <nav className="bg-amber-100/60 border-t border-amber-200/80 px-4 sm:px-6 py-2 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3 min-w-max">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab(item.id);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-bold text-sm sm:text-base transition-all transform cursor-pointer ${
                  isActive
                    ? 'bg-white text-emerald-800 shadow-md border-2 border-emerald-400 scale-105'
                    : 'bg-white/50 text-slate-700 border-2 border-transparent hover:bg-white/80'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
