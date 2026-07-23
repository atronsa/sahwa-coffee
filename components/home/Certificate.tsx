import Link from "next/link";
import Image from "next/image";

export default function Certificate() {
  return (
    <section className="relative w-full h-100 md:h-120 overflow-hidden">
      <Image
        src="/images/certificate.webp"
        alt="B-Corp Certification"
        fill
        className="object-cover"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex h-full items-center px-8 sm:px-10 md:px-16 lg:px-24">
        <div className="flex flex-col gap-6 max-w-3xl">
          <h2 className="font-(family-name:--font-dancing-script) text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            We are a by ECTA.
          </h2>

          <p className="max-w-xl md:max-w-2xl text-xs sm:text-sm font-light leading-[1.7] text-cream font-montserrat">
            Sahwa Coffee operates under a valid Commercial Coffee Export License
            issued by the Ethiopian Coffee and Tea Authority (ECTA). This
            certification authorizes the company to export Ethiopian coffee in
            compliance with national regulations and international trade
            requirements, ensuring buyers receive products sourced and shipped
            through a fully licensed and legally recognized exporter.
          </p>

          {/* <Link
            href="https://www.bcorporation.net/en-us/find-a-b-corp/company/anonymous-coffee-roasters-llc/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex w-fit items-center gap-3 overflow-hidden border border-white/50 px-8 py-4 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-500 hover:border-white hover:bg-white hover:text-stone-900 focus:outline-none font-montserrat"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
