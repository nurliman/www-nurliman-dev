import {} from "solid-js";
import { sectionsStore, getActiveIndex, setActive } from "@/stores/sections";
import { animationStore } from "@/stores/animation";
import styles from "./ArrowNav.module.scss";

export default function ArrowNav() {
  const next = () => {
    if (animationStore.isAnimating) return;
    let activeIndex = getActiveIndex();

    if (Number(activeIndex) < 0) return;

    if (activeIndex >= sectionsStore.list.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }

    setActive(sectionsStore.list[activeIndex]?.id);
  };

  const prev = () => {
    if (animationStore.isAnimating) return;
    let activeIndex = getActiveIndex();

    if (Number(activeIndex) < 0) return;

    if (activeIndex < 1) {
      activeIndex = sectionsStore.list.length - 1;
    } else {
      activeIndex--;
    }

    setActive(sectionsStore.list[activeIndex]?.id);
  };

  return (
    <div class={styles.container}>
      <div class={styles.arrow} onClick={next}>
        <i class="lnr lnr-chevron-right"></i>
      </div>
      <div class={styles.arrow} onClick={prev}>
        <i class="lnr lnr-chevron-left"></i>
      </div>
    </div>
  );
}
