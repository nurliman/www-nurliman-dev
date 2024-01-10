import { createEnv } from "@nurliman.dev/env";
import { string as vString, url as vUrl } from "valibot";

export const env = createEnv({
  server: {},
  clientPrefix: "PUBLIC_",
  client: {
    PUBLIC_MESSAGE_SENDER_SERVICE_HOST: vString([vUrl()]),
  },
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
});
