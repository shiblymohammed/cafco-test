"use client";

import { useState, useEffect } from "react";
import MenuAnimation from "./menu/menuanimation";
import CartIcon from "./menu/carticon";
import SearchIcon from "./menu/searchicon";
import WishlistIcon from "./menu/wishlisticon";

export default function Navbar() {
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
      <nav className={`hidden md:flex fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] ${
        isScrolled ? "bg-creme" : "bg-transparent"
      }`}>
        <div className="w-full h-full flex justify-center items-center px-4 relative">
          {/* Left Side - Hamburger and Search */}
          <div className={`absolute left-4 flex items-center gap-6 transition-colors duration-300 ${
            isScrolled ? "text-alpha" : "text-creme"
          }`}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <MenuAnimation isOpen={isOpen} size={28} />
            </button>
            
            <button className="p-1 flex items-center justify-center" aria-label="Search">
              <SearchIcon size={24} />
            </button>
          </div>

          {/* Center - Logo */}
          <div className={`text-4xl font-['brand-primary'] transition-colors duration-300 ${
            isScrolled ? "text-alpha" : "text-creme"
          }`}>CAFCO</div>

          {/* Right Side - Wishlist, Profile, Cart */}
          <div className={`absolute right-4 flex items-center gap-6 transition-colors duration-300 ${
            isScrolled ? "text-alpha" : "text-creme"
          }`}>
            <button className="p-1 flex items-center justify-center" aria-label="Wishlist">
              <WishlistIcon size={24} />
            </button>
            
            <button className="p-1 flex items-center justify-center" aria-label="Profile">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            
            <button className="p-1 flex items-center justify-center" aria-label="Cart">
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
