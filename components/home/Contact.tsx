import Image from "next/image";

export default function Contact() {
  return (
    <section className="w-full bg-cream font-montserrat">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 max-w-9xl px-6 sm:px-10 md:px-10 lg:px-14 xl:px-20 py-12 sm:py-16 md:py-20 gap-8 lg:gap-12">
        <div className="flex flex-col justify-center gap-6 sm:gap-8 lg:pr-4 xl:pr-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-tight text-center md:text-left">
            Get In Touch.
          </h2>

          {/* Description */}
          <div className="flex flex-col gap-4 sm:gap-5 text-[13px] sm:text-sm font-light leading-6 text-black">
            <p>
              Whether you're an importer, roaster, or distributor we'd love to
              hear from you. Tell us what you're looking for and we'll get back
              within 24 hours.
            </p>
            <p>
              We work with partners of all sizes, from boutique roasters to
              large-scale distributors. Every conversation starts the same way
              with coffee.
            </p>
          </div>

          {/* CTA */}
          <a
            href="/contact"
            className="group relative inline-flex w-fit items-center gap-3 overflow-hidden border border-stone-900 px-8 py-4 mx-auto md:mx-0 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-900 transition-all duration-500 hover:bg-stone-900 hover:text-cream focus:outline-none"
          >
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            Send Us a Message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Right: image */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full aspect-4/4 sm:aspect-4/4 md:aspect-4/3 lg:aspect-5/5 overflow-hidden">
            <Image
              src="/images/place.jpg"
              alt="Sahwa Coffee Location"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />

            {/* Location badge */}
            <div className="absolute bottom-5 left-5 border-l-2 border-cream pl-4">
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-cream font-montserrat block">
                Headquartered in
              </span>
              <span className="text-xl md:text-2xl font-bold text-cream">
                Addis Ababa
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
