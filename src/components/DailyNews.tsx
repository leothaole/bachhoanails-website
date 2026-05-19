"use client";

import { useState, useEffect, useRef } from "react";

const newsItems = [
  {
    id: 1,
    category: "Xu hướng",
    categoryColor: "bg-pink-500",
    title: "Top 10 màu gel được đặt nhiều nhất tháng 5/2025 trên toàn nước Mỹ",
    summary:
      "Theo NAILS Magazine, chrome rose, jelly nude và soft lavender đang dẫn đầu đơn hàng tại các tiệm nails từ California đến New York. Cập nhật kho hàng ngay trước mùa hè.",
    source: "NAILS Magazine",
    time: "2 giờ trước",
    emoji: "💅",
    hot: true,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: 2,
    category: "Thị trường",
    categoryColor: "bg-purple-500",
    title: "Ngành nail Mỹ đạt doanh thu $8.5 tỷ năm 2025 — Cơ hội cho tiệm nhỏ",
    summary:
      "Dữ liệu từ IBIS World cho thấy thị trường nail tiếp tục tăng trưởng 3.2% mỗi năm. Tiệm nails quy mô nhỏ từ 1-3 ghế đang chiếm ưu thế ở các khu dân cư ngoại ô.",
    source: "IBIS World",
    time: "5 giờ trước",
    emoji: "📈",
    hot: true,
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: 3,
    category: "Supply",
    categoryColor: "bg-blue-500",
    title: "OPI ra mắt bộ sưu tập Fall 2025 — 18 màu gel mới đặc biệt",
    summary:
      "OPI vừa công bố bộ sưu tập thu đông 2025 với 18 màu gel mới lấy cảm hứng từ thiên nhiên nước Mỹ. Đặt hàng sớm để được giá pre-launch đặc biệt.",
    source: "OPI Official",
    time: "8 giờ trước",
    emoji: "🎨",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: 4,
    category: "Pháp lý",
    categoryColor: "bg-amber-500",
    title: "California cập nhật quy định an toàn tiệm nails 2025 — Cần biết ngay",
    summary:
      "DOSH California ban hành thông tư mới về thông gió, hóa chất và thiết bị bảo hộ tại tiệm nails. Hiệu lực từ 1/7/2025. Xem checklist đầy đủ bên dưới.",
    source: "DOSH California",
    time: "1 ngày trước",
    emoji: "⚖️",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: 5,
    category: "Cộng đồng",
    categoryColor: "bg-green-500",
    title: "Hội thợ nails Việt tại Houston tổ chức triển lãm supply — Miễn phí",
    summary:
      "Sự kiện nail supply expo đầu tiên do người Việt tổ chức tại Houston, TX vào ngày 15/6/2025. Hơn 50 thương hiệu tham gia, nhiều ưu đãi giá sỉ độc quyền.",
    source: "VietNail Community",
    time: "1 ngày trước",
    emoji: "🌟",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: 6,
    category: "Giá cả",
    categoryColor: "bg-red-500",
    title: "Giá gel màu tăng 8% do chi phí vận chuyển — Cách tiết kiệm hiệu quả",
    summary:
      "Các nhà phân phối lớn thông báo tăng giá từ tháng 6. Bách Hóa Nails hướng dẫn cách mua sỉ nhóm và dự trữ thông minh để tiết kiệm tối đa chi phí cho tiệm.",
    source: "Nail Industry Report",
    time: "2 ngày trước",
    emoji: "💰",
    gradient: "from-red-500 to-rose-600",
  },
];

const tickerNews = [
  "💅 Top màu gel hot nhất tháng 5/2025 — Chrome Rose dẫn đầu",
  "📦 OPI Fall Collection 2025 — 18 màu mới ra mắt",
  "⚖️ California cập nhật quy định tiệm nails từ 1/7/2025",
  "📈 Thị trường nail Mỹ đạt $8.5 tỷ năm 2025",
  "🌟 Nail Expo tại Houston, TX — 15/6/2025 miễn phí",
  "💰 Giá gel tăng 8% từ tháng 6 — Mua sỉ ngay để tiết kiệm",
  "🔥 Jelly nails & Chrome nails dẫn đầu xu hướng hè 2025",
  "🛒 Combo supply tiết kiệm hơn 40% — Số lượng có hạn",
];

