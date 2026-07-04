"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Lock, ShieldCheck, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { PRIVACY_SECTIONS, CONTACT, type BodyItem, type Section } from "@/data/privacy-sections";

const BodyContent = ({ item }: { item: BodyItem }) => {
  if (item.type === 'contact') {
    const contactLinks = [
      { Icon: Mail, value: CONTACT.email, href: CONTACT.emailHref, external: false },
      { Icon: Phone, value: CONTACT.phone, href: CONTACT.phoneHref, external: false },
      { Icon: MapPin, value: CONTACT.address, href: CONTACT.addressHref, external: true },
    ];

    return (
      <div className="grid sm:flex sm:flex-wrap items-center gap-4 sm:gap-6 pt-2">
        {contactLinks.map(({ Icon, value, href, external }, i) => (
          <Link
            key={i}
            href={href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className="flex items-center gap-2 text-sm font-medium hover:text-amber-400 transition-colors"
          >
            <Icon size={15} strokeWidth={2.5} className="text-cargo shrink-0" />
            <span className="break-all">{value}</span>
          </Link>
        ))}
      </div>
    );
  }

  if (item.type === 'list') {
    return (
      <div className="flex gap-3 text-[13px] leading-6 sm:text-sm">
        <span className="text-stamp font-mono shrink-0">—</span>
        <span>{item.content}</span>
      </div>
    );
  }

  return (
    <p className={`text-[13px] leading-6 sm:text-sm ${item.muted ? "text-muted italic" : ""}`}>
      {item.content}
    </p>
  );
};

const SectionCard = ({
  section,
  sectionRef,
}: {
  section: Section;
  sectionRef: (el: HTMLElement | null) => void;
}) => (
  <section
    ref={sectionRef}
    id={`sec-${section.num}`}
    data-num={section.num}
    className="px-4 sm:px-6 md:px-8 py-4 scroll-mt-24 lg:scroll-mt-0"
  >
    <div className="flex items-baseline gap-3 mb-4">
      <span className="font-montserrat text-base sm:text-lg lg:text-xl font-medium shrink-0">{section.num}</span>
      <h2 className="font-montserrat text-base sm:text-lg lg:text-xl font-medium">{section.title}</h2>
    </div>
    <div className="space-y-3">
      {section.body.map((item, i) => (
        <BodyContent key={i} item={item} />
      ))}
    </div>
  </section>
);

const NavButton = ({
  num,
  title,
  isActive,
  onClick,
}: {
  num: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button onClick={onClick} className="w-full flex items-baseline gap-2 text-left group cursor-pointer min-w-0 px-4 sm:px-6 md:px-8 sm:pt-2 md:pt-0">
    <span
      className={`text-xs leading-6 font-mono transition-colors duration-200 shrink-0 ${
        isActive ? "font-semibold text-stamp" : "text-muted group-hover:text-stamp"
      }`}
    >
      {num}
    </span>
    <span
      className={`text-xs leading-6 transition-colors duration-200 truncate ${
        isActive ? "font-semibold" : "group-hover:text-ink"
      }`}
    >
      {title}
    </span>
  </button>
);

export default function Page() {
  const [activeId, setActiveId] = useState(PRIVACY_SECTIONS[0].num);
  const [indexOpen, setIndexOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const num = entry.target.getAttribute('data-num');
            if (num) setActiveId(num);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (num: string) => {
    const element = document.getElementById(`sec-${num}`);
    if (element) {
      const navbarHeight = window.innerWidth < 1024 ? 56 : 24;
      const top = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIndexOpen(false);
  };

  const setSectionRef = (num: string) => (el: HTMLElement | null) => {
    sectionRefs.current[num] = el;
  };

  const currentSection = PRIVACY_SECTIONS.find((s) => s.num === activeId);

  return (
    <div className="min-h-screen bg-paper text-ink font-montserrat overflow-x-clip">
      <header className="relative pt-14 sm:pt-20 overflow-hidden px-4 sm:px-6 md:px-10">
        <div className="paper-grain absolute inset-0" />
        <div className="max-w-5xl mx-auto pt-8 sm:pt-10 pb-2 sm:pb-8 relative">
          <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-4 px-4 sm:px-6 md:px-10">
            <div className="min-w-0">
              <h1
                className="font-medium text-3xl sm:text-4xl md:text-6xl pb-1">
                Privacy Policy
              </h1>
              <p className="mt-2 text-[13px] leading-6 sm:text-sm text-stone-800">Sahwa Coffee — how we handle your information</p>
            </div>

            <div
              className="fade-up fade-up-2 self-start -rotate-3 sm:-rotate-6 select-none opacity-80 border-2 border-stamp text-stamp px-3 py-1.5 sm:p-2 sm:px-3.5 shrink-0"
            >
              <div className="text-[9px] sm:text-[10px] md:text-xs tracking-widest text-center leading-tight font-mono whitespace-nowrap">
                CONFIDENTIAL
                <br className="hidden sm:block" />
                <span className="sm:hidden"> · </span>
                ON&nbsp;FILE
              </div>
            </div>
          </div>

          {/* Data flow diagram */}
          <div className="fade-up fade-up-3 my-4 sm:mt-10 flex items-center gap-2 sm:gap-4 md:gap-6 px-4 sm:px-6 md:px-10">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] md:text-xs tracking-widest font-mono shrink-0">
              <ShieldCheck size={13} className="text-cargo shrink-0" />
              YOUR DATA
            </div>

            <div className="relative flex-1 min-w-7 h-px border-t-[1.5px] border-dashed border-rule">
              <div className="slide absolute -top-2 left-0">
                <Lock size={16} className="text-stamp" />
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] md:text-xs tracking-widest font-mono shrink-0">
              <span className="sm:hidden">SECURED</span>
              <span className="hidden sm:inline">HANDLED SECURELY</span>
              <ShieldCheck size={13} className="text-cargo shrink-0" />
            </div>
          </div>

          <p className="text-[13px] leading-6 sm:text-sm text-stone-800 mt-3 px-4 sm:px-6 md:px-10">
            We collect only what's needed to respond to you and run the export process. We don't sell it, and you can ask us to delete it.
          </p>
        </div>
      </header>

      <div className="lg:hidden sticky top-20 md:top-0 z-20 bg-paper px-6">
        <div className="paper-grain absolute inset-0" />
        <button
          onClick={() => setIndexOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-1 text-[11px] sm:text-xs tracking-widest font-mono relative"
        >
          <span className="truncate min-w-0">
            POLICY INDEX — {currentSection?.title}
          </span>
          <ChevronDown
            size={16}
            className={`shrink-0 transition-transform duration-200 ${indexOpen ? "rotate-180" : ""}`}
          />
        </button>
        {indexOpen && (
          <nav className="px-4 sm:px-6 pb-4 flex flex-col gap-2 relative">
            {PRIVACY_SECTIONS.map((s) => (
              <NavButton key={s.num} {...s} isActive={activeId === s.num} onClick={() => scrollTo(s.num)} />
            ))}
          </nav>
        )}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-4 sm:py-8 md:py-4 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-10">
        <nav className="hidden lg:block sticky top-24 self-start">
          <div className="text-xs font-semibold tracking-widest mb-4 text-muted font-mono">POLICY INDEX</div>
          <ul className="space-y-3">
            {PRIVACY_SECTIONS.map((s) => (
              <li key={s.num}>
                <NavButton {...s} isActive={activeId === s.num} onClick={() => scrollTo(s.num)} />
              </li>
            ))}
          </ul>
        </nav>

        <main className="min-w-0">
          {PRIVACY_SECTIONS.map((s) => (
            <SectionCard key={s.num} section={s} sectionRef={setSectionRef(s.num)} />
          ))}
        </main>
      </div>

      <style jsx>{`
        .paper-grain {
          background-image: radial-gradient(rgba(198, 186, 157, 0.33) 0.6px, transparent 0.6px);
          background-size: 14px 14px;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease both; }
        .fade-up-2 { animation-delay: .15s; }
        .fade-up-3 { animation-delay: .25s; }
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(100% - 20px)); }
        }
        .slide { animation: slide 5s ease-in-out infinite alternate; }
        @media (prefers-reduced-motion: reduce) {
          .fade-up, .slide { animation: none !important; }
        }
      `}</style>
    </div>
  );
}