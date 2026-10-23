<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/aa883c16-14b7-47f7-8d3f-c0b607d90c78

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Papan Juara (Supabase)

Leaderboard kuis disimpan di project Supabase dan terpisah dari leaderboard kuis lain.

1. Buka **Supabase Dashboard → SQL Editor** untuk project `lutkqtvhkaxalefjobta`.
2. Tempel isi [`supabase/schema.sql`](supabase/schema.sql), lalu klik **RUN**.
3. Konfigurasi koneksi ada di `.env` (atau `.env.example` sebagai contoh):

   ```env
   VITE_SUPABASE_URL="https://lutkqtvhkaxalefjobta.supabase.co"
   VITE_SUPABASE_PUBLISHABLE_KEY="sb_publishable_..."
   ```

Tabel `public.leaderboard_siklus_hidup` dibuat kosong tanpa data contoh. Siswa dapat
membaca peringkat dan menambah nilai, tetapi tidak dapat mengubah atau menghapus nilai
dari browser (lihat RLS policy di file SQL).

Untuk mengosongkan papan juara lagi, jalankan di SQL Editor:

```sql
truncate table public.leaderboard_siklus_hidup;
```
