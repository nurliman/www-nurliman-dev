export type Certificate = {
  name: string;
  organization: {
    name: string;
    logoUrl: string;
    logoDarkUrl: string;
  };
  date: string;
  credential: {
    id: string;
    url: string;
  };
};

export const certificates: Certificate[] = [
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
] as const;
