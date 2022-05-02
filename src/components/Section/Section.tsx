import {
  Component,
  ComponentProps,
  createEffect,
  createMemo,
  on,
  onMount,
  onCleanup,
} from "solid-js";
import { sectionsStore, getIndexById } from "@/stores/sections";
import { setAnimating } from "@/stores/animation";
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
  const activeSection = createMemo(() => sectionsStore.active);
  const psInit = () => (perfectScrollbar = new PerfectScrollbar(container));
  const psDestroy = (ps = perfectScrollbar) => {
    typeof ps?.destroy === "function" && ps.destroy();
    ps = null;
  };

  onMount(() => {
    const ps = psInit();
    const psUpdate = () => typeof ps?.update === "function" && ps.update();

    window.addEventListener("resize", psUpdate);

    onCleanup(() => {
      psDestroy(ps);
      window.removeEventListener("resize", psUpdate);
    });
  });

  createEffect(
    on(activeSection, (active, prevActive) => {
      setAnimating(false);

      if (!container) return;
      if (active === prevActive) return;

      setAnimating(true);

      let animationInClass = ["animated-section-rotateCarouselBottomIn"],
        animationOutClass = ["animated-section-rotateCarouselBottomOut", "animated-section-ontop"];

      if (getIndexById(active) > getIndexById(prevActive)) {
        animationInClass = ["animated-section-rotateCarouselTopIn"];
        animationOutClass = ["animated-section-rotateCarouselTopOut", "animated-section-ontop"];
      }

      if (prevActive === props.sectionId) {
        container.classList.add(...animationOutClass);

        container.onanimationend = () => {
          psDestroy();
          container.classList.remove(styles.active);
          container.classList.remove(...animationOutClass);
        };
      }

      if (active === props.sectionId) {
        psInit();
        container.scrollTop = 0;
        container.classList.add(styles.active);
        container.classList.add(...animationInClass);

        container.onanimationend = () => {
          container.classList.remove(...animationInClass);
          setAnimating(false);
        };
      }
    }),
  );

  return (
    <section
      ref={container}
      data-id={props.sectionId}
      classList={{
        [styles.section]: true,
        [props.class]: !!props.class,
      }}
    >
      <div class={clsx(styles.inner, props.innerClass)}>{props.children}</div>
    </section>
  );
};

export default Section;
