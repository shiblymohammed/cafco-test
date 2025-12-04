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
} from "@/src/components/ui/ProductCard";

interface Product {
  id: number;
  name: string;
  description: string;
  collection: string;
  category: string;
  image: string;
  badge?: "sale" | "new";
}

const products: Product[] = [
  {
    id: 1,
    name: "Velvet Armchair",
    description: "Premium Living Room Furniture",
    collection: "Home Living",
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=800&fit=crop",
    badge: "sale",
  },
  {
    id: 2,
    name: "Marble Side Table",
    description: "Modern Accent Table",
    collection: "Home Living",
    category: "Tables",
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=600&h=800&fit=crop",
    badge: "new",
  },
  {
    id: 3,
    name: "Ceramic Vase Set",
    description: "Handcrafted Home Decor",
    collection: "Decor",
    category: "Vases",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=800&fit=crop",
    badge: "sale",
  },
  {
    id: 4,
    name: "Linen Throw Pillow",
    description: "Soft Textured Cushion",
    collection: "Bedroom",
    category: "Pillows",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=800&fit=crop",
  },
  {
    id: 5,
    name: "Wooden Floor Lamp",
    description: "Ambient Lighting Solution",
    collection: "Home Living",
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=800&fit=crop",
    badge: "new",
  },
  {
    id: 6,
    name: "Woven Basket",
    description: "Natural Storage Organizer",
    collection: "Storage",
    category: "Baskets",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&h=800&fit=crop",
    badge: "sale",
  },
  {
    id: 7,
    name: "Minimalist Clock",
    description: "Contemporary Wall Art",
    collection: "Decor",
    category: "Clocks",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600&h=800&fit=crop",
  },
  {
    id: 8,
    name: "Cotton Throw Blanket",
    description: "Cozy Bedroom Essential",
    collection: "Bedroom",
    category: "Blankets",
    image: "https://images.unsplash.com/photo-1616627561839-074385245ff6?w=600&h=800&fit=crop",
    badge: "new",
  },
];

function ProductCardItem({ product }: { product: Product }) {
  return (
    <ProductCard>
      <ProductCardImageContainer>
        <ProductCardImage src={product.image} alt={product.name} />
      </ProductCardImageContainer>
      <ProductCardTitle>{product.name}</ProductCardTitle>
      <ProductCardDescription>{product.description}</ProductCardDescription>
      <ProductCardMeta collection={product.collection} category={product.category} />
    </ProductCard>
  );
}

export default function BestSellers() {
  return (
    <section className="bg-creme py-8 md:py-12">
      {/* Title */}
      <h2 className="px-5 md:px-8 text-2xl md:text-3xl lg:text-4xl text-alpha font-secondary mb-6 md:mb-8">
        Shop Best Sellers
      </h2>

      {/* Products Swiper */}
      <div>
        <Swiper
          modules={[FreeMode, Pagination]}
          spaceBetween={8}
          slidesPerView={1.5}
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          freeMode={{ enabled: true, sticky: false }}
          pagination={{ clickable: true, el: '.best-sellers-pagination' }}
          grabCursor={true}
          breakpoints={{
            480: { slidesPerView: 1.8, spaceBetween: 12, slidesOffsetBefore: 16, slidesOffsetAfter: 16 },
            640: { slidesPerView: 2.3, spaceBetween: 12, slidesOffsetBefore: 20, slidesOffsetAfter: 20 },
            768: { slidesPerView: 2.8, spaceBetween: 14, slidesOffsetBefore: 24, slidesOffsetAfter: 24 },
            1024: { slidesPerView: 3.5, spaceBetween: 16, slidesOffsetBefore: 32, slidesOffsetAfter: 32 },
            1280: { slidesPerView: 4.2, spaceBetween: 16, slidesOffsetBefore: 32, slidesOffsetAfter: 32 },
          }}
          className="best-sellers-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="!h-auto pb-4">
              <ProductCardItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Dots */}
      <div className="best-sellers-pagination flex justify-center gap-1.5 px-5 md:px-8 pt-4" />
    </section>
  );
}
