type Env = Record<string, never>;

export const handleRequest: ExportedHandlerFetchHandler<Env> = async (request) => {
  return new Response(`request method: ${request.method}`);
};
