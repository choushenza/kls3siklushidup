import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/curriculumData';
import { calculateQuizScore } from '../utils/gameRules';
import { submitLeaderboardEntry } from '../lib/supabaseLeaderboard';
import { soundFx } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { Award, RotateCcw, CheckCircle2, XCircle, ArrowRight, ArrowLeft, Trophy, Loader2, AlertCircle } from 'lucide-react';

interface ModuleQuizProps {
  studentName: string;
  onFinishQuiz: (score: number, percentage: number) => void;
  onOpenCertificate: () => void;
  onOpenLeaderboard: () => void;
  onScoreSaved?: () => void;
  savedScore: number;
  isCompleted: boolean;
}

export const ModuleQuiz: React.FC<ModuleQuizProps> = ({
  studentName,
  onFinishQuiz,
  onOpenCertificate,
  onOpenLeaderboard,
  onScoreSaved,
  savedScore,
  isCompleted,
}) => {
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState<boolean>(isCompleted);
  const [userRank, setUserRank] = useState<number | null>(null);
  const [isSavingScore, setIsSavingScore] = useState<boolean>(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const question = QUIZ_QUESTIONS[currentQIndex];
  const selectedAnswer = userAnswers[question.id];

  const answerKeys: Record<number, string> = {};
  QUIZ_QUESTIONS.forEach((q) => {
    answerKeys[q.id] = q.correctAnswer;
  });

  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const handleSelectOption = (optionId: string) => {
    if (userAnswers[question.id]) return; // already answered this question

    const newAnswers = { ...userAnswers, [question.id]: optionId };
    setUserAnswers(newAnswers);

    if (optionId === question.correctAnswer) {
      soundFx.playSuccess();
    } else {
      soundFx.playTryAgain();
    }
  };

  const handleNextQuestion = () => {
    soundFx.playClick();
    if (currentQIndex < totalQuestions - 1) {
      setCurrentQIndex(currentQIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    soundFx.playClick();
    if (currentQIndex > 0) {
      setCurrentQIndex(currentQIndex - 1);
    }
  };

  const handleJumpToQuestion = (idx: number) => {
    soundFx.playPop();
    setCurrentQIndex(idx);
  };

  const handleFinalSubmit = async () => {
    const result = calculateQuizScore(userAnswers, answerKeys);
    setIsFinished(true);
    onFinishQuiz(result.score, result.percentage);

    // Save to Supabase leaderboard
    const starsEarned = Math.round(result.score / 2);

    setIsSavingScore(true);
    setSaveError(null);
    setUserRank(null);

    try {
      const { rank } = await submitLeaderboardEntry({
        name: `${studentName} (Kelas 3)`,
        score: result.score,
        correctCount: result.correctCount,
        totalQuestions,
        percentage: result.percentage,
        starsEarned,
      });
      setUserRank(rank);
      onScoreSaved?.();
    } catch (error) {
      setSaveError(
        error instanceof Error ? error.message : 'Nilai gagal disimpan ke papan juara.'
      );
    } finally {
      setIsSavingScore(false);
    }

    if (result.percentage >= 70) {
      soundFx.playCelebrate();
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.5 },
      });
    }
  };

  const handleRestartQuiz = () => {
    soundFx.playPop();
    setUserAnswers({});
    setCurrentQIndex(0);
    setIsFinished(false);
    setUserRank(null);
    setSaveError(null);
    setIsSavingScore(false);
  };

  const result = calculateQuizScore(userAnswers, answerKeys);

  return (
    <div className="space-y-6">
      {/* Quiz Banner with Leaderboard Shortcut */}
      <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-3xl p-5 sm:p-6 text-white shadow-lg relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <span>⭐ Kuis Mandiri IPAS Kelas 3</span>
            <span>•</span>
            <span>30 Soal Siklus Hidup</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading drop-shadow-xs">
            Tantangan 30 Soal & Papan Juara! 🎯
          </h2>
          <p className="text-amber-50 text-xs sm:text-sm mt-1 font-medium leading-relaxed">
            Jawab 30 pertanyaan bergambar seputar daur hidup hewan, tumbuhan, dan aksi pelestarian alam untuk mencatat namamu di Papan Juara Saung Pintar Dukuhwaru!
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            soundFx.playPop();
            onOpenLeaderboard();
          }}
          className="self-start md:self-auto px-4 py-2.5 rounded-2xl bg-white hover:bg-amber-50 text-amber-900 font-black text-xs sm:text-sm shadow-md flex items-center gap-2 cursor-pointer active:scale-95 transition-all"
        >
          <Trophy className="w-5 h-5 text-amber-500" />
          <span>Lihat Papan Juara 🏆</span>
        </button>
      </div>

      {!isFinished ? (
        <div className="bg-white rounded-3xl p-5 sm:p-8 border-3 border-amber-300 shadow-md space-y-6">
          {/* Question Numbers Quick Navigation Grid */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black text-slate-700 uppercase">
                Pilih Nomor Soal (1 - {totalQuestions}):
              </span>
              <span className="text-xs font-bold text-slate-500">
                {answeredCount} dari {totalQuestions} Soal Terjawab ({progressPercent}%)
              </span>
            </div>

            {/* Grid of 30 question chips */}
            <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-15 gap-1.5 p-2.5 bg-amber-50/60 rounded-2xl border border-amber-200">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const isCurrent = idx === currentQIndex;
                const isAnswered = !!userAnswers[q.id];
                const isCorrect = userAnswers[q.id] === q.correctAnswer;

                let chipStyle = 'bg-white text-slate-700 border-slate-200 hover:border-amber-400';

                if (isAnswered) {
                  chipStyle = isCorrect
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-400 font-black'
                    : 'bg-rose-100 text-rose-800 border-rose-400 font-black';
                }

                if (isCurrent) {
                  chipStyle += ' ring-2 ring-amber-500 border-amber-500 font-extrabold scale-110 z-10 shadow-xs';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => handleJumpToQuestion(idx)}
                    className={`h-8 rounded-xl border text-xs flex items-center justify-center transition-all cursor-pointer ${chipStyle}`}
                    title={`Lompat ke Soal #${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Question Header */}
          <div className="flex items-center justify-between pb-3 border-b border-amber-100">
            <span className="text-xs sm:text-sm font-black text-amber-900 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
              Soal Nomor {currentQIndex + 1} dari {totalQuestions}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Pilihan Ganda</span>
            </div>
          </div>

          {/* Question Text */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-3xl shrink-0 shadow-xs">
              {question.imageIcon}
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 font-heading leading-snug">
                {question.question}
              </h3>
            </div>
          </div>

          {/* 4 Options Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {question.options.map((opt) => {
              const isSelected = selectedAnswer === opt.id;
              const isSubmitted = !!selectedAnswer;
              const isCorrectOpt = opt.id === question.correctAnswer;

              let btnStyle = 'bg-white border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 text-slate-800';

              if (isSubmitted) {
                if (isCorrectOpt) {
                  btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-black ring-2 ring-emerald-300';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-100 border-rose-400 text-rose-950 ring-2 ring-rose-200';
                } else {
                  btnStyle = 'bg-slate-50 border-slate-200 opacity-60 text-slate-500';
                }
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectOption(opt.id)}
                  disabled={isSubmitted}
                  className={`p-4 rounded-2xl border-3 text-left transition-all flex items-center justify-between gap-3 cursor-pointer shadow-xs ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-amber-200/60 font-black text-sm flex items-center justify-center text-amber-900 shrink-0">
                      {opt.id}
                    </span>
                    <span className="font-bold text-sm sm:text-base leading-tight">
                      {opt.text}
                    </span>
                  </div>
                  <span className="text-xl shrink-0">{opt.emoji}</span>
                </button>
              );
            })}
          </div>

          {/* Instant Educational Explanation */}
          {selectedAnswer && (
            <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 animate-fadeIn">
              <div className="flex items-center gap-2 mb-1">
                {selectedAnswer === question.correctAnswer ? (
                  <span className="flex items-center gap-1.5 text-emerald-700 font-black text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Jawaban Tepat Sekali!
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-rose-700 font-black text-sm">
                    <XCircle className="w-5 h-5 text-rose-600" /> Jawaban Belum Tepat
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                {question.explanation}
              </p>
            </div>
          )}

          {/* Navigation Controls & Finish Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-amber-100">
            <button
              type="button"
              onClick={handlePrevQuestion}
              disabled={currentQIndex === 0}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                currentQIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 active:scale-95'
              }`}
            >
              <ArrowLeft className="w-4 h-4" /> Soal Sebelumnya
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              {currentQIndex < totalQuestions - 1 && (
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs sm:text-sm shadow-md flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-all"
                >
                  <span>Soal Berikutnya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {/* Final Submit Button */}
              <button
                type="button"
                onClick={handleFinalSubmit}
                className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm shadow-md flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-all ${
                  answeredCount === totalQuestions
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white ring-2 ring-emerald-300'
                    : 'bg-slate-800 hover:bg-slate-900 text-white'
                }`}
                title="Selesaikan pengerjaan dan lihat nilai kuis"
              >
                <span>Selesaikan & Nilai Kuis 🏁</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Quiz Completed Results Card */
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-4 border-amber-300 shadow-xl text-center space-y-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center text-5xl shadow-lg border-4 border-white animate-bounce-slow">
            🏆
          </div>

          <div>
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 inline-block mb-2">
              Hasil 30 Soal Kuis Pintar
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-800 font-heading">
              {result.percentage >= 70
                ? 'Luar Biasa, Prestasi Membanggakan! 🎉'
                : 'Kerja Bagus, Terus Tingkatkan Belajarmu! 💪'}
            </h3>
            <p className="text-sm sm:text-base font-semibold text-slate-600 mt-2 max-w-md mx-auto">
              {result.percentage >= 70
                ? `Selamat ${studentName}! Kamu telah menguasai seluruh materi Bab 4 Siklus Hidup yang Menakjubkan dengan sangat mandiri!`
                : `Semangat terus ya ${studentName}! Kamu bisa mempelajari lagi modul hewan dan tumbuhan lalu mengulang kuis untuk meraih nilai sempurna.`}
            </p>
          </div>

          {/* Stats Summary Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 p-6 rounded-3xl bg-amber-50 border-3 border-amber-300 shadow-inner">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase block">Nilai Kamu</span>
              <span className="text-4xl sm:text-5xl font-black text-amber-600 font-heading">
                {result.score}
              </span>
              <span className="text-xs font-bold text-slate-400 block">Skala 100</span>
            </div>

            <div className="w-px h-14 bg-amber-200 hidden sm:block" />

            <div>
              <span className="text-xs font-bold text-slate-500 uppercase block">Soal Benar</span>
              <span className="text-3xl sm:text-4xl font-black text-emerald-600 font-heading">
                {result.correctCount} / {totalQuestions}
              </span>
              <span className="text-xs font-bold text-slate-400 block">Pertanyaan Tepat</span>
            </div>

            <div className="w-px h-14 bg-amber-200 hidden sm:block" />

            <div>
              <span className="text-xs font-bold text-slate-500 uppercase block">Papan Juara</span>
              {isSavingScore ? (
                <span className="h-[36px] sm:h-[40px] flex items-center justify-center gap-1.5 text-sm font-black text-purple-700">
                  <Loader2 className="w-5 h-5 animate-spin" /> Menyimpan...
                </span>
              ) : saveError ? (
                <span className="text-2xl sm:text-3xl font-black text-rose-500 font-heading block">
                  —
                </span>
              ) : (
                <span className="text-2xl sm:text-3xl font-black text-purple-700 font-heading">
                  #{userRank ?? 1}
                </span>
              )}
              <span className="text-xs font-bold text-purple-600 block">
                {saveError ? 'Belum Tersimpan' : 'Peringkat Kamu 🏅'}
              </span>
            </div>
          </div>

          {/* Status penyimpanan ke Supabase */}
          {saveError ? (
            <div className="max-w-xl mx-auto p-3 rounded-2xl bg-rose-50 border-2 border-rose-200 text-rose-800 flex items-start gap-2 text-left">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div className="text-xs font-semibold leading-relaxed">
                <p className="font-black">Nilai belum masuk ke papan juara.</p>
                <p className="mt-0.5 break-words">{saveError}</p>
              </div>
            </div>
          ) : (
            !isSavingScore &&
            userRank !== null && (
              <p className="text-xs font-bold text-emerald-700">
                ✓ Nilai berhasil tersimpan di Papan Juara Supabase
              </p>
            )
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3 flex-wrap">
            <button
              type="button"
              onClick={handleRestartQuiz}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <RotateCcw className="w-4 h-4" /> Ulangi Kuis 30 Soal
            </button>

            <button
              type="button"
              onClick={() => {
                soundFx.playPop();
                onOpenLeaderboard();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-black text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
            >
              <Trophy className="w-4 h-4 text-yellow-300" /> Buka Papan Juara 🏆
            </button>

            <button
              type="button"
              onClick={() => {
                soundFx.playPop();
                onOpenCertificate();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
            >
              <Award className="w-4 h-4 text-yellow-300" /> Buka Piagam Penghargaan 📜
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
