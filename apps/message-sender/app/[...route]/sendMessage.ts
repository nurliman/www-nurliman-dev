import { env } from "@/env.mjs";
import { renderContactForm } from "@nurliman.dev/emails";
import type { EmailSend, EmailTransactionalMessageData } from "elasticemail";
import { ofetch } from "ofetch";

const ELASTIC_EMAIL_API_URL = "https://api.elasticemail.com/v4/emails/transactional";

export type SendEmailArgs = {
  sender: {
    name: string;
    email: string;
  };
  subject: string;
  message: string;
};

export const sendMessage = async ({ sender, subject, message }: SendEmailArgs) => {
  return ofetch<EmailSend>(ELASTIC_EMAIL_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-ElasticEmail-ApiKey": env.ELASTIC_EMAIL_API_KEY,
    },
    body: {
      Recipients: {
        To: [env.RECIPIENT_EMAIL],
      },
      Content: {
        Body: [
          {
            ContentType: "HTML",
            Charset: "utf-8",
            Content: renderContactForm({
              senderEmail: sender.email,
              senderName: sender.name,
              title: subject,
              message,
            }),
          },
        ],
        From: `Webservice nurliman.dev <${env.SENDER_EMAIL}>`,
        ReplyTo: `${sender.name} <${sender.email}>`,
        Subject: subject,
      },
    } satisfies EmailTransactionalMessageData,
    timeout: 10000,
  });
};
