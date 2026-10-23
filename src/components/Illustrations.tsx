import React from 'react';

interface IllustrationProps {
  type: string;
  className?: string;
}

export const Illustration: React.FC<IllustrationProps> = ({ type, className = "w-36 h-36" }) => {
  switch (type) {
    // === KUPU-KUPU ===
    case 'kupu-telur':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Daun hijau */}
          <path d="M30 140 C 40 40, 160 40, 175 140 C 120 170, 70 160, 30 140 Z" fill="#4ADE80" stroke="#16A34A" strokeWidth="4" />
          <path d="M40 135 Q 105 100 170 140" stroke="#15803D" strokeWidth="3" strokeLinecap="round" />
          <path d="M80 115 Q 100 90 120 85" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M120 122 Q 135 105 150 110" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
          {/* Telur-telur kecil lucu */}
          <ellipse cx="100" cy="95" rx="14" ry="17" fill="#FEF08A" stroke="#CA8A04" strokeWidth="3" />
          <ellipse cx="96" cy="90" rx="4" ry="6" fill="#FFFFFF" />
          <ellipse cx="125" cy="110" rx="12" ry="15" fill="#FEF08A" stroke="#CA8A04" strokeWidth="3" />
          <ellipse cx="122" cy="106" rx="3.5" ry="5" fill="#FFFFFF" />
          <ellipse cx="78" cy="115" rx="11" ry="14" fill="#FEF08A" stroke="#CA8A04" strokeWidth="3" />
          <ellipse cx="76" cy="112" rx="3" ry="4" fill="#FFFFFF" />
          {/* Efek kilau */}
          <circle cx="104" cy="70" r="3" fill="#FACC15" />
          <circle cx="140" cy="90" r="4" fill="#FACC15" />
        </svg>
      );

    case 'kupu-ulat':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Daun yang dimakan berlubang */}
          <path d="M20 160 C 20 60, 160 60, 180 160 C 130 180, 70 180, 20 160 Z" fill="#86EFAC" stroke="#22C55E" strokeWidth="4" />
          {/* Bekas gigitan daun */}
          <path d="M70 100 A 15 15 0 0 1 100 100 A 15 15 0 0 1 130 100" fill="#FEF9C3" stroke="#22C55E" strokeWidth="3" />
          {/* Tubuh ulat berbuku-buku ceria */}
          <circle cx="45" cy="130" r="14" fill="#A3E635" stroke="#4D7C0F" strokeWidth="3" />
          <circle cx="65" cy="120" r="16" fill="#84CC16" stroke="#4D7C0F" strokeWidth="3" />
          <circle cx="90" cy="112" r="18" fill="#A3E635" stroke="#4D7C0F" strokeWidth="3" />
          <circle cx="118" cy="115" r="19" fill="#84CC16" stroke="#4D7C0F" strokeWidth="3" />
          {/* Kepala ulat */}
          <circle cx="148" cy="105" r="22" fill="#65A30D" stroke="#365314" strokeWidth="3.5" />
          {/* Antena kepala */}
          <path d="M152 85 Q 160 70 170 75" stroke="#365314" strokeWidth="3" strokeLinecap="round" />
          <circle cx="170" cy="75" r="4" fill="#EA580C" />
          <path d="M142 85 Q 138 70 130 75" stroke="#365314" strokeWidth="3" strokeLinecap="round" />
          <circle cx="130" cy="75" r="4" fill="#EA580C" />
          {/* Mata ulat */}
          <circle cx="144" cy="100" r="4" fill="#0F172A" />
          <circle cx="142" cy="98" r="1.5" fill="#FFFFFF" />
          <circle cx="158" cy="100" r="4" fill="#0F172A" />
          <circle cx="156" cy="98" r="1.5" fill="#FFFFFF" />
          {/* Senyum */}
          <path d="M146 112 Q 152 118 158 112" stroke="#365314" strokeWidth="2.5" strokeLinecap="round" />
          {/* Kaki ulat */}
          <path d="M50 144 L 50 152 M 70 136 L 70 145 M 95 130 L 95 140 M 120 134 L 120 143" stroke="#4D7C0F" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'kupu-pupa':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ranting kayu */}
          <path d="M20 50 Q 100 45 180 55" stroke="#78350F" strokeWidth="10" strokeLinecap="round" />
          <path d="M70 48 Q 50 25 35 30" stroke="#78350F" strokeWidth="5" strokeLinecap="round" />
          {/* Daun kecil menempel di ranting */}
          <path d="M60 48 C 65 30 85 30 90 48 Z" fill="#4ADE80" stroke="#16A34A" strokeWidth="2" />
          {/* Tali sutra kepompong */}
          <path d="M100 48 L 100 70" stroke="#CA8A04" strokeWidth="4" strokeLinecap="round" />
          {/* Cangkang Kepompong (Pupa) dengan segmen keemasan */}
          <path d="M100 70 C 130 85 135 135 100 165 C 65 135 70 85 100 70 Z" fill="#FBBF24" stroke="#B45309" strokeWidth="4" />
          {/* Garis segmen kepompong */}
          <path d="M80 100 Q 100 110 120 100" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
          <path d="M82 118 Q 100 130 118 118" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
          <path d="M86 136 Q 100 146 114 136" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
          {/* Bintik emas ajaib */}
          <circle cx="100" cy="88" r="4" fill="#FEF08A" />
          <circle cx="108" cy="98" r="2.5" fill="#FEF08A" />
          <circle cx="92" cy="126" r="3" fill="#FEF08A" />
          {/* Efek kilau metamorfosis */}
          <path d="M140 100 L 148 100 M 144 96 L 144 104" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M60 130 L 66 130 M 63 127 L 63 133" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'kupu-dewasa':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sayap Kiri Atas & Bawah */}
          <path d="M96 95 C 40 40, 10 90, 45 130 C 70 145, 94 110, 96 95 Z" fill="#F43F5E" stroke="#BE123C" strokeWidth="3.5" />
          <path d="M96 110 C 50 120, 30 165, 65 180 C 85 185, 96 135, 96 110 Z" fill="#FB923C" stroke="#C2410C" strokeWidth="3.5" />
          {/* Sayap Kanan Atas & Bawah */}
          <path d="M104 95 C 160 40, 190 90, 155 130 C 130 145, 106 110, 104 95 Z" fill="#F43F5E" stroke="#BE123C" strokeWidth="3.5" />
          <path d="M104 110 C 150 120, 170 165, 135 180 C 115 185, 104 135, 104 110 Z" fill="#FB923C" stroke="#C2410C" strokeWidth="3.5" />
          {/* Corak kuning cantik pada sayap */}
          <ellipse cx="60" cy="100" rx="14" ry="10" fill="#FEF08A" />
          <circle cx="68" cy="155" r="8" fill="#FEF08A" />
          <ellipse cx="140" cy="100" rx="14" ry="10" fill="#FEF08A" />
          <circle cx="132" cy="155" r="8" fill="#FEF08A" />
          {/* Tubuh kupu-kupu */}
          <ellipse cx="100" cy="120" rx="7" ry="32" fill="#475569" stroke="#1E293B" strokeWidth="3" />
          {/* Kepala */}
          <circle cx="100" cy="80" r="10" fill="#334155" stroke="#0F172A" strokeWidth="2.5" />
          {/* Mata */}
          <circle cx="97" cy="78" r="2" fill="#FFFFFF" />
          <circle cx="103" cy="78" r="2" fill="#FFFFFF" />
          {/* Antena lentik */}
          <path d="M96 72 Q 80 50 75 56" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="75" cy="56" r="3" fill="#E11D48" />
          <path d="M104 72 Q 120 50 125 56" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="125" cy="56" r="3" fill="#E11D48" />
        </svg>
      );

    // === KATAK ===
    case 'katak-telur':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Air kolam */}
          <rect width="200" height="200" rx="30" fill="#E0F2FE" />
          <path d="M20 160 Q 60 140 100 160 T 180 160" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
          {/* Gumpalan jelly berlendir */}
          <circle cx="95" cy="90" r="22" fill="#BAE6FD" stroke="#0284C7" strokeWidth="3" strokeDasharray="3 3" />
          <circle cx="95" cy="90" r="8" fill="#0F172A" />
          <circle cx="93" cy="88" r="2.5" fill="#FFFFFF" />

          <circle cx="135" cy="100" r="18" fill="#BAE6FD" stroke="#0284C7" strokeWidth="3" strokeDasharray="3 3" />
          <circle cx="135" cy="100" r="7" fill="#0F172A" />
          <circle cx="133" cy="98" r="2" fill="#FFFFFF" />

          <circle cx="65" cy="115" r="19" fill="#BAE6FD" stroke="#0284C7" strokeWidth="3" strokeDasharray="3 3" />
          <circle cx="65" cy="115" r="7.5" fill="#0F172A" />
          <circle cx="63" cy="113" r="2" fill="#FFFFFF" />

          <circle cx="105" cy="128" r="20" fill="#BAE6FD" stroke="#0284C7" strokeWidth="3" strokeDasharray="3 3" />
          <circle cx="105" cy="128" r="8" fill="#0F172A" />
          <circle cx="103" cy="126" r="2.5" fill="#FFFFFF" />

          {/* Gelembung udara air */}
          <circle cx="40" cy="60" r="6" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="2" />
          <circle cx="160" cy="70" r="8" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="2" />
        </svg>
      );

    case 'katak-berudu':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" rx="30" fill="#E0F2FE" />
          {/* Ekor berudu bergelombang */}
          <path d="M120 100 Q 150 70 180 85 Q 165 115 130 110" fill="#7DD3FC" stroke="#0284C7" strokeWidth="3" />
          <path d="M125 105 Q 155 90 180 85" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
          {/* Tubuh bulat kecebong */}
          <ellipse cx="90" cy="102" rx="35" ry="26" fill="#0284C7" stroke="#0369A1" strokeWidth="3" />
          {/* Perut cerah */}
          <ellipse cx="85" cy="108" rx="22" ry="15" fill="#38BDF8" />
          {/* Mata berudu */}
          <circle cx="70" cy="90" r="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <circle cx="70" cy="90" r="3" fill="#0F172A" />
          {/* Mulut kecil tersenyum */}
          <path d="M58 105 Q 63 112 68 107" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
          {/* Gelembung riak air */}
          <circle cx="35" cy="130" r="4" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="1.5" />
          <circle cx="45" cy="120" r="7" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="2" />
        </svg>
      );

    case 'katak-muda':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" rx="30" fill="#F0FDF4" />
          {/* Ekor yang mulai menyusut pendek */}
          <path d="M130 120 Q 155 125 170 120 Q 155 135 135 130" fill="#86EFAC" stroke="#16A34A" strokeWidth="2.5" />
          {/* Kaki belakang yang baru tumbuh kuat */}
          <path d="M115 130 Q 140 145 130 160 Q 115 150 110 135" fill="#4ADE80" stroke="#16A34A" strokeWidth="3" />
          <circle cx="132" cy="162" r="4" fill="#22C55E" />
          {/* Kaki depan mungil */}
          <path d="M80 135 L 75 155 L 70 155" stroke="#16A34A" strokeWidth="3.5" strokeLinecap="round" />
          {/* Tubuh katak muda */}
          <ellipse cx="95" cy="115" rx="35" ry="25" fill="#22C55E" stroke="#15803D" strokeWidth="3.5" />
          {/* Mata katak menonjol */}
          <circle cx="75" cy="88" r="9" fill="#4ADE80" stroke="#15803D" strokeWidth="3" />
          <circle cx="75" cy="88" r="4.5" fill="#0F172A" />
          <circle cx="73" cy="86" r="1.5" fill="#FFFFFF" />
          {/* Mulut */}
          <path d="M62 118 Q 72 126 82 118" stroke="#14532D" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'katak-dewasa':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Daun Teratai di Kolam */}
          <ellipse cx="100" cy="165" rx="80" ry="25" fill="#15803D" stroke="#166534" strokeWidth="3" />
          <path d="M100 165 L 180 165" stroke="#14532D" strokeWidth="2.5" />
          {/* Kaki Belakang Katak yang Besar */}
          <path d="M50 130 Q 25 140 35 160 Q 55 165 70 145" fill="#22C55E" stroke="#166534" strokeWidth="3.5" />
          <path d="M150 130 Q 175 140 165 160 Q 145 165 130 145" fill="#22C55E" stroke="#166534" strokeWidth="3.5" />
          {/* Tubuh Katak Gemuk Menggemaskan */}
          <ellipse cx="100" cy="130" rx="42" ry="32" fill="#16A34A" stroke="#14532D" strokeWidth="3.5" />
          {/* Perut Kuning Terang */}
          <ellipse cx="100" cy="136" rx="26" ry="20" fill="#FEF08A" />
          {/* Kaki Depan */}
          <path d="M75 140 L 72 165 M 125 140 L 128 165" stroke="#14532D" strokeWidth="4" strokeLinecap="round" />
          {/* Dua Mata Besar Menonjol */}
          <circle cx="78" cy="88" r="14" fill="#4ADE80" stroke="#14532D" strokeWidth="3.5" />
          <circle cx="78" cy="88" r="7" fill="#0F172A" />
          <circle cx="75" cy="85" r="2.5" fill="#FFFFFF" />

          <circle cx="122" cy="88" r="14" fill="#4ADE80" stroke="#14532D" strokeWidth="3.5" />
          <circle cx="122" cy="88" r="7" fill="#0F172A" />
          <circle cx="119" cy="85" r="2.5" fill="#FFFFFF" />
          {/* Senyum Katak Lebar */}
          <path d="M80 115 Q 100 130 120 115" stroke="#14532D" strokeWidth="3.5" strokeLinecap="round" />
          {/* Pipi Merona */}
          <circle cx="68" cy="115" r="5" fill="#F43F5E" opacity="0.6" />
          <circle cx="132" cy="115" r="5" fill="#F43F5E" opacity="0.6" />
        </svg>
      );

    // === BELALANG ===
    case 'belalang-telur':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tanah cokelat */}
          <path d="M20 150 Q 100 135 180 150 L 180 180 L 20 180 Z" fill="#78350F" />
          <path d="M20 150 Q 100 135 180 150" stroke="#B45309" strokeWidth="4" />
          {/* Rumput kecil */}
          <path d="M50 148 L 40 120 M 55 148 L 65 125" stroke="#22C55E" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M140 148 L 135 122 M 145 148 L 155 128" stroke="#22C55E" strokeWidth="3.5" strokeLinecap="round" />
          {/* Telur lonjong belalang di tanah */}
          <ellipse cx="90" cy="140" rx="10" ry="16" transform="rotate(-25 90 140)" fill="#FDE68A" stroke="#D97706" strokeWidth="2.5" />
          <ellipse cx="106" cy="142" rx="9" ry="15" transform="rotate(15 106 142)" fill="#FEF08A" stroke="#D97706" strokeWidth="2.5" />
          <ellipse cx="120" cy="146" rx="8" ry="14" transform="rotate(35 120 146)" fill="#FDE68A" stroke="#D97706" strokeWidth="2.5" />
        </svg>
      );

    case 'belalang-nimfa':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ranting / Rumput */}
          <path d="M30 170 Q 100 150 170 170" stroke="#16A34A" strokeWidth="5" strokeLinecap="round" />
          {/* Badan nimfa: mirip induk tapi kecil & belum bersayap */}
          <ellipse cx="110" cy="115" rx="25" ry="12" transform="rotate(-15 110 115)" fill="#A3E635" stroke="#4D7C0F" strokeWidth="3" />
          <circle cx="75" cy="105" r="14" fill="#84CC16" stroke="#4D7C0F" strokeWidth="3" />
          {/* Mata belalang */}
          <circle cx="70" cy="100" r="5" fill="#0F172A" />
          <circle cx="68" cy="98" r="1.5" fill="#FFFFFF" />
          {/* Antena pendek */}
          <path d="M68 93 L 55 75 M 74 93 L 68 72" stroke="#365314" strokeWidth="2" strokeLinecap="round" />
          {/* Bakal sayap kecil (belum sempurna) */}
          <path d="M95 108 Q 115 102 125 110" stroke="#CA8A04" strokeWidth="3" strokeLinecap="round" />
          {/* Kaki pelompat */}
          <path d="M110 120 L 130 95 L 140 140" stroke="#4D7C0F" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M85 120 L 80 145 M 100 122 L 98 145" stroke="#4D7C0F" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'belalang-dewasa':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Batang daun besar */}
          <path d="M20 180 Q 90 150 180 160" stroke="#15803D" strokeWidth="8" strokeLinecap="round" />
          {/* Kaki Belakang Pelompat Kokoh */}
          <path d="M125 110 L 155 60 L 170 145" stroke="#166534" strokeWidth="5" strokeLinecap="round" />
          <path d="M120 105 L 145 65" stroke="#4ADE80" strokeWidth="3" strokeLinecap="round" />
          {/* Sayap Panjang Belalang Dewasa */}
          <path d="M85 100 C 130 90, 160 100, 180 115 C 160 130, 120 125, 85 105 Z" fill="#65A30D" stroke="#365314" strokeWidth="3" />
          <path d="M90 103 Q 130 105 170 115" stroke="#84CC16" strokeWidth="2" />
          {/* Kepala & Dada */}
          <circle cx="65" cy="98" r="17" fill="#4D7C0F" stroke="#14532D" strokeWidth="3" />
          {/* Mata Besar Belalang */}
          <circle cx="60" cy="92" r="6" fill="#0F172A" />
          <circle cx="58" cy="90" r="2" fill="#FFFFFF" />
          {/* Antena Panjang */}
          <path d="M58 82 Q 40 50 30 55 M 65 82 Q 55 45 45 48" stroke="#14532D" strokeWidth="2.5" strokeLinecap="round" />
          {/* Kaki Depan & Tengah */}
          <path d="M72 115 L 65 145 M 90 115 L 92 145" stroke="#14532D" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    // === TUMBUHAN TOMAT ===
    case 'tomat-biji':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Pot atau tanah gembur */}
          <rect y="120" width="200" height="80" rx="10" fill="#78350F" />
          <path d="M0 120 Q 50 115 100 120 T 200 120" stroke="#92400E" strokeWidth="4" />
          {/* Biji tomat menggemaskan di dalam tanah */}
          <ellipse cx="100" cy="145" rx="14" ry="18" fill="#FDE68A" stroke="#B45309" strokeWidth="3.5" />
          {/* Garis biji */}
          <path d="M100 133 Q 95 145 100 157" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
          {/* Butiran air siraman */}
          <path d="M90 80 Q 90 70 95 65 Q 100 70 100 80 A 5 5 0 0 1 90 80 Z" fill="#38BDF8" />
          <path d="M115 95 Q 115 85 120 80 Q 125 85 125 95 A 5 5 0 0 1 115 95 Z" fill="#38BDF8" />
          {/* Sinar hangat di atas */}
          <circle cx="160" cy="40" r="14" fill="#FDE047" />
          <path d="M160 18 L 160 24 M 160 56 L 160 62 M 138 40 L 144 40 M 176 40 L 182 40" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'tomat-kecambah':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="130" width="200" height="70" rx="10" fill="#78350F" />
          {/* Akar menembus ke bawah tanah */}
          <path d="M100 130 Q 95 155 90 180 M 96 150 Q 80 165 75 175 M 98 160 Q 115 170 120 180" stroke="#FEF08A" strokeWidth="3" strokeLinecap="round" />
          {/* Batang kecambah meliuk ke atas */}
          <path d="M100 130 Q 102 100 95 80" stroke="#4ADE80" strokeWidth="5" strokeLinecap="round" />
          {/* Dua daun benih hijau mungil */}
          <path d="M95 80 C 70 70 70 50 95 72 Z" fill="#22C55E" stroke="#15803D" strokeWidth="2.5" />
          <path d="M95 80 C 120 70 120 50 95 72 Z" fill="#22C55E" stroke="#15803D" strokeWidth="2.5" />
          {/* Kulit biji yang terlepas */}
          <ellipse cx="112" cy="120" rx="7" ry="9" fill="#CA8A04" />
        </svg>
      );

    case 'tomat-muda':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="150" width="200" height="50" rx="10" fill="#78350F" />
          {/* Akar kuat */}
          <path d="M100 150 Q 80 170 70 190 M 100 150 Q 110 170 130 190 M 100 150 L 100 185" stroke="#FEF08A" strokeWidth="3" strokeLinecap="round" />
          {/* Batang utama kokoh */}
          <path d="M100 150 L 100 65" stroke="#16A34A" strokeWidth="6" strokeLinecap="round" />
          {/* Cabang & Daun lebat */}
          <path d="M100 120 Q 70 110 50 120" stroke="#16A34A" strokeWidth="4" />
          <ellipse cx="45" cy="118" rx="16" ry="9" transform="rotate(-15 45 118)" fill="#22C55E" stroke="#15803D" strokeWidth="2.5" />

          <path d="M100 100 Q 130 90 150 100" stroke="#16A34A" strokeWidth="4" />
          <ellipse cx="155" cy="98" rx="16" ry="9" transform="rotate(15 155 98)" fill="#22C55E" stroke="#15803D" strokeWidth="2.5" />

          <ellipse cx="85" cy="55" rx="18" ry="10" transform="rotate(-30 85 55)" fill="#4ADE80" stroke="#15803D" strokeWidth="2.5" />
          <ellipse cx="115" cy="55" rx="18" ry="10" transform="rotate(30 115 55)" fill="#4ADE80" stroke="#15803D" strokeWidth="2.5" />
        </svg>
      );

    case 'tomat-bunga':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="160" width="200" height="40" rx="10" fill="#78350F" />
          {/* Batang */}
          <path d="M100 160 L 100 60" stroke="#15803D" strokeWidth="6" strokeLinecap="round" />
          {/* Daun */}
          <ellipse cx="60" cy="110" rx="22" ry="12" transform="rotate(-20 60 110)" fill="#22C55E" stroke="#14532D" strokeWidth="2.5" />
          <ellipse cx="140" cy="95" rx="22" ry="12" transform="rotate(20 140 95)" fill="#22C55E" stroke="#14532D" strokeWidth="2.5" />
          {/* Tangkai bunga */}
          <path d="M100 75 Q 80 65 70 70 M 100 70 Q 120 60 130 65" stroke="#15803D" strokeWidth="3.5" />
          {/* Bunga Tomat Kuning Bintang */}
          <g transform="translate(68, 68)">
            <circle cx="0" cy="0" r="6" fill="#CA8A04" />
            <path d="M0 -14 L 3 -5 L 12 -5 L 5 1 L 8 10 L 0 4 L -8 10 L -5 1 L -12 -5 L -3 -5 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
          </g>
          <g transform="translate(130, 62)">
            <circle cx="0" cy="0" r="6" fill="#CA8A04" />
            <path d="M0 -14 L 3 -5 L 12 -5 L 5 1 L 8 10 L 0 4 L -8 10 L -5 1 L -12 -5 L -3 -5 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
          </g>
          {/* Bakal buah tomat hijau kecil */}
          <circle cx="100" cy="50" r="8" fill="#84CC16" stroke="#4D7C0F" strokeWidth="2" />
        </svg>
      );

    case 'tomat-buah':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Daun latar */}
          <path d="M40 70 C 60 30 110 50 100 70 Z" fill="#22C55E" stroke="#15803D" strokeWidth="2.5" />
          <path d="M160 70 C 140 30 90 50 100 70 Z" fill="#22C55E" stroke="#15803D" strokeWidth="2.5" />
          {/* Tangkai tomat */}
          <path d="M100 50 L 100 75" stroke="#15803D" strokeWidth="6" strokeLinecap="round" />
          {/* Kelopak bintang hijau di atas buah */}
          <path d="M100 75 L 85 68 M 100 75 L 115 68 M 100 75 L 90 85 M 100 75 L 110 85 M 100 75 L 100 62" stroke="#15803D" strokeWidth="4.5" strokeLinecap="round" />
          {/* Buah Tomat Merah Matang Besar */}
          <circle cx="100" cy="120" r="48" fill="#EF4444" stroke="#B91C1C" strokeWidth="4" />
          {/* Bayangan kilau mengkilap (glossy highlight) */}
          <ellipse cx="82" cy="102" rx="14" ry="8" transform="rotate(-30 82 102)" fill="#FFFFFF" opacity="0.6" />
          <circle cx="72" cy="115" r="4" fill="#FFFFFF" opacity="0.5" />
          {/* Irisan tomat samping memperlihatkan biji di dalam */}
          <g transform="translate(142, 145) scale(0.4)">
            <circle cx="0" cy="0" r="50" fill="#DC2626" stroke="#991B1B" strokeWidth="4" />
            <circle cx="0" cy="0" r="38" fill="#F87171" />
            <circle cx="-15" cy="-10" r="5" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            <circle cx="15" cy="-10" r="5" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            <circle cx="0" cy="18" r="5" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
          </g>
        </svg>
      );

    // === KUCING (TANPA METAMORFOSIS) ===
    case 'kucing-bayi':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Keranjang tidur bayi */}
          <ellipse cx="100" cy="150" rx="65" ry="25" fill="#FED7AA" stroke="#EA580C" strokeWidth="3" />
          {/* Tubuh mungil anak kucing */}
          <ellipse cx="100" cy="130" rx="30" ry="22" fill="#FFFFFF" stroke="#64748B" strokeWidth="3" />
          {/* Kepala */}
          <circle cx="85" cy="105" r="22" fill="#FFFFFF" stroke="#64748B" strokeWidth="3" />
          {/* Telinga */}
          <polygon points="70,95 65,75 80,88" fill="#F472B6" stroke="#64748B" strokeWidth="2.5" />
          <polygon points="90,88 105,75 100,95" fill="#F472B6" stroke="#64748B" strokeWidth="2.5" />
          {/* Mata terpejam / tersenyum manis */}
          <path d="M74 105 Q 78 110 82 105" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
          <path d="M88 105 Q 92 110 96 105" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
          {/* Hidung & Mulut */}
          <circle cx="85" cy="112" r="2" fill="#F43F5E" />
          {/* Botol susu kecil */}
          <rect x="130" y="115" width="16" height="26" rx="4" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
          <rect x="134" y="108" width="8" height="7" rx="2" fill="#FBBF24" />
        </svg>
      );

    case 'kucing-remaja':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bola benang merah untuk main */}
          <circle cx="150" cy="150" r="18" fill="#EF4444" stroke="#991B1B" strokeWidth="2.5" />
          <path d="M140 145 Q 155 135 158 155" stroke="#FEE2E2" strokeWidth="2" />
          <path d="M132 150 Q 115 155 105 145" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
          {/* Badan kucing remaja aktif */}
          <ellipse cx="85" cy="130" rx="35" ry="24" fill="#F1F5F9" stroke="#334155" strokeWidth="3.5" />
          <circle cx="70" cy="95" r="24" fill="#F1F5F9" stroke="#334155" strokeWidth="3.5" />
          {/* Telinga */}
          <polygon points="52,85 46,65 65,78" fill="#F472B6" stroke="#334155" strokeWidth="2.5" />
          <polygon points="76,78 94,65 88,85" fill="#F472B6" stroke="#334155" strokeWidth="2.5" />
          {/* Mata besar penasaran */}
          <circle cx="62" cy="95" r="4.5" fill="#0284C7" />
          <circle cx="60" cy="93" r="1.5" fill="#FFFFFF" />
          <circle cx="78" cy="95" r="4.5" fill="#0284C7" />
          <circle cx="76" cy="93" r="1.5" fill="#FFFFFF" />
          {/* Ekor melingkar ceria */}
          <path d="M115 130 Q 140 115 135 90" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );

    case 'kucing-dewasa':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tubuh kucing gagah & sehat */}
          <ellipse cx="95" cy="125" rx="45" ry="32" fill="#E2E8F0" stroke="#1E293B" strokeWidth="4" />
          <circle cx="75" cy="80" r="28" fill="#E2E8F0" stroke="#1E293B" strokeWidth="4" />
          {/* Telinga */}
          <polygon points="55,68 45,45 70,58" fill="#F472B6" stroke="#1E293B" strokeWidth="3" />
          <polygon points="82,58 105,45 95,68" fill="#F472B6" stroke="#1E293B" strokeWidth="3" />
          {/* Mata kucing dewasa */}
          <circle cx="66" cy="78" r="5" fill="#16A34A" />
          <circle cx="64" cy="76" r="1.5" fill="#FFFFFF" />
          <circle cx="84" cy="78" r="5" fill="#16A34A" />
          <circle cx="82" cy="76" r="1.5" fill="#FFFFFF" />
          {/* Kumis */}
          <path d="M50 86 L 30 84 M 50 90 L 32 94 M 98 86 L 118 84 M 98 90 L 116 94" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          {/* Ekor melengkung bangga */}
          <path d="M135 125 Q 170 110 160 70" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <div className={`${className} flex items-center justify-center bg-amber-100 rounded-3xl text-4xl shadow-inner border-2 border-amber-300`}>
          🌟
        </div>
      );
  }
};
