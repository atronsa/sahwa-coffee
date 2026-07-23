"use client";

import { useState, useCallback, type ChangeEvent, type FormEvent } from "react";
import { ChevronRight, Loader2, Check, X } from "lucide-react";
import {
  contactFormSchema,
  type ContactFormValues,
  type ContactFormErrors,
} from "@/schema/contact-form";
import { CONTACT_FORM_FIELDS } from "@/data/contact-form";

type FieldChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const EMPTY_VALUES: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Form() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = useCallback(
    (field: keyof ContactFormValues) => (e: FieldChangeEvent) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) =>
        prev[field] ? { ...prev, [field]: undefined } : prev,
      );
      if (successMessage) setSuccessMessage(null);
      if (submitError) setSubmitError(null);
    },
    [successMessage, submitError],
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSuccessMessage(null);

    const result = contactFormSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors: ContactFormErrors = {};
      const flattened = result.error.flatten();
      for (const [field, messages] of Object.entries(flattened.fieldErrors)) {
        if (messages?.[0]) {
          fieldErrors[field as keyof ContactFormValues] = messages[0];
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error ?? "Failed to send message.");
      }

      setSuccessMessage(
        "Message sent successfully! We'll get back to you within 24 hours.",
      );
      setValues(EMPTY_VALUES);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-neutral-100 p-6 sm:p-10 md:p-12 w-full max-w-lg font-montserrat">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 mb-3">
        Get in Touch
      </h2>
      <p className="text-[13px] sm:text-sm text-black leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-sm">
        Tell us your needs. We'll make it happen.
      </p>

      <form
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        className="space-y-5 sm:space-y-6 md:space-y-7"
      >
        {CONTACT_FORM_FIELDS.map((field) => (
          <FormField
            key={field.name}
            id={`contact-${field.name}`}
            label={field.label}
            type={field.type}
            as={field.as}
            value={values[field.name]}
            onChange={handleChange(field.name)}
            error={errors[field.name]}
            disabled={isSubmitting}
          />
        ))}

        {/* Success message */}
        {successMessage && (
          <div
            role="status"
            className="flex items-start gap-2 bg-green-100 rounded-lg p-3 border border-green-500/20"
          >
            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 shrink-0 mt-0.5" />
            <p className="text-[11px] sm:text-xs font-medium text-green-400">
              {successMessage}
            </p>
          </div>
        )}

        {/* Error message */}
        {submitError && (
          <div
            role="alert"
            className="flex items-start gap-2 bg-red-100 rounded-lg p-3 border border-red-500/20"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 shrink-0 mt-0.5" />
            <p className="text-[11px] sm:text-xs font-medium text-red-400">
              {submitError}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 bg-neutral-900 text-white text-[12px] sm:text-xs font-medium rounded-full pl-5 pr-6 py-3 mt-2 hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer w-full sm:w-auto justify-center sm:justify-start"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <ChevronRight size={14} />
              Send a message
            </>
          )}
        </button>
      </form>
    </div>
  );
}

function FormField({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  as = "input",
  disabled = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: FieldChangeEvent) => void;
  error?: string;
  type?: string;
  as?: "input" | "textarea";
  disabled?: boolean;
}) {
  const errorId = `${id}-error`;
  const sharedClasses = `w-full bg-transparent border-b outline-none text-[11px] sm:text-sm text-neutral-900 placeholder-neutral-400 pt-2 pb-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
    error
      ? "border-red-400 focus:border-red-500"
      : "border-neutral-300 focus:border-neutral-900"
  }`;

  return (
    <div>
      {as === "textarea" ? (
        <textarea
          id={id}
          placeholder={label}
          value={value}
          onChange={onChange}
          rows={4}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`${sharedClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={label}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={sharedClasses}
        />
      )}
      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-1.5 text-[11px] sm:text-xs text-red-500 font-medium"
        >
          {error}
        </p>
      )}
    </div>
  );
}
