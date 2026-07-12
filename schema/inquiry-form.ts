import { z } from "zod";

// Supports any script (Latin, Ethiopic, Arabic, Cyrillic, CJK, etc.), plus
// hyphens/apostrophes within a name, and requires at least a first + last name.
const fullNameRegex = /^\p{L}[\p{L}'-]*(?:\s+\p{L}[\p{L}'-]*)+$/u;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
const websiteRegex = /^(https?:\/\/)?([\w-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;

export const inquiryFormSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, "Enter your full name")
      .max(80, "Name is too long")
      .regex(fullNameRegex, "Enter your first and last name"),
    companyName: z.string().trim().min(1, "Enter company name").max(200),
    jobTitle: z.string().trim().max(100).optional().or(z.literal("")),
    businessEmail: z
      .string()
      .trim()
      .min(1, "Enter your email")
      .max(254, "Email is too long")
      .regex(emailRegex, "Enter a valid email"),
    phoneNumber: z
      .string()
      .trim()
      .min(1, "Enter phone number")
      .regex(phoneRegex, "Enter a valid phone number"),
    companyWebsite: z
      .string()
      .trim()
      .max(255)
      .optional()
      .or(z.literal(""))
      .refine(
        (val) => !val || websiteRegex.test(val),
        "Enter a valid website (e.g. example.com)",
      ),
    country: z.string().min(1, "Select country"),
    city: z.string().trim().max(100).optional().or(z.literal("")),
    shippingCountry: z.string().min(1, "Select shipping destination"),
    inquiryType: z.string().min(1, "Select inquiry type"),
    companyType: z.string().min(1, "Select company type"),
    coffeeType: z.string().min(1, "Select coffee type"),
    processingMethod: z.string().optional().or(z.literal("")),
    preferredOrigin: z.string().optional().or(z.literal("")),
    grade: z.string().max(50).optional().or(z.literal("")),
    harvestPreference: z.string().max(100).optional().or(z.literal("")),
    quantityType: z.enum(["range", "exact"]),
    quantityRange: z.string().optional().or(z.literal("")),
    quantityKg: z
      .number()
      .positive("Must be greater than 0")
      .optional()
      .nullable(),
    quantityBags: z
      .number()
      .int("Must be a whole number")
      .positive("Must be greater than 0")
      .optional()
      .nullable(),
    incoterm: z.string().optional().or(z.literal("")),
    deliveryDate: z.string().optional().or(z.literal("")),
    preferredPort: z.string().max(100).optional().or(z.literal("")),
    additionalRequirements: z.string().max(2000).optional().or(z.literal("")),
  })
  .superRefine((data, ctx) => {
    if (data.quantityType === "range") {
      if (!data.quantityRange) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Select a quantity range",
          path: ["quantityRange"],
        });
      }
    } else {
      if (data.quantityKg == null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Enter quantity in kg",
          path: ["quantityKg"],
        });
      }
      if (data.quantityBags == null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Enter quantity in bags",
          path: ["quantityBags"],
        });
      }
    }
  });

export type InquiryFormValues = z.infer<typeof inquiryFormSchema>;
export type InquiryFormErrors = Partial<
  Record<keyof InquiryFormValues, string>
>;
