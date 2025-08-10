import { createEnv } from "@t3-oss/env-core";
import { browser } from "$app/environment";
import { env as runtimeEnv } from "$env/dynamic/private";
import * as z from "zod/v4-mini";

export const env = createEnv({
  server: {
    RECIPIENT_EMAIL: z.string().check(z.minLength(1), z.email()),
    SENDER_EMAIL: z.string().check(z.minLength(1), z.email()),
    ELASTIC_EMAIL_API_KEY: z.string().check(z.minLength(1)),
    CF_TURNSTILE_SECRET_KEY: z.string().check(z.minLength(1)),
  },
  runtimeEnv,
  isServer: !browser,
  emptyStringAsUndefined: true,
});
