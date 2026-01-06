"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CartIcon from "./menu/carticon";
import SearchIcon from "./menu/searchicon";
import WishlistIcon from "./menu/wishlisticon";
import SearchModal from "./modals/SearchModal";
import CartDrawer from "./modals/CartDrawer";
import WishlistDrawer from "./modals/WishlistDrawer";
import AuthModal from "../auth/AuthModal";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On non-homepage, always show solid navbar style
  const showSolidNavbar = !isHomePage || isScrolled;

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/categories", label: "CATEGORIES" },
    { href: "/collections", label: "COLLECTIONS" },
    { href: "/blogs", label: "BLOGS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      <nav 
        className="hidden md:flex flex-col fixed top-0 left-0 right-0 z-50 overflow-hidden"
      >
        {/* First Row Background - Slides from Top */}
        <div 
          className="absolute top-0 left-0 right-0 h-14 bg-creme will-change-transform"
          style={{
            transform: showSolidNavbar ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        {/* Second Row Background - Slides from Bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[calc(100%-3.5rem)] bg-creme will-change-transform shadow-md"
          style={{
            transform: showSolidNavbar ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.05s',
          }}
        />
        
        {/* First Row - Logo centered, Icons on right */}
        <div className="relative z-10 w-full h-14 max-w-[1920px] mx-auto flex items-center px-6">
          
          {/* Left Side - Search */}
          <div className="flex items-center gap-2 flex-1">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className={`p-2 flex items-center justify-center rounded transition-all duration-200 ${
                showSolidNavbar ? "text-alpha/70 hover:text-alpha" : "text-creme/80 hover:text-creme"
              }`}
              style={{
                transition: 'color 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0.05s',
              }}
              aria-label="Search"
            >
              <SearchIcon size={20} />
            </button>
            <span
              onClick={() => setIsSearchOpen(true)}
              className={`text-sm font-thin cursor-pointer transition-all duration-300 ${
                showSolidNavbar 
                  ? "text-alpha/60 hover:text-alpha" 
                  : "text-creme/70 hover:text-creme"
              }`}
            >
              Search
            </span>
          </div>

          {/* Center - Logo */}
          <div className="flex-1 flex justify-center">
            <Link 
              href="/" 
              className={`text-3xl font-['brand-primary'] tracking-tight ${
                showSolidNavbar ? "text-alpha hover:text-alpha/70" : "text-creme hover:text-creme/80"
              }`}
              style={{
                transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.08s',
              }}
            >
              CAFCO
            </Link>
          </div>

          {/* Right Side - Wishlist, Cart, Profile */}
          <div className="flex items-center justify-end gap-1 flex-1">
            <button 
              onClick={() => setIsWishlistOpen(true)}
              className={`p-2 flex items-center justify-center rounded ${
                showSolidNavbar ? "text-alpha/70 hover:text-alpha" : "text-creme/80 hover:text-creme"
              }`}
              style={{
                transition: 'color 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.1s',
              }}
              aria-label="Wishlist"
            >
              <WishlistIcon size={20} />
            </button>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className={`p-2 flex items-center justify-center rounded ${
                showSolidNavbar ? "text-alpha/70 hover:text-alpha" : "text-creme/80 hover:text-creme"
              }`}
              style={{
                transition: 'color 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.12s',
              }}
              aria-label="Cart"
            >
              <CartIcon size={20} />
            </button>
            
            <button 
              onClick={() => { setAuthMode("login"); setIsAuthOpen(true); }}
              className={`p-2 flex items-center justify-center rounded ${
                showSolidNavbar ? "text-alpha/70 hover:text-alpha" : "text-creme/80 hover:text-creme"
              }`}
              style={{
                transition: 'color 0.55s cubic-bezier(0.4, 0, 0.2, 1) 0.14s',
              }}
              aria-label="Profile"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Border between rows */}
        <div 
          className={`relative z-10 w-full h-px ${showSolidNavbar ? "bg-alpha/10" : "bg-creme/15"}`}
          style={{
            transition: 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />

        {/* Second Row - Navigation Links */}
        <div className="relative z-10 w-full h-10 max-w-[1920px] mx-auto flex items-center justify-center px-6">
          <div className="flex items-center justify-center gap-6 lg:gap-8 xl:gap-10">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs lg:text-sm font-medium tracking-wide px-3 py-1.5 rounded whitespace-nowrap ${
                  showSolidNavbar 
                    ? "text-alpha/70 hover:text-alpha" 
                    : "text-creme/75 hover:text-creme"
                }`}
                style={{
                  transition: `color 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${0.02 * index}s`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Border */}
        <div 
          className={`relative z-10 w-full h-px ${showSolidNavbar ? "bg-alpha/10" : "bg-creme/15"}`}
          style={{
            transition: 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </nav>

      {/* Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistDrawer isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} initialMode={authMode} />
    </>
  );
}
