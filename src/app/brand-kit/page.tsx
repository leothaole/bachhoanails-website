"use client";

import { useState } from "react";
import LogoChrome from "@/components/logos/LogoChrome";
import LogoNeon from "@/components/logos/LogoNeon";

const colors = [
  { name: "Primary â€” Cam Logo", hex: "#F5831F", rgb: "245, 131, 31", usage: "CTA buttons, badges, highlights â€” mÃ u cam tá»« logo", tailwind: "bg-primary", textClass: "text-white" },
  { name: "Primary Dark", hex: "#D4650A", rgb: "212, 101, 10", usage: "Hover state cá»§a primary button", tailwind: "bg-[#D4650A]", textClass: "text-white" },
  { name: "Primary Light", hex: "#FBBF8C", rgb: "251, 191, 140", usage: "Background nháº¹, divider", tailwind: "bg-[#FBBF8C]", textClass: "text-secondary" },
  { name: "Accent â€” Xanh Logo", hex: "#5BAFD6", rgb: "91, 175, 214", usage: "Text 'Nails', accent elements â€” mÃ u xanh tá»« logo", tailwind: "bg-accent", textClass: "text-white" },
  { name: "Secondary â€” Navy Äáº­m", hex: "#1A1A2E", rgb: "26, 26, 46", usage: "Text chÃ­nh, header, footer background", tailwind: "bg-secondary", textClass: "text-white" },
  { name: "Background", hex: "#FFFAF6", rgb: "255, 250, 246", usage: "Background tá»•ng thá»ƒ cá»§a trang â€” áº¥m nháº¹", tailwind: "bg-background", textClass: "text-secondary" },
  { name: "Muted â€” XÃ¡m VÄƒn Báº£n", hex: "#666666", rgb: "102, 102, 102", usage: "Text phá»¥, subtitle, caption", tailwind: "bg-[#666666]", textClass: "text-white" },
  { name: "Border Light", hex: "#E5E7EB", rgb: "229, 231, 235", usage: "ÄÆ°á»ng káº», viá»n card, divider", tailwind: "bg-gray-200", textClass: "text-secondary" },
];

const fontSizes = [
  { name: "Display", size: "text-5xl", label: "3rem / 48px", sample: "BÃ¡ch HÃ³a Nails" },
  { name: "H1", size: "text-4xl", label: "2.25rem / 36px", sample: "HÃ ng Má»›i Vá» HÃ´m Nay" },
  { name: "H2", size: "text-3xl", label: "1.875rem / 30px", sample: "BÃ¡n Cháº¡y Nháº¥t" },
  { name: "H3", size: "text-2xl", label: "1.5rem / 24px", sample: "DND Collections 2025" },
  { name: "H4", size: "text-xl", label: "1.25rem / 20px", sample: "Kiara Sky Gel MÃ u" },
  { name: "Body Large", size: "text-base", label: "1rem / 16px", sample: "Mua sá»‰ tá»« 10 sáº£n pháº©m â€” giáº£m ngay 15%." },
  { name: "Body Small", size: "text-sm", label: "0.875rem / 14px", sample: "Free shipping Ä‘Æ¡n hÃ ng tá»« $150 trá»Ÿ lÃªn." },
  { name: "Caption", size: "text-xs", label: "0.75rem / 12px", sample: "Â© 2025 BÃ¡ch HÃ³a Nails Â· bachhoanails.com" },
];

const voices = [
  { label: "ThÃ¢n thiá»‡n", do: "ChÃ o báº¡n! Gel má»›i vá» rá»“i nÃ¨ â€”", dont: "KÃ­nh gá»­i quÃ½ khÃ¡ch..." },
  { label: "RÃµ rÃ ng", do: "Mua 10 chai â†’ giáº£m 15%", dont: "TÃ¹y theo sá»‘ lÆ°á»£ng cÃ³ thá»ƒ cÃ³ Æ°u Ä‘Ã£i" },
  { label: "NgÆ°á»i Viá»‡t", do: "Tiá»‡m nails Viá»‡t uy tÃ­n nháº¥t vÃ¹ng", dont: "Best nail supply for Vietnamese nail technicians" },
  { label: "HÃ nh Ä‘á»™ng", do: "Äáº·t hÃ ng ngay â€” giao trong 2 ngÃ y", dont: "Sáº£n pháº©m cÃ³ thá»ƒ Ä‘Æ°á»£c Ä‘áº·t mua" },
];

