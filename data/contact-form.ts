import type { ContactFormValues } from "@/schema/contact-form";

export type ContactFormFieldConfig = {
  name: keyof ContactFormValues;
  label: string;
  type?: string;
  as?: "input" | "textarea";
};

export const CONTACT_FORM_FIELDS: ContactFormFieldConfig[] = [
  { name: "name", label: "Full name" },
  { name: "email", label: "Email", type: "email" },
  { name: "subject", label: "Subject" },
  { name: "message", label: "Message", as: "textarea" },
];
