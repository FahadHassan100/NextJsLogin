import { z } from "zod";

const EMAIL_SCHEMA = z.string().min(3, "Email Address is required.").email("Invalid Email Address");

export const loginSchema = z.object({
    email: EMAIL_SCHEMA,
    password: z.string().min(3, "Password is required")
});