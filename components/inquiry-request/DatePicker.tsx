"use client";

import { useState, useRef, useEffect } from "react";
import { Calendar } from "lucide-react";

export default function DatePicker({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}) {
  const [dateOpen, setDateOpen] = useState(false);
  const dateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dateRef.current && !dateRef.current.contains(e.target as Node))
        setDateOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const today = new Date();
  const quickDates = [
    {
      label: "This week",
      date: new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000),
    },
    {
      label: "Next week",
      date: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000),
    },
    {
      label: "This month",
      date: new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000),
    },
    {
      label: "Next month",
      date: new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000),
    },
  ];
  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  return (
    <div ref={dateRef}>
      <label className="block text-[11px] sm:text-sm font-medium text-black mb-1 sm:mb-1.5">
        Preferred Delivery Date
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setDateOpen(!dateOpen)}
          className="w-full bg-white border border-stone-200 rounded-lg pl-3 sm:pl-4 pr-10 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-left outline-none transition-all focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10 hover:border-stone-300 flex items-center justify-between"
        >
          <span className={selectedDate ? "text-stone-900" : "text-stone-400"}>
            {selectedDate
              ? new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : "Select date..."}
          </span>
          <Calendar className="w-4 h-4 text-stone-400 shrink-0" />
        </button>
        {dateOpen && (
          <div className="absolute z-50 mt-1 w-full sm:w-72 bg-white border border-stone-200 rounded-xl shadow-xl overflow-hidden">
            <div className="p-3 border-b border-stone-100">
              <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-2">
                Quick Select
              </p>
              <div className="flex flex-wrap gap-1.5">
                {quickDates.map((qd) => (
                  <button
                    key={qd.label}
                    type="button"
                    onClick={() => {
                      setSelectedDate(formatDate(qd.date));
                      setDateOpen(false);
                    }}
                    className={`text-[10px] sm:text-xs px-2.5 py-1.5 rounded-lg transition-all ${selectedDate === formatDate(qd.date) ? "bg-amber-100 text-amber-700 font-medium" : "bg-stone-50 text-stone-600 hover:bg-amber-50 hover:text-amber-700"}`}
                  >
                    {qd.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-3">
              <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-2">
                Or choose a date
              </p>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                  setDateOpen(false);
                }}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-stone-900 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10 cursor-pointer"
                style={{ colorScheme: "light" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
