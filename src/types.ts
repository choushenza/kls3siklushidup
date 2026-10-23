/**
 * Types for Saung Pintar Dukuhwaru - Petualangan Siklus Hidup
 * Materi IPAS Kelas 3 SD/MI Bab 4
 */

export interface LifecycleStage {
  id: string;
  stageNumber: number;
  name: string;
  badge: string;
  description: string;
  keyPoints: string[];
  funFact: string;
  svgType: string;
  colorTheme: {
    bg: string;
    border: string;
    text: string;
    accent: string;
  };
}

export interface OrganismData {
  id: string;
  name: string;
  category: 'hewan' | 'tumbuhan';
  type: 'metamorfosis-sempurna' | 'metamorfosis-tidak-sempurna' | 'tanpa-metamorfosis' | 'tumbuhan';
  summary: string;
  habitat: string;
  hasPupa: boolean;
  stages: LifecycleStage[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  imageIcon: string;
  options: {
    id: string;
    text: string;
    emoji: string;
  }[];
  correctAnswer: string;
  explanation: string;
}

export interface SequenceLevel {
  id: string;
  title: string;
  organismName: string;
  category: string;
  description: string;
  targetOrder: string[]; // array of stage ids in correct order
  items: {
    id: string;
    name: string;
    emoji: string;
    description: string;
    svgType: string;
  }[];
}

export interface ConservationCard {
  id: string;
  title: string;
  target: string;
  icon: string;
  problem: string;
  problemImpact: string;
  solutionAction: string;
  heroOutcome: string;
  badgeEarned: string;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  correctCount: number;
  totalQuestions: number;
  percentage: number;
  starsEarned: number;
  date: string;
  isCurrentUser?: boolean;
}

export interface UserStats {
  studentName: string;
  starsCount: number;
  completedModules: string[];
  solvedGames: string[];
  quizScore: number;
  quizCompleted: boolean;
  unlockedBadges: string[];
}
