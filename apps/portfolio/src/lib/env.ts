import { createEnv } from "@t3-oss/env-core";
import { browser } from "$app/environment";
import * as runtimeEnv from "$env/static/public";
import { minLength, pipe, string } from "valibot";

export const env = createEnv({
  clientPrefix: "PUBLIC_",
  client: {
    PUBLIC_CF_TURNSTILE_SITE_KEY: pipe(string(), minLength(1)),
  },
  runtimeEnv,
  isServer: !browser,
  emptyStringAsUndefined: true,
});
