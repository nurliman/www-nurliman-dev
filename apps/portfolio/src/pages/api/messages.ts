import type { APIRoute } from "astro";
import { flatten, safeParse } from "valibot";
import { contactFormSchema } from "~/schemas";
import { sendMessage } from "~/utils/sendMessage";

export const POST: APIRoute = async ({ request }) => {
  let body;
  try {
    body = await request.json();
  } catch (e) {
    body = null;
    return new Response(null, {
      status: 400,
      statusText: "Invalid JSON",
    });
  }

  const parseResult = safeParse(contactFormSchema, body);

  if (!parseResult.success) {
    const error = flatten(parseResult.issues);

    return new Response(JSON.stringify({ error }), {
      status: 400,
      statusText: "Request body is invalid",
      headers: { "Content-Type": "application/json" },
    });
  }

  const parsed = parseResult.output;

  try {
    await sendMessage({
      sender: {
        email: parsed.email,
        name: parsed.name,
      },
      message: parsed.message,
      subject: parsed.subject,
    });

    return new Response(JSON.stringify({ message: "Message sent successfully" }), {
      status: 200,
      statusText: "Message sent successfully",
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to send message", error);
    return new Response(JSON.stringify({ error }), {
      status: 500,
      statusText: "Failed to send message",
      headers: { "Content-Type": "application/json" },
    });
  }
};