export default function DailyNews() {
  const [activeNews, setActiveNews] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        setActiveNews((prev) => (prev + 1) % newsItems.length);
      }, 4500);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isAutoPlay]);

  const goTo = (i: number) => {
    setActiveNews(i);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const current = newsItems[activeNews];

  return (
    <section className="py-0 overflow-hidden">
      {/* Live News Ticker */}
      <div className="bg-secondary text-white py-2.5 overflow-hidden border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 bg-primary px-4 py-1 text-sm font-bold uppercase tracking-wider">
            🔴 LIVE
          </div>
          <div className="overflow-hidden flex-1">
            <div className="ticker-inner flex gap-12 text-sm text-white/80">
              {[...tickerNews, ...tickerNews].map((item, i) => (
                <span key={i} className="flex-shrink-0">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main News Banner */}
      <div className="relative min-h-[500px] md:min-h-[580px] bg-secondary overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${current.gradient} opacity-20 transition-all duration-700`} />
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br ${current.gradient} opacity-10 rounded-full blur-3xl transition-all duration-700`} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Featured news */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-white/90 text-sm font-medium">Tin Tức Nails Hàng Ngày</span>
                </div>
                <span className="text-white/50 text-sm">{current.time}</span>
              </div>

              <div className={`inline-flex items-center gap-2 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 ${current.categoryColor}`}>
                {current.emoji} {current.category}
              </div>

              <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {current.title}
              </h2>

              <p className="text-white/70 text-base md:text-lg mb-4 leading-relaxed">
                {current.summary}
              </p>

              <p className="text-white/40 text-sm mb-8">
                Nguồn: <span className="text-white/60 font-medium">{current.source}</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="btn-primary py-3 px-8">Đọc đầy đủ →</button>
                <button className="border-2 border-white/30 text-white rounded-full py-3 px-8 hover:bg-white/10 transition-all font-semibold">
                  Xem tất cả tin tức
                </button>
              </div>

              <div className="flex gap-2 mt-8">
                {newsItems.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)}
                    className={`transition-all duration-300 rounded-full ${i === activeNews ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-white/30 hover:bg-white/60"}`} />
                ))}
              </div>
            </div>

            {/* Right: News list */}
            <div className="flex flex-col gap-3">
              {newsItems.slice(0, 4).map((news, i) => (
                <button key={news.id} onClick={() => goTo(i)}
                  className={`text-left p-4 rounded-2xl transition-all duration-300 ${
                    i === activeNews
                      ? "bg-white/15 border border-white/30 scale-[1.02]"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }`}>
                  <div className="flex gap-3 items-start">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{news.emoji}</span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold text-white px-2 py-0.5 rounded-full ${news.categoryColor}`}>
                          {news.category}
                        </span>
                        {news.hot && <span className="text-xs text-accent font-bold">🔥 HOT</span>}
                      </div>
                      <p className="text-white/90 text-sm font-medium line-clamp-2 leading-snug">{news.title}</p>
                      <p className="text-white/40 text-xs mt-1">{news.source} · {news.time}</p>
                    </div>
                  </div>
                </button>
              ))}

              <button className="text-center py-3 text-primary font-medium text-sm hover:text-primary-light transition-colors">
                Xem thêm {newsItems.length - 4} tin tức →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category filter pills */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {["Tất cả tin", "Xu hướng", "Thị trường", "Supply", "Pháp lý", "Cộng đồng", "Giá cả"].map((cat, i) => (
              <button key={i}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-gray-100 text-secondary hover:bg-primary/10 hover:text-primary"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
