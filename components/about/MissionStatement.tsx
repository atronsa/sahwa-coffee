export default function MissionStatement() {
  return (
    <section className="relative bg-cream overflow-hidden font-montserrat">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 xl:px-20 py-12 sm:py-16 md:py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="h-px w-4 sm:w-6 bg-amber-400/60" />
            <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.15em] sm:tracking-[0.25em] uppercase text-amber-700 font-semibold">
              Our Mission
            </span>
            <span className="h-px w-4 sm:w-6 bg-amber-400/60" />
          </div>

          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed text-stone-900 mx-auto">
            To honor Ethiopia's coffee legacy by connecting smallholder farmers
            directly with the world —{" "}
            <span className="text-amber-700">
              one exceptional roast at a time.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
