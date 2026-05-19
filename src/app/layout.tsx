import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bách Hóa Nails — Tất Cả Những Gì Thợ Nails Cần",
  description:
    "Nền tảng hàng đầu cho thợ nails người Việt tại Mỹ. Học làm video quảng cáo, tìm supply, và phát triển tiệm nails của bạn.",
  keywords: "nails, thợ nails, tiệm nails, marketing nails, video quảng cáo nails, supply nails",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Bách Hóa Nails",
    description: "Tất cả những gì thợ nails người Việt cần tại Mỹ",
    url: "https://bachhoanails.com",
    siteName: "Bách Hóa Nails",
    images: [{ url: "/logo-brand.png", width: 800, height: 800 }],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background min-h-screen">{children}</body>
    </html>
  );
}
