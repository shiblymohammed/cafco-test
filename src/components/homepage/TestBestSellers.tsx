"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  TestProductCard,
  TestProductCardImageContainer,
  TestProductCardImage,
  TestProductCardTitle,
  TestProductCardDescription,
  TestProductCardMeta,
  TestProductCardBadge,
  TestProductCardWishlist,
} from "@/src/components/ui/TestProductCard";

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

function TestProductCardItem({ product }: { product: Product }) {
  return (
    <TestProductCard>
      <TestProductCardImageContainer>
        {product.badge && (
          <TestProductCardBadge variant={product.badge}>
            {product.badge === "gold"
              ? "Premium"
              : product.badge === "eco"
                ? "Eco-Friendly"
                : product.badge === "limited"
                  ? "Limited"
                  : product.badge}
          </TestProductCardBadge>
        )}
        <TestProductCardWishlist />
        <TestProductCardImage src={product.image} alt={product.name} />
      </TestProductCardImageContainer>
      <TestProductCardTitle>{product.name}</TestProductCardTitle>
      <TestProductCardDescription>
        {product.description}
      </TestProductCardDescription>
      <TestProductCardMeta
        collection={product.collection}
        category={product.category}
      />
    </TestProductCard>
  );
}

export default function TestBestSellers() {
  return (
    <section className="bg-creme py-section-mobile md:py-section overflow-hidden">
      {/* Section Header */}
      <div className="flex items-end justify-between px-container max-w-content mx-auto mb-8 md:mb-10">
        <div className="animate-slide-up">
          {/* Accent line */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-tango rounded-full" />
            <span className="text-caption text-tango uppercase tracking-wider font-medium">
              Trending Now
            </span>
          </div>
          <h2 className="text-h2 md:text-h1 text-text-primary font-secondary tracking-tight">
            Shop Best Sellers
          </h2>
          <p className="text-small text-text-secondary mt-2 leading-relaxed max-w-md">
            Our most loved pieces, handpicked for you
          </p>
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
          spaceBetween={16}
          slidesPerView={1.4}
          slidesOffsetBefore={32}
          slidesOffsetAfter={32}
          freeMode={{ enabled: true, sticky: false }}
          pagination={{
            clickable: true,
            el: ".test-best-sellers-pagination",
          }}
          grabCursor={true}
          breakpoints={{
            480: {
              slidesPerView: 1.8,
              spaceBetween: 16,
              slidesOffsetBefore: 32,
              slidesOffsetAfter: 32,
            },
            640: {
              slidesPerView: 2.3,
              spaceBetween: 16,
              slidesOffsetBefore: 32,
              slidesOffsetAfter: 32,
            },
            768: {
              slidesPerView: 2.8,
              spaceBetween: 20,
              slidesOffsetBefore: 32,
              slidesOffsetAfter: 32,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 20,
              slidesOffsetBefore: 32,
              slidesOffsetAfter: 32,
            },
            1280: {
              slidesPerView: 4.2,
              spaceBetween: 24,
              slidesOffsetBefore: 32,
              slidesOffsetAfter: 32,
            },
          }}
          className="test-best-sellers-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="!h-auto pb-6">
              <TestProductCardItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Dots */}
      <div className="test-best-sellers-pagination flex justify-center gap-2 px-container pt-4" />

      {/* Mobile View All Link */}
      <div className="md:hidden flex justify-center mt-8 px-container">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-3 bg-tango text-text-inverse text-small rounded-button hover:bg-hover-accent transition-all duration-fast tracking-wide group shadow-card hover:shadow-card-hover"
        >
          View All Products
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
    </section>
  );
}
