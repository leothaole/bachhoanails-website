// Logo Style 1 — Chrome Luxury 3D
// Phân tích từ Leo Daily: Orange→Pink, Blue→Navy, Cream→Gold
export default function LogoChrome({ size = 500 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width={size} height={size} aria-label="Bách Hóa Nails — Chrome Luxury">
      <defs>
        {/* Chrome metallic ring */}
        <linearGradient id="c-chrome" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#d8d8d8"/>
          <stop offset="12%"  stopColor="#f9f9f9"/>
          <stop offset="28%"  stopColor="#adadad"/>
          <stop offset="44%"  stopColor="#e8e8e8"/>
          <stop offset="60%"  stopColor="#848484"/>
          <stop offset="76%"  stopColor="#d4d4d4"/>
          <stop offset="90%"  stopColor="#fafafa"/>
          <stop offset="100%" stopColor="#b2b2b2"/>
        </linearGradient>

        {/* Gold metallic — vertical sheen */}
        <linearGradient id="c-gold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#4E2D00"/>
          <stop offset="18%"  stopColor="#C8860A"/>
          <stop offset="36%"  stopColor="#FFD700"/>
          <stop offset="50%"  stopColor="#FFF080"/>
          <stop offset="64%"  stopColor="#FFD700"/>
          <stop offset="82%"  stopColor="#B07A00"/>
          <stop offset="100%" stopColor="#4E2D00"/>
        </linearGradient>

        {/* Gold — horizontal (for curved text) */}
        <linearGradient id="c-goldh" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#5C3800"/>
          <stop offset="22%"  stopColor="#D4920A"/>
          <stop offset="50%"  stopColor="#FFD700"/>
          <stop offset="78%"  stopColor="#D4920A"/>
          <stop offset="100%" stopColor="#5C3800"/>
        </linearGradient>

        {/* Pink metallic ring */}
        <linearGradient id="c-pink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#FF8CC8"/>
          <stop offset="22%"  stopColor="#E91E8C"/>
          <stop offset="48%"  stopColor="#96105C"/>
          <stop offset="72%"  stopColor="#E91E8C"/>
          <stop offset="100%" stopColor="#FF8CC8"/>
        </linearGradient>

        {/* Inner circle — dark navy with top-left light */}
        <radialGradient id="c-inner" cx="36%" cy="28%" r="70%">
          <stop offset="0%"   stopColor="#28285A"/>
          <stop offset="40%"  stopColor="#1A1A2E"/>
          <stop offset="100%" stopColor="#080818"/>
        </radialGradient>

        {/* TL gold text gradient */}
        <linearGradient id="c-textgold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#FFF590"/>
          <stop offset="18%"  stopColor="#FFD700"/>
          <stop offset="38%"  stopColor="#A06800"/>
          <stop offset="52%"  stopColor="#D49800"/>
          <stop offset="72%"  stopColor="#FFD700"/>
          <stop offset="88%"  stopColor="#FFF280"/>
          <stop offset="100%" stopColor="#906000"/>
        </linearGradient>

        {/* Outer glow + drop shadow */}
        <filter id="c-outerglow" x="-18%" y="-18%" width="136%" height="136%">
          <feDropShadow dx="0" dy="10" stdDeviation="18" floodColor="#E91E8C" floodOpacity="0.20"/>
          <feDropShadow dx="0" dy="4"  stdDeviation="6"  floodColor="#000000" floodOpacity="0.55"/>
        </filter>

        {/* TL text shadow for depth */}
        <filter id="c-textshadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="4" dy="5" stdDeviation="5" floodColor="#000010" floodOpacity="0.9"/>
        </filter>

        {/* Subtle inner shadow on inner circle */}
        <filter id="c-innershadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#000000" floodOpacity="0.35"/>
        </filter>

        {/* Curved text paths — r=191 from center (250,250) */}
        <path id="c-top" d="M 59,250 A 191,191 0 0,1 441,250"/>
        <path id="c-bot" d="M 59,250 A 191,191 0 0,0 441,250"/>
      </defs>

      {/* ── AMBIENT SHADOW BASE ── */}
      <ellipse cx="254" cy="268" rx="232" ry="224" fill="#000010" opacity="0.28"/>

      {/* ── 1. CHROME OUTER RING ── */}
      <circle cx="250" cy="250" r="240" fill="url(#c-chrome)" filter="url(#c-outerglow)"/>
      {/* Bevel top-left highlight */}
      <circle cx="250" cy="250" r="240" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5"/>
      {/* Bevel bottom-right shadow */}
      <circle cx="250" cy="250" r="238" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="1.2"/>

      {/* ── 2. DARK SEPARATOR ── */}
      <circle cx="250" cy="250" r="228" fill="#04040E"/>

      {/* ── 3. GOLD BAND ── */}
      <circle cx="250" cy="250" r="222" fill="url(#c-gold)"/>
      <circle cx="250" cy="250" r="222" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
      <circle cx="250" cy="250" r="220" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="0.6"/>

      {/* ── 4. DARK GAP ── */}
      <circle cx="250" cy="250" r="215" fill="#04040E"/>

      {/* ── 5. PINK METALLIC TEXT RING ── */}
      <circle cx="250" cy="250" r="211" fill="url(#c-pink)"/>
      <circle cx="250" cy="250" r="211" fill="none" stroke="rgba(255,190,220,0.45)" strokeWidth="0.8"/>
      <circle cx="250" cy="250" r="209" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="0.6"/>

      {/* ── 6. DARK INNER GAP ── */}
      <circle cx="250" cy="250" r="171" fill="#04040E"/>

      {/* ── 7. GOLD INNER BORDER ── */}
      <circle cx="250" cy="250" r="167" fill="url(#c-gold)"/>
      <circle cx="250" cy="250" r="167" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="0.6"/>

      {/* ── 8. PINK INNER RING ── */}
      <circle cx="250" cy="250" r="161" fill="#B81070"/>
      <circle cx="250" cy="250" r="161" fill="none" stroke="rgba(255,160,210,0.3)" strokeWidth="0.5"/>

      {/* ── 9. INNER DARK CIRCLE ── */}
      <circle cx="250" cy="250" r="155" fill="url(#c-inner)" filter="url(#c-innershadow)"/>

      {/* Subtle decorative rings inside */}
      <circle cx="250" cy="250" r="146" fill="none" stroke="rgba(255,215,0,0.10)" strokeWidth="1"/>
      <circle cx="250" cy="250" r="138" fill="none" stroke="rgba(233,30,140,0.08)" strokeWidth="0.75"/>

      {/* ══ CURVED TEXT ══ */}
      {/* Top: "BÁCH HÓA · NAILS" */}
      <text
        fontFamily="'Inter','Helvetica Neue',Arial,sans-serif"
        fontSize="18" fontWeight="800"
        fill="url(#c-goldh)" letterSpacing="3.5"
      >
        <textPath href="#c-top" startOffset="50%" textAnchor="middle">
          BÁCH HÓA  ·  NAILS
        </textPath>
      </text>

      {/* Bottom: website */}
      <text
        fontFamily="'Inter','Helvetica Neue',Arial,sans-serif"
        fontSize="10.5" fontWeight="500"
        fill="rgba(245,167,208,0.68)" letterSpacing="2"
      >
        <textPath href="#c-bot" startOffset="50%" textAnchor="middle">
          bachhoanails.com  ·  2025
        </textPath>
      </text>

      {/* ══ STARS in text ring ══ */}
      <g transform="translate(42,250)">
        <path d="M0,-8 L1.9,-2.6 L7.6,-2.5 L3.1,1 L4.7,6.8 L0,3.5 L-4.7,6.8 L-3.1,1 L-7.6,-2.5 L-1.9,-2.6 Z" fill="url(#c-gold)"/>
      </g>
      <g transform="translate(458,250)">
        <path d="M0,-8 L1.9,-2.6 L7.6,-2.5 L3.1,1 L4.7,6.8 L0,3.5 L-4.7,6.8 L-3.1,1 L-7.6,-2.5 L-1.9,-2.6 Z" fill="url(#c-gold)"/>
      </g>

      {/* Top/bottom diamonds */}
      <polygon points="250,34 254.5,43 250,52 245.5,43" fill="url(#c-gold)"/>
      <polygon points="250,448 254.5,457 250,466 245.5,457" fill="url(#c-gold)"/>
      {/* Flanking dots */}
      <circle cx="218" cy="38"  r="2"   fill="rgba(255,215,0,0.55)"/>
      <circle cx="282" cy="38"  r="2"   fill="rgba(255,215,0,0.55)"/>
      <circle cx="218" cy="462" r="2"   fill="rgba(255,215,0,0.55)"/>
      <circle cx="282" cy="462" r="2"   fill="rgba(255,215,0,0.55)"/>

      {/* ══ NAIL POLISH ICON — 3D ══ */}
      <g transform="translate(250,158)">
        {/* Ground shadow */}
        <ellipse cx="2" cy="40" rx="12" ry="3.5" fill="#000010" fillOpacity="0.42"/>
        {/* 3D right-side dark face */}
        <rect x="4" y="-3" width="10" height="28" rx="4" fill="#7A0840" fillOpacity="0.75"/>
        {/* Main bottle body */}
        <rect x="-13" y="-3" width="25" height="28" rx="5" fill="url(#c-pink)"/>
        {/* Left specular highlight */}
        <rect x="-11" y="-1" width="5.5" height="22" rx="2.75" fill="rgba(255,255,255,0.22)"/>
        {/* Cap dark right */}
        <rect x="0"  y="-20" width="9" height="13" rx="2.5" fill="rgba(0,0,0,0.5)"/>
        {/* Cap main */}
        <rect x="-9" y="-22" width="18" height="14" rx="3"   fill="#1A1A2E"/>
        {/* Cap top highlight */}
        <rect x="-7" y="-21" width="5" height="9" rx="2.5"   fill="rgba(255,255,255,0.13)"/>
        {/* Neck */}
        <rect x="-4.5" y="-9" width="9" height="7" rx="1.5"  fill="#9A1060"/>
        {/* Bottom curve */}
        <ellipse cx="0" cy="25" rx="13" ry="4" fill="#7A0840"/>
        {/* Brush handle */}
        <rect x="-2" y="25" width="4" height="14" rx="2"     fill="#0D0D20"/>
        {/* Brush tip */}
        <ellipse cx="0" cy="39" rx="2.5" ry="4.5"             fill="#080818"/>
        {/* Gold sparkle dot */}
        <circle cx="5.5" cy="5" r="2"   fill="#FFD700" fillOpacity="0.7"/>
        <circle cx="-7"  cy="14" r="1.5" fill="#FFD700" fillOpacity="0.35"/>
      </g>

      {/* ══ TL MONOGRAM — 3D EXTRUSION ══ */}
      {/* Shadow/extrusion layers — deepest to nearest */}
      <text x="258" y="312" fontFamily="'Playfair Display',Georgia,'Times New Roman',serif" fontSize="118" fontWeight="900" textAnchor="middle" letterSpacing="-6" fill="#000010" fillOpacity="0.6">TL</text>
      <text x="256" y="310" fontFamily="'Playfair Display',Georgia,'Times New Roman',serif" fontSize="118" fontWeight="900" textAnchor="middle" letterSpacing="-6" fill="#060820" fillOpacity="0.7">TL</text>
      <text x="254" y="308" fontFamily="'Playfair Display',Georgia,'Times New Roman',serif" fontSize="118" fontWeight="900" textAnchor="middle" letterSpacing="-6" fill="#101440" fillOpacity="0.8">TL</text>
      <text x="252" y="306" fontFamily="'Playfair Display',Georgia,'Times New Roman',serif" fontSize="118" fontWeight="900" textAnchor="middle" letterSpacing="-6" fill="#1A1A2E" fillOpacity="0.95">TL</text>

      {/* Main gold surface */}
      <text
        x="250" y="304"
        fontFamily="'Playfair Display',Georgia,'Times New Roman',serif"
        fontSize="118" fontWeight="900"
        textAnchor="middle" letterSpacing="-6"
        fill="url(#c-textgold)" filter="url(#c-textshadow)"
      >
        TL
      </text>

      {/* Specular: tiny white glint on top-left edge */}
      <text x="249" y="303" fontFamily="'Playfair Display',Georgia,'Times New Roman',serif" fontSize="118" fontWeight="900" textAnchor="middle" letterSpacing="-6" fill="rgba(255,255,255,0.06)">TL</text>

      {/* ══ GOLD UNDERLINE — bevelled ══ */}
      <rect x="170" y="316" width="160" height="6.5" rx="3.25" fill="url(#c-gold)"/>
      {/* Top highlight on bar */}
      <rect x="170" y="316" width="160" height="2.5"  rx="1.25" fill="rgba(255,255,255,0.30)"/>
      {/* Bottom shadow on bar */}
      <rect x="172" y="320" width="158" height="2"    rx="1"    fill="rgba(0,0,0,0.28)"/>

      {/* Ambient sparkle dots in inner circle */}
      <circle cx="142" cy="210" r="2.5" fill="rgba(255,215,0,0.18)"/>
      <circle cx="358" cy="210" r="2.5" fill="rgba(255,215,0,0.18)"/>
      <circle cx="136" cy="295" r="2"   fill="rgba(233,30,140,0.18)"/>
      <circle cx="364" cy="295" r="2"   fill="rgba(233,30,140,0.18)"/>
      <circle cx="158" cy="355" r="1.5" fill="rgba(255,215,0,0.12)"/>
      <circle cx="342" cy="355" r="1.5" fill="rgba(255,215,0,0.12)"/>
    </svg>
  );
}
