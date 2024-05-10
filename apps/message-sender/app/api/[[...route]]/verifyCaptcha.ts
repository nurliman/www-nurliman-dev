import { env } from "@/env.mjs";
import { ofetch } from "ofetch";

const VERIFY_CAPTCHA_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

class ErrorWithCodes extends Error {
  constructor(
    message: string,
    public codes?: string[],
  ) {
    super(message);
    this.codes = codes;
  }
}

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
    const err = new ErrorWithCodes("Failed to verify captcha", data["error-codes"]);

    throw err;
  }

  return data;
};
