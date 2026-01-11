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
      <section className="py-12 md:py-20 border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-4 text-center">
          <p className="text-xs font-primary uppercase tracking-[0.2em] text-alpha/60 mb-1.5">
            Curated Edits
          </p>
          <h1 className="text-3xl md:text-5xl font-secondary text-alpha font-medium tracking-tight mb-4">
            Our Collections
          </h1>
          <p className="text-sm md:text-base text-alpha/70 font-primary leading-relaxed max-w-lg mx-auto">
            Thoughtfully curated collections united by aesthetic vision and design philosophy.
          </p>
        </div>
      </section>

      {/* Featured Collection */}
      {featuredCollection && (
        <section className="py-12 md:py-16">
          <div className="max-w-[1440px] mx-auto px-4">
            <Link
              href={`/collections/${featuredCollection.title.toLowerCase().replace(/ /g, "-")}`}
              className="group block"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
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
                <div className="lg:pr-8">
                  <span className="text-xs font-primary uppercase tracking-[0.2em] text-alpha/50 mb-2 block">
                    {featuredCollection.subtitle}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-secondary text-alpha leading-tight mb-3 group-hover:text-tango transition-colors duration-300">
                    {featuredCollection.title}
                  </h2>
                  <p className="text-sm md:text-base text-alpha/70 font-primary leading-relaxed mb-4">
                    {featuredCollection.description}
                  </p>
                  <span className="text-xs text-alpha/50 font-primary uppercase tracking-wider mb-6 block">
                    {featuredCollection.itemCount} Pieces
                  </span>
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
      <section className="py-12 md:py-16 border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs font-primary uppercase tracking-[0.2em] text-alpha/60 mb-1.5">
              All Collections
            </p>
            <h2 className="text-2xl md:text-4xl font-secondary text-alpha font-medium tracking-tight">
              Explore Our Edits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {otherCollections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 bg-alpha">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs font-primary uppercase tracking-[0.2em] text-creme/50 mb-1.5">
              Design Services
            </p>
            <h3 className="text-2xl md:text-4xl font-secondary text-creme font-medium tracking-tight mb-3">
              Need Help Curating?
            </h3>
            <p className="text-sm text-creme/60 font-primary mb-8 max-w-md mx-auto">
              Our design consultants can help you select pieces that perfectly complement your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-creme text-alpha text-xs uppercase tracking-widest font-primary hover:bg-creme/90 transition-colors"
              >
                Book a Consultation
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-creme/30 text-creme text-xs uppercase tracking-widest font-primary hover:bg-creme/10 transition-colors"
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
      <div className="relative aspect-[4/5] overflow-hidden mb-4">
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-alpha/70 via-alpha/20 to-transparent" />
        
        {/* Overlay Content */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-[0.6rem] font-primary uppercase tracking-[0.2em] text-creme/70 mb-1">
            {collection.subtitle}
          </p>
          <h3 className="text-xl md:text-2xl font-secondary text-creme tracking-tight mb-1">
            {collection.title}
          </h3>
          <span className="text-[0.65rem] text-creme/60 font-primary uppercase tracking-wider">
            {collection.itemCount} Pieces
          </span>
        </div>
      </div>
      
      <p className="text-sm text-alpha/70 font-primary leading-relaxed mb-2 line-clamp-2">
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
