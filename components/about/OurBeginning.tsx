import Image from "next/image";

export default function OurBeginning() {
  return (
    <section className="relative bg-white overflow-hidden font-montserrat">
      <div className="max-w-9xl mx-auto px-6 sm:px-10 md:px-10 lg:px-14 xl:px-20 py-12 sm:py-16 md:py-20">
        <div className="grid gap-10 md:gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          <div className="order-1">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                <span className="h-px w-4 sm:w-6 bg-amber-400/60" />
                <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.15em] sm:tracking-[0.25em] uppercase text-amber-700 font-semibold">
                  About Our Founders
                </span>
                <span className="h-px w-4 sm:w-6 bg-amber-400/60" />
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-stone-900 mb-6 sm:mb-8 text-center lg:text-left">
              Our Beginning
            </h1>
            <div className="space-y-3 sm:space-y-4 md:space-y-5 text-[13px] sm:text-sm text-black leading-6 sm:leading-7">
              <p>
                Sahwa Coffee was born from the shared vision of two sisters,
                <span className="font-semibold"> Sifen Jarso Mussa </span> and
                <span className="font-semibold"> Feneti Jarso Mussa</span>, who
                believed that Ethiopian coffee deserved to be represented with
                authenticity, quality, and pride. Growing up surrounded by the
                country&apos;s rich coffee heritage, they saw more than a
                product they saw a legacy that connected generations,
                communities, and cultures. Their dream was to build a company
                that would carry that legacy from the highlands of Ethiopia to
                coffee lovers around the world.
              </p>

              <p>
                As the vision took shape, each sister followed a different path
                toward the same goal. Driven by a passion to understand coffee
                beyond the cup,<span className="font-semibold"> Sifen</span>{" "}
                immersed herself in the coffee value chain, studying green
                coffee, sensory evaluation, cupping, barista skills, and coffee
                quality. Her journey deepened Sahwa Coffee&apos;s commitment to
                selecting coffees that truly reflect Ethiopia&apos;s remarkable
                diversity and character.
              </p>
              <p>
                At the same time,<span className="font-semibold"> Feneti</span>{" "}
                focused on building the foundation that would bring those
                coffees to the international market. Through market research,
                export operations, international trade, and business
                development, she helped transform an idea into a growing export
                company capable of connecting Ethiopian coffee with buyers
                across the world.
              </p>
              <p>
                Together, they combined knowledge, determination, and
                complementary strengths to build Sahwa Coffee one focused not
                only on exporting coffee, but on creating lasting partnerships
                based on trust, transparency, and quality. Every relationship
                with a producer, supplier, and customer reflects the values on
                which the company was founded.
              </p>
              <p>
                Today, Sahwa Coffee stands as the result of two sisters united
                by one purpose: to share the true character of Ethiopian coffee
                with the world while honoring its origin, the people behind
                every harvest, and the traditions that have made Ethiopia the
                birthplace of coffee.
              </p>
            </div>
            <p className="mt-4 md:mt-6 text-[13px] sm:text-sm text-black italic leading-6 sm:leading-7 border-l-2 border-amber-300 pl-4">
              Sahwa is more than coffeeit is a story of heritage, family, and a
              shared commitment to excellence, delivered one cup at a time.
            </p>
          </div>

          {/* Right - Image */}
          <div className="order-2">
            <div className="relative w-full overflow-hidden rounded-lg">
              <Image
                src="/images/who-we-are.webp"
                alt="Ethiopian coffee farm"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
