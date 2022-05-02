import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "store";
import { getActiveIndex, setActive } from "store/sectionsSlice";
import styles from "./ArrowNav.module.scss";

export default function ArrowNav() {
  const dispatch = useAppDispatch();
  const sectionsList = useAppSelector((s) => s.sections.list);
  const isAnimating = useAppSelector((s) => s.animation.isAnimating);

  const next = useCallback(() => {
    if (isAnimating) return;
    let activeIndex = getActiveIndex();

    if (Number(activeIndex) < 0) return;

    if (activeIndex >= sectionsList.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }

    dispatch(setActive(sectionsList[activeIndex]?.id));
  }, [sectionsList, isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    let activeIndex = getActiveIndex();

    if (Number(activeIndex) < 0) return;

    if (activeIndex < 1) {
      activeIndex = sectionsList.length - 1;
    } else {
      activeIndex--;
    }

    dispatch(setActive(sectionsList[activeIndex]?.id));
  }, [sectionsList, isAnimating]);

  return (
    <div className={styles.container}>
      <div className={styles.arrow} onClick={next}>
        <i className="lnr lnr-chevron-right"></i>
      </div>
      <div className={styles.arrow} onClick={prev}>
        <i className="lnr lnr-chevron-left"></i>
      </div>
    </div>
  );
}
