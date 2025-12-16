import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-creme py-section-mobile md:py-section overflow-hidden">
      <div className="max-w-content mx-auto px-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"
                alt="Modern living room interior"
                fill
                className="object-cover object-center"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white rounded-xl p-5 shadow-lg max-w-[200px]">
              <p className="text-h3 text-tango font-bold font-secondary">20+</p>
              <p className="text-small text-text-secondary">Years of Craftsmanship</p>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-tango/20 rounded-2xl -z-10" />
          </div>

          {/* Right - Content */}
          <div className="lg:pl-8 px-4 md:px-8 text-center lg:text-center">
            {/* Section Header */}
            <div className="mb-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-tango rounded-full" />
                <span className="text-caption text-tango uppercase tracking-wider font-medium">
                  Our Story
                </span>
              </div>
              <h2 className="text-h2 md:text-h1 text-text-primary font-secondary tracking-tight mb-4">
                Inspire your space through art and design.
              </h2>
            </div>

            {/* Paragraphs */}
            <p className="text-body text-text-secondary leading-relaxed mb-5">
              &ldquo;CAFCO&rdquo; believes that furniture should do more than serve a practical purpose. It should express your personal taste, beautify your surroundings, and make you feel comfortable. We take pleasure in our handiwork and only use the best materials to make things that will last a lifetime.
            </p>
            <p className="text-body text-text-secondary leading-relaxed mb-8">
              Whether you&apos;re looking for contemporary patterns or classic Indian traditions, we have something for everyone. We provide a vast selection of solutions to suit any taste, ranging from warm chairs and couches to chic coffee tables and luxurious bed frames.
            </p>

            {/* CTA Button */}
            <button className="inline-flex items-center gap-2 bg-tango text-white px-6 py-3 rounded-full font-medium hover:bg-tango/90 transition-colors">
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
