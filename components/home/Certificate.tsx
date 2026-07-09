export default function Certificate() {
  return (
    <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden">

      {/* Full-width background image */}
      <img
        src="/images/certificate.webp"
        alt="B-Corp Certification"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content — left-aligned, vertically centered */}
      <div className="relative z-10 flex h-full items-center px-10 md:px-16 lg:px-24">
        <div className="flex flex-col gap-6 max-w-lg">


          {/* Title */}
          <h2 className="font-(family-name:--font-dancing-script) text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            We Are A Certified B‑Corp.
          </h2>

          {/* Description */}
          <p className="text-sm font-light leading-[1.9] text-white/60 font-montserrat">
            This certification is more than a symbol — it's a statement of who
            we are and how we work. B Corps™ meet the highest verified standards
            of social and environmental performance, transparency, and
            accountability.
          </p>

          {/* CTA */}
          <a
            href="https://www.bcorporation.net/en-us/find-a-b-corp/company/anonymous-coffee-roasters-llc/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex w-fit items-center gap-3 overflow-hidden border border-white/50 px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:border-white hover:bg-white hover:text-stone-900 focus:outline-none font-montserrat"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            See Our Certification
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
      </div>

    </section>
  );
}