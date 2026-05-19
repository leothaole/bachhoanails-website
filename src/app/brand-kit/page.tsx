"use client";

import { useState } from "react";
import LogoChrome from "@/components/logos/LogoChrome";
import LogoNeon from "@/components/logos/LogoNeon";

const colors = [
  { name: "Primary — Cam Logo", hex: "#F5831F", rgb: "245, 131, 31", usage: "CTA buttons, badges, highlights — màu cam từ logo", tailwind: "bg-primary", textClass: "text-white" },
  { name: "Primary Dark", hex: "#D4650A", rgb: "212, 101, 10", usage: "Hover state của primary button", tailwind: "bg-[#D4650A]", textClass: "text-white" },
  { name: "Primary Light", hex: "#FBBF8C", rgb: "251, 191, 140", usage: "Background nhẹ, divider", tailwind: "bg-[#FBBF8C]", textClass: "text-secondary" },
  { name: "Accent — Xanh Logo", hex: "#5BAFD6", rgb: "91, 175, 214", usage: "Text 'Nails', accent elements — màu xanh từ logo", tailwind: "bg-accent", textClass: "text-white" },
  { name: "Secondary — Navy Đậm", hex: "#1A1A2E", rgb: "26, 26, 46", usage: "Text chính, header, footer background", tailwind: "bg-secondary", textClass: "text-white" },
  { name: "Background", hex: "#FFFAF6", rgb: "255, 250, 246", usage: "Background tổng thể của trang — ấm nhẹ", tailwind: "bg-background", textClass: "text-secondary" },
  { name: "Muted — Xám Văn Bản", hex: "#666666", rgb: "102, 102, 102", usage: "Text phụ, subtitle, caption", tailwind: "bg-[#666666]", textClass: "text-white" },
  { name: "Border Light", hex: "#E5E7EB", rgb: "229, 231, 235", usage: "Đường kẻ, viền card, divider", tailwind: "bg-gray-200", textClass: "text-secondary" },
];

const fontSizes = [
  { name: "Display", size: "text-5xl", label: "3rem / 48px", sample: "Bách Hóa Nails" },
  { name: "H1", size: "text-4xl", label: "2.25rem / 36px", sample: "Hàng Mới Về Hôm Nay" },
  { name: "H2", size: "text-3xl", label: "1.875rem / 30px", sample: "Bán Chạy Nhất" },
  { name: "H3", size: "text-2xl", label: "1.5rem / 24px", sample: "DND Collections 2025" },
  { name: "H4", size: "text-xl", label: "1.25rem / 20px", sample: "Kiara Sky Gel Màu" },
  { name: "Body Large", size: "text-base", label: "1rem / 16px", sample: "Mua sỉ từ 10 sản phẩm — giảm ngay 15%." },
  { name: "Body Small", size: "text-sm", label: "0.875rem / 14px", sample: "Free shipping đơn hàng từ $150 trở lên." },
  { name: "Caption", size: "text-xs", label: "0.75rem / 12px", sample: "© 2025 Bách Hóa Nails · bachhoanails.com" },
];

const voices = [
  { label: "Thân thiện", do: "Chào bạn! Gel mới về rồi nè —", dont: "Kính gửi quý khách..." },
  { label: "Rõ ràng", do: "Mua 10 chai → giảm 15%", dont: "Tùy theo số lượng có thể có ưu đãi" },
  { label: "Người Việt", do: "Tiệm nails Việt uy tín nhất vùng", dont: "Best nail supply for Vietnamese nail technicians" },
  { label: "Hành động", do: "Đặt hàng ngay — giao trong 2 ngày", dont: "Sản phẩm có thể được đặt mua" },
];

