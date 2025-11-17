"use client";

import { useState, useEffect } from "react";
import MenuAnimation from "./menu/menuanimation";
import CartIcon from "./menu/carticon";
import SearchIcon from "./menu/searchicon";
import WishlistIcon from "./menu/wishlisticon";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <div className="flex md:hidden fixed top-0 left-0 right-0 z-50 h-12 bg-transparent">
        <div className="h-full w-full flex items-center">

          {/* Hamburger Button - Square */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`h-12 w-14 flex items-center justify-center relative overflow-hidden ${isScrolled ? "text-alpha border-r border-alpha/10" : "text-creme"
              }`}
            style={{
              transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            aria-label="Toggle menu"
          >
            <div 
              className="absolute inset-0 bg-creme will-change-transform"
              style={{
                transform: isScrolled ? 'translateX(0) scale(1)' : 'translateX(-105%) scale(0.95)',
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
            <span className="relative z-10">
              <MenuAnimation isOpen={isOpen} size={24} />
            </span>
          </button>

          {/* Search Button - Square */}
          <button
            className={`h-12 w-14 flex items-center justify-center relative overflow-hidden ${isScrolled ? "text-alpha" : "text-creme"
              }`}
            style={{
              transition: 'color 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0.03s',
            }}
            aria-label="Search"
          >
            <div 
              className="absolute inset-0 bg-creme will-change-transform"
              style={{
                transform: isScrolled ? 'translateY(0) scale(1)' : 'translateY(105%) scale(0.95)',
                transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0.03s',
              }}
            />
            <span className="relative z-10">
              <SearchIcon size={20} />
            </span>
          </button>

          {/* Logo Button - Rectangle (flex-1 to fill remaining space) */}
          <button
            className={`h-12 flex-1 flex items-center justify-center text-3xl font-['brand-primary'] relative overflow-hidden ${isScrolled ? "text-alpha border-l border-r border-alpha/10" : "text-creme"
              }`}
            style={{
              transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.06s',
            }}
            aria-label="Home"
          >
            <div 
              className="absolute inset-0 bg-creme will-change-transform"
              style={{
                transform: isScrolled ? 'translateY(0) scale(1)' : 'translateY(-105%) scale(0.95)',
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.06s',
              }}
            />
            <span className="relative z-10">
              CAFCO
            </span>
          </button>

          {/* Wishlist Button - Square */}
          <button
            className={`h-12 w-14 flex items-center justify-center relative overflow-hidden ${isScrolled ? "text-alpha" : "text-creme"
              }`}
            style={{
              transition: 'color 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.09s',
            }}
            aria-label="Wishlist"
          >
            <div 
              className="absolute inset-0 bg-creme will-change-transform"
              style={{
                transform: isScrolled ? 'translateY(0) scale(1)' : 'translateY(105%) scale(0.95)',
                transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.09s',
              }}
            />
            <span className="relative z-10">
              <WishlistIcon size={20} />
            </span>
          </button>

          {/* Cart Button - Square */}
          <button
            className={`h-12 w-14 flex items-center justify-center relative overflow-hidden ${isScrolled ? "text-alpha border-l border-alpha/10" : "text-creme"
              }`}
            style={{
              transition: 'color 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.12s',
            }}
            aria-label="Cart"
          >
            <div 
              className="absolute inset-0 bg-creme will-change-transform"
              style={{
                transform: isScrolled ? 'translateX(0) scale(1)' : 'translateX(105%) scale(0.95)',
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.12s',
              }}
            />
            <span className="relative z-10">
              <CartIcon size={20} />
            </span>
          </button>

        </div>
      </div>

      {/* Background Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-200 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Menu */}
      <div
        className={`fixed left-0 top-12 bottom-0 w-64 bg-creme p-6 z-50 transition-transform duration-200 ease-out will-change-transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="flex flex-col gap-4">
          <a href="/" className="text-lg">Home</a>
          <a href="/about" className="text-lg">About</a>
          <a href="/categories" className="text-lg">Categories</a>
          <a href="/collections" className="text-lg">Collections</a>
          <a href="/contact" className="text-lg">Contact</a>
        </nav>
      </div>
    </>
  );
}
