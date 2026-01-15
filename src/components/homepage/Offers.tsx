"use client";

import Image from "next/image";

const offers = [
  {
    id: 1,
    label: "UP TO 40% OFF",
    title: "SOFAS & SECTIONALS",
    description: "Limited time only. Shop now.",
    action: "SHOP NOW",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    label: "UP TO 30% OFF",
    title: "DINING TABLES",
    description: "Complimentary shipping on all orders over $2500.",
    action: "SHOP NOW",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    label: "UP TO 25% OFF",
    title: "BEDROOM FURNITURE",
    description: "Transform your space with our exclusive collection.",
    action: "SHOP NOW",
    image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    label: "UP TO 35% OFF",
    title: "OUTDOOR LIVING",
    description: "Discover fresh designs for the new season.",
    action: "SHOP NOW",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Offers() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[0.65rem] font-primary uppercase tracking-[0.3em] text-gold mb-4">
            Exclusive Benefits
          </p>
          <h2 className="text-4xl sm:text-5xl text-alpha font-secondary tracking-tight">
            Special Offers
          </h2>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <a
              key={offer.id}
              href={`/offers/${offer.id}`}
              className="group relative flex flex-col bg-white overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-8 flex flex-col items-center text-center bg-white">
                <h3 className="text-3xl sm:text-4xl font-semibold text-[#2C3E50] tracking-tight mb-2">
                  {offer.label}
                </h3>
                <p className="text-lg sm:text-xl font-medium text-[#2C3E50] mb-4 uppercase tracking-wide">
                  {offer.title}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">
                  {offer.description}
                </p>

                {/* Button */}
                <button className="mt-auto px-10 py-4 bg-[#1a2332] text-white text-sm font-medium uppercase tracking-wider hover:bg-[#2C3E50] hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out">
                  {offer.action}
                </button>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="/offers"
            className="inline-flex items-center gap-4 px-8 py-4 border border-alpha/20 text-xs font-primary uppercase tracking-[0.15em] text-alpha hover:bg-alpha hover:text-ivory hover:border-alpha transition-all duration-300"
          >
            View All Offers
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
