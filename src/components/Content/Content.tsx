import { Component } from "solid-js";
import styles from "./Content.module.scss";

const Content: Component = (props) => {
  return (
    <div class={styles.container}>
      <div id="animated-sections" class={styles.inner}>
        {props.children}
      </div>
    </div>
  );
};

export default Content;
