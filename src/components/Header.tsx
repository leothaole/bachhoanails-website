"use client";

import { useState, useEffect, useRef } from "react";

/* ── Mega menu data ─────────────────────────────── */
type MenuColumn = { title: string; items: string[] };
type MegaMenu =
  | { type: "columns"; columns: MenuColumn[] }
  | { type: "brands"; brands: string[] }
  | { type: "simple"; items: string[] };

const megaMenus: Record<string, MegaMenu> = {
  "Hàng Mới": {
    type: "columns",
    columns: [
      { title: "Mới Về Tuần Này", items: ["DND Summer 2025", "Kiara Sky Spring Set", "Notpolish Jelly Series", "SNS New Dip Colors", "iGel Beauty Collection"] },
      { title: "Sắp Ra Mắt", items: ["OPI Fall Collection 2025", "DND Winter 2025", "Gelish Holiday Set"] },
    ],
  },
  "Khuyến Mãi": {
    type: "columns",
    columns: [
      { title: "Đang Giảm Giá", items: ["Flash Sale hôm nay", "Giảm 20–30% Gel màu", "Combo tiết kiệm đến 35%", "Buy 2 Get 1 Free"] },
      { title: "Ưu Đãi Đặc Biệt", items: ["Free ship đơn từ $150", "Tặng quà khi mua $200+", "Member Deal độc quyền", "Clearance cuối mùa"] },
    ],
  },
  "Gel & Powder": {
    type: "columns",
    columns: [
      { title: "Gel Màu", items: ["Gel màu DND (1,200+)", "Gel màu Kiara Sky", "Gel màu OPI", "Gel màu Notpolish", "Builder Gel", "Jelly Gel"] },
      { title: "Dip & Acrylic", items: ["SNS Dip Powder", "Kiara Sky Dip", "DND Dip", "Polygel", "Acrylic Powder", "Liquid Monomer"] },
      { title: "Base & Top Coat", items: ["Base Coat", "Top Coat No-Wipe", "Top Coat Matte", "Gel Bonder", "Primer / Dehydrator", "Cuticle Oil"] },
    ],
  },
  "Dụng Cụ": {
    type: "columns",
    columns: [
      { title: "Đèn UV / LED", items: ["Đèn UV 48W", "Đèn LED Mini", "Đèn Sunuv Pro", "Đèn Gelish 18G"] },
      { title: "Dũa & Bào", items: ["File 100/180", "Buffer Block", "Nail Drill Machine", "Mũi khoan ceramic", "Sanding Bands"] },
      { title: "Dụng Cụ Khác", items: ["Nail Forms", "Nail Tips", "Cuticle Pusher", "Nail Brush Set", "Liner Brush"] },
    ],
  },
  "Nail Art": {
    type: "columns",
    columns: [
      { title: "Trang Trí", items: ["Glitter & Chrome Powder", "Nail Foil", "Nail Stickers & Decals", "3D Nail Art", "Rhinestones"] },
      { title: "Vẽ Móng", items: ["Gel Vẽ 3D", "Stamping Plate", "Stamping Polish", "Acrylic Paint", "Nail Art Pen"] },
    ],
  },
  "Mua Sỉ": {
    type: "columns",
    columns: [
      { title: "Bảng Giá Sỉ", items: ["Mua 10+ sản phẩm → –15%", "Mua 20+ sản phẩm → –25%", "Mua 50+ sản phẩm → –35%", "Free ship đơn từ $150"] },
      { title: "Sỉ Theo Thương Hiệu", items: ["Sỉ DND Collections", "Sỉ Kiara Sky", "Sỉ SNS Nails", "Sỉ Notpolish", "Sỉ iGel Beauty"] },
    ],
  },
  "Thương Hiệu": {
    type: "brands",
    brands: ["DND Collections", "Kiara Sky", "SNS Nails", "Notpolish", "iGel Beauty", "OPI", "Gelish", "Morgan Taylor", "Entity Beauty", "Orly", "CND Shellac", "Essie"],
  },
  "Tin Tức": {
    type: "simple",
    items: ["Xu hướng nails 2025", "Thị trường & giá cả", "Pháp lý cho tiệm nails", "Cộng đồng thợ nails Việt", "Hướng dẫn kỹ thuật"],
  },
};

