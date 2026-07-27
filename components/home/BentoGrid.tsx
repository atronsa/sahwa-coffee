import Link from "next/link";

export default function BentoGrid() {
  return (
    <section className="w-full bg-stone-950 px-6 sm:px-10 md:px-10 lg:px-14 xl:px-20 py-12 sm:py-16 md:py-20">
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 auto-rows-auto lg:grid-rows-4 gap-4 sm:gap-5 lg:gap-5 min-h-150 sm:min-h-175 lg:h-195">
        {/* A — Large feature: farm photo + headline */}
        <div
          className="group col-span-1 sm:col-span-2 lg:col-span-4 lg:row-span-3 relative overflow-hidden min-h-70 sm:min-h-87.5 lg:min-h-0"
          style={{
            backgroundImage: "url('/images/about.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500 group-hover:from-black/95" />
          <div className="absolute bottom-0 left-0 z-10 flex flex-col gap-2 sm:gap-3 p-5 sm:p-6 lg:p-7">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-amber-400 font-montserrat">
              Origin to Cup
            </span>
            <h2 className="font-(family-name:--font-dancing-script) text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
              Coffee grown where it belongs.
            </h2>
            <div className="h-px w-8 sm:w-10 bg-amber-400/50" />
            <p className="text-[11px] sm:text-xs font-light leading-relaxed text-white/60 font-montserrat">
              We travel to farms, not trade floors sourcing directly from
              highland cooperatives across 6+ countries.
            </p>
          </div>
        </div>

        {/* B — Brand statement (hidden on mobile) */}
        <div className="hidden lg:flex col-span-6 row-span-1 items-center justify-between border border-stone-800 bg-stone-900/60 rounded-2xl px-6 xl:px-8">
          <span className="font-(family-name:--font-dancing-script) text-xl sm:text-2xl lg:text-3xl font-bold text-white">
            Direct trade. No middlemen. Better coffee.
          </span>
          <span className="h-px w-12 xl:w-16 bg-amber-400/40 shrink-0 hidden xl:block" />
        </div>

        {/* C — Stat: Years */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-3 lg:row-span-2 flex flex-col justify-between bg-amber-400 p-5 sm:p-6 lg:p-7 min-h-40 sm:min-h-45 lg:min-h-0">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-stone-700 font-montserrat font-semibold">
            Where We Export
          </span>
          <div>
            <span className="font-(family-name:--font-dancing-script) text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none text-stone-900">
              20+
            </span>
            <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-stone-700 font-montserrat">
              Export Destination
            </p>
          </div>
        </div>

        {/* D — Stat: Origins */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-3 lg:row-span-2 flex flex-col justify-between border border-stone-800 bg-stone-900 p-5 sm:p-6 lg:p-7 min-h-40 sm:min-h-45 lg:min-h-0">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-stone-500 font-montserrat font-semibold">
            We Source From
          </span>
          <div>
            <span className="font-(family-name:--font-dancing-script) text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none text-amber-400">
              6+
            </span>
            <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-stone-400 font-montserrat">
              Origin Countries
            </p>
          </div>
        </div>

        {/* E — Direct Trade stat */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-5 lg:row-span-1 flex flex-col justify-between border border-stone-800 bg-stone-900 p-5 sm:p-6 lg:p-7 min-h-32.5 sm:min-h-37.5 lg:min-h-0">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-stone-500 font-montserrat font-semibold">
            Our Model
          </span>
          <div className="flex items-end justify-between">
            <div>
              <span className="font-(family-name:--font-dancing-script) text-4xl sm:text-5xl font-black text-white">
                100%
              </span>
              <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-stone-400 font-montserrat">
                Direct Trade
              </p>
            </div>
            <span className="h-px w-8 sm:w-10 bg-stone-700 mb-2" />
          </div>
        </div>

        {/* F — CTA cell */}
        <Link
          href="/inquiry-request"
          className="col-span-1 sm:col-span-1 lg:col-span-5 lg:row-span-1 flex flex-col justify-between bg-stone-900 border border-amber-400/20 p-5 sm:p-6 lg:p-7 group cursor-pointer hover:bg-amber-400 transition-colors duration-500 min-h-32.5 sm:min-h-37.5 lg:min-h-0"
        >
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-amber-400 font-montserrat font-semibold group-hover:text-stone-700 transition-colors duration-500">
            Get Started
          </span>
          <div className="flex items-end justify-between">
            <span className="font-(family-name:--font-dancing-script) text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-stone-900 transition-colors duration-500">
              Request a Quote →
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
