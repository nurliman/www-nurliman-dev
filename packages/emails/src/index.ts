import type { ContactFormEmailProps } from "@/templates/contact-form.ts";
import { contactFormHtml } from "@generated/index.ts";
import pupa from "pupa";

/**
 * Renders the contact form email template
 * @param {ContactFormEmailProps} props - The properties for the contact form email template
 * @returns {string} The rendered HTML of the contact form email
 */
export const renderContactFormHtml = (props: ContactFormEmailProps): string =>
  pupa(contactFormHtml, props);
