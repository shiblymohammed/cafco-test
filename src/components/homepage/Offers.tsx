"use client";

import Image from "next/image";

const offers = [
  {
    id: 1,
    label: "Members Only",
    title: "Privileged Access",
    description: "Join CAFCO Membership for early access to new arrivals and exclusive seasonal archiving sales.",
    action: "Join Now",
    image: "https://images.unsplash.com/photo-1596700683056-b7ff83f94ec6?q=80&w=800&auto=format&fit=crop",
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
    <section className="bg-creme border-t border-b border-alpha/10">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-alpha/10">
          {offers.map((offer) => (
            <div key={offer.id} className="group relative h-[60vh] md:h-[70vh] flex flex-col justify-between p-8 md:p-12 overflow-hidden cursor-pointer">
              
              {/* Content Layer (Top) */}
              <div className="relative z-20 transition-colors duration-500 group-hover:text-creme">
                <span className="inline-block text-[0.6rem] font-primary uppercase tracking-[0.25em] mb-4 text-alpha/60 group-hover:text-creme/60 transition-colors duration-500">
                  {offer.label}
                </span>
                <h3 className="text-3xl md:text-4xl font-secondary font-medium leading-[1.1] transition-colors duration-500">
                  {offer.title}
                </h3>
              </div>

               {/* Image Background Layer (Reveals on Hover) */}
               <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                <div className="absolute inset-0 bg-alpha/40 z-10" /> {/* Overlay for text readability */}
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
                />
              </div>

              {/* Action Layer (Bottom) */}
              <div className="relative z-20 mt-auto">
                <p className="text-sm font-primary leading-relaxed max-w-xs mb-8 text-alpha/70 group-hover:text-creme/80 transition-colors duration-500">
                  {offer.description}
                </p>
                
                <div className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-semibold border-b border-alpha/30 pb-1 group-hover:text-creme group-hover:border-creme/50 transition-colors duration-500">
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
