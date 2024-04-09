import * as z from "zod";

export const ContactFormSchema = z.object({
  name: z.string().nonempty().min(4).trim(),
  email: z.string().nonempty().email().trim(),
  message: z.string().nonempty().min(10).trim(),
  captcha: z.string().optional(),
});
