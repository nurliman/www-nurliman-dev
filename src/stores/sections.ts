import { atom } from "nanostores";

const initialValue = {
  list: [
    { id: "home", name: "Home", icon: "lnr-home" },
    { id: "about-me", name: "About Me", icon: "lnr-user" },
    { id: "resume", name: "Resume", icon: "lnr-graduation-hat" },
    { id: "portfolio", name: "Portfolio", icon: "lnr-briefcase" },
    { id: "blog", name: "Blog", icon: "lnr-book" },
    { id: "contact", name: "Contact", icon: "lnr-envelope" },
  ],
  active: "home",
};

export const sectionsStore = atom(initialValue);

export function setActive(id: string) {
  sectionsStore.set({ ...sectionsStore.get(), active: id });
}
