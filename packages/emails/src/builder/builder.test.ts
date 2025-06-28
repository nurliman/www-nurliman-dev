import fs from "node:fs/promises";
import path from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { EmailTemplateBuilder } from "./builder";

type TestEmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

describe("Generated Code Tests", () => {
  let tempDir: string;
  let tempTemplateDir: string;
  let generatedFilePath: string;

  beforeAll(async () => {
    // Ensure .tmp directory exists
    const tmpBaseDir = path.join(process.cwd(), ".tmp");
    await fs.mkdir(tmpBaseDir, { recursive: true });

    // Create temporary directories for our test
    tempDir = await fs.mkdtemp(path.join(tmpBaseDir, "email-builder-test-"));
    tempTemplateDir = path.join(tempDir, "templates");
    await fs.mkdir(tempTemplateDir, { recursive: true });

    // Create a mock template file
    const mockTemplate = `
      import {
        Body,
        Container,
        Head,
        Heading,
        Html,
        Preview,
        Section,
        Text,
      } from "@react-email/components";

      export type TestEmailProps = {
        name: string;
        email: string;
        subject: string;
        message: string;
      };

      const TestEmail = ({
        name = "{{name}}",
        email = "{{email}}",
        subject = "{{subject}}",
        message = "{{message}}",
      }: TestEmailProps) => {
        return (
          <Html>
            <Head />
            <Preview>Email from {name}</Preview>
            <Body className="bg-white font-sans">
              <Container className="mx-auto my-[40px] max-w-[600px]">
                <Section className="p-[20px]">
                  <Heading className="text-[24px] font-bold text-[#333]">
                    {subject}
                  </Heading>
                  <Text className="text-[16px] text-[#333]">
                    From: {name} &lt;{email}&gt;
                  </Text>
                  <Text className="text-[16px] text-[#333]">
                    {message}
                  </Text>
                  <Text className="text-[12px] text-[#888]">
                    This is a test email template
                  </Text>
                </Section>
              </Container>
            </Body>
          </Html>
        );
      };

      export default TestEmail;
      `;

    const templatePath = path.join(tempTemplateDir, "test-email.tsx");
    await fs.writeFile(templatePath, mockTemplate);

    // Set up the builder to use our mock template
    const builder = new EmailTemplateBuilder({
      templatesGlob: templatePath,
      outputDir: path.join(tempDir, "output"),
      verbose: false,
    });

    // Build the template
    const results = await builder.build();
    expect(results).toHaveLength(1);
    expect(results[0]?.success).toBe(true);

    generatedFilePath = results[0]?.outputPath ?? "";
  });

  afterAll(async () => {
    // Clean up temporary directory
    try {
      await fs.rm(tempDir, { recursive: true, force: true });
    } catch (error) {
      // Ignore cleanup errors
    }
  });

  describe("Generated File Structure", () => {
    it("should generate a TypeScript file", async () => {
      const exists = await fs
        .access(generatedFilePath)
        .then(() => true)
        .catch(() => false);
      expect(exists).toBe(true);
      expect(generatedFilePath.endsWith(".ts")).toBe(true);
    });

    it("should contain expected exports", async () => {
      const content = await fs.readFile(generatedFilePath, "utf-8");

      // Check for type export
      expect(content).toMatch(/export type TestEmailProps/);

      // Check for render function export
      expect(content).toMatch(/export const renderTestEmail/);

      // Check for required imports
      expect(content).toMatch(/import unescape from "lodash\.unescape"/);
      expect(content).toMatch(/import pupa from "pupa"/);
    });

    it("should define correct prop types", async () => {
      const content = await fs.readFile(generatedFilePath, "utf-8");

      // Check for all expected props
      expect(content).toMatch(/name.*: string/);
      expect(content).toMatch(/email.*: string/);
      expect(content).toMatch(/subject.*: string/);
      expect(content).toMatch(/message.*: string/);
    });
  });

  describe("Generated Code Functionality", () => {
    let renderFunction: (props: TestEmailProps) => string;
    let generatedModule: any;

    beforeAll(async () => {
      try {
        // Dynamically import the generated module
        generatedModule = await import(generatedFilePath);
        renderFunction = generatedModule.renderTestEmail;
      } catch (error) {
        console.error("Failed to import generated module:", error);
        console.error("Generated file path:", generatedFilePath);

        // Try to read the file content for debugging
        try {
          const content = await fs.readFile(generatedFilePath, "utf-8");
          console.error("Generated file content:", content);
        } catch (readError) {
          console.error("Could not read generated file:", readError);
        }
        throw error;
      }
    });

    it("should export a render function", () => {
      expect(renderFunction).toBeDefined();
      expect(typeof renderFunction).toBe("function");
    });

    it("should render HTML with provided props", () => {
      const testProps: TestEmailProps = {
        name: "John Doe",
        email: "john@example.com",
        subject: "Test Email",
        message: "This is a test message",
      };

      const result = renderFunction(testProps);

      expect(typeof result).toBe("string");
      expect(result.length).toBeGreaterThan(0);

      // Check that props are substituted in the HTML
      expect(result).toContain("John Doe");
      expect(result).toContain("john@example.com");
      expect(result).toContain("Test Email");
      expect(result).toContain("This is a test message");
    });

    it("should handle HTML entities correctly", () => {
      const testProps: TestEmailProps = {
        name: "John & Jane",
        email: "test@example.com",
        subject: "Title with <script>alert('xss')</script>",
        message: "Message with \"quotes\" and 'apostrophes'",
      };

      const result = renderFunction(testProps);

      // The content should be properly escaped/unescaped
      expect(result).toContain("John &amp; Jane");
      expect(result).toContain("&lt;script&gt;");
      expect(result).toContain("&quot;quotes&quot;");
    });

    it("should handle empty string props", () => {
      const testProps: TestEmailProps = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };

      const result = renderFunction(testProps);
      expect(typeof result).toBe("string");
      expect(result.length).toBeGreaterThan(0);

      // Should still contain the HTML structure
      expect(result).toMatch(/<html/i);
      expect(result).toMatch(/<body/i);
    });

    it("should handle special characters in props", () => {
      const testProps: TestEmailProps = {
        name: "José María",
        email: "josé@café.com",
        subject: "Título con acentos",
        message: "Mensaje con ñ, ü, y otros caracteres especiales: €, £, ¥",
      };

      const result = renderFunction(testProps);

      expect(result).toContain("José María");
      expect(result).toContain("josé@café.com");
      expect(result).toContain("Título con acentos");
      expect(result).toContain("€, £, ¥");
    });

    it("should handle long content", () => {
      const longMessage = "Lorem ipsum ".repeat(100);
      const testProps: TestEmailProps = {
        name: "Test User",
        email: "test@example.com",
        subject: "Long Content Test",
        message: longMessage,
      };

      const result = renderFunction(testProps);
      expect(result).toContain(longMessage);
    });

    it("should maintain HTML structure integrity", () => {
      const testProps: TestEmailProps = {
        name: "Test User",
        email: "test@example.com",
        subject: "Structure Test",
        message: "Testing HTML structure",
      };

      const result = renderFunction(testProps);

      // Check for essential HTML structure
      expect(result).toMatch(/<html[^>]*>/i);
      expect(result).toMatch(/<head[^>]*>/i);
      expect(result).toMatch(/<body[^>]*>/i);
      expect(result).toMatch(/<\/html>/i);
      expect(result).toMatch(/<\/head>/i);
      expect(result).toMatch(/<\/body>/i);

      // Check for email-specific elements
      expect(result).toMatch(/This is a test email template/i);
    });

    it("should handle multiline messages correctly", () => {
      const multilineMessage = `
        First line
        Second line
        Third line

        Paragraph after empty line
      `;

      const testProps: TestEmailProps = {
        name: "Test User",
        email: "test@example.com",
        subject: "Multiline Test",
        message: multilineMessage,
      };

      const result = renderFunction(testProps);
      expect(result).toContain(multilineMessage);
    });
  });

  describe("Template Placeholder System", () => {
    let renderFunction: (props: TestEmailProps) => string;

    beforeAll(async () => {
      const generatedModule = await import(generatedFilePath);
      renderFunction = generatedModule.renderTestEmail;
    });

    it("should not leave any unreplaced placeholders", () => {
      const testProps: TestEmailProps = {
        name: "John Doe",
        email: "john@example.com",
        subject: "Complete Props Test",
        message: "All props provided",
      };

      const result = renderFunction(testProps);

      // Should not contain any unreplaced {{}} placeholders
      expect(result).not.toMatch(/\{\{[^}]+\}\}/);
    });

    it("should handle props with similar names correctly", () => {
      const testProps: TestEmailProps = {
        name: "Name Value",
        email: "email@example.com",
        subject: "Subject Value",
        message: "Message Value",
      };

      const result = renderFunction(testProps);

      expect(result).toContain("Name Value");
      expect(result).toContain("email@example.com");
      expect(result).toContain("Subject Value");
      expect(result).toContain("Message Value");
    });
  });

  describe("Error Handling", () => {
    let renderFunction: (props: TestEmailProps) => string;

    beforeAll(async () => {
      const generatedModule = await import(generatedFilePath);
      renderFunction = generatedModule.renderTestEmail;
    });

    it("should handle undefined props gracefully", () => {
      // @ts-expect-error - intentionally testing undefined props
      const result = renderFunction(undefined);

      expect(typeof result).toBe("string");
      // Should still render basic structure
      expect(result).toMatch(/<html/i);
    });

    it("should handle partial props", () => {
      const partialProps = {
        name: "John Doe",
        email: "john@example.com",
        // Missing subject and message
      } as TestEmailProps;

      const result = renderFunction(partialProps);

      expect(typeof result).toBe("string");
      expect(result).toContain("John Doe");
      expect(result).toContain("john@example.com");
    });
  });
});

