"use client";

import Link from "next/link";
import { Home, ArrowRight, Anchor, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-200 sm:min-h-220 md:min-h-240 lg:min-h-screen flex items-center justify-center bg-paper font-montserrat px-8 sm:px-10 overflow-hidden">
      <div className="paper-grain absolute inset-0" />

      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center font-black text-ink/6 select-none leading-none tracking-tight pointer-events-none text-[9rem] sm:text-[13rem] md:text-[17rem] lg:text-[20rem]"
      >
        404
      </span>

      <div className="relative z-10 text-center max-w-lg">
        <div className="fade-up fade-up-1 inline-flex mb-6 -rotate-6">
          <div className="border-2 border-stamp text-stamp px-4 py-1.5">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase">
              Lost in Transit
            </span>
          </div>
        </div>

        <h2 className="fade-up fade-up-2 font-bold text-2xl sm:text-3xl md:text-4xl text-ink mb-4">
          Lost Your Way?
        </h2>

        <p className="fade-up fade-up-3 text-xs sm:text-sm md:text-sm text-black leading-relaxed mb-8 max-w-sm mx-auto">
          The page you're looking for has been moved or doesn't exist. But don't
          worry, our coffee is still brewing.
        </p>

        <div className="fade-up fade-up-3 flex items-center justify-center gap-2 mb-8 max-w-55 mx-auto">
          <Anchor size={13} className="text-black shrink-0" />
          <div className="relative flex-1 h-px border-t-[1.5px] border-dashed border-rule">
            <span className="absolute -top-2.25 right-6 text-stamp text-sm font-mono">
              ?
            </span>
          </div>
          <MapPin size={13} className="text-black shrink-0" />
        </div>

        <div className="fade-up fade-up-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-ink text-paper text-xs sm:text-sm font-medium rounded-full px-6 py-3 hover:bg-neutral-800 transition-colors w-full sm:w-auto justify-center"
          >
            <Home className="w-3 h-3 sm:w-4 sm:h-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-ink text-xs sm:text-sm font-medium rounded-full px-6 py-3 hover:text-stamp transition-colors w-full sm:w-auto justify-center"
          >
            Contact Us
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .paper-grain {
          background-image: radial-gradient(
            rgba(198, 186, 157, 0.33) 0.6px,
            transparent 0.6px
          );
          background-size: 14px 14px;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-up {
          animation: fadeUp 0.7s ease both;
        }
        .fade-up-1 {
          animation-delay: 0s;
        }
        .fade-up-2 {
          animation-delay: 0.12s;
        }
        .fade-up-3 {
          animation-delay: 0.24s;
        }
        .fade-up-4 {
          animation-delay: 0.36s;
        }
        @media (prefers-reduced-motion: reduce) {
          .fade-up {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}
