"use client";

import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/src/data/blogs";

export default function Marketing() {
  // Get the first 3 blogs for the homepage section
  const displayBlogs = blogs.slice(0, 3);
  const featuredBlog = displayBlogs[0];
  const sidebarBlogs = displayBlogs.slice(1);

  return (
    <section className="bg-creme border-t border-black/5">

      {/* Editorial Header */}
      <div className="max-w-[1920px] mx-auto px-4 py-16 md:py-24 text-center border-b border-black/5">
        <span className="block text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-1.5">
          The Journal
        </span>
        <h2 className="text-4xl md:text-6xl font-secondary text-alpha tracking-tight">
          Design Notes
        </h2>
      </div>

      {/* Magazine Grid */}
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/5 border-b border-black/5">

          {/* Main Feature - Spans 2 cols on desktop */}
          <Link href="/blogs" className="md:col-span-2 group relative cursor-pointer md:min-h-[80vh] block">
            <div className="relative h-[60vh] md:h-full w-full overflow-hidden">
              <Image
                src={featuredBlog.image}
                alt={featuredBlog.title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-alpha/10 group-hover:bg-alpha/0 transition-colors duration-700" />

              {/* Overlay Content */}
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
                <div className="max-w-xl text-creme transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-center gap-4 mb-4 text-xs font-primary uppercase tracking-widest opacity-90">
                    <span>{featuredBlog.category}</span>
                    <span className="w-8 h-[1px] bg-creme/60" />
                    <span>{featuredBlog.date}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-secondary leading-tight mb-6">
                    {featuredBlog.title}
                  </h3>
                  <p className="text-sm md:text-base font-primary leading-relaxed opacity-90 hidden md:block max-w-md">
                    {featuredBlog.description}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-transparent group-hover:border-creme transition-colors duration-500">
                    Read Story
                    <span className="text-xs">{featuredBlog.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Sidebar Column - Stacked Items */}
          <div className="md:col-span-1 flex flex-col divide-y divide-black/5">
            {/* Sidebar blogs - hidden on mobile, visible on desktop */}
            {sidebarBlogs.map((blog) => (
              <Link href="/blogs" key={blog.id} className="hidden md:block group relative flex-1 min-h-[40vh] md:min-h-0 cursor-pointer overflow-hidden bg-white hover:bg-ivory transition-colors duration-500">
                <div className="relative h-2/3 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-8 h-1/3 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3 text-[0.6rem] font-primary uppercase tracking-widest text-alpha/60">
                    <span>{blog.category}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-secondary text-alpha mb-3 group-hover:text-tango transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-alpha/70 font-primary leading-relaxed line-clamp-2">
                    {blog.description}
                  </p>
                </div>
              </Link>
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

      {/* Footer Link - hidden on mobile, visible on desktop */}
      <div className="hidden md:block mt-12 text-center pb-12">
        <Link href="/blogs" className="inline-block text-xs uppercase tracking-widest border-b border-alpha/30 pb-1 hover:border-alpha transition-colors duration-300">
          Read All Stories
        </Link>
      </div>
    </section>
  );
}
