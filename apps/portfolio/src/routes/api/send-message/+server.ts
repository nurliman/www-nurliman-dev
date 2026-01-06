import { json, type RequestHandler } from "@sveltejs/kit";
import { contactFormSchema } from "$lib/schemas";
import * as z4 from "zod/v4/core";
import { sendMessage } from "./sendMessage";
import { verifyCaptcha } from "./verifyCaptcha";

export const POST: RequestHandler = async ({ request }) => {
  let data: unknown;
  try {
    data = await request.json();
  } catch (error) {
    console.error("Failed to parse JSON", error);
    data = null;
    return json({ message: "Invalid JSON" }, { status: 400 });
  }

  const parseResult = z4.safeParse(contactFormSchema, data);

  if (!parseResult.success) {
    const error = z4.treeifyError(parseResult.error);
    return json({ error, message: "Request body is invalid" }, { status: 400 });
  }

  const safeData = parseResult.data;

  try {
    await verifyCaptcha(safeData.captchaToken);
  } catch (error) {
    console.error("Failed to verify captcha", error);
    return json({ error, message: "Failed to verify captcha" }, { status: 400 });
  }

  try {
    await sendMessage({
      sender: {
        email: safeData.email,
        name: safeData.name,
      },
      message: safeData.message,
      subject: safeData.subject,
    });

    return json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Failed to send message", error);
    return json({ error, message: "Failed to send message" }, { status: 500 });
  }
};
