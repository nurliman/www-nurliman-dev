import { ComponentProps, forwardRef } from "react";
import clsx from "clsx";
import styles from "./Section.module.scss";

type Props = ComponentProps<"section"> & {
  innerClassName?: string;
};

const Section = forwardRef<HTMLElement, Props>(({ className, innerClassName, children }, ref) => {
  return (
    <section ref={ref} className={clsx(styles.section, styles.active, className)}>
      <div className={clsx(styles.inner, innerClassName)}>{children}</div>
    </section>
  );
});

Section.displayName = "Section";

export default Section;
