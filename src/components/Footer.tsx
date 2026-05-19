"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="bg-[#1a1a1a] text-gray-300 safe-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">

          {/* Newsletter */}
          <div>
            <div className="mb-6">
              <img
                src="/logo-brand.png"
                alt="BachHoa Nails"
                className="h-20 w-auto object-contain"
              />
            </div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">ĐĂNG KÝ NHẬN TIN</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">Hàng mới, khuyến mãi và tin tức nails mỗi tuần.</p>
            {!submitted ? (
              <div className="flex border border-[#404040] overflow-hidden rounded">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail" style={{ fontSize: 16 }}
                  className="flex-1 px-3 py-3 bg-[#2d2d2d] text-white placeholder-gray-500 focus:outline-none text-sm" />
                <button onClick={() => email && setSubmitted(true)} aria-label="Đăng ký"
                  className="px-4 bg-primary text-white hover:bg-primary-dark transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ) : (
              <p className="text-green-400 text-sm">✓ Đăng ký thành công!</p>
            )}
          </div>

          {/* Help */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">HỖ TRỢ</h4>
            <ul className="space-y-2.5">
              {["Câu hỏi thường gặp", "Theo dõi đơn hàng", "Chính sách đổi trả", "Chính sách vận chuyển", "Chính sách bảo mật", "Điều khoản dịch vụ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center min-h-[32px]">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Giờ làm việc */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">GIỜ LÀM VIỆC</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="text-white font-medium">Thứ 2 — Thứ 6</p>
              <p>9:00 AM – 5:00 PM EST</p>
              <div className="border-t border-[#2d2d2d] my-3" />
              <p className="text-white font-medium">Thứ 7</p>
              <p>10:00 AM – 3:00 PM EST</p>
              <div className="border-t border-[#2d2d2d] my-3" />
              <p>Chủ nhật: Nghỉ</p>
            </div>
          </div>

          {/* Liên hệ */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">LIÊN HỆ</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>Câu hỏi? Liên hệ qua email — phản hồi trong 24h làm việc.</p>
              <a href="mailto:bachhoanails@gmail.com" className="block text-primary hover:underline font-medium break-all">
                bachhoanails@gmail.com
              </a>
              <a href="#" className="block text-primary hover:underline">Yêu cầu sản phẩm / thương hiệu →</a>
              <div className="flex gap-3 pt-1">
                {[
                  { label: "Facebook", icon: "f", url: "https://www.facebook.com/leodailyusa" },
                  { label: "Instagram", icon: "ig", url: "#" },
                  { label: "TikTok", icon: "tk", url: "https://www.tiktok.com/@leodaily.usa" },
                  { label: "YouTube", icon: "yt", url: "https://www.youtube.com/@LeoDailyUSA" },
                ].map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-[#404040] flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all text-xs font-bold">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#2d2d2d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm order-2 sm:order-1">© 2025, Bách Hóa Nails.</p>
          <div className="flex flex-wrap gap-1.5 justify-center order-1 sm:order-2">
            {[
              { label: "Visa", bg: "#1A1F71" }, { label: "MC", bg: "#EB001B" },
              { label: "PayPal", bg: "#003087" }, { label: "Apple Pay", bg: "#333" },
              { label: "G Pay", bg: "#fff", dark: true }, { label: "Discover", bg: "#FF6600" },
              { label: "AMEX", bg: "#007BC1" }, { label: "Shop Pay", bg: "#5A31F4" },
              { label: "Amazon", bg: "#FF9900" },
            ].map((p) => (
              <div key={p.label} className="h-7 px-2.5 rounded text-xs font-bold flex items-center justify-center"
                style={{ backgroundColor: p.bg, color: p.dark ? "#333" : "white", minWidth: "44px", border: p.dark ? "1px solid #ddd" : "none" }}>
                {p.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
