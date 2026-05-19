const guarantees = [
  { icon: "🚚", value: "Free Ship",  label: "Đơn từ $150" },
  { icon: "📦", value: "5,000+",     label: "Sản phẩm có sẵn" },
  { icon: "⚡", value: "2–5 ngày",   label: "Giao toàn nước Mỹ" },
  { icon: "🔒", value: "Bảo mật",    label: "Thanh toán an toàn" },
  { icon: "↩️", value: "15 ngày",    label: "Đổi trả hàng lỗi" },
  { icon: "📞", value: "Hỗ trợ",     label: "T2–T6, 9AM–5PM EST" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-gray-100 py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
          {guarantees.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-2xl sm:text-3xl mb-1.5 sm:mb-2">{stat.icon}</span>
              <div className="font-heading font-bold text-secondary text-sm sm:text-base">{stat.value}</div>
              <div className="text-muted text-xs mt-0.5 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
