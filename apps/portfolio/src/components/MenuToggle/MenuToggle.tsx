import { useCallback } from "react";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "store";
import { setShow } from "store/headerSlice";
import styles from "./MenuToggle.module.scss";

const MenuToggle = () => {
  const dispatch = useAppDispatch();
  const showHeader = useAppSelector((s) => s.header.show);
  const toggle = useCallback(() => dispatch(setShow(!showHeader)), [showHeader]);

  return (
    <div
      className={clsx({
        [styles.toggle]: true,
        [styles.open]: showHeader,
      })}
      onClick={toggle}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuToggle;
