import styles from "./Socials.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} height="18" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faFacebookF} height="18" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faTwitter} height="18" />
          </a>
        </li>
      </ul>
    </div>
  );
}
