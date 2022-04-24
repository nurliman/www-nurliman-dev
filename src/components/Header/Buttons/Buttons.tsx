import {} from "solid-js";
import styles from "./Buttons.module.scss";

export default function Buttons() {
  return (
    <div className={styles.buttons}>
      <a href="#" target="_blank" className="btn btn-primary">
        Download CV
      </a>
    </div>
  );
}
