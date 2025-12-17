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
      className="group relative block overflow-hidden h-full w-full max-w-5xl mx-auto shadow-2xl rounded-sm cursor-pointer border border-alpha/10 bg-creme"
    >
      <div className="absolute inset-0">
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
      
      <div className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10 bg-creme/95 backdrop-blur-sm p-6 text-center border border-alpha/10 transform transition-transform duration-500 group-hover:-translate-y-2">
        <p className="text-[0.65rem] font-primary uppercase tracking-[0.25em] text-alpha/60 mb-2">
          {collection.subtitle}
        </p>
        <h3 className="text-2xl md:text-3xl font-secondary text-alpha italic tracking-tight mb-4">
          {collection.title}
        </h3>
        <span className="inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-widest text-alpha border-b border-alpha/30 pb-0.5 group-hover:border-alpha transition-colors duration-300">
          View Collection
        </span>
      </div>
    </a>
  );
}

export default function Collections() {
  return (
    <section className="bg-creme py-12 md:py-20 border-t border-black/5">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-4 mb-10 text-center">
        <div className="animate-slide-up">
          <p className="text-xs font-primary uppercase tracking-[0.2em] text-alpha/60 mb-1.5">
            Seasonal Edits
          </p>
          <h2 className="text-3xl md:text-5xl text-alpha font-secondary font-medium tracking-tight">
            Featured Collections
          </h2>
        </div>
      </div>

      {/* Stacked Scroll Container */}
      <div className="px-4 max-w-[1920px] mx-auto min-h-screen">
        <div className="flex flex-col gap-0 md:gap-0">
          {collections.map((collection, index) => (
            <div 
                key={collection.id} 
                className="sticky top-20 md:top-24 h-[80vh] w-full flex items-center justify-center py-4"
                style={{ zIndex: index + 1 }}
            >
                <CollectionCard collection={collection} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
