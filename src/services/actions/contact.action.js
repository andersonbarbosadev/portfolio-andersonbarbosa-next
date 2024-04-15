"use server";

import { ContactFormSchema } from "App/schemas/contact-form.schema";
import { validateCaptcha } from "App/services/captcha";
import { resend } from "App/libs/resend";
import ContactFormEmail from "@/emails/contact-form-email";

export const contactSendEmail = async (data) => {
  // Validate Data Form
  const parse = ContactFormSchema.safeParse(data);
  if (parse.error) throw new Error(parse.error.message);

  // Variables
  const { name, email, message, captcha } = data;

  // Validate Captcha
  const checkCaptcha = await validateCaptcha(captcha);
  if (!checkCaptcha.success) throw new Error(checkCaptcha.error);

  // Send Email
  try {
    const data = await resend.emails.send({
      from: "Anderson Barbosa - Full Stack <hello@andersonbarbosa.site>",
      cc: ["andersonbarbosadev@outlook.com"],
      to: [email],
      subject: "Contact form submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message }),
    });
    return { success: true, data };
  } catch (error) {
    throw new Error("Error sending email");
  }
};
