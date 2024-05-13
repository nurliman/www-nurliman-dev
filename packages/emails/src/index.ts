import type { ContactFormEmailProps } from "@/templates/contact-form.ts";
import { contactFormHtml } from "@generated/index.ts";
import pupa from "pupa";

export function renderContactFormHtml(props: ContactFormEmailProps) {
  return pupa(contactFormHtml, props);
}
