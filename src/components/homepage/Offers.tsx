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
  {
    id: 4,
    label: "New Arrivals",
    title: "Spring Collection",
    description: "Discover fresh designs for the new season.",
    action: "Explore Now",
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
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {offers.map((offer, index) => (
            <a
              key={offer.id}
              href={`/offers/${offer.id}`}
              className="group relative flex flex-col sm:flex-row bg-creme overflow-hidden hover:shadow-card-hover transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative w-full sm:w-2/5 h-[220px] sm:h-auto sm:min-h-[280px] overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="400px"
                />
                {/* Number Overlay */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-alpha flex items-center justify-center">
                  <span className="text-sm font-primary text-ivory">0{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                <span className="text-[0.6rem] font-primary uppercase tracking-[0.2em] text-gold mb-3">
                  {offer.label}
                </span>
                <h3 className="text-2xl sm:text-3xl font-secondary text-alpha tracking-tight mb-3 group-hover:text-gold transition-colors duration-300">
                  {offer.title}
                </h3>
                <p className="text-sm text-alpha/60 leading-relaxed mb-6">
                  {offer.description}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <span className="text-[0.7rem] font-primary uppercase tracking-[0.15em] text-alpha group-hover:text-gold transition-colors duration-300">
                    {offer.action}
                  </span>
                  <div className="w-8 h-[1px] bg-alpha/30 group-hover:w-12 group-hover:bg-gold transition-all duration-300" />
                  <svg
                    className="w-4 h-4 text-alpha/40 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-[1px] h-8 bg-gold/30 group-hover:h-12 transition-all duration-300" />
                <div className="absolute top-0 right-0 w-8 h-[1px] bg-gold/30 group-hover:w-12 transition-all duration-300" />
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
