import { z } from "zod";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// SQL injection patterns to block
const sqlInjectionPattern =
  /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|CREATE|TRUNCATE|EXEC|EXECUTE)\b|(--)|(;)|('.*')|(\/\*.*\*\/))/i;

export const LoginFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Enter your email")
    .max(254, "Email is too long")
    .regex(emailRegex, "Enter a valid email address")
    .refine((val) => !sqlInjectionPattern.test(val), {
      message: "Invalid characters in email",
    }),
});

export type LoginFormValues = z.infer<typeof LoginFormSchema>;
export type LoginFormErrors = Partial<Record<keyof LoginFormValues, string>>;
