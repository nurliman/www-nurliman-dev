export type PersonalInfo = {
  name: string;
  age: number;
  residence: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  whatsappLink: string;
  mapsLink: string;
  resumeLink: string;
};

export const personalInfo: PersonalInfo = {
  name: "Nurliman Diara",
  age: 25,
  residence: "Bandung, Indonesia",
  email: "nurliman@duck.com",
  phone: "+6285174474227",
  phoneFormatted: "+62 851-7447-4227",
  whatsappLink: "https://wa.me/6285174474227",
  mapsLink: "https://maps.app.goo.gl/49vqfMGu8Hso64mF6",
  resumeLink: "https://drive.google.com/file/d/1QkF7VNpAJoWCLBu6mc4F7oJJtGfNHgT0/view?usp=sharing",
} as const;
