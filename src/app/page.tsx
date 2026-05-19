import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryTabs from "@/components/CategoryTabs";
import ProductGrid from "@/components/ProductGrid";
import SeasonalBundles from "@/components/SeasonalBundles";
import NewArrivals from "@/components/NewArrivals";
import DailyNews from "@/components/DailyNews";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <CategoryTabs />
      <ProductGrid />
      <SeasonalBundles />
      <NewArrivals />
      <DailyNews />
      <TrustBar />
      <Footer />
      <ChatWidget />
    </main>
  );
}
