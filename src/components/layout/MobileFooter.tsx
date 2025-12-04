
export default function MobileFooter() {
  return (
    <footer className="md:hidden bg-neutral-900 text-white flex flex-col h-[40vh] px-6 pt-8 relative overflow-hidden">

      {/* TOP — ICON */}
      <div className="w-5 h-5 border border-neutral-500 rounded-full flex items-center justify-center mb-3">
        <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full"></div>
      </div>

      {/* SLOGAN + CALL BUTTON — SAME LINE */}
      <div className="flex justify-between items-center relative z-10">
        {/* LEFT — SLOGAN */}
        <div>
          <div className="text-xs text-neutral-400 font-light leading-relaxed">
            Designing spaces
          </div>
          <div className="text-xs text-neutral-400 font-light leading-relaxed">
            you'll love to live in
          </div>
        </div>

        {/* RIGHT — CALL BUTTON */}
        <button className="relative text-white font-light border border-white/50 px-4 py-2 rounded-[3px] text-xs active:scale-95 transition-all overflow-hidden group">
          <span className="absolute inset-0 bg-creme translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10 group-hover:text-alpha transition-colors duration-300">Call Now</span>
        </button>
      </div>

      {/* MIDDLE — 3 COLUMN LINKS */}
      <div className="flex justify-center gap-8 mt-10 relative z-10">
        {/* Column 1 */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[9px] uppercase tracking-widest text-neutral-600 mb-1">About</span>
          <a href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">About Us</a>
          <a href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">Furnitures</a>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[9px] uppercase tracking-widest text-neutral-600 mb-1">Info</span>
          <a href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">Contact</a>
          <a href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">Gallery</a>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[9px] uppercase tracking-widest text-neutral-600 mb-1">Socials</span>
          <a href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">Support</a>
          <a href="#" className="text-xs text-neutral-400 hover:text-white transition-colors">Instagram</a>
        </div>
      </div>

      {/* BOTTOM — LARGE BRAND NAME */}
      <div className="absolute bottom-[-18%] left-0 w-full select-none pointer-events-none">
        <div className="flex items-end justify-center">
          <span className="text-[30vw] font-bold tracking-[0.1em] text-neutral-800/80 leading-none">
            CAFCO
          </span>
        </div>
      </div>
    </footer>
  );
}
