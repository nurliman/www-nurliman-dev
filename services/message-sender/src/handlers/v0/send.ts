import { Handler } from "@/types";

const send: Handler = async (request, env) => {
  const url = new URL(request.url);
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    if (!env.SENDGRID_API_KEY) {
      console.error("Error: Please provide env.SENDGRID_API_KEY");

      const body = JSON.stringify({
        timestamp: new Date(),
        status: 500,
        error: "Internal Server Error",
        message: "Some environment variables is not provided.",
        path: url.pathname,
      });

      return new Response(body, { status: 500, headers });
    }

    const body = JSON.stringify({ name: "send", version: "0.0.1" });
    return new Response(body, { headers });
  } catch (error: any) {
    console.error(error);

    const body = JSON.stringify({
      timestamp: new Date(),
      status: 500,
      error: "Internal Server Error",
      message: error?.message || "No message available",
      path: url.pathname,
    });

    return new Response(body, { status: 500, headers });
  }
};

export default send;
