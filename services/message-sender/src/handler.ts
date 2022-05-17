type Env = {
  ENVIRONMENT: "production" | "staging";
};

export const handleRequest: ExportedHandlerFetchHandler<Env> = async (request) => {
  return new Response(`request method: ${request.method}`);
};
