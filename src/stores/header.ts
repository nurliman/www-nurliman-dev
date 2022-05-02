import { atom } from "nanostores";

const initialValue = { show: false };

export const headerStore = atom(initialValue);

export function setShow(show: boolean) {
  headerStore.set({ ...headerStore.get(), show });
}
