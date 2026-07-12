"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, Check } from "lucide-react";

export default function SearchableSelect({
  label,
  options,
  required = false,
  value: controlledValue,
  onChange,
  error,
}: {
  label: string;
  options: string[];
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [internalValue, setInternalValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const selected = controlledValue ?? internalValue;

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

  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelect = (option: string) => {
    if (onChange) {
      onChange(option);
    } else {
      setInternalValue(option);
    }
    setOpen(false);
    setSearch("");
  };

  return (
    <div>
      <label className="block text-[11px] sm:text-sm font-medium text-black mb-1 sm:mb-1.5">
        {label}
      </label>
      <div className="relative" ref={ref}>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`w-full bg-white border rounded-lg pl-3 sm:pl-4 pr-10 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-left outline-none transition-all focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10 hover:border-stone-300 flex items-center justify-between ${error ? "border-red-400" : "border-stone-200"}`}
        >
          <span
            className={selected ? "text-stone-900 truncate" : "text-stone-400"}
          >
            {selected || "Select..."}
          </span>
          <ChevronDown
            className={`absolute right-3 w-4 h-4 text-stone-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="absolute z-50 mt-1 w-full bg-white border border-stone-200 rounded-xl shadow-xl overflow-hidden">
            <div className="relative border-b border-stone-100">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={`Search ${label.toLowerCase()}...`}
                className="w-full pl-9 pr-4 py-2 sm:py-2.5 text-xs text-stone-900 outline-none"
                autoFocus
              />
            </div>
            <div className="max-h-48 overflow-y-auto">
              {filtered.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm hover:bg-amber-50 transition-colors flex items-center gap-2 ${selected === option ? "bg-amber-50 text-amber-700 font-medium" : "text-stone-700"}`}
                >
                  {selected === option && (
                    <Check className="w-3.5 h-3.5 shrink-0" />
                  )}
                  <span className={selected === option ? "" : "ml-5.5"}>
                    {option}
                  </span>
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
        {required && (
          <input
            type="text"
            // required
            value={selected}
            onChange={() => {}}
            className="sr-only"
            tabIndex={-1}
          />
        )}
      </div>
      {error && (
        <p className="mt-1 text-[10px] text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
}
