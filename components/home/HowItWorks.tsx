const STEPS = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Share your origin preference, volume, roast profile, and delivery timeline. No forms — just a conversation.",
    detail: "We respond within 24 hours.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Source & Sample",
    description:
      "Our team pulls samples from active lots at origin. We cup them against your spec and send you the best matches.",
    detail: "Physical samples shipped within 5–7 days.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L4.2 13.9m15.6 1.4-1.57.393M4.2 13.9l-1.57.393m0 0a48.667 48.667 0 0 1-.014-4.706" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Approve & Contract",
    description:
      "You approve the sample, we lock the lot and draw up a direct contract with transparent pricing — farm to warehouse.",
    detail: "Fixed price, no hidden fees.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Ship & Track",
    description:
      "We handle export logistics, documentation, and customs clearance. You get real-time updates from farm to your door.",
    detail: "Full traceability on every shipment.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-cream py-24 px-6 md:px-10 md:py-15">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-15 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-stone-400 font-montserrat">
              <span className="h-px w-6 bg-stone-300" />
              The Process
            </span>
            <h2 className="font-(family-name:--font-dancing-script) text-5xl font-bold leading-tight text-stone-900 sm:text-6xl md:text-7xl">
              How It Works.
            </h2>
          </div>
          <p className="text-sm font-light leading-[1.9] text-black font-montserrat md:max-w-xs md:ml-auto">
            From your first message to coffee in your warehouse — four steps,
            no middlemen, complete transparency.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="group relative flex flex-col gap-5 p-8 transition-colors duration-300 bg-white"
            >

              {/* Step number — large watermark */}
              <span
                aria-hidden="true"
                className="absolute top-4 right-5 font-(family-name:--font-dancing-script) text-3xl font-black leading-none text-black transition-colors duration-300 group-hover:text-stone-200 select-none pointer-events-none"
              >
                {step.number}
              </span>

              {/* Icon */}
              <div className="relative z-10 flex h-10 w-10 items-center justify-center border border-stone-200 text-stone-400 transition-all duration-300 group-hover:border-stone-900 group-hover:text-stone-900">
                {step.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-3 flex-1">
                <h3 className="text-base font-semibold text-stone-900 leading-tight font-montserrat">
                  {step.title}
                </h3>
                <div className="h-px w-8 bg-stone-200 transition-colors duration-300 group-hover:bg-amber-400/60" />
                <p className="text-xs font-light leading-[1.9] text-stone-400 font-montserrat">
                  {step.description}
                </p>
              </div>

              {/* Detail tag */}
              <div className="relative z-10 mt-auto">
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-stone-400 font-montserrat group-hover:text-amber-500 transition-colors duration-300">
                  <span className="h-px w-4 bg-current" />
                  {step.detail}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-5 flex flex-col gap-4 border-t-0 bg-white p-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-light text-stone-400 font-montserrat">
            Have questions before getting started?
          </p>
          <a
            href="#contact"
            className="group relative inline-flex w-fit items-center gap-3 overflow-hidden border border-stone-900 px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-900 transition-all duration-500 hover:bg-stone-900 hover:text-cream focus:outline-none font-montserrat"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            Talk to Our Team
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}