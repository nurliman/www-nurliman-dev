# Email Templates Package 📧

A comprehensive email template system built with React Email, providing type-safe, reusable email templates for the portfolio application.

## ✨ Features

- **Type Safety**: Full TypeScript support with generated type definitions
- **React Email**: Modern email development with React components
- **Template System**: Pre-built templates for common use cases
- **Build Process**: Automated TypeScript function generation
- **Preview System**: Development server for template testing
- **Export Capability**: Static HTML export for external use

## 🛠️ Tech Stack

- **Framework**: [React Email](https://react.email/) for email development
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety
- **Build Tool**: Custom builder for template processing
- **Styling**: CSS-in-JS with email-safe styles
- **Testing**: Bun's built-in test runner

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.2.20 or higher)
- [Node.js](https://nodejs.org/) (v18 or higher)

### Development

1. **From root directory**

   ```bash
   bun run dev
   ```

2. **From package directory**

   ```bash
   cd packages/emails
   bun run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000` for template preview

## 📁 Project Structure

```
src/
├── builder/              # Template building and processing
│   ├── builder.ts       # Main builder logic
│   ├── templateGenerator.ts  # Template generation
│   ├── templateProcessor.ts  # Template processing
│   ├── extractComponentProps.ts  # Props extraction
│   ├── types.ts         # Type definitions
│   └── utils.ts         # Utility functions
├── templates/            # Email template definitions
│   └── contact-form.tsx # Contact form email template
└── cli.ts               # Command-line interface
```

## 📧 Available Templates

### Contact Form Email (`contact-form`)

A professional email template for contact form submissions with:

- **Sender Information**: Name, email, and subject
- **Message Content**: Formatted message body
- **Professional Layout**: Clean, responsive design
- **Branding**: Consistent with portfolio design

#### Usage Example

```typescript
import { renderContactForm, type ContactFormProps } from "./dist/ContactForm.js";

const emailData: ContactFormProps = {
  senderName: "John Doe",
  senderEmail: "john@example.com",
  title: "Project Inquiry",
  message: "Hello! I'd like to discuss a potential project...",
};

const htmlEmail = renderContactForm(emailData);
// Returns fully rendered HTML string ready to send
```

## 🏗️ Building Templates

### Generate TypeScript Functions

```bash
bun run build
```

This command:

1. Processes all templates in `src/templates/`
2. Extracts component props and types
3. Generates TypeScript functions in `dist/`
4. Creates type definitions for each template

### Generated Output

The build process creates:

- **TypeScript Functions**: Ready-to-use render functions
- **Type Definitions**: Full TypeScript interfaces
- **Bundle Files**: Optimized for production use

## 🧪 Development Workflow

### Template Development

1. **Create Template**: Add new `.tsx` files in `src/templates/`
2. **Define Props**: Export a props interface for type safety
3. **Build**: Run `bun run build` to generate functions
4. **Test**: Use `bun run dev` for live preview
5. **Export**: Use `bun run export` for static HTML

### Template Structure

```typescript
// src/templates/example.tsx
import { Html, Head, Body, Container, Text } from '@react-email/components';

export interface ExampleEmailProps {
  recipientName: string;
  message: string;
}

export default function ExampleEmail({ recipientName, message }: ExampleEmailProps) {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Text>Hello {recipientName}!</Text>
          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}
```

## 📱 Template Preview

### Development Server

```bash
bun run dev
```

Features:

- **Live Reload**: Automatic template updates
- **Props Testing**: Interactive prop editing
- **Email Preview**: Real-time email rendering
- **Responsive View**: Mobile and desktop previews

### Export to HTML

```bash
bun run export
```

Exports all templates as static HTML files for:

- External email services
- Testing in email clients
- Documentation purposes
- Backup and version control

## 🔧 Configuration

### Builder Options

The builder can be configured through:

- **Template Processing**: Custom processors for different output formats
- **Type Generation**: Configurable TypeScript generation
- **Build Output**: Customizable output directory and format

### Email Client Compatibility

Templates are built with:

- **Cross-Client Support**: Gmail, Outlook, Apple Mail
- **Responsive Design**: Mobile-friendly layouts
- **Fallback Styling**: Graceful degradation for older clients

## 🚀 Integration

### Portfolio App Integration

This package integrates seamlessly with the portfolio app:

```typescript
// In portfolio app
import { renderContactForm } from "@nurliman.dev/emails";

// Use in API routes
const emailHtml = renderContactForm(formData);
await sendEmail(emailHtml);
```

### External Usage

Templates can be used in any Node.js environment:

```typescript
import { renderContactForm } from "./dist/ContactForm.js";

// Render email HTML
const html = renderContactForm({
  senderName: "User",
  senderEmail: "user@example.com",
  title: "Contact",
  message: "Hello world",
});
```

## 🧪 Testing

### Unit Tests

```bash
bun test
```

Tests cover:

- **Template Rendering**: HTML output validation
- **Props Handling**: Type safety and validation
- **Builder Logic**: Template processing accuracy
- **CLI Functionality**: Command-line interface

### Template Validation

- **HTML Validation**: Ensures valid HTML output
- **Email Compatibility**: Checks email client compatibility
- **Accessibility**: Validates accessibility standards
