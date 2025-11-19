"use client";
import InstagramIcon from "./footer/instagramicon";
import FacebookIcon from "./footer/facebookicon";
import LinkedInIcon from "./footer/linkedinicon";
import WhatsAppIcon from "./footer/whatsappicon";

export default function MobileFooter() {
  return (
    <footer className="md:hidden bg-[#171717] text-white flex flex-col">
      {/* Top Section - Social Buttons and CAFCO */}
      <div className="h-12 flex items-center shrink-0">
        {/* Left Side - Social Buttons */}
        <div className="flex">
          {/* Instagram Button */}
          <button
            className="h-12 w-14 flex items-center justify-center text-white border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon size={20} />
          </button>

          {/* Facebook Button */}
          <button
            className="h-12 w-14 flex items-center justify-center text-white border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Facebook"
          >
            <FacebookIcon size={20} />
          </button>
        </div>

        {/* Center - CAFCO Brand */}
        <div className="flex-1 flex items-center justify-center">
          <p className="text-4xl" style={{ fontFamily: 'brand-primary' }}>CAFCO</p>
        </div>

        {/* Right Side - LinkedIn and WhatsApp Buttons */}
        <div className="flex">
          {/* LinkedIn Button */}
          <button
            className="h-12 w-14 flex items-center justify-center text-white border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={20} />
          </button>

          {/* WhatsApp Button */}
          <button
            className="h-12 w-14 flex items-center justify-center text-white border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={20} />
          </button>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Middle Section - Links */}
      <div className="flex gap-12 justify-center items-center px-6 py-8" style={{marginTop:'1rem',marginBottom:'1rem'}}>
        {/* Column 1 */}
        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">Navigate</h3>
          <a href="/about" className="text-sm text-white/60 hover:text-white transition-all duration-300">About</a>
          <a href="/contact" className="text-sm text-white/60 hover:text-white transition-all duration-300">Contact</a>
          <a href="/categories" className="text-sm text-white/60 hover:text-white transition-all duration-300">Categories</a>
          <a href="/collections" className="text-sm text-white/60 hover:text-white transition-all duration-300">Collections</a>
        </div>

        {/* Vertical Divider */}
        <div className="h-24 w-px bg-white/10" />

        {/* Column 2 */}
        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">Explore</h3>
          <a href="/shop" className="text-sm text-white/60 hover:text-white transition-all duration-300">Shop</a>
          <a href="/blog" className="text-sm text-white/60 hover:text-white transition-all duration-300">Blog</a>
          <a href="/faq" className="text-sm text-white/60 hover:text-white transition-all duration-300">FAQ</a>
          <a href="/support" className="text-sm text-white/60 hover:text-white transition-all duration-300">Support</a>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

      {/* Bottom Section - Call Now Button */}
      <button
        className="w-full h-14 flex items-center justify-center text-white border-t border-white/10 hover:bg-white/5 transition-all duration-300 text-base font-medium shrink-0 group"
        aria-label="Call Now"
      >
        <span className="group-hover:scale-105 transition-transform duration-300">Call Now</span>
        <span className="ml-2 text-white/60 group-hover:text-white transition-colors duration-300">→</span>
      </button>
    </footer>
  );
}
