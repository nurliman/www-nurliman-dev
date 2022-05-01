import { atom } from "nanostores";

const initialValue = {
  isAnimating: false,
};

export const animationStore = atom(initialValue);

export function setAnimating(state: boolean) {
  animationStore.set({ ...animationStore.get(), isAnimating: state });
}
