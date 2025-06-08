import { z } from "zod";

export const contactSchema = z.object({
  senderName: z.string().min(1, { message: "Name is required" }),
  senderEmail: z
    .string()
    .email({ message: "Invalid email address" })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export type ContactSchema = z.infer<typeof contactSchema>;
