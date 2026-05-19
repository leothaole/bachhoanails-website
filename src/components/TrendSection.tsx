"use client";

import { useState } from "react";

const trends = [
  { id: 1, title: "Chrome Nails 2025", views: "2.3M views", emoji: "✨", gradient: "from-purple-400 to-pink-500", tags: ["#chromenails", "#mirror"], hot: true },
  { id: 2, title: "Jelly Nails mùa hè", views: "1.8M views", emoji: "🌸", gradient: "from-pink-300 to-rose-400", tags: ["#jellynails", "#summer"], hot: true },
  { id: 3, title: "French Tip Glitter", views: "1.2M views", emoji: "💎", gradient: "from-cyan-400 to-blue-500", tags: ["#frenchtip", "#glitter"], hot: false },
  { id: 4, title: "Nail Art 3D Hoa", views: "980K views", emoji: "🌺", gradient: "from-emerald-400 to-teal-500", tags: ["#3dnails", "#floral"], hot: false },
  { id: 5, title: "Ombre Pastel", views: "756K views", emoji: "🎨", gradient: "from-orange-300 to-amber-400", tags: ["#ombre", "#pastel"], hot: false },
];

const cleaningTools = [
  { id: 1, title: "Nước khử trùng dụng cụ — 1 Gallon Barbicide", emoji: "🧹", price: "$22.99", originalPrice: "$35.00", rating: 4.9, reviews: 1876, badge: "BEST SELLER", color: "from-blue-50 to-cyan-100" },
  { id: 2, title: "Hộp UV sterilizer dụng cụ — Chuyên nghiệp", emoji: "☀️", price: "$89.99", originalPrice: "$120.00", rating: 4.8, reviews: 634, badge: "TOP RATED", color: "from-yellow-50 to-amber-100" },
  { id: 3, title: "Găng tay nitrile không bột — Hộp 100 cái", emoji: "🧤", price: "$12.99", rating: 4.7, reviews: 3201, badge: null, color: "from-purple-50 to-violet-100" },
  { id: 4, title: "Khăn giấy lau nails cuộn lớn — Không xơ", emoji: "🧻", price: "$15.99", rating: 4.6, reviews: 892, badge: null, color: "from-pink-50 to-rose-100" },
  { id: 5, title: "Bình xịt cồn 70% — Khử trùng bề mặt 500ml", emoji: "💧", price: "$8.99", originalPrice: "$14.00", rating: 4.8, reviews: 2104, badge: "SALE", color: "from-green-50 to-emerald-100" },
];

export default function TrendSection() {
  return (
    <>
      {/* Xu hướng nails */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="section-title">Xu hướng nails đang hot</h2>
              <p className="text-muted text-sm mt-1">Supply phù hợp để làm những kiểu nails đang thịnh hành</p>
            </div>
            <button className="text-primary font-medium text-sm hover:underline flex items-center gap-1 group">
              Xem tất cả
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {trends.map((trend) => <TrendCard key={trend.id} trend={trend} />)}
          </div>
        </div>
      </section>

      {/* Vệ sinh & Khử trùng */}
      <section className="py-10 md:py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="section-title">Vệ sinh & Khử trùng tiệm nails</h2>
              <p className="text-muted text-sm mt-1">Đảm bảo an toàn cho khách và thợ — bắt buộc theo quy định</p>
            </div>
            <button className="text-primary font-medium text-sm hover:underline flex items-center gap-1 group">
              Xem tất cả
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {cleaningTools.map((tool) => <ToolCard key={tool.id} tool={tool} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function TrendCard({ trend }: { trend: typeof trends[0] }) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="flex-shrink-0 w-48 md:w-56 group cursor-pointer">
      <div className={`relative h-40 md:h-48 rounded-2xl bg-gradient-to-br ${trend.gradient} flex items-center justify-center overflow-hidden card-hover`}>
        <span className="text-5xl md:text-6xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 drop-shadow-lg">{trend.emoji}</span>
        {trend.hot && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse-soft">
            🔥 HOT
          </div>
        )}
        <button onClick={() => setSaved(!saved)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md hover:scale-110">
          <span>{saved ? "🔖" : "📌"}</span>
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <div className="flex gap-1 flex-wrap">
            {trend.tags.map((tag) => (
              <span key={tag} className="text-white/80 text-xs">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-2 px-1">
        <div className="font-medium text-secondary text-sm">{trend.title}</div>
        <div className="text-muted text-xs mt-0.5">{trend.views}</div>
      </div>
    </div>
  );
}

function ToolCard({ tool }: { tool: typeof cleaningTools[0] }) {
  const [liked, setLiked] = useState(false);

  const badgeColor: Record<string, string> = {
    "BEST SELLER": "bg-orange-500",
    "TOP RATED": "bg-blue-500",
    SALE: "bg-primary",
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden card-hover shine-effect group cursor-pointer border border-gray-100">
      <div className={`aspect-square bg-gradient-to-br ${tool.color} flex items-center justify-center relative overflow-hidden`}>
        <span className="text-4xl md:text-5xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">{tool.emoji}</span>
        {tool.badge && (
          <div className={`absolute top-2 left-2 text-white text-xs font-bold px-2 py-0.5 rounded-full ${badgeColor[tool.badge] ?? "bg-secondary"}`}>
            {tool.badge}
          </div>
        )}
        <button onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
          className="absolute top-2 right-2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-sm hover:scale-110">
          <span className="text-xs">{liked ? "❤️" : "🤍"}</span>
        </button>
      </div>
      <div className="p-3">
        <div className="text-xs font-medium text-secondary line-clamp-2 mb-2 leading-snug">{tool.title}</div>
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <svg key={s} className={`w-3 h-3 ${s <= Math.round(tool.rating) ? "text-accent" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <span className="text-xs text-muted">({tool.reviews})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm text-secondary">{tool.price}</span>
          {tool.originalPrice && <span className="text-xs text-muted line-through">{tool.originalPrice}</span>}
        </div>
      </div>
    </div>
  );
}
