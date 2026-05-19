"use client";

import { useState } from "react";
import { Stars } from "./ProductGrid";

const bundles = [
  { id: 1, brand: "Kiara Sky", name: "Kiara Sky Summer Bundle", pieces: "12 sản phẩm", salePrice: "$98.00", originalPrice: "$145.00", savings: "$47", rating: 4.9, reviews: 234, badge: "HOT", color: "from-amber-100 to-orange-200", emoji: "☀️" },
  { id: 2, brand: "DND", name: "DND Spring Pastel Bundle", pieces: "8 sản phẩm", salePrice: "$68.00", originalPrice: "$95.00", savings: "$27", rating: 4.8, reviews: 189, badge: "SALE", color: "from-rose-100 to-pink-200", emoji: "🌸" },
  { id: 3, brand: "Notpolish", name: "Notpolish Pro Collection", pieces: "10 sản phẩm", salePrice: "$84.00", originalPrice: "$120.00", savings: "$36", rating: 4.7, reviews: 156, badge: "MỚI", color: "from-violet-100 to-purple-200", emoji: "💎" },
  { id: 4, brand: "SNS Nails", name: "SNS Dip Powder Pro Set", pieces: "6 sản phẩm", salePrice: "$58.00", originalPrice: "$82.00", savings: "$24", rating: 4.8, reviews: 112, badge: null, color: "from-blue-100 to-cyan-200", emoji: "✨" },
];

export default function SeasonalBundles() {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title — căn giữa */}
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-secondary tracking-tight">
            🌸 Combo Tiết Kiệm
          </h2>
          <p className="text-muted text-sm mt-2">Mua theo bộ — tiết kiệm hơn đến 35%</p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {bundles.map((b) => <BundleCard key={b.id} bundle={b} />)}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center gap-2 border border-secondary text-secondary text-sm font-semibold px-8 py-3 hover:bg-secondary hover:text-white transition-all duration-200">
            Xem tất cả combo →
          </a>
        </div>
      </div>
    </section>
  );
}

function BundleCard({ bundle }: { bundle: typeof bundles[0] }) {
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const badgeColors: Record<string, string> = {
    HOT: "bg-red-600", SALE: "bg-red-500", MỚI: "bg-primary",
  };

  return (
    <div className="bg-white border border-gray-200 flex flex-col group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>

      {/* Image area */}
      <div className="relative overflow-hidden aspect-square">
        <div className={`w-full h-full bg-gradient-to-br ${bundle.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
          <span className="text-7xl">{bundle.emoji}</span>
        </div>

        {bundle.badge && (
          <span className={`absolute top-2 left-2 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 z-10 ${badgeColors[bundle.badge]}`}>
            {bundle.badge}
          </span>
        )}
        <span className="absolute top-2 right-2 bg-green-600 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 z-10">
          Tiết kiệm {bundle.savings}
        </span>

        {/* Hover layer */}
        <div className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 z-20 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <button onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1800); }}
            className={`w-[80%] text-xs sm:text-sm font-bold py-2.5 transition-all duration-200 shadow-lg ${
              added ? "bg-green-500 text-white" : "bg-white text-secondary hover:bg-primary hover:text-white"
            }`}>
            {added ? "✓ Đã thêm" : "Thêm vào giỏ"}
          </button>
          <button className="w-[80%] text-xs sm:text-sm font-semibold py-2.5 border-2 border-white text-white hover:bg-white hover:text-secondary transition-all duration-200">
            Xem chi tiết
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col flex-1">
        <p className="text-[11px] text-gray-400 mb-0.5 font-medium uppercase tracking-wide">{bundle.brand}</p>
        <p className="text-xs sm:text-sm font-medium text-secondary mb-1 line-clamp-2 leading-snug flex-1">{bundle.name}</p>
        <p className="text-xs text-gray-400 mb-2">{bundle.pieces}</p>

        <div className="flex items-center gap-1 mb-2">
          <Stars rating={bundle.rating} />
          <span className="text-xs text-gray-400">({bundle.reviews})</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="font-bold text-sm sm:text-base text-secondary">{bundle.salePrice}</span>
          <span className="text-xs text-gray-400 line-through">{bundle.originalPrice}</span>
        </div>
      </div>
    </div>
  );
}
