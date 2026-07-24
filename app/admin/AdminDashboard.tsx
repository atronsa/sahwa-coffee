"use client";

import { useState, useMemo, useEffect } from "react";
import { signOut } from "next-auth/react";
import {
  Mail,
  MessageSquare,
  ClipboardList,
  LogOut,
  Calendar,
  Building2,
  Globe,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

type Subscriber = {
  id: number;
  email: string;
  subscribedAt: string;
};

type ContactMessage = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
};

type Inquiry = {
  id: number;
  fullName: string;
  companyName: string;
  jobTitle: string | null;
  businessEmail: string;
  phoneNumber: string;
  companyWebsite: string | null;
  country: string;
  city: string | null;
  shippingCountry: string;
  inquiryType: string;
  companyType: string;
  coffeeType: string;
  processingMethod: string | null;
  preferredOrigin: string | null;
  grade: string | null;
  harvestPreference: string | null;
  quantityType: string;
  quantityRange: string | null;
  quantityKg: number | null;
  quantityBags: number | null;
  incoterm: string | null;
  deliveryDate: string | null;
  preferredPort: string | null;
  additionalRequirements: string | null;
  createdAt: string;
};

type Tab = "inquiries" | "messages" | "subscribers";

const PAGE_SIZE: Record<Tab, number> = {
  inquiries: 6,
  messages: 8,
  subscribers: 12,
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  // Build a compact page list: first, last, current +/-1, with ellipses
  const pages: (number | "...")[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <div className="mt-8 sm:mt-10 flex items-center justify-center gap-1.5 sm:gap-2">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="flex h-8 w-8 items-center cursor-pointer justify-center rounded-full border border-stone-200 bg-white/60 text-stone-600 transition-colors hover:border-amber-300 hover:text-amber-800 disabled:opacity-40 disabled:hover:border-stone-200 disabled:hover:text-stone-600"
        aria-label="Previous page"
      >
        <ChevronLeft size={14} />
      </button>

      {pages.map((p, idx) =>
        p === "..." ? (
          <span key={`ellipsis-${idx}`} className="px-1 text-xs text-stone-400">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-colors ${
              p === page
                ? "bg-stone-900 text-cream"
                : "border border-stone-200 bg-white/60 text-stone-600 hover:border-amber-300 hover:text-amber-800"
            }`}
          >
            {p}
          </button>
        ),
      )}

      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 bg-white/60 text-stone-600 transition-colors hover:border-amber-300 hover:text-amber-800 disabled:opacity-40 disabled:hover:border-stone-200 disabled:hover:text-stone-600"
        aria-label="Next page"
      >
        <ChevronRight size={14} />
      </button>
    </div>
  );
}

export default function AdminDashboard({
  subscribers,
  messages,
  inquiries,
}: {
  subscribers: Subscriber[];
  messages: ContactMessage[];
  inquiries: Inquiry[];
}) {
  const [tab, setTab] = useState<Tab>("inquiries");
  const [page, setPage] = useState(1);

  // Reset to page 1 whenever the active tab changes
  useEffect(() => {
    setPage(1);
  }, [tab]);

  const tabs: {
    key: Tab;
    label: string;
    count: number;
    icon: React.ElementType;
  }[] = [
    {
      key: "inquiries",
      label: "Inquiries",
      count: inquiries.length,
      icon: ClipboardList,
    },
    {
      key: "messages",
      label: "Contact Messages",
      count: messages.length,
      icon: MessageSquare,
    },
    {
      key: "subscribers",
      label: "Newsletter",
      count: subscribers.length,
      icon: Mail,
    },
  ];

  const pageSize = PAGE_SIZE[tab];

  const pagedInquiries = useMemo(() => {
    const start = (page - 1) * pageSize;
    return inquiries.slice(start, start + pageSize);
  }, [inquiries, page, pageSize]);

  const pagedMessages = useMemo(() => {
    const start = (page - 1) * pageSize;
    return messages.slice(start, start + pageSize);
  }, [messages, page, pageSize]);

  const pagedSubscribers = useMemo(() => {
    const start = (page - 1) * pageSize;
    return subscribers.slice(start, start + pageSize);
  }, [subscribers, page, pageSize]);

  const totalPages = Math.max(
    1,
    Math.ceil(
      (tab === "inquiries"
        ? inquiries.length
        : tab === "messages"
          ? messages.length
          : subscribers.length) / pageSize,
    ),
  );

  return (
    <main className="min-h-screen bg-cream font-montserrat">
      <section className="relative overflow-hidden px-6 sm:px-10 md:px-12 lg:px-14 xl:px-20 pb-12 sm:pb-16 md:pb-20 pt-24 sm:pt-28 md:pt-32">
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="inline-block mb-3 rounded-full bg-stone-900 px-4 py-1.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-widest text-cream">
                Admin
              </span>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-stone-900">
                Submissions Dashboard
              </h1>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
              className="inline-flex items-center gap-2 rounded-full cursor-pointer border border-stone-300 bg-white/60 px-4 py-2 text-xs font-medium text-stone-700 backdrop-blur-sm transition-colors hover:border-amber-300 hover:text-amber-800"
            >
              <LogOut size={14} />
              Sign Out
            </button>
          </div>

          {/* Tabs — horizontally scrollable on mobile instead of wrapping awkwardly */}
          <div className="mb-8 sm:mb-10 grid grid-cols-1 gap-2 sm:flex sm:flex-wrap sm:gap-3">
            {tabs.map(({ key, label, count, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`inline-flex shrink-0 items-center justify-center cursor-pointer gap-2 rounded-full px-4 py-2 text-[12px] sm:text-xs font-medium transition-colors ${
                  tab === key
                    ? "bg-stone-900 text-cream"
                    : "border border-stone-200 bg-white/60 text-stone-700 hover:border-amber-300"
                }`}
              >
                <Icon
                  size={14}
                  className={tab === key ? "text-amber-400" : "text-amber-600"}
                />
                {label}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                    tab === key ? "bg-cream/20" : "bg-amber-50 text-amber-800"
                  }`}
                >
                  {count}
                </span>
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="mb-8 sm:mb-10 flex items-center gap-3 sm:gap-4">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-black/40 to-transparent" />
          </div>

          {/* Inquiries */}
          {tab === "inquiries" && (
            <>
              <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
                {pagedInquiries.length === 0 && (
                  <p className="text-sm text-stone-500">No inquiries yet.</p>
                )}
                {pagedInquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="rounded-xl border border-stone-200 bg-white/60 p-5 sm:p-6 shadow-sm backdrop-blur-sm"
                  >
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-stone-900">
                          {inq.fullName}
                        </h3>
                        <p className="mt-4 flex items-center gap-1.5 text-xs text-stone-500">
                          <Building2
                            size={12}
                            className="text-amber-600 shrink-0"
                          />
                          <span className="wrap-break-word">
                            {inq.companyName}
                            {inq.jobTitle ? ` · ${inq.jobTitle}` : ""}
                          </span>
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[8px] sm:text-[10px] font-medium uppercase tracking-wider text-amber-800">
                        {inq.inquiryType}
                      </span>
                    </div>

                    <div className="mb-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <p className="text-stone-600 wrap-break-word">
                        <span className="font-semibold text-stone-900">
                          Email:{" "}
                        </span>
                        {inq.businessEmail}
                      </p>
                      <p className="flex items-center gap-1 text-stone-600">
                        <Phone size={11} className="text-amber-600 shrink-0" />
                        {inq.phoneNumber}
                      </p>
                      <p className="text-stone-600">
                        <span className="font-semibold text-stone-900">
                          Country:{" "}
                        </span>
                        {inq.country}
                        {inq.city ? `, ${inq.city}` : ""}
                      </p>
                      <p className="text-stone-600">
                        <span className="font-semibold text-stone-900">
                          Ship to:{" "}
                        </span>
                        {inq.shippingCountry}
                      </p>
                      {inq.companyWebsite && (
                        <p className="sm:col-span-2 flex items-center gap-1 text-stone-600 wrap-break-word">
                          <Globe
                            size={11}
                            className="text-amber-600 shrink-0"
                          />
                          {inq.companyWebsite}
                        </p>
                      )}
                    </div>

                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {[
                        inq.coffeeType,
                        inq.processingMethod,
                        inq.preferredOrigin,
                        inq.grade,
                      ]
                        .filter(Boolean)
                        .map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-stone-100 border border-stone-300 px-2.5 py-1 text-[10px] font-medium text-stone-700"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>

                    <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs border-t border-stone-200 pt-3">
                      <p className="text-stone-600">
                        <span className="font-semibold text-stone-900">
                          Quantity:{" "}
                        </span>
                        {inq.quantityType === "kg" && inq.quantityKg
                          ? `${inq.quantityKg} kg`
                          : inq.quantityType === "bags" && inq.quantityBags
                            ? `${inq.quantityBags} bags`
                            : inq.quantityRange || "—"}
                      </p>
                      <p className="text-stone-600">
                        <span className="font-semibold text-stone-900">
                          Incoterm:{" "}
                        </span>
                        {inq.incoterm || "—"}
                      </p>
                      <p className="text-stone-600">
                        <span className="font-semibold text-stone-900">
                          Delivery:{" "}
                        </span>
                        {inq.deliveryDate || "—"}
                      </p>
                      <p className="text-stone-600">
                        <span className="font-semibold text-stone-900">
                          Port:{" "}
                        </span>
                        {inq.preferredPort || "—"}
                      </p>
                    </div>

                    {inq.additionalRequirements && (
                      <p className="mb-3 text-xs leading-relaxed text-stone-600 italic border-l-2 border-amber-300 pl-3">
                        {inq.additionalRequirements}
                      </p>
                    )}

                    <p className="flex items-center gap-1.5 text-[10px] text-stone-400">
                      <Calendar size={11} />
                      {formatDate(inq.createdAt)}
                    </p>
                  </div>
                ))}
              </div>
              <Pagination
                page={page}
                totalPages={totalPages}
                onChange={setPage}
              />
            </>
          )}

          {/* Contact Messages */}
          {tab === "messages" && (
            <>
              <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                {pagedMessages.length === 0 && (
                  <p className="text-sm text-stone-500">No messages yet.</p>
                )}
                {pagedMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className="rounded-xl border border-stone-200 bg-white/60 p-5 sm:p-6 shadow-sm backdrop-blur-sm"
                  >
                    <div className="mb-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-3">
                      <h3 className="text-sm font-semibold text-stone-900">
                        {msg.name}
                      </h3>
                      <span className="text-[10px] sm:text-[12px] text-stone-500">
                        {formatDate(msg.createdAt)}
                      </span>
                    </div>
                    <p className="mb-3 text-[12px] sm:text-[13px] text-amber-700 wrap-break-word">
                      <a
                        href={`mailto:${msg.email}`}
                        className="cursor-pointer"
                      >
                        {msg.email}
                      </a>
                    </p>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-900">
                      {msg.subject}
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed text-stone-600">
                      {msg.message}
                    </p>
                  </div>
                ))}
              </div>
              <Pagination
                page={page}
                totalPages={totalPages}
                onChange={setPage}
              />
            </>
          )}

          {/* Newsletter Subscribers */}
          {tab === "subscribers" && (
            <>
              {/* Table on sm+ screens */}
              <div className="hidden sm:block overflow-hidden rounded-xl border border-stone-200 bg-white/60 backdrop-blur-sm">
                {pagedSubscribers.length === 0 ? (
                  <p className="p-6 text-sm text-stone-500">
                    No subscribers yet.
                  </p>
                ) : (
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50/60">
                        <th className="px-4 sm:px-6 py-3 font-semibold uppercase tracking-wider text-stone-900 text-[10px] sm:text-xs">
                          Email
                        </th>
                        <th className="px-4 sm:px-6 py-3 font-semibold uppercase tracking-wider text-stone-900 text-[10px] sm:text-xs">
                          Subscribed
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {pagedSubscribers.map((sub) => (
                        <tr
                          key={sub.id}
                          className="border-b border-stone-100 last:border-0"
                        >
                          <td className="px-4 sm:px-6 py-3 text-stone-700 text-[11px] sm:text-[13px]">
                            {sub.email}
                          </td>
                          <td className="px-4 sm:px-6 py-3 text-stone-500 text-[11px] sm:text-[13px]">
                            {formatDate(sub.subscribedAt)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

              {/* Card list on mobile — tables don't work well under ~380px */}
              <div className="sm:hidden flex flex-col gap-3">
                {pagedSubscribers.length === 0 ? (
                  <p className="text-sm text-stone-500">No subscribers yet.</p>
                ) : (
                  pagedSubscribers.map((sub) => (
                    <div
                      key={sub.id}
                      className="rounded-xl border border-stone-200 bg-white/60 p-4 backdrop-blur-sm"
                    >
                      <p className="text-sm font-medium text-stone-800 wrap-break-word">
                        {sub.email}
                      </p>
                      <p className="mt-1 text-[10px] text-stone-400">
                        {formatDate(sub.subscribedAt)}
                      </p>
                    </div>
                  ))
                )}
              </div>

              <Pagination
                page={page}
                totalPages={totalPages}
                onChange={setPage}
              />
            </>
          )}
        </div>
      </section>
    </main>
  );
}
