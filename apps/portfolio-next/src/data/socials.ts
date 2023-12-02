export type Social = {
  name: string;
  link: string;
  iconUrl: string;
};

export const socials = [
  {
    name: "github",
    link: "https://github.com/nurliman",
    iconUrl: "/assets/github.svg",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/nurliman",
    iconUrl: "/assets/linkedin.svg",
  },
  {
    name: "whatsapp",
    link: "https://wa.me/6282133258511",
    iconUrl: "/assets/whatsapp.svg",
  },
] as const satisfies ReadonlyArray<Social>;
