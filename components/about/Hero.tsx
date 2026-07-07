export default function Hero() {
  return (
    <section className="relative bg-cream overflow-hidden font-montserrat">
      <div className="relative max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 lg:pb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-8 mt-4 md:mt-0 bg-white/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-amber-200/50 shadow-sm">
            <span className="h-px w-4 sm:w-8 bg-linear-to-r from-transparent to-amber-400/60" />
            <span className="text-[9px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.25em] uppercase text-stone-600 font-medium whitespace-nowrap">
              Our Story
            </span>
            <span className="h-px w-4 sm:w-8 bg-linear-to-l from-transparent to-amber-400/60" />
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-stone-900 mb-4 md:mb-6 leading-tight">
            Rooted in
            {/* <br className="xs:hidden" /> */}
            <span className="relative font-medium">
              <span className="relative z-10"> Ethiopia</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-200/40 z-0" />
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xs sm:text-sm md:text-sm lg:text-base text-black leading-relaxed mb-8">
            Sharing Ethiopia's finest coffees with the world — sourced directly
            from farmers, roasted in small batches, and delivered at peak
            freshness.
          </p>

          <div className="mt-16 flex justify-center">
            <div className="h-px w-24 bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
