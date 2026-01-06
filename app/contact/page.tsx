"use client";

import { useState } from "react";

const contactInfo = [
  {
    title: "Visit Our Showroom",
    details: ["123 Design District", "Milan, Italy 20121"],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Call Us",
    details: ["+39 02 1234 5678", "Mon - Sat: 10am - 7pm"],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Email Us",
    details: ["hello@cafco.com", "support@cafco.com"],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "What are your showroom hours?",
    answer: "Our showroom is open Monday through Saturday, 10am to 7pm. We're closed on Sundays and public holidays.",
  },
  {
    question: "Do you offer design consultations?",
    answer: "Yes! We offer complimentary design consultations both in-store and virtually. Book an appointment to discuss your project with our experts.",
  },
  {
    question: "What is your delivery timeframe?",
    answer: "Standard delivery takes 2-4 weeks. Custom orders may take 6-8 weeks depending on specifications.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 25 countries worldwide. International shipping rates and times vary by location.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main className="pt-20 bg-creme min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-3 text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-4">
              <span className="w-8 h-[1px] bg-alpha/30"></span>
              Get In Touch
              <span className="w-8 h-[1px] bg-alpha/30"></span>
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-secondary text-alpha leading-[0.95] tracking-tight mb-6">
              Contact <span className="italic font-light">Us</span>
            </h1>
            <p className="text-base md:text-lg text-alpha/70 font-primary leading-relaxed max-w-xl mx-auto">
              We&apos;d love to hear from you. Whether you have a question about our products, need design advice, or want to visit our showroom.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20 border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group p-8 md:p-10 bg-white border border-black/5 hover:border-alpha/20 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-alpha/20 text-alpha mb-6 group-hover:bg-alpha group-hover:text-creme transition-colors duration-300">
                  {info.icon}
                </div>
                <h3 className="text-lg font-secondary text-alpha mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-sm font-primary text-alpha/60 leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <span className="text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-2 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-alpha/30"></span>
                Send a Message
              </span>
              <h2 className="text-3xl md:text-4xl font-secondary text-alpha leading-tight mb-8">
                How Can We <span className="italic font-light">Help?</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-primary uppercase tracking-wider text-alpha/60 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-alpha/10 text-alpha text-sm font-primary focus:outline-none focus:border-alpha/40 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-primary uppercase tracking-wider text-alpha/60 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-alpha/10 text-alpha text-sm font-primary focus:outline-none focus:border-alpha/40 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-primary uppercase tracking-wider text-alpha/60 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-alpha/10 text-alpha text-sm font-primary focus:outline-none focus:border-alpha/40 transition-colors"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-primary uppercase tracking-wider text-alpha/60 mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-alpha/10 text-alpha text-sm font-primary focus:outline-none focus:border-alpha/40 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Question</option>
                      <option value="order">Order Status</option>
                      <option value="consultation">Design Consultation</option>
                      <option value="partnership">Business Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-primary uppercase tracking-wider text-alpha/60 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-alpha/10 text-alpha text-sm font-primary focus:outline-none focus:border-alpha/40 transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-alpha text-creme text-xs uppercase tracking-widest font-primary hover:bg-alpha/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div>
              <span className="text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-2 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-alpha/30"></span>
                Find Us
              </span>
              <h2 className="text-3xl md:text-4xl font-secondary text-alpha leading-tight mb-8">
                Our <span className="italic font-light">Location</span>
              </h2>

              {/* Google Map Embed */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[500px] overflow-hidden border border-alpha/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.1234567890123!2d9.1859243!3d45.4654219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6aec34636a1%3A0xab7f4e27101a2e13!2sMilan%2C%20Metropolitan%20City%20of%20Milan%2C%20Italy!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Address below map */}
              <div className="mt-6 p-6 bg-white border border-alpha/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-alpha/20 text-alpha">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-secondary text-alpha mb-1">CAFCO Showroom</h4>
                    <p className="text-xs font-primary text-alpha/60 leading-relaxed">
                      123 Design District, Milan, Italy 20121
                    </p>
                    <a
                      href="https://maps.google.com/?q=Milan,Italy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-xs uppercase tracking-wider font-primary text-alpha hover:text-tango transition-colors"
                    >
                      Get Directions
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-alpha">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-3 text-xs font-primary uppercase tracking-[0.25em] text-creme/50 mb-4">
                <span className="w-8 h-[1px] bg-creme/30"></span>
                Common Questions
                <span className="w-8 h-[1px] bg-creme/30"></span>
              </span>
              <h2 className="text-3xl md:text-4xl font-secondary text-creme leading-tight">
                Frequently <span className="italic font-light">Asked</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-creme/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-creme/5 transition-colors"
                  >
                    <span className="text-base font-secondary text-creme pr-4">{faq.question}</span>
                    <span className={`text-creme/60 transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-6 pb-6 text-sm font-primary text-creme/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 md:py-20 border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="text-center">
            <span className="inline-flex items-center gap-3 text-xs font-primary uppercase tracking-[0.25em] text-alpha/60 mb-4">
              <span className="w-8 h-[1px] bg-alpha/30"></span>
              Follow Us
              <span className="w-8 h-[1px] bg-alpha/30"></span>
            </span>
            <h3 className="text-2xl md:text-3xl font-secondary text-alpha mb-8">
              Stay <span className="italic font-light">Connected</span>
            </h3>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-alpha/20 text-alpha hover:bg-alpha hover:text-creme transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-alpha/20 text-alpha hover:bg-alpha hover:text-creme transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-alpha/20 text-alpha hover:bg-alpha hover:text-creme transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-alpha/20 text-alpha hover:bg-alpha hover:text-creme transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