const socialTemplates = [
  {
    id: "fb-post",
    name: "Facebook Post",
    size: "1200 × 630px",
    ratio: "aspect-[1200/630]",
    content: (
      <div className="w-full h-full bg-gradient-to-br from-[#1A1A2E] to-[#2d1b4e] flex flex-col items-center justify-center p-8 text-center">
        <div className="text-primary text-4xl mb-3">💅</div>
        <p className="text-white/60 text-xs uppercase tracking-widest mb-2 font-body">Bách Hóa Nails</p>
        <h2 className="font-heading text-white text-2xl sm:text-3xl font-bold mb-3 leading-tight">
          Hàng Mới Về<br/>
          <span className="text-primary">Giảm 20% Tuần Này</span>
        </h2>
        <p className="text-white/70 text-sm mb-5 max-w-xs">DND 1200+ màu · Kiara Sky · SNS Dip Powder<br/>Free ship đơn từ $150</p>
        <div className="bg-primary text-white font-bold text-sm px-6 py-2.5">
          bachhoanails.com
        </div>
      </div>
    ),
  },
  {
    id: "ig-post",
    name: "Instagram Post",
    size: "1080 × 1080px",
    ratio: "aspect-square",
    content: (
      <div className="w-full h-full bg-gradient-to-br from-[#E91E8C] to-[#C2157A] flex flex-col items-center justify-center p-8 text-center">
        <div className="text-white text-5xl mb-4">✨</div>
        <h2 className="font-heading text-white text-3xl font-bold mb-2 leading-tight">
          Mua Sỉ<br/>Tiết Kiệm Hơn
        </h2>
        <div className="w-12 h-0.5 bg-white/50 mx-auto my-3" />
        <p className="text-white/90 text-sm mb-1">Từ 10 sản phẩm → giảm 15%</p>
        <p className="text-white/90 text-sm mb-6">Từ 20 sản phẩm → giảm 25%</p>
        <p className="text-white font-bold text-xs uppercase tracking-widest">
          @bachhoanails
        </p>
      </div>
    ),
  },
  {
    id: "ig-story",
    name: "Instagram Story",
    size: "1080 × 1920px",
    ratio: "aspect-[9/16]",
    content: (
      <div className="w-full h-full bg-gradient-to-b from-[#1A1A2E] via-[#2d1b4e] to-[#1A1A2E] flex flex-col items-center justify-center p-6 text-center">
        <p className="text-primary text-xs uppercase tracking-widest mb-6 font-body">LIMITED TIME</p>
        <div className="text-5xl mb-4">🌸</div>
        <h2 className="font-heading text-white text-2xl font-bold mb-2 leading-tight">
          Spring Bundle<br/>
          <span className="text-primary">–35%</span>
        </h2>
        <p className="text-white/70 text-xs mb-8 max-w-[180px]">Kiara Sky · DND · Notpolish<br/>Mua bộ rẻ hơn mua lẻ</p>
        <div className="border-2 border-primary text-primary font-bold text-xs px-5 py-2 mb-8">
          XEM NGAY ↑
        </div>
        <p className="text-white/40 text-[10px]">bachhoanails.com</p>
      </div>
    ),
  },
  {
    id: "promo-banner",
    name: "Web Banner",
    size: "1200 × 300px",
    ratio: "aspect-[4/1]",
    content: (
      <div className="w-full h-full bg-[#1A1A2E] flex items-center justify-between px-8 sm:px-12">
        <div>
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Flash Sale</p>
          <h2 className="font-heading text-white text-xl sm:text-2xl font-bold leading-tight">
            Mua sỉ hôm nay<br className="sm:hidden" /> — Giao ngay mai
          </h2>
          <p className="text-white/60 text-xs mt-1">Free ship đơn từ $150 · Đổi trả 15 ngày</p>
        </div>
        <div className="flex-shrink-0">
          <div className="bg-primary text-white font-bold text-sm px-5 py-2.5 whitespace-nowrap">
            Mua ngay →
          </div>
        </div>
      </div>
    ),
  },
];

const logos = [
  { bg: "bg-white border border-gray-200", textColor: "text-secondary", accentColor: "text-primary", label: "Nền sáng" },
  { bg: "bg-[#1A1A2E]", textColor: "text-white", accentColor: "text-primary", label: "Nền tối" },
  { bg: "bg-primary", textColor: "text-white", accentColor: "text-white", label: "Nền màu" },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="text-[10px] font-mono bg-gray-100 hover:bg-gray-200 px-2 py-0.5 transition-colors text-gray-600"
    >
      {copied ? "✓ Copied" : text}
    </button>
  );
}

