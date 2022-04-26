import { Component } from "solid-js";
import styles from "./Content.module.scss";

const Content: Component = ({ children }) => {
  return (
    <div class={styles.container}>
      <div id="animated-sections" class={styles.inner}>
        {children}
      </div>
    </div>
  );
};

export default Content;
