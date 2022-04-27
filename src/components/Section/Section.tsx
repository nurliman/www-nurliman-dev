import { Component, ComponentProps } from "solid-js";
import { useStore } from "@nanostores/solid";
import { sectionsStore } from "@/stores/sections";
import clsx from "clsx";
import styles from "./Section.module.scss";

type Props = Omit<ComponentProps<"section">, "className"> & {
  sectionId: string;
  innerClass?: string;
};

const Section: Component<Props> = (props) => {
  const sectionsState = useStore(sectionsStore);

  return (
    <section
      data-id={props.sectionId}
      classList={{
        [styles.section]: true,
        [styles.active]: sectionsState().active === props.sectionId,
        [props.class]: !!props.class,
      }}
    >
      <div class={clsx(styles.inner, props.innerClass)}>{props.children}</div>
    </section>
  );
};

export default Section;
