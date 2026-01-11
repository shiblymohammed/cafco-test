"use client";

import Image from "next/image";
import Link from "next/link";
import { categories, Category } from "@/src/data/categories";

export default function CategoriesPage() {
  const featuredCategory = categories.find(c => c.featured);
  const otherCategories = categories.filter(c => !c.featured);

  return (
    <main className="pt-20 bg-creme min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-4 text-center">
          <p className="text-xs font-primary uppercase tracking-[0.2em] text-alpha/60 mb-1.5">
            Shop by Type
          </p>
          <h1 className="text-3xl md:text-5xl font-secondary text-alpha font-medium tracking-tight mb-4">
            All Categories
          </h1>
          <p className="text-sm md:text-base text-alpha/70 font-primary leading-relaxed max-w-lg mx-auto">
            Explore our complete range of furniture and home accessories, organized by type.
          </p>
        </div>
      </section>

      {/* Featured Category */}
      {featuredCategory && (
        <section className="py-12 md:py-16">
          <div className="max-w-[1440px] mx-auto px-4">
            <Link href={`/category/${featuredCategory.name.toLowerCase().replace(/ /g, "-")}`} className="group block" prefetch>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                <div className="relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden">
                  <Image src={featuredCategory.image} alt={featuredCategory.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-alpha/10 group-hover:bg-alpha/0 transition-colors duration-500" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-alpha text-creme text-[10px] uppercase tracking-wider font-primary">Featured</span>
                </div>
                <div className="lg:pr-8">
                  <span className="text-xs font-primary uppercase tracking-[0.2em] text-alpha/50 mb-2 block">{featuredCategory.caption}</span>
                  <h2 className="text-2xl md:text-4xl font-secondary text-alpha leading-tight mb-3 group-hover:text-tango transition-colors duration-300">{featuredCategory.name}</h2>
                  <p className="text-sm md:text-base text-alpha/70 font-primary leading-relaxed mb-4">{featuredCategory.description}</p>
                  <span className="text-xs text-alpha/50 font-primary uppercase tracking-wider mb-6 block">{featuredCategory.itemCount} Products</span>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold border-b border-alpha pb-1 group-hover:border-tango group-hover:text-tango transition-colors duration-300">
                    Shop {featuredCategory.name}
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Categories Grid */}
      <section className="py-12 md:py-16 border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs font-primary uppercase tracking-[0.2em] text-alpha/60 mb-1.5">
              Browse All
            </p>
            <h2 className="text-2xl md:text-4xl font-secondary text-alpha font-medium tracking-tight">
              Shop by Category
            </h2>
          </div>
          <div className="hidden md:grid grid-cols-4 gap-4" style={{ gridAutoRows: "200px" }}>
            {otherCategories.map((category, index) => (
              <CategoryCard key={category.id} category={category} isLarge={index === 0 || index === 4} />
            ))}
          </div>
          <div className="md:hidden grid grid-cols-2 gap-2">
            {otherCategories.map((category) => (
              <MobileCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 md:py-20 bg-ivory border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-secondary text-alpha">350+</span>
              <p className="text-xs uppercase tracking-widest text-alpha/50 mt-1 font-primary">Products</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-secondary text-alpha">10</span>
              <p className="text-xs uppercase tracking-widest text-alpha/50 mt-1 font-primary">Categories</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-secondary text-alpha">40+</span>
              <p className="text-xs uppercase tracking-widest text-alpha/50 mt-1 font-primary">Artisans</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-secondary text-alpha">25</span>
              <p className="text-xs uppercase tracking-widest text-alpha/50 mt-1 font-primary">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 bg-alpha">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs font-primary uppercase tracking-[0.2em] text-creme/50 mb-1.5">
              Curated For You
            </p>
            <h3 className="text-2xl md:text-4xl font-secondary text-creme font-medium tracking-tight mb-3">
              Explore Our Collections
            </h3>
            <p className="text-sm text-creme/60 font-primary mb-8 max-w-md mx-auto">
              Discover thoughtfully curated collections united by aesthetic vision and design philosophy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/collections" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-creme text-alpha text-xs uppercase tracking-widest font-primary hover:bg-creme/90 transition-colors">
                View Collections
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-creme/30 text-creme text-xs uppercase tracking-widest font-primary hover:bg-creme/10 transition-colors">
                Get Design Help
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


function CategoryCard({ category, isLarge = false }: { category: Category; isLarge?: boolean }) {
  const categorySlug = category.name.toLowerCase().replace(/ /g, "-");
  return (
    <Link href={`/category/${categorySlug}`} className={`group relative overflow-hidden ${isLarge ? "row-span-2" : ""}`}>
      <div className="absolute inset-0">
        <Image src={category.image} alt={category.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-alpha/70 via-alpha/20 to-transparent transition-all duration-500 group-hover:via-alpha/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <h3 className="text-xl md:text-2xl font-secondary text-creme tracking-tight uppercase mb-1">{category.name}</h3>
        <p className="text-[0.6rem] uppercase tracking-widest text-creme/70">{category.itemCount} Products</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="px-4 py-2 bg-creme text-alpha text-xs uppercase tracking-wider font-primary">Shop Now</span>
      </div>
    </Link>
  );
}

function MobileCategoryCard({ category }: { category: Category }) {
  const categorySlug = category.name.toLowerCase().replace(/ /g, "-");
  return (
    <Link href={`/category/${categorySlug}`} className="group block relative overflow-hidden">
      <div className="relative aspect-[3/4] w-full">
        <Image src={category.image} alt={category.name} fill className="object-cover transition-transform duration-normal group-active:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-alpha/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
          <h3 className="text-lg font-secondary text-creme leading-none tracking-tight mb-1">{category.name}</h3>
          <p className="text-[0.55rem] uppercase tracking-widest text-creme/70">{category.itemCount} Products</p>
        </div>
      </div>
    </Link>
  );
}
