"use client";

import { useEffect, useRef, useState } from "react";
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

const hotProducts: Product[] = [
  {
    id: 101,
    name: "Noir Lounge Chair",
    description: "Sculptural seating in midnight velvet",
    collection: "Living",
    category: "Seating",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop",
    badge: "new",
  },
  {
    id: 102,
    name: "Alabaster Pendant",
    description: "Carved stone hanging light",
    collection: "Lighting",
    category: "Pendants",
    image: "https://images.unsplash.com/photo-1513506003011-38f366677b09?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 103,
    name: "Obsidian Side Table",
    description: "High-gloss black lacquer finish",
    collection: "Living",
    category: "Tables",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop",
    badge: "limited",
  },
  {
    id: 104,
    name: "Bouclé Sofa",
    description: "Curved 3-seater in ivory wool",
    collection: "Living",
    category: "Sofas",
    image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 105,
    name: "Travertine Coffee Table",
    description: "Raw edge italian stone",
    collection: "Living",
    category: "Tables",
    image: "https://images.unsplash.com/photo-1595123550441-d377e017de6a?q=80&w=800&auto=format&fit=crop",
    badge: "sale",
  },
  {
    id: 106,
    name: "Artisan Vase",
    description: "Hand-thrown ceramic vessel",
    collection: "Decor",
    category: "Ceramics",
    image: "https://images.unsplash.com/photo-1612152605347-f93296cb657d?q=80&w=800&auto=format&fit=crop",
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
        <ProductCardDescription className="opacity-70">
          {product.description}
        </ProductCardDescription>
      </div>
    </ProductCard>
  );
}

export default function HotSelling() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const [leftStyle, setLeftStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const section = sectionRef.current;
    const leftPanel = leftPanelRef.current;
    if (!section || !leftPanel) return;

    const handleScroll = () => {
      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const leftPanelWidth = leftPanel.offsetWidth;

      // Section hasn't reached viewport top yet - left panel flows normally
      if (sectionRect.top >= 0) {
        setLeftStyle({
          position: "absolute",
          top: 0,
          left: 0,
          width: leftPanelWidth,
        });
      }
      // Section is in view and scrolling - left panel is fixed
      else if (sectionRect.top < 0 && sectionRect.bottom > viewportHeight) {
        setLeftStyle({
          position: "fixed",
          top: 0,
          left: sectionRect.left,
          width: leftPanelWidth,
        });
      }
      // Section is ending - left panel sticks to bottom
      else if (sectionRect.bottom <= viewportHeight) {
        setLeftStyle({
          position: "absolute",
          bottom: 0,
          top: "auto",
          left: 0,
          width: leftPanelWidth,
        });
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-creme border-t border-black/5">
      <div className="max-w-[1920px] mx-auto">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="relative h-[70vh] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
              alt="Trending Interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-alpha/80 via-alpha/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <span className="text-xs font-primary uppercase tracking-[0.3em] text-ivory/70 mb-4">
                Curated Selection
              </span>
              <h2 className="font-secondary text-4xl text-ivory leading-[1.1] mb-4">
                Trending<br />
                <span className="italic">Interiors</span><br />
                2026
              </h2>
              <p className="text-ivory/80 font-primary text-sm max-w-md leading-relaxed mb-6">
                Timeless designs that tap into enduring elegance.
              </p>
              <a 
                href="/collections/trending" 
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory border border-ivory/30 px-6 py-3 w-fit hover:bg-ivory hover:text-alpha transition-all duration-300"
              >
                Explore Collection
              </a>
            </div>
          </div>
          <div className="p-4 bg-ivory/50">
            <div className="grid grid-cols-2 gap-3">
              {hotProducts.map((product) => (
                <ProductCardItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          {/* Left Panel - Controlled via JS */}
          <div 
            ref={leftPanelRef}
            style={leftStyle}
            className="w-1/2 h-screen z-10"
          >
            <div className="relative h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
                alt="Trending Interior"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-alpha/80 via-alpha/40 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-12 xl:p-16">
                <span className="text-xs font-primary uppercase tracking-[0.3em] text-ivory/70 mb-4">
                  Curated Selection
                </span>
                <h2 className="font-secondary text-5xl xl:text-6xl 2xl:text-7xl text-ivory leading-[1.1] mb-6">
                  Trending<br />
                  <span className="italic">Interiors</span><br />
                  2026
                </h2>
                <p className="text-ivory/80 font-primary text-sm xl:text-base max-w-md leading-relaxed mb-8">
                  From organic shapes to hand-painted ceramics and natural textures, 
                  we believe in only crafting timeless designs that tap into enduring elegance.
                </p>
                <a 
                  href="/collections/trending" 
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory border border-ivory/30 px-6 py-3 w-fit hover:bg-ivory hover:text-alpha transition-all duration-300"
                >
                  Explore Collection
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel - Scrolling Products */}
          <div className="w-1/2 ml-auto bg-ivory/50">
            <div className="p-12 xl:p-16 pb-8 border-b border-alpha/10">
              <h3 className="font-secondary text-2xl xl:text-3xl text-alpha mb-2">
                Trending Now
              </h3>
              <p className="text-text-secondary text-sm">
                Discover our most sought-after pieces this season
              </p>
              <a 
                href="/collections/trending" 
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-alpha mt-4 hover:opacity-70 transition-opacity"
              >
                View All
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="p-8 xl:p-12">
              <div className="grid grid-cols-2 gap-4 xl:gap-6">
                {hotProducts.map((product) => (
                  <ProductCardItem key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
