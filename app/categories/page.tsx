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
      <section className="py-16 md:py-24 border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-3 text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-4">
              <span className="w-8 h-[1px] bg-alpha/30"></span>
              Shop by Type
              <span className="w-8 h-[1px] bg-alpha/30"></span>
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-secondary text-alpha leading-[0.95] tracking-tight mb-6">
              All <span className="italic font-light">Categories</span>
            </h1>
            <p className="text-base md:text-lg text-alpha/70 font-primary leading-relaxed max-w-xl mx-auto">
              Explore our complete range of furniture and home accessories, organized by type to help you find exactly what you&apos;re looking for.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Category */}
      {featuredCategory && (
        <section className="py-12 md:py-20">
          <div className="max-w-[1440px] mx-auto px-4 md:px-12">
            <Link href={`/category/${featuredCategory.name.toLowerCase().replace(/ /g, "-")}`} className="group block" prefetch>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden">
                  <Image src={featuredCategory.image} alt={featuredCategory.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-alpha/10 group-hover:bg-alpha/0 transition-colors duration-500" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-alpha text-creme text-[10px] uppercase tracking-wider font-primary">Featured</span>
                </div>
                <div className="lg:pr-12">
                  <span className="text-xs font-primary uppercase tracking-[0.2em] text-alpha/50 mb-3 block">{featuredCategory.caption}</span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-secondary text-alpha leading-tight mb-4 group-hover:text-tango transition-colors duration-300">{featuredCategory.name}</h2>
                  <p className="text-base md:text-lg text-alpha/70 font-primary leading-relaxed mb-6">{featuredCategory.description}</p>
                  <div className="flex items-center gap-4 text-xs text-alpha/50 font-primary uppercase tracking-wider mb-8">
                    <span>{featuredCategory.itemCount} Products</span>
                  </div>
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
      <section className="py-12 md:py-20 border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-3 text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-4">
              <span className="w-8 h-[1px] bg-alpha/30"></span>
              Browse All
              <span className="w-8 h-[1px] bg-alpha/30"></span>
            </span>
            <h2 className="text-3xl md:text-4xl font-secondary text-alpha leading-tight">
              Shop by <span className="italic font-light">Category</span>
            </h2>
          </div>
          <div className="hidden md:grid grid-cols-4 gap-4" style={{ gridAutoRows: "200px" }}>
            {otherCategories.map((category, index) => (
              <CategoryCard key={category.id} category={category} isLarge={index === 0 || index === 4} />
            ))}
          </div>
          <div className="md:hidden grid grid-cols-2 gap-3">
            {otherCategories.map((category) => (
              <MobileCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-ivory border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-secondary text-alpha">350+</span>
              <p className="text-xs uppercase tracking-widest text-alpha/50 mt-2 font-primary">Products</p>
            </div>
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-secondary text-alpha">10</span>
              <p className="text-xs uppercase tracking-widest text-alpha/50 mt-2 font-primary">Categories</p>
            </div>
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-secondary text-alpha">40+</span>
              <p className="text-xs uppercase tracking-widest text-alpha/50 mt-2 font-primary">Artisans</p>
            </div>
            <div className="text-center">
              <span className="text-4xl md:text-5xl font-secondary text-alpha">25</span>
              <p className="text-xs uppercase tracking-widest text-alpha/50 mt-2 font-primary">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-alpha">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-3 text-xs font-primary uppercase tracking-[0.25em] text-creme/50 mb-4">
              <span className="w-8 h-[1px] bg-creme/30"></span>
              Curated For You
              <span className="w-8 h-[1px] bg-creme/30"></span>
            </span>
            <h3 className="text-3xl md:text-4xl font-secondary text-creme leading-tight mb-4">
              Explore Our <span className="italic font-light">Collections</span>
            </h3>
            <p className="text-sm text-creme/60 font-primary mb-8 max-w-md mx-auto">
              Discover thoughtfully curated collections that bring together pieces united by aesthetic vision and design philosophy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/collections" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-creme text-alpha text-xs uppercase tracking-widest font-primary hover:bg-creme/90 transition-colors">
                View Collections
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-creme/30 text-creme text-xs uppercase tracking-widest font-primary hover:bg-creme/10 transition-colors">
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
