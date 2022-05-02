import { createStore } from "solid-js/store";

const initialValue = { show: false };

export const [headerStore, setHeaderStore] = createStore(initialValue);

export function setShow(show: boolean) {
  setHeaderStore("show", show);
}
