import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="relative bg-white overflow-hidden font-montserrat">
      <div className="max-w-9xl mx-auto px-8 sm:px-10 md:px-12 lg:px-14 xl:px-20 py-16 sm:py-20 md:py-20">
        <div className="grid gap-10 md:gap-12 lg:gap-15 grid-cols-1 lg:grid-cols-2 md:items-center">
          {/* Left - Image */}
          <div className="relative order-2">
            <div className="relative w-full overflow-hidden rounded-xl">
              <Image
                src="/images/who-we-are.jpg"
                alt="Ethiopian coffee farm"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="pr-0 md:pr-8 order-1">
            {/* Label */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                <span className="h-px w-4 sm:w-6 bg-amber-400/60" />
                <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.15em] sm:tracking-[0.25em] uppercase text-amber-700 font-semibold">
                  Who We Are
                </span>
                <span className="h-px w-4 sm:w-6 bg-amber-400/60" />
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-stone-900 mb-6 sm:mb-8 text-center lg:text-left">
              The Sahwa Coffee Story
            </h1>

            <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm text-black leading-6 md:leading-7">
              <p>
                Welcome to Sahwa Coffee, an Ethiopian specialty coffee exporter
                dedicated to bringing the finest Arabica beans from farm to
                world. We work directly with smallholder farmers across
                Ethiopia's most renowned growing regions — from the floral
                highlands of Yirgacheffe to the bold depths of Sidamo — ensuring
                every lot is hand-picked, carefully processed, and shipped at
                peak freshness.
              </p>
              {/* Subtle impact note */}
              <p className="mt-6 text-xs sm:text-sm text-black italic leading-6 md:leading-7 border-l-2 border-amber-300 pl-4">
                Every purchase supports the farmers and communities behind each
                harvest. Every purchase supports the farmers and communities
                behind each harvest. Every purchase supports the farmers and
                communities behind each harvest.
              </p>
              <p>
                Our journey began in 2017 when our founder, Sifen, started Sahwa
                Coffee in Addis Ababa with a simple belief: the world deserves
                to taste Ethiopia's best coffee, and the farmers who grow it
                deserve to be paid fairly for their craft. Today, we partner
                with dedicated farming communities across the country, roasting
                in small batches and exporting to the USA, Middle East, and soon
                the UAE.
              </p>

              <p>
                At Sahwa Coffee, quality is everything. We cup every lot, roast
                to highlight each origin's unique character, and never
                compromise on freshness. Our partners include high-end hotels
                and specialty gift shops who share our passion for exceptional
                coffee. From our roastery in Addis Ababa to your cup — we're
                here to share the taste of Ethiopia with the world.
              </p>
            </div>

            {/* Subtle impact note */}
            <p className="mt-6 text-xs sm:text-sm text-black italic leading-6 md:leading-7 border-l-2 border-amber-300 pl-4">
              Every purchase supports the farmers and communities behind each
              harvest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
