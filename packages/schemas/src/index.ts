import {
  email as vEmail,
  minLength as vMinLength,
  object as vObject,
  pipe as vPipe,
  string as vString,
  type InferInput,
} from "@valibot/valibot";

export const contactFormSchema = vObject({
  name: vPipe(vString(), vMinLength(1, "Please enter your name")),
  email: vPipe(
    vString(),
    vMinLength(1, "Please enter your email"),
    vEmail("Please enter a valid email"),
  ),
  subject: vPipe(vString(), vMinLength(1, "Please enter a subject")),
  message: vPipe(vString(), vMinLength(1, "Please enter a message")),
  captchaToken: vPipe(
    vString(),
    vMinLength(1, "Please check the captcha box.\nTry refreshing the page if it doesn't appear."),
  ),
});

export type ContactForm = InferInput<typeof contactFormSchema>;
