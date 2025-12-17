"use client";

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
  {
    id: 107,
    name: "Walnut Credenza",
    description: "Mid-century storage solution",
    collection: "Storage",
    category: "Cabinets",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 108,
    name: "Brass Floor Lamp",
    description: "Adjustable reading light",
    collection: "Lighting",
    category: "Floor Lamps",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
    badge: "gold",
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

export default function HotSelling() {
  return (
    <section className="bg-creme py-16 md:py-24 border-t border-black/5">
      <div className="max-w-[1920px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
            <span className="block text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-1.5">
              Curated Selection
            </span>
            <h2 className="text-3xl md:text-5xl font-secondary text-alpha">
              Trending Now
            </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 md:gap-2">
            {hotProducts.map((product) => (
                <ProductCardItem key={product.id} product={product} />
            ))}
        </div>
        
        {/* Footer Link */}
        <div className="mt-12 text-center">
            <a href="/collections/trending" className="inline-block text-xs uppercase tracking-widest border-b border-alpha/30 pb-1 hover:border-alpha transition-colors duration-300">
                View All Trending
            </a>
        </div>
      </div>
    </section>
  );
}
