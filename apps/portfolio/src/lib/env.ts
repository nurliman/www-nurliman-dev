import { createEnv } from "@t3-oss/env-core";
import * as runtimeEnv from "$env/static/public";
import { minLength, pipe, string, url } from "valibot";

export const env = createEnv({
  server: {},
  clientPrefix: "PUBLIC_",
  client: {
    PUBLIC_MESSAGE_SENDER_SERVICE_HOST: pipe(string(), url()),
    PUBLIC_CF_TURNSTILE_SITE_KEY: pipe(string(), minLength(1)),
  },
  runtimeEnv,
  emptyStringAsUndefined: true,
});
