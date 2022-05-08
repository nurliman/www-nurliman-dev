import React, { ComponentProps } from "react";
import clsx from "clsx";
import { usePerfectScrollbar } from "hooks/usePerfectScrollbar";
import styles from "./Section.module.scss";

type Props = ComponentProps<"section"> & {
  sectionId: string;
  innerClassName?: string;
};

const Section: React.FC<Props> = ({ className, innerClassName, children, sectionId }) => {
  const [psRef] = usePerfectScrollbar();

  return (
    <section
      ref={psRef}
      data-id={sectionId}
      className={clsx(styles.section, styles.active, className)}
    >
      <div className={clsx(styles.inner, innerClassName)}>{children}</div>
    </section>
  );
};

export default Section;
