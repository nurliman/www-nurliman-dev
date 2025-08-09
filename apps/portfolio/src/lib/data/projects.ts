import dedent from "dedent";

export type ProjectStatus = "completed" | "in-progress" | "concept";

export type ProjectCategory =
  | "Web Development"
  | "Mobile Development"
  | "Desktop Application"
  | "Enterprise Software";

export type ProjectMetric = {
  label: string;
  value: string;
  iconName:
    | "users"
    | "zap"
    | "trending-up"
    | "star"
    | "database"
    | "timer"
    | "gauge"
    | "printer"
    | "refresh-ccw"
    | "hammer"
    | "check-circle-2"
    | "package"
    | "server"
    | "activity"
    | "shopping-cart"
    | "rocket"
    | "search-check"
    | "smartphone"
    | "crosshair"
    | "battery-full"
    | "bar-chart-3"
    | "alert-triangle";
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  screenshotUrls: string[];
  category: ProjectCategory;
  technologies: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  status: ProjectStatus;
  completionYear: number;
  performanceMetrics: ProjectMetric[];
  keyFeatures: string[];
};

export const projects: Project[] = [
  {
    id: "pelitatex-mobile",
    title: "Pelitatex Mobile - Enterprise Warehouse Management System",
    summary: dedent`
      Enterprise warehouse management system with mobile-first design, thermal printing integration,
      and real-time synchronization for textile operations.
    `,
    description: dedent`
      Architected and developed a comprehensive warehouse management solution that revolutionized
      textile industry operations through mobile-first design and advanced automation.
      <br /><br />
      Led full development of a monorepo with React Native mobile app, Next.js web application,
      thermal printer service, and data synchronization service. Implemented sophisticated multi-stage
      receiving workflow with role-based access control for warehouse, accounting, and management teams.
      <br /><br />
      Key technical achievements include real-time thermal printing with USB device management,
      bidirectional data synchronization with external GraphQL APIs, offline-first mobile architecture,
      and comprehensive audit trail tracking. Built with TypeScript, Drizzle ORM, tRPC, and Turbo
      monorepo architecture for optimal performance and maintainability.
    `,
    screenshotUrls: [],
    category: "Mobile Development",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Next.js",
      "tRPC",
      "Drizzle ORM",
      "SQLite/LibSQL",
      "Hono",
      "Jotai",
      "TanStack Query",
      "NativeWind",
      "GraphQL",
      "BullMQ",
      "Puppeteer",
      "Sharp",
      "Turbo",
      "Bun",
      "Docker",
      "Redis/KeyDB",
      "WebUSB API",
      "Thermal Printing",
      "Socket.io",
      "Zod",
      "Tailwind CSS",
    ],
    repositoryUrl: "",
    demoUrl: "",
    status: "completed",
    completionYear: 2025,
    performanceMetrics: [],
    keyFeatures: [
      "Multi-stage receiving workflow with RBAC",
      "Real-time thermal printing with USB management",
      "Bidirectional GraphQL data synchronization",
      "Offline-first mobile architecture",
      "Comprehensive audit trail tracking",
      "Advanced inventory management",
      "Automated label generation",
      "Enterprise-grade security",
    ],
  },

  {
    id: "pelitatex-erp",
    title: "Pelitatex ERP - Enterprise Resource Planning System",
    summary: dedent`
      Modern ERP frontend application built with Next.js 15 and TypeScript,
      delivering comprehensive business management capabilities for textile manufacturing.
    `,
    description: dedent`
      Developed a full-featured Enterprise Resource Planning (ERP) system for PelitaTex,
      a leading textile manufacturing company, using Next.js 15, TypeScript, and modern
      web technologies. The application streamlines business operations across customer
      management, inventory tracking, document workflows, and user administration.
      <br /><br />
      Implemented advanced features including role-based access control with 5 user roles,
      real-time data synchronization via GraphQL, automated document management with
      status tracking, customer relationship management with credit limit monitoring,
      and comprehensive inventory management with SKU handling.
      <br /><br />
      Achieved exceptional performance through Next.js Turbo optimization, comprehensive
      testing with Playwright (E2E) and Vitest (Unit), and integrated monitoring with
      Sentry and PostHog. The system features responsive design, automated code quality
      checks, and Docker containerization for scalable deployment.
    `,
    screenshotUrls: [],
    category: "Enterprise Software",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "React 19",
      "GraphQL",
      "TanStack Query",
      "Radix UI",
      "Tailwind CSS",
      "React Hook Form",
      "Valibot",
      "Playwright",
      "Vitest",
      "Docker",
      "Vercel",
      "Sentry",
      "PostHog",
    ],
    repositoryUrl: "",
    demoUrl: "",
    status: "completed",
    completionYear: 2024,
    performanceMetrics: [],
    keyFeatures: [
      "Role-based access control",
      "Customer management with credit limits",
      "Inventory management with SKU tracking",
      "Document workflow automation",
      "Real-time data synchronization",
      "Advanced data tables with filtering",
      "Mobile-responsive design",
      "Comprehensive testing coverage",
    ],
  },

  {
    id: "tamatex-printer",
    title: "Tamatex Printer Manager",
    summary: dedent`
      Enterprise-grade desktop application for managing ESC/POS thermal printers
      with advanced invoice printing capabilities, built for a textile manufacturing company.
    `,
    description: dedent`
      Tamatex Printer Manager is a sophisticated Electron-based desktop application designed to streamline
      thermal printer management and invoice printing operations for Pelitatex, a textile manufacturing company.
      The application handles complex ESC/POS printer communications, supports both USB and network connections,
      and generates professional invoices with QR codes, logos, and detailed item information.
      <br /><br />
      The project demonstrates expertise in cross-platform desktop development, hardware integration,
      and enterprise software architecture. It features a modern React-based UI with TypeScript for type safety,
      comprehensive error handling with Sentry integration, and automatic updates via GitHub releases.
      The application processes real-time sales data and generates formatted thermal printer output with
      precise formatting, barcode generation, and multi-language support.
      <br /><br />
      Key technical achievements include implementing low-level printer communication protocols,
      optimizing bundle size with Preact, establishing type-safe client-server communication with tRPC,
      and creating a robust state management system with Nanostores. The project also showcases modern
      development practices including automated testing, CI/CD pipelines, and comprehensive error monitoring.
    `,
    screenshotUrls: [],
    category: "Desktop Application",
    technologies: [
      "Electron",
      "React",
      "TypeScript",
      "Node.js",
      "ESC/POS",
      "tRPC",
      "Tailwind CSS",
      "Radix UI",
      "Nanostores",
      "Vite",
      "Sentry",
      "Auto-updater",
      "USB/Network Communication",
      "QR Code Generation",
      "Thermal Printing",
    ],
    repositoryUrl: "",
    demoUrl: "",
    status: "completed",
    completionYear: 2024,
    performanceMetrics: [],
    keyFeatures: [
      "ESC/POS thermal printer management",
      "USB and network connectivity",
      "QR code generation",
      "Auto-updates",
      "Cross-platform support",
      "Real-time monitoring",
      "Type-safe architecture",
      "Error tracking",
    ],
  },

  {
    id: "knitto.co.id",
    title: "Knitto.co.id - Enterprise Marketing Website",
    summary: dedent`
      High-performance marketing website serving hundreds of thousands of daily visitors
      with comprehensive e-commerce functionality, advanced SEO optimization, and robust analytics.
    `,
    description: dedent`
      Architected and developed a comprehensive enterprise marketing website that serves as the primary
      digital touchpoint for Knitto's textile business, handling hundreds of thousands of daily visitors
      with exceptional performance and scalability.
      <br /><br />
      Built with Next.js for optimal SEO and performance, featuring Server-Side Rendering (SSR) to achieve
      consistent 90+ performance scores. The website includes multiple pages: home/landing page, about page,
      comprehensive products catalog with search functionality, detailed fabric information with stock tracking,
      shopping cart and checkout system, career page, fabric auction platform, and terms of service.
      <br /><br />
      Key technical achievements include implementing a comprehensive CMS for content management,
      creating a design system with Storybook for consistent UI/UX components, and building robust
      analytics integration to track user interactions and conversions for Google Analytics, Facebook Ads,
      and TikTok Ads campaigns.
      <br /><br />
      Deployed using serverless architecture on Google Cloud Run with Docker containers, ensuring
      high scalability, robustness, and resiliency. Implemented comprehensive CI/CD pipelines with
      GitHub Actions for automated deployments and monitoring with Sentry for error tracking.
    `,
    screenshotUrls: [],
    category: "Web Development",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SCSS",
      "Storybook",
      "Nginx",
      "Apache Solr",
      "Docker",
      "Google Cloud Platform",
      "Google Cloud Run",
      "Google Container Registry",
      "Sentry",
      "GitHub Actions",
    ],
    repositoryUrl: "",
    demoUrl: "https://knitto.co.id",
    status: "completed",
    completionYear: 2022,
    performanceMetrics: [],
    keyFeatures: [
      "SEO-optimized with SSR",
      "Comprehensive CMS",
      "E-commerce functionality",
      "Design system with Storybook",
      "Multi-platform analytics",
      "Serverless architecture",
      "Robust CI/CD pipeline",
    ],
  },

  {
    id: "portal.knitto.co.id",
    title: "Knitto Customer Portal",
    summary: dedent`
      Engineered an exclusive ordering platform that boosted sales efficiency
      for a leading textile company through real-time inventory, streamlined ordering,
      and multi-channel analytics.
    `,
    description: dedent`
      Architected and developed an exclusive portal that modernized the customer ordering journey. I engineered a secure, invitation-only system using magic links delivered via WhatsApp chatbot, enhancing both security and user experience.
      <br /><br />
      Key achievements include:
      - Engineering a real-time inventory system for up-to-the-minute stock visibility, eliminating ordering errors.
      - Integrating the Google Maps API for precise delivery address management, reducing delivery failures.
      - Developing a unique fabric calculator to empower clients to estimate material needs independently.
      - Designing a custom checkout process integrated with the sales workflow via WhatsApp, streamlining order processing.
      - Building a multi-platform analytics engine to track user interactions and measure marketing ROI across Google, Facebook, and TikTok Ads.
      
      I spearheaded the project's technical execution, establishing a robust CI/CD pipeline with GitHub Actions that automated deployments, slashing deployment times to under 1 minute.
    `,
    screenshotUrls: [],
    category: "Web Development",
    technologies: [
      "React",
      "Redux",
      "SCSS",
      "Vite",
      "Nginx",
      "GitHub Actions",
      "WhatsApp API",
      "Google Maps API",
    ],
    repositoryUrl: "",
    demoUrl: "https://portal.knitto.co.id",
    status: "completed",
    completionYear: 2021,
    performanceMetrics: [],
    keyFeatures: [
      "E-commerce Platform",
      "Real-Time Inventory Sync",
      "Multi-Platform Analytics Engine",
      "CI/CD Automation",
      "Google Maps Integration",
      "Magic Link Authentication",
      "Custom Fabric Calculator",
    ],
  },

  {
    id: "getitprinted.com.au",
    title: "Get It Printed - Australian Printing Services Website",
    summary: dedent`
      Full-stack web solution delivering exceptional user experience
      and driving business growth for Australian printing services.
    `,
    description: dedent`
      Architected and delivered a comprehensive digital transformation solution for Get It Printed,
      establishing their online presence and driving measurable business growth.
      Led end-to-end development using the WordPress ecosystem with custom PHP development,
      implementing advanced features including dynamic service catalog with real-time pricing,
      integrated payment processing, automated quote generation, and a comprehensive customer management system.
      Achieved exceptional performance with high SEO scores, mobile optimization, fast load times,
      and reliable uptime.
      Key technical accomplishments include custom theme development, database optimization,
      security hardening with SSL implementation, and responsive design that converts across all devices.
      The solution includes advanced content management capabilities, automated backup systems,
      and analytics integration for business intelligence.
    `,
    screenshotUrls: [],
    category: "Web Development",
    technologies: ["WordPress", "WPBakery", "cPanel", "PHP", "MySQL", "CSS3", "JavaScript"],
    repositoryUrl: "",
    demoUrl: "https://getitprinted.com.au",
    status: "completed",
    completionYear: 2024,
    performanceMetrics: [],
    keyFeatures: [
      "Custom theme development",
      "E-commerce integration",
      "Advanced SEO optimization",
      "Mobile-first responsive design",
      "Security hardening",
      "Performance optimization",
    ],
  },

  {
    id: "grasindo-salesman-tracking-app",
    title: "Grasindo - Enterprise Sales Force Automation Platform",
    summary: dedent`
      End-to-end mobile solution that revolutionized Grasindo's field sales operations
      through intelligent tracking and analytics.
    `,
    description: dedent`
      Architected and developed a comprehensive enterprise-grade Android mobile application that
      transformed Grasindo's sales operations from manual processes to a data-driven,
      automated system.
      <br /><br />
      Led the full development lifecycle using React Native, TypeScript, and Firebase,
      implementing advanced features including real-time GPS tracking with high accuracy,
      intelligent visit scheduling with route optimization, comprehensive CRM integration,
      and predictive analytics dashboards.
      <br /><br />
      The solution delivered significant business impact through improved sales performance,
      enhanced field visit tracking, and optimized battery life for extended field operations.
      Key technical achievements include implementing offline-first architecture with seamless
      Firebase synchronization, real-time push notifications, and robust data security protocols.
      The application was specifically designed and optimized for Android devices to ensure
      maximum compatibility and performance for Grasindo's field sales team.
    `,
    screenshotUrls: [],
    category: "Mobile Development",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Redux",
      "Android SDK",
      "Firebase Cloud Messaging",
      "Firebase Realtime Database",
      "Firebase Authentication",
      "Offline Storage",
      "Push Notifications",
      "AsyncStorage",
      "React Navigation",
      "GPS Tracking",
      "Geolocation APIs",
    ],
    repositoryUrl: "",
    demoUrl: "",
    status: "completed",
    completionYear: 2020,
    performanceMetrics: [],
    keyFeatures: [
      "Real-time GPS tracking",
      "Offline-first architecture",
      "Predictive analytics",
      "Route optimization",
      "Enterprise security",
      "Performance monitoring",
    ],
  },
];
