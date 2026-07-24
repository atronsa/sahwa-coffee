"use client";

import { COFFEES } from "@/data/products";
import FeaturedCoffee from "./FeaturedCoffee";
import CoffeeCard from "./CoffeeCard";

export default function Product() {
  const featured = COFFEES[0];

  return (
    <main className="min-h-screen bg-cream font-montserrat">
      <section className="relative overflow-hidden px-6 sm:px-10 md:px-12 lg:px-14 xl:px-20 pb-12 sm:pb-16 md:pb-20 pt-24 sm:pt-28 md:pt-32">
        <div className="relative z-10 mx-auto max-w-7xl">
          <header className="mb-10 sm:mb-12 md:mb-14 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-stone-900 mb-4 md:mb-6 leading-tight">
              The Coffee Bar
            </h1>
            <p className="mx-auto mt-3 sm:mt-4 md:mt-6 text-[13px] sm:text-sm leading-6 sm:leading-7 text-black md:mx-0">
              Our collection celebrates the birthplace of coffee Ethiopia. Each
              roast is sourced directly from smallholder farmers and
              cooperatives across the country's most renowned growing regions.
              We visit every farm, cup every lot, and roast in small batches to
              honor the distinct character of each origin. Discover the lineup
              and find the roast that speaks to your palate.
            </p>
          </header>

          <FeaturedCoffee coffee={featured} />

          <div className="my-12 sm:my-16 md:my-20 flex items-center gap-3 sm:gap-4">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-black/40 to-transparent" />
            <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.2em] sm:tracking-[0.3em] text-black whitespace-nowrap">
              Explore All
            </span>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-black/40 to-transparent" />
          </div>

          <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900">
                The Full Lineup
              </h2>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-black">
                Find your perfect roast
              </p>
            </div>
            <span className="rounded-full border border-amber-100 bg-white/50 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-black backdrop-blur-sm">
              {COFFEES.length} roasts available
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COFFEES.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
