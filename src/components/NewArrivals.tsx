"use client";

const brands = [
  {
    name: "DND Collections",
    sub: "1,200+ màu gel & dip",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    discount: "–30%",
  },
  {
    name: "Kiara Sky",
    sub: "600+ gel màu cao cấp",
    image: "https://images.unsplash.com/photo-1604654895135-2698c5781a0f?w=600&q=80",
    discount: "–25%",
  },
  {
    name: "Notpolish",
    sub: "Jelly & gel trending 2025",
    image: "https://images.unsplash.com/photo-1604654894649-7b9ffca36a70?w=600&q=80",
    discount: "–20%",
  },
  {
    name: "iGel Beauty",
    sub: "Dip, gel, poly — đa dạng",
    image: "https://images.unsplash.com/photo-1604654894775-9ba69b39e59b?w=600&q=80",
    discount: "–25%",
  },
  {
    name: "SNS Nails",
    sub: "Dip powder chuyên nghiệp",
    image: "https://images.unsplash.com/photo-1604654894854-d0e3b8a9d5bc?w=600&q=80",
    discount: "–22%",
  },
];

export default function NewArrivals() {
  return (
    <section className="py-10 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — căn giữa */}
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-secondary tracking-tight">
            Mua Sỉ — Tiết Kiệm Hơn
          </h2>
          <p className="text-muted text-sm mt-2">Chọn thương hiệu, mua đủ số lượng — giảm giá tự động</p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-3" />
        </div>

        {/* 5 brand cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {brands.map((brand, i) => (
            <div key={i} className="relative overflow-hidden group cursor-pointer aspect-[3/4]">
              {/* Background image */}
              <img src={brand.image} alt={brand.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy" />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Discount badge */}
              <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1">
                {brand.discount}
              </div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <h3 className="font-heading font-bold text-white text-sm sm:text-base leading-tight mb-0.5">
                  {brand.name}
                </h3>
                <p className="text-white/70 text-xs mb-3 hidden sm:block">{brand.sub}</p>
                <button className="w-full bg-white text-secondary text-xs sm:text-sm font-semibold py-2 hover:bg-gray-100 transition-colors">
                  Mua sỉ ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
