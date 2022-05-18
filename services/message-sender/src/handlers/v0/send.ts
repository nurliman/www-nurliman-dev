import { Handler } from "@/types";

const send: Handler = async (request, env) => {
  const url = new URL(request.url);

  if (!env.SENDGRID_API_KEY) {
    console.error("Error: Please provide env.SENDGRID_API_KEY");

    const body = JSON.stringify({
      timestamp: new Date(),
      status: 500,
      error: "Internal Server Error",
      message: "No message available",
      path: url.pathname,
    });

    return new Response(body, { status: 500 });
  }

  return new Response(JSON.stringify({ name: "send", version: "0.0.1" }));
};

export default send;
