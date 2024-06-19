import { createEnv } from "@nurliman/env-valibot";
import {
  minLength as vMinLength,
  pipe as vPipe,
  string as vString,
  url as vUrl,
} from "@valibot/valibot";

export const env = createEnv({
  server: {},
  clientPrefix: "PUBLIC_",
  client: {
    PUBLIC_MESSAGE_SENDER_SERVICE_HOST: vPipe(vString(), vUrl()),
    PUBLIC_CF_TURNSTILE_SITE_KEY: vPipe(vString(), vMinLength(1)),
  },
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
});
