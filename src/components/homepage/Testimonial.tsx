'use client';

import { useState } from 'react';

const testimonials = [
  { id: 1, name: "Mehwish", dp: "M", stars: 5, review: "Compliment interested discretion estimating on stimulated apartments oh. Amazing quality and service!" },
  { id: 2, name: "Elizabeth Jeff", dp: "E", stars: 5, review: "Dear so sing when in find read of call. As distrusts behaviour abilities defective is. Highly recommended!" },
  { id: 3, name: "Emily Thomas", dp: "ET", stars: 4, review: "Never at water me might. On formed merits hunted unable merely by mr whence or. Great experience overall." },
  { id: 4, name: "Sarah Johnson", dp: "SJ", stars: 5, review: "Excellent service and quality products. Highly recommend to everyone looking for furniture." },
  { id: 5, name: "Michael Brown", dp: "MB", stars: 5, review: "The team was professional and the delivery was on time. Very satisfied with my purchase." },
  { id: 6, name: "Jessica Davis", dp: "JD", stars: 4, review: "Amazing experience from start to finish. The furniture quality exceeded my expectations." },
];

export default function Testimonial() {
  const [cards, setCards] = useState(testimonials);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => {
    setIsDragging(false);
    setCards(prev => [...prev.slice(1), prev[0]]);
  };

  return (
    <section className="h-screen relative flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">

      {/* NEW WOOD BACKGROUND SVG */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <defs>

            {/* Base wood color gradient */}
            <linearGradient id="woodBase" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f2d7b0" />
              <stop offset="50%" stopColor="#ddb98d" />
              <stop offset="100%" stopColor="#c89a63" />
            </linearGradient>

            {/* Vertical grain lines */}
            <pattern id="grainLines" width="80" height="600" patternUnits="userSpaceOnUse">
              <rect width="80" height="600" fill="none" />

              <path d="M20 0 L20 600" stroke="#8a643c" strokeWidth="1.8" strokeOpacity="0.12" />
              <path d="M50 0 L50 600" stroke="#7a5534" strokeWidth="1.3" strokeOpacity="0.1" />
              <path d="M70 0 L70 600" stroke="#6e482b" strokeWidth="1.1" strokeOpacity="0.08" />

              <path d="M35 0 C40 200, 30 400, 35 600" stroke="#5c3a21" strokeWidth="1" strokeOpacity="0.15" fill="none" />
              <path d="M10 0 C15 250, 5 450, 10 600" stroke="#4a2f1b" strokeWidth="0.8" strokeOpacity="0.1" fill="none" />
            </pattern>

            {/* Soft spotlight */}
            <radialGradient id="spotLight" cx="50%" cy="35%" r="70%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>

            {/* Vignette */}
            <radialGradient id="vignette" cx="50%" cy="50%" r="80%">
              <stop offset="60%" stopColor="rgba(0,0,0,0)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.25)" />
            </radialGradient>

          </defs>

          {/* Wood base */}
          <rect width="100%" height="100%" fill="url(#woodBase)" />

          {/* Wood grain */}
          <rect width="100%" height="100%" fill="url(#grainLines)" opacity="0.45" />

          {/* Soft top light */}
          <rect width="100%" height="100%" fill="url(#spotLight)" opacity="0.4" />

          {/* Vignette */}
          <rect width="100%" height="100%" fill="url(#vignette)" opacity="0.9" />

        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-md">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-alpha mb-3">
            Homes That Trust Us
          </h2>
          <p className="text-alpha/70 text-base md:text-lg">Real Stories from Real Customers</p>
        </div>

        <div className="relative w-full h-[320px] md:h-[350px]">
          {cards.map((testimonial, index) => (
            <StackedCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              totalCards={cards.length}
              isTop={index === 0}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              isDragging={isDragging && index === 0}
            />
          ))}
        </div>

        <p className="text-alpha/50 text-sm text-center">Drag the card to see more reviews</p>
      </div>
    </section>
  );
}

interface StackedCardProps {
  testimonial: typeof testimonials[0];
  index: number;
  totalCards: number;
  isTop: boolean;
  onDragStart: () => void;
  onDragEnd: () => void;
  isDragging: boolean;
}

function StackedCard({ testimonial, index, totalCards, isTop, onDragStart, onDragEnd, isDragging }: StackedCardProps) {
  const maxVisible = 3;
  if (index >= maxVisible) return null;

  // Splattered effect: alternating positions and rotations
  const rotations = [3, -5, 4, -4, 5, -3];
  const xOffsets = [10, -15, 8, -12, 15, -8];

  const scale = 1 - index * 0.05;
  const yOffset = index * 20;
  const rotation = rotations[index % rotations.length];
  const xOffset = xOffsets[index % xOffsets.length];

  const cardStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    maxWidth: '320px',
    transform: isDragging
      ? 'translate(-50%, -50%) scale(0.95) rotate(-8deg)'
      : `translate(calc(-50% + ${xOffset}px), calc(-50% + ${yOffset}px)) scale(${scale}) rotate(${rotation}deg)`,
    transition: isDragging
      ? 'transform 0.1s ease-out'
      : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    zIndex: totalCards - index,
    opacity: 1 - index * 0.15,
    cursor: isTop ? 'grab' : 'default',
    touchAction: 'none',
  };

  return (
    <div
      style={cardStyle}
      draggable={isTop}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onTouchStart={isTop ? onDragStart : undefined}
      onTouchEnd={isTop ? onDragEnd : undefined}
    >
      <div
        style={{
          borderRadius: '3px',
          padding: '24px',
          boxShadow: `0 ${10 + index * 5}px ${30 + index * 10}px rgba(0, 0, 0, ${0.15 - index * 0.03})`,
          border: '1px solid rgba(255, 255, 255, 0.8)',
          position: 'relative',
        }}
        className='bg-creme'
      >
        {/* Top Section: DP and Name in a row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 'bold',
              color: 'white',
              flexShrink: 0,
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
            }}
          >
            {testimonial.dp}
          </div>

          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '6px' }}>
              {testimonial.name}
            </h3>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ fontSize: '16px', color: i < testimonial.stars ? '#fbbf24' : '#e5e7eb' }}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Review Text */}
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#6b7280', marginBottom: '12px' }}>
          {testimonial.review}
        </p>

        {/* Quote SVG at bottom */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 17.92C0 11.6267 1.6 6.4 4.8 2.24C8.10667 0.746667 11.36 0 14.56 0C13.8133 2.24 13.44 4.58667 13.44 7.04C13.44 11.7333 15.2533 15.36 18.88 17.92L16.8 32H0V17.92ZM21.12 17.92C21.12 11.6267 22.72 6.4 25.92 2.24C29.2267 0.746667 32.48 0 35.68 0C34.9333 2.24 34.56 4.58667 34.56 7.04C34.56 11.7333 36.3733 15.36 40 17.92L37.92 32H21.12V17.92Z" fill="#e5e7eb" />
          </svg>
        </div>
      </div>
    </div>
  );
}
