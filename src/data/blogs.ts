// Shared blog data used across the site
export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "The Art of Minimalist Living",
    description: "Discover how thoughtful furniture choices can transform your space into a sanctuary of calm and intentional design.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    category: "Interior Design",
    date: "December 20, 2025",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Sustainable Craftsmanship",
    description: "Exploring the intersection of eco-conscious materials and timeless furniture design for the modern home.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
    category: "Sustainability",
    date: "December 18, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Wood Selection Guide",
    description: "A comprehensive guide to understanding different wood types and their unique characteristics for furniture.",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1200&auto=format&fit=crop",
    category: "Materials",
    date: "December 15, 2025",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Creating Cozy Corners",
    description: "Transform overlooked spaces into intimate reading nooks and relaxation spots with the right furniture pieces.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    category: "Home Styling",
    date: "December 12, 2025",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 5,
    title: "The Heritage of Joinery",
    description: "Celebrating traditional woodworking techniques that have been passed down through generations of master craftsmen.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop",
    category: "Craftsmanship",
    date: "December 10, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Color Psychology in Interiors",
    description: "Understanding how color choices in furniture and decor influence mood, productivity, and overall well-being.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    category: "Design Theory",
    date: "December 8, 2025",
    readTime: "5 min read",
    featured: false,
  },
];

export const categories = ["All", "Interior Design", "Sustainability", "Materials", "Home Styling", "Craftsmanship", "Design Theory"];
