"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { categories } from "@/src/data/categories";
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

export default function CategoryProductsPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Find category by slug
  const category = categories.find(
    c => c.name.toLowerCase().replace(/ /g, "-") === slug
  );

  // Get products for this category
  const categoryProducts = products.filter(
    p => p.categorySlug === slug || p.category.toLowerCase().replace(/ /g, "-") === slug
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
    categoryProducts.forEach(p => p.colors.forEach(c => colors.add(c)));
    return Array.from(colors);
  }, [categoryProducts]);

  const availableMaterials = useMemo(() => {
    const materials = new Set<string>();
    categoryProducts.forEach(p => p.materials.forEach(m => materials.add(m)));
    return Array.from(materials);
  }, [categoryProducts]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...categoryProducts];

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
  }, [categoryProducts, sortBy, priceRange, selectedColors, selectedMaterials]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(start, start + productsPerPage);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  const handleClearFilters = () => {
    setSortBy("featured");
    setPriceRange("all");
    setSelectedColors([]);
    setSelectedMaterials([]);
    setCurrentPage(1);
  };

  if (!category) {
    return (
      <main className="pt-20 bg-creme min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-secondary text-alpha mb-3">Category Not Found</h1>
          <p className="text-alpha/60 mb-6">The category you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/categories" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-primary border-b border-alpha pb-1 hover:text-tango hover:border-tango transition-colors">
            Browse All Categories
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 bg-creme min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-[35vh] md:h-[45vh] overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-alpha/70 via-alpha/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1440px] mx-auto px-4 pb-10 md:pb-14 w-full">
            <nav className="flex items-center gap-2 text-xs text-creme/70 mb-3">
              <Link href="/" className="hover:text-creme transition-colors">Home</Link>
              <span>/</span>
              <Link href="/categories" className="hover:text-creme transition-colors">Categories</Link>
              <span>/</span>
              <span className="text-creme">{category.name}</span>
            </nav>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-secondary text-creme leading-[0.95] tracking-tight mb-2">
              {category.name}
            </h1>
            <p className="text-sm text-creme/80 font-primary max-w-lg">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-5 md:py-6 border-b border-alpha/10">
        <div className="max-w-[1440px] mx-auto px-4">
          <p className="text-sm text-alpha/60 font-primary">
            <span className="text-alpha font-medium">{filteredProducts.length}</span> products
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
