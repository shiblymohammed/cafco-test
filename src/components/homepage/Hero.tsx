export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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
    </section>
  );
}
