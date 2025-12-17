"use client";

import Image from "next/image";

const articles = [
  {
    id: 1,
    category: "Design",
    title: "The Art of Slow Living",
    excerpt: "Embracing minimalism and intentionality in the modern home. How reducing noise creates space for clarity.",
    date: "Oct 24, 2025",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2000&auto=format&fit=crop",
    slug: "art-of-slow-living"
  },
  {
    id: 2,
    category: "Craftsmanship",
    title: "In The Atelier: Stone",
    excerpt: "A look behind the scenes at our Italian marble quarries.",
    date: "Oct 18, 2025",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
    slug: "atelier-stone"
  },
  {
    id: 3,
    category: "Sustainability",
    title: "The Circular Future",
    excerpt: "Our commitment to 100% recycled packaging by 2026.",
    date: "Oct 10, 2025",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    slug: "circular-future"
  }
];

export default function Marketing() {
  return (
    <section className="bg-creme border-t border-black/5">
      
      {/* Editorial Header */}
      <div className="max-w-[1920px] mx-auto px-4 py-16 md:py-24 text-center border-b border-black/5">
        <span className="block text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-1.5">
          The Journal
        </span>
        <h2 className="text-4xl md:text-6xl font-secondary text-alpha tracking-tight mb-8">
          Design Notes
        </h2>
        <a href="/journal" className="inline-block text-xs uppercase tracking-widest border-b border-alpha/30 pb-1 hover:border-alpha transition-colors duration-300">
            Read All Stories
        </a>
      </div>

      {/* Magazine Grid */}
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/5 border-b border-black/5">
          
          {/* Main Feature - Spans 2 cols on desktop */}
          <div className="md:col-span-2 group relative cursor-pointer md:min-h-[80vh]">
             <div className="relative h-[60vh] md:h-full w-full overflow-hidden">
                <Image
                    src={articles[0].image}
                    alt={articles[0].title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-alpha/10 group-hover:bg-alpha/0 transition-colors duration-700" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
                    <div className="max-w-xl text-creme transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                        <div className="flex items-center gap-4 mb-4 text-xs font-primary uppercase tracking-widest opacity-90">
                            <span>{articles[0].category}</span>
                            <span className="w-8 h-[1px] bg-creme/60" />
                            <span>{articles[0].date}</span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-secondary leading-tight mb-6">
                            {articles[0].title}
                        </h3>
                        <p className="text-sm md:text-base font-primary leading-relaxed opacity-90 hidden md:block max-w-md">
                            {articles[0].excerpt}
                        </p>
                        <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-transparent group-hover:border-creme transition-colors duration-500">
                            Read Story
                        </div>
                    </div>
                </div>
             </div>
          </div>

          {/* Sidebar Column - Stacked Items */}
          <div className="md:col-span-1 flex flex-col divide-y divide-black/5">
            {articles.slice(1).map((article) => (
                <div key={article.id} className="group relative flex-1 min-h-[40vh] md:min-h-0 cursor-pointer overflow-hidden bg-white hover:bg-ivory transition-colors duration-500">
                    <div className="relative h-2/3 overflow-hidden">
                         <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                        />
                    </div>
                    <div className="p-8 h-1/3 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-3 text-[0.6rem] font-primary uppercase tracking-widest text-alpha/60">
                            <span>{article.category}</span>
                            <span>•</span>
                            <span>{article.date}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-secondary text-alpha mb-3 group-hover:text-tango transition-colors duration-300">
                            {article.title}
                        </h3>
                         <p className="text-xs text-alpha/70 font-primary leading-relaxed line-clamp-2">
                            {article.excerpt}
                        </p>
                    </div>
                </div>
            ))}
            
            {/* Newsletter Block */}
            <div className="flex-1 bg-alpha text-creme p-8 md:p-12 flex flex-col justify-center items-center text-center">
                <span className="text-[0.6rem] font-primary uppercase tracking-[0.3em] mb-6 opacity-60">
                    Newsletter
                </span>
                <h3 className="text-2xl md:text-3xl font-secondary mb-6 italic">
                    Join the Inner Circle
                </h3>
                <p className="text-xs font-primary leading-relaxed opacity-70 mb-8 max-w-xs mx-auto">
                    Subscribe for exclusive access to new drops, events, and design stories.
                </p>
                <div className="w-full max-w-xs relative">
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full bg-transparent border-b border-creme/30 py-2 text-xs uppercase tracking-wider placeholder:text-creme/30 focus:outline-none focus:border-creme transition-colors duration-300 text-center"
                    />
                     <button className="absolute right-0 top-0 bottom-0 text-[0.6rem] uppercase tracking-widest hover:text-creme/70 transition-colors">
                        Submit
                    </button>
                </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
