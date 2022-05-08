import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "store";
import clsx from "clsx";
import { setShow } from "store/headerSlice";
import styles from "./Menu.module.scss";

export default function Menu() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const sectionsList = useAppSelector((s) => s.sections.list);

  const onItemClick = useCallback(() => {
    dispatch(setShow(false));
  }, []);

  return (
    <ul className={clsx(styles.menu, "main-menu")}>
      {sectionsList.map(({ id, path, name, icon }) => (
        <li key={id} className={clsx({ active: router.pathname === path })}>
          <Link href={path}>
            <a className={clsx(styles.anchor, "nav-anim")} onClick={onItemClick}>
              <span className={clsx(styles.icon, "lnr", icon)}></span>
              <span className={styles.linkText}>{name}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
