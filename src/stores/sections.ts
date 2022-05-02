import { createStore } from "solid-js/store";

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

export const [sectionsStore, setSectionsStore] = createStore(initialValue);

export function setActive(id: string) {
  if (!id) return;
  setSectionsStore("active", id);
}

export function getActiveIndex() {
  return sectionsStore.list.findIndex((x) => x.id === sectionsStore.active);
}

export function getIndexById(id: string) {
  return sectionsStore.list.findIndex((x) => x.id === id);
}
