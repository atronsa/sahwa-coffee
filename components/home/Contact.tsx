export default function Contact() {
  return (
    <section className="w-full bg-cream">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 min-h-180 max-w-9xl">

        {/* Left: text */}
        <div className="flex flex-col justify-center gap-8 px-10 py-16 md:px-16 md:py-24">

          {/* Title */}
          <h2 className="font-(family-name:--font-dancing-script) text-4xl font-bold text-stone-900 leading-tight sm:text-5xl md:text-6xl">
            Get In Touch.
          </h2>

          {/* Description */}
          <div className="flex flex-col gap-5 text-sm font-light leading-relaxed text-black font-montserrat">
            <p>
              Whether you're an importer, roaster, or distributor — we'd love
              to hear from you. Tell us what you're looking for and we'll get
              back within 24 hours.
            </p>
            <p>
              We work with partners of all sizes, from boutique roasters to
              large-scale distributors. Every conversation starts the same way —
              with coffee.
            </p>
          </div>

          {/* CTA */}
          <a
            href="mailto:hello@sahwacoffee.com"
            className="group relative inline-flex w-fit items-center gap-3 overflow-hidden border border-stone-900 px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-900 transition-all duration-500 hover:bg-stone-900 hover:text-cream focus:outline-none font-montserrat"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            Send Us a Message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

        </div>

        {/* Right: image */}
        <div className="relative flex items-center justify-center min-h-50 md:min-h-full p-15">
          <div className="relative w-full">
            <img
              src="/images/place.jpg"
              alt="Sahwa Coffee Location"
              className="w-full h-auto object-contain block"
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Location badge */}
            <div className="absolute bottom-5 left-5 border-l-2 border-white/50 pl-4">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/60 font-montserrat block">
                Headquartered in
              </span>
              <span className="font-(family-name:--font-dancing-script) text-2xl font-bold text-white">
                Addis Ababa
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}