export default function BrandKitPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-body">

      {/* Top bar */}
      <div className="bg-[#1A1A2E] text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="text-white/60 text-sm hover:text-white transition-colors">← Quay về trang chủ</a>
          <span className="text-white/40 text-xs">Brand Kit · Bách Hóa Nails · v1.0</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2d1b4e] py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary text-xs font-bold px-3 py-1.5 mb-6">
            BRAND KIT · INTERNAL USE
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Bách Hóa <span className="text-primary">Nails</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Tài liệu thương hiệu · Màu sắc · Font chữ · Template · Giọng văn
          </p>
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {["#Màu Sắc", "#Font Chữ", "#Logo", "#Templates", "#Voice & Tone"].map(tag => (
              <span key={tag} className="text-xs text-white/50 bg-white/10 px-3 py-1">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* ── 1. COLORS ── */}
        <section>
          <SectionTitle number="01" title="Bảng Màu Thương Hiệu" sub="Dùng đúng màu — không tự ý thay đổi" />
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

        {/* ── 2. TYPOGRAPHY ── */}
        <section>
          <SectionTitle number="02" title="Typography — Font Chữ" sub="Playfair Display (tiêu đề) + Inter (nội dung)" />

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 p-6">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Heading Font</p>
              <p className="font-heading text-4xl font-bold text-secondary mb-2">Playfair Display</p>
              <p className="font-heading text-lg text-gray-500 italic mb-4">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-heading text-base text-gray-500">abcdefghijklmnopqrstuvwxyz 0123456789</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">Dùng cho: Tiêu đề section, hero text, brand name</p>
                <p className="text-xs text-gray-400">Google Font: Playfair Display 400–800</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-6">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Body Font</p>
              <p className="font-body text-4xl font-bold text-secondary mb-2">Inter</p>
              <p className="font-body text-lg text-gray-500 mb-4">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-body text-base text-gray-500">abcdefghijklmnopqrstuvwxyz 0123456789</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">Dùng cho: Body text, buttons, labels, captions</p>
                <p className="text-xs text-gray-400">Google Font: Inter 300–700</p>
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

        {/* ── 3. LOGO ── */}
        <section>
          <SectionTitle number="03" title="Logo & Brand Mark — 3D Edition" sub="2 phong cách — chọn 1 làm logo chính thức" />

          {/* STYLE 1: Chrome Luxury */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gray-800 text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest">Style 1</span>
              <h3 className="font-heading font-bold text-xl text-secondary">Chrome Luxury</h3>
              <span className="text-xs text-gray-400">— Kim loại · Cao cấp · Classic</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 flex flex-col items-center justify-center py-10 gap-3">
                <LogoChrome size={200}/>
                <p className="text-[11px] text-gray-400">Nền trắng</p>
              </div>
              <div className="bg-[#1A1A2E] flex flex-col items-center justify-center py-10 gap-3">
                <LogoChrome size={200}/>
                <p className="text-[11px] text-white/40">Nền tối</p>
              </div>
              <div className="bg-gray-100 border border-gray-200 flex flex-col items-center justify-center py-10 gap-3">
                <LogoChrome size={120}/>
                <LogoChrome size={60}/>
                <p className="text-[11px] text-gray-400">Scale test</p>
              </div>
            </div>
            <div className="mt-3 bg-gray-50 border border-gray-200 px-4 py-3 text-xs text-gray-500">
              <strong>Phù hợp với:</strong> Website header, email signature, packaging, print, business card. Sang trọng như thương hiệu nails cao cấp.
            </div>
          </div>

          {/* STYLE 2: Neon Crystal */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest">Style 2</span>
              <h3 className="font-heading font-bold text-xl text-secondary">Neon Crystal</h3>
              <span className="text-xs text-gray-400">— Phát sáng · Hiện đại · Social Media</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-[#050508] flex flex-col items-center justify-center py-10 gap-3">
                <LogoNeon size={200}/>
                <p className="text-[11px] text-white/30">Nền tối (best)</p>
              </div>
              <div className="bg-white border border-gray-200 flex flex-col items-center justify-center py-10 gap-3">
                <LogoNeon size={200}/>
                <p className="text-[11px] text-gray-400">Nền trắng</p>
              </div>
              <div className="bg-[#0E0E1C] flex flex-col items-center justify-center py-10 gap-3">
                <LogoNeon size={120}/>
                <LogoNeon size={60}/>
                <p className="text-[11px] text-white/30">Scale test</p>
              </div>
            </div>
            <div className="mt-3 bg-[#0A0A15] border border-pink-900/40 px-4 py-3 text-xs text-pink-300/70">
              <strong className="text-pink-300">Phù hợp với:</strong> Facebook, Instagram, TikTok thumbnail, YouTube banner, story highlight cover. Eye-catching trên social media.
            </div>
          </div>

          {/* Side by side comparison */}
          <div className="bg-white border border-gray-200 overflow-hidden mb-6">
            <div className="bg-gray-50 px-4 py-2 border-b border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-widest">So sánh 2 style</p>
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-100">
              {[
                { label: "Chrome Luxury", feel: "Sang trọng, bền vững", best: "Print, Website, Business", tone: "Luxury nail supply", comp: "<LogoChrome/>", bg: "bg-white" },
                { label: "Neon Crystal", feel: "Hiện đại, nổi bật", best: "Social Media, Digital", tone: "Trendy nail brand", comp: "<LogoNeon/>", bg: "bg-[#050508]" },
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
            <strong>Gợi ý:</strong> Dùng <strong>Chrome Luxury</strong> làm logo chính thức trên website + business card. Dùng <strong>Neon Crystal</strong> cho social media posts, story highlight, và thumbnail YouTube/TikTok.
          </div>

          {/* Official logo */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest">Official</span>
              <h3 className="font-heading font-bold text-xl text-secondary">Logo Chính Thức</h3>
              <span className="text-xs text-gray-400">— AI-generated 3D · Đã dùng trên website</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 flex flex-col items-center justify-center py-8 gap-3">
                <img src="/logo-main.png" alt="BachHoa Nails Official Logo" className="h-40 w-auto object-contain"/>
                <p className="text-[11px] text-gray-400">Nền trắng</p>
              </div>
              <div className="bg-[#1a1a1a] flex flex-col items-center justify-center py-8 gap-3">
                <img src="/logo-main.png" alt="BachHoa Nails Official Logo" className="h-40 w-auto object-contain"/>
                <p className="text-[11px] text-white/40">Nền tối (Header)</p>
              </div>
              <div className="bg-gray-100 border border-gray-200 flex flex-col items-center justify-center py-8 gap-3">
                <img src="/logo-main.png" alt="BachHoa Nails small" className="h-14 w-auto object-contain"/>
                <img src="/logo-main.png" alt="BachHoa Nails tiny" className="h-8 w-auto object-contain"/>
                <p className="text-[11px] text-gray-400">Scale: 56px + 32px</p>
              </div>
            </div>
            <div className="mt-3 bg-green-50 border border-green-200 px-4 py-3 text-xs text-green-800">
              <strong>Đang dùng:</strong> Logo này đã được tích hợp vào Header và Footer của website. File: <code className="bg-green-100 px-1 font-mono">public/logo-main.png</code>
            </div>
          </div>
        </section>

        {/* ── 4. UI COMPONENTS ── */}
        <section>
          <SectionTitle number="04" title="UI Components" sub="Buttons, badges, inputs — style chuẩn" />
          <div className="bg-white border border-gray-200 p-6 space-y-8">

            {/* Buttons */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Buttons</p>
              <div className="flex flex-wrap gap-3 items-center">
                <button className="bg-primary text-white font-bold text-sm px-6 py-2.5 hover:bg-[#C2157A] transition-colors">Mua ngay</button>
                <button className="border-2 border-secondary text-secondary font-bold text-sm px-6 py-2.5 hover:bg-secondary hover:text-white transition-all">Xem thêm</button>
                <button className="border border-gray-300 text-secondary text-sm font-semibold px-6 py-2.5 hover:border-secondary transition-all">Secondary</button>
                <button className="bg-[#1A1A2E] text-white font-bold text-sm px-6 py-2.5 hover:bg-[#2d2d4e] transition-colors">Dark CTA</button>
                <button className="bg-green-600 text-white font-bold text-sm px-6 py-2.5">✓ Đã thêm</button>
              </div>
            </div>

            {/* Badges */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Badges</p>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1">HOT</span>
                <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1">SALE</span>
                <span className="bg-primary text-white text-xs font-bold px-2.5 py-1">MỚI</span>
                <span className="bg-gray-800 text-white text-xs font-bold px-2.5 py-1">BEST SELLER</span>
                <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1">TOP RATED</span>
                <span className="bg-green-600 text-white text-xs font-bold px-2.5 py-1">Tiết kiệm $47</span>
                <span className="bg-pink-500 text-white text-xs font-bold px-2.5 py-1">YÊU THÍCH</span>
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
                  <span className="text-xs text-gray-400">hoặc</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div className="border-t border-gray-100" />
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. SOCIAL MEDIA TEMPLATES ── */}
        <section>
          <SectionTitle number="05" title="Social Media Templates" sub="Kéo thả vào Canva hoặc dùng làm tham khảo design" />
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
                  Màu nền: #1A1A2E · Primary: #E91E8C · Font: Playfair Display
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. VOICE & TONE ── */}
        <section>
          <SectionTitle number="06" title="Voice & Tone — Giọng Văn" sub="Cách viết copy cho Bách Hóa Nails" />
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-gray-200 p-5">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Chúng ta là ai</p>
              <ul className="space-y-2 text-sm text-secondary">
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">→</span>Người Việt, cho người Việt</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">→</span>Thân thiện như bạn bè, chuyên nghiệp như đối tác</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">→</span>Nói thẳng — giá tốt, hàng chuẩn, giao nhanh</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">→</span>Không hoa mỹ, không sáo rỗng</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">→</span>Dùng tiếng Việt tự nhiên — không dịch từ Anh</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 p-5">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Taglines có thể dùng</p>
              <ul className="space-y-3 text-sm">
                <li className="font-heading font-bold text-secondary">"Hàng nails Mỹ — Giá sỉ tốt nhất"</li>
                <li className="font-heading font-bold text-secondary">"Từ kệ hàng Mỹ đến tay thợ Việt"</li>
                <li className="font-heading font-bold text-secondary">"Chuyên cung cấp cho tiệm nails Việt"</li>
                <li className="font-heading font-bold text-secondary">"Mua sỉ — Tiết kiệm thật sự"</li>
                <li className="font-heading font-bold text-secondary">"1,200+ màu gel · Giao tận nơi"</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-2 border-b border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-widest">Ví dụ — Nên & Không Nên</p>
            </div>
            <div className="divide-y divide-gray-100">
              {voices.map((v) => (
                <div key={v.label} className="grid grid-cols-3 gap-4 px-4 py-3 items-start">
                  <p className="text-xs font-semibold text-secondary">{v.label}</p>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold text-xs mt-0.5 flex-shrink-0">✓</span>
                    <p className="text-xs text-gray-700">{v.do}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold text-xs mt-0.5 flex-shrink-0">✗</span>
                    <p className="text-xs text-gray-400 line-through">{v.dont}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. MARKETING COPY ── */}
        <section>
          <SectionTitle number="07" title="Copy Mẫu — Marketing" sub="Dùng trực tiếp hoặc chỉnh sửa theo tình huống" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { channel: "Facebook Post", text: "🌸 Hàng mới về tuần này!\nDND, Kiara Sky, SNS Dip Powder — 1,200+ màu gel.\nMua 10+ sản phẩm → giảm ngay 15%\nFree ship đơn từ $150 🚚\n👉 bachhoanails.com" },
              { channel: "Announcement Bar", text: "🚚 Free ship đơn từ $150 · Đổi trả 15 ngày · Giao 2–5 ngày" },
              { channel: "Product Badge", text: "HOT · MỚI · SALE · BEST SELLER · TOP RATED · YÊU THÍCH" },
              { channel: "Hero Heading", text: "Giá sỉ tốt nhất\ncho tiệm nails Việt" },
              { channel: "Email Subject", text: "🌸 [BÁO GIÁ SỈ] DND tháng này giảm 20% — xem ngay" },
              { channel: "WhatsApp/SMS", text: "Chào chị! Em bên Bách Hóa Nails. Tuần này DND về hàng mới, giảm 20%. Chị cần số lượng bao nhiêu ạ? 😊" },
            ].map((item) => (
              <div key={item.channel} className="bg-white border border-gray-200 p-4">
                <p className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-2">{item.channel}</p>
                <p className="text-xs text-gray-700 whitespace-pre-line leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 8. FILE FORMATS ── */}
        <section>
          <SectionTitle number="08" title="Kích Thước Chuẩn" sub="Tham khảo khi thiết kế" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name: "Facebook Post", size: "1200 × 630px", ratio: "1.91:1" },
              { name: "Facebook Story", size: "1080 × 1920px", ratio: "9:16" },
              { name: "Instagram Post", size: "1080 × 1080px", ratio: "1:1" },
              { name: "Instagram Story", size: "1080 × 1920px", ratio: "9:16" },
              { name: "Instagram Reel Cover", size: "1080 × 1920px", ratio: "9:16" },
              { name: "TikTok Video", size: "1080 × 1920px", ratio: "9:16" },
              { name: "Web Banner (Full)", size: "1200 × 300px", ratio: "4:1" },
              { name: "Web Banner (Half)", size: "600 × 300px", ratio: "2:1" },
              { name: "Email Header", size: "600 × 200px", ratio: "3:1" },
              { name: "Logo (Square)", size: "500 × 500px", ratio: "1:1" },
              { name: "Logo (Wide)", size: "500 × 200px", ratio: "5:2" },
              { name: "Favicon", size: "32 × 32px", ratio: "1:1" },
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
        Brand Kit · Bách Hóa Nails · bachhoanails.com · Cập nhật: 2025 · Dành cho nội bộ
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
