import {} from "solid-js";
import styles from "./Socials.module.scss";

export default function Socials() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a href="#" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
