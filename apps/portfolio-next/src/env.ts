import { createEnv } from "@nurliman.dev/env/nuxt";
import { string as vString, email as vEmail, minLength as vMinLength } from "valibot";

export const env = createEnv({
  server: {
    MY_EMAIL: vString([vMinLength(1), vEmail()]),
    SENDER_EMAIL: vString([vMinLength(1), vEmail()]),
    ELASTIC_EMAIL_API_KEY: vString([vMinLength(1)]),
  },
  client: {},
});
