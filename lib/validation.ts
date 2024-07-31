import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 character")
    .max(50, "Name must be at most 50 character"),

  email: z.string().email("Invalid email address"),
  phone: z.string().refine((value) => /^\+?[0-9]{10,14}$/.test(value), {
    message: "Invalid phone number",
  }),
});