const socialTemplates = [
  {
    id: "fb-post",
    name: "Facebook Post",
    size: "1200 Ã— 630px",
    ratio: "aspect-[1200/630]",
    content: (
      <div className="w-full h-full bg-gradient-to-br from-[#1A1A2E] to-[#2d1b4e] flex flex-col items-center justify-center p-8 text-center">
        <div className="text-primary text-4xl mb-3">ðŸ’…</div>
        <p className="text-white/60 text-xs uppercase tracking-widest mb-2 font-body">BÃ¡ch HÃ³a Nails</p>
        <h2 className="font-heading text-white text-2xl sm:text-3xl font-bold mb-3 leading-tight">
          HÃ ng Má»›i Vá»<br/>
          <span className="text-primary">Giáº£m 20% Tuáº§n NÃ y</span>
        </h2>
        <p className="text-white/70 text-sm mb-5 max-w-xs">DND 1200+ mÃ u Â· Kiara Sky Â· SNS Dip Powder<br/>Free ship Ä‘Æ¡n tá»« $150</p>
        <div className="bg-primary text-white font-bold text-sm px-6 py-2.5">
          bachhoanails.com
        </div>
      </div>
    ),
  },
  {
    id: "ig-post",
    name: "Instagram Post",
    size: "1080 Ã— 1080px",
    ratio: "aspect-square",
    content: (
      <div className="w-full h-full bg-gradient-to-br from-[#E91E8C] to-[#C2157A] flex flex-col items-center justify-center p-8 text-center">
        <div className="text-white text-5xl mb-4">âœ¨</div>
        <h2 className="font-heading text-white text-3xl font-bold mb-2 leading-tight">
          Mua Sá»‰<br/>Tiáº¿t Kiá»‡m HÆ¡n
        </h2>
        <div className="w-12 h-0.5 bg-white/50 mx-auto my-3" />
        <p className="text-white/90 text-sm mb-1">Tá»« 10 sáº£n pháº©m â†’ giáº£m 15%</p>
        <p className="text-white/90 text-sm mb-6">Tá»« 20 sáº£n pháº©m â†’ giáº£m 25%</p>
        <p className="text-white font-bold text-xs uppercase tracking-widest">
          @bachhoanails
        </p>
      </div>
    ),
  },
  {
    id: "ig-story",
    name: "Instagram Story",
    size: "1080 Ã— 1920px",
    ratio: "aspect-[9/16]",
    content: (
      <div className="w-full h-full bg-gradient-to-b from-[#1A1A2E] via-[#2d1b4e] to-[#1A1A2E] flex flex-col items-center justify-center p-6 text-center">
        <p className="text-primary text-xs uppercase tracking-widest mb-6 font-body">LIMITED TIME</p>
        <div className="text-5xl mb-4">ðŸŒ¸</div>
        <h2 className="font-heading text-white text-2xl font-bold mb-2 leading-tight">
          Spring Bundle<br/>
          <span className="text-primary">â€“35%</span>
        </h2>
        <p className="text-white/70 text-xs mb-8 max-w-[180px]">Kiara Sky Â· DND Â· Notpolish<br/>Mua bá»™ ráº» hÆ¡n mua láº»</p>
        <div className="border-2 border-primary text-primary font-bold text-xs px-5 py-2 mb-8">
          XEM NGAY â†‘
        </div>
        <p className="text-white/40 text-[10px]">bachhoanails.com</p>
      </div>
    ),
  },
  {
    id: "promo-banner",
    name: "Web Banner",
    size: "1200 Ã— 300px",
    ratio: "aspect-[4/1]",
    content: (
      <div className="w-full h-full bg-[#1A1A2E] flex items-center justify-between px-8 sm:px-12">
        <div>
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Flash Sale</p>
          <h2 className="font-heading text-white text-xl sm:text-2xl font-bold leading-tight">
            Mua sá»‰ hÃ´m nay<br className="sm:hidden" /> â€” Giao ngay mai
          </h2>
          <p className="text-white/60 text-xs mt-1">Free ship Ä‘Æ¡n tá»« $150 Â· Äá»•i tráº£ 15 ngÃ y</p>
        </div>
        <div className="flex-shrink-0">
          <div className="bg-primary text-white font-bold text-sm px-5 py-2.5 whitespace-nowrap">
            Mua ngay â†’
          </div>
        </div>
      </div>
    ),
  },
];

