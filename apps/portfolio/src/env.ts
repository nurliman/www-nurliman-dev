import { createEnv } from "@nurliman/env-valibot";
import { string as vString, url as vUrl, minLength as vMinLength } from "@valibot/valibot";

export const env = createEnv({
  server: {},
  clientPrefix: "PUBLIC_",
  client: {
    PUBLIC_MESSAGE_SENDER_SERVICE_HOST: vString([vUrl()]),
    PUBLIC_CF_TURNSTILE_SITE_KEY: vString([vMinLength(1)]),
  },
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
});
