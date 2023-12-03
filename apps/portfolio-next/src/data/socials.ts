export type Social = {
  name: string;
  link: string;
  iconUrl: string;
};

export const socials = [
  {
    name: "Github",
    link: "https://github.com/nurliman",
    iconUrl: "/assets/github.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nurliman",
    iconUrl: "/assets/linkedin.svg",
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/6282133258511",
    iconUrl: "/assets/whatsapp.svg",
  },
] as const satisfies ReadonlyArray<Social>;
