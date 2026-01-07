"use client";

import Image from "next/image";
import Link from "next/link";
import { collections, Collection } from "@/src/data/collections";

export default function CollectionsPage() {
  const featuredCollection = collections.find(c => c.featured);
  const otherCollections = collections.filter(c => !c.featured);

  return (
    <main className="pt-20 bg-creme min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-3 text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-4">
              <span className="w-8 h-[1px] bg-alpha/30"></span>
              Curated Edits
              <span className="w-8 h-[1px] bg-alpha/30"></span>
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-secondary text-alpha leading-[0.95] tracking-tight mb-6">
              Our <span className="italic font-light">Collections</span>
            </h1>
            <p className="text-base md:text-lg text-alpha/70 font-primary leading-relaxed max-w-xl mx-auto">
              Thoughtfully curated collections that bring together pieces united by aesthetic vision, material excellence, and design philosophy.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      {featuredCollection && (
        <section className="py-12 md:py-20">
          <div className="max-w-[1440px] mx-auto px-4 md:px-12">
            <Link
              href={`/collections/${featuredCollection.title.toLowerCase().replace(/ /g, "-")}`}
              className="group block"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden">
                  <Image
                    src={featuredCollection.image}
                    alt={featuredCollection.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-alpha/10 group-hover:bg-alpha/0 transition-colors duration-500" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-alpha text-creme text-[10px] uppercase tracking-wider font-primary">
                    Featured
                  </span>
                </div>
                <div className="lg:pr-12">
                  <span className="text-xs font-primary uppercase tracking-[0.2em] text-alpha/50 mb-3 block">
                    {featuredCollection.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-secondary text-alpha leading-tight mb-4 group-hover:text-tango transition-colors duration-300">
                    {featuredCollection.title}
                  </h2>
                  <p className="text-base md:text-lg text-alpha/70 font-primary leading-relaxed mb-6">
                    {featuredCollection.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-alpha/50 font-primary uppercase tracking-wider mb-8">
                    <span>{featuredCollection.itemCount} Pieces</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold border-b border-alpha pb-1 group-hover:border-tango group-hover:text-tango transition-colors duration-300">
                    Explore Collection
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Collections Grid */}
      <section className="py-12 md:py-20 border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-3 text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-4">
              <span className="w-8 h-[1px] bg-alpha/30"></span>
              All Collections
              <span className="w-8 h-[1px] bg-alpha/30"></span>
            </span>
            <h2 className="text-3xl md:text-4xl font-secondary text-alpha leading-tight">
              Explore Our <span className="italic font-light">Edits</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherCollections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-alpha">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-3 text-xs font-primary uppercase tracking-[0.25em] text-creme/50 mb-4">
              <span className="w-8 h-[1px] bg-creme/30"></span>
              Design Services
              <span className="w-8 h-[1px] bg-creme/30"></span>
            </span>
            <h3 className="text-3xl md:text-4xl font-secondary text-creme leading-tight mb-4">
              Need Help <span className="italic font-light">Curating?</span>
            </h3>
            <p className="text-sm text-creme/60 font-primary mb-8 max-w-md mx-auto">
              Our design consultants can help you select pieces that perfectly complement your space and lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-creme text-alpha text-xs uppercase tracking-widest font-primary hover:bg-creme/90 transition-colors"
              >
                Book a Consultation
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-creme/30 text-creme text-xs uppercase tracking-widest font-primary hover:bg-creme/10 transition-colors"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link
      href={`/collections/${collection.title.toLowerCase().replace(/ /g, "-")}`}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden mb-5">
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-alpha/60 via-alpha/20 to-transparent" />
        <div className="absolute inset-0 bg-alpha/0 group-hover:bg-alpha/10 transition-colors duration-500" />
        
        {/* Overlay Content */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="text-[0.65rem] font-primary uppercase tracking-[0.2em] text-creme/70 mb-1">
            {collection.subtitle}
          </p>
          <h3 className="text-2xl md:text-3xl font-secondary text-creme tracking-tight mb-2">
            {collection.title}
          </h3>
          <span className="text-xs text-creme/60 font-primary">
            {collection.itemCount} Pieces
          </span>
        </div>
      </div>
      
      <p className="text-sm text-alpha/70 font-primary leading-relaxed mb-3 line-clamp-2">
        {collection.description}
      </p>
      
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-primary text-alpha/80 group-hover:text-tango transition-colors duration-300">
        View Collection
        <svg
          className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
