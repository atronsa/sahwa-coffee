export default function BentoGrid() {
  return (
    <section className="w-full bg-stone-950 px-6 py-16 md:px-15 md:py-15">

      {/* Bento grid — 10 cols, 4 rows, full width */}
      <div className="grid w-full grid-cols-10 grid-rows-4 gap-5 h-[700px] md:h-[780px]">

        {/* A — Large feature: farm photo + headline (col 1–4, row 1–3) */}
        <div
          className="group col-span-10 row-span-2 md:col-span-4 md:row-span-3 relative overflow-hidden"
          style={{ backgroundImage: "url('/images/about.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500 group-hover:from-black/95" />
          <div className="absolute bottom-0 left-0 z-10 flex flex-col gap-3 p-7">
            <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-montserrat">
              Origin to Cup
            </span>
            <h2 className="font-(family-name:--font-dancing-script) text-4xl font-bold leading-tight text-white md:text-5xl">
              Coffee grown where it belongs.
            </h2>
            <div className="h-px w-10 bg-amber-400/50" />
            <p className="max-w-xs text-xs font-light leading-relaxed text-white/60 font-montserrat">
              We travel to farms, not trade floors — sourcing directly from highland cooperatives across 6 countries.
            </p>
          </div>
        </div>

        {/* B — Wide top banner: brand statement (col 5–10, row 1) */}
        <div className="col-span-10 row-span-1 md:col-span-6 md:row-span-1 hidden md:flex items-center justify-between border border-stone-800 bg-stone-900/60 px-8">
          <span className="font-(family-name:--font-dancing-script) text-2xl font-bold text-white md:text-3xl">
            Direct trade. No middlemen. Better coffee.
          </span>
          <span className="h-px w-16 bg-amber-400/40 shrink-0 hidden lg:block" />
        </div>

        {/* C — Stat: Years (col 5–7, row 2–3) */}
        <div className="col-span-5 row-span-1 md:col-span-3 md:row-span-2 flex flex-col justify-between bg-amber-400 p-7">
          <span className="text-[10px] uppercase tracking-[0.25em] text-stone-700 font-montserrat font-semibold">
            In the Trade
          </span>
          <div>
            <span className="font-(family-name:--font-dancing-script) text-7xl font-black leading-none text-stone-900 md:text-8xl">
              12+
            </span>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-stone-700 font-montserrat">
              Years Exporting
            </p>
          </div>
        </div>

        {/* D — Stat: Origins (col 8–10, row 2–3) */}
        <div className="col-span-5 row-span-1 md:col-span-3 md:row-span-2 flex flex-col justify-between border border-stone-800 bg-stone-900 p-7">
          <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-montserrat font-semibold">
            We Source From
          </span>
          <div>
            <span className="font-(family-name:--font-dancing-script) text-7xl font-black leading-none text-amber-400 md:text-8xl">
              6
            </span>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-stone-400 font-montserrat">
              Origin Countries
            </p>
            <p className="mt-2 text-[10px] text-stone-600 font-montserrat leading-relaxed">
              Ethiopia · Kenya · Colombia<br />Rwanda · Yemen · Brazil
            </p>
          </div>
        </div>

        {/* E — Direct Trade stat (col 1–5, row 4) */}
        <div className="col-span-5 row-span-1 flex flex-col justify-between border border-amber-400/20 bg-stone-900 p-7">
          <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-montserrat font-semibold">
            Our Model
          </span>
          <div className="flex items-end justify-between">
            <div>
              <span className="font-(family-name:--font-dancing-script) text-5xl font-black text-white">
                100%
              </span>
              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-stone-500 font-montserrat">
                Direct Trade
              </p>
            </div>
            <span className="h-px w-10 bg-stone-700 mb-2" />
          </div>
        </div>

        {/* F — CTA cell (col 6–10, row 4) */}
        <div className="col-span-5 row-span-1 flex flex-col justify-between bg-stone-900 border border-amber-400/20 p-7 group cursor-pointer hover:bg-amber-400 transition-colors duration-500">
          <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-montserrat font-semibold group-hover:text-stone-700 transition-colors duration-500">
            Get Started
          </span>
          <div className="flex items-end justify-between">
            <a
              href="#contact"
              className="font-(family-name:--font-dancing-script) text-3xl font-bold text-white group-hover:text-stone-900 transition-colors duration-500 md:text-4xl"
            >
              Request a Quote →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}