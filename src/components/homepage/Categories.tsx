"use client";
import Image from "next/image";

interface Category {
  id: number;
  name: string;
  caption: string;
  image: string;
  gridClass: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Living Room",
    caption: "Sofas, armchairs & more",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    name: "Bedroom",
    caption: "Rest in style",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    name: "Dining",
    caption: "Tables & chairs",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    name: "Office",
    caption: "Work from home essentials",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=400&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    name: "Outdoor",
    caption: "Patio & garden furniture",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    name: "Storage",
    caption: "Organize beautifully",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 7,
    name: "Lighting",
    caption: "Illuminate your space",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=400&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 8,
    name: "Decor",
    caption: "Finishing touches",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
];

// Desktop bento card with hover effects
function DesktopCategoryCard({ category }: { category: Category }) {
  return (
    <a
      href={`/category/${category.name.toLowerCase().replace(" ", "-")}`}
      className={`group relative overflow-hidden cursor-pointer ${category.gridClass} min-h-[300px] border border-transparent hover:border-text-inverse/20 transition-colors duration-500`}
    >
      <div className="absolute inset-0">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-alpha/90 via-alpha/10 to-transparent transition-all duration-500 group-hover:via-alpha/20" />
      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 transition-transform duration-500 ease-out group-hover:translate-y-0 text-center">
        <h3 className="text-3xl md:text-4xl font-secondary text-text-inverse tracking-tight mb-2">
          {category.name}
        </h3>
        <div className="h-[1px] w-0 mx-auto bg-text-inverse group-hover:w-16 transition-all duration-500 ease-out" />
        <p className="text-sm text-text-inverse/80 mt-3 font-primary uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
          Explore Collection
        </p>
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
      <div className="max-w-[1440px] mx-auto px-4 mb-8 text-center">
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
        
        {/* Mobile View All Button */}
        <div className="flex justify-center mt-5">
          <a
            href="/categories"
            className="flex items-center gap-2 px-5 py-2.5 text-small text-tango border border-tango rounded-button active:bg-tango active:text-text-inverse transition-all duration-fast tracking-wide"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Desktop: Bento Grid */}
      <div className="hidden md:block max-w-[1920px] mx-auto px-4">
        <div className="grid grid-cols-4 gap-2 animate-fade-in">
          {categories.map((category) => (
            <DesktopCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
