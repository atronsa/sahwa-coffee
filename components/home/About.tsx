import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-cream font-montserrat">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-9xl px-6 sm:px-10 md:px-10 lg:px-14 xl:px-20 py-12 sm:py-16 md:py-20 gap-8 lg:gap-12">
        <div className="relative flex items-center justify-center order-2 lg:order-1">
          <div className="relative w-full aspect-4/4 sm:aspect-4/4 md:aspect-4/3 lg:aspect-5/5 overflow-hidden ">
            <Image
              src="/images/about.webp"
              alt="About Sahwa Coffee"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:gap-6 lg:gap-8 order-1 lg:order-2 lg:pl-4 xl:pl-10">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-stone-900 pb-2 sm:pb-0 text-center lg:text-left">
            Why Choose Us.
          </h2>

          <div className="space-y-3 sm:space-y-4 md:space-y-5 text-[13px] sm:text-sm text-black leading-6 sm:leading-7">
            <p>
              Sahwa Coffee is a premium Ethiopian coffee exporter dedicated to
              connecting the world&apos;s coffee market with the exceptional
              quality and heritage of Ethiopian Arabica. We work closely with
              trusted producers to source coffees that reflect the unique
              character, diversity, and authenticity of Ethiopia&apos;s renowned
              coffee-growing regions. Every lot is selected with precision to
              ensure outstanding quality, consistency, and traceability.
            </p>
            <p>
              Quality is at the heart of everything we do. From sourcing and
              processing to grading, quality evaluation, packaging, and export
              logistics, every stage is managed with meticulous attention to
              international standards. Our commitment to excellence ensures that
              every shipment preserves the integrity, freshness, and distinctive
              flavor profile expected by specialty coffee professionals
              worldwide.
            </p>
            <p>
              At Sahwa Coffee, we believe successful partnerships are built on
              trust, transparency, and reliability. By combining deep industry
              knowledge with customer-focused service, we provide tailored
              coffee solutions for importers, roasters, distributors, and
              retailers. Our goal is not only to supply exceptional Ethiopian
              coffee but also to build long-term relationships that create
              lasting value for our partners across global markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
