// Logo Style 2 — Neon Crystal 3D
// Dark premium — neon pink glow + glass sphere + gold accents
export default function LogoNeon({ size = 500 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width={size} height={size} aria-label="Bách Hóa Nails — Neon Crystal">
      <defs>
        {/* ── FILTERS ── */}

        {/* Big neon ring glow */}
        <filter id="n-ringglow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5"  result="b5"/>
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="b12"/>
          <feMerge>
            <feMergeNode in="b12"/>
            <feMergeNode in="b5"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Text neon glow */}
        <filter id="n-textglow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3"  result="b3"/>
          <feGaussianBlur in="SourceGraphic" stdDeviation="8"  result="b8"/>
          <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="b18"/>
          <feMerge>
            <feMergeNode in="b18"/>
            <feMergeNode in="b8"/>
            <feMergeNode in="b3"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Soft star glow */}
        <filter id="n-starglow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4"  result="b4"/>
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="b10"/>
          <feMerge>
            <feMergeNode in="b10"/>
            <feMergeNode in="b4"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Outer logo drop shadow */}
        <filter id="n-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="20" floodColor="#E91E8C" floodOpacity="0.35"/>
          <feDropShadow dx="0" dy="0"  stdDeviation="40" floodColor="#E91E8C" floodOpacity="0.12"/>
        </filter>

        {/* ── GRADIENTS ── */}

        {/* Outer dark base */}
        <radialGradient id="n-base" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#0E0E1C"/>
          <stop offset="100%" stopColor="#050508"/>
        </radialGradient>

        {/* Glass sphere base */}
        <radialGradient id="n-sphere" cx="38%" cy="30%" r="68%">
          <stop offset="0%"   stopColor="#1E2060"/>
          <stop offset="35%"  stopColor="#0E1038"/>
          <stop offset="75%"  stopColor="#080818"/>
          <stop offset="100%" stopColor="#040410"/>
        </radialGradient>

        {/* Glass sphere pink ambient at edges */}
        <radialGradient id="n-spherepink" cx="50%" cy="80%" r="55%">
          <stop offset="0%"   stopColor="#E91E8C" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="#E91E8C" stopOpacity="0"/>
        </radialGradient>

        {/* Specular oval reflection */}
        <radialGradient id="n-specular" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.60)"/>
          <stop offset="40%"  stopColor="rgba(255,255,255,0.25)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
        </radialGradient>

        {/* Gold gradient */}
        <linearGradient id="n-gold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#5C3800"/>
          <stop offset="20%"  stopColor="#D49000"/>
          <stop offset="45%"  stopColor="#FFD700"/>
          <stop offset="55%"  stopColor="#FFF080"/>
          <stop offset="80%"  stopColor="#D49000"/>
          <stop offset="100%" stopColor="#5C3800"/>
        </linearGradient>

        {/* Gold horizontal */}
        <linearGradient id="n-goldh" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#5C3800"/>
          <stop offset="30%"  stopColor="#D49000"/>
          <stop offset="50%"  stopColor="#FFD700"/>
          <stop offset="70%"  stopColor="#D49000"/>
          <stop offset="100%" stopColor="#5C3800"/>
        </linearGradient>

        {/* TL neon pink gradient */}
        <linearGradient id="n-tlgrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#FF90D8"/>
          <stop offset="30%"  stopColor="#FF1EA0"/>
          <stop offset="55%"  stopColor="#E91E8C"/>
          <stop offset="80%"  stopColor="#FF1EA0"/>
          <stop offset="100%" stopColor="#FF60C0"/>
        </linearGradient>

        {/* ClipPath for glass sphere */}
        <clipPath id="n-sphereclip">
          <circle cx="250" cy="250" r="153"/>
        </clipPath>

        {/* Text paths — r=191 */}
        <path id="n-top" d="M 59,250 A 191,191 0 0,1 441,250"/>
        <path id="n-bot" d="M 59,250 A 191,191 0 0,0 441,250"/>
      </defs>

      {/* ══ 1. OUTER BASE CIRCLE ══ */}
      <circle cx="250" cy="250" r="242" fill="url(#n-base)" filter="url(#n-shadow)"/>

      {/* ══ 2. OUTER NEON PINK RING — glow layer (blurred) ══ */}
      <circle cx="250" cy="250" r="235" fill="none" stroke="#FF1EA0" strokeWidth="3" opacity="0.55" filter="url(#n-ringglow)"/>
      {/* Crisp outer ring */}
      <circle cx="250" cy="250" r="235" fill="none" stroke="#FF60B8" strokeWidth="1.2"/>

      {/* ══ 3. DARK SEPARATOR ══ */}
      <circle cx="250" cy="250" r="226" fill="#06060C"/>

      {/* ══ 4. GOLD THIN RING — neon glow ══ */}
      <circle cx="250" cy="250" r="222" fill="none" stroke="#FFD700" strokeWidth="3" opacity="0.5" filter="url(#n-ringglow)"/>
      <circle cx="250" cy="250" r="222" fill="none" stroke="#FFE040" strokeWidth="1"/>

      {/* ══ 5. DARK BAND (text ring background) ══ */}
      <circle cx="250" cy="250" r="219" fill="#06060C"/>

      {/* ══ 6. PINK NEON TEXT RING ══ */}
      {/* Glow layer */}
      <circle cx="250" cy="250" r="213" fill="#0C0010" opacity="1"/>
      <circle cx="250" cy="250" r="213" fill="none" stroke="#E91E8C" strokeWidth="18" opacity="0.15"/>
      <circle cx="250" cy="250" r="213" fill="none" stroke="#E91E8C" strokeWidth="3" opacity="0.7" filter="url(#n-ringglow)"/>
      <circle cx="250" cy="250" r="213" fill="none" stroke="#FF60B8" strokeWidth="1"/>
      <circle cx="250" cy="250" r="171" fill="none" stroke="#E91E8C" strokeWidth="3" opacity="0.7" filter="url(#n-ringglow)"/>
      <circle cx="250" cy="250" r="171" fill="none" stroke="#FF60B8" strokeWidth="1"/>

      {/* ══ 7. INNER DARK SEPARATOR ══ */}
      <circle cx="250" cy="250" r="168" fill="#06060C"/>

      {/* ══ 8. GOLD INNER RING — neon glow ══ */}
      <circle cx="250" cy="250" r="164" fill="none" stroke="#FFD700" strokeWidth="4" opacity="0.45" filter="url(#n-ringglow)"/>
      <circle cx="250" cy="250" r="164" fill="none" stroke="#FFE040" strokeWidth="1.2"/>

      {/* ══ 9. PINK INNER RING ══ */}
      <circle cx="250" cy="250" r="158" fill="#06060C"/>
      <circle cx="250" cy="250" r="158" fill="none" stroke="#E91E8C" strokeWidth="3" opacity="0.6" filter="url(#n-ringglow)"/>
      <circle cx="250" cy="250" r="158" fill="none" stroke="#FF40A8" strokeWidth="1"/>

      {/* ══ 10. GLASS SPHERE ══ */}
      <circle cx="250" cy="250" r="153" fill="url(#n-sphere)"/>
      {/* Pink ambient at bottom */}
      <circle cx="250" cy="250" r="153" fill="url(#n-spherepink)"/>

      {/* Glass sphere reflections — clipped to sphere */}
      <g clipPath="url(#n-sphereclip)">
        {/* Large soft oval reflection (upper-left) */}
        <ellipse cx="200" cy="198" rx="78" ry="58"
                 transform="rotate(-28,200,198)"
                 fill="url(#n-specular)" opacity="0.18"/>
        {/* Secondary glow */}
        <ellipse cx="208" cy="206" rx="48" ry="34"
                 transform="rotate(-28,208,206)"
                 fill="white" opacity="0.06"/>
        {/* Specular highlight — point light */}
        <circle cx="192" cy="182" r="22" fill="white" opacity="0.28"/>
        <circle cx="196" cy="186" r="12" fill="white" opacity="0.45"/>
        <circle cx="199" cy="189" r="6"  fill="white" opacity="0.72"/>
        <circle cx="201" cy="191" r="3"  fill="white" opacity="0.90"/>
        {/* Rim light at bottom (secondary light source) */}
        <ellipse cx="250" cy="365" rx="100" ry="40" fill="#E91E8C" opacity="0.07"/>
        {/* Gold tint at left edge */}
        <ellipse cx="130" cy="260" rx="50" ry="90" fill="#FFD700" opacity="0.04"/>
      </g>

      {/* ══ CURVED TEXT ══ */}
      {/* Top glow layer */}
      <text fontFamily="'Inter','Helvetica Neue',Arial,sans-serif"
            fontSize="18" fontWeight="800"
            fill="#FFD700" letterSpacing="3.5" opacity="0.7"
            filter="url(#n-ringglow)">
        <textPath href="#n-top" startOffset="50%" textAnchor="middle">
          BÁCH HÓA  ·  NAILS
        </textPath>
      </text>
      {/* Top crisp */}
      <text fontFamily="'Inter','Helvetica Neue',Arial,sans-serif"
            fontSize="18" fontWeight="800"
            fill="url(#n-goldh)" letterSpacing="3.5">
        <textPath href="#n-top" startOffset="50%" textAnchor="middle">
          BÁCH HÓA  ·  NAILS
        </textPath>
      </text>

      {/* Bottom text */}
      <text fontFamily="'Inter','Helvetica Neue',Arial,sans-serif"
            fontSize="10.5" fontWeight="500"
            fill="rgba(245,167,208,0.55)" letterSpacing="2">
        <textPath href="#n-bot" startOffset="50%" textAnchor="middle">
          bachhoanails.com  ·  2025
        </textPath>
      </text>

      {/* ══ NEON STARS ══ */}
      {/* Left star */}
      <g transform="translate(42,250)" filter="url(#n-starglow)">
        <path d="M0,-8 L1.9,-2.6 L7.6,-2.5 L3.1,1 L4.7,6.8 L0,3.5 L-4.7,6.8 L-3.1,1 L-7.6,-2.5 L-1.9,-2.6 Z"
              fill="#FFD700"/>
      </g>
      {/* Right star */}
      <g transform="translate(458,250)" filter="url(#n-starglow)">
        <path d="M0,-8 L1.9,-2.6 L7.6,-2.5 L3.1,1 L4.7,6.8 L0,3.5 L-4.7,6.8 L-3.1,1 L-7.6,-2.5 L-1.9,-2.6 Z"
              fill="#FFD700"/>
      </g>

      {/* Top/bottom neon diamonds */}
      <polygon points="250,35 254.5,44 250,53 245.5,44" fill="#FFD700" filter="url(#n-starglow)"/>
      <polygon points="250,447 254.5,456 250,465 245.5,456" fill="#FFD700" filter="url(#n-starglow)"/>

      {/* Extra sparkles at 4 diagonal corners */}
      <circle cx="84"  cy="120" r="2.5" fill="#E91E8C" opacity="0.7" filter="url(#n-starglow)"/>
      <circle cx="416" cy="120" r="2.5" fill="#FFD700" opacity="0.7" filter="url(#n-starglow)"/>
      <circle cx="84"  cy="380" r="2.5" fill="#FFD700" opacity="0.7" filter="url(#n-starglow)"/>
      <circle cx="416" cy="380" r="2.5" fill="#E91E8C" opacity="0.7" filter="url(#n-starglow)"/>

      {/* ══ NAIL POLISH — neon 3D ══ */}
      <g transform="translate(250,160)" filter="url(#n-ringglow)">
        {/* Body glow */}
        <rect x="-13" y="-3" width="25" height="28" rx="5" fill="#E91E8C" opacity="0.4"/>
      </g>
      <g transform="translate(250,160)">
        {/* Ground shadow */}
        <ellipse cx="1.5" cy="39" rx="12" ry="3.5" fill="#E91E8C" fillOpacity="0.2"/>
        {/* 3D right dark side */}
        <rect x="4"  y="-3"  width="10" height="28" rx="4" fill="#580030" fillOpacity="0.8"/>
        {/* Main bottle */}
        <rect x="-13" y="-3"  width="25" height="28" rx="5" fill="#E91E8C"/>
        {/* Pink highlight left */}
        <rect x="-11" y="-1"  width="6"  height="22" rx="3" fill="rgba(255,255,255,0.2)"/>
        {/* Neon rim on bottle */}
        <rect x="-13" y="-3"  width="25" height="28" rx="5" fill="none" stroke="#FF60C0" strokeWidth="0.8" opacity="0.6"/>
        {/* Cap shadow */}
        <rect x="0"  y="-20" width="9"  height="13" rx="2.5" fill="rgba(0,0,0,0.6)"/>
        {/* Cap */}
        <rect x="-9" y="-22" width="18" height="14" rx="3" fill="#0A0A20"/>
        {/* Cap glow edge */}
        <rect x="-9" y="-22" width="18" height="14" rx="3" fill="none" stroke="#E91E8C" strokeWidth="0.6" opacity="0.5"/>
        {/* Cap highlight */}
        <rect x="-7" y="-21" width="5"  height="9"  rx="2.5" fill="rgba(255,255,255,0.10)"/>
        {/* Neck */}
        <rect x="-4.5" y="-9" width="9" height="7" rx="1.5" fill="#C2157A"/>
        {/* Bottom */}
        <ellipse cx="0" cy="25" rx="13" ry="4" fill="#8B0048"/>
        {/* Brush */}
        <rect x="-2" y="25" width="4" height="14" rx="2" fill="#050510"/>
        <ellipse cx="0" cy="39" rx="2.5" ry="4.5" fill="#030308"/>
        {/* Gold sparkle */}
        <circle cx="5.5" cy="5" r="2.2" fill="#FFD700" fillOpacity="0.8"/>
      </g>

      {/* ══ TL MONOGRAM — NEON GLOW ══ */}
      {/* Deep glow halo */}
      <text x="250" y="304"
            fontFamily="'Playfair Display',Georgia,'Times New Roman',serif"
            fontSize="118" fontWeight="900"
            textAnchor="middle" letterSpacing="-6"
            fill="#E91E8C" fillOpacity="0.25"
            filter="url(#n-textglow)">
        TL
      </text>

      {/* Mid glow */}
      <text x="250" y="304"
            fontFamily="'Playfair Display',Georgia,'Times New Roman',serif"
            fontSize="118" fontWeight="900"
            textAnchor="middle" letterSpacing="-6"
            fill="#FF30A0" fillOpacity="0.55"
            filter="url(#n-ringglow)">
        TL
      </text>

      {/* Extrusion depth layers */}
      <text x="254" y="308" fontFamily="'Playfair Display',Georgia,'Times New Roman',serif" fontSize="118" fontWeight="900" textAnchor="middle" letterSpacing="-6" fill="#3D0020" fillOpacity="0.9">TL</text>
      <text x="252" y="306" fontFamily="'Playfair Display',Georgia,'Times New Roman',serif" fontSize="118" fontWeight="900" textAnchor="middle" letterSpacing="-6" fill="#5A0030" fillOpacity="0.95">TL</text>

      {/* Main crisp neon surface */}
      <text x="250" y="304"
            fontFamily="'Playfair Display',Georgia,'Times New Roman',serif"
            fontSize="118" fontWeight="900"
            textAnchor="middle" letterSpacing="-6"
            fill="url(#n-tlgrad)">
        TL
      </text>

      {/* White specular glint */}
      <text x="249" y="303"
            fontFamily="'Playfair Display',Georgia,'Times New Roman',serif"
            fontSize="118" fontWeight="900"
            textAnchor="middle" letterSpacing="-6"
            fill="rgba(255,255,255,0.08)">
        TL
      </text>

      {/* ══ NEON UNDERLINE ══ */}
      {/* Glow */}
      <rect x="170" y="315" width="160" height="5" rx="2.5" fill="#E91E8C" opacity="0.6" filter="url(#n-ringglow)"/>
      {/* Crisp */}
      <rect x="170" y="315" width="160" height="5" rx="2.5" fill="#FF40A8"/>
      {/* Top highlight */}
      <rect x="170" y="315" width="160" height="2"  rx="1"   fill="rgba(255,255,255,0.3)"/>

      {/* Ambient orbs inside sphere */}
      <circle cx="144" cy="215" r="3"   fill="#E91E8C" opacity="0.20"/>
      <circle cx="356" cy="215" r="3"   fill="#FFD700" opacity="0.20"/>
      <circle cx="136" cy="300" r="2.5" fill="#FFD700" opacity="0.20"/>
      <circle cx="364" cy="300" r="2.5" fill="#E91E8C" opacity="0.20"/>
    </svg>
  );
}
