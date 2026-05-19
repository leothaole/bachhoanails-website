"use client";

import { useState } from "react";
import { bestSellers, type Product } from "@/data/products";

// Màu gradient cho từng sản phẩm khi chưa có ảnh thực
const placeholderColors = [
  "from-rose-200 to-pink-300",
  "from-purple-200 to-violet-300",
  "from-blue-200 to-cyan-300",
  "from-amber-200 to-orange-300",
  "from-emerald-200 to-teal-300",
  "from-red-200 to-rose-300",
  "from-indigo-200 to-purple-300",
  "from-yellow-200 to-amber-300",
];

export default function ProductGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title — căn giữa */}
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-secondary tracking-tight">
            Bán Chạy Nhất
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {bestSellers.slice(0, 4).map((p, i) => (
            <ProductCard key={p.id} product={p} colorIndex={i} />
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center gap-2 border border-secondary text-secondary text-sm font-semibold px-8 py-3 hover:bg-secondary hover:text-white transition-all duration-200">
            Xem tất cả hàng bán chạy →
          </a>
        </div>
      </div>
    </section>
  );
}

export function ProductCard({ product, colorIndex = 0 }: { product: Product; colorIndex?: number }) {
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const badgeColors: Record<string, string> = {
    "HOT": "bg-red-600", "SALE": "bg-red-500", "MỚI": "bg-primary",
    "BEST SELLER": "bg-gray-800", "TOP RATED": "bg-blue-600",
    "YÊU THÍCH": "bg-pink-500", "BEST": "bg-blue-500",
  };

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="bg-white border border-gray-200 flex flex-col group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>

      {/* Image + hover layer */}
      <div className="relative overflow-hidden aspect-square bg-gray-100">
        {/* Gradient fallback */}
        <div className={`absolute inset-0 bg-gradient-to-br ${placeholderColors[colorIndex % placeholderColors.length]} flex items-center justify-center`}>
          <span className="text-5xl opacity-25">💅</span>
        </div>
        {/* Ảnh thật */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-2 left-2 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 z-10 ${badgeColors[product.badge] ?? "bg-gray-700"}`}>
            {product.badge}
          </span>
        )}

        {/* === HOVER LAYER (giống nailcompany) === */}
        <div className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 z-20 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <button onClick={handleAdd}
            className={`w-[80%] text-xs sm:text-sm font-bold py-2.5 transition-all duration-200 shadow-lg ${
              added ? "bg-green-500 text-white" : "bg-white text-secondary hover:bg-primary hover:text-white"
            }`}>
            {added ? "✓ Đã thêm vào giỏ" : "Thêm vào giỏ"}
          </button>
          <a href={`/products/${product.id}`}
            className="w-[80%] text-xs sm:text-sm font-semibold py-2.5 border-2 border-white text-white hover:bg-white hover:text-secondary transition-all duration-200 flex items-center justify-center">
            Xem chi tiết
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col flex-1">
        <p className="text-[11px] text-gray-400 mb-0.5 font-medium uppercase tracking-wide">{product.brand}</p>
        <p className="text-xs sm:text-sm text-secondary font-medium line-clamp-2 mb-2 leading-snug flex-1">
          {product.title}
        </p>

        <div className="flex items-center gap-1 mb-2">
          <Stars rating={product.rating} />
          <span className="text-xs text-gray-400">({product.reviews.toLocaleString()})</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="font-bold text-sm sm:text-base text-secondary">{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-3 h-3 ${s <= Math.round(rating) ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
