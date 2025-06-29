import type { Handle } from "@sveltejs/kit";

const vercelAnalyticsUrl = "/_vercel/insights";
const tunnelAnalyticsUrl = "/api/v-event";

export const handle: Handle = async ({ event, resolve }) => {
  const { request } = event;
  const url = new URL(request.url);

  // Check if this is a request to our tunnel endpoint
  if (url.pathname.startsWith(tunnelAnalyticsUrl)) {
    // Extract the destination path
    const destination = url.pathname.slice(tunnelAnalyticsUrl.length);

    // Construct the target URL with query parameters
    const targetUrl = new URL(`${vercelAnalyticsUrl}${destination}`, url.origin);
    targetUrl.search = url.search;

    // Forward headers, excluding host and origin to avoid conflicts
    const headers = new Headers();
    for (const [key, value] of request.headers.entries()) {
      if (!["host", "origin"].includes(key.toLowerCase())) {
        headers.set(key, value);
      }
    }

    try {
      // Forward the request with appropriate method and body
      const response = await fetch(targetUrl.toString(), {
        method: request.method,
        headers,
        body:
          request.method !== "GET" && request.method !== "HEAD"
            ? await request.arrayBuffer()
            : undefined,
      });

      // Forward response headers
      const responseHeaders = new Headers();
      for (const [key, value] of response.headers.entries()) {
        responseHeaders.set(key, value);
      }

      // Return the response with the same status and headers
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
      });
    } catch (error) {
      console.error("Error forwarding request", error);
      // Return a generic error response without exposing the tunnel
      return new Response("Service temporarily unavailable", {
        status: 503,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
  }

  // For all other requests, continue with normal processing
  return resolve(event);
};
