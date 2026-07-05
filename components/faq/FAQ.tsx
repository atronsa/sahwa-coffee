"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQDATA } from "@/data/faq";

export default function FAQ() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <section className="bg-cream pt-14 sm:pt-20 pb-10 overflow-hidden">
      <div className="max-w-5xl mx-auto pt-8 sm:pt-10 pb-2 sm:pb-8 relative px-8 sm:px-10 md:px-14">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl">
          FAQ
        </h1>

        <p className="my-4 sm:my-6 md:my-8 text-[13px] sm:text-sm md:text-base leading-relaxed text-black font-montserrat">
          Here are some Frequently Asked Questions that come our way. If you
          don't see one that helps please message us and we'll try to help soon.
        </p>

        {FAQDATA.map((category) => (
          <div key={category.id} className="mt-6">
            <h2 className="max-w-4xl text-base sm:text-2xl md:text-2xl lg:text-3xl uppercase font-serif font-semibold leading-tight pt-5">
              {category.title}
            </h2>

            <div className="mt-6 sm:mt-8 md:mt-10 border-t border-gray-300 font-montserrat">
              {category.faqs.map((faq) => {
                const key = `${category.id}-${faq.id}`;
                const isOpen = openKey === key;

                return (
                  <div key={key} className="border-b border-gray-300">
                    <button
                      onClick={() => toggle(key)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 py-5 sm:py-6 md:py-7 text-left cursor-pointer group transition-colors"
                    >
                      <span className="flex-1 min-w-0 text-xs sm:text-sm md:text-sm lg:text-base uppercase font-semibold transition-colors">
                        {faq.question}
                      </span>

                      <span className="text-black transition-colors">
                        {isOpen ? (
                          <Minus className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 shrink-0" />
                        ) : (
                          <Plus className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 shrink-0" />
                        )}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] pb-5 sm:pb-6 md:pb-7 opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-black text-xs sm:text-sm leading-6 md:leading-7 pr-6 sm:pr-8 font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
