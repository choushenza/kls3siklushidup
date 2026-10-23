-- =============================================================================
-- Papan Juara (Leaderboard) — Saung Pintar Dukuhwaru
-- Aplikasi: Petualangan Siklus Hidup (IPAS Kelas 3 SD Bab 4)
--
-- Cara pakai:
--   1. Buka Supabase Dashboard > project lutkqtvhkaxalefjobta
--   2. Masuk ke SQL Editor
--   3. Tempel seluruh isi file ini, lalu klik RUN
--
-- Tabel ini SENGAJA terpisah dari tabel leaderboard kuis lain yang sudah ada,
-- sehingga papan juara aplikasi ini dimulai dari keadaan KOSONG.
-- =============================================================================

create table if not exists public.leaderboard_siklus_hidup (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 1 and 60),
  score integer not null check (score between 0 and 100),
  correct_count integer not null check (correct_count between 0 and 100),
  total_questions integer not null default 30 check (total_questions between 1 and 500),
  percentage integer not null check (percentage between 0 and 100),
  stars_earned integer not null default 0 check (stars_earned >= 0),
  created_at timestamptz not null default now()
);

comment on table public.leaderboard_siklus_hidup is
  'Papan juara Kuis 30 Soal Petualangan Siklus Hidup (IPAS Kelas 3).';

-- Urutan peringkat: nilai tertinggi, lalu jumlah soal benar, lalu yang paling awal.
create index if not exists leaderboard_siklus_hidup_rank_idx
  on public.leaderboard_siklus_hidup (score desc, correct_count desc, created_at asc);

-- Keamanan tingkat baris (RLS)
alter table public.leaderboard_siklus_hidup enable row level security;

drop policy if exists "Leaderboard siklus hidup dapat dibaca siapa saja"
  on public.leaderboard_siklus_hidup;
create policy "Leaderboard siklus hidup dapat dibaca siapa saja"
  on public.leaderboard_siklus_hidup
  for select
  to anon, authenticated
  using (true);

drop policy if exists "Siswa dapat menambah nilai kuis"
  on public.leaderboard_siklus_hidup;
create policy "Siswa dapat menambah nilai kuis"
  on public.leaderboard_siklus_hidup
  for insert
  to anon, authenticated
  with check (true);

-- Tidak ada policy UPDATE/DELETE untuk anon: nilai tidak bisa diubah atau
-- dihapus dari browser. Untuk mengosongkan papan juara, jalankan di SQL Editor:
--   truncate table public.leaderboard_siklus_hidup;

grant select, insert on public.leaderboard_siklus_hidup to anon, authenticated;
