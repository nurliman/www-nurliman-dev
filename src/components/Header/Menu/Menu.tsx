import { For } from "solid-js";
import clsx from "clsx";
import { setShow } from "@/stores/header";
import { sectionsStore, setActive } from "@/stores/sections";
import { animationStore } from "@/stores/animation";
import styles from "./Menu.module.scss";

export default function Menu() {
  const onItemClick = (id: string) => {
    if (animationStore.isAnimating) return;
    setActive(id);
    setShow(false);
  };

  return (
    <ul class={clsx(styles.menu, "main-menu")}>
      <For each={sectionsStore.list}>
        {({ id, name, icon }) => (
          <li classList={{ active: sectionsStore.active === id }}>
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
