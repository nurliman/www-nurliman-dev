# Email Templates Package

Pre-built email templates with TypeScript support.

## How it works

1. **Templates**: Create React email templates in `src/templates/`
2. **Build**: Run `bun run build` to generate TypeScript functions
3. **Use**: Import and use the generated functions with full type safety

## Usage Example

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

## Available Templates

- `contact-form` - Contact form email template

## Scripts

- `bun run build` - Generate TypeScript functions from templates
- `bun run dev` - Start development server for template preview
- `bun run export` - Export templates to static HTML files

## Generated Output

Built templates are output to `dist/` with TypeScript functions and type definitions for each template.