const logos = [
  { bg: "bg-white border border-gray-200", textColor: "text-secondary", accentColor: "text-primary", label: "Ná»n sÃ¡ng" },
  { bg: "bg-[#1A1A2E]", textColor: "text-white", accentColor: "text-primary", label: "Ná»n tá»‘i" },
  { bg: "bg-primary", textColor: "text-white", accentColor: "text-white", label: "Ná»n mÃ u" },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="text-[10px] font-mono bg-gray-100 hover:bg-gray-200 px-2 py-0.5 transition-colors text-gray-600"
    >
      {copied ? "âœ“ Copied" : text}
    </button>
  );
}

export default function BrandKitPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-body">

      {/* Top bar */}
      <div className="bg-[#1A1A2E] text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="text-white/60 text-sm hover:text-white transition-colors">â† Quay vá» trang chá»§</a>
          <span className="text-white/40 text-xs">Brand Kit Â· BÃ¡ch HÃ³a Nails Â· v1.0</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2d1b4e] py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary text-xs font-bold px-3 py-1.5 mb-6">
            BRAND KIT Â· INTERNAL USE
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            BÃ¡ch HÃ³a <span className="text-primary">Nails</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            TÃ i liá»‡u thÆ°Æ¡ng hiá»‡u Â· MÃ u sáº¯c Â· Font chá»¯ Â· Template Â· Giá»ng vÄƒn
          </p>
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {["#MÃ u Sáº¯c", "#Font Chá»¯", "#Logo", "#Templates", "#Voice & Tone"].map(tag => (
              <span key={tag} className="text-xs text-white/50 bg-white/10 px-3 py-1">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* â”€â”€ 1. COLORS â”€â”€ */}
        <section>
          <SectionTitle number="01" title="Báº£ng MÃ u ThÆ°Æ¡ng Hiá»‡u" sub="DÃ¹ng Ä‘Ãºng mÃ u â€” khÃ´ng tá»± Ã½ thay Ä‘á»•i" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {colors.map((c) => (
              <div key={c.hex} className="bg-white border border-gray-200 overflow-hidden">
                <div className={`${c.tailwind} h-24 flex items-end p-3`}>
                  <span className={`font-mono text-sm font-bold ${c.textClass}`}>{c.hex}</span>
                </div>
                <div className="p-3">
                  <p className="text-xs font-semibold text-secondary mb-1">{c.name}</p>
                  <p className="text-[11px] text-gray-400 mb-2">RGB {c.rgb}</p>
                  <p className="text-[11px] text-gray-500 mb-2 leading-relaxed">{c.usage}</p>
                  <CopyButton text={c.hex} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* â”€â”€ 2. TYPOGRAPHY â”€â”€ */}
        <section>
          <SectionTitle number="02" title="Typography â€” Font Chá»¯" sub="Playfair Display (tiÃªu Ä‘á») + Inter (ná»™i dung)" />

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 p-6">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Heading Font</p>
              <p className="font-heading text-4xl font-bold text-secondary mb-2">Playfair Display</p>
              <p className="font-heading text-lg text-gray-500 italic mb-4">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-heading text-base text-gray-500">abcdefghijklmnopqrstuvwxyz 0123456789</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">DÃ¹ng cho: TiÃªu Ä‘á» section, hero text, brand name</p>
                <p className="text-xs text-gray-400">Google Font: Playfair Display 400â€“800</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-6">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Body Font</p>
              <p className="font-body text-4xl font-bold text-secondary mb-2">Inter</p>
              <p className="font-body text-lg text-gray-500 mb-4">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-body text-base text-gray-500">abcdefghijklmnopqrstuvwxyz 0123456789</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">DÃ¹ng cho: Body text, buttons, labels, captions</p>
                <p className="text-xs text-gray-400">Google Font: Inter 300â€“700</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-2 border-b border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-widest">Type Scale</p>
            </div>
            <div className="divide-y divide-gray-100">
              {fontSizes.map((f) => (
                <div key={f.name} className="flex items-baseline gap-4 px-4 py-4">
                  <div className="w-24 flex-shrink-0">
                    <p className="text-[11px] font-semibold text-gray-400">{f.name}</p>
                    <p className="text-[10px] text-gray-300 font-mono">{f.label}</p>
                  </div>
                  <p className={`font-heading ${f.size} font-bold text-secondary leading-tight truncate`}>{f.sample}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ 3. LOGO â”€â”€ */}
        <section>
          <SectionTitle number="03" title="Logo & Brand Mark â€” 3D Edition" sub="2 phong cÃ¡ch â€” chá»n 1 lÃ m logo chÃ­nh thá»©c" />

          {/* STYLE 1: Chrome Luxury */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gray-800 text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest">Style 1</span>
              <h3 className="font-heading font-bold text-xl text-secondary">Chrome Luxury</h3>
              <span className="text-xs text-gray-400">â€” Kim loáº¡i Â· Cao cáº¥p Â· Classic</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 flex flex-col items-center justify-center py-10 gap-3">
                <LogoChrome size={200}/>
                <p className="text-[11px] text-gray-400">Ná»n tráº¯ng</p>
              </div>
              <div className="bg-[#1A1A2E] flex flex-col items-center justify-center py-10 gap-3">
                <LogoChrome size={200}/>
                <p className="text-[11px] text-white/40">Ná»n tá»‘i</p>
              </div>
              <div className="bg-gray-100 border border-gray-200 flex flex-col items-center justify-center py-10 gap-3">
                <LogoChrome size={120}/>
                <LogoChrome size={60}/>
                <p className="text-[11px] text-gray-400">Scale test</p>
              </div>
            </div>
            <div className="mt-3 bg-gray-50 border border-gray-200 px-4 py-3 text-xs text-gray-500">
              <strong>PhÃ¹ há»£p vá»›i:</strong> Website header, email signature, packaging, print, business card. Sang trá»ng nhÆ° thÆ°Æ¡ng hiá»‡u nails cao cáº¥p.
            </div>
          </div>

          {/* STYLE 2: Neon Crystal */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest">Style 2</span>
              <h3 className="font-heading font-bold text-xl text-secondary">Neon Crystal</h3>
              <span className="text-xs text-gray-400">â€” PhÃ¡t sÃ¡ng Â· Hiá»‡n Ä‘áº¡i Â· Social Media</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-[#050508] flex flex-col items-center justify-center py-10 gap-3">
                <LogoNeon size={200}/>
                <p className="text-[11px] text-white/30">Ná»n tá»‘i (best)</p>
              </div>
              <div className="bg-white border border-gray-200 flex flex-col items-center justify-center py-10 gap-3">
                <LogoNeon size={200}/>
                <p className="text-[11px] text-gray-400">Ná»n tráº¯ng</p>
              </div>
              <div className="bg-[#0E0E1C] flex flex-col items-center justify-center py-10 gap-3">
                <LogoNeon size={120}/>
                <LogoNeon size={60}/>
                <p className="text-[11px] text-white/30">Scale test</p>
              </div>
            </div>
            <div className="mt-3 bg-[#0A0A15] border border-pink-900/40 px-4 py-3 text-xs text-pink-300/70">
              <strong className="text-pink-300">PhÃ¹ há»£p vá»›i:</strong> Facebook, Instagram, TikTok thumbnail, YouTube banner, story highlight cover. Eye-catching trÃªn social media.
            </div>
          </div>

          {/* Side by side comparison */}
          <div className="bg-white border border-gray-200 overflow-hidden mb-6">
            <div className="bg-gray-50 px-4 py-2 border-b border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-widest">So sÃ¡nh 2 style</p>
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-100">
              {[
                { label: "Chrome Luxury", feel: "Sang trá»ng, bá»n vá»¯ng", best: "Print, Website, Business", tone: "Luxury nail supply", comp: "<LogoChrome/>", bg: "bg-white" },
                { label: "Neon Crystal", feel: "Hiá»‡n Ä‘áº¡i, ná»•i báº­t", best: "Social Media, Digital", tone: "Trendy nail brand", comp: "<LogoNeon/>", bg: "bg-[#050508]" },
              ].map((s) => (
                <div key={s.label} className="p-4">
                  <p className="text-xs font-bold text-secondary mb-3">{s.label}</p>
                  <div className="space-y-2 text-[11px] text-gray-500">
                    <div><span className="text-gray-300">Feel:</span> {s.feel}</div>
                    <div><span className="text-gray-300">Best for:</span> {s.best}</div>
                    <div><span className="text-gray-300">Brand tone:</span> {s.tone}</div>
                    <div><span className="text-gray-300">Background:</span> {s.bg}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800 mb-8">
            <strong>Gá»£i Ã½:</strong> DÃ¹ng <strong>Chrome Luxury</strong> lÃ m logo chÃ­nh thá»©c trÃªn website + business card. DÃ¹ng <strong>Neon Crystal</strong> cho social media posts, story highlight, vÃ  thumbnail YouTube/TikTok.
          </div>

          {/* Official logo */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest">Official</span>
              <h3 className="font-heading font-bold text-xl text-secondary">Logo ChÃ­nh Thá»©c</h3>
              <span className="text-xs text-gray-400">â€” AI-generated 3D Â· ÄÃ£ dÃ¹ng trÃªn website</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 flex flex-col items-center justify-center py-8 gap-3">
                <img src="/logo-brand.png" alt="BachHoa Nails Official Logo" className="h-40 w-auto object-contain"/>
                <p className="text-[11px] text-gray-400">Ná»n tráº¯ng</p>
              </div>
              <div className="bg-[#1a1a1a] flex flex-col items-center justify-center py-8 gap-3">
                <img src="/logo-brand.png" alt="BachHoa Nails Official Logo" className="h-40 w-auto object-contain"/>
                <p className="text-[11px] text-white/40">Ná»n tá»‘i (Header)</p>
              </div>
              <div className="bg-gray-100 border border-gray-200 flex flex-col items-center justify-center py-8 gap-3">
                <img src="/logo-brand.png" alt="BachHoa Nails small" className="h-14 w-auto object-contain"/>
                <img src="/logo-brand.png" alt="BachHoa Nails tiny" className="h-8 w-auto object-contain"/>
                <p className="text-[11px] text-gray-400">Scale: 56px + 32px</p>
              </div>
            </div>
            <div className="mt-3 bg-green-50 border border-green-200 px-4 py-3 text-xs text-green-800">
              <strong>Äang dÃ¹ng:</strong> Logo nÃ y Ä‘Ã£ Ä‘Æ°á»£c tÃ­ch há»£p vÃ o Header vÃ  Footer cá»§a website. File: <code className="bg-green-100 px-1 font-mono">public/logo-brand.png</code>
            </div>
          </div>
        </section>

        {/* â”€â”€ 4. UI COMPONENTS â”€â”€ */}
        <section>
          <SectionTitle number="04" title="UI Components" sub="Buttons, badges, inputs â€” style chuáº©n" />
          <div className="bg-white border border-gray-200 p-6 space-y-8">

            {/* Buttons */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Buttons</p>
              <div className="flex flex-wrap gap-3 items-center">
                <button className="bg-primary text-white font-bold text-sm px-6 py-2.5 hover:bg-[#C2157A] transition-colors">Mua ngay</button>
                <button className="border-2 border-secondary text-secondary font-bold text-sm px-6 py-2.5 hover:bg-secondary hover:text-white transition-all">Xem thÃªm</button>
                <button className="border border-gray-300 text-secondary text-sm font-semibold px-6 py-2.5 hover:border-secondary transition-all">Secondary</button>
                <button className="bg-[#1A1A2E] text-white font-bold text-sm px-6 py-2.5 hover:bg-[#2d2d4e] transition-colors">Dark CTA</button>
                <button className="bg-green-600 text-white font-bold text-sm px-6 py-2.5">âœ“ ÄÃ£ thÃªm</button>
              </div>
            </div>

            {/* Badges */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Badges</p>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1">HOT</span>
                <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1">SALE</span>
                <span className="bg-primary text-white text-xs font-bold px-2.5 py-1">Má»šI</span>
                <span className="bg-gray-800 text-white text-xs font-bold px-2.5 py-1">BEST SELLER</span>
                <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1">TOP RATED</span>
                <span className="bg-green-600 text-white text-xs font-bold px-2.5 py-1">Tiáº¿t kiá»‡m $47</span>
                <span className="bg-pink-500 text-white text-xs font-bold px-2.5 py-1">YÃŠU THÃCH</span>
              </div>
            </div>

            {/* Stars */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Rating Stars</p>
              <div className="flex flex-col gap-2">
                {[5, 4, 3].map(r => (
                  <div key={r} className="flex items-center gap-2">
                    <div className="flex">
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} className={`w-4 h-4 ${s <= r ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">{r}.0 / 5</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider styles */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Section Dividers</p>
              <div className="space-y-4">
                <div className="w-16 h-0.5 bg-primary" />
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-xs text-gray-400">hoáº·c</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div className="border-t border-gray-100" />
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ 5. SOCIAL MEDIA TEMPLATES â”€â”€ */}
        <section>
          <SectionTitle number="05" title="Social Media Templates" sub="KÃ©o tháº£ vÃ o Canva hoáº·c dÃ¹ng lÃ m tham kháº£o design" />
          <div className="grid sm:grid-cols-2 gap-6">
            {socialTemplates.map((t) => (
              <div key={t.id}>
                <div className="flex items-baseline justify-between mb-2">
                  <p className="text-sm font-semibold text-secondary">{t.name}</p>
                  <span className="text-xs text-gray-400 font-mono">{t.size}</span>
                </div>
                <div className={`${t.ratio} w-full overflow-hidden border border-gray-200 shadow-sm`}>
                  {t.content}
                </div>
                <p className="text-[11px] text-gray-400 mt-1.5">
                  MÃ u ná»n: #1A1A2E Â· Primary: #E91E8C Â· Font: Playfair Display
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* â”€â”€ 6. VOICE & TONE â”€â”€ */}
        <section>
          <SectionTitle number="06" title="Voice & Tone â€” Giá»ng VÄƒn" sub="CÃ¡ch viáº¿t copy cho BÃ¡ch HÃ³a Nails" />
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-gray-200 p-5">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">ChÃºng ta lÃ  ai</p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">â†’</span>NgÆ°á»i Viá»‡t, cho ngÆ°á»i Viá»‡t</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">â†’</span>ThÃ¢n thiá»‡n nhÆ° báº¡n bÃ¨, chuyÃªn nghiá»‡p nhÆ° Ä‘á»‘i tÃ¡c</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">â†’</span>NÃ³i tháº³ng â€” giÃ¡ tá»‘t, hÃ ng chuáº©n, giao nhanh</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">â†’</span>KhÃ´ng hoa má»¹, khÃ´ng sÃ¡o rá»—ng</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">â†’</span>DÃ¹ng tiáº¿ng Viá»‡t tá»± nhiÃªn â€” khÃ´ng dá»‹ch tá»« Anh</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 p-5">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Taglines cÃ³ thá»ƒ dÃ¹ng</p>
              <ul className="space-y-3 text-sm">
                <li className="font-heading font-bold text-secondary">"HÃ ng nails Má»¹ â€” GiÃ¡ sá»‰ tá»‘t nháº¥t"</li>
                <li className="font-heading font-bold text-secondary">"Tá»« ká»‡ hÃ ng Má»¹ Ä‘áº¿n tay thá»£ Viá»‡t"</li>
                <li className="font-heading font-bold text-secondary">"ChuyÃªn cung cáº¥p cho tiá»‡m nails Viá»‡t"</li>
                <li className="font-heading font-bold text-secondary">"Mua sá»‰ â€” Tiáº¿t kiá»‡m tháº­t sá»±"</li>
                <li className="font-heading font-bold text-secondary">"1,200+ mÃ u gel Â· Giao táº­n nÆ¡i"</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-2 border-b border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-widest">VÃ­ dá»¥ â€” NÃªn & KhÃ´ng NÃªn</p>
            </div>
            <div className="divide-y divide-gray-100">
              {voices.map((v) => (
                <div key={v.label} className="grid grid-cols-3 gap-4 px-4 py-3 items-start">
                  <p className="text-xs font-semibold text-secondary">{v.label}</p>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold text-xs mt-0.5 flex-shrink-0">âœ“</span>
                    <p className="text-xs text-gray-700">{v.do}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold text-xs mt-0.5 flex-shrink-0">âœ—</span>
                    <p className="text-xs text-gray-400 line-through">{v.dont}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ 7. MARKETING COPY â”€â”€ */}
        <section>
          <SectionTitle number="07" title="Copy Máº«u â€” Marketing" sub="DÃ¹ng trá»±c tiáº¿p hoáº·c chá»‰nh sá»­a theo tÃ¬nh huá»‘ng" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { channel: "Facebook Post", text: "ðŸŒ¸ HÃ ng má»›i vá» tuáº§n nÃ y!\nDND, Kiara Sky, SNS Dip Powder â€” 1,200+ mÃ u gel.\nMua 10+ sáº£n pháº©m â†’ giáº£m ngay 15%\nFree ship Ä‘Æ¡n tá»« $150 ðŸšš\nðŸ‘‰ bachhoanails.com" },
              { channel: "Announcement Bar", text: "ðŸšš Free ship Ä‘Æ¡n tá»« $150 Â· Äá»•i tráº£ 15 ngÃ y Â· Giao 2â€“5 ngÃ y" },
              { channel: "Product Badge", text: "HOT Â· Má»šI Â· SALE Â· BEST SELLER Â· TOP RATED Â· YÃŠU THÃCH" },
              { channel: "Hero Heading", text: "GiÃ¡ sá»‰ tá»‘t nháº¥t\ncho tiá»‡m nails Viá»‡t" },
              { channel: "Email Subject", text: "ðŸŒ¸ [BÃO GIÃ Sá»ˆ] DND thÃ¡ng nÃ y giáº£m 20% â€” xem ngay" },
              { channel: "WhatsApp/SMS", text: "ChÃ o chá»‹! Em bÃªn BÃ¡ch HÃ³a Nails. Tuáº§n nÃ y DND vá» hÃ ng má»›i, giáº£m 20%. Chá»‹ cáº§n sá»‘ lÆ°á»£ng bao nhiÃªu áº¡? ðŸ˜Š" },
            ].map((item) => (
              <div key={item.channel} className="bg-white border border-gray-200 p-4">
                <p className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-2">{item.channel}</p>
                <p className="text-xs text-gray-700 whitespace-pre-line leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* â”€â”€ 8. FILE FORMATS â”€â”€ */}
        <section>
          <SectionTitle number="08" title="KÃ­ch ThÆ°á»›c Chuáº©n" sub="Tham kháº£o khi thiáº¿t káº¿" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name: "Facebook Post", size: "1200 Ã— 630px", ratio: "1.91:1" },
              { name: "Facebook Story", size: "1080 Ã— 1920px", ratio: "9:16" },
              { name: "Instagram Post", size: "1080 Ã— 1080px", ratio: "1:1" },
              { name: "Instagram Story", size: "1080 Ã— 1920px", ratio: "9:16" },
              { name: "Instagram Reel Cover", size: "1080 Ã— 1920px", ratio: "9:16" },
              { name: "TikTok Video", size: "1080 Ã— 1920px", ratio: "9:16" },
              { name: "Web Banner (Full)", size: "1200 Ã— 300px", ratio: "4:1" },
              { name: "Web Banner (Half)", size: "600 Ã— 300px", ratio: "2:1" },
              { name: "Email Header", size: "600 Ã— 200px", ratio: "3:1" },
              { name: "Logo (Square)", size: "500 Ã— 500px", ratio: "1:1" },
              { name: "Logo (Wide)", size: "500 Ã— 200px", ratio: "5:2" },
              { name: "Favicon", size: "32 Ã— 32px", ratio: "1:1" },
            ].map((item) => (
              <div key={item.name} className="bg-white border border-gray-200 px-4 py-3 flex items-center justify-between">
                <p className="text-sm font-medium text-secondary">{item.name}</p>
                <div className="text-right">
                  <p className="text-xs font-mono text-primary">{item.size}</p>
                  <p className="text-[10px] text-gray-400">{item.ratio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Footer */}
      <div className="bg-[#1A1A2E] text-white/40 py-6 px-6 mt-16 text-center text-xs">
        Brand Kit Â· BÃ¡ch HÃ³a Nails Â· bachhoanails.com Â· Cáº­p nháº­t: 2025 Â· DÃ nh cho ná»™i bá»™
      </div>
    </div>
  );
}

function SectionTitle({ number, title, sub }: { number: string; title: string; sub: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-baseline gap-3 mb-1">
        <span className="font-mono text-xs font-bold text-primary">{number}</span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary">{title}</h2>
      </div>
      <p className="text-sm text-gray-400 ml-8">{sub}</p>
      <div className="w-12 h-0.5 bg-primary mt-3 ml-8" />
    </div>
  );
}