const navLinks = Object.keys(megaMenus);

/* ── Component ──────────────────────────────────── */
export default function Header() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Đóng mega menu khi click ra ngoài
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveMenu(null);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const toggleMenu = (label: string) =>
    setActiveMenu((prev) => (prev === label ? null : label));

  return (
    <>
      {/* Backdrop khi mega menu mở */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
          onClick={() => setActiveMenu(null)}
        />
      )}

      <header ref={headerRef} className="bg-[#1a1a1a] sticky top-0 z-50 safe-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[90px] md:h-[96px] gap-3">

            {/* ── Logo ── */}
            <a href="/" className="flex items-center gap-3 flex-shrink-0 group min-h-[44px] ml-2 md:ml-4">
              <div className="h-[84px] w-[84px] md:h-[92px] md:w-[92px] rounded-full overflow-hidden flex-shrink-0 bg-white group-hover:scale-105 transition-transform duration-200">
                <img
                  src="/logo-brand.png"
                  alt="BachHoa Nails"
                  className="w-full h-full object-contain scale-[1.35] translate-x-[4px]"
                />
              </div>
              <div className="hidden md:flex items-baseline gap-2 leading-none">
                <span className="font-heading font-extrabold text-[1.75rem] tracking-tight" style={{ color: "#F5831F" }}>BachHoa</span>
                <span className="font-heading font-extrabold text-[1.75rem] tracking-tight" style={{ color: "#5BAFD6" }}>Nails</span>
              </div>
            </a>

            {/* ── Search desktop ── */}
            <div className="hidden md:flex flex-1 max-w-xl mx-6">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="w-full pl-5 pr-12 py-2 bg-[#2d2d2d] border border-[#404040] rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  style={{ fontSize: 16 }}
                />
                <button className="absolute right-0 top-0 bottom-0 px-4 text-gray-400 hover:text-primary transition-colors" aria-label="Tìm kiếm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* ── Right icons ── */}
            <div className="flex items-center gap-1">
              <button onClick={() => setSearchOpen(!searchOpen)}
                className="sm:hidden flex items-center justify-center w-11 h-11 text-gray-300 hover:text-white" aria-label="Tìm kiếm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="hidden md:flex items-center text-gray-300 hover:text-white text-sm px-3 min-h-[44px] transition-colors whitespace-nowrap">
                Đăng nhập
              </button>
              <button className="hidden md:flex items-center text-white text-sm font-semibold px-4 py-2 hover:opacity-90 transition-opacity whitespace-nowrap min-h-[36px]"
                style={{ backgroundColor: "#F5831F" }}>
                Đăng ký mua
              </button>
              <button className="relative flex items-center justify-center w-11 h-11 text-gray-300 hover:text-white transition-colors" aria-label="Giỏ hàng">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-4 h-4 text-white text-xs rounded-full flex items-center justify-center font-bold leading-none" style={{ backgroundColor: "#F5831F" }}>0</span>
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex items-center justify-center w-11 h-11 text-gray-300 hover:text-white" aria-label="Menu">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile search */}
          {searchOpen && (
            <div className="md:hidden pb-3">
              <input type="text" placeholder="Tìm sản phẩm..." autoFocus
                className="w-full px-4 py-3 bg-[#2d2d2d] border border-[#404040] rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                style={{ fontSize: 16 }} />
            </div>
          )}
        </div>

        {/* ── Nav row + Mega menu ── */}
        <div className="hidden md:block bg-[#111111] border-t border-[#2d2d2d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center overflow-x-auto no-scrollbar">
              {navLinks.map((label) => {
                const isOpen = activeMenu === label;
                return (
                  <button
                    key={label}
                    onClick={() => toggleMenu(label)}
                    className={`flex items-center gap-1 flex-shrink-0 text-sm px-4 py-3 whitespace-nowrap transition-colors border-b-2 min-h-[44px] ${
                      isOpen
                        ? "text-white border-[#F5831F] bg-[#1e1e1e]"
                        : "text-gray-300 hover:text-white hover:bg-[#1e1e1e] border-transparent hover:border-[#F5831F]"
                    }`}
                  >
                    {label}
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* ── MEGA MENU PANEL ── */}
          {activeMenu && megaMenus[activeMenu] && (
            <div className="border-t border-[#2d2d2d] bg-[#111111] animate-fade-in">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <MegaMenuContent menu={megaMenus[activeMenu]} onClose={() => setActiveMenu(null)} />
              </div>
            </div>
          )}
        </div>

        {/* ── Mobile menu ── */}
        {menuOpen && (
          <div className="md:hidden bg-[#1a1a1a] border-t border-[#2d2d2d] animate-slide-up safe-bottom">
            <nav className="px-4 py-2">
              {navLinks.map((label) => (
                <a key={label} href="#"
                  className="flex items-center justify-between py-3.5 text-sm text-gray-300 hover:text-white border-b border-[#2d2d2d] last:border-0 min-h-[44px]"
                  onClick={() => setMenuOpen(false)}>
                  {label}
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </nav>
            <div className="px-4 py-4 flex flex-col gap-2.5">
              <button className="w-full min-h-[44px] py-3 border border-gray-600 text-sm font-medium text-gray-300 hover:text-white">Đăng nhập</button>
              <button className="w-full min-h-[44px] py-3 text-white text-sm font-semibold hover:opacity-90" style={{ backgroundColor: "#F5831F" }}>Đăng ký mua</button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

/* ── Mega menu content renderer ─────────────────── */
function MegaMenuContent({ menu, onClose }: { menu: MegaMenu; onClose: () => void }) {
  if (menu.type === "brands") {
    return (
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#F5831F" }}>
          Tất Cả Thương Hiệu
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
          {menu.brands.map((brand) => (
            <a key={brand} href="#" onClick={onClose}
              className="flex items-center justify-center text-center px-3 py-2.5 bg-[#1a1a1a] border border-[#2d2d2d] text-xs text-gray-300 hover:text-white hover:border-[#F5831F] hover:bg-[#222] transition-all duration-150">
              {brand}
            </a>
          ))}
        </div>
      </div>
    );
  }

  if (menu.type === "simple") {
    return (
      <ul className="flex flex-wrap gap-x-8 gap-y-2">
        {menu.items.map((item) => (
          <li key={item}>
            <a href="#" onClick={onClose}
              className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1.5">
              <span style={{ color: "#F5831F" }}>›</span> {item}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  // type === "columns"
  return (
    <div className={`grid gap-8 ${menu.columns.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
      {menu.columns.map((col) => (
        <div key={col.title}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#F5831F" }}>
            {col.title}
          </p>
          <ul className="space-y-1.5">
            {col.items.map((item) => (
              <li key={item}>
                <a href="#" onClick={onClose}
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/item">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover/item:bg-[#F5831F] transition-colors flex-shrink-0" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* CTA bên phải */}
      <div className="border-l border-[#2d2d2d] pl-8 flex flex-col justify-center gap-3 col-span-1"
        style={{ display: menu.columns.length >= 3 ? "none" : "flex" }}>
        <p className="text-xs text-gray-500 uppercase tracking-widest">Nổi Bật</p>
        <p className="text-white font-heading font-bold text-lg leading-snug">
          Mua sỉ từ $150<br/>
          <span style={{ color: "#F5831F" }}>Free ship toàn quốc</span>
        </p>
        <a href="#" onClick={onClose}
          className="inline-flex items-center text-sm font-semibold text-white px-4 py-2 w-fit transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#F5831F" }}>
          Xem ngay →
        </a>
      </div>
    </div>
  );
}
