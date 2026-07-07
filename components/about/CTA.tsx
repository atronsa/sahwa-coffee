import Link from "next/link";
import { ArrowRight, Coffee } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative bg-cream overflow-hidden font-montserrat">
      <div className="relative max-w-4xl mx-auto px-8 sm:px-10 md:px-12 lg:px-14 py-16 sm:py-20 md:py-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-100/40 mb-6 sm:mb-8">
            <Coffee className="w-7 h-7 sm:w-8 sm:h-8 text-amber-700" />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-stone-900 mb-4 sm:mb-6 leading-snug">
            Ready to taste where
            <br className="sm:hidden" /> it all begins?
          </h2>

          <p className="text-sm sm:text-base text-black max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed">
            Explore our collection of single-origin Ethiopian coffees, each
            sourced directly from the farmers who grow them.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-stone-800 text-white text-xs sm:text-sm font-medium rounded-full px-6 sm:px-8 py-3 sm:py-3.5 hover:bg-stone-700 transition-all duration-300 hover:shadow-lg hover:shadow-stone-800/10 w-full sm:w-auto justify-center group cursor-pointer"
            >
              Browse Our Coffees
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-stone-900 text-xs sm:text-sm font-medium rounded-full px-6 sm:px-8 py-3 sm:py-3.5 border border-stone-900 hover:border-stone-400 hover:text-stone-900 transition-all duration-300 w-full sm:w-auto justify-center cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
