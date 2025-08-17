export type Skill = {
  name: string;
  value: number;
};

export const technicalSkills: Skill[] = [
  // DevOps & Infrastructure
  { name: "Docker", value: 0.95 },
  { name: "Kubernetes", value: 0.88 },
  { name: "Linux", value: 0.9 },
  { name: "GitHub Actions", value: 0.9 },
  { name: "Google Cloud Platform", value: 0.9 },
  { name: "Nginx", value: 0.9 },

  // Core Programming & Fullstack
  { name: "JavaScript/TypeScript", value: 0.99 },
  { name: "Node.js", value: 0.98 },
  { name: "React", value: 0.99 },
  { name: "Next.js", value: 0.99 },
  { name: "Go", value: 0.9 },
  { name: "Rust", value: 0.85 },

  // APIs & Databases
  { name: "GraphQL", value: 0.93 },
  { name: "tRPC", value: 0.94 },
  { name: "SQLite", value: 0.88 },
  { name: "DrizzleORM", value: 0.9 },

  // Version Control & Development Tools
  { name: "Git/GitHub", value: 0.95 },
  { name: "Playwright", value: 0.89 },
  { name: "Vitest", value: 0.87 },

  // Mobile & Desktop
  { name: "React Native", value: 0.98 },
  { name: "Electron", value: 0.92 },
  { name: "Expo", value: 0.95 },
] as const;

export const otherSkills: Skill[] = [
  // DevOps & Monitoring
  { name: "CI/CD", value: 0.9 },
  { name: "Sentry", value: 0.83 },
  { name: "Turbo", value: 0.88 },
  { name: "Computer Networking", value: 0.8 },

  // Frontend Ecosystem
  { name: "TanStack Query", value: 0.91 },
  { name: "Svelte/SvelteKit", value: 0.92 },
  { name: "Astro", value: 0.95 },
  { name: "Solid.js", value: 0.95 },

  // Design & UI
  { name: "Figma", value: 0.95 },
  { name: "shadcn/ui", value: 0.89 },
  { name: "Radix UI", value: 0.88 },
  { name: "Adobe Illustrator", value: 0.93 },
] as const;
