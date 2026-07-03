import Image from "next/image";
import Logo from "@/public/images/logo.png"

export default function Footer() {
  return (
    <footer className="w-full bg-stone-900">

      {/* ── Main footer content ── */}
      <div className="mx-auto max-w-7xl px-10 py-16 md:py-5">
                    {/* Brand */}
            <div className="flex flex-row gap-5 py-10">
                        <div className="shrink-0">
          <Image
            src={Logo}
            alt="Sahwa Coffee Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-10 w-auto object-contain"
          />
        </div>
              <span className="font-(family-name:--font-dancing-script) text-3xl font-bold text-white">
                Sahwa Coffee
              </span>
              
            </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">

          {/* LEFT: Logo + nav links */}
          <div className="flex flex-col gap-10 lg:col-span-2">



            {/* Nav columns */}
            <div className="grid grid-cols-3 sm:grid-cols-3 max-w-2xl">

              {/* Company */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-montserrat font-semibold">
                  Company
                </span>
                <ul className="flex flex-col gap-3">
                  {[
                    { label: "Location", href: "#" },
                    { label: "Certificate", href: "#" },
                    { label: "Sustainability", href: "#" },
                    { label: "Product Catalog", href: "#" },
                    { label: "About Us", href: "#" },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm font-light text-stone-400 font-montserrat transition-colors duration-200 hover:text-amber-400"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* More */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-montserrat font-semibold">
                  More
                </span>
                <ul className="flex flex-col gap-3">
                  {[
                    { label: "Contact Us", href: "#contact" },
                    { label: "Help Center", href: "#" },
                    { label: "FAQs", href: "#" },
                    { label: "Shipping Info", href: "#" },
                    { label: "Blog", href: "#" },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm font-light text-stone-400 font-montserrat transition-colors duration-200 hover:text-amber-400"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

                            {/* More */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-montserrat font-semibold">
                  More
                </span>
                <ul className="flex flex-col gap-3">
                  {[
                    { label: "Contact Us", href: "#contact" },
                    { label: "Help Center", href: "#" },
                    { label: "FAQs", href: "#" },
                    { label: "Shipping Info", href: "#" },
                    { label: "Blog", href: "#" },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm font-light text-stone-400 font-montserrat transition-colors duration-200 hover:text-amber-400"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* RIGHT: Newsletter */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-montserrat font-semibold">
                Newsletter
              </span>
              <h3 className="font-(family-name:--font-dancing-script) text-3xl font-bold text-white">
                Subscribe & Stay Updated.
              </h3>
            </div>

            <div className="h-px w-10 bg-amber-400/30" />

            <p className="text-xs font-light leading-[1.9] text-stone-500 font-montserrat max-w-xs">
              Join our email newsletter for exclusive offers, Sahwa Coffee news,
              events, and first access to our most exciting releases.
            </p>

            {/* Email input */}
            <div className="flex flex-col gap-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 border border-stone-700 bg-stone-800 px-4 py-3 text-xs text-white placeholder-stone-600 font-montserrat outline-none focus:border-amber-400/60 transition-colors duration-300"
                />
                <button className="group relative overflow-hidden border border-l-0 border-amber-400 bg-transparent px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-amber-400 transition-all duration-300 hover:bg-amber-400 hover:text-stone-900 font-montserrat focus:outline-none">
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                  Subscribe
                </button>
              </div>
              <span className="text-[10px] text-stone-600 font-montserrat">
                No spam. Unsubscribe anytime.
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Divider band ── */}
      <div className="mx-auto max-w-7xl px-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between py-4">

          {/* Above line left */}
          <span className="font-montserrat text-sm text-stone-400">
            Coffee from the origin to your table.
          </span>

          {/* Above line right */}
          <span className="font-montserrat text-[10px] text-stone-400 uppercase tracking-[0.15em]">
            © Sahwa Coffee. All Rights Reserved.
          </span>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-stone-400 mx-20">
        <div className="mx-auto max-w-7xl px-10 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          {/* Social icons */}
          <div className="flex items-center gap-10">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="flex items-center justify-center text-stone-400 transition-all duration-300 hover:border-amber-400/50 hover:text-amber-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex items-center justify-center text-stone-400 transition-all duration-300 hover:border-amber-400/50 hover:text-amber-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="#"
              aria-label="X"
              className="flex items-center justify-center text-stone-400 transition-all duration-300 hover:border-amber-400/50 hover:text-amber-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex items-center justify-center text-stone-400 transition-all duration-300 hover:border-amber-400/50 hover:text-amber-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.15em] text-stone-400 font-montserrat transition-colors duration-200 hover:text-stone-400"
            >
              Terms of Use
            </a>
            <span className="h-3 w-px bg-cream" />
            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.15em] text-stone-400 font-montserrat transition-colors duration-200 hover:text-stone-400"
            >
              Privacy Policy
            </a>
          </div>

        </div>
        {/* <p className="text-center font-montserrat text-cream text-xs pb-2">Developed By Atronsa.</p> */}
      </div>
    </footer>
  );
}
