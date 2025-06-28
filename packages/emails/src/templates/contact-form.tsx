import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export type ContactFormEmailProps = {
  senderName: string;
  senderEmail: string;
  title: string;
  message: string;
};

const ContactFormEmail = ({
  senderName = "{{senderName}}",
  senderEmail = "{{senderEmail}}",
  title = "{{title}}",
  message = "{{message}}",
}: ContactFormEmailProps) => {
  const previewText = `Email from ${senderName}`;

  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Body className="mx-auto my-auto bg-[#f6f9fc] font-sans">
          <Container className="mx-auto my-[40px] max-w-[600px] rounded-lg border border-[#e6ebf1] bg-white shadow-lg">
            <Section className="p-[48px]">
              {/* Header Section */}
              <Text className="mb-4 text-center text-[11px] font-bold tracking-wide text-[#0a85ea] uppercase">
                Contact Form Message
              </Text>

              {/* Title */}
              <Heading className="mt-0 mb-6 text-center text-[28px] leading-[32px] font-bold text-[#333]">
                {title}
              </Heading>

              <Hr className="my-6 border-[#e6ebf1]" />

              {/* Sender Information */}
              <Section className="mb-6 rounded-lg bg-[#f8f9fa] p-6">
                <Text className="mb-2 text-[14px] font-semibold tracking-wide text-[#525f7f] uppercase">
                  From
                </Text>
                <Text className="m-0 text-[16px] leading-[24px] font-medium text-[#333]">
                  {senderName} &lt;{senderEmail}&gt;
                </Text>
              </Section>

              {/* Message Content */}
              <Section>
                <Text className="mb-4 text-[14px] font-semibold tracking-wide text-[#525f7f] uppercase">
                  Message
                </Text>
                <Section className="rounded-lg border border-[#e6ebf1] bg-[#ffffff] p-6">
                  <Text className="m-0 text-[16px] leading-[24px] text-[#333]">{message}</Text>
                </Section>
              </Section>

              <Hr className="my-8 border-[#e6ebf1]" />

              {/* Footer */}
              <Text className="text-center text-[12px] leading-[16px] text-[#8898aa]">
                This message was sent from your website's contact form.
                <br />
                Please reply directly to the sender's email address.
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

ContactFormEmail.PreviewProps = {
  senderName: "John Doe",
  senderEmail: "john.doe@example.com",
  title: "Project Inquiry",
  message:
    "Hi there!\n\nI'm interested in discussing a potential web development project with you. I have a startup idea that needs a modern, responsive website with e-commerce functionality.\n\nCould we schedule a call to discuss the details and timeline?\n\nBest regards,\nJohn",
} satisfies ContactFormEmailProps;

export default ContactFormEmail;
