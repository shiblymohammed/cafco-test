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
      className={`group relative overflow-hidden rounded-card cursor-pointer ${category.gridClass} min-h-[240px]`}
    >
      <div className="absolute inset-0">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-slow group-hover:scale-103"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-alpha/70 via-alpha/20 to-transparent transition-all duration-normal group-hover:from-alpha/80" />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-h3 md:text-h2 font-secondary font-bold text-text-inverse tracking-tight transition-transform duration-normal group-hover:-translate-y-1">
          {category.name}
        </h3>
        <p className="text-small text-text-inverse/80 mt-1 opacity-0 translate-y-2 transition-all duration-normal group-hover:opacity-100 group-hover:translate-y-0">
          {category.caption}
        </p>
        <div className="flex items-center gap-1 mt-3 opacity-0 translate-y-2 transition-all duration-normal delay-75 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="text-caption text-text-inverse/90 uppercase tracking-wider font-medium">
            Explore
          </span>
          <svg
            className="w-4 h-4 text-text-inverse/90 transition-transform duration-fast group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 rounded-card border border-transparent transition-colors duration-normal group-hover:border-text-inverse/20" />
    </a>
  );
}

// Mobile card - compact with visible content
function MobileCategoryCard({ category }: { category: Category }) {
  return (
    <a
      href={`/category/${category.name.toLowerCase().replace(" ", "-")}`}
      className="group block relative overflow-hidden rounded-card"
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-normal group-active:scale-105"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-alpha/80 via-alpha/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-body font-secondary font-bold text-text-inverse leading-tight">
            {category.name}
          </h3>
          <p className="text-caption text-text-inverse/70 mt-0.5">
            {category.caption}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function Categories() {
  return (
    <section className="bg-creme py-section-mobile md:py-section">
      {/* Section Header */}
      <div className="max-w-content mx-auto px-4 mb-5 md:mb-8">
        <div className="flex items-end justify-between">
          <div className="animate-slide-up">
            <p className="text-caption text-text-muted uppercase tracking-wider mb-2">
              Browse by
            </p>
            <h2 className="text-h2 md:text-h1 text-text-primary font-secondary font-bold uppercase tracking-tight">
              Categories
            </h2>
          </div>
          <a
            href="/categories"
            className="hidden md:flex items-center gap-2 px-4 py-2 text-small text-tango border border-tango rounded-button hover:bg-tango hover:text-text-inverse transition-all duration-fast tracking-wide group"
          >
            View All
            <svg
              className="w-4 h-4 transition-transform duration-fast group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile: 2-column grid */}
      <div className="md:hidden px-4">
        <div className="grid grid-cols-2 gap-3">
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
      <div className="hidden md:block max-w-content mx-auto px-4">
        <div className="grid grid-cols-4 gap-4 animate-fade-in">
          {categories.map((category) => (
            <DesktopCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
