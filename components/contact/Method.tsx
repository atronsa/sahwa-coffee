import Link from "next/link";
import { CONTACT_DETAILS, SOCIAL_LINKS } from "@/data/contact-method";

export default function Method() {
  return (
    <div className="max-w-lg font-montserrat mx-auto md:mx-0">
      <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4 md:mb-6 leading-snug text-center md:text-left">
        We are always ready to help you and answer your questions
      </h1>

      <p className="text-xs sm:text-sm text-black leading-6 sm:leading-7 mb-10 sm:mb-10 xl:max-w-md text-center md:text-left">
        Whether you're placing your first order or scaling up a regular
        shipment, our team is on hand to walk you through sourcing, pricing, and
        export logistics.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-6 sm:gap-y-10 md:max-w-md text-center md:text-left">
        {CONTACT_DETAILS.map((detail) => (
          <div key={detail.label}>
            <h3 className="text-sm sm:text-base font-semibold text-neutral-900 mb-2 md:mb-3">
              {detail.label}
            </h3>

            {detail.type === "lines" && detail.label === "Call Center" ? (
              <p className="text-sm text-black leading-relaxed">
                {detail.lines.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    <a
                      href={`tel:${line.replace(/\s/g, "")}`}
                      className="hover:text-amber-500 transition-colors text-[13px] sm:text-sm"
                    >
                      {line}
                    </a>
                  </span>
                ))}
              </p>
            ) : detail.type === "lines" ? (
              <p className="text-[13px] sm:text-sm text-black leading-relaxed">
                {detail.lines.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            ) : null}

            {detail.type === "text" && (
              <a
                href={`mailto:${detail.value}`}
                className="text-[13px] sm:text-sm text-black hover:text-amber-500 break-all transition-colors"
              >
                {detail.value}
              </a>
            )}

            {detail.type === "social" && (
              <div className="flex items-cent er gap-4 justify-center md:justify-start">
                {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    aria-label={label}
                    className="text-black hover:text-amber-500 transition-colors pt-2 md:pt-0"
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
