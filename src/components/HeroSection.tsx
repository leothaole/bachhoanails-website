"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    label: "OPI Summer 2025",
    heading: "OPI Summer 2025\nCollection mới về",
    sub: "18 màu gel rực rỡ — số lượng có hạn",
    cta: "Mua ngay",
    bg: "#3B1F0A",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1400&q=85",
  },
  {
    label: "Spring Bundles",
    heading: "Spring Bundles\nTiết kiệm đến 35%",
    sub: "Kiara Sky, DND, SNS — mua theo bộ rẻ hơn",
    cta: "Xem Bundles",
    bg: "#1A0A1E",
    image: "https://images.unsplash.com/photo-1604654895135-2698c5781a0f?w=1400&q=85",
  },
  {
    label: "Mua Sỉ",
    heading: "Giá sỉ tốt nhất\ncho tiệm nails Việt",
    sub: "Từ 10 sản phẩm — giảm tự động 15% · Free ship $150+",
    cta: "Mua sỉ ngay",
    bg: "#0A1A1E",
    image: "https://images.unsplash.com/photo-1604654894649-7b9ffca36a70?w=1400&q=85",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const s = slides[active];

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "clamp(320px, 55vw, 600px)" }}>
      {/* Background image */}
      {slides.map((slide, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === active ? 1 : 0 }}>
          <img src={slide.image} alt={slide.label}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${slide.bg}ee 40%, ${slide.bg}55 70%, transparent 100%)` }} />
        </div>
      ))}

      {/* Text content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="max-w-lg">
            <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-wider">
              {s.label}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-4 whitespace-pre-line">
              {s.heading}
            </h1>
            <p className="text-white/75 text-sm sm:text-base mb-6 leading-relaxed">{s.sub}</p>
            <button className="bg-white text-secondary font-bold px-7 py-3 rounded hover:bg-gray-100 transition-all text-sm sm:text-base shadow-lg">
              {s.cta} →
            </button>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === active ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`} />
        ))}
      </div>
    </div>
  );
}
