"use client";

import Image from "next/image";

interface Collection {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const collections: Collection[] = [
  {
    id: 1,
    title: "Minimalist Luxe",
    subtitle: "The Art of Less",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Raw & Earthy",
    subtitle: "Organic Textures",
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Dark Academy",
    subtitle: "Moody Interiors",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2600&auto=format&fit=crop",
  },
];

function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <a
      href={`/collections/${collection.title.toLowerCase().replace(/ /g, "-")}`}
      className="group relative block overflow-hidden aspect-[16/9] sm:aspect-[4/5] md:aspect-[3/4] cursor-pointer"
    >
      <Image
        src={collection.image}
        alt={collection.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="text-[0.65rem] font-primary uppercase tracking-[0.2em] text-white/70 mb-1">
          {collection.subtitle}
        </p>
        <h3 className="text-xl md:text-2xl font-secondary text-white tracking-tight mb-3">
          {collection.title}
        </h3>
        <span className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-widest text-white/90 border-b border-white/40 pb-0.5 group-hover:border-white transition-colors duration-300">
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
      </div>
    </a>
  );
}

export default function Collections() {
  return (
    <section className="bg-creme py-8 sm:py-12 md:py-20 border-t border-black/5">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-4 mb-6 sm:mb-10 md:mb-16 text-center">
        <p className="text-xs font-primary uppercase tracking-[0.2em] text-alpha/60 mb-1.5">
          Seasonal Edits
        </p>
        <h2 className="text-3xl md:text-4xl text-alpha font-secondary font-medium tracking-tight">
          Featured Collections
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <a
            href="/collections"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-alpha/80 hover:text-alpha border-b border-alpha/30 hover:border-alpha pb-0.5 transition-colors duration-300"
          >
            View All Collections
            <svg
              className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
