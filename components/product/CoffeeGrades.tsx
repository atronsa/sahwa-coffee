"use client";

import Link from "next/link";
import { Info } from "lucide-react";
import { GRADES } from "@/data/products";

export default function CoffeeGrades() {
  return (
    <main className="min-h-screen bg-cream font-montserrat">
      <section className="relative overflow-hidden px-6 sm:px-10 md:px-12 lg:px-14 xl:px-20 pb-12 sm:pb-16 md:pb-20 pt-14 sm:pt-18 md:pt-10">
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header */}
          <header className="mb-10 sm:mb-12 md:mb-14 text-center md:text-left">
            <div className="mb-3 sm:mb-4 flex justify-center md:justify-start">
              <span className="inline-block rounded-full bg-stone-900 px-4 py-1.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-widest text-cream">
                Sourcing Standards
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-stone-900 mb-4 md:mb-6 leading-tight">
              Coffee Grades Available
            </h1>
            <p className="mx-auto mt-3 sm:mt-4 md:mt-6 text-[13px] sm:text-sm leading-6 sm:leading-7 text-black md:mx-0">
              We supply Ethiopian Arabica coffee in accordance with Ethiopian
              grading standards, depending on origin, processing method, and
              buyer requirements. Each grade reflects a distinct balance of
              defect tolerance, cup quality, and intended use.
            </p>
          </header>

          {/* Divider */}
          <div className="my-10 sm:my-12 md:my-14 flex items-center gap-3 sm:gap-4">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-black/40 to-transparent" />
            <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.2em] sm:tracking-[0.3em] text-black whitespace-nowrap">
              Grading Scale
            </span>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-black/40 to-transparent" />
          </div>

          {/* Grades Grid */}
          <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GRADES.map((grade) => {
              const Icon = grade.icon;
              return (
                <div
                  key={grade.level}
                  className="group relative rounded-xl border border-stone-200 bg-white/60 p-6 shadow-sm backdrop-blur-sm transition-all hover:shadow-lg hover:border-amber-200"
                >
                  {/* Rotated grade badge, echoes product-detail image tag */}
                  <span className="absolute right-4 top-4 -rotate-3 rounded-full border-2 border-dashed border-amber-800/40 bg-cream/95 px-3 py-1 text-[9px] font-semibold uppercase tracking-widest text-amber-900 shadow-sm">
                    {grade.level}
                  </span>

                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 border border-amber-200">
                    <Icon size={18} className="text-amber-700" />
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-stone-900">
                    {grade.tier}
                  </h3>
                  <p className="mt-1 mb-3 text-[9px] sm:text-[11px] font-medium uppercase tracking-wider text-amber-700">
                    {grade.level}
                  </p>

                  <p className="text-[12px] sm:text-xs leading-relaxed text-black">
                    {grade.description}
                  </p>
                </div>
              );
            })}

            {/* Info card as 6th grid cell for balance on lg screens */}
            <div className="flex flex-col justify-center rounded-xl border border-dashed border-stone-300 bg-stone-50/60 p-6">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-stone-900">
                <Info size={18} className="text-cream" />
              </div>
              <p className="text-[12px] sm:text-[13px] leading-relaxed text-stone-900">
                Grade availability varies by origin and harvest season. Contact
                us for current lot offerings and sample requests.{" "}
                <Link href="/contact">
                  <span className="font-medium border-b-2">Get In Touch</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
