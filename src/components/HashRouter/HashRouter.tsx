import { PropsWithChildren, onMount } from "solid-js";
import { sectionsStore, setActive } from "@/stores/sections";

export default function HashRouter({ children }: PropsWithChildren) {
  onMount(() => {
    const hash = window.location.hash.replace("#", "");

    if (!hash) return;

    const sections = sectionsStore.list;
    const foundSection = sections.find(({ id }) => id.toLowerCase() === hash.toLowerCase());

    foundSection && setActive(hash);
  });

  return children;
}
