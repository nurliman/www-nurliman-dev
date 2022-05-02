import { atom } from "nanostores";

const initialValue = {
  name: "Nurliman Diara",
  titles: ["Web Developer", "Frontend Developer"],
};

export const meStore = atom(initialValue);
