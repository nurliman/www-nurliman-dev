import React, { ComponentProps, useCallback, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { getIndexById } from "store/sectionsSlice";
import { setAnimating } from "store/animationSlice";
import clsx from "clsx";
import PerfectScrollbar from "perfect-scrollbar";
import styles from "./Section.module.scss";

type Props = ComponentProps<"section"> & {
  sectionId: string;
  innerClassName?: string;
};

const Section: React.FC<Props> = ({ className, innerClassName, children, sectionId }) => {
  const dispatch = useAppDispatch();
  const container = useRef<HTMLDivElement>();
  const perfectScrollbar = useRef<PerfectScrollbar>();
  const activeSection = useAppSelector((s) => s.sections.active);
  const prevActiveSection = useRef<string>();

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
    const ps = psInit();
    const psUpdate = () => typeof ps?.update === "function" && ps.update();

    window.addEventListener("resize", psUpdate);

    return () => {
      psDestroy(ps);
      window.removeEventListener("resize", psUpdate);
    };
  }, []);

  useEffect(() => {
    dispatch(setAnimating(false));

    if (!container) return;
    if (activeSection === prevActiveSection.current) return;

    dispatch(setAnimating(true));

    let animationInClass = ["animated-section-rotateCarouselBottomIn"],
      animationOutClass = ["animated-section-rotateCarouselBottomOut", "animated-section-ontop"];

    if (getIndexById(activeSection) > getIndexById(prevActiveSection.current)) {
      animationInClass = ["animated-section-rotateCarouselTopIn"];
      animationOutClass = ["animated-section-rotateCarouselTopOut", "animated-section-ontop"];
    }

    if (prevActiveSection.current === sectionId) {
      container.current.classList.add(...animationOutClass);

      container.current.onanimationend = () => {
        psDestroy();
        container.current.classList.remove(styles.active);
        container.current.classList.remove(...animationOutClass);
      };
    }

    if (activeSection === sectionId) {
      psInit();
      container.current.scrollTop = 0;
      container.current.classList.add(styles.active);
      container.current.classList.add(...animationInClass);

      container.current.onanimationend = () => {
        container.current.classList.remove(...animationInClass);
        dispatch(setAnimating(false));
      };
    }

    prevActiveSection.current = activeSection;
  }, [activeSection]);

  return (
    <section ref={container} data-id={sectionId} className={clsx(styles.section, className)}>
      <div className={clsx(styles.inner, innerClassName)}>{children}</div>
    </section>
  );
};

export default Section;
