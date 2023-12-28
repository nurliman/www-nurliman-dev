import * as Sentry from "@sentry/nextjs";
import { CaptureConsole } from "@sentry/integrations";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: 0.3,
  debug: false,
  beforeSend(event, hint) {
    if (hint.originalException === "Timeout") return null;
    return event;
  },
  integrations: [
    new CaptureConsole({
      levels: ["error"],
    }),
  ],
});
