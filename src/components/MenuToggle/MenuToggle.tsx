import { Component } from "solid-js";
import { useStore } from "@nanostores/solid";
import { headerStore, setShow } from "@/stores/header";
import styles from "./MenuToggle.module.scss";

const MenuToggle: Component = () => {
  const headerState = useStore(headerStore);
  const toggle = () => setShow(!headerState().show);

  return (
    <div
      classList={{
        [styles.toggle]: true,
        [styles.open]: headerState().show,
      }}
      onClick={toggle}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuToggle;
