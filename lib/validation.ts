import { z } from "zod";

// Common validation patterns
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const PHONE_REGEX = /^\+\d{10,15}$/;

const baseUserSchema = {
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
    .refine((phone) => PHONE_REGEX.test(phone), "Invalid phone number"),
  email: z.string().email("Invalid email address"),
  status: z
    .enum(["created", "pending", "approved", "cancelled"])
    .default("created"),
};

const passwordSchema = {
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      PASSWORD_REGEX,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
};

// Social media URL validation helper
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

// Form type specific schemas
export const loginSchema = z.object({
  email: baseUserSchema.email,
  password: passwordSchema.password,
});

export const forgotPasswordSchema = z.object({
  email: baseUserSchema.email,
});

export const resetPasswordSchema = z
  .object({
    password: passwordSchema.password,
    confirmPassword: passwordSchema.password,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Please ensure both passwords are identical",
    path: ["confirmPassword"],
  });

export const registerSchema = z.object({
  ...baseUserSchema,
  ...passwordSchema,
});

// Main auth form schema
export const authFormSchema = (type: string) => {
  switch (type) {
    case "login":
      return loginSchema;
    case "forgot-password":
      return forgotPasswordSchema;
    case "reset-password":
      return resetPasswordSchema;
    default:
      return registerSchema;
  }
};

export const editProfileSchema = z.object({
  ...baseUserSchema,
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