describe("Builder with Different Template Scenarios", () => {
  let tempDir: string;
  let tempTemplateDir: string;

  beforeAll(async () => {
    // Ensure .tmp directory exists
    const tmpBaseDir = path.join(process.cwd(), ".tmp");
    await fs.mkdir(tmpBaseDir, { recursive: true });

    tempDir = await fs.mkdtemp(path.join(tmpBaseDir, "email-builder-scenarios-"));
    tempTemplateDir = path.join(tempDir, "templates");
    await fs.mkdir(tempTemplateDir, { recursive: true });
  });

  afterAll(async () => {
    try {
      await fs.rm(tempDir, { recursive: true, force: true });
    } catch (error) {
      // Ignore cleanup errors
    }
  });

  it("should handle template with no props", async () => {
    const simpleTemplate = `
      import { Html, Body, Text } from "@react-email/components";

      const SimpleEmail = () => {
        return (
          <Html>
            <Body>
              <Text>Simple email with no props</Text>
            </Body>
          </Html>
        );
      };

      export default SimpleEmail;
      `;

    const templatePath = path.join(tempTemplateDir, "simple.tsx");
    await fs.writeFile(templatePath, simpleTemplate);

    const builder = new EmailTemplateBuilder({
      templatesGlob: templatePath,
      outputDir: path.join(tempDir, "simple-output"),
      verbose: false,
    });

    const results = await builder.build();

    expect(results).toHaveLength(1);
    expect(results[0]?.success).toBe(true);

    const generatedContent = await fs.readFile(results[0]?.outputPath ?? "", "utf-8");
    expect(generatedContent).toContain("export type SimpleProps = {};");
    expect(generatedContent).toContain("renderSimple = (props: SimpleProps)");
  });

  it("should handle template with optional props", async () => {
    const templateWithOptional = `
      import { Html, Body, Text } from "@react-email/components";

      type Props = {
        name: string;
        message?: string;
      };

      const OptionalPropsEmail = ({ name = "{{name}}", message }: Props) => {
        return (
          <Html>
            <Body>
              <Text>Hello {name}</Text>
              {message && <Text>{message}</Text>}
            </Body>
          </Html>
        );
      };

      export default OptionalPropsEmail;
      `;

    const templatePath = path.join(tempTemplateDir, "optional-props.tsx");
    await fs.writeFile(templatePath, templateWithOptional);

    const builder = new EmailTemplateBuilder({
      templatesGlob: templatePath,
      outputDir: path.join(tempDir, "optional-output"),
      verbose: false,
    });

    const results = await builder.build();

    expect(results).toHaveLength(1);
    expect(results[0]?.success).toBe(true);

    const generatedContent = await fs.readFile(results[0]?.outputPath ?? "", "utf-8");
    expect(generatedContent).toContain("name: string;");
    expect(generatedContent).toContain("message?: string;");
  });

  it("should handle malformed template gracefully", async () => {
    const malformedTemplate = `
      // This is not a valid React component
      const broken = "not a component";
      export default broken;
    `;

    const templatePath = path.join(tempTemplateDir, "malformed.tsx");
    await fs.writeFile(templatePath, malformedTemplate);

    const builder = new EmailTemplateBuilder({
      templatesGlob: templatePath,
      outputDir: path.join(tempDir, "malformed-output"),
      verbose: false,
    });

    const results = await builder.build();

    expect(results).toHaveLength(1);
    expect(results[0]?.success).toBe(false);
    expect(results[0]?.error).toBeDefined();
  });
});
