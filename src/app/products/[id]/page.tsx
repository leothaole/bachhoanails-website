"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { bestSellers, allProductsCatalog, type Product } from "@/data/products";
import { ProductCard, Stars } from "@/components/ProductGrid";

const allProducts = [...bestSellers, ...allProductsCatalog];

const mockDescriptions: Record<string, string> = {
  "Gel màu": "Gel màu cao cấp được ưa chuộng tại các tiệm nails chuyên nghiệp trên toàn nước Mỹ. Công thức gel tiên tiến giúp màu lên đều, bóng đẹp và bền màu lên đến 3–4 tuần không bong tróc. Dễ thoa, tự san phẳng và đóng rắn nhanh dưới đèn LED/UV. Phù hợp cho cả thợ mới và thợ chuyên nghiệp.",
  "Đèn UV/LED": "Đèn UV/LED chuyên nghiệp với công nghệ dual-source, đóng rắn gel chỉ trong 30–60 giây. Thiết kế rộng rãi phù hợp cả bàn tay và bàn chân. Cảm biến tự động bật/tắt thông minh, tiết kiệm điện. Phù hợp cho gel màu, gel builder, polygel và sơn shellac.",
  "Dụng cụ": "Dụng cụ chuyên nghiệp được sử dụng rộng rãi tại các salon nails cao cấp. Chất liệu bền, dễ vệ sinh và khử trùng. Thiết kế ergonomic giảm mỏi tay khi làm việc cả ngày. Đáp ứng tiêu chuẩn vệ sinh an toàn của ngành nail tại Mỹ.",
  "Trang trí": "Bộ trang trí nail nghệ thuật với đa dạng màu sắc và kiểu dáng. Chất lượng cao, an toàn cho móng tay và da. Dễ sử dụng, bám dính tốt với gel và acrylic. Phù hợp cho mọi kỹ thuật nail art từ cơ bản đến nâng cao.",
  "Powder & Dip": "Bột dip và acrylic cao cấp với màu sắc phong phú, pigment đậm và mịn. Công thức không mùi, an toàn cho thợ và khách hàng. Bền màu, không giòn, dễ file và shape. Đóng rắn tự nhiên không cần đèn UV.",
  "Chăm sóc da": "Sản phẩm chăm sóc da chuyên dụng cho thợ nails, dưỡng ẩm sâu và phục hồi da tay sau khi tiếp xúc với hóa chất. Công thức nhẹ nhàng, thấm nhanh, không nhờn rít. Hương thơm dễ chịu, phù hợp dùng hàng ngày tại salon.",
  "Móng giả": "Móng giả chất lượng cao với nhiều hình dạng và kích cỡ đa dạng. Dễ cắt, dũa và tạo hình theo ý muốn. Bám dính tốt với keo và gel, bề mặt mịn dễ sơn. Phù hợp cho kỹ thuật full cover, tip overlay và nail extension.",
  "Vệ sinh": "Sản phẩm vệ sinh và khử trùng chuyên nghiệp đạt tiêu chuẩn salon, đảm bảo an toàn cho thợ và khách hàng. Hiệu quả diệt khuẩn cao, an toàn cho dụng cụ kim loại và nhựa. Được sử dụng rộng rãi tại các salon nails, spa và cơ sở y tế.",
};

