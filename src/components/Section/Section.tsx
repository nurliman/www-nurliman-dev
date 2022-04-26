import { Component, ComponentProps } from "solid-js";
import { useStore } from "@nanostores/solid";
import { sectionsStore } from "@/stores/sections";
import styles from "./Section.module.scss";

type Props = ComponentProps<"section"> & {
  sectionId: string;
};

const Section: Component<Props> = (props) => {
  const sectionsState = useStore(sectionsStore);

  return (
    <section
      data-id={props.sectionId}
      classList={{
        [styles.section]: true,
        [styles.active]: sectionsState().active === props.sectionId,
        className: !!props.className,
      }}
    >
      {props.children}
    </section>
  );
};

export default Section;
