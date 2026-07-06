import { useState } from "react";
import Image from "next/image";
import { type Coffee } from "@/data/products";
import { Timer, Award } from "lucide-react";
import RoastStamp from "./RoastStamp";

export default function FeaturedCoffee({ coffee }: { coffee: Coffee }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
      <div className="relative">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl shadow-2xl">
          {!imgError ? (
            <Image
              src={coffee.image}
              alt={coffee.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-stone-100">
              <span className="text-xs sm:text-sm text-stone-400">
                Image coming soon
              </span>
            </div>
          )}
        </div>
        <RoastStamp type={coffee.type} />
      </div>

      <div>
        <div className="mb-3 sm:mb-4 inline-flex items-center gap-2">
          <span className="h-px w-4 sm:w-6 bg-amber-400/60" />
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-amber-700">
            Featured Roast
          </span>
          <span className="h-px w-4 sm:w-6 bg-amber-400/60" />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-stone-900">
          {coffee.name}
        </h2>

        <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
          <span className="text-2xl sm:text-3xl font-bold text-amber-700">
            ${coffee.price.toFixed(2)}
          </span>
        </div>

        <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-black">
          {coffee.description}
        </p>

        <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-black">
            <Timer
              size={12}
              className="sm:w-3.5 sm:h-3.5 shrink-0 text-amber-600"
            />
            Roasted within 48hrs
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-black">
            <Award
              size={12}
              className="sm:w-3.5 sm:h-3.5 shrink-0 text-amber-600"
            />
            Specialty Grade
          </div>
        </div>

        <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="rounded-full bg-stone-800 px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-[10px] font-medium uppercase tracking-widest text-cream">
            {coffee.type}
          </span>
          <span className="text-[10px] sm:text-xs text-black">
            {coffee.origin}
          </span>
        </div>
      </div>
    </div>
  );
}
