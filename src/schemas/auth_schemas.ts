import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be less than 50 characters"),

    email: z
      .string()
      .nonempty("Email is required")
      .min(1, "Email is required")
      .email("Please enter a valid email"),

    password: z
      .string()
      .nonempty("Password is required")
      .min(7, "Password must be at least 7 characters")
      .max(100, "Password is too long")
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
        "Password must contain an uppercase letter, a lowercase letter, and a number",
      ),

    rePassword: z.string().nonempty("Please re-enter your password"),

    phone: z
      .string()
      .nonempty("Phone number is required")
      .regex(
        /^01[0125][0-9]{8}$/,
        "Please enter a valid Egyptian phone number",
      ),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
