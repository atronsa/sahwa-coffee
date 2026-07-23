import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="relative bg-white overflow-hidden font-montserrat">
      <div className="max-w-9xl mx-auto px-6 sm:px-10 md:px-12 lg:px-14 xl:px-20 py-12 sm:py-16 md:py-20">
        <div className="grid gap-10 md:gap-12 lg:gap-15 grid-cols-1 lg:grid-cols-2 md:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full overflow-hidden rounded-lg">
              <Image
                src="/images/who-we-are.jpg"
                alt="Ethiopian coffee farm"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>

          <div className="pr-0 md:pr-8 order-1 lg:order-2">
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

            <div className="space-y-3 sm:space-y-4 md:space-y-5 text-[13px] sm:text-sm text-black leading-6 sm:leading-7">
              <p>
                Sahwa Coffee was founded with a simple yet ambitious vision: to
                share the true essence of Ethiopian coffee with the world.
                Inspired by Ethiopia&apos;s centuries-old coffee heritage, the
                company was established to create meaningful connections between
                dedicated coffee producers and international buyers seeking
                exceptional quality, authenticity, and consistency.
              </p>
              <p className="mt-4 md:mt-6 text-[13px] sm:text-sm text-black italic leading-6 sm:leading-7 border-l-2 border-amber-300 pl-4">
                The name<span className="font-semibold"> “Sahwa,” </span>{" "}
                meaning awakening, represents the experience every cup of coffee
                should deliver an awakening of the senses, culture, and
                appreciation for Ethiopia&apos;s remarkable coffee legacy.
              </p>
              <p>
                Our journey began with a deep commitment to understanding every
                stage of the coffee value chain. From cultivation and harvesting
                to processing, grading, roasting, cupping, quality evaluation,
                and international trade, we believe excellence comes from
                knowledge and continuous learning. This commitment allows us to
                maintain the highest standards while ensuring every coffee we
                export reflects the unique characteristics of its origin.
              </p>

              <p>
                At Sahwa Coffee, we work closely with trusted farmers,
                cooperatives, and producer partners across Ethiopia&apos;s
                renowned coffee-growing regions. Every coffee lot is carefully
                selected, professionally evaluated, and prepared according to
                international quality standards before reaching global markets.
                Through ethical sourcing, transparency, and traceability, we
                strive to create sustainable value for both producers and
                buyers.
              </p>
              <p>
                Today, Sahwa Coffee is dedicated to representing Ethiopian
                coffee with professionalism, integrity, and innovation. As we
                continue to grow, our mission remains unchanged: to deliver
                premium Ethiopian coffee while building lasting partnerships
                that celebrate quality, trust, and the rich heritage of the
                birthplace of Arabica coffee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
