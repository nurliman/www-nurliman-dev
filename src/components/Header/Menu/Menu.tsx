import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "store";
import clsx from "clsx";
import { setShow } from "store/headerSlice";
import { setActive } from "store/sectionsSlice";
import styles from "./Menu.module.scss";

export default function Menu() {
  const dispatch = useAppDispatch();
  const sectionsList = useAppSelector((s) => s.sections.list);
  const activeSection = useAppSelector((s) => s.sections.active);
  const isAnimating = useAppSelector((s) => s.animation.isAnimating);

  const onItemClick = useCallback(
    (id: string) => {
      if (isAnimating) return;
      dispatch(setActive(id));
      dispatch(setShow(false));
    },
    [isAnimating],
  );

  return (
    <ul className={clsx(styles.menu, "main-menu")}>
      {sectionsList.map(({ id, name, icon }) => (
        <li key={id} className={clsx({ active: activeSection === id })}>
          <a
            href={"#" + id}
            className={clsx(styles.anchor, "nav-anim")}
            onClick={() => onItemClick(id)}
          >
            <span className={clsx(styles.icon, "lnr", icon)}></span>
            <span className={styles.linkText}>{name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
