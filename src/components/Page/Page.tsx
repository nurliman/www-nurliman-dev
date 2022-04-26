import { PropsWithChildren } from "solid-js";
import styles from "./Page.module.scss";

export default function Page(props: PropsWithChildren) {
  return (
    <div class={styles.container}>
      <div class={styles.inner}>{props.children}</div>
    </div>
  );
}
