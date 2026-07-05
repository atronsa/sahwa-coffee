import { z } from "zod";

// Regex patterns
const fullNameRegex = /^[a-zA-Zà-üÀ-Ü]{2,}(?: [a-zA-Zà-üÀ-Ü]{2,})+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// SQL injection patterns to block
const sqlInjectionPattern =
  /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|CREATE|TRUNCATE|EXEC|EXECUTE)\b|(--)|(;)|('.*')|(\/\*.*\*\/))/i;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name")
    .max(80, "Name is too long")
    .regex(fullNameRegex, "Enter your first and last name")
    .refine((val) => !sqlInjectionPattern.test(val), {
      message: "Invalid characters in name",
    }),
  email: z
    .string()
    .trim()
    .min(1, "Enter your email")
    .max(254, "Email is too long")
    .regex(emailRegex, "Enter a valid email address")
    .refine((val) => !sqlInjectionPattern.test(val), {
      message: "Invalid characters in email",
    }),
  subject: z
    .string()
    .trim()
    .min(3, "Enter a subject")
    .max(120, "Subject is too long")
    .refine((val) => !sqlInjectionPattern.test(val), {
      message: "Invalid characters in subject",
    }),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(2000, "Message is too long")
    .refine((val) => !sqlInjectionPattern.test(val), {
      message: "Invalid characters in message",
    }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;
