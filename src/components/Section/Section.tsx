import { Component, ComponentProps } from "solid-js";
import { useStore } from "@nanostores/solid";
import { sectionsStore } from "@/stores/sections";
import styles from "./Section.module.scss";

type Props = ComponentProps<"section"> & {
  sectionId: string;
};

const Section: Component<Props> = ({ children, className, sectionId }) => {
  const sectionsState = useStore(sectionsStore);

  return (
    <section
      data-id={sectionId}
      classList={{
        [styles.section]: true,
        [styles.active]: sectionsState().active === sectionId,
        className: !!className,
      }}
    >
      {children}
    </section>
  );
};

export default Section;
