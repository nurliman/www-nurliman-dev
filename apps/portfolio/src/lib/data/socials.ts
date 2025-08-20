export type Social = {
  name: string;
  link: string;
  iconUrl: string;
  iconDarkUrl: string;
};

export const socials = [
  {
    name: "Github",
    link: "https://github.com/nurliman",
    iconUrl: "/assets/github.svg",
    iconDarkUrl: "/assets/github-dark.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nurliman",
    iconUrl: "/assets/linkedin.svg",
    iconDarkUrl: "/assets/linkedin-dark.svg",
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/6285174474227",
    iconUrl: "/assets/whatsapp.svg",
    iconDarkUrl: "/assets/whatsapp-dark.svg",
  },
] as const satisfies ReadonlyArray<Social>;
