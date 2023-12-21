import { flatten, parseAsync } from "valibot";
import { contactFormSchema } from "~/schemas";
import { sendMessage } from "~/utils/sendMessage";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const parsed = await parseAsync(contactFormSchema, body).catch((error) => {
    error = flatten(error);
    throw createError({
      statusCode: 400,
      statusMessage: "Request body is invalid",
      data: { error },
    });
  });

  await sendMessage({
    sender: {
      email: parsed.email,
      name: parsed.name,
    },
    message: parsed.message,
    subject: parsed.subject,
  }).catch((error) => {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send message",
      data: { error },
    });
  });

  return {
    message: "Message sent successfully",
  };
});
