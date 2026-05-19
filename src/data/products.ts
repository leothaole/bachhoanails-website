export interface Product {
  id: number;
  title: string;
  brand: string;
  price: string;
  originalPrice?: string;
  unit: string;
  rating: number;
  reviews: number;
  badge?: string;
  category: string;
  image: string;
  colors?: string[];
}

// Nail polish & gel
const nail1 = "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80";
const nail2 = "https://images.unsplash.com/photo-1604654895135-2698c5781a0f?w=400&q=80";
const nail3 = "https://images.unsplash.com/photo-1604654894649-7b9ffca36a70?w=400&q=80";
const nail4 = "https://images.unsplash.com/photo-1604654894775-9ba69b39e59b?w=400&q=80";
const nail5 = "https://images.unsplash.com/photo-1604654894854-d0e3b8a9d5bc?w=400&q=80";
// Manicure & nail art
const nail6 = "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&q=80";
const nail7 = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80";
const nail8 = "https://images.unsplash.com/photo-1604655855527-a5d2c6d75b5d?w=400&q=80";
// Nail tools & care
const nail9  = "https://images.unsplash.com/photo-1604654895614-3e4cf7e47eae?w=400&q=80";
const nail10 = "https://images.unsplash.com/photo-1512354042069-69e79c7d19ef?w=400&q=80";

export const bestSellers: Product[] = [
  { id: 1, title: "OPI Gel Color — Infinite Shine mùa hè 2025", brand: "OPI", price: "$38.99", originalPrice: "$55.00", unit: "/bộ 12 màu", rating: 4.9, reviews: 1891, badge: "BEST SELLER", category: "Gel màu", image: nail1, colors: ["#FF4757","#FFA502","#FFDD57","#7BED9F","#70A1FF"] },
  { id: 2, title: "Kiara Sky Gel Polish — 60 màu trending 2025", brand: "Kiara Sky", price: "$45.99", originalPrice: "$68.00", unit: "/bộ 60 màu", rating: 4.8, reviews: 1203, badge: "HOT", category: "Gel màu", image: nail2, colors: ["#FF6B9D","#9B59B6","#3498DB","#2ECC71","#F39C12"] },
  { id: 3, title: "Đèn LED UV 72W — Đóng rắn 30 giây dual source", brand: "Beetles UV", price: "$42.99", originalPrice: "$65.00", unit: "/cái", rating: 4.9, reviews: 2341, badge: "TOP RATED", category: "Đèn UV/LED", image: nail6 },
  { id: 4, title: "Máy khoan nails 35,000 RPM — Nhẹ, êm", brand: "MelodySusie", price: "$38.99", originalPrice: "$60.00", unit: "/cái", rating: 4.8, reviews: 3104, badge: "BEST SELLER", category: "Dụng cụ", image: nail9 },
  { id: 5, title: "Chrome Powder 15 màu — Ánh kim loại", brand: "Born Pretty", price: "$22.99", unit: "/bộ", rating: 4.7, reviews: 876, category: "Trang trí", image: nail7, colors: ["#C0C0C0","#FFD700","#B87333","#7DF9FF","#FF69B4"] },
  { id: 6, title: "SNS Dip Powder — 50 màu pastel nhẹ nhàng", brand: "SNS Nails", price: "$52.00", unit: "/bộ", rating: 4.7, reviews: 634, badge: "MỚI", category: "Powder & Dip", image: nail3, colors: ["#FFD3E8","#D8B4FE","#BAE6FD","#BBF7D0"] },
  { id: 7, title: "CND Cuticle Oil — Dưỡng móng hương hoa hồng", brand: "CND", price: "$14.99", unit: "/chai 30ml", rating: 4.8, reviews: 1102, badge: "YÊU THÍCH", category: "Chăm sóc da", image: nail8 },
  { id: 8, title: "Móng giả acrylic đầy đủ — Hộp 500 cái 10 size", brand: "KISS", price: "$18.99", unit: "/hộp", rating: 4.6, reviews: 789, category: "Móng giả", image: nail10 },
];

