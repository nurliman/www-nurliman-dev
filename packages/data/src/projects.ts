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
      Complete warehouse management solution featuring mobile-first design, thermal printing integration,
      and real-time data synchronization for textile manufacturing operations.
    `,
    description: dedent`
      Built a complete warehouse management solution that transformed textile industry operations
      through mobile-first design and intelligent automation.
      <br /><br />
      Developed a monorepo containing React Native mobile app, Next.js web application,
      thermal printer service, and data synchronization service. Created multi-stage
      receiving workflow with role-based access control spanning warehouse, accounting, and management teams.
      <br /><br />
      Notable features include real-time thermal printing with USB device management,
      bidirectional GraphQL API synchronization, offline-first mobile architecture,
      and detailed audit trail tracking. Utilized TypeScript, Drizzle ORM, tRPC, and Turbo
      monorepo structure for optimal performance and maintainability.
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
      "Streamlined multi-stage receiving workflow with role-based access",
      "Real-time thermal printing with USB device management",
      "Bidirectional GraphQL data synchronization",
      "Offline-first mobile architecture for uninterrupted operations",
      "Complete audit trail tracking for compliance",
      "Automated inventory management and label generation",
      "Secure data handling and access controls",
      "Cross-platform compatibility and performance optimization",
    ],
  },

  {
    id: "pelitatex-erp",
    title: "Pelitatex ERP - Enterprise Resource Planning System",
    summary: dedent`
      Modern ERP frontend application built with Next.js 15 and TypeScript,
      delivering business management capabilities for textile manufacturing operations.
    `,
    description: dedent`
      Created a full-featured Enterprise Resource Planning (ERP) system for PelitaTex,
      a textile manufacturing company, using Next.js 15, TypeScript, and modern
      web technologies. The application streamlines business operations across customer
      management, inventory tracking, document workflows, and user administration.
      <br /><br />
      Features role-based access control with 5 user levels,
      real-time GraphQL data synchronization, automated document management with
      status tracking, customer relationship management with credit limit monitoring,
      and inventory management with SKU handling.
      <br /><br />
      Optimized performance through Next.js Turbo, tested with Playwright (E2E) and Vitest (Unit),
      and integrated monitoring via Sentry and PostHog. The system includes responsive design, 
      automated code quality checks, and Docker containerization for scalable deployment.
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
      "Five-tier role-based access control system",
      "Customer management with automated credit limit monitoring",
      "Inventory tracking with detailed SKU management",
      "Automated document workflow with status tracking",
      "Real-time GraphQL data synchronization",
      "Advanced data tables with sophisticated filtering",
      "Mobile-responsive design for all devices",
      "Full testing coverage with E2E and unit tests",
    ],
  },

  {
    id: "tamatex-printer",
    title: "Tamatex Printer Manager",
    summary: dedent`
      Desktop application for managing ESC/POS thermal printers
      with invoice printing capabilities, built for textile manufacturing operations.
    `,
    description: dedent`
      Tamatex Printer Manager is an Electron-based desktop application that streamlines
      thermal printer management and invoice printing for Pelitatex, a textile manufacturing company.
      The application handles ESC/POS printer communications, supports USB and network connections,
      and generates professional invoices with QR codes, logos, and detailed item information.
      <br /><br />
      Features cross-platform desktop development with hardware integration
      and modern software architecture. Built with React-based UI, TypeScript for type safety,
      error handling via Sentry integration, and automatic updates through GitHub releases.
      The application processes real-time sales data and generates formatted thermal printer output with
      precise formatting, barcode generation, and multi-language support.
      <br /><br />
      Technical highlights include low-level printer communication protocols,
      optimized bundle size with Preact, type-safe client-server communication via tRPC,
      and state management with Nanostores. The project includes automated testing, 
      CI/CD pipelines, and error monitoring.
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
      with e-commerce functionality, SEO optimization, and analytics integration.
    `,
    description: dedent`
      Built a high-performance marketing website serving as the primary
      digital touchpoint for Knitto's textile business, handling hundreds of thousands of daily visitors
      with exceptional performance and scalability.
      <br /><br />
      Developed with Next.js for optimal SEO and performance, featuring Server-Side Rendering (SSR) to achieve
      consistent 90+ performance scores. The website includes home/landing page, about page,
      products catalog with search functionality, detailed fabric information with stock tracking,
      shopping cart and checkout system, career page, fabric auction platform, and terms of service.
      <br /><br />
      Technical features include CMS for content management,
      design system with Storybook for consistent UI/UX components, and analytics
      integration to track user interactions and conversions for Google Analytics, Facebook Ads,
      and TikTok Ads campaigns.
      <br /><br />
      Deployed using serverless architecture on Google Cloud Run with Docker containers, ensuring
      scalability and reliability. Includes CI/CD pipelines with
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
      "SEO-optimized with Server-Side Rendering",
      "Full-featured content management system",
      "Complete e-commerce functionality with payment processing",
      "Consistent design system with Storybook documentation",
      "Multi-platform analytics across Google, Facebook, and TikTok",
      "Scalable serverless architecture on Google Cloud",
      "Automated CI/CD pipeline for rapid deployments",
    ],
  },

  {
    id: "portal.knitto.co.id",
    title: "Knitto Customer Portal",
    summary: dedent`
      Exclusive ordering platform that boosted sales efficiency
      for a textile company through real-time inventory, streamlined ordering,
      and multi-channel analytics.
    `,
    description: dedent`
      Built an exclusive portal that modernized the customer ordering journey through secure,
      invitation-only access using magic links delivered via WhatsApp chatbot, enhancing both security and user experience.
      <br /><br />
      Features real-time inventory system for up-to-the-minute stock visibility, eliminating ordering errors,
      Google Maps API integration for precise delivery address management, custom fabric calculator
      to help clients estimate material needs independently, and checkout process integrated with sales workflow via WhatsApp.
      <br /><br />
      Includes multi-platform analytics engine to track user interactions and measure marketing ROI
      across Google, Facebook, and TikTok Ads. The project features automated CI/CD pipeline
      with GitHub Actions, reducing deployment times to under 1 minute.
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
      Full-stack web solution delivering enhanced user experience
      and measurable business growth for Australian printing services.
    `,
    description: dedent`
      Built a digital transformation solution for Get It Printed,
      establishing their online presence and driving measurable business growth.
      Developed using the WordPress ecosystem with custom PHP development,
      implementing dynamic service catalog with real-time pricing, integrated payment processing,
      automated quote generation, and customer management system.
      <br /><br />
      Achieved strong performance with high SEO scores, mobile optimization, fast load times,
      and reliable uptime. Technical implementation includes custom theme development, database optimization,
      security hardening with SSL, and responsive design across all devices.
      <br /><br />
      The solution features content management capabilities, automated backup systems,
      and analytics integration for business intelligence and performance tracking.
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
      Mobile solution that transformed Grasindo's field sales operations
      through intelligent tracking and analytics.
    `,
    description: dedent`
      Built an Android mobile application that
      transformed Grasindo's sales operations from manual processes to a data-driven,
      automated system.
      <br /><br />
      Developed using React Native, TypeScript, and Firebase,
      implementing features including real-time GPS tracking with high accuracy,
      intelligent visit scheduling with route optimization, CRM integration,
      and predictive analytics dashboards.
      <br /><br />
      The solution delivered business impact through improved sales performance,
      enhanced field visit tracking, and optimized battery life for extended field operations.
      Technical features include offline-first architecture with seamless
      Firebase synchronization, real-time push notifications, and data security protocols.
      The application was designed and optimized for Android devices to ensure
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
      "High-accuracy real-time GPS tracking for field operations",
      "Offline-first architecture with seamless synchronization",
      "Predictive analytics dashboards for sales insights",
      "Intelligent route optimization for efficient visits",
      "Secure data protocols and access controls",
      "Performance monitoring with battery optimization",
    ],
  },
];
