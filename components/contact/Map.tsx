import { MAP_CONFIG } from "@/data/map-location";

export default function Map() {
  return (
    <section className="relative w-full font-montserrat">
      <div className="relative w-full h-80 sm:h-100 md:h-120 lg:h-130 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none" />

        <iframe
          title={`${MAP_CONFIG.name} location map`}
          src={MAP_CONFIG.embedUrl}
          className="h-full w-full scale-100 sm:scale-100"
          style={{
            border: 0,
            filter: "grayscale(100%) contrast(1.1)",
          }}
          loading="lazy"
          // referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex flex-col gap-2 sm:flex-row sm:gap-3">
          <a
            href={MAP_CONFIG.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-neutral-900 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <svg
              className="w-4 h-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="whitespace-nowrap text-xs">Get Directions</span>
          </a>
          <a
            href={MAP_CONFIG.viewLargerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-neutral-900/90 backdrop-blur-sm text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full shadow-lg hover:bg-neutral-900 hover:shadow-xl transition-all duration-300"
          >
            <svg
              className="w-4 h-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
            <span className="whitespace-nowrap text-xs">View Larger Map</span>
          </a>
        </div>
      </div>
    </section>
  );
}
