import { Component, ComponentProps } from "solid-js";
import { useStore } from "@nanostores/solid";
import clsx from "clsx";
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
      className={clsx(
        styles.section,
        sectionsState().active === sectionId && styles.active,
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Section;
