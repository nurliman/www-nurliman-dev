export type Env = {
  ENVIRONMENT: "production" | "staging";
  SENDGRID_API_KEY?: string;
};

export type Handler = ExportedHandlerFetchHandler<Env>;
