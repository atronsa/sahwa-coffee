import { CONTACT_LINKS } from "@/data/contact-links";

export default function Hero() {
  return (
    <section className="relative bg-cream overflow-hidden font-montserrat">
      <div className="relative max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 lg:pb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-8 mt-4 md:mt-0 bg-white/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-amber-200/50 shadow-sm">
            <span className="h-px w-4 sm:w-8 bg-linear-to-r from-transparent to-amber-400/60" />
            <span className="text-[9px] md:text-[10px] tracking-[0.15em] sm:tracking-[0.25em] uppercase text-stone-600 font-medium whitespace-nowrap">
              Get in Touch
            </span>
            <span className="h-px w-4 sm:w-8 bg-linear-to-l from-transparent to-amber-400/60" />
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-stone-900 mb-4 md:mb-6 leading-tight">
            Let's start a
            <span className="relative font-medium">
              <span className="relative z-10"> conversation</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-200/40 z-0" />
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-xs sm:text-sm md:text-sm lg:text-base text-black leading-6 sm:leading-7 mb-8">
            Have a question about our coffee, shipping, or just want to say
            hello? We'd love to hear from you. Reach out and we'll get back
            within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 md:mt-12">
            {CONTACT_LINKS.map((contact, index) => (
              <div
                key={index}
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
              >
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/40 backdrop-blur-sm rounded-2xl border border-amber-100 hover:border-amber-300 hover:bg-white/60 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-dark-brown group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span className="text-[13px] sm:text-sm font-medium text-stone-700 break-all">
                    {contact.email}
                  </span>
                </a>

                <a
                  href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/40 backdrop-blur-sm rounded-2xl border border-amber-100 hover:border-amber-300 hover:bg-white/60 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-dark-brown group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <span className="text-[13px] sm:text-sm font-medium text-stone-700 whitespace-nowrap">
                    {contact.phone}
                  </span>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <div className="h-px w-24 bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
