"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/images/logo.png";
import { NAV_LINKS } from "@/data/nav-links";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const pathname = usePathname();
  const isNavBrandBlack = pathname === "/";
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.documentElement.style.overflow = mobileMenuOpen ? "hidden" : "";
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !menuRef.current?.contains(target) &&
        !toggleRef.current?.contains(target)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const showBackground = scrolled && !mobileMenuOpen;
  const isBrandWhite = isNavBrandBlack || showBackground || mobileMenuOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 sm:px-10 md:px-12 py-6 sm:py-5 transition-colors duration-300 ${
          showBackground ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="shrink-0">
          <Link href="/">
            <Image
              src={Logo}
              alt="Sahwa Coffee Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="h-7 md:h-10 w-auto object-contain"
            />
          </Link>
        </div>
        <span
          aria-hidden="true"
          className={`pointer-events-none ${isBrandWhite ? "text-cream" : "text-stone-900"} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-lg sm:text-xl md:text-2xl font-semibold font-(family-name:--font-dancing-script)`}
        >
          Sahwa Coffee
        </span>

        <button
          ref={toggleRef}
          className={`z-50 cursor-pointer p-2 ${isBrandWhite ? "text-cream" : "text-stone-900"}`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="flex h-4 w-6 md:h-5 md:w-8 flex-col justify-between">
            <span
              className={`block h-0.5 w-full origin-center rounded-full bg-current transition-all duration-300 ${
                mobileMenuOpen ? "translate-y-2.25 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                mobileMenuOpen ? "scale-x-0 opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full origin-center rounded-full bg-current transition-all duration-300 ${
                mobileMenuOpen ? "-translate-y-2.25 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm font-poppins transition-all duration-300 ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="space-y-8 sm:space-y-6 md:space-y-8 text-center font-poppins">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="relative text-cream inline-block cursor-pointer px-6 py-1 md:py-2 text-sm sm:py-3 md:text-base after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
