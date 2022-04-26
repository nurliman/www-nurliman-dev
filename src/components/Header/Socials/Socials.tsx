import {} from "solid-js";
import styles from "./Socials.module.scss";

export default function Socials() {
  return (
    <div class={styles.container}>
      <ul>
        <li>
          <a href="#" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
