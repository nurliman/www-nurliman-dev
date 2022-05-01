import { For } from "solid-js";
import { useStore } from "@nanostores/solid";
import clsx from "clsx";
import { setShow } from "@/stores/header";
import { sectionsStore, setActive } from "@/stores/sections";
import { animationStore } from "@/stores/animation";
import styles from "./Menu.module.scss";

export default function Menu() {
  const sectionsState = useStore(sectionsStore);
  const animationState = useStore(animationStore);

  const onItemClick = (id: string) => {
    if (animationState().isAnimating) return;
    setActive(id);
    setShow(false);
  };

  return (
    <ul class={clsx(styles.menu, "main-menu")}>
      <For each={sectionsState().list}>
        {({ id, name, icon }) => (
          <li classList={{ active: sectionsState().active === id }}>
            <a
              href={"#" + id}
              class={clsx(styles.anchor, "nav-anim")}
              onClick={() => onItemClick(id)}
            >
              <span class={clsx(styles.icon, "lnr", icon)}></span>
              <span class={styles.linkText}>{name}</span>
            </a>
          </li>
        )}
      </For>
    </ul>
  );
}
