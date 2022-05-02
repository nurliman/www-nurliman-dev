import { createStore } from "solid-js/store";

const initialValue = {
  isAnimating: false,
};

export const [animationStore, setAnimationStore] = createStore(initialValue);

export function setAnimating(state: boolean) {
  setAnimationStore("isAnimating", state);
}
