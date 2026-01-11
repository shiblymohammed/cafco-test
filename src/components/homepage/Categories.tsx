"use client";
import Image from "next/image";

interface Category {
  id: number;
  name: string;
  caption: string;
  image: string;
  isLarge?: boolean;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Sofas",
    caption: "Sofas, armchairs & more",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    isLarge: true,
  },
  {
    id: 2,
    name: "Tables",
    caption: "Dining & side tables",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Coffee Tables",
    caption: "Center pieces",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Chairs",
    caption: "Seating solutions",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Storage",
    caption: "Organize beautifully",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    name: "Rugs",
    caption: "Floor coverings",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    name: "Lamps",
    caption: "Illuminate your space",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=400&fit=crop",
  },
];

// Desktop bento card with hover effects
function DesktopCategoryCard({ category, isLarge = false }: { category: Category; isLarge?: boolean }) {
  return (
    <a
      href={`/category/${category.name.toLowerCase().replace(" ", "-")}`}
      className={`group relative overflow-hidden cursor-pointer ${isLarge ? "row-span-2" : ""
        }`}
    >
      <div className="absolute inset-0">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
          sizes={isLarge ? "(max-width: 768px) 100vw, 25vw" : "(max-width: 768px) 50vw, 25vw"}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-alpha/70 via-alpha/20 to-transparent transition-all duration-500 group-hover:via-alpha/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-xl md:text-2xl font-secondary text-text-inverse tracking-tight uppercase">
          {category.name}
        </h3>
      </div>
    </a>
  );
}

// Mobile card - compact with visible content
// Mobile card - compact with visible content
function MobileCategoryCard({ category }: { category: Category }) {
  return (
    <a
      href={`/category/${category.name.toLowerCase().replace(" ", "-")}`}
      className="group block relative overflow-hidden"
    >
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-normal group-active:scale-105"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-alpha/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
          <h3 className="text-xl font-secondary text-text-inverse leading-none tracking-tight mb-1">
            {category.name}
          </h3>
          <p className="text-[0.6rem] uppercase tracking-widest text-text-inverse/70">
            View Collection
          </p>
        </div>
      </div>
    </a>
  );
}

export default function Categories() {
  return (
    <section className="bg-creme py-12 md:py-20 border-t border-black/5">
      {/* Editorial Header */}
      <div className="max-w-[1440px] mx-auto px-4 mb-10 md:mb-16 text-center">
        <div className="animate-slide-up">
          <p className="text-xs font-primary uppercase tracking-[0.2em] text-alpha/60 mb-1.5">
            Curated Spaces
          </p>
          <h2 className="text-3xl md:text-5xl text-alpha font-secondary font-medium tracking-tight">
            Shop by Category
          </h2>
        </div>
      </div>

      {/* Mobile: 2-column grid */}
      <div className="md:hidden px-2">
        <div className="grid grid-cols-2 gap-1.5">
          {categories.map((category) => (
            <MobileCategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="flex justify-center mt-8">
          <a
            href="/categories"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-semibold border-b border-alpha pb-1 hover:text-tango hover:border-tango transition-colors duration-300"
          >
            View All Categories
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Desktop: Bento Grid - 1 large left + 6 small right */}
      <div className="hidden md:block px-4">
        <div className="grid grid-cols-4 grid-rows-2 gap-4 animate-fade-in" style={{ height: "750px" }}>
          {/* Large tile on the left spanning 2 rows */}
          <DesktopCategoryCard category={categories[0]} isLarge={true} />

          {/* 6 smaller tiles in a 3x2 grid on the right */}
          {categories.slice(1).map((category) => (
            <DesktopCategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Desktop View All Link */}
        <div className="flex justify-center mt-12">
          <a
            href="/categories"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-semibold border-b border-alpha pb-1 hover:text-tango hover:border-tango transition-colors duration-300"
          >
            View All Categories
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
