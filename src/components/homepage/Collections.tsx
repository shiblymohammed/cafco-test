"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface Collection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const collections: Collection[] = [
  {
    id: 1,
    title: "Minimalist Luxe",
    subtitle: "The Art of Less",
    description: "Clean lines and refined elegance for the modern home.",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Raw & Earthy",
    subtitle: "Organic Textures",
    description: "Natural materials bringing warmth and authenticity.",
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Dark Academy",
    subtitle: "Moody Interiors",
    description: "Rich tones and classic pieces for sophisticated spaces.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Urban Edge",
    subtitle: "City Living",
    description: "Contemporary designs for compact urban spaces.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1920&auto=format&fit=crop",
  },
];

export default function Collections() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const minSwipeDistance = 50;
  const cardWidth = 72; // percentage
  const cardGap = 12; // pixels

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % collections.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + collections.length) % collections.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && !isAnimating) {
        nextSlide();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isDragging, isAnimating, nextSlide]);

  const handleDragStart = (clientX: number) => {
    if (isAnimating) return;
    setDragStart(clientX);
    setDragDelta(0);
    setIsDragging(true);
  };

  const handleDragMove = (clientX: number) => {
    if (isDragging && dragStart !== null) {
      setDragDelta(clientX - dragStart);
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    if (dragDelta > minSwipeDistance) {
      prevSlide();
    } else if (dragDelta < -minSwipeDistance) {
      nextSlide();
    }
    
    setIsDragging(false);
    setDragStart(null);
    setDragDelta(0);
  };

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    handleDragEnd();
  };

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const onMouseUp = () => {
    handleDragEnd();
  };

  const onMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  // Calculate position for each card
  const getCardStyle = (index: number) => {
    const totalCards = collections.length;
    let diff = index - activeIndex;
    
    // Handle wrapping for infinite loop
    if (diff > totalCards / 2) diff -= totalCards;
    if (diff < -totalCards / 2) diff += totalCards;
    
    // Base position calculation
    const baseOffset = diff * (cardWidth + 2); // cardWidth% + gap
    const dragOffset = isDragging ? (dragDelta / window.innerWidth) * 100 : 0;
    const translateX = baseOffset + dragOffset;
    
    // Opacity based on position
    const opacity = Math.abs(diff) === 0 ? 1 : Math.abs(diff) === 1 ? 0.5 : 0.3;
    
    // Scale for depth effect
    const scale = Math.abs(diff) === 0 ? 1 : 0.95;
    
    // Z-index
    const zIndex = 10 - Math.abs(diff);

    return {
      transform: `translateX(calc(${translateX}% + ${diff * cardGap}px)) scale(${scale})`,
      opacity,
      zIndex,
      transition: isDragging ? "none" : "all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
    };
  };

  return (
    <section className="bg-creme py-8 sm:py-12 md:py-20 border-t border-black/5">
      {/* Header - Hidden on mobile */}
      <div className="hidden md:block max-w-[1440px] mx-auto px-4 mb-6 sm:mb-10 md:mb-16 text-center">
        <p className="text-xs font-primary uppercase tracking-[0.2em] text-alpha/60 mb-1.5">
          Seasonal Edits
        </p>
        <h2 className="text-3xl md:text-5xl text-alpha font-secondary font-medium tracking-tight">
          Featured Collections
        </h2>
      </div>

      {/* Mobile Carousel */}
      <div
        className="block lg:hidden relative h-[55vh] overflow-hidden select-none cursor-grab active:cursor-grabbing"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {collections.map((card, index) => {
            const isActive = index === activeIndex;
            const style = getCardStyle(index);

            return (
              <div
                key={card.id}
                style={style}
                className="absolute h-[85%] overflow-hidden"
                // Width set via style to use vw
                // eslint-disable-next-line react/no-unknown-property
              >
                <div 
                  className="relative h-full overflow-hidden"
                  style={{ width: `${cardWidth}vw` }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover pointer-events-none"
                    sizes="72vw"
                    priority={isActive}
                    draggable={false}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Content - Only visible on active card */}
                  <div
                    className="absolute inset-x-0 bottom-0 p-6 text-center"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(16px)",
                      transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
                    }}
                  >
                    <h3 className="font-secondary text-white tracking-tight text-2xl uppercase mb-4">
                      {card.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-6 leading-relaxed px-4">
                      {card.description}
                    </p>
                    <a
                      href={`/collections/${card.title.toLowerCase().replace(/ /g, "-")}`}
                      className="inline-block text-sm uppercase tracking-widest text-white border-b border-white pb-1 pointer-events-auto"
                      onClick={(e) => isDragging && e.preventDefault()}
                    >
                      Shop Collection
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
          {collections.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 600);
                }
              }}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${index === activeIndex ? "bg-alpha w-6" : "bg-alpha/30"}
              `}
            />
          ))}
        </div>
      </div>

      {/* Desktop Expandable Grid */}
      <div className="hidden lg:flex gap-1 h-[520px]">
        {collections.map((collection) => {
          const isHovered = hoveredId === collection.id;
          const hasHover = hoveredId !== null;

          return (
            <a
              key={collection.id}
              href={`/collections/${collection.title.toLowerCase().replace(/ /g, "-")}`}
              className={`
                group relative block overflow-hidden cursor-pointer
                transition-all duration-500 ease-out
                h-full
                ${
                  isHovered
                    ? "lg:flex-[2.5]"
                    : hasHover
                      ? "lg:flex-[0.8]"
                      : "lg:flex-1"
                }
              `}
              onMouseEnter={() => setHoveredId(collection.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className={`
                  object-cover transition-transform duration-700 ease-out
                  ${isHovered ? "scale-110" : "scale-100"}
                `}
                sizes="50vw"
              />

              <div
                className={`
                absolute inset-0 transition-opacity duration-500
                ${
                  isHovered
                    ? "bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                    : "bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                }
              `}
              />

              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="font-secondary text-white tracking-tight mb-3 text-xl md:text-2xl">
                  {collection.title}
                </h3>

                <span
                  className={`
                  inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-widest 
                  text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-sm
                  transition-all duration-500 ease-out
                  hover:bg-white/20
                  ${
                    isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }
                `}
                >
                  Shop Now
                  <svg
                    className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </a>
          );
        })}
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
