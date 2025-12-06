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
    <ProductCard>
      <ProductCardImageContainer>
        {product.badge && (
          <ProductCardBadge variant={product.badge}>
            {product.badge === "gold"
              ? "Premium"
              : product.badge === "eco"
                ? "Eco-Friendly"
                : product.badge === "limited"
                  ? "Limited"
                  : product.badge}
          </ProductCardBadge>
        )}
        <ProductCardWishlist />
        <ProductCardImage src={product.image} alt={product.name} />
      </ProductCardImageContainer>
      <ProductCardTitle>{product.name}</ProductCardTitle>
      <ProductCardDescription>
        {product.description}
      </ProductCardDescription>
      <ProductCardMeta
        collection={product.collection}
        category={product.category}
      />
    </ProductCard>
  );
}

export default function BestSellers() {
  return (
    <section className="bg-creme py-section-mobile md:py-section overflow-hidden">
      {/* Section Header */}
      <div className="flex items-end justify-between px-container max-w-content mx-auto mb-8 md:mb-10">
        <div className="animate-slide-up">
          <h2 className="text-h2 md:text-h1 text-text-primary font-secondary tracking-tight">
            Shop Best Sellers
          </h2>
        </div>
        <a
          href="#"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-small text-tango border border-tango rounded-button hover:bg-tango hover:text-text-inverse transition-all duration-fast tracking-wide group"
        >
          View All
          <svg
            className="w-4 h-4 transition-transform duration-fast group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      {/* Products Swiper */}
      <div className="animate-fade-in">
        <Swiper
          modules={[FreeMode, Pagination]}
          spaceBetween={10}
          slidesPerView={2}
          slidesOffsetBefore={6}
          slidesOffsetAfter={6}
          freeMode={{ enabled: true, sticky: false }}
          pagination={{
            clickable: true,
            el: ".best-sellers-pagination",
          }}
          grabCursor={true}
          breakpoints={{
            480: {
              slidesPerView: 2.2,
              spaceBetween: 10,
              slidesOffsetBefore: 6,
              slidesOffsetAfter: 6,
            },
            640: {
              slidesPerView: 2.8,
              spaceBetween: 10,
              slidesOffsetBefore: 6,
              slidesOffsetAfter: 6,
            },
            768: {
              slidesPerView: 3.2,
              spaceBetween: 12,
              slidesOffsetBefore: 6,
              slidesOffsetAfter: 6,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 12,
              slidesOffsetBefore: 6,
              slidesOffsetAfter: 6,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 14,
              slidesOffsetBefore: 6,
              slidesOffsetAfter: 6,
            },
          }}
          className="best-sellers-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="!h-auto pb-6">
              <ProductCardItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Dots */}
      <div className="best-sellers-pagination flex justify-center gap-2 px-container pt-4" />


    </section>
  );
}
