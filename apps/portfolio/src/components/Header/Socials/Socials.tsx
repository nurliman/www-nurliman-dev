import { useMemo } from "react";
import { useAppSelector } from "store";
import styles from "./Socials.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  const myPhone = useAppSelector((s) => s.me.phone);

  const MY_SOCIALS = useMemo(() => {
    return [
      { name: "github", link: "https://github.com/nurliman", icon: faGithub },
      { name: "linkedin", link: "https://www.linkedin.com/in/nurliman", icon: faLinkedinIn },
      { name: "whatsapp", link: `https://wa.me/${myPhone?.value}`, icon: faWhatsapp },
    ];
  }, [myPhone]);

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
