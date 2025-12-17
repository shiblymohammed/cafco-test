import { ReactNode } from "react";

// Main ProductCard container - Minimalist & Premium

// Main ProductCard container - Minimalist & Premium
import Link from "next/link";

interface ProductCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function ProductCard({
  children,
  className = "",
  onClick,
  href,
}: ProductCardProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={`group cursor-pointer relative bg-transparent block ${className}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <div
      className={`group cursor-pointer relative bg-transparent ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// Product Image - Sharp architectural look
interface ProductCardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProductCardImage({
  src,
  alt,
  className = "",
}: ProductCardImageProps) {
  return (
    <div
      className={`relative aspect-[3/4] overflow-hidden bg-sand w-full ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
  );
}

// Product Quick Add Button - Appears on Hover
interface ProductCardQuickAddProps {
  onClick?: () => void;
  className?: string;
}

export function ProductCardQuickAdd({
    onClick,
    className = "",
  }: ProductCardQuickAddProps) {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
        className={`absolute bottom-0 left-0 right-0 h-10 bg-alpha text-creme text-xs uppercase tracking-widest font-semibold flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20 ${className}`}
      >
        Quick Add
      </button>
    );
  }

// Product Title - Elegant & Understated
interface ProductCardTitleProps {
  children: ReactNode;
  className?: string;
}

export function ProductCardTitle({
  children,
  className = "",
}: ProductCardTitleProps) {
  return (
    <h3
      className={`text-[1rem] font-primary text-alpha font-semibold leading-tight mt-3 tracking-wide group-hover:underline decoration-1 underline-offset-4 ${className}`}
    >
      {children}
    </h3>
  );
}

// Product Description - Hidden or very subtle
interface ProductCardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function ProductCardDescription({
  children,
  className = "",
}: ProductCardDescriptionProps) {
  return (
    <p
      className={`text-xs text-text-muted mt-0.5 font-primary tracking-normal leading-relaxed line-clamp-1 ${className}`}
    >
      {children}
    </p>
  );
}

// Product Meta (Collection) - Uppercase kicker
interface ProductCardMetaProps {
  collection: string;
  category: string;
  className?: string;
}

export function ProductCardMeta({
  collection,
  category,
  className = "",
}: ProductCardMetaProps) {
  return (
    <div
      className={`flex items-center gap-1.5 mt-1 text-[0.6rem] uppercase tracking-wider text-text-muted/80 ${className}`}
    >
      <span>{collection}</span>
      <span className="text-text-muted/30">|</span>
      <span>{category}</span>
    </div>
  );
}

// Product Price - REMOVED per user request (Component kept as null for type safety if needed elsewhere, but effectively practically gone)
interface ProductCardPriceProps {
  price?: string;
  originalPrice?: string;
  className?: string;
}

export function ProductCardPrice({}: ProductCardPriceProps) {
  return null;
}

// Product Badge - Minimalist tags
interface ProductCardBadgeProps {
  children: ReactNode;
  variant?: "dark" | "light" | "sale" | "new" | "gold" | "eco" | "limited";
  className?: string;
}

export function ProductCardBadge({
  children,
  variant = "dark",
  className = "",
}: ProductCardBadgeProps) {
  const baseStyles =
    "absolute top-0 left-0 z-dropdown px-3 py-1 text-[0.55rem] uppercase tracking-widest font-bold border";
  
  // Luxury variants
  const variantStyles = {
    dark: "border-transparent bg-alpha text-creme",
    light: "border-transparent bg-creme text-alpha",
    sale: "border-transparent bg-tango text-white",
    new: "border-transparent bg-white text-alpha",
    gold: "border-transparent bg-gold text-white",
    eco: "border-transparent bg-sage text-white",
    limited: "border-alpha bg-transparent text-alpha border-solid",
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}

// Wishlist Button - Floating minimalist
interface ProductCardWishlistProps {
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export function ProductCardWishlist({
  isActive = false,
  onClick,
  className = "",
}: ProductCardWishlistProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      className={`absolute top-2 right-2 z-dropdown w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${
        isActive
          ? "bg-alpha text-creme"
          : "bg-white/80 backdrop-blur-sm text-alpha hover:bg-alpha hover:text-creme opacity-0 group-hover:opacity-100"
      } ${className}`}
      aria-label="Add to wishlist"
    >
      <svg
        className="w-3.5 h-3.5"
        fill={isActive ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
}

// Image Container - Pure wrapper
interface ProductCardImageContainerProps {
  children: ReactNode;
  className?: string;
}

export function ProductCardImageContainer({
  children,
  className = "",
}: ProductCardImageContainerProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

// Skeleton - Minimalist
export function ProductCardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="aspect-[3/4] bg-sand/30 animate-pulse" />
      <div className="space-y-2 px-1">
        <div className="h-4 bg-sand/30 w-2/3 animate-pulse" />
        <div className="h-3 bg-sand/20 w-1/3 animate-pulse" />
      </div>
    </div>
  );
}
