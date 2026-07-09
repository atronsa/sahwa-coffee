import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-cream font-montserrat px-8 py-10 ">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-7xl">
        {/* Image Side */}
        <div className="relative flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-14 order-2 lg:order-1">
          <div className="relative w-full aspect-[4/5] sm:aspect-[4/4] md:aspect-[5/6] lg:aspect-[4/5] overflow-hidden shadow-2xl">
            <Image
              src="/images/about.png"
              alt="About Sahwa Coffee"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center gap-5 sm:gap-6 md:gap-8 px-6 sm:px-8 md:px-10 lg:px-14 py-10 sm:py-12 md:py-0 order-1 lg:order-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-stone-900 leading-tight">
            Why Choose Us.
          </h2>

          <div className="flex flex-col gap-4 sm:gap-5 text-xs md:text-sm lg:text-base leading-relaxed text-black">
            <p>
              Sahwa Coffee began as a single export contract between an Addis
              Ababa trader and a Hamburg roaster. That handshake has grown into
              a supply chain spanning Ethiopia, Kenya, Colombia, Rwanda, Yemen,
              and Brazil.
            </p>
            <p>
              We believe the best coffee comes from knowing the people who grow
              it. Our team spends months each year at origin — cupping,
              negotiating, and building the kind of trust that shows up in the
              cup.
            </p>
            <p>
              From farm selection to final shipment, quality drives every
              decision. We cup every lot, inspect every bag, and stand behind
              every contract we sign.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
