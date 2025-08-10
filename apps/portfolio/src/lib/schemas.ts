import * as z from "zod/v4-mini";

export const contactFormSchema = z.object({
  name: z.string().check(z.minLength(1)),
  email: z.string().check(z.email("Please enter a valid email")),
  subject: z.string().check(z.minLength(1, "Please enter a subject")),
  message: z.string().check(z.minLength(1, "Please enter a message")),
  captchaToken: z
    .string()
    .check(
      z.minLength(
        1,
        "Please check the captcha box.\nTry refreshing the page if it doesn't appear.",
      ),
    ),
});
