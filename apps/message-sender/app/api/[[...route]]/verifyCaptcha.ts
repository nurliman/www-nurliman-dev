import { ofetch } from "ofetch";
import { env } from "@/env.mjs";

const VERIFY_CAPTCHA_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export const verifyCaptcha = async (token: string) => {
  const formData = new FormData();
  formData.append("secret", env.CF_TURNSTILE_SECRET_KEY);
  formData.append("response", token);

  const data = await ofetch(VERIFY_CAPTCHA_URL, {
    method: "POST",
    body: formData,
  });

  if (!data.success) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const err: any = new Error("Failed to verify captcha");
    err.codes = data["error-codes"];

    throw err;
  }

  return data;
};
