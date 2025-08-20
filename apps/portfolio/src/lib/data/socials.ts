import { personalInfo } from "@nurliman.dev/data";

export type Social = {
  name: string;
  link: string;
  iconUrl: string;
  iconDarkUrl: string;
};

export const socials = [
  {
    name: "Github",
    link: personalInfo.githubLink,
    iconUrl: "/assets/github.svg",
    iconDarkUrl: "/assets/github-dark.svg",
  },
  {
    name: "LinkedIn",
    link: personalInfo.linkedinLink,
    iconUrl: "/assets/linkedin.svg",
    iconDarkUrl: "/assets/linkedin-dark.svg",
  },
  {
    name: "WhatsApp",
    link: personalInfo.whatsappLink,
    iconUrl: "/assets/whatsapp.svg",
    iconDarkUrl: "/assets/whatsapp-dark.svg",
  },
] as const satisfies ReadonlyArray<Social>;
