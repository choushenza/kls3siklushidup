/**
 * Pure logic and validation rules for Saung Pintar Dukuhwaru Lifecycle App
 */

export interface BadgeDefinition {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgGradient: string;
}

export const ALL_BADGES: BadgeDefinition[] = [
  {
    id: 'badge-peneliti-kupu',
    title: 'Peneliti Metamorfosis',
    description: 'Mempelajari siklus hidup hewan sempurna & tidak sempurna!',
    icon: '🦋',
    bgGradient: 'from-amber-400 to-orange-500',
  },
  {
    id: 'badge-sahabat-tunas',
    title: 'Sahabat Tunas Hijau',
    description: 'Memahami bagaimana benih tumbuh menjadi pohon berbuah!',
    icon: '🌱',
    bgGradient: 'from-emerald-400 to-teal-500',
  },
  {
    id: 'badge-pelindung-bumi',
    title: 'Penjaga Bumi Dukuhwaru',
    description: 'Menyelesaikan semua aksi penyelamatan flora & fauna!',
    icon: '🛡️',
    bgGradient: 'from-sky-400 to-blue-600',
  },
  {
    id: 'badge-master-urut',
    title: 'Pakar Urutan Siklus',
    description: 'Berhasil mengurutkan seluruh arena teka-teki metamorfosis!',
    icon: '🧩',
    bgGradient: 'from-purple-400 to-indigo-600',
  },
  {
    id: 'badge-juara-kuis',
    title: 'Bintang Emas Saung Pintar',
    description: 'Meraih nilai membanggakan di Kuis Pahlawan Alam!',
    icon: '⭐',
    bgGradient: 'from-yellow-300 to-amber-500',
  },
];

/**
 * Validates if the current order of stage IDs matches the correct sequence
 */
export function validateSequence(currentOrder: string[], correctOrder: string[]): boolean {
  if (currentOrder.length !== correctOrder.length) return false;
  return currentOrder.every((id, idx) => id === correctOrder[idx]);
}

/**
 * Calculates quiz score based on user answers
 */
export function calculateQuizScore(
  answers: Record<number, string>,
  answerKeys: Record<number, string>
): { score: number; total: number; percentage: number; correctCount: number; isPassed: boolean } {
  const total = Object.keys(answerKeys).length;
  if (total === 0) return { score: 0, total: 0, percentage: 0, correctCount: 0, isPassed: false };

  let correctCount = 0;
  for (const qId in answerKeys) {
    const numId = Number(qId);
    if (answers[numId] === answerKeys[numId]) {
      correctCount++;
    }
  }

  const percentage = Math.round((correctCount / total) * 100);
  const score = percentage; // score scale 0-100
  const isPassed = percentage >= 70;

  return {
    score,
    total,
    percentage,
    correctCount,
    isPassed,
  };
}

/**
 * Calculates overall learning progress (0 to 100%)
 */
export function calculateProgress(
  completedModules: string[],
  solvedGames: string[],
  quizCompleted: boolean,
  conservationActionsDone: string[]
): number {
  // Modules: 3 (hewan, tumbuhan, pelestarian) -> 30%
  // Games: 4 levels -> 40%
  // Conservation actions: 4 -> 15%
  // Quiz: 15%
  const moduleWeight = (Math.min(completedModules.length, 3) / 3) * 30;
  const gamesWeight = (Math.min(solvedGames.length, 4) / 4) * 40;
  const conservationWeight = (Math.min(conservationActionsDone.length, 4) / 4) * 15;
  const quizWeight = quizCompleted ? 15 : 0;

  return Math.min(100, Math.round(moduleWeight + gamesWeight + conservationWeight + quizWeight));
}

/**
 * Evaluates unlocked badges based on activity
 */
export function evaluateBadges(stats: {
  completedModules: string[];
  solvedGames: string[];
  quizPercentage: number;
  quizCompleted: boolean;
  conservationActionsDone: string[];
}): string[] {
  const unlocked: string[] = [];

  if (stats.completedModules.includes('hewan')) {
    unlocked.push('badge-peneliti-kupu');
  }

  if (stats.completedModules.includes('tumbuhan')) {
    unlocked.push('badge-sahabat-tunas');
  }

  if (stats.conservationActionsDone.length >= 4) {
    unlocked.push('badge-pelindung-bumi');
  }

  if (stats.solvedGames.length >= 4) {
    unlocked.push('badge-master-urut');
  }

  if (stats.quizCompleted && stats.quizPercentage >= 70) {
    unlocked.push('badge-juara-kuis');
  }

  return unlocked;
}
