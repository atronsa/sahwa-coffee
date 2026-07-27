"use client";

import { useState, type FormEvent } from "react";
import { ChevronRight, Loader2, Check, X } from "lucide-react";
import { User, MapPin, FileText, Coffee, Package, Ship } from "lucide-react";
import {
  INQUIRY_TYPES,
  COMPANY_TYPES,
  COFFEE_TYPES,
  PROCESSING_METHODS,
  ORIGINS,
  QUANTITY_RANGES,
  INCOTERMS,
  COUNTRIES,
} from "@/data/inquiry-form";
import {
  inquiryFormSchema,
  type InquiryFormErrors,
} from "@/schema/inquiry-form";
import Section from "./Section";
import Input from "./Input";
import Textarea from "./Textarea";
import SearchableSelect from "./SearchableSelect";
import PhoneInput from "./PhoneInput";
import DatePicker from "./DatePicker";

const EMPTY_VALUES = {
  fullName: "",
  companyName: "",
  jobTitle: "",
  businessEmail: "",
  phoneNumber: "",
  companyWebsite: "",
  country: "",
  city: "",
  shippingCountry: "",
  inquiryType: "",
  companyType: "",
  coffeeType: "",
  processingMethod: "",
  preferredOrigin: "",
  grade: "",
  harvestPreference: "",
  quantityType: "range" as "range" | "exact",
  quantityRange: "",
  incoterm: "",
  deliveryDate: "",
  preferredPort: "",
  additionalRequirements: "",
  quantityKg: null as number | null,
  quantityBags: null as number | null,
};

