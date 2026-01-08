"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const imageContainerRef = useRef<HTMLDivElement>(null);

    const MAGNIFIER_SIZE = 200;
    const ZOOM_LEVEL = 2.5;
    const AUTO_SWITCH_INTERVAL = 4000; // 4 seconds

    const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });

    const toggleAccordion = (id: string) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    const handlePrevImage = useCallback(() => {
        setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
    }, []);

    const handleNextImage = useCallback(() => {
        setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
    }, []);

    // Auto-switch images
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            handleNextImage();
        }, AUTO_SWITCH_INTERVAL);

        return () => clearInterval(interval);
    }, [isAutoPlaying, handleNextImage]);

    // Update container dimensions
    useEffect(() => {
        if (imageContainerRef.current) {
            const rect = imageContainerRef.current.getBoundingClientRect();
            setImgDimensions({ width: rect.width, height: rect.height });
        }
    }, [currentImageIndex]);

    // Pause auto-play on hover
    const handleMouseEnter = () => {
        setIsAutoPlaying(false);
        if (imageContainerRef.current) {
            const rect = imageContainerRef.current.getBoundingClientRect();
            setImgDimensions({ width: rect.width, height: rect.height });
        }
    };

    const handleMouseLeave = () => {
        setIsAutoPlaying(true);
        setShowMagnifier(false);
    };

    // Magnifier logic
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!imageContainerRef.current) return;

        const rect = imageContainerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setCursorPosition({ x, y });
        setMagnifierPosition({ x, y });
        setShowMagnifier(true);
    };

    return (
        <div className="bg-creme min-h-screen pt-16 md:pt-20 lg:pt-24 border-b border-alpha/10">

            {/* Product Section */}
            <section className="max-w-[1920px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12">

                    {/* Left: Gallery */}
                    <div className="lg:col-span-7 lg:border-r border-alpha/10">
                        <div className="p-0 md:p-6 lg:p-8">

                            {/* Main Image */}
                            <div
                                ref={imageContainerRef}
                                className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden bg-[#f5f5f5] group cursor-crosshair"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                            >
                                <Image
                                    src={product.images[currentImageIndex]}
                                    alt={`${product.name} - View ${currentImageIndex + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    className="object-cover"
                                    priority
                                />

                                {/* Magnifier Glass */}
                                {showMagnifier && (
                                    <div
                                        className="hidden md:block absolute pointer-events-none rounded-full border-4 border-white shadow-2xl overflow-hidden z-10"
                                        style={{
                                            width: MAGNIFIER_SIZE,
                                            height: MAGNIFIER_SIZE,
                                            left: cursorPosition.x - MAGNIFIER_SIZE / 2,
                                            top: cursorPosition.y - MAGNIFIER_SIZE / 2,
                                        }}
                                    >
                                        <div
                                            className="w-full h-full"
                                            style={{
                                                backgroundImage: `url(${product.images[currentImageIndex]})`,
                                                backgroundSize: `${imgDimensions.width * ZOOM_LEVEL}px ${imgDimensions.height * ZOOM_LEVEL}px`,
                                                backgroundPosition: `-${magnifierPosition.x * ZOOM_LEVEL - MAGNIFIER_SIZE / 2}px -${magnifierPosition.y * ZOOM_LEVEL - MAGNIFIER_SIZE / 2}px`,
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                        />
                                    </div>
                                )}

                                {/* Navigation Arrows - Always visible on mobile */}
                                <button
                                    onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 md:bg-white hover:bg-white rounded-full flex items-center justify-center shadow-md md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 z-20"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-alpha" />
                                </button>

                                <button
                                    onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 md:bg-white hover:bg-white rounded-full flex items-center justify-center shadow-md md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 z-20"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-alpha" />
                                </button>

                                {/* Progress Indicator */}
                                <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-20">
                                    {product.images.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentImageIndex(i)}
                                            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${currentImageIndex === i
                                                ? 'bg-alpha w-5 md:w-6'
                                                : 'bg-alpha/40 hover:bg-alpha/60 w-1.5 md:w-2'
                                                }`}
                                            aria-label={`Go to image ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Thumbnails - Below Main Image */}
                            <div className="flex gap-2 md:gap-3 overflow-x-auto p-3 md:p-0 md:pt-4">
                                {product.images.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentImageIndex(i)}
                                        className={`relative w-16 h-16 md:w-24 md:h-24 flex-shrink-0 overflow-hidden bg-[#f5f5f5] transition-all duration-200 ${currentImageIndex === i
                                            ? 'ring-2 ring-alpha'
                                            : 'opacity-60 hover:opacity-100'
                                            }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Thumbnail ${i + 1}`}
                                            fill
                                            sizes="96px"
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Details (Sticky Sidebar) */}
                    <div className="lg:col-span-5 relative">
                        <div className="lg:sticky lg:top-24 px-4 py-6 md:px-10 md:py-8 lg:px-12 lg:py-10 flex flex-col">

                            {/* Header */}
                            <div className="mb-6 md:mb-8">
                                <span className="text-[10px] md:text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-1 md:mb-2 block">
                                    Collection 2024
                                </span>
                                <h1 className="text-2xl md:text-4xl lg:text-5xl font-secondary text-alpha leading-[1.1] mb-2 md:mb-4">
                                    {product.name}
                                </h1>
                                <p className="text-lg md:text-xl font-primary text-alpha/80">
                                    ${product.price.toLocaleString()}
                                </p>
                            </div>

                            {/* Color Selection */}
                            <div className="mb-6 md:mb-10">
                                <span className="text-[10px] md:text-xs font-primary uppercase tracking-widest text-alpha/60 mb-3 md:mb-4 block">
                                    Upholstery: <span className="text-alpha">{selectedColor}</span>
                                </span>
                                <div className="flex gap-2 md:gap-3">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-8 h-8 md:w-10 md:h-10 rounded-full border border-alpha/20 flex items-center justify-center transition-all ${selectedColor === color ? "ring-1 ring-offset-2 ring-alpha bg-alpha text-creme" : "hover:border-alpha"
                                                }`}
                                            aria-label={`Select ${color}`}
                                        >
                                            <div className={`w-6 h-6 md:w-7 md:h-7 rounded-full border border-alpha/10 ${color === 'Midnight' ? 'bg-neutral-900' :
                                                color === 'Ivory' ? 'bg-[#f5f5f0]' :
                                                    'bg-neutral-600'
                                                }`} />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="mb-6 md:mb-12 space-y-3 md:space-y-4">
                                <button className="w-full bg-alpha text-creme py-4 md:py-5 px-6 md:px-8 text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-alpha/90 transition-colors flex items-center justify-center gap-3 md:gap-4 group">
                                    <span>Add To Cart</span>
                                    <span className="w-px h-3 bg-creme/30" />
                                    <span>${product.price.toLocaleString()}</span>
                                </button>
                                <button className="w-full border border-alpha/20 text-alpha py-3 md:py-4 px-6 md:px-8 text-[10px] md:text-xs uppercase tracking-[0.2em] hover:border-alpha transition-colors">
                                    Save to Wishlist
                                </button>
                            </div>

                            {/* Accordions */}
                            <div className="border-t border-alpha/10">
                                {/* Description */}
                                <div className="border-b border-alpha/10">
                                    <button
                                        onClick={() => toggleAccordion('description')}
                                        className="w-full py-4 md:py-5 flex items-center justify-between text-left group"
                                    >
                                        <span className="text-[10px] md:text-xs font-secondary uppercase tracking-widest text-alpha">Description</span>
                                        <span className={`text-lg md:text-xl font-light transform transition-transform duration-300 ${activeAccordion === 'description' ? 'rotate-45' : ''}`}>+</span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === 'description' ? 'max-h-96 opacity-100 mb-4 md:mb-6' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-xs md:text-sm font-primary text-alpha/70 leading-relaxed">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Dimensions */}
                                <div className="border-b border-alpha/10">
                                    <button
                                        onClick={() => toggleAccordion('dimensions')}
                                        className="w-full py-4 md:py-5 flex items-center justify-between text-left group"
                                    >
                                        <span className="text-[10px] md:text-xs font-secondary uppercase tracking-widest text-alpha">Dimensions</span>
                                        <span className={`text-lg md:text-xl font-light transform transition-transform duration-300 ${activeAccordion === 'dimensions' ? 'rotate-45' : ''}`}>+</span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === 'dimensions' ? 'max-h-40 opacity-100 mb-4 md:mb-6' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-xs md:text-sm font-primary text-alpha/70 leading-relaxed">
                                            {product.dimensions}
                                        </p>
                                    </div>
                                </div>

                                {/* Shipping */}
                                <div className="border-b border-alpha/10">
                                    <button
                                        onClick={() => toggleAccordion('shipping')}
                                        className="w-full py-4 md:py-5 flex items-center justify-between text-left group"
                                    >
                                        <span className="text-[10px] md:text-xs font-secondary uppercase tracking-widest text-alpha">Shipping & Returns</span>
                                        <span className={`text-lg md:text-xl font-light transform transition-transform duration-300 ${activeAccordion === 'shipping' ? 'rotate-45' : ''}`}>+</span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === 'shipping' ? 'max-h-40 opacity-100 mb-4 md:mb-6' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-xs md:text-sm font-primary text-alpha/70 leading-relaxed">
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
            <section className="py-12 md:py-24 border-t border-alpha/10">
                <div className="max-w-[1920px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-secondary text-alpha tracking-tight">
                            Complete The Look
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                        {relatedProducts.map(p => (
                            <ProductCard key={p.id} href={`/product/${p.name.toLowerCase().replace(/ /g, "-")}`}>
                                <ProductCardImageContainer>
                                    <ProductCardWishlist />
                                    <ProductCardImage src={p.image} alt={p.name} />
                                    <ProductCardQuickAdd />
                                </ProductCardImageContainer>
                                <div className="flex flex-col items-start px-1 md:px-2 pt-2 md:pt-4 pb-2">
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
