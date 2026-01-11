"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { collections } from "@/src/data/collections";
import { products, Product } from "@/src/data/products";
import { FilterBar } from "@/src/components/ui/FilterBar";
import { Pagination } from "@/src/components/ui/Pagination";
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
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

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

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(start, start + productsPerPage);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  const handleClearFilters = () => {
    setSortBy("featured");
    setPriceRange("all");
    setSelectedColors([]);
    setSelectedMaterials([]);
    setCurrentPage(1);
  };

  if (!collection) {
    return (
      <main className="pt-20 bg-creme min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-secondary text-alpha mb-3">Collection Not Found</h1>
          <p className="text-alpha/60 mb-6">The collection you&apos;re looking for doesn&apos;t exist.</p>
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
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-alpha/80 via-alpha/40 to-alpha/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1440px] mx-auto px-4 pb-10 md:pb-14 w-full">
            <nav className="flex items-center gap-2 text-xs text-creme/70 mb-3">
              <Link href="/" className="hover:text-creme transition-colors">Home</Link>
              <span>/</span>
              <Link href="/collections" className="hover:text-creme transition-colors">Collections</Link>
              <span>/</span>
              <span className="text-creme">{collection.title}</span>
            </nav>
            <span className="text-xs font-primary uppercase tracking-[0.2em] text-creme/70 mb-1 block">
              {collection.subtitle}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-secondary text-creme leading-[0.95] tracking-tight mb-3">
              {collection.title}
            </h1>
            <p className="text-sm text-creme/80 font-primary max-w-lg leading-relaxed">
              {collection.description}
            </p>
          </div>
        </div>
      </section>

      {/* Collection Story */}
      <section className="py-10 md:py-14 border-b border-alpha/10">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-primary uppercase tracking-[0.2em] text-alpha/60 mb-2">
              The Collection
            </p>
            <p className="text-base md:text-lg text-alpha/80 font-primary leading-relaxed">
              Each piece in this collection has been thoughtfully selected to embody the essence of {collection.title.toLowerCase()}. 
              Discover furniture and decor that transforms your space into a sanctuary of style and comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-5 md:py-6 border-b border-alpha/10">
        <div className="max-w-[1440px] mx-auto px-4">
          <p className="text-sm text-alpha/60 font-primary">
            <span className="text-alpha font-medium">{filteredProducts.length}</span> pieces in this collection
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-6 md:py-10">
        <div className="max-w-[1440px] mx-auto px-4">
          {paginatedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
                {paginatedProducts.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))}
              </div>
              {totalPages > 1 && (
                <div className="mt-10 md:mt-14">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-14">
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
      <section className="py-10 md:py-14 bg-ivory border-t border-alpha/10">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs font-primary uppercase tracking-[0.2em] text-alpha/60 mb-1.5">
              Explore More
            </p>
            <h2 className="text-2xl md:text-3xl font-secondary text-alpha font-medium tracking-tight">
              Other Collections
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
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
                  <div className="absolute inset-0 flex items-end p-4 md:p-5">
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