export default function InquiryForm() {
  const [values, setValues] = useState(EMPTY_VALUES);
  const [errors, setErrors] = useState<InquiryFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  const [phoneCode, setPhoneCode] = useState("+251");

  const setValue = (field: string, value: string | number | null) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setSuccessMessage(null);
    setSubmitError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSuccessMessage(null);

    const result = inquiryFormSchema.safeParse({
      ...values,
      phoneNumber: `${phoneCode} ${values.phoneNumber}`.trim(),
    });
    if (!result.success) {
      const fieldErrors: InquiryFormErrors = {};
      for (const [field, messages] of Object.entries(
        result.error.flatten().fieldErrors,
      )) {
        if (messages?.[0])
          fieldErrors[field as keyof InquiryFormErrors] = messages[0];
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const data = await response.json().catch(() => null);
      if (!response.ok)
        throw new Error(data?.error ?? "Failed to submit inquiry.");

      setSuccessMessage(
        "Inquiry submitted! Our team will get back to you within 24-48 hours.",
      );
      setValues(EMPTY_VALUES);
      setConsent(false);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successMessage) {
    return (
      <section className="bg-cream font-montserrat min-h-screen flex items-center justify-center px-8">
        <div className="max-w-lg text-center py-16 sm:py-20">
          <div className="w-16 sm:w-20 h-16 sm:h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Check className="w-8 sm:w-10 h-8 sm:h-10 text-green-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-stone-900 mb-4 sm:mb-8">
            Inquiry Submitted!
          </h2>
          <p className="text-sm sm:text-base text-black leading-relaxed mb-6 sm:mb-8">
            {successMessage}
          </p>
          <button
            onClick={() => setSuccessMessage(null)}
            className="text-sm sm:text-base text-amber-700 cursor-pointer hover:text-amber-800 font-medium transition-colors"
          >
            Submit another inquiry →
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cream font-montserrat">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 md:px-8 lg:px-10 py-25">
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-stone-900 mb-2 sm:mb-4 pt-2 sm:pt-4">
            Request a Quote
          </h1>
          <p className="text-xs sm:text-sm text-black max-w-xl mx-auto leading-relaxed">
            Tell us about your coffee needs and we'll craft a tailored sourcing
            and export plan for your business.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="space-y-6 sm:space-y-8 md:space-y-10"
        >
          {/* 1. Contact Information */}
          <Section title="Contact Information" icon={User}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              <Input
                label="Full Name *"
                // required
                placeholder="Your full name"
                value={values.fullName}
                onChange={(e) => setValue("fullName", e.target.value)}
                error={errors.fullName}
              />
              <Input
                label="Company Name *"
                // required
                placeholder="Your company"
                value={values.companyName}
                onChange={(e) => setValue("companyName", e.target.value)}
                error={errors.companyName}
              />
              <Input
                label="Job Title"
                placeholder="e.g., Head of Procurement"
                value={values.jobTitle}
                onChange={(e) => setValue("jobTitle", e.target.value)}
                error={errors.jobTitle}
              />
              <Input
                label="Business Email *"
                type="email"
                // required
                placeholder="you@company.com"
                value={values.businessEmail}
                onChange={(e) => setValue("businessEmail", e.target.value)}
                error={errors.businessEmail}
              />
              <div>
                <label className="block text-xs sm:text-sm font-medium text-black mb-1.5">
                  Phone Number *
                </label>
                <PhoneInput
                  phoneCode={phoneCode}
                  setPhoneCode={setPhoneCode}
                  phoneNumber={values.phoneNumber}
                  setPhoneNumber={(v) => setValue("phoneNumber", v)}
                  error={errors.phoneNumber}
                />
              </div>
              <Input
                label="Company Website"
                placeholder="example.com"
                value={values.companyWebsite}
                onChange={(e) => setValue("companyWebsite", e.target.value)}
                error={errors.companyWebsite}
              />
            </div>
          </Section>

          {/* 2. Business Location */}
          <Section title="Business Location" icon={MapPin}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              <SearchableSelect
                label="Country *"
                options={[...COUNTRIES]}
                // required
                value={values.country}
                onChange={(v) => setValue("country", v)}
                error={errors.country}
              />
              <Input
                label="City"
                placeholder="Your city"
                value={values.city}
                onChange={(e) => setValue("city", e.target.value)}
                error={errors.city}
              />
              <SearchableSelect
                label="Shipping Destination *"
                options={[...COUNTRIES]}
                // required
                value={values.shippingCountry}
                onChange={(v) => setValue("shippingCountry", v)}
                error={errors.shippingCountry}
              />
            </div>
          </Section>

          {/* 3. Inquiry Details */}
          <Section title="Inquiry Details" icon={FileText}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <SearchableSelect
                label="Inquiry Type *"
                options={[...INQUIRY_TYPES]}
                // required
                value={values.inquiryType}
                onChange={(v) => setValue("inquiryType", v)}
                error={errors.inquiryType}
              />
              <SearchableSelect
                label="Company Type *"
                options={[...COMPANY_TYPES]}
                // required
                value={values.companyType}
                onChange={(v) => setValue("companyType", v)}
                error={errors.companyType}
              />
            </div>
          </Section>

          {/* 4. Coffee Requirements */}
          <Section title="Coffee Requirements" icon={Coffee}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              <SearchableSelect
                label="Coffee Type *"
                options={[...COFFEE_TYPES]}
                // required
                value={values.coffeeType}
                onChange={(v) => setValue("coffeeType", v)}
                error={errors.coffeeType}
              />
              <SearchableSelect
                label="Processing Method"
                options={[...PROCESSING_METHODS]}
                value={values.processingMethod}
                onChange={(v) => setValue("processingMethod", v)}
                error={errors.processingMethod}
              />
              <SearchableSelect
                label="Preferred Origin"
                options={[...ORIGINS]}
                value={values.preferredOrigin}
                onChange={(v) => setValue("preferredOrigin", v)}
                error={errors.preferredOrigin}
              />
              <Input
                label="Grade"
                placeholder="e.g., Grade 1"
                value={values.grade}
                onChange={(e) => setValue("grade", e.target.value)}
                error={errors.grade}
              />
              <Input
                label="Harvest Preference"
                placeholder="e.g., Current crop"
                value={values.harvestPreference}
                onChange={(e) => setValue("harvestPreference", e.target.value)}
                error={errors.harvestPreference}
              />
            </div>
          </Section>

          {/* 5. Quantity */}
          <Section title="Quantity" icon={Package}>
            <div className="flex gap-2 sm:gap-3 mb-5">
              <button
                type="button"
                onClick={() => setValue("quantityType", "range")}
                className={`text-[10px] sm:text-xs font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${values.quantityType === "range" ? "bg-stone-800 text-white shadow-lg" : "bg-white text-stone-500 border border-stone-200"}`}
              >
                Quantity Range
              </button>
              <button
                type="button"
                onClick={() => setValue("quantityType", "exact")}
                className={`text-[10px] sm:text-xs font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${values.quantityType === "exact" ? "bg-stone-800 text-white shadow-lg" : "bg-white text-stone-500 border border-stone-200"}`}
              >
                Exact Quantity
              </button>
            </div>
            {values.quantityType === "range" ? (
              <SearchableSelect
                label="Estimated Order Quantity *"
                options={[...QUANTITY_RANGES]}
                // required
                value={values.quantityRange}
                onChange={(v) => setValue("quantityRange", v)}
                error={errors.quantityRange}
              />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <Input
                  label="Quantity (kg) *"
                  type="number"
                  // required
                  placeholder="e.g., 500"
                  value={values.quantityKg?.toString() ?? ""}
                  onChange={(e) =>
                    setValue(
                      "quantityKg",
                      e.target.value ? Number(e.target.value) : null,
                    )
                  }
                  error={errors.quantityKg}
                />
                <Input
                  label="Quantity (bags) *"
                  type="number"
                  required
                  placeholder="e.g., 10"
                  value={values.quantityBags?.toString() ?? ""}
                  onChange={(e) =>
                    setValue(
                      "quantityBags",
                      e.target.value ? Number(e.target.value) : null,
                    )
                  }
                  error={errors.quantityBags}
                />
              </div>
            )}
          </Section>

          {/* 6. Shipping */}
          <Section title="Shipping" icon={Ship}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              <SearchableSelect
                label="Preferred Incoterm"
                options={[...INCOTERMS]}
                value={values.incoterm}
                onChange={(v) => setValue("incoterm", v)}
                error={errors.incoterm}
              />
              <DatePicker
                selectedDate={values.deliveryDate}
                setSelectedDate={(v) => setValue("deliveryDate", v)}
              />
              <Input
                label="Preferred Port"
                placeholder="e.g., Djibouti"
                value={values.preferredPort}
                onChange={(e) => setValue("preferredPort", e.target.value)}
                error={errors.preferredPort}
              />
            </div>
            <div className="mt-5">
              <Textarea
                label="Additional Requirements"
                placeholder="Tell us about cup profile, moisture requirements, certifications, packaging preferences, or any special requests..."
                value={values.additionalRequirements}
                onChange={(e) =>
                  setValue("additionalRequirements", e.target.value)
                }
                error={errors.additionalRequirements}
              />
            </div>
          </Section>

          {/* Consent */}
          <div
            onClick={() => setConsent(!consent)}
            className="flex items-start gap-3 bg-white rounded-xl p-4 sm:p-5 border cursor-pointer transition-all duration-300 hover:shadow-md"
            style={{
              borderColor: consent ? "#b45309" : "#e5e5e5",
              backgroundColor: consent ? "#fffbeb" : "#ffffff",
            }}
          >
            <button
              type="button"
              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all pointer-events-none ${consent ? "bg-amber-700 border-amber-700" : "border-stone-300"}`}
            >
              {consent && <Check className="w-3 h-3 text-white" />}
            </button>
            <label className="text-[11px] sm:text-sm text-stone-600 leading-relaxed cursor-pointer select-none">
              I agree to be contacted regarding this inquiry. By submitting, you
              acknowledge that Sahwa Coffee will use your information to respond
              to your request.
            </label>
          </div>

          {/* Messages */}
          {submitError && (
            <div
              role="alert"
              className="flex items-start gap-2 bg-red-100 rounded-lg px-3 py-5 border border-red-500/20"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 shrink-0 mt-0.5" />
              <p className="text-[10px] sm:text-sm text-red-400 font-medium">
                {submitError}
              </p>
            </div>
          )}

          {/* Submit */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2">
            <button
              type="submit"
              disabled={!consent || isSubmitting}
              className="inline-flex items-center gap-2 bg-stone-800 cursor-pointer text-white text-xs sm:text-sm font-semibold rounded-full px-6 sm:px-10 py-3 sm:py-4 hover:bg-stone-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:shadow-stone-800/10 w-full sm:w-auto justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Sending Inquiry...
                </>
              ) : (
                <>
                  <>
                    Send Inquiry
                    <ChevronRight size={14} />
                  </>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
