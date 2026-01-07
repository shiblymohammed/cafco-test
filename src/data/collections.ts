// Shared collections data used across the site
export interface Collection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  itemCount: number;
  featured?: boolean;
}

export const collections: Collection[] = [
  {
    id: 1,
    title: "Minimalist Luxe",
    subtitle: "The Art of Less",
    description: "Clean lines and refined simplicity define this collection. Each piece embodies the philosophy that true luxury lies in thoughtful restraint and impeccable craftsmanship.",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1920&auto=format&fit=crop",
    itemCount: 24,
    featured: true,
  },
  {
    id: 2,
    title: "Raw & Earthy",
    subtitle: "Organic Textures",
    description: "Celebrating natural materials in their most authentic form. This collection brings the warmth of nature indoors with organic textures and earthy tones.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1920&auto=format&fit=crop",
    itemCount: 18,
  },
  {
    id: 3,
    title: "Dark Academy",
    subtitle: "Moody Interiors",
    description: "Rich, dramatic pieces that create sophisticated atmospheres. Deep woods, leather accents, and timeless silhouettes for the discerning collector.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2600&auto=format&fit=crop",
    itemCount: 21,
  },
  {
    id: 4,
    title: "Coastal Serenity",
    subtitle: "Ocean Inspired",
    description: "Light, airy pieces that capture the tranquility of seaside living. Soft neutrals and natural fibers create a sense of calm and relaxation.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1920&auto=format&fit=crop",
    itemCount: 16,
  },
  {
    id: 5,
    title: "Urban Industrial",
    subtitle: "Metropolitan Edge",
    description: "Bold designs that blend raw industrial elements with refined comfort. Metal accents, exposed details, and architectural forms for modern city dwellers.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1920&auto=format&fit=crop",
    itemCount: 19,
  },
  {
    id: 6,
    title: "Scandinavian Pure",
    subtitle: "Nordic Simplicity",
    description: "The essence of Scandinavian design philosophy. Functional beauty, natural materials, and a commitment to sustainable craftsmanship.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1920&auto=format&fit=crop",
    itemCount: 22,
  },
];
