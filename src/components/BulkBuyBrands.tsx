"use client";

const brands = [
  { name: "OPI", emoji: "🌈", tagline: "Thương hiệu #1 thế giới", products: "800+ sản phẩm", minOrder: "Sỉ từ 6 cái", discount: "–20%", colorClass: "border-red-200 hover:border-red-400", discountClass: "bg-red-500", btnClass: "border-red-400 text-red-600 hover:bg-red-500 hover:text-white" },
  { name: "Kiara Sky", emoji: "💅", tagline: "Gel chuyên nghiệp cao cấp", products: "600+ màu gel", minOrder: "Sỉ từ 10 cái", discount: "–25%", colorClass: "border-purple-200 hover:border-purple-400", discountClass: "bg-purple-500", btnClass: "border-purple-400 text-purple-600 hover:bg-purple-500 hover:text-white" },
  { name: "DND Gel", emoji: "✨", tagline: "Giá tốt — 1,200+ màu", products: "1,200+ màu", minOrder: "Sỉ từ 12 cái", discount: "–30%", colorClass: "border-pink-200 hover:border-pink-400", discountClass: "bg-pink-500", btnClass: "border-pink-400 text-pink-600 hover:bg-pink-500 hover:text-white" },
  { name: "SNS Nails", emoji: "💎", tagline: "Dip powder hàng đầu", products: "300+ màu dip", minOrder: "Sỉ từ 8 cái", discount: "–22%", colorClass: "border-blue-200 hover:border-blue-400", discountClass: "bg-blue-500", btnClass: "border-blue-400 text-blue-600 hover:bg-blue-500 hover:text-white" },
  { name: "Gelish", emoji: "🌸", tagline: "Gel soak-off bền màu", products: "500+ màu", minOrder: "Sỉ từ 10 cái", discount: "–20%", colorClass: "border-rose-200 hover:border-rose-400", discountClass: "bg-rose-500", btnClass: "border-rose-400 text-rose-600 hover:bg-rose-500 hover:text-white" },
  { name: "iGel Beauty", emoji: "⚡", tagline: "Dip, gel, poly — đa dạng", products: "900+ sản phẩm", minOrder: "Sỉ từ 10 cái", discount: "–25%", colorClass: "border-amber-200 hover:border-amber-400", discountClass: "bg-amber-500", btnClass: "border-amber-400 text-amber-600 hover:bg-amber-500 hover:text-white" },
];

export default function BulkBuyBrands() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-1">🛒 Mua Sỉ</p>
            <h2 className="section-title">Bulk Buy | Giảm giá theo thương hiệu</h2>
            <p className="text-muted text-sm mt-1">Chọn thương hiệu, mua đủ số lượng — giảm giá tự động</p>
          </div>
          <button className="hidden md:flex text-primary font-medium text-sm hover:underline items-center gap-1 group">
            Tất cả thương hiệu
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {brands.map((brand) => (
            <div key={brand.name} className={`bg-white rounded-2xl border-2 p-5 card-hover group cursor-pointer transition-colors ${brand.colorClass}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-3xl block mb-2 transition-transform duration-300 group-hover:scale-110">{brand.emoji}</span>
                  <h3 className="font-heading font-bold text-secondary text-lg leading-none">{brand.name}</h3>
                  <p className="text-muted text-xs mt-1">{brand.tagline}</p>
                </div>
                <span className={`text-white text-sm font-bold px-3 py-1 rounded-full ${brand.discountClass}`}>{brand.discount}</span>
              </div>

              <div className="space-y-1.5 mb-4 text-sm text-secondary">
                <div className="flex items-center gap-2"><span className="text-muted text-base">📦</span>{brand.products}</div>
                <div className="flex items-center gap-2"><span className="text-muted text-base">🏷️</span>{brand.minOrder}</div>
              </div>

              <button className={`w-full text-sm font-semibold py-2.5 rounded-full border-2 transition-all ${brand.btnClass}`}>
                Mua sỉ {brand.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
