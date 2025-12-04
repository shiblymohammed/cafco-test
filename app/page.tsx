import Hero from "@/src/components/homepage/Hero";
import Popular from "@/src/components/homepage/BestSellers";
import HotSelling from "@/src/components/homepage/HotSelling";
import Categories from "@/src/components/homepage/Categories";
import Collections from "@/src/components/homepage/Collections";
import Offers from "@/src/components/homepage/Offers";
import AboutSection from "@/src/components/homepage/AboutSection";
import Marketing from "@/src/components/homepage/Marketing";
import Testimonial from "@/src/components/homepage/Testimonial";

export default function HomePage() {
  return (
    <div className="relative bg-creme">
      <Hero />
      <div className="relative">
        <Popular />
        <Categories />
        <HotSelling />
        <Collections />
        <Offers />
        <AboutSection />
        <Marketing />
        <Testimonial />
      </div>
    </div>
  );
}
