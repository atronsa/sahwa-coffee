import { HOME_PRODUCTS } from "@/data/home-products";

export default function Product() {
  return (
    <section className="w-full bg-cream py-12 sm:py-14 md:py-16 lg:py-20 px-8 sm:px-10 md:px-12 lg:px-14 xl:px-20 font-montserrat">
      {/* Product cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
        {HOME_PRODUCTS.map((product) => (
          <div
            key={product.label}
            className="group relative flex flex-col justify-end overflow-hidden rounded-none h-150 md:h-200"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${product.image})` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-black/10" />

            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-4 -right-2 select-none text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-black leading-none tracking-tighter text-white/10"
            >
              {product.label}
            </span>

            <div className="relative z-10 flex flex-col gap-3 sm:gap-4 md:gap-5 p-6 sm:p-8 md:p-10 lg:p-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-cream leading-tight">
                {product.title}
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-cream max-w-lg">
                {product.description}
              </p>

              <div className="mt-2 sm:mt-4">
                <a
                  href={product.href}
                  className="group/btn relative inline-flex items-center gap-2 sm:gap-3 overflow-hidden border border-amber-400 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-amber-400 transition-all duration-300 hover:bg-amber-400 hover:text-stone-900 focus:outline-none"
                >
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover/btn:translate-x-full" />
                  {product.cta}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
