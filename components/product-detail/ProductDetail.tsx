import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { COFFEES } from "@/data/products";
import {
  ArrowLeft,
  MapPin,
  Mountain,
  Droplets,
  Coffee,
  Calendar,
  Sun,
  Quote,
} from "lucide-react";

interface ProductDetailProps {
  slug: string;
}

export default function ProductDetail({ slug }: ProductDetailProps) {
  const coffee = COFFEES.find((c) => c.id === slug);

  if (!coffee) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-cream font-montserrat">
      <section className="relative overflow-hidden px-8 sm:px-12 md:px-12 lg:px-14 xl:px-20 pb-16 sm:pb-20 md:pb-24 pt-24 sm:pt-28 md:pt-32">
        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Back button */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-black font-medium transition-colors mb-8 sm:mb-10"
          >
            <ArrowLeft size={16} />
            Back to Collection
          </Link>

          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:items-start md:gap-12 lg:gap-16">
            {/* Image */}
            <div className="relative md:sticky md:top-28">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src={coffee.image}
                  alt={coffee.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <span className="absolute right-3 top-3 -rotate-3 rounded-full border-2 border-dashed border-amber-800/40 bg-cream/95 px-3 py-1 text-[9px] font-semibold uppercase tracking-widest text-amber-900 shadow-sm">
                {coffee.type}
              </span>
            </div>

            {/* Details */}
            <div>
              {/* Type badge */}
              <div className="mb-3 sm:mb-4">
                <span className="inline-block rounded-full bg-stone-900 px-4 py-1.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-widest text-cream">
                  {coffee.type}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-stone-900">
                {coffee.name}
              </h1>

              <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl font-bold text-amber-700">
                  ${coffee.price.toFixed(2)}
                </span>
              </div>

              {/* Short description */}
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm leading-relaxed text-stone-600 italic border-l-2 border-amber-300 pl-4">
                {coffee.description}
              </p>

              {/* The Story Section */}
              <div className="mt-8">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-stone-900 mb-3">
                  <Quote size={16} className="text-amber-600" />
                  The Story
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-black">
                  {coffee.story}
                </p>
              </div>
              {/* Best For Section */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-stone-900 mb-3">
                  Best For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {coffee.bestFor.map((use) => (
                    <span
                      key={use}
                      className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[10px] sm:text-xs font-medium text-amber-800"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tasting Experience Section */}
              <div className="mt-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-stone-900 mb-3">
                  <Coffee size={16} className="text-amber-600" />
                  Tasting Experience
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-black">
                  {coffee.tastingExperience}
                </p>
              </div>

              {/* Tasting Notes */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-stone-900 mb-3">
                  Tasting Notes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {coffee.cupNotes.map((note) => (
                    <span
                      key={note}
                      className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[10px] sm:text-xs font-medium text-amber-800"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specs Grid */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-stone-200">
                <div className="flex items-start gap-2">
                  <MapPin
                    size={14}
                    className="shrink-0 text-amber-600 mt-0.5"
                  />
                  <div>
                    <p className="text-[10px] sm:text-xs text-stone-900 font-semibold uppercase tracking-wider">
                      Region
                    </p>
                    <p className="text-[10px] sm:text-xs pt-2 font-medium text-black">
                      {coffee.region}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mountain
                    size={14}
                    className="shrink-0 text-amber-600 mt-0.5"
                  />
                  <div>
                    <p className="text-[10px] sm:text-xs text-stone-900 font-semibold uppercase tracking-wider">
                      Altitude
                    </p>
                    <p className="text-[10px] sm:text-xs pt-2 font-medium text-black">
                      {coffee.altitude}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Droplets
                    size={14}
                    className="shrink-0 text-amber-600 mt-0.5"
                  />
                  <div>
                    <p className="text-[10px] sm:text-xs text-stone-900 font-semibold uppercase tracking-wider">
                      Process
                    </p>
                    <p className="text-[10px] sm:text-xs pt-2 font-medium text-black">
                      {coffee.process}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Coffee
                    size={14}
                    className="shrink-0 text-amber-600 mt-0.5"
                  />
                  <div>
                    <p className="text-[10px] sm:text-xs text-stone-900 font-semibold uppercase tracking-wider">
                      Varietal
                    </p>
                    <p className="text-[10px] sm:text-xs pt-2 font-medium text-black">
                      {coffee.varietal}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Sun size={14} className="shrink-0 text-amber-600 mt-0.5" />
                  <div>
                    <p className="text-[10px] sm:text-xs text-stone-900 font-semibold uppercase tracking-wider">
                      Acidity
                    </p>
                    <p className="text-[10px] sm:text-xs pt-2 font-medium text-black">
                      {coffee.acidity}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar
                    size={14}
                    className="shrink-0 text-amber-600 mt-0.5"
                  />
                  <div>
                    <p className="text-[10px] sm:text-xs text-stone-900 font-semibold uppercase tracking-wider">
                      Harvest
                    </p>
                    <p className="text-[10px] sm:text-xs pt-2 font-medium text-black">
                      {coffee.harvestSeason}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
