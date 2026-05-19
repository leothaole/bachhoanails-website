"use client";

import { useState, useRef } from "react";
import { allProductsCatalog } from "@/data/products";
import { ProductCard } from "./ProductGrid";

const categories = [
  { icon: "🌈", label: "Gel màu",             key: "Gel màu" },
  { icon: "💎", label: "Powder & Dip",         key: "Powder & Dip" },
  { icon: "🔧", label: "Dụng cụ",              key: "Dụng cụ" },
  { icon: "💡", label: "Đèn UV/LED",           key: "Đèn UV/LED" },
  { icon: "✨", label: "Trang trí",             key: "Trang trí" },
  { icon: "🧴", label: "Chăm sóc da",          key: "Chăm sóc da" },
  { icon: "🪄", label: "Nail art",              key: "Nail art" },
  { icon: "🩰", label: "Móng giả",              key: "Móng giả" },
  { icon: "🧹", label: "Vệ sinh & Khử trùng",  key: "Vệ sinh" },
  { icon: "📦", label: "Combo tiết kiệm",      key: "Combo" },
  { icon: "🛒", label: "Mua Sỉ",               key: "Mua Sỉ" },
];

const bulkBrands = [
  { name: "OPI",         emoji: "🌈", products: "800+",   minOrder: "Sỉ từ 6 cái",  discount: "–20%", disc: "bg-red-500",    btn: "border-red-400 text-red-600 hover:bg-red-500 hover:text-white",        tagline: "Thương hiệu #1 thế giới" },
  { name: "Kiara Sky",   emoji: "💅", products: "600+",   minOrder: "Sỉ từ 10 cái", discount: "–25%", disc: "bg-purple-500", btn: "border-purple-400 text-purple-600 hover:bg-purple-500 hover:text-white",  tagline: "Gel chuyên nghiệp" },
  { name: "DND Gel",     emoji: "✨", products: "1,200+", minOrder: "Sỉ từ 12 cái", discount: "–30%", disc: "bg-pink-500",   btn: "border-pink-400 text-pink-600 hover:bg-pink-500 hover:text-white",      tagline: "Giá tốt — 1,200+ màu" },
  { name: "SNS Nails",   emoji: "💎", products: "300+",   minOrder: "Sỉ từ 8 cái",  discount: "–22%", disc: "bg-blue-500",   btn: "border-blue-400 text-blue-600 hover:bg-blue-500 hover:text-white",      tagline: "Dip powder hàng đầu" },
  { name: "Gelish",      emoji: "🌸", products: "500+",   minOrder: "Sỉ từ 10 cái", discount: "–20%", disc: "bg-rose-500",   btn: "border-rose-400 text-rose-600 hover:bg-rose-500 hover:text-white",      tagline: "Gel soak-off bền màu" },
  { name: "iGel Beauty", emoji: "⚡", products: "900+",   minOrder: "Sỉ từ 10 cái", discount: "–25%", disc: "bg-amber-500",  btn: "border-amber-400 text-amber-600 hover:bg-amber-500 hover:text-white",   tagline: "Dip, gel, poly — đa dạng" },
];

export default function CategoryTabs() {
  const [active, setActive] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") =>
    scrollRef.current?.scrollBy({ left: dir === "left" ? -180 : 180, behavior: "smooth" });

  const currentCat = active !== null ? categories[active] : null;
  const filteredProducts = currentCat && currentCat.key !== "Mua Sỉ" && currentCat.key !== "Combo"
    ? allProductsCatalog.filter((p) => p.category === currentCat.key)
    : [];

  return (
    <>
      {/* Sticky tab bar — offset = header 60px + nav 44px = 104px desktop, 64px mobile */}
      <div className="bg-white border-b border-gray-200 sticky top-16 md:top-[104px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 relative">
          <button onClick={() => scroll("left")} aria-label="Cuộn trái"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white shadow-md border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div ref={scrollRef} className="flex gap-2 overflow-x-auto no-scrollbar px-10">
            {categories.map((cat, i) => (
              <button key={i} onClick={() => setActive(active === i ? null : i)}
                aria-expanded={active === i}
                className={`flex items-center gap-1.5 flex-shrink-0 px-3 sm:px-4 py-2 border text-xs sm:text-sm font-medium transition-all duration-150 whitespace-nowrap rounded min-h-[40px] ${
                  active === i
                    ? "bg-secondary text-white border-secondary"
                    : "bg-white text-secondary border-gray-200 hover:border-gray-400"
                }`}>
                <span className="text-sm" aria-hidden>{cat.icon}</span>
                {cat.label}
                {active === i && (
                  <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          <button onClick={() => scroll("right")} aria-label="Cuộn phải"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white shadow-md border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Product panel */}
      {active !== null && (
        <div className="bg-white border-b border-gray-100 shadow-md animate-slide-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-secondary text-lg">
                {currentCat!.icon} {currentCat!.label}
                {filteredProducts.length > 0 && (
                  <span className="ml-2 text-sm font-normal text-muted">({filteredProducts.length} sản phẩm)</span>
                )}
              </h3>
              <button onClick={() => setActive(null)} aria-label="Đóng"
                className="w-9 h-9 flex items-center justify-center text-muted hover:text-secondary rounded-full hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {filteredProducts.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 max-h-[65vh] overflow-y-auto pr-1">
                {filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            )}

            {currentCat?.key === "Mua Sỉ" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[65vh] overflow-y-auto">
                {bulkBrands.map((brand) => (
                  <div key={brand.name} className="border border-gray-200 rounded-lg p-4 hover:border-primary hover:shadow-md transition-all group cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-2xl block mb-1.5 group-hover:scale-110 transition-transform">{brand.emoji}</span>
                        <h4 className="font-bold text-secondary text-base">{brand.name}</h4>
                        <p className="text-muted text-xs">{brand.tagline}</p>
                      </div>
                      <span className={`text-white text-xs font-bold px-2.5 py-1 rounded ${brand.disc}`}>{brand.discount}</span>
                    </div>
                    <div className="text-sm text-secondary space-y-1 mb-3">
                      <div>📦 {brand.products} sản phẩm</div>
                      <div>🏷️ {brand.minOrder}</div>
                    </div>
                    <button className={`w-full text-sm font-semibold py-2.5 rounded border-2 transition-all min-h-[44px] ${brand.btn}`}>
                      Mua sỉ {brand.name}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {currentCat?.key === "Combo" && (
              <div className="text-center py-8">
                <p className="text-muted text-sm">Xem Combo Tiết Kiệm bên dưới trang chính</p>
                <button onClick={() => setActive(null)} className="mt-3 text-primary text-sm hover:underline">Đóng</button>
              </div>
            )}

            {filteredProducts.length === 0 && currentCat?.key !== "Mua Sỉ" && currentCat?.key !== "Combo" && (
              <div className="text-center py-10 text-muted">
                <p className="text-4xl mb-3">🔜</p>
                <p className="text-sm">Sản phẩm đang cập nhật — sớm ra mắt!</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
