import { createEnv } from "@t3-oss/env-core";
import { browser } from "$app/environment";
import { env as runtimeEnv } from "$env/dynamic/private";
import { email, minLength, pipe, string } from "valibot";

export const env = createEnv({
  server: {
    RECIPIENT_EMAIL: pipe(string(), minLength(1), email()),
    SENDER_EMAIL: pipe(string(), minLength(1), email()),
    ELASTIC_EMAIL_API_KEY: pipe(string(), minLength(1)),
    CF_TURNSTILE_SECRET_KEY: pipe(string(), minLength(1)),
  },
  runtimeEnv,
  isServer: !browser,
  emptyStringAsUndefined: true,
});
