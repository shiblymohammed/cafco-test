import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // === COLORS ===
      colors: {
        // === PRIMARY PALETTE ===
        creme: "#f6f1eb",      // Primary background
        alpha: "#171717",      // Primary text/dark
        tango: "#28463fff",      // Brand green accent

        // === BACKGROUNDS ===
        ivory: "#faf8f5",      // Lighter than creme, for cards/elevated surfaces
        wind: "#a4ceadff",     //lighter than the brand green accent 
        sand: "#e8e2d9",       // Darker creme, for subtle sections
        charcoal: "#2a2a2a",   // Dark sections, footer, dark mode cards

        // === HOVER STATES ===
        hover: {
          light: "#f0ebe3",    // Hover on creme backgrounds
          dark: "#252525",     // Hover on dark backgrounds
          accent: "#3b5042ff",   // Hover on tango buttons (darker green)
        },

        // === BUTTONS ===
        button: {
          primary: "#171717",      // Main CTA (your alpha)
          secondary: "#284630",    // Secondary CTA (your tango)
          outline: "transparent",  // Ghost buttons
          disabled: "#c4bfb7",     // Disabled state
        },

        // === TEXT ===
        text: {
          primary: "#171717",      // Headings, important text
          secondary: "#5c5c5c",    // Body text, descriptions
          muted: "#8a8580",        // Captions, metadata, placeholders
          inverse: "#faf8f5",      // Text on dark backgrounds
        },

        // === BORDERS ===
        border: {
          light: "#e5e0d8",        // Subtle borders on light bg
          medium: "#d1cbc2",       // More visible borders
          dark: "#3a3a3a",         // Borders on dark bg
        },

        // === ACCENTS (Luxury touches) ===
        gold: "#b8965c",           // Premium badges, highlights
        copper: "#a67c52",         // Warm accent, sale tags
        sage: "#8fa387",           // Soft green for success/eco
        blush: "#d4a5a5",          // Soft pink for feminine collections
        slate: "#64748b",          // Cool neutral for icons

        // === FEEDBACK ===
        success: "#3d6b4f",        // Order confirmed, in stock
        error: "#9b3b3b",          // Errors (muted red, not harsh)
        warning: "#a67c52",        // Low stock, alerts
        info: "#5c7a8a",           // Informational
      },

      // === SPACING ===
      spacing: {
        'section': '80px',         // Desktop section padding
        'section-mobile': '48px',  // Mobile section padding
        'container': '32px',       // Container side padding
      },

      // === BORDER RADIUS ===
      borderRadius: {
        'card': '8px',             // Card corners
        'button': '4px',           // Button corners
        'badge': '2px',            // Badge corners
      },

      // === BOX SHADOWS ===
      boxShadow: {
        'card': '0 2px 8px rgba(23, 23, 23, 0.06)',
        'card-hover': '0 8px 24px rgba(23, 23, 23, 0.1)',
        'dropdown': '0 4px 16px rgba(23, 23, 23, 0.12)',
        'modal': '0 16px 48px rgba(23, 23, 23, 0.2)',
      },

      // === TRANSITIONS ===
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },

      // === TYPOGRAPHY ===
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['2.5rem', { lineHeight: '1.2' }],
        'h2': ['2rem', { lineHeight: '1.25' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },

      letterSpacing: {
        'tight': '-0.02em',        // Display headings
        'wide': '0.05em',          // Buttons, labels
        'wider': '0.1em',          // Badges, uppercase text
      },

      lineHeight: {
        'tight': '1.1',            // Large headings
        'snug': '1.25',            // Subheadings
        'relaxed': '1.75',         // Long-form content
      },

      // === MAX WIDTHS ===
      maxWidth: {
        'content': '1280px',       // Main content container
        'narrow': '768px',         // Narrow content (blog, forms)
      },

      // === Z-INDEX ===
      zIndex: {
        'dropdown': '100',
        'sticky': '200',
        'modal': '300',
        'toast': '400',
      },

      // === ASPECT RATIOS ===
      aspectRatio: {
        'product': '3 / 4',        // Product cards
        'hero': '16 / 9',          // Hero banners
        'square': '1 / 1',         // Thumbnails
        'wide': '21 / 9',          // Wide banners
      },

      // === BACKDROP BLUR ===
      backdropBlur: {
        'light': '8px',
        'heavy': '20px',
      },

      // === OPACITY ===
      opacity: {
        '15': '0.15',              // Subtle overlays
        '85': '0.85',              // Semi-transparent backgrounds
      },

      // === GRID TEMPLATES ===
      gridTemplateColumns: {
        'products': 'repeat(auto-fill, minmax(280px, 1fr))',
        'gallery': 'repeat(auto-fill, minmax(200px, 1fr))',
      },

      // === BACKGROUND IMAGES ===
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-overlay': 'linear-gradient(to bottom, transparent 0%, rgba(23,23,23,0.6) 100%)',
        'gradient-hero': 'linear-gradient(to right, rgba(23,23,23,0.8) 0%, transparent 60%)',
      },

      // === SCALE ===
      scale: {
        '102': '1.02',             // Subtle card hover
        '103': '1.03',             // Image zoom
      },

      // === BLUR ===
      blur: {
        'xs': '2px',
      },

      // === ANIMATIONS ===
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
        'slide-down': 'slide-down 0.4s ease-out',
      },

      // === FONTS ===
      fontFamily: {
        primary: ["var(--font-hammersmith)", "sans-serif"],
        secondary: ["var(--font-averia)", "serif"],
        brand: ["brand-primary", "sans-serif"],
      },
    },

    // === SCREENS (Breakpoints) ===
    screens: {
      'xs': '480px',               // Small phones
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};

export default config;
