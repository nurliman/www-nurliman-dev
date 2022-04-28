import { Component, ComponentProps, createEffect, createMemo, onMount, onCleanup } from "solid-js";
import { useStore } from "@nanostores/solid";
import { sectionsStore } from "@/stores/sections";
import clsx from "clsx";
import PerfectScrollbar from "perfect-scrollbar";
import styles from "./Section.module.scss";

type Props = Omit<ComponentProps<"section">, "className"> & {
  sectionId: string;
  innerClass?: string;
};

const Section: Component<Props> = (props) => {
  let container: HTMLDivElement;
  let perfectScrollbar: PerfectScrollbar;
  const sectionsState = useStore(sectionsStore);
  const isActive = createMemo(() => sectionsState().active === props.sectionId);
  const psInit = () => (perfectScrollbar = new PerfectScrollbar(container));
  const psDestroy = (ps = perfectScrollbar) => {
    typeof ps?.destroy === "function" && ps.destroy();
    ps = null;
  };

  onMount(() => {
    const ps = psInit();
    const psUpdate = () => typeof ps?.update === "function" && ps.update();

    window.addEventListener("resize", psUpdate, { passive: true });

    onCleanup(() => {
      psDestroy(ps);
      window.removeEventListener("resize", psUpdate);
    });
  });

  createEffect(() => {
    if (isActive()) psInit();
    else psDestroy();
  });

  return (
    <section
      ref={container}
      data-id={props.sectionId}
      classList={{
        [styles.section]: true,
        [styles.active]: isActive(),
        [props.class]: !!props.class,
      }}
    >
      <div class={clsx(styles.inner, props.innerClass)}>{props.children}</div>
    </section>
  );
};

export default Section;
