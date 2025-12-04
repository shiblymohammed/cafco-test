import { ReactNode } from "react";

// Main ProductCard container
interface ProductCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ProductCard({ children, className = "", onClick }: ProductCardProps) {
  return (
    <div 
      className={`group cursor-pointer border border-alpha/20 rounded-md md:border-0 md:rounded-none ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// Product Image with 3:4 ratio
interface ProductCardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProductCardImage({ src, alt, className = "" }: ProductCardImageProps) {
  return (
    <div className={`relative aspect-[3/4] overflow-hidden rounded-t-md rounded-b-none md:rounded-md ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}

// Product Title
interface ProductCardTitleProps {
  children: ReactNode;
  className?: string;
}

export function ProductCardTitle({ children, className = "" }: ProductCardTitleProps) {
  return (
    <h3 className={`text-sm font-primary text-alpha mt-2 md:mt-3 line-clamp-1 px-3 md:px-0 ${className}`}>
      {children}
    </h3>
  );
}

// Product Description (one line)
interface ProductCardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function ProductCardDescription({ children, className = "" }: ProductCardDescriptionProps) {
  return (
    <p className={`text-sm text-alpha/50 mt-0.5 line-clamp-1 px-3 md:px-0 ${className}`}>
      {children}
    </p>
  );
}

// Product Meta (Collection | Category)
interface ProductCardMetaProps {
  collection: string;
  category: string;
  className?: string;
}

export function ProductCardMeta({ collection, category, className = "" }: ProductCardMetaProps) {
  return (
    <div className={`flex items-center gap-2 mt-1 text-xs text-alpha/40 px-3 pb-3 md:px-0 md:pb-0 ${className}`}>
      <span>{collection}</span>
      <span className="w-px h-3 bg-alpha/30" />
      <span>{category}</span>
    </div>
  );
}

// Product Price
interface ProductCardPriceProps {
  price: string;
  originalPrice?: string;
  className?: string;
}

export function ProductCardPrice({ price, originalPrice, className = "" }: ProductCardPriceProps) {
  return (
    <div className={`flex items-center gap-2 mt-1 px-3 pb-3 md:px-0 md:pb-0 ${className}`}>
      <span className="text-sm font-primary text-alpha font-medium">
        {price}
      </span>
      {originalPrice && (
        <span className="text-xs text-alpha/50 line-through">
          {originalPrice}
        </span>
      )}
    </div>
  );
}

// Product Badge (Sale, New, etc.)
interface ProductCardBadgeProps {
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
}

export function ProductCardBadge({ children, variant = "dark", className = "" }: ProductCardBadgeProps) {
  const baseStyles = "absolute top-3 left-3 z-10 px-3 py-1.5 rounded text-[10px] uppercase tracking-wider font-medium";
  const variantStyles = variant === "dark" 
    ? "bg-alpha text-white" 
    : "bg-white/90 text-alpha border border-alpha/20";

  return (
    <div className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </div>
  );
}

// Wishlist Button
interface ProductCardWishlistProps {
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export function ProductCardWishlist({ isActive = false, onClick, className = "" }: ProductCardWishlistProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      className={`absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 ${
        isActive ? "bg-alpha" : "bg-white/90 hover:bg-white"
      } ${className}`}
      aria-label="Add to wishlist"
    >
      <svg 
        className="w-4 h-4 transition-colors duration-300" 
        style={{ color: isActive ? '#fff' : '#171717' }} 
        fill={isActive ? 'currentColor' : 'none'} 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </button>
  );
}

// Add to Cart Button (overlay)
interface ProductCardCartButtonProps {
  onClick?: () => void;
  className?: string;
}

export function ProductCardCartButton({ onClick, className = "" }: ProductCardCartButtonProps) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 p-3 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ${className}`}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
        className="w-full py-2.5 bg-alpha text-white text-xs uppercase tracking-wider font-medium rounded hover:bg-alpha/90 transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        Add to Cart
      </button>
    </div>
  );
}

// Image Container (wraps image with badges, wishlist, cart button)
interface ProductCardImageContainerProps {
  children: ReactNode;
  className?: string;
}

export function ProductCardImageContainer({ children, className = "" }: ProductCardImageContainerProps) {
  return (
    <div className={`relative overflow-hidden rounded-t-md rounded-b-none md:rounded-md ${className}`}>
      {children}
    </div>
  );
}
