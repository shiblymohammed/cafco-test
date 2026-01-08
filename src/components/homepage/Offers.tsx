"use client";

import Image from "next/image";

const offers = [
  {
    id: 1,
    label: "Members Only",
    title: "Privileged Access",
    description: "Join for early access to new arrivals and exclusive sales.",
    action: "Join Now",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    label: "Seasonal Edit",
    title: "The Winter Sale",
    description: "Complimentary shipping on all orders over $2500.",
    action: "Shop The Edit",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    label: "Design Services",
    title: "Interior Concierge",
    description: "Book a complimentary consultation with our design experts.",
    action: "Book Now",
    image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=800&auto=format&fit=crop",
  },
];

function OfferCard({ offer }: { offer: (typeof offers)[0] }) {
  return (
    <a
      href={`/offers/${offer.id}`}
      className="group relative block overflow-hidden aspect-[16/9] sm:aspect-[4/5] md:aspect-[3/4] cursor-pointer"
    >
      <Image
        src={offer.image}
        alt={offer.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="text-[0.65rem] font-primary uppercase tracking-[0.2em] text-white/70 mb-1">
          {offer.label}
        </p>
        <h3 className="text-xl md:text-2xl font-secondary text-white tracking-tight mb-2">
          {offer.title}
        </h3>
        <p className="text-xs text-white/70 mb-3 line-clamp-2">{offer.description}</p>
        <span className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-widest text-white/90 border-b border-white/40 pb-0.5 group-hover:border-white transition-colors duration-300">
          {offer.action}
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

export default function Offers() {
  return (
    <section className="bg-creme py-8 sm:py-12 md:py-20 border-t border-black/5">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-4 mb-6 sm:mb-10 md:mb-16 text-center">
        <p className="text-xs font-primary uppercase tracking-[0.2em] text-alpha/60 mb-1.5">
          Exclusive
        </p>
        <h2 className="text-3xl md:text-4xl text-alpha font-secondary font-medium tracking-tight">
          Special Offers
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <a
            href="/offers"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-alpha/80 hover:text-alpha border-b border-alpha/30 hover:border-alpha pb-0.5 transition-colors duration-300"
          >
            View All Offers
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
