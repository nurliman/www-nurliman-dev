import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import lodashEscape from "lodash-es/escape";

const PREVIEW = lodashEscape("Email from {{senderName}}");
const TITLE = lodashEscape("{{title}}");
const HEADING = lodashEscape("Email from {{senderName}} <{{senderEmail}}>");
const MESSAGE = "{{message}}";

export type ContactFormEmailProps = {
  senderName: string;
  senderEmail: string;
  title: string;
  message: string;
};

export default function ContactFormEmail() {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>{PREVIEW}</Preview>
        <Body
          className="mx-auto my-0 bg-white"
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
          }}
        >
          <Container className="mx-auto my-0 max-w-2xl">
            {/* @ts-ignore: For some reason, Headings are not recognized as valid JSX elements */}
            <Heading
              className="mx-0 my-[30px] p-0 font-bold text-4xl text-[#1d1c1d] leading-10"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: html is already escaped by `pupa`
              dangerouslySetInnerHTML={{ __html: TITLE }}
            />
            <Text
              className="mb-[30px] text-xl leading-7"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: html is already escaped by `pupa`
              dangerouslySetInnerHTML={{ __html: HEADING }}
            />
            <Text
              className="text-black text-sm leading-6"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: html is already escaped by `pupa`
              dangerouslySetInnerHTML={{ __html: MESSAGE }}
            />
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
