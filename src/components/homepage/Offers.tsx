"use client";

import Image from "next/image";

const offers = [
  {
    id: 1,
    label: "Members Only",
    title: "Privileged Access",
    description: "Join CAFCO Membership for early access to new arrivals and exclusive seasonal archiving sales.",
    action: "Join Now",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    label: "Seasonal Edit",
    title: "The Winter Sale",
    description: "Complimentary shipping on all orders over $2500. Secure your pieces for the coming season.",
    action: "Shop The Edit",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    label: "Design Services",
    title: "Interior Concierge",
    description: "Book a complimentary consultation with our design experts to curate your perfect sanctuary.",
    action: "Book Appointment",
    image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Offers() {
  return (
    <section className="bg-creme py-4 md:py-8">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="group relative h-[60vh] md:h-[70vh] flex flex-col justify-between p-8 md:p-12 overflow-hidden cursor-pointer">

              {/* Image Background Layer (Always Visible) */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Black overlay that appears on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-out z-10" />
              </div>

              {/* Content Layer (Top) */}
              <div className="relative z-20 text-creme">
                <span className="inline-block text-[0.6rem] font-primary uppercase tracking-[0.25em] mb-4 text-creme/70">
                  {offer.label}
                </span>
                <h3 className="text-3xl md:text-4xl font-secondary font-medium leading-[1.1]">
                  {offer.title}
                </h3>
              </div>

              {/* Action Layer (Bottom) */}
              <div className="relative z-20 mt-auto text-creme">
                <p className="text-sm font-primary leading-relaxed max-w-xs mb-8 text-creme/80">
                  {offer.description}
                </p>

                <div className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-semibold border-b border-creme/50 pb-1">
                  {offer.action}
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
