import { STEPS } from "@/data/how-it-works";

export default function HowItWorks() {
  return (
    <section className="w-full bg-cream px-6 sm:px-10 md:px-10 lg:px-14 xl:px-20 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 sm:mb-12 md:mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="font-(family-name:--font-dancing-script) text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-stone-900">
              How We Work.
            </h2>
          </div>
          <p className="text-[12px] sm:text-sm leading-relaxed text-black font-montserrat md:max-w-base md:ml-auto">
            From your first message to coffee in your warehouse four steps, no
            middlemen, complete transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4 font-montserrat">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col gap-4 sm:gap-5 p-6 sm:p-8 transition-colors duration-300 bg-white  border border-amber-100/50"
            >
              <span
                aria-hidden="true"
                className="absolute top-5 right-5 sm:top-4 sm:right-5 text-xl sm:text-2xl font-medium leading-none text-stone-900 transition-colors duration-300 pointer-events-none"
              >
                {step.number}
              </span>

              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700 transition-all duration-300 group-hover:bg-amber-100">
                {step.icon}
              </div>

              <div className="relative z-10 flex flex-col gap-2 sm:gap-3 flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-stone-900 leading-tight font-montserrat">
                  {step.title}
                </h3>
                <div className="h-px w-8 bg-amber-200 transition-colors duration-300 group-hover:bg-amber-400/60" />
                <p className="text-[13px] sm:text-sm leading-6 sm:leading-6 text-black font-montserrat">
                  {step.description}
                </p>
              </div>

              {/* <div className="relative z-10 mt-auto pt-2">
                <span className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-amber-700 font-montserrat font-medium">
                  <span className="h-px w-3 sm:w-4 bg-amber-400/60" />
                  {step.detail}
                </span>
              </div> */}
            </div>
          ))}
        </div>

        <div className="mt-4 sm:mt-5 flex flex-col gap-4 bg-white p-6 sm:p-8 text-center border border-amber-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] sm:text-sm text-black font-montserrat">
            Have questions before getting started?
          </p>
          <a
            href="/contact"
            className="group relative inline-flex w-fit items-center justify-center mx-auto md:mx-0 mt-2 md:mt-0 gap-2 sm:gap-3 overflow-hidden rounded-full bg-stone-900 px-6 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white transition-all duration-300 hover:bg-stone-800 hover:shadow-lg focus:outline-none font-montserrat"
          >
            Talk to Our Team
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
