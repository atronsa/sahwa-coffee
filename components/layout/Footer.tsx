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
  X,
  type LucideIcon,
} from "lucide-react";
import {
  COMPANY_LINKS,
  PRODUCT_LINKS,
  CONTACT_INFO,
  SOCIAL_LINKS,
  SOCIALICONS,
} from "@/data/footer";
import { FooterFormSchema, type FooterFormErrors } from "@/schema/footer-form";

const contactIcons: Record<string, LucideIcon> = {
  mapPin: MapPin,
  phone: Phone,
  mail: Mail,
};

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

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FooterFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
    setSubmitError(null);
    setSuccessMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        if (response.status === 409) {
          setSuccessMessage(data?.message ?? "You're already subscribed!");
        } else {
          throw new Error(data?.error ?? "Failed to subscribe.");
        }
      } else {
        setSuccessMessage(
          "Subscribed! You're on the list. Exciting updates coming soon.",
        );
        setEmail("");
      }
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 lg:pl-12">
      <span className="text-xs sm:text-sm text-amber-400 font-semibold pb-1">
        Newsletter
      </span>
      <h3 className="text-lg sm:text-xl font-bold text-cream leading-tight">
        Subscribe & Stay Updated.
      </h3>

      <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-5">
        <p className="text-xs leading-relaxed text-cream sm:flex-1 lg:flex-none">
          Join our email newsletter for exclusive offers, Sahwa Coffee news,
          events, and first access to our most exciting releases.
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
                if (submitError) {
                  setSubmitError(null);
                }
                if (successMessage) {
                  setSuccessMessage(null);
                }
              }}
              placeholder="Enter your email address"
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
                "Subscribe"
              )}
            </button>
          </div>

          {successMessage && (
            <div className="flex items-start gap-2 bg-green-50/10 rounded-lg p-3 border border-green-500/20">
              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 shrink-0 mt-0.5" />
              <p className="text-[10px] sm:text-xs text-green-400">
                {successMessage}
              </p>
            </div>
          )}

          {errors.email && (
            <p className="text-[10px] text-red-400">{errors.email}</p>
          )}

          {submitError && (
            <div className="flex items-start gap-2 bg-red-50/10 rounded-lg p-3 border border-red-500/20">
              <X className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 shrink-0 mt-0.5" />
              <p className="text-[10px] sm:text-xs text-red-400">
                {submitError}
              </p>
            </div>
          )}

          <span className="text-[10px] text-stone-500">
            No spam. Unsubscribe anytime.
          </span>
        </form>
      </div>
    </div>
  );
}

/* ─── Footer ─── */
export default function Footer() {
  return (
    <footer className="w-full bg-stone-900 font-montserrat overflow-hidden">
      <div className="mx-auto max-w-9xl px-8 sm:px-10 md:px-12 lg:px-14 xl:px-20 py-10 md:py-14">
        <div className="flex flex-col md:flex-row sm:justify-between gap-6 mb-10 md:mb-12 pb-8 border-b border-stone-800">
          <div className="flex items-center justify-center gap-3">
            <Image
              src={Logo}
              alt="Sahwa Coffee Logo"
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
            Bridging Ethiopian coffee farmers with the world through direct
            partnerships, small-batch roasting, and an unwavering commitment to
            quality.
          </p>
        </div>

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
                  {SOCIALICONS[social.icon]}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 sm:gap-x-3 lg:gap-x-4 text-center pt-2">
              <span className="flex items-center gap-x-2 sm:gap-x-3 lg:gap-x-4">
                <Link
                  href="/terms-of-use"
                  className="text-xs text-stone-400 hover:text-amber-400 transition-colors whitespace-nowrap"
                >
                  Terms of Use
                </Link>
              </span>
              <span className="text-stone-700 text-[10px]">|</span>
              <span className="flex items-center gap-x-2 sm:gap-x-3 lg:gap-x-4">
                <Link
                  href="/privacy-policy"
                  className="text-xs text-stone-400 hover:text-amber-400 transition-colors whitespace-nowrap"
                >
                  Privacy Policy
                </Link>
              </span>
              <span className="text-stone-700 text-[10px]">|</span>

              <span className="text-xs text-stone-400 whitespace-nowrap">
                Developed by{" "}
                <Link
                  href="https://atronsa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-stone-400 hover:text-amber-400 hover:border-amber-400 font-medium transition-colors"
                >
                  Atronsa
                </Link>
              </span>
              <span className="hidden sm:inline text-stone-700 text-[10px]">
                |
              </span>
              <span className="text-[10px] sm:text-xs text-stone-500 whitespace-nowrap">
                {`© ${new Date().getFullYear()} Sahwa Coffee. All Rights Reserved.`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
