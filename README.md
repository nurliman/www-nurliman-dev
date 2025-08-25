# nurliman.dev 🚀

A modern, monorepo-based personal website and portfolio built with cutting-edge web technologies.

## 🏗️ Project Structure

This is a monorepo managed with [Turbo](https://turbo.build/) and [Bun](https://bun.sh/), containing:

- **`apps/portfolio/`** - Main SvelteKit portfolio website
- **`packages/data/`** - Shared data package for portfolio information, skills, projects, and more
- **`packages/emails/`** - Reusable email templates package

## 🛠️ Tech Stack

### Core Technologies

- **Framework**: [SvelteKit](https://kit.svelte.dev/) with Svelte 5
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [Bun](https://bun.sh/)
- **Monorepo**: [Turbo](https://turbo.build/)

### Key Features

- **Modern UI**: Neobrutalism design system with custom components
- **Performance**: Optimized with Vite and SvelteKit
- **Responsive**: Mobile-first design with Tailwind CSS
- **Type Safety**: Full TypeScript support across the stack
- **Data Sharing**: Centralized data package for cross-app consistency
- **Email Integration**: Custom email templates for contact forms

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.2.20 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/www-nurliman-dev.git
   cd www-nurliman-dev
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Start development servers**
   ```bash
   bun run dev
   ```

This will start all apps and packages in development mode simultaneously.

## 📁 Available Scripts

### Root Level

- `bun run dev` - Start all development servers in parallel
- `bun run build` - Build all apps and packages
- `bun run format` - Format all code with Prettier
- `bun run lint-staged` - Run linting on staged files

### Portfolio App (`apps/portfolio/`)

- `bun run dev` - Start SvelteKit development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run check` - Type check with Svelte
- `bun run format` - Format code
- `bun run lint` - Lint code

### Email Package (`packages/emails/`)

- `bun run build` - Generate TypeScript functions from templates
- `bun run dev` - Start development server for template preview
- `bun run export` - Export templates to static HTML

## 🏃‍♂️ Development Workflow

1. **Development**: Use `bun run dev` to start all services
2. **Building**: Use `bun run build` to build all packages
3. **Formatting**: Code is automatically formatted on commit via lint-staged
4. **Type Checking**: Run `bun run check` in the portfolio app for Svelte type checking

## 📦 Package Management

This monorepo uses Bun workspaces for efficient package management:

- **Workspace dependencies**: Use `workspace:*` in package.json
- **Cross-package imports**: Import from other packages directly
- **Shared tooling**: Common ESLint, Prettier, and TypeScript configs
