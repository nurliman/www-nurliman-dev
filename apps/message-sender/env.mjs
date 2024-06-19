import { createEnv } from "@nurliman/env-valibot/nextjs";
import {
  email as vEmail,
  minLength as vMinLength,
  pipe as vPipe,
  string as vString,
} from "@valibot/valibot";

export const env = createEnv({
  server: {
    RECIPIENT_EMAIL: vPipe(vString(), vMinLength(1), vEmail()),
    SENDER_EMAIL: vPipe(vString(), vMinLength(1), vEmail()),
    ELASTIC_EMAIL_API_KEY: vPipe(vString(), vMinLength(1)),
    CF_TURNSTILE_SECRET_KEY: vPipe(vString(), vMinLength(1)),
  },
  client: {},
  runtimeEnv: {
    RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
    SENDER_EMAIL: process.env.SENDER_EMAIL,
    ELASTIC_EMAIL_API_KEY: process.env.ELASTIC_EMAIL_API_KEY,
    CF_TURNSTILE_SECRET_KEY: process.env.CF_TURNSTILE_SECRET_KEY,
  },
});