const mockDetails: Record<string, string[]> = {
  "Gel màu": ["Xuất xứ: USA", "Thể tích: 15ml/lọ", "Công thức: Soak-off gel", "Đóng rắn: LED 30s / UV 60s", "Bảo quản: Tránh ánh nắng trực tiếp"],
  "Đèn UV/LED": ["Công suất: 36W–72W", "Nguồn: Dual LED + UV", "Timer: 10s / 30s / 60s", "Cảm biến: Tự động hồng ngoại", "Điện áp: 110–240V AC"],
  "Dụng cụ": ["Chất liệu: Thép không gỉ / ABS", "Xuất xứ: USA / Đức / Nhật", "Bảo hành: 12 tháng", "Vệ sinh: Autoclave safe", "Khử trùng: Barbicide / UV sterilizer"],
  "Trang trí": ["Kích thước: Đa dạng", "Chất liệu: An toàn cho móng", "Số lượng: Theo bộ", "Bảo quản: Nơi khô ráo thoáng mát", "Sử dụng: Gel / Acrylic / Dip"],
  "Powder & Dip": ["Trọng lượng: Theo bộ", "Công thức: EMA-based", "Thời gian khô: Tự nhiên 2–3 phút", "Bảo quản: Đậy kín sau dùng", "Không cần: Đèn UV/LED"],
  "Chăm sóc da": ["Dung tích: Theo sản phẩm", "Thành phần: Vitamin E, Jojoba Oil", "Hương: Tự nhiên / Không mùi", "Da nhạy cảm: OK", "Paraben free: Có"],
  "Móng giả": ["Chất liệu: ABS plastic cao cấp", "Kích cỡ: 10 size (XS–XL)", "Số lượng: Theo hộp", "Bề mặt: Mịn, dễ sơn", "Tương thích: Keo / Gel / Dip"],
  "Vệ sinh": ["Tiêu chuẩn: EPA registered", "Hiệu quả: Diệt 99.9% vi khuẩn", "An toàn: Dụng cụ kim loại và nhựa", "Pha loãng: Theo hướng dẫn", "Xuất xứ: USA"],
};

function getDetails(category: string): string[] {
  return mockDetails[category] ?? ["Xem thêm thông tin tại bao bì sản phẩm."];
}

function getDescription(product: Product): string {
  return mockDescriptions[product.category] ?? `Sản phẩm chất lượng cao từ thương hiệu ${product.brand}, được tin dùng tại hàng nghìn tiệm nails trên toàn nước Mỹ.`;
}

function getDiscount(price: string, original: string): number {
  const p = parseFloat(price.replace("$", ""));
  const o = parseFloat(original.replace("$", ""));
  return Math.round(((o - p) / o) * 100);
}

