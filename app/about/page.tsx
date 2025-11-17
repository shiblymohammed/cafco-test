import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import MobileNav from "@/src/components/layout/MobileNav";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="h-screen bg-cyan-500 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">ABOUT</h1>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
