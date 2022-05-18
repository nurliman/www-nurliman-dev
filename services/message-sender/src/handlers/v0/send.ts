import { Handler } from "@/types";

const send: Handler = async () => {
  return new Response(JSON.stringify({ name: "send", version: "0.0.1" }));
};

export default send;
