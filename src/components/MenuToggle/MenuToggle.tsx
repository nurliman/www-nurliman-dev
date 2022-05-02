import { Component } from "solid-js";
import { headerStore, setShow } from "@/stores/header";
import styles from "./MenuToggle.module.scss";

const MenuToggle: Component = () => {
  const toggle = () => setShow(!headerStore.show);

  return (
    <div
      classList={{
        [styles.toggle]: true,
        [styles.open]: headerStore.show,
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
