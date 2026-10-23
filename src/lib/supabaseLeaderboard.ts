/**
 * Leaderboard service untuk Supabase (REST API).
 *
 * Tabel yang dipakai: public.leaderboard_siklus_hidup
 * Tabel ini terpisah dari leaderboard kuis lain yang sudah ada di project Supabase,
 * sehingga papan juara aplikasi ini dimulai dari keadaan kosong.
 */

import { LeaderboardEntry } from '../types';

const FALLBACK_URL = 'https://lutkqtvhkaxalefjobta.supabase.co';
const FALLBACK_KEY = 'sb_publishable_QHynVmSFF6bNcI7tILLSDA_uiHYTIYw';

const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env ?? {};

export const SUPABASE_URL = (env.VITE_SUPABASE_URL || FALLBACK_URL).replace(/\/+$/, '');
export const SUPABASE_PUBLISHABLE_KEY = env.VITE_SUPABASE_PUBLISHABLE_KEY || FALLBACK_KEY;

/** Nama tabel leaderboard khusus aplikasi Siklus Hidup Kelas 3. */
export const LEADERBOARD_TABLE = 'leaderboard_siklus_hidup';

const SELECT_COLUMNS =
  'id,name,score,correct_count,total_questions,percentage,stars_earned,created_at';

interface LeaderboardRow {
  id: string;
  name: string;
  score: number;
  correct_count: number;
  total_questions: number;
  percentage: number;
  stars_earned: number;
  created_at: string;
}

export interface LeaderboardSubmission {
  name: string;
  score: number;
  correctCount: number;
  totalQuestions: number;
  percentage: number;
  starsEarned: number;
}

export interface SubmitResult {
  entries: LeaderboardEntry[];
  rank: number;
  entryId: string;
}

/** Error dengan pesan ramah dalam Bahasa Indonesia. */
export class LeaderboardError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LeaderboardError';
  }
}

function buildHeaders(extra?: Record<string, string>): Record<string, string> {
  return {
    apikey: SUPABASE_PUBLISHABLE_KEY,
    Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
    'Content-Type': 'application/json',
    ...extra,
  };
}

function formatDate(isoDate: string): string {
  const parsed = new Date(isoDate);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return parsed.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function rowToEntry(row: LeaderboardRow): LeaderboardEntry {
  return {
    id: row.id,
    name: row.name,
    score: row.score,
    correctCount: row.correct_count,
    totalQuestions: row.total_questions,
    percentage: row.percentage,
    starsEarned: row.stars_earned,
    date: formatDate(row.created_at),
  };
}

function sortEntries(entries: LeaderboardEntry[]): LeaderboardEntry[] {
  return [...entries].sort(
    (a, b) => b.score - a.score || b.correctCount - a.correctCount || a.date.localeCompare(b.date)
  );
}

async function readError(response: Response): Promise<{ message: string; hint: string }> {
  let payload: { message?: string; hint?: string; details?: string; code?: string } = {};
  try {
    payload = await response.json();
  } catch {
    // respons bukan JSON
  }

  if (response.status === 404) {
    return {
      message: `Tabel "${LEADERBOARD_TABLE}" belum ada di Supabase.`,
      hint: 'Jalankan file supabase/schema.sql di SQL Editor Supabase untuk membuat tabel leaderboard.',
    };
  }

  if (response.status === 401 || response.status === 403) {
    return {
      message: 'Akses ke tabel leaderboard ditolak.',
      hint: 'Pastikan RLS policy untuk SELECT dan INSERT sudah dibuat (lihat supabase/schema.sql).',
    };
  }

  return {
    message: payload.message || `Permintaan ke Supabase gagal (HTTP ${response.status}).`,
    hint: payload.hint || payload.details || 'Periksa koneksi internet dan konfigurasi Supabase.',
  };
}

/** Mengambil seluruh peringkat dari Supabase, sudah terurut dari nilai tertinggi. */
export async function fetchLeaderboardEntries(): Promise<LeaderboardEntry[]> {
  let response: Response;
  try {
    response = await fetch(
      `${SUPABASE_URL}/rest/v1/${LEADERBOARD_TABLE}?select=${SELECT_COLUMNS}` +
        '&order=score.desc,correct_count.desc,created_at.asc&limit=500',
      { headers: buildHeaders() }
    );
  } catch {
    throw new LeaderboardError('Tidak dapat terhubung ke Supabase. Periksa koneksi internetmu.');
  }

  if (!response.ok) {
    const { message, hint } = await readError(response);
    throw new LeaderboardError(`${message} ${hint}`.trim());
  }

  const rows = (await response.json()) as LeaderboardRow[];
  return sortEntries(rows.map(rowToEntry));
}

/**
 * Menyimpan satu hasil kuis ke Supabase, lalu mengambil ulang daftar peringkat
 * untuk mengetahui posisi siswa saat ini.
 */
export async function submitLeaderboardEntry(
  submission: LeaderboardSubmission
): Promise<SubmitResult> {
  const payload = {
    name: submission.name.trim(),
    score: submission.score,
    correct_count: submission.correctCount,
    total_questions: submission.totalQuestions,
    percentage: submission.percentage,
    stars_earned: submission.starsEarned,
  };

  let response: Response;
  try {
    response = await fetch(
      `${SUPABASE_URL}/rest/v1/${LEADERBOARD_TABLE}?select=${SELECT_COLUMNS}`,
      {
        method: 'POST',
        headers: buildHeaders({ Prefer: 'return=representation' }),
        body: JSON.stringify(payload),
      }
    );
  } catch {
    throw new LeaderboardError('Nilai belum tersimpan karena tidak dapat terhubung ke Supabase.');
  }

  if (!response.ok) {
    const { message, hint } = await readError(response);
    throw new LeaderboardError(`Nilai belum tersimpan. ${message} ${hint}`.trim());
  }

  const insertedRows = (await response.json()) as LeaderboardRow[];
  const inserted = insertedRows[0];
  if (!inserted) {
    throw new LeaderboardError('Nilai belum tersimpan. Supabase tidak mengembalikan data.');
  }

  const entries = await fetchLeaderboardEntries();
  const rank = entries.findIndex((item) => item.id === inserted.id) + 1;

  return {
    entries,
    rank: rank > 0 ? rank : 1,
    entryId: inserted.id,
  };
}
