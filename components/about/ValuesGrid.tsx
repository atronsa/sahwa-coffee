import { VALUES } from "@/data/about-values";

export default function ValuesGrid() {
  return (
    <section className="relative bg-white font-montserrat">
      <div className="max-w-7xl mx-auto px-8 sm:px-10 md:px-12 lg:px-14 xl:px-20 py-16 sm:py-20 md:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-stone-900">
            Our Guiding Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VALUES.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className="group relative bg-cream rounded-xl p-6 sm:p-8 border border-amber-100/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon and label side by side */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-100/40 flex items-center justify-center group-hover:bg-amber-100 transition-colors shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg-text-xl font-semibold text-stone-900">
                    {card.label}
                  </h3>
                </div>

                {card.content && (
                  <p className="text-xs sm:text-sm text-black leading-6 md:leading-7">
                    {card.content}
                  </p>
                )}

                {card.points && (
                  <ul className="space-y-2 sm:space-y-3">
                    {card.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-black leading-6 md:leading-7"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
