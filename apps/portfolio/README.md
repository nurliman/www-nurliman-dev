# Portfolio App 🎨

The main portfolio website built with SvelteKit, featuring a modern neobrutalism design system and full-stack capabilities.

## ✨ Features

- **Modern Design**: Neobrutalism UI with custom components
- **Responsive Layout**: Mobile-first design with Tailwind CSS
- **Dark/Light Theme**: Automatic theme switching with system preference detection
- **Contact Form**: Integrated contact form with email templates and reCAPTCHA
- **Portfolio Showcase**: Dynamic project display with filtering
- **Blog System**: Markdown-based blog with syntax highlighting (not yet implemented)
- **Resume Section**: Interactive timeline and skills display
- **Performance**: Optimized with Vite, SvelteKit, and modern web standards

## 🛠️ Tech Stack

### Frontend

- **Framework**: [SvelteKit](https://kit.svelte.dev/) with Svelte 5
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **UI Components**: Custom neobrutalism design system
- **Icons**: [Lucide](https://lucide.dev/) icons
- **Fonts**: Custom Transducer font family

### Backend & API

- **Runtime**: Edge Functions and serverless deployment
- **Email Service**: [Elastic Email](https://elasticemail.com/) integration
- **Form Handling**: [Superforms](https://superforms.rocks/) with Zod validation
- **Captcha**: [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/)

### Development Tools

- **Build Tool**: [SvelteKit](https://kit.svelte.dev/) with Vite
- **Type Checking**: [Svelte Check](https://github.com/sveltejs/language-tools/tree/main/packages/svelte-check)
- **Linting**: [ESLint](https://eslint.org/) with Svelte support
- **Formatting**: [Prettier](https://prettier.io/) with Tailwind CSS sorting

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.2.20 or higher)
- [Node.js](https://nodejs.org/) (v18 or higher)

### Development

1. **From root directory**

   ```bash
   bun run dev
   ```

2. **From app directory**

   ```bash
   cd apps/portfolio
   bun run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
bun run build
bun run preview
```

## 📁 Project Structure

```
src/
├── app.css              # Global styles and Tailwind imports
├── app.html             # HTML template
├── lib/
│   ├── components/      # Reusable UI components
│   │   ├── ui/         # Shadcn-style UI components
│   │   └── ...         # Custom components
│   ├── data/           # Static data and content
│   ├── hooks/          # Svelte hooks and utilities
│   ├── styles/         # Font definitions and global styles
│   └── utils/          # Utility functions
├── routes/              # SvelteKit file-based routing
│   ├── about-me/       # About page
│   ├── api/            # API endpoints
│   ├── blog/           # Blog section
│   ├── contact/        # Contact form
│   ├── portfolio/      # Portfolio showcase
│   └── resume/         # Resume and skills
└── static/              # Static assets and fonts
```

## 🎨 Component System

### UI Components

- **Neobrutalism Design**: Custom button, input, and badge components
- **Shadcn Integration**: Consistent form and card components
- **Responsive Layout**: Header, sidebar, and footer components
- **Theme System**: Dark/light mode switcher with system preference detection

## 📧 Contact Form Integration

The contact form integrates with the email templates package:

- **Form Validation**: Zod schema validation with Superforms
- **Email Templates**: Uses `@nurliman.dev/emails` package
- **Captcha Protection**: Cloudflare Turnstile integration
- **API Endpoint**: `/api/send-message` with proper error handling

## 🌐 Environment Configuration

Create a `.env` file in the app directory:

```env
# Email Service
ELASTIC_EMAIL_API_KEY=your_api_key
ELASTIC_EMAIL_FROM_EMAIL=your_email@domain.com

# Captcha
TURNSTILE_SECRET_KEY=your_secret_key
TURNSTILE_SITE_KEY=your_site_key

# Analytics (optional)
VERCEL_ANALYTICS_ID=your_analytics_id
```

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Tailwind CSS responsive utilities
- **Touch Friendly**: Optimized for touch interactions
- **Performance**: Optimized images and lazy loading

## 🧪 Development Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run check` - Type check with Svelte
- `bun run check:watch` - Watch mode type checking
- `bun run format` - Format code with Prettier
- `bun run lint` - Lint code with ESLint

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ performance
- **Core Web Vitals**: Optimized LCP, FID, and CLS
- **Bundle Size**: Tree-shaking and code splitting
- **Image Optimization**: WebP format with fallbacks
