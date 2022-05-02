import React from "react";
import styles from "./Page.module.scss";

const Page: React.FC = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>{props.children}</div>
    </div>
  );
};

export default Page;
