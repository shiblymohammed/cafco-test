"use client";

import Image from "next/image";
import { useState } from "react";
import { ProductCard, ProductCardImage, ProductCardImageContainer, ProductCardTitle, ProductCardMeta, ProductCardWishlist, ProductCardQuickAdd } from "@/src/components/ui/ProductCard";

// Mock Data
const product = {
  id: 1,
  name: "The Noir Lounge Chair",
  price: 1200,
  description: "A masterclass in reduction. The Noir Lounge Chair combines a sculptural, solid ash wood frame with deep, midnight black velvet upholstery. Designed for the modern sanctuary, its low profile and wide seat offer an embrace of pure comfort.",
  dimensions: "W 85cm x D 90cm x H 75cm",
  care: "Professional upholstery cleaning recommended. Dust wood with a soft, dry cloth.",
  shipping: "Made to order. Ships in 8-10 weeks. White glove delivery included.",
  images: [
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1200&auto=format&fit=crop",
  ],
  colors: ["Midnight", "Ivory", "Charcoal"],
  materials: ["Velvet", "Ash Wood", "Brass"],
};

const relatedProducts = [
    { id: 2, name: "Obsidian Side Table", collection: "Living", category: "Tables", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600" },
    { id: 3, name: "Alabaster Pendant", collection: "Lighting", category: "Pendants", image: "https://images.unsplash.com/photo-1513506003011-38f366677b09?w=600" },
    { id: 4, name: "Travertine Vessel", collection: "Decor", category: "Ceramics", image: "https://images.unsplash.com/photo-1612152605347-f93296cb657d?w=600" },
    { id: 5, name: "Velvet Ottoman", collection: "Living", category: "Seating", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600" },
];


export default function ProductDetailsPage() {
  const [selectedColor, setSelectedColor] = useState("Midnight");
  const [activeAccordion, setActiveAccordion] = useState<string | null>("description");

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="bg-creme min-h-screen pt-20 md:pt-24 border-b border-alpha/10">
      
      {/* Product Section */}
      <section className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          
          {/* Left: Gallery (Sticky/Scroll) */}
          <div className="lg:col-span-8 lg:border-r border-alpha/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-1 lg:p-0">
               {product.images.map((img, i) => (
                   <div key={i} className={`relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group ${i === 0 ? "md:col-span-2 md:aspect-[16/10]" : ""}`}>
                        <Image 
                            src={img} 
                            alt={`View ${i + 1}`} 
                            fill 
                            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                        />
                   </div>
               ))}
            </div>
          </div>

          {/* Right: Details (Sticky Sidebar) */}
          <div className="lg:col-span-4 relative">
             <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto px-6 py-12 md:px-12 md:py-16 flex flex-col">
                
                {/* Header */}
                <div className="mb-8">
                    <span className="text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-2 block">
                        Collection 2024
                    </span>
                    <h1 className="text-4xl md:text-5xl font-secondary text-alpha leading-[1.1] mb-4">
                        {product.name}
                    </h1>
                    <p className="text-xl font-primary text-alpha/80">
                        ${product.price.toLocaleString()}
                    </p>
                </div>

                {/* Color Selection */}
                <div className="mb-10">
                    <span className="text-xs font-primary uppercase tracking-widest text-alpha/60 mb-4 block">
                        Upholstery: <span className="text-alpha">{selectedColor}</span>
                    </span>
                    <div className="flex gap-3">
                        {product.colors.map((color) => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`w-8 h-8 rounded-full border border-alpha/20 flex items-center justify-center transition-all ${
                                    selectedColor === color ? "ring-1 ring-offset-2 ring-alpha bg-alpha text-creme" : "hover:border-alpha"
                                }`}
                                aria-label={`Select ${color}`}
                            >
                                <div className={`w-6 h-6 rounded-full border border-alpha/10 ${
                                    color === 'Midnight' ? 'bg-neutral-900' : 
                                    color === 'Ivory' ? 'bg-[#f5f5f0]' : 
                                    'bg-neutral-600'
                                }`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="mb-12 space-y-4">
                    <button className="w-full bg-alpha text-creme py-5 px-8 text-xs uppercase tracking-[0.2em] hover:bg-alpha/90 transition-colors flex items-center justify-center gap-4 group">
                        <span>Add To Cart</span>
                        <span className="w-px h-3 bg-creme/30" />
                        <span>${product.price.toLocaleString()}</span>
                    </button>
                    <button className="w-full border border-alpha/20 text-alpha py-4 px-8 text-xs uppercase tracking-[0.2em] hover:border-alpha transition-colors">
                        Save to Wishlist
                    </button>
                </div>

                {/* Accordions */}
                <div className="border-t border-alpha/10">
                    {/* Description */}
                    <div className="border-b border-alpha/10">
                        <button 
                            onClick={() => toggleAccordion('description')} 
                            className="w-full py-5 flex items-center justify-between text-left group"
                        >
                            <span className="text-xs font-secondary uppercase tracking-widest text-alpha">Description</span>
                            <span className={`text-xl font-light transform transition-transform duration-300 ${activeAccordion === 'description' ? 'rotate-45' : ''}`}>+</span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === 'description' ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                            <p className="text-sm font-primary text-alpha/70 leading-relaxed">
                                {product.description}
                            </p>
                        </div>
                    </div>

                    {/* Dimensions */}
                    <div className="border-b border-alpha/10">
                        <button 
                            onClick={() => toggleAccordion('dimensions')} 
                            className="w-full py-5 flex items-center justify-between text-left group"
                        >
                            <span className="text-xs font-secondary uppercase tracking-widest text-alpha">Dimensions</span>
                            <span className={`text-xl font-light transform transition-transform duration-300 ${activeAccordion === 'dimensions' ? 'rotate-45' : ''}`}>+</span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === 'dimensions' ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                            <p className="text-sm font-primary text-alpha/70 leading-relaxed">
                                {product.dimensions}
                            </p>
                        </div>
                    </div>

                    {/* Shipping */}
                    <div className="border-b border-alpha/10">
                        <button 
                            onClick={() => toggleAccordion('shipping')} 
                            className="w-full py-5 flex items-center justify-between text-left group"
                        >
                            <span className="text-xs font-secondary uppercase tracking-widest text-alpha">Shipping & Returns</span>
                            <span className={`text-xl font-light transform transition-transform duration-300 ${activeAccordion === 'shipping' ? 'rotate-45' : ''}`}>+</span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === 'shipping' ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                            <p className="text-sm font-primary text-alpha/70 leading-relaxed">
                                {product.shipping}
                            </p>
                        </div>
                    </div>
                </div>

             </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-24 border-t border-alpha/10">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-secondary text-alpha tracking-tight">
                    Complete The Look
                </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {relatedProducts.map(p => (
                     <ProductCard key={p.id} href={`/product/${p.name.toLowerCase().replace(/ /g, "-")}`}>
                        <ProductCardImageContainer>
                            <ProductCardWishlist />
                            <ProductCardImage src={p.image} alt={p.name} />
                            <ProductCardQuickAdd />
                        </ProductCardImageContainer>
                        <div className="flex flex-col items-start px-2 pt-4 pb-2">
                            <ProductCardTitle>{p.name}</ProductCardTitle>
                            <ProductCardMeta collection={p.collection} category={p.category} />
                        </div>
                    </ProductCard>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
}
