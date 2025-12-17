"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  ProductCard,
  ProductCardImageContainer,
  ProductCardImage,
  ProductCardTitle,
  ProductCardDescription,
  ProductCardMeta,
  ProductCardBadge,
  ProductCardWishlist,
  ProductCardQuickAdd,
} from "@/src/components/ui/ProductCard";

interface Product {
  id: number;
  name: string;
  description: string;
  collection: string;
  category: string;
  image: string;
  badge?: "sale" | "new" | "gold" | "eco" | "limited";
}

const products: Product[] = [
  {
    id: 1,
    name: "Velvet Armchair",
    description: "Premium Living Room Furniture",
    collection: "Home Living",
    category: "Chairs",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=800&fit=crop",
    badge: "sale",
  },
  {
    id: 2,
    name: "Marble Side Table",
    description: "Modern Accent Table",
    collection: "Home Living",
    category: "Tables",
    image:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=600&h=800&fit=crop",
    badge: "new",
  },
  {
    id: 3,
    name: "Ceramic Vase Set",
    description: "Handcrafted Home Decor",
    collection: "Decor",
    category: "Vases",
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=800&fit=crop",
    badge: "eco",
  },
  {
    id: 4,
    name: "Linen Throw Pillow",
    description: "Soft Textured Cushion",
    collection: "Bedroom",
    category: "Pillows",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=800&fit=crop",
  },
  {
    id: 5,
    name: "Wooden Floor Lamp",
    description: "Ambient Lighting Solution",
    collection: "Home Living",
    category: "Lighting",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=800&fit=crop",
    badge: "limited",
  },
  {
    id: 6,
    name: "Woven Basket",
    description: "Natural Storage Organizer",
    collection: "Storage",
    category: "Baskets",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&h=800&fit=crop",
    badge: "sale",
  },
  {
    id: 7,
    name: "Minimalist Clock",
    description: "Contemporary Wall Art",
    collection: "Decor",
    category: "Clocks",
    image:
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600&h=800&fit=crop",
    badge: "gold",
  },
  {
    id: 8,
    name: "Cotton Throw Blanket",
    description: "Cozy Bedroom Essential",
    collection: "Bedroom",
    category: "Blankets",
    image:
      "https://images.unsplash.com/photo-1616627561839-074385245ff6?w=600&h=800&fit=crop",
    badge: "new",
  },
];

function ProductCardItem({ product }: { product: Product }) {
  return (
    <ProductCard href={`/product/${product.name.toLowerCase().replace(/ /g, "-")}`}>
      <ProductCardImageContainer>
        <ProductCardWishlist />
        <ProductCardImage src={product.image} alt={product.name} />
        <ProductCardQuickAdd />
        {product.badge && (
            <ProductCardBadge variant={product.badge}>{product.badge}</ProductCardBadge>
        )}
      </ProductCardImageContainer>
      
      <div className="flex flex-col items-start text-left">
        <ProductCardTitle>{product.name}</ProductCardTitle>
        <ProductCardMeta
          collection={product.collection}
          category={product.category}
        />
         {/* Description */}
        <ProductCardDescription className="opacity-70">
           {product.description}
        </ProductCardDescription>
      </div>
    </ProductCard>
  );
}

export default function BestSellers() {
  return (
    <section className="bg-creme py-6 md:py-8 overflow-hidden border-t border-border-light/30">
        
      {/* Editorial Header - Consistent Style */}
      <div className="flex items-center justify-center px-4 md:px-6 max-w-[1440px] mx-auto mb-10 md:mb-16">
        <div className="animate-slide-up text-center">
          <span className="block text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-1.5">
             Shop The Icons
          </span>
          <h2 className="text-3xl md:text-5xl font-secondary text-alpha tracking-tight">
            Best Sellers
          </h2>
        </div>
      </div>

      {/* Products Swiper - High Density Marketplace View */}
      <div className="pl-4 md:pl-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <Swiper
          modules={[FreeMode, Pagination]}
          spaceBetween={4}
          slidesPerView={1.6}
          speed={600}
          freeMode={{ enabled: true, sticky: false, momentumRatio: 0.5 }}
          grabCursor={true}
          breakpoints={{
            480: { slidesPerView: 2.1, spaceBetween: 4 },
            640: { slidesPerView: 2.5, spaceBetween: 5 },
            768: { slidesPerView: 3.2, spaceBetween: 5 },
            1024: { slidesPerView: 4.2, spaceBetween: 6 },
            1280: { slidesPerView: 5.2, spaceBetween: 6 },
          }}
          className="best-sellers-swiper !overflow-visible"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="!h-auto transition-opacity duration-500 hover:z-10">
              <ProductCardItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
