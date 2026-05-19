"use client";

import { useState } from "react";

const channels = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    sub: "Chat trực tiếp",
    href: "https://wa.me/1234567890",
    bg: "#25D366",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    id: "email",
    label: "Email",
    sub: "bachhoanails@gmail.com",
    href: "mailto:bachhoanails@gmail.com?subject=Hỏi về hàng nails - BachHoa Nails",
    bg: "#F5831F",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
  },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">

      {/* Panel */}
      {open && (
        <div className="w-72 bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="px-5 py-4" style={{ background: "linear-gradient(135deg, #F5831F, #D4650A)" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/30">
                <img src="/logo-main.png" alt="BachHoa Nails" className="w-full h-full object-cover scale-110"/>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">BachHoa Nails</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
                  <p className="text-white/80 text-xs">Đang online · Trả lời ngay</p>
                </div>
              </div>
            </div>
            <p className="text-white/90 text-xs mt-3 leading-relaxed">
              Xin chào! 👋 Bạn cần hỗ trợ gì về hàng nails? Chúng tôi sẵn sàng tư vấn!
            </p>
          </div>

          {/* Channels */}
          <div className="p-3 space-y-2 bg-gray-50">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest px-1 pt-1">Chọn kênh liên hệ</p>
            {channels.map((ch) => (
              <a
                key={ch.id}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2.5 bg-white rounded-xl hover:shadow-md transition-all duration-150 border border-gray-100 hover:border-gray-200 group"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white transition-transform group-hover:scale-105"
                  style={{ backgroundColor: ch.bg }}>
                  {ch.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 leading-tight">{ch.label}</p>
                  <p className="text-xs text-gray-400 truncate">{ch.sub}</p>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 py-2.5 bg-white border-t border-gray-100 text-center">
            <p className="text-[10px] text-gray-300">Powered by BachHoa Nails · bachhoanails.com</p>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat với BachHoa Nails"
        className="relative w-14 h-14 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center"
        style={{ background: open ? "#1A1A2E" : "linear-gradient(135deg, #F5831F, #D4650A)" }}
      >
        {/* Pulse ring khi đóng */}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: "#F5831F" }}/>
        )}

        {/* Icon */}
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 10H6v-2h12v2zm0-3H6V7h12v2z"/>
          </svg>
        )}

        {/* Badge số tin nhắn chưa đọc */}
        {!open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
            1
          </span>
        )}
      </button>
    </div>
  );
}
