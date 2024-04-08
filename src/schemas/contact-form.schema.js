import * as z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(4).trim(),
  email: z.string().email().trim(),
  message: z.string().min(10).trim(),
});
