import Link from "next/link";

export default function RequestQuote() {
  return (
    <section className="relative w-full h-100 md:h-120 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/request.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-4 text-center">
        <span className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-amber-400 font-semibold">
          <span className="h-px w-6 bg-amber-400" />
          Get Started
          <span className="h-px w-6 bg-amber-400" />
        </span>

        <h2 className="font-(family-name:--font-dancing-script) text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
          Ready to Source Premium Coffee?
        </h2>

        <p className="max-w-xl text-xs sm:text-sm font-light leading-relaxed text-cream font-montserrat">
          Tell us what you need origin, volume, roast profile and we'll get back
          within 24 hours with a tailored quote.
        </p>
        <Link
          href="/inquiry-request"
          className="group relative mt-2 inline-flex items-center gap-3 overflow-hidden bg-amber-400 px-8 py-4 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-900 transition-all duration-300 hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          Request a Quote
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
        </Link>
      </div>
    </section>
  );
}
