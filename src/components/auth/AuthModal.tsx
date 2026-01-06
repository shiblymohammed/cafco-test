"use client";

import { useState, useEffect } from "react";

type AuthMode = "login" | "signup";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: AuthMode;
}

const INDIA_CODE = { code: "+91", country: "India", flag: "🇮🇳" };

export default function AuthModal({ isOpen, onClose, initialMode = "login" }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validatePhone = (phone: string): boolean => {
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      setPhoneError("Phone number must be between 7-15 digits");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(value);
    if (value) validatePhone(value);
    else setPhoneError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(phoneNumber)) return;
    const fullNumber = `${INDIA_CODE.code}${phoneNumber}`;
    console.log(`${mode} with:`, fullNumber);
  };

  const switchMode = () => {
    setMode(mode === "login" ? "signup" : "login");
    setPhoneNumber("");
    setPhoneError("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-modal flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-alpha/60 backdrop-blur-light animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-creme w-full max-w-md mx-4 p-8 md:p-12 shadow-modal animate-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-alpha/60 hover:text-alpha transition-colors duration-300"
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-2 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-alpha/30"></span>
            {mode === "login" ? "Welcome Back" : "Welcome"}
            <span className="w-8 h-[1px] bg-alpha/30"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-secondary text-alpha leading-tight tracking-tight mb-3">
            {mode === "login" ? (
              <>Sign <span className="italic font-light text-alpha/80">In</span></>
            ) : (
              <>Create <span className="italic font-light text-alpha/80">Account</span></>
            )}
          </h2>
          <p className="text-sm font-primary text-alpha/60 leading-relaxed max-w-xs mx-auto">
            {mode === "login" 
              ? "Continue your journey with CAFCO's curated collection."
              : "Join the CAFCO family and discover timeless furniture."
            }
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label 
              htmlFor="phone" 
              className="block text-[0.6rem] font-primary uppercase tracking-[0.2em] text-alpha/60 mb-3"
            >
              Phone Number
            </label>
            
            <div className="flex items-center border-b border-alpha/20 focus-within:border-alpha transition-colors duration-300">
              {/* Fixed India Country Code */}
              <div className="flex items-center gap-2 py-3 pr-3 text-sm font-primary text-alpha whitespace-nowrap">
                <span className="text-lg">{INDIA_CODE.flag}</span>
                <span>{INDIA_CODE.country}</span>
                <span className="text-alpha/60">({INDIA_CODE.code})</span>
              </div>

              {/* Phone Input */}
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="Enter phone number"
                className="flex-1 bg-transparent py-3 text-base font-primary text-alpha placeholder:text-alpha/30 focus:outline-none"
                required
              />
            </div>
            
            {phoneError && (
              <p className="text-xs text-red-500 mt-2 font-primary">{phoneError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-alpha text-creme py-4 text-xs font-primary uppercase tracking-[0.2em] hover:bg-tango transition-colors duration-300"
          >
            {mode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <span className="flex-1 h-[1px] bg-alpha/10"></span>
          <span className="text-[0.6rem] font-primary uppercase tracking-widest text-alpha/40">or</span>
          <span className="flex-1 h-[1px] bg-alpha/10"></span>
        </div>

        {/* Switch Mode */}
        <div className="text-center">
          <p className="text-sm font-primary text-alpha/60 mb-3">
            {mode === "login" ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button 
            onClick={switchMode}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold border-b border-alpha pb-1 hover:text-tango hover:border-tango transition-colors duration-300"
          >
            {mode === "login" ? "Create Account" : "Login"}
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
