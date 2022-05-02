import React from "react";
import styles from "./Content.module.scss";

const Content: React.FC = (props) => {
  return (
    <div className={styles.container}>
      <div id="animated-sections" className={styles.inner}>
        {props.children}
      </div>
    </div>
  );
};

export default Content;
