"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo.png";
import {
  MapPin,
  Phone,
  Mail,
  Loader2,
  Check,
  type LucideIcon,
} from "lucide-react";
import {
  COMPANY_LINKS,
  PRODUCT_LINKS,
  CONTACT_INFO,
  SOCIAL_LINKS,
  FOOTER_COPY,
} from "@/data/footer";
import { FooterFormSchema, type FooterFormErrors } from "@/schema/footer-form";

/* ─── Icon lookups (kept out of the data file so data stays plain/serializable) ─── */

const contactIcons: Record<string, LucideIcon> = {
  mapPin: MapPin,
  phone: Phone,
  mail: Mail,
};

const socialIcons: Record<string, React.ReactNode> = {
  tiktok: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  ),
  x: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  ),
  telegram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  ),
  facebook: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
};

/* ─── Reusable LinkList ─── */
function LinkList({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs sm:text-sm text-amber-400 font-semibold">
        {title}
      </span>
      <ul className="flex flex-col gap-1.5 sm:gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[10px] sm:text-xs text-cream hover:text-amber-400 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Newsletter Form ─── */
function NewsletterForm() {
  const { newsletter } = FOOTER_COPY;
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FooterFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const result = FooterFormSchema.safeParse({
      email,
      subject: "Newsletter Subscription",
    });

    if (!result.success) {
      const fieldErrors: FooterFormErrors = {};
      const flattened = result.error.flatten();
      for (const [field, messages] of Object.entries(flattened.fieldErrors)) {
        if (messages?.[0]) {
          fieldErrors[field as keyof FooterFormErrors] = messages[0];
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) throw new Error("Failed to subscribe.");

      setSubscribed(true);
      setEmail("");
    } catch {
      // Silently handle
    } finally {
      setIsSubmitting(false);
    }
  };

  if (subscribed) {
    return (
      <div className="flex flex-col gap-3 lg:pl-12">
        <span className="text-xs sm:text-sm text-amber-400 font-semibold pb-1">
          {newsletter.heading}
        </span>
        <div className="bg-stone-800/50 rounded-xl p-4 border border-stone-700/50">
          <div className="flex items-center gap-2 mb-2">
            <Check className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-white">
              {newsletter.successTitle}
            </span>
          </div>
          <p className="text-xs text-stone-400">{newsletter.successMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 lg:pl-12">
      <span className="text-xs sm:text-sm text-amber-400 font-semibold pb-1">
        {newsletter.heading}
      </span>
      <h3 className="text-lg sm:text-xl font-bold text-cream leading-tight">
        {newsletter.title}
      </h3>

      <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-5">
        <p className="text-xs leading-relaxed text-cream sm:flex-1 lg:flex-none">
          {newsletter.description}
        </p>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex flex-col gap-3 sm:flex-1 lg:flex-none"
          noValidate
        >
          <div className="flex rounded-lg overflow-hidden border border-stone-700 focus-within:border-amber-400/60 transition-colors">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) {
                  setErrors((prev) => ({ ...prev, email: undefined }));
                }
              }}
              placeholder={newsletter.placeholder}
              className="flex-1 min-w-0 bg-stone-800 px-4 py-3 sm:py-3.5 text-xs text-cream placeholder-stone-500 outline-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-amber-600 px-6 py-3 sm:py-3.5 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-amber-500 focus:outline-none shrink-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 size={12} className="animate-spin" />
              ) : (
                newsletter.buttonText
              )}
            </button>
          </div>
          {errors.email && (
            <p className="text-[10px] text-red-400">{errors.email}</p>
          )}
          <span className="text-[10px] text-stone-500">
            {newsletter.disclaimer}
          </span>
        </form>
      </div>
    </div>
  );
}

/* ─── Footer ─── */
export default function Footer() {
  const { legal, developedBy } = FOOTER_COPY;

  return (
    <footer className="w-full bg-stone-900 font-montserrat overflow-hidden">
      <div className="mx-auto max-w-9xl px-8 sm:px-10 md:px-12 lg:px-14 xl:px-20 py-10 md:py-14">
        {/* Brand + Mission */}
        <div className="flex flex-col md:flex-row sm:justify-between gap-6 mb-10 md:mb-12 pb-8 border-b border-stone-800">
          <div className="flex items-center justify-center gap-3">
            <Image
              src={Logo}
              alt={`${FOOTER_COPY.brandName} Logo`}
              width={0}
              height={0}
              sizes="100vw"
              className="h-8 w-auto object-contain"
            />
            <span className="text-lg sm:text-xl font-bold text-cream tracking-tight">
              Sahwa Coffee
            </span>
          </div>
          <p className="text-xs md:text-sm text-cream max-w-3xl leading-relaxed italic border-l-2 border-amber-400 pl-3">
            {FOOTER_COPY.tagline}
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8">
          <div className="grid grid-cols-3 gap-0 sm:gap-4 md:gap-6">
            <LinkList title="Company" links={COMPANY_LINKS} />
            <LinkList title="Products" links={PRODUCT_LINKS} />

            <div className="flex flex-col gap-3">
              <span className="text-xs sm:text-sm text-amber-400 font-semibold">
                Get In Touch
              </span>
              {CONTACT_INFO.map((item) => {
                const Icon = contactIcons[item.icon];
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-1.5 sm:gap-2.5"
                  >
                    <Icon className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    {"href" in item && item.href ? (
                      <Link
                        href={item.href}
                        className="text-[10px] sm:text-xs text-cream hover:text-amber-400 transition-colors leading-relaxed break-all pr-2 sm:pr-3"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <p className="text-[10px] sm:text-xs text-cream leading-relaxed pr-2 sm:pr-3">
                        {item.label}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <NewsletterForm />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="mx-auto max-w-9xl px-4 sm:px-8 md:px-10 lg:px-14 xl:px-20 py-4">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-5 sm:gap-6 lg:gap-8">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  {socialIcons[social.icon]}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 sm:gap-x-3 lg:gap-x-4 text-center pt-2">
              {legal.map((item, i) => (
                <span
                  key={item.label}
                  className="flex items-center gap-x-2 sm:gap-x-3 lg:gap-x-4"
                >
                  <Link
                    href={item.href}
                    className="text-xs text-stone-400 hover:text-amber-400 transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                  <span className="text-stone-700 text-[10px]">|</span>
                </span>
              ))}
              <span className="text-xs text-stone-400 whitespace-nowrap">
                {developedBy.label}{" "}
                <Link
                  href={developedBy.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-stone-400 hover:text-amber-400 hover:border-amber-400 font-medium transition-colors"
                >
                  {developedBy.name}
                </Link>
              </span>
              <span className="hidden sm:inline text-stone-700 text-[10px]">
                |
              </span>
              <span className="text-xs text-stone-500 whitespace-nowrap">
                {FOOTER_COPY.newsletter && null}
                {`© ${new Date().getFullYear()} ${FOOTER_COPY.brandName}. All Rights Reserved.`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
