"use client";

import Image from "next/image";
import { useState } from "react";
import { blogs, categories, Blog } from "@/src/data/blogs";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  const featuredBlog = blogs.find(blog => blog.featured);
  const regularBlogs = filteredBlogs.filter(blog => !blog.featured || selectedCategory !== "All");

  return (
    <main className="pt-20 bg-creme min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-3 text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-4">
              <span className="w-8 h-[1px] bg-alpha/30"></span>
              Our Journal
              <span className="w-8 h-[1px] bg-alpha/30"></span>
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-secondary text-alpha leading-[0.95] tracking-tight mb-6">
              Stories & <span className="italic font-light">Insights</span>
            </h1>
            <p className="text-base md:text-lg text-alpha/70 font-primary leading-relaxed max-w-xl mx-auto">
              Explore our collection of articles on design, craftsmanship, and the art of creating beautiful living spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-black/5 sticky top-16 bg-creme/95 backdrop-blur-sm z-10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-primary whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-alpha text-creme"
                    : "bg-transparent text-alpha/70 hover:text-alpha hover:bg-alpha/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      {selectedCategory === "All" && featuredBlog && !selectedBlog && (
        <section className="py-12 md:py-20">
          <div className="max-w-[1440px] mx-auto px-4 md:px-12">
            <div 
              className="group cursor-pointer"
              onClick={() => setSelectedBlog(featuredBlog)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden">
                  <Image
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-alpha/10 group-hover:bg-alpha/0 transition-colors duration-500" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-alpha text-creme text-[10px] uppercase tracking-wider font-primary">
                    Featured
                  </span>
                </div>
                <div className="lg:pr-12">
                  <span className="text-xs font-primary uppercase tracking-[0.2em] text-alpha/50 mb-3 block">
                    {featuredBlog.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-secondary text-alpha leading-tight mb-4 group-hover:text-tango transition-colors duration-300">
                    {featuredBlog.title}
                  </h2>
                  <p className="text-base md:text-lg text-alpha/70 font-primary leading-relaxed mb-6">
                    {featuredBlog.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-alpha/50 font-primary uppercase tracking-wider">
                    <span>{featuredBlog.date}</span>
                    <span className="w-1 h-1 bg-alpha/30 rounded-full"></span>
                    <span>{featuredBlog.readTime}</span>
                  </div>
                  <div className="mt-8">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold border-b border-alpha pb-1 group-hover:border-tango group-hover:text-tango transition-colors duration-300">
                      Read Article
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid or Selected Blog */}
      {selectedBlog ? (
        <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlog(null)} />
      ) : (
        <section className="py-12 md:py-20 border-t border-black/5">
          <div className="max-w-[1440px] mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {regularBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} onClick={() => setSelectedBlog(blog)} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      {!selectedBlog && (
        <section className="py-16 md:py-24 bg-alpha">
          <div className="max-w-[1440px] mx-auto px-4 md:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-flex items-center gap-3 text-xs font-primary uppercase tracking-[0.25em] text-creme/50 mb-4">
                <span className="w-8 h-[1px] bg-creme/30"></span>
                Stay Inspired
                <span className="w-8 h-[1px] bg-creme/30"></span>
              </span>
              <h3 className="text-3xl md:text-4xl font-secondary text-creme leading-tight mb-4">
                Subscribe to Our <span className="italic font-light">Newsletter</span>
              </h3>
              <p className="text-sm text-creme/60 font-primary mb-8">
                Get the latest articles, design tips, and exclusive insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-creme/10 border border-creme/20 text-creme placeholder:text-creme/40 text-sm font-primary focus:outline-none focus:border-creme/40 transition-colors"
                />
                <button className="px-6 py-3 bg-creme text-alpha text-xs uppercase tracking-wider font-primary hover:bg-creme/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}


// Blog Card Component
function BlogCard({ blog, onClick }: { blog: Blog; onClick: () => void }) {
  return (
    <article 
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden mb-5">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-alpha/20 group-hover:bg-alpha/0 transition-colors duration-500" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="px-4 py-2 bg-creme text-alpha text-xs uppercase tracking-wider font-primary">
            Read More
          </span>
        </div>
      </div>
      <span className="text-[10px] font-primary uppercase tracking-[0.2em] text-alpha/50 mb-2 block">
        {blog.category}
      </span>
      <h3 className="text-xl md:text-2xl font-secondary text-alpha leading-snug mb-3 group-hover:text-tango transition-colors duration-300">
        {blog.title}
      </h3>
      <p className="text-sm text-alpha/60 font-primary leading-relaxed mb-4 line-clamp-2">
        {blog.description}
      </p>
      <div className="flex items-center gap-3 text-[10px] text-alpha/40 font-primary uppercase tracking-wider">
        <span>{blog.date}</span>
        <span className="w-1 h-1 bg-alpha/30 rounded-full"></span>
        <span>{blog.readTime}</span>
      </div>
    </article>
  );
}

// Blog Detail Component
function BlogDetail({ blog, onBack }: { blog: Blog; onBack: () => void }) {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-primary text-alpha/60 hover:text-alpha transition-colors mb-8"
        >
          <span>←</span>
          Back to All Articles
        </button>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-primary uppercase tracking-[0.2em] text-alpha/50 mb-4 block">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-secondary text-alpha leading-tight mb-6">
              {blog.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-xs text-alpha/50 font-primary uppercase tracking-wider">
              <span>{blog.date}</span>
              <span className="w-1 h-1 bg-alpha/30 rounded-full"></span>
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] overflow-hidden mb-12">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-alpha/80 font-primary leading-relaxed mb-8">
              {blog.description}
            </p>
            
            <div className="space-y-6 text-base text-alpha/70 font-primary leading-loose">
              <p>
                In the world of interior design, the choices we make about our furniture speak volumes about our values and aspirations. Each piece tells a story, not just of craftsmanship and materials, but of the life we envision living within our spaces.
              </p>
              <p>
                The philosophy behind thoughtful furniture selection goes beyond mere aesthetics. It encompasses sustainability, functionality, and the emotional resonance that well-designed pieces bring to our daily lives. When we choose furniture with intention, we create environments that nurture our well-being and reflect our authentic selves.
              </p>
              <blockquote className="border-l-2 border-alpha/20 pl-6 italic text-alpha/60 my-8">
                &ldquo;Great design is not just about how something looks, but how it makes you feel when you live with it every day.&rdquo;
              </blockquote>
              <p>
                At CAFCO, we believe that every home deserves furniture that stands the test of time—both in durability and design. Our commitment to quality craftsmanship ensures that each piece becomes a cherished part of your home&apos;s story, growing more beautiful with age and use.
              </p>
              <p>
                As you consider your next furniture investment, we invite you to think beyond trends and embrace pieces that resonate with your personal aesthetic and values. The result will be a home that feels authentically yours—a sanctuary of comfort, beauty, and meaning.
              </p>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-alpha/10">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-primary text-alpha/50">Share this article</span>
                <div className="flex items-center gap-4">
                  <button className="w-10 h-10 flex items-center justify-center border border-alpha/20 hover:bg-alpha hover:text-creme transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center border border-alpha/20 hover:bg-alpha hover:text-creme transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center border border-alpha/20 hover:bg-alpha hover:text-creme transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
