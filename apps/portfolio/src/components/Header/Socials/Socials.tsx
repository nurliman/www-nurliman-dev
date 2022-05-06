import styles from "./Socials.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const MY_SOCIALS = [
  { name: "github", link: "https://github.com/nurliman", icon: faGithub },
  { name: "linkedin", link: "https://www.linkedin.com/in/nurliman", icon: faLinkedinIn },
  { name: "whatsapp", link: "https://wa.me/6283190455266", icon: faWhatsapp },
];

export default function Socials() {
  return (
    <div className={styles.container}>
      <ul>
        {MY_SOCIALS.map((social) => (
          <li key={social.name}>
            <a href={social.link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={social.icon} height="18" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
