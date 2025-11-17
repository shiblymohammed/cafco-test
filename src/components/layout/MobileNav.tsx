"use client";

import { useState } from "react";
import MenuAnimation from "./menu/menuanimation";
import CartIcon from "./menu/carticon";
import SearchIcon from "./menu/searchicon";
import WishlistIcon from "./menu/wishlisticon";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="flex md:hidden fixed top-0 left-0 right-0 bg-creme text-gray-900 z-50 h-12">
        <div className="h-full w-full flex justify-center items-center px-4 relative">

          {/* Left Side - Hamburger and Search */}
          <div className="absolute left-4 flex items-center gap-5 h-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <MenuAnimation isOpen={isOpen} size={24} />
            </button>
            
            <div className="h-full w-px bg-alpha/20"></div>
            
            <button className="p-1 flex items-center justify-center" aria-label="Search">
              <SearchIcon size={20} />
            </button>
            
            <div className="h-full w-px bg-alpha/20"></div>
          </div>

          {/* Center - Logo */}
          <div className="text-3xl font-['brand-primary'] text-alpha">CAFCO</div>

          {/* Right Side - Wishlist, Cart */}
          <div className="absolute right-4 flex items-center gap-5 h-full">
            <div className="h-full w-px bg-alpha/20"></div>
            
            <button className="p-1 flex items-center justify-center" aria-label="Wishlist">
              <WishlistIcon size={20} />
            </button>
            
            <div className="h-full w-px bg-alpha/20"></div>
            
            <button className="p-1 flex items-center justify-center" aria-label="Cart">
              <CartIcon size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed left-0 top-12 bottom-0 w-64 bg-creme p-6 z-50 transition-transform duration-300
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
