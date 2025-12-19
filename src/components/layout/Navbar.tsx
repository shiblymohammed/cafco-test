"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import MenuAnimation from "./menu/menuanimation";
import CartIcon from "./menu/carticon";
import SearchIcon from "./menu/searchicon";
import WishlistIcon from "./menu/wishlisticon";
import SearchModal from "./modals/SearchModal";
import CartDrawer from "./modals/CartDrawer";
import WishlistDrawer from "./modals/WishlistDrawer";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`hidden md:flex fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 border-b ${
        isScrolled ? "bg-creme border-alpha/50" : "bg-transparent backdrop-blur-sm border-creme/25"
      }`}>
        <div className="w-full h-full max-w-[1920px] mx-auto flex items-stretch relative">
          
          {/* Left Side - Hamburger and Search */}
          <div className={`flex items-stretch px-8 border-r transition-colors duration-300 ${
            isScrolled ? "text-alpha border-alpha/50" : "text-creme border-creme/30"
          }`}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Toggle menu"
            >
              <MenuAnimation isOpen={isOpen} size={28} />
            </button>
            
            <button 
                onClick={() => setIsSearchOpen(true)}
                className="px-4 flex items-center justify-center hover:opacity-70 transition-opacity ml-2" 
                aria-label="Search"
            >
              <SearchIcon size={24} />
            </button>
          </div>

          {/* Spacer to push Logo to center */}
          <div className="flex-1" />

          {/* Center - Logo */}
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-full px-12 border-l border-r transition-colors duration-300 ${
             isScrolled ? "text-alpha border-alpha/50" : "text-creme border-creme/30"
          }`}>
            <span className="text-4xl font-['brand-primary'] tracking-tight">CAFCO</span>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Right Side - Wishlist, Profile, Cart */}
          <div className={`flex items-stretch px-8 border-l transition-colors duration-300 ${
            isScrolled ? "text-alpha border-alpha/50" : "text-creme border-creme/30"
          }`}>
            <button 
                onClick={() => setIsWishlistOpen(true)}
                className="px-4 flex items-center justify-center hover:opacity-70 transition-opacity" 
                aria-label="Wishlist"
            >
              <WishlistIcon size={24} />
            </button>
            
            <button className="px-4 flex items-center justify-center hover:opacity-70 transition-opacity" aria-label="Profile">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            
            <button 
                onClick={() => setIsCartOpen(true)}
                className="px-4 flex items-center justify-center hover:opacity-70 transition-opacity ml-2" 
                aria-label="Cart"
            >
              <CartIcon size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="hidden md:block fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`hidden md:block fixed left-0 top-16 bottom-0 w-64 bg-creme p-6 z-50 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="flex flex-col gap-4">
          <Link href="/" className="text-lg">Home</Link>
          <Link href="/about" className="text-lg">About</Link>
          <Link href="/categories" className="text-lg">Categories</Link>
          <Link href="/collections" className="text-lg">Collections</Link>
          <Link href="/contact" className="text-lg">Contact</Link>
        </nav>
      </div>

      {/* Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistDrawer isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
    </>
  );
}
