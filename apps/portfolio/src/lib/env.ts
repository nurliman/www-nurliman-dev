import { createEnv } from "@t3-oss/env-core";
import { browser } from "$app/environment";
import * as runtimeEnv from "$env/static/public";
import * as z from "zod/v4-mini";

export const env = createEnv({
  clientPrefix: "PUBLIC_",
  client: {
    PUBLIC_CF_TURNSTILE_SITE_KEY: z.string().check(z.minLength(1)),
  },
  runtimeEnv,
  isServer: !browser,
  emptyStringAsUndefined: true,
});
