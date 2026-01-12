"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Category {
  id: number;
  name: string;
  caption: string;
  image: string;
  icon: React.ReactNode;
}

const SofaIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
    <path d="M8 40V28a4 4 0 014-4h40a4 4 0 014 4v12" />
    <path d="M4 40a4 4 0 014-4h48a4 4 0 014 4v8H4v-8z" />
    <path d="M12 48v4M52 48v4" />
  </svg>
);

const TableIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
    <rect x="8" y="20" width="48" height="6" rx="1" />
    <path d="M12 26v22M52 26v22" />
    <path d="M12 38h40" />
  </svg>
);

const CoffeeTableIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
    <rect x="10" y="28" width="44" height="4" rx="1" />
    <path d="M16 32v14M48 32v14" />
    <ellipse cx="32" cy="26" rx="8" ry="2" />
  </svg>
);

const ChairIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
    <path d="M20 44v8M44 44v8" />
    <rect x="16" y="32" width="32" height="12" rx="2" />
    <path d="M18 32V16a2 2 0 012-2h24a2 2 0 012 2v16" />
  </svg>
);


const StorageIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
    <rect x="12" y="12" width="40" height="40" rx="2" />
    <path d="M12 32h40" />
    <path d="M32 12v40" />
    <circle cx="26" cy="22" r="2" />
    <circle cx="38" cy="22" r="2" />
    <circle cx="26" cy="42" r="2" />
    <circle cx="38" cy="42" r="2" />
  </svg>
);

const RugIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
    <rect x="8" y="16" width="48" height="32" rx="2" />
    <path d="M8 22h48M8 42h48" />
    <path d="M16 22v20M48 22v20" />
  </svg>
);

const LampIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
    <path d="M24 12h16l4 24H20l4-24z" />
    <path d="M32 36v16" />
    <path d="M24 52h16" />
  </svg>
);

const categories: Category[] = [
  { id: 1, name: "Sofas", caption: "Sofas, armchairs & more", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop", icon: <SofaIcon /> },
  { id: 2, name: "Tables", caption: "Dining & side tables", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop", icon: <TableIcon /> },
  { id: 3, name: "Coffee Tables", caption: "Center pieces", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop", icon: <CoffeeTableIcon /> },
  { id: 4, name: "Chairs", caption: "Seating solutions", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=400&fit=crop", icon: <ChairIcon /> },
  { id: 5, name: "Storage", caption: "Organize beautifully", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop", icon: <StorageIcon /> },
  { id: 6, name: "Rugs", caption: "Floor coverings", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop", icon: <RugIcon /> },
  { id: 7, name: "Lamps", caption: "Illuminate your space", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=400&fit=crop", icon: <LampIcon /> },
];


function CategorySlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentCategory = categories[currentIndex];

  return (
    <a
      href={`/category/${currentCategory.name.toLowerCase().replace(" ", "-")}`}
      className="group relative h-full overflow-hidden cursor-pointer block"
    >
      {categories.map((category, index) => (
        <div
          key={category.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-alpha/70 via-alpha/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h3 className="text-2xl md:text-3xl font-secondary text-creme tracking-tight uppercase transition-all duration-500">
          {currentCategory.name}
        </h3>
        <p className="text-xs text-creme/70 mt-2 uppercase tracking-widest">{currentCategory.caption}</p>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={(e) => { e.preventDefault(); setCurrentIndex(index); }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-creme w-6" : "bg-creme/40"}`}
          />
        ))}
      </div>
    </a>
  );
}


function IconCategoryCard({ category, isTopRow, isBottomRow }: { category: Category; isTopRow: boolean; isBottomRow: boolean }) {
  const borderClasses = `${!isTopRow ? "border-t" : ""} ${!isBottomRow ? "border-b" : ""} border-l border-r border-alpha/10`;
  
  return (
    <a
      href={`/category/${category.name.toLowerCase().replace(" ", "-")}`}
      className={`group flex flex-col items-center justify-center py-6 px-2 bg-transparent hover:bg-alpha/5 transition-all duration-300 ${borderClasses}`}
    >
      <div className="text-alpha/60 group-hover:text-alpha transition-colors duration-300">
        {category.icon}
      </div>
      <h3 className="text-xs font-primary uppercase tracking-widest text-alpha/80 mt-3 group-hover:text-alpha transition-colors duration-300">
        {category.name}
      </h3>
    </a>
  );
}

function MobileCategoryCard({ category }: { category: Category }) {
  return (
    <a
      href={`/category/${category.name.toLowerCase().replace(" ", "-")}`}
      className="group flex flex-col items-center justify-center py-6 px-2 bg-transparent border border-alpha/10 hover:bg-alpha/5 transition-all duration-300"
    >
      <div className="text-alpha/60 group-hover:text-alpha transition-colors duration-300">
        {category.icon}
      </div>
      <h3 className="text-xs font-primary uppercase tracking-widest text-alpha/80 mt-3 group-hover:text-alpha transition-colors duration-300">
        {category.name}
      </h3>
    </a>
  );
}


export default function Categories() {
  const topRowCategories = categories.slice(0, 3);
  const bottomRowCategories = categories.slice(3, 6);

  return (
    <section className="bg-creme py-12 md:py-20 border-t border-black/5">
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

      {/* Mobile: Slideshow + Grid with icons */}
      <div className="md:hidden px-4">
        {/* Mobile Slideshow */}
        <div className="h-[280px] mb-4">
          <CategorySlideshow />
        </div>
        {/* Mobile Icon Grid */}
        <div className="grid grid-cols-3 gap-0">
          {categories.slice(0, 6).map((category) => (
            <MobileCategoryCard key={category.id} category={category} />
          ))}
        </div>
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

      {/* Desktop: Slideshow left + Icon grid right */}
      <div className="hidden md:block">
        <div className="w-full">
          <div className="grid grid-cols-12 gap-0" style={{ height: "400px" }}>
            {/* Left: Slideshow */}
            <div className="col-span-4">
              <CategorySlideshow />
            </div>
            {/* Right: Icon grid */}
            <div className="col-span-8 grid grid-cols-3 grid-rows-2">
              {topRowCategories.map((category) => (
                <IconCategoryCard key={category.id} category={category} isTopRow={true} isBottomRow={false} />
              ))}
              {bottomRowCategories.map((category) => (
                <IconCategoryCard key={category.id} category={category} isTopRow={false} isBottomRow={true} />
              ))}
            </div>
          </div>
        </div>
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
