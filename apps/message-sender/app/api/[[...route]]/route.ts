import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { handle } from "@hono/hono/vercel";
import { contactFormSchema } from "@nurliman.dev/schemas";
import { flatten, safeParse } from "@valibot/valibot";
import { sendMessage } from "./sendMessage.ts";
import { verifyCaptcha } from "./verifyCaptcha.ts";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const app = new Hono().basePath("/api");

app.use("/*", cors());
app.post("/messages", async (c) => {
  let body: unknown;
  try {
    body = await c.req.json();
  } catch (e) {
    body = null;
    return c.json({ message: "Invalid JSON" }, 400);
  }

  const parseResult = safeParse(contactFormSchema, body);

  if (!parseResult.success) {
    const error = flatten(parseResult.issues);
    return c.json({ error, message: "Request body is invalid" }, 400);
  }

  const parsed = parseResult.output;

  try {
    await verifyCaptcha(parsed.captchaToken);
  } catch (error) {
    console.error("Failed to verify captcha", error);
    return c.json({ error, message: "Failed to verify captcha" }, 400);
  }

  try {
    await sendMessage({
      sender: {
        email: parsed.email,
        name: parsed.name,
      },
      message: parsed.message,
      subject: parsed.subject,
    });

    return c.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Failed to send message", error);
    return c.json({ error, message: "Failed to send message" }, 500);
  }
});

export const OPTIONS = handle(app);
export const HEAD = handle(app);
export const GET = handle(app);
export const POST = handle(app);
