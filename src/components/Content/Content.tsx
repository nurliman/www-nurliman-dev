import { Component } from "solid-js";
import styles from "./Content.module.scss";

const Content: Component = ({ children }) => {
  return (
    <div className={styles.container}>
      <div id="animated-sections" className={styles.inner}>
        {children}
      </div>
    </div>
  );
};

export default Content;
