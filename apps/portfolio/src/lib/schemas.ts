import { email, minLength, object, pipe, string } from "valibot";

export const contactFormSchema = object({
  name: pipe(string(), minLength(1, "Please enter your name")),
  email: pipe(string(), email("Please enter a valid email")),
  subject: pipe(string(), minLength(1, "Please enter a subject")),
  message: pipe(string(), minLength(1, "Please enter a message")),
  captchaToken: pipe(
    string(),
    minLength(1, "Please check the captcha box.\nTry refreshing the page if it doesn't appear."),
  ),
});
