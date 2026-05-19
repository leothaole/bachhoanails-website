"use client";

import { useState } from "react";
import { allProductsCatalog } from "@/data/products";
import { ProductCard } from "./ProductGrid";

const filters = ["Tất cả", "Gel màu", "Powder & Dip", "Dụng cụ", "Đèn UV/LED", "Trang trí", "Chăm sóc da", "Móng giả", "Vệ sinh"];

export default function AllProducts() {
  const [activeFilter, setActiveFilter] = useState("Tất cả");
  const [visibleCount, setVisibleCount] = useState(4);

  const filtered = activeFilter === "Tất cả"
    ? allProductsCatalog
    : allProductsCatalog.filter((p) => p.category === activeFilter);
  const visible = filtered.slice(0, visibleCount);

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title — căn giữa */}
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-secondary tracking-tight">
            Tất Cả Sản Phẩm
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-3" />
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-1 justify-start md:justify-center">
          {filters.map((f) => (
            <button key={f} onClick={() => { setActiveFilter(f); setVisibleCount(4); }}
              className={`flex-shrink-0 px-4 py-2 text-xs sm:text-sm font-medium transition-all border whitespace-nowrap min-h-[36px] ${
                activeFilter === f
                  ? "bg-secondary text-white border-secondary"
                  : "bg-white text-secondary border-gray-200 hover:border-gray-400"
              }`}>
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {visible.map((p, i) => (
            <ProductCard key={p.id} product={p} colorIndex={i + 4} />
          ))}
        </div>

        {/* Show more / see all */}
        <div className="text-center mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          {visibleCount < filtered.length && (
            <button onClick={() => setVisibleCount((v) => v + 4)}
              className="border border-gray-300 text-secondary text-sm font-semibold px-8 py-3 hover:border-secondary transition-all duration-200">
              + Xem thêm {Math.min(4, filtered.length - visibleCount)} sản phẩm
            </button>
          )}
          <a href="#" className="inline-flex items-center justify-center gap-2 border border-secondary text-secondary text-sm font-semibold px-8 py-3 hover:bg-secondary hover:text-white transition-all duration-200">
            Xem toàn bộ danh mục →
          </a>
        </div>
      </div>
    </section>
  );
}
