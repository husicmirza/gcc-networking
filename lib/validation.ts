import { z } from "zod";

const socialMediaUrlValidation = (platformUrl: string) => {
  return z
    .union([
      z
        .string()
        .url(`Must be a valid URL: https://www.url.com`)
        .refine((url) => url.startsWith(platformUrl), {
          message: `URL must start with ${platformUrl}`,
        }),
      z.literal(""),
    ])
    .nullable()
    .optional();
};
export const authFormSchema = (type: string) =>
  z.object({
    firstName:
      type === "login" || type === "forgot-password"
        ? z.string().optional()
        : z.string().min(2, "First name must be at least 2 characters"),
    lastName:
      type === "login" || type === "forgot-password"
        ? z.string().optional()
        : z.string().min(2, "Last name must be at least 2 characters"),
    address1:
      type === "login" || type === "forgot-password"
        ? z.string().optional()
        : z.string().min(2, "Please enter an address"),
    city:
      type === "login" || type === "forgot-password"
        ? z.string().optional()
        : z.string().min(2, "Please enter a city"),
    country:
      type === "login" || type === "forgot-password"
        ? z.string().optional()
        : z.string().min(2, "Please enter a country"),
    zipCode:
      type === "login" || type === "forgot-password"
        ? z.string().optional()
        : z
            .string()
            .min(3, "Zip code must be at least 3 characters")
            .max(6, "Zip code must be at most 6 characters"),
    dateOfBirth:
      type === "login" || type === "forgot-password"
        ? z.string().optional()
        : z.coerce.string().min(2, "Invalid date of birth"),
    phone:
      type === "login" || type === "forgot-password"
        ? z.string().optional()
        : z
            .string()
            .refine(
              (phone) => /^\+\d{10,15}$/.test(phone),
              "Invalid phone number"
            ),
    status:
      type === "login" || type === "forgot-password"
        ? z.string().optional()
        : z
            .enum(["created", "pending", "approved", "cancelled"])
            .default("created"),
    email: z.string().email("Invalid email address"),
    password:
      type === "forgot-password"
        ? z.string().optional()
        : z.string().min(8, "Password must be at least 8 characters long"),
  });

export const editProfileSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  address1: z.string().min(2, "Please enter an address"),
  city: z.string().min(2, "Please enter a city"),
  country: z.string().min(2, "Please enter a country"),
  zipCode: z
    .string()
    .min(3, "Zip code must be at least 3 characters")
    .max(6, "Zip code must be at most 6 characters"),
  dateOfBirth: z.coerce.string().min(2, "Invalid date of birth"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  email: z.string().email("Invalid email address"),
  status: z.enum(["created", "pending", "approved", "cancelled"]),
  occupation: z.string().min(2, "Please enter an occupation"),
  company: z.string().min(2, "Please enter a company"),
  industry: z.string().min(2, "Please enter an industry"),
  cityOfOrigin: z.string().min(2, "Please enter a city of origin"),
  countryOfOrigin: z.string().min(2, "Please enter a country of origin"),
  linkedin: socialMediaUrlValidation("https://www.linkedin.com/"),
  instagram: socialMediaUrlValidation("https://www.instagram.com/"),
  facebook: socialMediaUrlValidation("https://www.facebook.com/"),
  image: z
    .custom((value) => {
      return typeof value === "string" || typeof value === "object";
    })
    .optional(),
  biography: z.string().min(2, "Please enter a biography"),
});

export type EditProfileDataFormType = z.infer<typeof editProfileSchema>;

export const profileApprovalActionFormSchema = (type: string) =>
  z.object({
    cancellationReason:
      type === "approve"
        ? z.string().optional()
        : z.string().min(2, "Please enter a cancellation reason"),
  });
