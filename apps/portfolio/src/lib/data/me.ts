import dedent from "dedent";

export const me = {
  experiences: [
    {
      period: "Mar 2024 - Jun 2025 (1 year 4 months)",
      company: "Pelita Textiles",
      title: "IT Programmer",
      description: dedent`
        Solely developed and delivered a comprehensive suite of enterprise applications, managing
        the entire software development lifecycle from initial user research and UI/UX design to
        production deployment and ongoing maintenance.
        <br /><br />
        **Mobile Application Development:**
        - Designed and built a mobile-first warehouse management app using React Native/Expo, including both frontend and backend API development.
        - Established a monorepo structure for multiple applications (mobile client, backend services, printer integration, data sync).
        - Implemented multi-stage receiving workflows with role-based access control, and conducted user testing with warehouse staff, accounting, and management to optimize processes.
        - Integrated thermal printing and real-time data synchronization; deployed to production with monitoring and error tracking.

        **ERP System Development:**
        - Led the design and frontend development of a modern ERP system using Next.js 15 and TypeScript.
        - Built modules for customer, product, supplier, warehouse, price list, and document management.
        - Leveraged GraphQL (TanStack Query), Nanostores, and React Hook Form with Valibot for robust, type-safe, and error-resistant solutions.
        - Established E2E and unit testing strategies (Playwright, Vitest) to ensure high reliability.

        **Desktop Application Development:**
        - Designed and developed a desktop invoice printing app with Electron, React, and TypeScript.
        - Implemented printer management, QR code/logo printing, auto-updates, and Sentry-based error handling.
        - Supported both USB and network printers, with extensive cross-model testing.
        - Managed deployment pipeline: code signing, installer creation, and automated releases via GitHub.

        **Technical Architecture & DevOps:**
        - Architected modern monorepo workflows with Turbo, enabling code sharing and streamlined deployments.
        - Built CI/CD pipelines, automated testing, and multi-platform deployment (mobile, web, desktop).
        - Utilized tRPC for type-safe APIs, DrizzleORM with SQLite for database management, and Docker for containerization.
        - Enforced code quality with Biome, and managed production deployments with monitoring and rollback capabilities.
        - Continuously improved performance and features based on user feedback and business needs.
      `,
    },
    {
      period: "Sep 2020 - Jan 2024 (3 years 5 months)",
      company: "PT. Knitto Tekstil Indonesia",
      title: "Lead Frontend & DevOps Engineer",
      description: dedent`
        As the Lead Frontend & DevOps Engineer at PT. Knitto Tekstil Indonesia, I spearheaded the integration of cutting-edge technologies to optimize software development processes and enhance overall system efficiency. In this pivotal role, I undertook the following responsibilities:
        <br /><br />
        **Frontend Development:**
        - Led a team of frontend developers in designing and implementing responsive, user-friendly interfaces for web applications, ensuring seamless user experiences.
        - Developed and maintained efficient, reusable, and scalable code using modern JavaScript frameworks such as React.js and Next.js.
        - Collaborated closely with UI/UX designers to translate design mockups into functional frontend components, ensuring alignment with the overall project vision.

        **DevOps Integration:**
        - Pioneered the implementation of DevOps best practices to streamline the software development lifecycle, resulting in a significant reduction in deployment time and enhanced collaboration between development and operations teams.
        - Automated deployment processes using tools such as Docker and Kubernetes, leading to a more reliable and scalable infrastructure.
        - Implemented continuous integration and continuous delivery (CI/CD) pipelines, facilitating rapid and reliable software releases.

        **Infrastructure Management:**
        - Orchestrated cloud infrastructure deployment and management, leveraging services from providers such as Google Cloud Platform or Vercel, ensuring optimal performance, scalability, and cost-effectiveness.
        - Implemented monitoring and alerting systems to proactively identify and address potential issues, minimizing downtime and improving system reliability.

        **Team Leadership:**
        - Provided mentorship and guidance to the frontend and DevOps teams, fostering a collaborative and innovative work environment.
        - Conducted regular code reviews to ensure code quality, adherence to best practices, and knowledge sharing among team members.
        - Collaborated with cross-functional teams, including product managers and backend engineers, to deliver integrated solutions that met both technical and business requirements.
      `,
    },
    {
      period: "Sep 2020 - Jan 2024 (3 years 5 months)",
      company: "PT. Knitto Tekstil Indonesia",
      title: "IT Programmer / Web Developer",
      description: dedent`
        As an IT Programmer/Web Developer at PT. Knitto Tekstil Indonesia, I played a pivotal role in advancing the company's digital presence and internal workflow through the development and maintenance of various applications. Key responsibilities and achievements include:
        <br /><br />
        **Main Website Development:**
        - Spearheaded the design and development of the company's main website, focusing on creating an intuitive and visually appealing online platform.
        - Implemented responsive web design principles to ensure seamless user experiences across various devices, contributing to a 20% increase in website traffic.
        - Collaborated closely with cross-functional teams to gather requirements and translate them into functional features, enhancing the overall online brand presence.

        **Online Ordering Web App:**
        - Led the development of a user-friendly online ordering web application, streamlining the customer ordering process.
        - Integrated secure payment gateways and implemented robust authentication mechanisms to ensure the confidentiality and integrity of customer data.
        - Improved the app's performance through optimization techniques, resulting in a 15% decrease in page load times and increased customer satisfaction.

        **Internal Apps Development:**
        - Developed and maintained several internal applications to enhance operational efficiency.
        - Implemented custom features based on user feedback, resulting in a 25% reduction in manual data entry and improved overall workflow automation.

        **Technological Stack:**
        - Utilized a stack comprising HTML, CSS, JavaScript, and various frontend frameworks to create dynamic and engaging user interfaces.
        - Integrated backend technologies such as Node.js and Express to build robust server-side components for web applications.
        - Pioneered the implementation of version control using Git to manage codebase changes efficiently and facilitate collaboration among the development team.
      `,
    },
    {
      period: "Jul 2019 - Aug 2020 (1 year 2 months)",
      company: "PT. Grasindo Anugrah Pratama",
      title: "IT & Graphic Designer",
      description: dedent`Designing packaging of product,
        Designing products catalog booklet,
        Designing brochures,
        posters and other campaign properties,
        Designing website and build it,
        Maintains web environment by identifying system requirements,
        installing upgrades and monitoring system performance,
        Create and maintain mobile applications called “Salesman Tracking”.`,
    },
    {
      period: "2016",
      company: "Bandung Geological Museum",
      title: "IT Support (Internship)",
      description: dedent`Establishes and maintains network performance,
        Builds network configurations and connections,
        Maximizes performance by troubleshooting network problems and outages and scheduling upgrades,
        Establishes networking environment by designing system configuration and directing system installation,
        Accomplishes information systems and organization mission by completing related results as needed.`,
    },
  ],
  educations: [
    {
      period: "2014 - 2017",
      school: "SMK Negeri 5 Bandung",
      field: "Computer Networking",
      description: dedent`Learn how to design and build computer and communication networks.
        Some topics covered include:
          Operating systems,
          Database administration,
          Networking, Security,
          Routing and cabling.`,
    },
  ],
  technicalSkills: [
    { name: "Kubernetes", value: 0.88 },
    { name: "Docker", value: 0.95 },
    { name: "JavaScript/TypeScript", value: 0.99 },
    { name: "Rust", value: 0.85 },
    { name: "React/Preact", value: 0.99 },
    { name: "React Native", value: 0.98 },
    { name: "Electron", value: 0.92 },
    { name: "Expo", value: 0.95 },
    { name: "GraphQL", value: 0.93 },
    { name: "tRPC", value: 0.94 },
    { name: "DrizzleORM", value: 0.9 },
    { name: "SQLite", value: 0.88 },
    { name: "Astro", value: 0.95 },
    { name: "Solid.js", value: 0.95 },
    { name: "Svelte", value: 0.92 },
    { name: "SvelteKit", value: 0.92 },
    { name: "Vue.js", value: 0.9 },
    { name: "Nuxt", value: 0.9 },
    { name: "Next.js", value: 0.99 },
    { name: "Node.js", value: 0.98 },
    { name: "HTML/CSS", value: 0.98 },
    { name: "Git/Github", value: 0.95 },
    { name: "Go", value: 0.9 },
    { name: "Java/Kotlin", value: 0.8 },
    { name: "Android Development", value: 0.8 },
  ],
  otherSkills: [
    { name: "Adobe Illustrator", value: 0.93 },
    { name: "Adobe XD", value: 0.91 },
    { name: "Figma", value: 0.95 },
    { name: "Github Actions", value: 0.9 },
    { name: "Google Cloud Platform", value: 0.9 },
    { name: "Vercel", value: 0.9 },
    { name: "npm", value: 0.9 },
    { name: "Turbo", value: 0.88 },
    { name: "Biome", value: 0.85 },
    { name: "Playwright", value: 0.89 },
    { name: "Vitest", value: 0.87 },
    { name: "Sentry", value: 0.83 },
    { name: "TanStack Query", value: 0.91 },
    { name: "Nanostores", value: 0.86 },
    { name: "Radix UI", value: 0.88 },
    { name: "shadcn/ui", value: 0.89 },
    { name: "Computer Networking", value: 0.8 },
    { name: "Linux", value: 0.9 },
    { name: "Nginx", value: 0.9 },
    { name: "HAProxy", value: 0.8 },
    { name: "Keepalived", value: 0.8 },
    { name: "Wordpress", value: 0.9 },
  ],
  knowledges: [
    "Containerization",
    "Clean Code",
    "Cloud Computing",
    "CI/CD",
    "DevOps",
    "Serverless",
    "Edge Computing",
    "Jamstack",
    "SEO",
    "Kubernetes",
    "Monorepo",
    "Microservice",
    "REST API",
    "GraphQL",
    "gRPC",
    "tRPC",
    "JWT",
    "OAuth",
    "PASETO",
    "Preact",
    "SolidJS",
    "Svelte",
    "React Native",
    "Electron",
    "UI/UX",
    "User Research",
    "TailwindCSS",
    "Design System",
    "Mobile-First Design",
    "Cross-Platform Development",
    "Desktop Application Development",
    "TDD",
    "E2E Testing",
    "Unit Testing",
    "Vite",
    "Vitest",
    "Playwright",
    "Cypress",
    "Error Tracking",
    "Performance Monitoring",
    "Enterprise Resource Planning (ERP)",
    "Warehouse Management Systems",
    "Role-Based Access Control (RBAC)",
    "Real-time Data Synchronization",
    "Thermal Printing Integration",
    "Multi-Platform Deployment",
    "Code Signing",
    "Auto-Updates",
    "Production Deployment",
    "WebAssembly",
    "Webpack",
    "Rust",
  ],
  certificates: [
    {
      name: "Google Cloud Platform Fundamentals: Core Infrastructure",
      organization: {
        name: "Google",
        logoUrl: "/assets/google-G-logo.svg",
        logoDarkUrl: "/assets/google-G-logo.svg",
      },
      date: "November 2021",
      credential: {
        id: "E-Certificate",
        url: "/assets/e-certificate-gcp-core-infrastructure.pdf",
      },
    },
    {
      name: "The Git & Github Bootcamp",
      organization: {
        name: "Udemy",
        logoUrl: "/assets/udemy-logo.svg",
        logoDarkUrl: "/assets/udemy-logo-dark.svg",
      },
      date: "September 2021",
      credential: {
        id: "UC-fc8713f1-cc7e-4dce-b002-15dc2c356ede",
        url: "https://www.udemy.com/certificate/UC-fc8713f1-cc7e-4dce-b002-15dc2c356ede",
      },
    },
    {
      name: "Go: The Complete Developer's Guide (Golang)",
      organization: {
        name: "Udemy",
        logoUrl: "/assets/udemy-logo.svg",
        logoDarkUrl: "/assets/udemy-logo-dark.svg",
      },
      date: "August 2021",
      credential: {
        id: "UC-d8cc5a83-e2dd-49cb-bf1d-00644570c7c1",
        url: "https://www.udemy.com/certificate/UC-d8cc5a83-e2dd-49cb-bf1d-00644570c7c1",
      },
    },
    {
      name: "Mastering Multithreading Programming with Go (Golang)",
      organization: {
        name: "Udemy",
        logoUrl: "/assets/udemy-logo.svg",
        logoDarkUrl: "/assets/udemy-logo-dark.svg",
      },
      date: "August 2021",
      credential: {
        id: "UC-e3365e37-87b5-4d53-a1e3-4ff6353d4718",
        url: "https://www.udemy.com/certificate/UC-e3365e37-87b5-4d53-a1e3-4ff6353d4718",
      },
    },
    {
      name: "Web Authentication, Encryption, JWT, HMAC, & OAuth With Go",
      organization: {
        name: "Udemy",
        logoUrl: "/assets/udemy-logo.svg",
        logoDarkUrl: "/assets/udemy-logo-dark.svg",
      },
      date: "August 2021",
      credential: {
        id: "UC-f0ecf5e1-f436-4b7d-b181-82a615295bf2",
        url: "https://www.udemy.com/certificate/UC-f0ecf5e1-f436-4b7d-b181-82a615295bf2",
      },
    },
    {
      name: "gRPC [Golang] Master Class: Build Modern API & Microservices",
      organization: {
        name: "Udemy",
        logoUrl: "/assets/udemy-logo.svg",
        logoDarkUrl: "/assets/udemy-logo-dark.svg",
      },
      date: "August 2021",
      credential: {
        id: "UC-addc957e-0609-4382-87bd-7c85814bcb19",
        url: "https://www.udemy.com/certificate/UC-addc957e-0609-4382-87bd-7c85814bcb19",
      },
    },
  ],
} as const;
