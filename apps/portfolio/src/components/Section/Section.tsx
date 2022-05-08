import React, { ComponentProps, useCallback, useEffect, useRef } from "react";
import clsx from "clsx";
import PerfectScrollbar from "perfect-scrollbar";
import styles from "./Section.module.scss";

type Props = ComponentProps<"section"> & {
  sectionId: string;
  innerClassName?: string;
};

const Section: React.FC<Props> = ({ className, innerClassName, children, sectionId }) => {
  const container = useRef<HTMLDivElement>();
  const perfectScrollbar = useRef<PerfectScrollbar>();

  const psInit = useCallback(() => {
    perfectScrollbar.current = new PerfectScrollbar(container.current);
    return perfectScrollbar.current;
  }, [perfectScrollbar, container]);

  const psDestroy = useCallback(
    (ps = perfectScrollbar.current) => {
      typeof ps?.destroy === "function" && ps.destroy();
      ps = null;
    },
    [perfectScrollbar],
  );

  useEffect(() => {
    psInit();

    return psDestroy;
  }, []);

  useEffect(() => {
    const ps = psInit();
    const psUpdate = () => typeof ps?.update === "function" && ps.update();

    window.addEventListener("resize", psUpdate);

    return () => {
      psDestroy(ps);
      window.removeEventListener("resize", psUpdate);
    };
  }, []);

  return (
    <section
      ref={container}
      data-id={sectionId}
      className={clsx(styles.section, styles.active, className)}
    >
      <div className={clsx(styles.inner, innerClassName)}>{children}</div>
    </section>
  );
};

export default Section;