const tabs = ["Mô tả sản phẩm", "Thông tin chi tiết", "Đánh giá"];

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const product = allProducts.find((p) => p.id === id);

  const [qty, setQty]         = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [added, setAdded]     = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(product?.colors?.[0] ?? null);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-secondary">
        <p className="text-2xl font-bold">Sản phẩm không tồn tại</p>
        <a href="/" className="text-primary underline text-sm">← Về trang chủ</a>
      </div>
    );
  }

  const discount = product.originalPrice ? getDiscount(product.price, product.originalPrice) : null;
  const related = allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
            <a href="/" className="hover:text-primary transition-colors">Trang chủ</a>
            <span>/</span>
            <a href="#" className="hover:text-primary transition-colors">{product.category}</a>
            <span>/</span>
            <span className="text-secondary line-clamp-1">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">

          {/* ── Image ── */}
          <div className="flex flex-col gap-3">
            <div className="relative aspect-square bg-gray-100 overflow-hidden rounded">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {discount && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1">
                  -{discount}%
                </span>
              )}
              {product.badge && !discount && (
                <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2.5 py-1">
                  {product.badge}
                </span>
              )}
            </div>
            {/* Thumbnails — hiển thị 3 thumbnail dùng cùng ảnh làm demo */}
            <div className="flex gap-2">
              {[product.image, product.image, product.image].map((src, i) => (
                <div key={i} className="w-20 h-20 border-2 border-primary rounded overflow-hidden cursor-pointer flex-shrink-0">
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* ── Info ── */}
          <div className="flex flex-col gap-4">
            {/* Brand + badge */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{product.brand}</span>
              {product.badge && (
                <span className="text-[10px] font-bold px-2 py-0.5 bg-primary text-white">{product.badge}</span>
              )}
            </div>

            {/* Title */}
            <h1 className="font-heading text-xl sm:text-2xl font-bold text-secondary leading-snug">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <Stars rating={product.rating} />
              <span className="text-sm font-semibold text-secondary">{product.rating}</span>
              <span className="text-sm text-gray-400">({product.reviews.toLocaleString()} đánh giá)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 pt-1">
              <span className="text-2xl sm:text-3xl font-bold text-secondary">{product.price}</span>
              <span className="text-sm text-gray-400">{product.unit}</span>
              {product.originalPrice && (
                <>
                  <span className="text-base text-gray-400 line-through">{product.originalPrice}</span>
                  {discount && (
                    <span className="text-sm font-bold text-red-500">-{discount}%</span>
                  )}
                </>
              )}
            </div>

            <div className="border-t border-gray-100" />

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-secondary">
                  Màu sắc: <span className="font-normal text-gray-500">{selectedColor}</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      title={c}
                      className={`w-8 h-8 rounded-full border-2 transition-all duration-150 ${
                        selectedColor === c ? "border-secondary scale-110 shadow-md" : "border-gray-300 hover:border-gray-500"
                      }`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold text-secondary">Số lượng</p>
              <div className="flex items-center border border-gray-300 w-fit">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-secondary hover:bg-gray-100 text-lg font-bold transition-colors">
                  −
                </button>
                <span className="w-12 text-center text-sm font-semibold text-secondary">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-secondary hover:bg-gray-100 text-lg font-bold transition-colors">
                  +
                </button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                onClick={handleAdd}
                className={`flex-1 py-3.5 text-sm font-bold transition-all duration-200 ${
                  added
                    ? "bg-green-500 text-white"
                    : "bg-secondary text-white hover:bg-secondary/90"
                }`}>
                {added ? "✓ Đã thêm vào giỏ hàng" : "Thêm vào giỏ hàng"}
              </button>
              <button className="flex-1 py-3.5 text-sm font-bold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#F5831F" }}>
                Mua ngay
              </button>
            </div>

            {/* Quick info */}
            <div className="grid grid-cols-1 gap-2 pt-1">
              {[
                { icon: "🚚", text: "Free ship đơn từ $150" },
                { icon: "🔄", text: "Đổi trả trong 30 ngày" },
                { icon: "✅", text: "Hàng chính hãng 100%" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="mt-12 md:mt-16">
          <div className="border-b border-gray-200 flex gap-0">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-3 text-sm font-semibold border-b-2 transition-colors -mb-px ${
                  activeTab === i
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-secondary hover:border-gray-300"
                }`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="py-6">
            {activeTab === 0 && (
              <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                {getDescription(product)}
              </p>
            )}
            {activeTab === 1 && (
              <ul className="space-y-2 max-w-md">
                {getDetails(product.category).map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-primary mt-0.5">›</span>
                    {detail}
                  </li>
                ))}
              </ul>
            )}
            {activeTab === 2 && (
              <div className="flex flex-col gap-4 max-w-xl">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-secondary">{product.rating}</span>
                  <div>
                    <Stars rating={product.rating} />
                    <p className="text-sm text-gray-400 mt-1">{product.reviews.toLocaleString()} đánh giá</p>
                  </div>
                </div>
                {/* Mock reviews */}
                {[
                  { name: "Thủy N.", text: "Hàng đúng như mô tả, chất lượng tốt! Sẽ mua lại.", stars: 5 },
                  { name: "Lan H.", text: "Giao hàng nhanh, đóng gói cẩn thận. Sản phẩm rất ưng ý.", stars: 5 },
                  { name: "Mai T.", text: "Dùng được rồi nhưng cần xem thêm thời gian.", stars: 4 },
                ].map((r) => (
                  <div key={r.name} className="border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-secondary">{r.name}</span>
                      <Stars rating={r.stars} />
                    </div>
                    <p className="text-sm text-gray-500">{r.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Related products ── */}
        {related.length > 0 && (
          <div className="mt-10 md:mt-14">
            <h2 className="font-heading text-xl font-bold text-secondary mb-6">Sản phẩm liên quan</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} colorIndex={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
