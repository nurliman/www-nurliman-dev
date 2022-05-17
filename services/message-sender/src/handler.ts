type Env = {
  ENVIRONMENT: "production" | "staging";
  SENDGRID_API_KEY?: string;
};

export const handleRequest: ExportedHandlerFetchHandler<Env> = async (request) => {
  return new Response(`request method: ${request.method}`);
};
