"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { PHONE_CODES } from "@/data/inquiry-form";

export default function PhoneInput({
  phoneCode,
  setPhoneCode,
  phoneNumber,
  setPhoneNumber,
  error,
}: {
  phoneCode: string;
  setPhoneCode: (code: string) => void;
  phoneNumber?: string;
  setPhoneNumber?: (value: string) => void;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = PHONE_CODES.filter(
    (pc) =>
      pc.code.includes(search) ||
      pc.country.toLowerCase().includes(search.toLowerCase()),
  );
  const selected = PHONE_CODES.find((pc) => pc.code === phoneCode);

  return (
    <div>
      <div className="flex gap-2">
        <div className="relative" ref={ref}>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`w-19 md:w-20 bg-white border rounded-lg pl-1 sm:pl-3 pr-7 sm:pr-8 py-2 sm:py-2.5 md:py-3 text-xs md:text-sm text-stone-900 outline-none transition-all focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10 hover:border-stone-300 flex items-center justify-between truncate ${error ? "border-red-400" : "border-stone-200"}`}
          >
            <span className="truncate">
              {selected ? `${selected.code}` : "Code"}
            </span>
            <ChevronDown className="absolute right-1.5 sm:right-2 w-3 h-3 sm:w-3.5 sm:h-3.5 text-stone-400 shrink-0" />
          </button>
          {open && (
            <div className="absolute z-50 mt-1 w-56 sm:w-64 bg-white border border-stone-200 rounded-xl shadow-xl overflow-hidden">
              <div className="relative border-b border-stone-100">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search country or code..."
                  className="w-full pl-9 pr-4 py-2 sm:py-2.5 text-[10px] sm:text-xs text-stone-900 outline-none"
                />
              </div>
              <div className="max-h-48 overflow-y-auto">
                {filtered.map((pc) => (
                  <button
                    key={pc.code}
                    type="button"
                    onClick={() => {
                      setPhoneCode(pc.code);
                      setOpen(false);
                      setSearch("");
                    }}
                    className={`w-full text-left px-3 py-2 text-xs hover:bg-amber-50 transition-colors flex items-center justify-between ${phoneCode === pc.code ? "bg-amber-50 text-amber-700 font-medium" : "text-stone-700"}`}
                  >
                    <span>{pc.country}</span>
                    <span className="text-stone-400">{pc.code}</span>
                  </button>
                ))}
                {filtered.length === 0 && (
                  <p className="px-4 py-3 text-xs text-stone-400">
                    No results found
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
        <input
          type="tel"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber?.(e.target.value)}
          className={`flex-1 bg-white border rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-[10px] sm:text-xs text-stone-900 placeholder-stone-400 outline-none transition-all focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10 hover:border-stone-300 ${error ? "border-red-400" : "border-stone-200"}`}
        />
      </div>
      {error && (
        <p className="mt-1 text-[10px] text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
}
