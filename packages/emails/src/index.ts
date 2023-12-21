import type { ContactFormEmailProps } from "@/templates/contact-form";
import { contactFormHtml } from "@generated/index";
import pupa from "pupa";

export const renderContactFormHtml = (props: ContactFormEmailProps) => {
  return pupa(contactFormHtml, props);
};
