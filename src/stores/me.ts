import { createStore } from "solid-js/store";

const initialValue = {
  name: "Nurliman Diara",
  titles: ["Web Developer", "Frontend Developer"],
};

export const [meStore] = createStore(initialValue);
