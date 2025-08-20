export type PersonalInfo = {
  name: string;
  age: number;
  residence: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  whatsappLink: string;
  githubLink: string;
  linkedinLink: string;
  websiteLink: string;
  resumeLink: string;
  mapsLink: string;
};

export const personalInfo: PersonalInfo = {
  name: "Nurliman Diara",
  age: 25,
  residence: "Bandung, Indonesia",
  email: "nurliman@duck.com",
  phone: "+6285174474227",
  phoneFormatted: "+62 851-7447-4227",
  websiteLink: "https://nurliman.dev",
  githubLink: "https://github.com/nurliman",
  linkedinLink: "https://www.linkedin.com/in/nurliman",
  whatsappLink: "https://wa.me/6285174474227",
  resumeLink: "https://drive.google.com/file/d/1QkF7VNpAJoWCLBu6mc4F7oJJtGfNHgT0/view?usp=sharing",
  mapsLink: "https://maps.app.goo.gl/49vqfMGu8Hso64mF6",
} as const;
