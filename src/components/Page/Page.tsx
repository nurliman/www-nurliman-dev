import {} from "solid-js";
import styles from "./Page.module.scss";

export default function Page({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
