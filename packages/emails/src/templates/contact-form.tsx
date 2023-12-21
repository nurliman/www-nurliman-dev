import escape from "lodash-es/escape";
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

const PREVIEW = escape("Email from {{senderName}}");
const TITLE = escape("{{title}}");
const HEADING = escape("Email from {{senderName}} <{{senderEmail}}>");
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
            <Heading
              className="mx-0 my-[30px] p-0 text-4xl font-bold leading-10 text-[#1d1c1d]"
              dangerouslySetInnerHTML={{ __html: TITLE }}
            />
            <Text
              className="mb-[30px] text-xl leading-7"
              dangerouslySetInnerHTML={{ __html: HEADING }}
            />
            <Text
              className="text-sm leading-6 text-black"
              dangerouslySetInnerHTML={{ __html: MESSAGE }}
            />
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
