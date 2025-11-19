'use client';

import { useRef, useState, useEffect } from 'react';

const products = [
  { id: 1, name: 'Product 1', price: '$99', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=800&fit=crop' },
  { id: 2, name: 'Product 2', price: '$149', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=800&fit=crop' },
  { id: 3, name: 'Product 3', price: '$79', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=800&fit=crop' },
  { id: 4, name: 'Product 4', price: '$199', image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&h=800&fit=crop' },
  { id: 5, name: 'Product 5', price: '$129', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=800&fit=crop' },
  { id: 6, name: 'Product 6', price: '$89', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop' },
  { id: 7, name: 'Product 7', price: '$159', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=800&fit=crop' },
  { id: 8, name: 'Product 8', price: '$119', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop' },
];

export default function BestSellers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!isDragging && Math.abs(velocity) > 0.5) {
      const animate = () => {
        if (scrollRef.current && Math.abs(velocity) > 0.5) {
          scrollRef.current.scrollLeft -= velocity;
          setVelocity((v) => v * 0.95);
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, velocity]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(scrollRef.current.scrollLeft);
    setVelocity(0);
    if (scrollRef.current) {
      scrollRef.current.style.scrollSnapType = 'none';
      scrollRef.current.style.scrollBehavior = 'auto';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const distance = x - startX;
    const newVelocity = distance * 0.1;
    setVelocity(newVelocity);
    scrollRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.style.scrollSnapType = 'x mandatory';
          scrollRef.current.style.scrollBehavior = 'smooth';
        }
      }, 100);
    }
  };

  return (
    <section className="bg-creme py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-10 md:mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-alpha">
          best sellers!
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide touch-pan-x cursor-grab active:cursor-grabbing select-none"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="flex gap-0 w-max">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[32vw] lg:w-[24vw]  border-t border-b border-alpha"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="bg-white h-full flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable="false"
                  />
                </div>
                <div className="p-4 md:p-6 border-t border-alpha">
                  <h3 className="text-lg md:text-xl font-semibold text-alpha">
                    {product.name}
                  </h3>
                </div>
                <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-alpha">
                  <p className="text-alpha/70 text-base md:text-lg">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
