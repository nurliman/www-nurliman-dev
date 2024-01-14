import {
  string as vString,
  object as vObject,
  email as vEmail,
  minLength as vMinLength,
  type Input as VInput,
} from "valibot";

export const contactFormSchema = vObject({
  name: vString([vMinLength(1, "Please enter your name")]),
  email: vString([vMinLength(1, "Please enter your email"), vEmail("Please enter a valid email")]),
  subject: vString([vMinLength(1, "Please enter a subject")]),
  message: vString([vMinLength(1, "Please enter a message")]),
  captchaToken: vString([
    vMinLength(1, "Please check the captcha box.\nTry refreshing the page if it doesn't appear."),
  ]),
});

export type ContactForm = VInput<typeof contactFormSchema>;
