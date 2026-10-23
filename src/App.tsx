import React, { useCallback, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ModuleAnimal } from './components/ModuleAnimal';
import { ModulePlant } from './components/ModulePlant';
import { ModuleConservation } from './components/ModuleConservation';
import { ModuleGame } from './components/ModuleGame';
import { ModuleQuiz } from './components/ModuleQuiz';
import { CertificateModal } from './components/CertificateModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { calculateProgress, evaluateBadges } from './utils/gameRules';
import { fetchLeaderboardEntries } from './lib/supabaseLeaderboard';
import { downloadStandaloneHtml } from './utils/exportSingleHtml';
import { soundFx } from './utils/soundEffects';
import { Sparkles, Trophy, Heart } from 'lucide-react';
import { LeaderboardEntry } from './types';

export default function App() {
  const [studentName, setStudentName] = useState<string>('Petualang Saung Pintar');
  const [starsCount, setStarsCount] = useState<number>(15); // initial starter stars for encouragement!
  const [activeTab, setActiveTab] = useState<string>('hewan');

  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [completedActions, setCompletedActions] = useState<string[]>([]);
  const [solvedGames, setSolvedGames] = useState<string[]>([]);

  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizPercentage, setQuizPercentage] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const [isCertificateOpen, setIsCertificateOpen] = useState<boolean>(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState<boolean>(false);
  const [leaderboardEntries, setLeaderboardEntries] = useState<LeaderboardEntry[]>([]);
  const [isLeaderboardLoading, setIsLeaderboardLoading] = useState<boolean>(false);
  const [leaderboardError, setLeaderboardError] = useState<string | null>(null);

  const refreshLeaderboard = useCallback(async () => {
    setIsLeaderboardLoading(true);
    try {
      const entries = await fetchLeaderboardEntries();
      setLeaderboardEntries(entries);
      setLeaderboardError(null);
    } catch (error) {
      setLeaderboardEntries([]);
      setLeaderboardError(
        error instanceof Error ? error.message : 'Gagal memuat papan juara dari Supabase.'
      );
    } finally {
      setIsLeaderboardLoading(false);
    }
  }, []);

  const openLeaderboard = useCallback(() => {
    setIsLeaderboardOpen(true);
    void refreshLeaderboard();
  }, [refreshLeaderboard]);

  // Muat papan juara dari Supabase saat aplikasi pertama kali dibuka.
  useEffect(() => {
    void refreshLeaderboard();
  }, [refreshLeaderboard]);

  // Overall progress calculation
  const progressPercent = calculateProgress(
    completedModules,
    solvedGames,
    quizCompleted,
    completedActions
  );

  // Dynamic badges evaluation
  const unlockedBadges = evaluateBadges({
    completedModules,
    solvedGames,
    quizPercentage,
    quizCompleted,
    conservationActionsDone: completedActions,
  });

  // Handle module completion
  const handleCompleteModule = (moduleId: string) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules((prev) => [...prev, moduleId]);
      setStarsCount((prev) => prev + 25);
    }
  };

  // Handle conservation action toggle
  const handleToggleConservation = (actionId: string) => {
    if (!completedActions.includes(actionId)) {
      setCompletedActions((prev) => [...prev, actionId]);
      setStarsCount((prev) => prev + 15);
    }
  };

  // Handle game solve
  const handleSolveGameLevel = (levelId: string) => {
    if (!solvedGames.includes(levelId)) {
      setSolvedGames((prev) => [...prev, levelId]);
      setStarsCount((prev) => prev + 20);
    }
  };

  // Handle quiz finish
  const handleFinishQuiz = (score: number, percentage: number) => {
    setQuizScore(score);
    setQuizPercentage(percentage);
    setQuizCompleted(true);
    setStarsCount((prev) => prev + Math.round(score / 2));
    // Segarkan daftar peringkat setelah nilai tersimpan di Supabase.
    void refreshLeaderboard();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/60 via-emerald-50/30 to-amber-50/50 flex flex-col text-slate-800">
      {/* App Header */}
      <Header
        studentName={studentName}
        setStudentName={setStudentName}
        starsCount={starsCount}
        progressPercent={progressPercent}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenCertificate={() => setIsCertificateOpen(true)}
        onOpenLeaderboard={openLeaderboard}
        onExportHtml={downloadStandaloneHtml}
      />

      {/* Main Learning Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex-1 w-full">
        {activeTab === 'hewan' && (
          <ModuleAnimal
            onCompleteModule={handleCompleteModule}
            isCompleted={completedModules.includes('hewan')}
          />
        )}

        {activeTab === 'tumbuhan' && (
          <ModulePlant
            onCompleteModule={handleCompleteModule}
            isCompleted={completedModules.includes('tumbuhan')}
          />
        )}

        {activeTab === 'pelestarian' && (
          <ModuleConservation
            completedActions={completedActions}
            onToggleAction={handleToggleConservation}
            onCompleteModule={handleCompleteModule}
            isCompleted={completedModules.includes('pelestarian')}
          />
        )}

        {activeTab === 'game' && (
          <ModuleGame
            solvedGames={solvedGames}
            onSolveLevel={handleSolveGameLevel}
          />
        )}

        {activeTab === 'kuis' && (
          <ModuleQuiz
            studentName={studentName}
            onFinishQuiz={handleFinishQuiz}
            onOpenCertificate={() => setIsCertificateOpen(true)}
            onOpenLeaderboard={openLeaderboard}
            onScoreSaved={refreshLeaderboard}
            savedScore={quizScore}
            isCompleted={quizCompleted}
          />
        )}
      </main>

      {/* Bottom Cheerful Mascot Bar */}
      <aside className="max-w-7xl mx-auto px-4 sm:px-6 pb-6 w-full">
        <div className="bg-gradient-to-r from-emerald-100/90 via-teal-100/90 to-amber-100/90 border-2 border-emerald-300 rounded-3xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="text-3xl animate-bounce-slow">🦋🌱</div>
            <div>
              <h4 className="font-extrabold text-emerald-950 font-heading text-sm sm:text-base flex items-center gap-1.5">
                Pesan Kiki & Timi (Maskot Saung Pintar) <Sparkles className="w-4 h-4 text-amber-500" />
              </h4>
              <p className="text-xs sm:text-sm text-emerald-900 font-medium leading-tight">
                "Hebat sekali! Belajar dengan mandiri membuat kita semakin pintar dan percaya diri. Raih nilai terbaik di Kuis 30 Soal dan puncaki Papan Juara!"
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => {
                soundFx.playPop();
                openLeaderboard();
              }}
              className="px-4 py-2 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Trophy className="w-4 h-4 text-yellow-300" /> Papan Juara
            </button>
            <button
              type="button"
              onClick={() => {
                soundFx.playPop();
                setIsCertificateOpen(true);
              }}
              className="px-4 py-2 rounded-2xl bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-xs sm:text-sm border border-emerald-300 shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              Piagam Saya 📜
            </button>
            <button
              type="button"
              onClick={downloadStandaloneHtml}
              className="px-4 py-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm cursor-pointer"
            >
              Simpan File HTML 💾
            </button>
          </div>
        </div>
      </aside>

      {/* Footer */}
      <footer className="bg-white border-t border-amber-200 py-4 px-4 text-center text-xs text-slate-500 font-medium">
        <p className="flex items-center justify-center gap-1.5 flex-wrap">
          <span>Dibuat dengan</span> <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          <span>untuk Adik-Adik Bimbingan Belajar <strong>Saung Pintar Dukuhwaru</strong></span>
          <span>• Materi Resmi IPAS Kelas 3 SD Bab 4 (Edisi Revisi)</span>
        </p>
      </footer>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        studentName={studentName}
        starsCount={starsCount}
        quizScore={quizScore}
        unlockedBadgeIds={unlockedBadges}
      />

      {/* Leaderboard Modal */}
      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
        entries={leaderboardEntries}
        isLoading={isLeaderboardLoading}
        errorMessage={leaderboardError}
        currentStudentName={studentName}
        onRefresh={refreshLeaderboard}
        onStartQuizAgain={() => setActiveTab('kuis')}
      />
    </div>
  );
}

