"use client";

import { useState } from "react";

const announcements = [
  "🚚 MIỄN PHÍ VẬN CHUYỂN cho đơn hàng từ $150 trở lên",
  "💅 Hàng mới về: OPI Summer 2025 Collection — Đặt ngay hôm nay",
  "🎁 Mua sỉ từ 10 sản phẩm — Giảm thêm 15% tự động",
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-secondary text-white py-2.5 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + announcements.length) % announcements.length)}
          className="text-white/50 hover:text-white transition-colors hidden sm:block"
        >
          ‹
        </button>
        <p className="text-sm text-center font-medium">{announcements[current]}</p>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % announcements.length)}
          className="text-white/50 hover:text-white transition-colors hidden sm:block"
        >
          ›
        </button>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
}
