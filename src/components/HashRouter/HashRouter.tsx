import { PropsWithChildren, onMount } from "solid-js";
import { useStore } from "@nanostores/solid";
import { sectionsStore, setActive } from "@/stores/sections";

export default function HashRouter({ children }: PropsWithChildren) {
  const sectionsState = useStore(sectionsStore);

  onMount(() => {
    const hash = window.location.hash.replace("#", "");

    if (!hash) return;

    const sections = sectionsState().list;
    const foundSection = sections.find(({ id }) => id.toLowerCase() === hash.toLowerCase());

    foundSection && setActive(hash);
  });

  return children;
}
