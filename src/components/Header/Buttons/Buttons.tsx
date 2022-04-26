import {} from "solid-js";
import styles from "./Buttons.module.scss";

export default function Buttons() {
  return (
    <div class={styles.buttons}>
      <a href="#" target="_blank" class="btn btn-primary">
        Download CV
      </a>
    </div>
  );
}
