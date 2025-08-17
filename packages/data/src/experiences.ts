import dedent from "dedent";

export type Experience = {
  period: string;
  company: string;
  title: string;
  description: string;
};

export const experiences: Experience[] = [
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
      Create and maintain mobile applications called "Salesman Tracking".`,
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
] as const;