export const allProductsCatalog: Product[] = [
  { id: 101, title: "Gelish Harmony — 18 màu pastel mùa xuân", brand: "Gelish", price: "$49.99", unit: "/bộ", rating: 4.7, reviews: 567, category: "Gel màu", image: nail4 },
  { id: 102, title: "DND Gel & Lacquer — 24 màu nude & natural", brand: "DND", price: "$35.99", originalPrice: "$50.00", unit: "/bộ", rating: 4.8, reviews: 734, badge: "SALE", category: "Gel màu", image: nail5, colors: ["#F5E6E8","#E8D5C4","#C4A882","#8B6F5E"] },
  { id: 103, title: "iGel Beauty — 36 màu gel vibrant cao cấp", brand: "iGel Beauty", price: "$58.00", unit: "/bộ", rating: 4.6, reviews: 412, badge: "MỚI", category: "Gel màu", image: nail1 },
  { id: 104, title: "Notpolish — 20 màu jelly trong suốt 2025", brand: "Notpolish", price: "$42.00", unit: "/bộ", rating: 4.8, reviews: 891, badge: "HOT", category: "Gel màu", image: nail2 },
  { id: 105, title: "Mia Secret Acrylic Powder — Clear + Pink + White", brand: "Mia Secret", price: "$28.99", unit: "/bộ", rating: 4.6, reviews: 1023, badge: "BEST", category: "Powder & Dip", image: nail3 },
  { id: 106, title: "Chaun Legend Dip Powder — 30 màu glitter", brand: "Chaun Legend", price: "$45.00", unit: "/bộ", rating: 4.7, reviews: 345, category: "Powder & Dip", image: nail4 },
  { id: 107, title: "Bộ dụng cụ cuticle care 7 món thép không gỉ", brand: "GERMANIKURE", price: "$18.99", unit: "/bộ", rating: 4.8, reviews: 1102, category: "Dụng cụ", image: nail5 },
  { id: 108, title: "Bộ bàn chải nail art 15 cây — Kolinsky & Nylon", brand: "WaiYCan", price: "$16.99", unit: "/bộ", rating: 4.7, reviews: 634, category: "Dụng cụ", image: nail1 },
  { id: 109, title: "Dũa móng crystal glass nhập từ Séc", brand: "Bona Fide Beauty", price: "$12.99", unit: "/cái", rating: 4.9, reviews: 3201, badge: "YÊU THÍCH", category: "Dụng cụ", image: nail2 },
  { id: 110, title: "Nail buffer block 4 chiều — Hộp 100 cái", brand: "Generic Pro", price: "$15.99", unit: "/hộp", rating: 4.5, reviews: 892, category: "Dụng cụ", image: nail3 },
  { id: 111, title: "Gel UV lamp 48W mini — Nhỏ gọn du lịch", brand: "MelodySusie", price: "$24.99", unit: "/cái", rating: 4.6, reviews: 445, category: "Đèn UV/LED", image: nail4 },
  { id: 112, title: "Đèn UV 36W truyền thống tiết kiệm điện", brand: "Salon Edge", price: "$19.99", originalPrice: "$32.00", unit: "/cái", rating: 4.4, reviews: 678, badge: "SALE", category: "Đèn UV/LED", image: nail5 },
  { id: 113, title: "Rhinestone 3D — 2000 viên 20 kích cỡ", brand: "KISS", price: "$14.99", unit: "/hộp", rating: 4.6, reviews: 789, category: "Trang trí", image: nail1 },
  { id: 114, title: "Nail foil set — 20 cuộn holographic", brand: "Winstonia", price: "$18.99", unit: "/bộ", rating: 4.7, reviews: 412, badge: "MỚI", category: "Trang trí", image: nail2 },
  { id: 115, title: "Glitter powder ultra fine — 48 màu", brand: "Fansrock", price: "$19.99", unit: "/bộ", rating: 4.8, reviews: 567, category: "Trang trí", image: nail3 },
  { id: 116, title: "Nail sticker 3D hoa & hình học — 20 sheet", brand: "Born Pretty", price: "$11.99", unit: "/bộ", rating: 4.5, reviews: 334, category: "Trang trí", image: nail4 },
  { id: 117, title: "Hand cream dưỡng tay cho thợ nails 8oz", brand: "OPI", price: "$12.99", unit: "/hũ", rating: 4.7, reviews: 823, category: "Chăm sóc da", image: nail5 },
  { id: 118, title: "Paraffin wax dưỡng tay spa — 6lb unscented", brand: "Therabath", price: "$32.99", unit: "/hộp", rating: 4.8, reviews: 445, category: "Chăm sóc da", image: nail1 },
  { id: 119, title: "Press-on nails bộ 240 chiếc — 10 kích cỡ", brand: "Nailene", price: "$15.99", originalPrice: "$24.00", unit: "/hộp", rating: 4.5, reviews: 445, badge: "SALE", category: "Móng giả", image: nail2 },
  { id: 120, title: "Nail tips coffin shape — Hộp 500 trong suốt", brand: "Cre8tion", price: "$22.99", unit: "/hộp", rating: 4.7, reviews: 312, category: "Móng giả", image: nail3 },
  { id: 121, title: "Barbicide concentrate — Khử trùng dụng cụ 64oz", brand: "Barbicide", price: "$22.99", originalPrice: "$35.00", unit: "/chai", rating: 4.9, reviews: 1876, badge: "BEST SELLER", category: "Vệ sinh", image: nail4 },
  { id: 122, title: "Găng tay nitrile không bột — Hộp 100 cái", brand: "MedPride", price: "$12.99", unit: "/hộp", rating: 4.7, reviews: 3201, category: "Vệ sinh", image: nail5 },
  { id: 123, title: "UV Sterilizer box khử trùng chuyên nghiệp", brand: "Salon Pro", price: "$89.99", originalPrice: "$120.00", unit: "/cái", rating: 4.8, reviews: 634, badge: "TOP RATED", category: "Vệ sinh", image: nail1 },
  { id: 124, title: "Cồn 70% xịt khử trùng bề mặt — 500ml", brand: "CloroxPro", price: "$8.99", unit: "/chai", rating: 4.8, reviews: 2104, category: "Vệ sinh", image: nail2 },
];
