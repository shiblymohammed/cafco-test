export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-0">
        {/* Desktop Hero Image */}
        <img 
          src="/herodesktop.jpg" 
          alt="Hero Desktop" 
          className="hidden md:block w-full h-full object-cover"
        />
        
        {/* Mobile Hero Image */}
        <img 
          src="/heromobile.jpg" 
          alt="Hero Mobile" 
          className="block md:hidden w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
