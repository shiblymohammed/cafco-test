"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { collections } from "@/src/data/collections";
import { products, Product } from "@/src/data/products";
import { FilterBar } from "@/src/components/ui/FilterBar";
import {
  ProductCard,
  ProductCardImage,
  ProductCardImageContainer,
  ProductCardTitle,
  ProductCardMeta,
  ProductCardWishlist,
  ProductCardQuickAdd,
  ProductCardBadge,
} from "@/src/components/ui/ProductCard";

export default function CollectionProductsPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Find collection by slug
  const collection = collections.find(
    c => c.title.toLowerCase().replace(/ /g, "-") === slug
  );

  // Get products for this collection
  const collectionProducts = products.filter(
    p => p.collectionSlug === slug || p.collection.toLowerCase().replace(/ /g, "-") === slug
  );

  // Filter states
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  // Extract unique colors and materials from products
  const availableColors = useMemo(() => {
    const colors = new Set<string>();
    collectionProducts.forEach(p => p.colors.forEach(c => colors.add(c)));
    return Array.from(colors);
  }, [collectionProducts]);

  const availableMaterials = useMemo(() => {
    const materials = new Set<string>();
    collectionProducts.forEach(p => p.materials.forEach(m => materials.add(m)));
    return Array.from(materials);
  }, [collectionProducts]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...collectionProducts];

    // Price filter
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      if (priceRange.endsWith("+")) {
        const minPrice = parseInt(priceRange);
        filtered = filtered.filter(p => p.price >= minPrice);
      } else {
        filtered = filtered.filter(p => p.price >= min && p.price <= max);
      }
    }

    // Color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter(p =>
        p.colors.some(c => selectedColors.includes(c))
      );
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      filtered = filtered.filter(p =>
        p.materials.some(m => selectedMaterials.includes(m))
      );
    }

    // Sort
    switch (sortBy) {
      case "newest":
        filtered = filtered.filter(p => p.isNew).concat(filtered.filter(p => !p.isNew));
        break;
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "best-selling":
        filtered = filtered.filter(p => p.isBestSeller).concat(filtered.filter(p => !p.isBestSeller));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [collectionProducts, sortBy, priceRange, selectedColors, selectedMaterials]);

  const handleClearFilters = () => {
    setSortBy("featured");
    setPriceRange("all");
    setSelectedColors([]);
    setSelectedMaterials([]);
  };

  if (!collection) {
    return (
      <main className="pt-20 bg-creme min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-24 text-center">
          <h1 className="text-3xl font-secondary text-alpha mb-4">Collection Not Found</h1>
          <p className="text-alpha/60 mb-8">The collection you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/collections" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-primary border-b border-alpha pb-1 hover:text-tango hover:border-tango transition-colors">
            Browse All Collections
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 bg-creme min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-alpha/80 via-alpha/40 to-alpha/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1440px] mx-auto px-4 md:px-12 pb-12 md:pb-16 w-full">
            <nav className="flex items-center gap-2 text-xs text-creme/70 mb-4">
              <Link href="/" className="hover:text-creme transition-colors">Home</Link>
              <span>/</span>
              <Link href="/collections" className="hover:text-creme transition-colors">Collections</Link>
              <span>/</span>
              <span className="text-creme">{collection.title}</span>
            </nav>
            <span className="text-xs font-primary uppercase tracking-[0.2em] text-creme/70 mb-2 block">
              {collection.subtitle}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-secondary text-creme leading-[0.95] tracking-tight mb-4">
              {collection.title}
            </h1>
            <p className="text-sm md:text-base text-creme/80 font-primary max-w-xl leading-relaxed">
              {collection.description}
            </p>
          </div>
        </div>
      </section>

      {/* Collection Story (Optional) */}
      <section className="py-12 md:py-16 border-b border-alpha/10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-3 text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-4">
              <span className="w-8 h-[1px] bg-alpha/30"></span>
              The Collection
              <span className="w-8 h-[1px] bg-alpha/30"></span>
            </span>
            <p className="text-lg md:text-xl text-alpha/80 font-primary leading-relaxed">
              Each piece in this collection has been thoughtfully selected to embody the essence of {collection.title.toLowerCase()}. 
              Discover furniture and decor that transforms your space into a sanctuary of style and comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-6 md:py-8 border-b border-alpha/10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <p className="text-sm text-alpha/60 font-primary">
            <span className="text-alpha font-medium">{filteredProducts.length}</span> pieces in this collection
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-alpha/60 font-primary mb-4">No products match your filters.</p>
              <button
                onClick={handleClearFilters}
                className="text-xs uppercase tracking-widest font-primary border-b border-alpha pb-1 hover:text-tango hover:border-tango transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Related Collections */}
      <section className="py-12 md:py-16 bg-ivory border-t border-alpha/10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-flex items-center gap-3 text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-4">
              <span className="w-8 h-[1px] bg-alpha/30"></span>
              Explore More
              <span className="w-8 h-[1px] bg-alpha/30"></span>
            </span>
            <h2 className="text-2xl md:text-3xl font-secondary text-alpha">
              Other <span className="italic font-light">Collections</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {collections
              .filter(c => c.title !== collection.title)
              .slice(0, 3)
              .map(c => (
                <Link
                  key={c.id}
                  href={`/collections/${c.title.toLowerCase().replace(/ /g, "-")}`}
                  className="group relative aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-alpha/70 via-alpha/20 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-4 md:p-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-creme/70 mb-1">{c.subtitle}</p>
                      <h3 className="text-lg md:text-xl font-secondary text-creme group-hover:text-creme/90 transition-colors">
                        {c.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <FilterBar
        colors={availableColors}
        materials={availableMaterials}
        onSortChange={setSortBy}
        onPriceChange={setPriceRange}
        onColorChange={setSelectedColors}
        onMaterialChange={setSelectedMaterials}
        onClearFilters={handleClearFilters}
      />
    </main>
  );
}

function ProductItem({ product }: { product: Product }) {
  return (
    <ProductCard href={`/product/${product.slug}`}>
      <ProductCardImageContainer>
        <ProductCardWishlist />
        {product.isNew && <ProductCardBadge variant="new">New</ProductCardBadge>}
        {product.isSale && <ProductCardBadge variant="sale">Sale</ProductCardBadge>}
        {product.isBestSeller && !product.isNew && !product.isSale && (
          <ProductCardBadge variant="gold">Best Seller</ProductCardBadge>
        )}
        <ProductCardImage src={product.image} alt={product.name} />
        <ProductCardQuickAdd />
      </ProductCardImageContainer>
      <div className="flex flex-col items-start px-1 md:px-2 pt-2 md:pt-4 pb-2">
        <ProductCardTitle>{product.name}</ProductCardTitle>
        <ProductCardMeta collection={product.collection} category={product.category} />
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-primary text-alpha">${product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-xs font-primary text-alpha/40 line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </ProductCard>
  );
}
