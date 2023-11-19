export type Section = {
  id: string;
  link: string;
  name: string;
};

export const sections = [
  { id: "home", link: "/", name: "Home" },
  { id: "about-me", link: "/about-me", name: "About Me" },
  { id: "resume", link: "/resume", name: "Resume" },
  { id: "portfolio", link: "/portfolio", name: "Portfolio" },
  { id: "blog", link: "/blog", name: "Blog" },
  { id: "contact", link: "/contact", name: "Contact" },
] as const satisfies Readonly<Section[]>;
