import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { type Coffee } from "@/data/products";
import { Leaf } from "lucide-react";
import RoastStamp from "./RoastStamp";

export default function CoffeeCard({ coffee }: { coffee: Coffee }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link href={`/products/${coffee.id}`}>
      <div className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-amber-100/50 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
        <div className="relative overflow-hidden">
          {!imgError ? (
            <Image
              src={coffee.image}
              alt={coffee.name}
              width={400}
              height={400}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="aspect-square w-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex aspect-square w-full items-center justify-center bg-stone-100">
              <span className="text-xs sm:text-sm text-stone-400">
                Image coming soon
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <RoastStamp type={coffee.type} />
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
          <div className="mb-2 flex items-start justify-between gap-2">
            <h3 className="text-base sm:text-lg font-bold leading-snug text-stone-900">
              {coffee.name}
            </h3>
            <span className="shrink-0 text-sm sm:text-base font-bold text-amber-700">
              ${coffee.price.toFixed(2)}
            </span>
          </div>

          <p className="mt-1 flex-1 text-[12px] sm:text-xs leading-relaxed text-black line-clamp-2 sm:line-clamp-3">
            {coffee.description}
          </p>

          <div className="mt-3 sm:mt-4 flex items-center justify-between">
            <span className="rounded-full border border-gray-300 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-medium text-black transition-colors group-hover:border-amber-200 group-hover:text-amber-700">
              {coffee.type}
            </span>
            <span className="flex items-center gap-1 text-[11px] sm:text-xs text-black">
              <Leaf size={9} className="sm:w-2.5 sm:h-2.5" />
              {coffee.origin}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
