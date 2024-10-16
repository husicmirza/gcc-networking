import { z } from "zod";

export const authFormSchema = (type: string) =>
  z.object({
    firstName:
      type === "login"
        ? z.string().optional()
        : z.string().min(2, "First name must be at least 2 characters"),
    lastName:
      type === "login"
        ? z.string().optional()
        : z.string().min(2, "Last name must be at least 2 characters"),
    address1:
      type === "login"
        ? z.string().optional()
        : z.string().min(2, "Please enter an address"),
    city:
      type === "login"
        ? z.string().optional()
        : z.string().min(2, "Please enter a city"),
    country:
      type === "login"
        ? z.string().optional()
        : z.string().min(2, "Please enter a country"),
    zipCode:
      type === "login"
        ? z.string().optional()
        : z
            .string()
            .min(3, "Zip code must be at least 3 characters")
            .max(6, "Zip code must be at most 6 characters"),
    dateOfBirth:
      type === "login"
        ? z.string().optional()
        : z.coerce.string().min(2, "Invalid date of birth"),
    phone:
      type === "login"
        ? z.string().optional()
        : z
            .string()
            .refine(
              (phone) => /^\+\d{10,15}$/.test(phone),
              "Invalid phone number"
            ),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
  });
