import { createEnv } from "@nurliman.dev/env/nextjs";
import { string as vString, email as vEmail, minLength as vMinLength } from "valibot";

export const env = createEnv({
  server: {
    RECIPIENT_EMAIL: vString([vMinLength(1), vEmail()]),
    SENDER_EMAIL: vString([vMinLength(1), vEmail()]),
    ELASTIC_EMAIL_API_KEY: vString([vMinLength(1)]),
  },
  client: {},
  runtimeEnv: {
    RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
    SENDER_EMAIL: process.env.SENDER_EMAIL,
    ELASTIC_EMAIL_API_KEY: process.env.ELASTIC_EMAIL_API_KEY,
  },
});
