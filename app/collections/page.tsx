import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import MobileNav from "@/src/components/layout/MobileNav";

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="h-screen bg-violet-500 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">COLLECTIONS</h1>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
