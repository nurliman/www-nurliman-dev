import { Component, createSignal, onMount, onCleanup } from "solid-js";
import createMediaQuery from "@solid-primitives/media";
import { useStore } from "@nanostores/solid";
import clsx from "clsx";
import dayjs from "dayjs";
import Menu from "./Menu";
import Socials from "./Socials";
import Buttons from "./Buttons";
import Copyrights from "./Copyrights";
import { headerStore, setShow } from "@/stores/header";
import styles from "./Header.module.scss";
import photoOfMe from "@/assets/me.jpg";

type Props = {
  name?: string;
  title?: string;
};

const Header: Component<Props> = ({ name = "No Name!", title = "No Title!" }) => {
  const [currentYear] = createSignal(dayjs().year());
  const headerState = useStore(headerStore);
  const isSmall = createMediaQuery("(max-width: 1024px)");

  function hideMenu() {
    setShow(false);
  }

  onMount(() => {
    window?.addEventListener("resize", hideMenu, { passive: true });
  });

  onCleanup(() => {
    window?.removeEventListener("resize", hideMenu);
  });

  return (
    <header
      className={clsx({
        [styles.container]: true,
        [styles.containerHide]: isSmall() && !headerState().show,
      })}
    >
      <div>
        <div className={styles.photo}>
          <img src={photoOfMe} alt={name} />
        </div>
        <div className={styles.titles}>
          <h2>{name}</h2>
          <h4>{title}</h4>
        </div>
      </div>
      <Menu />
      <Socials />
      <Buttons />
      <Copyrights>© {currentYear()} All rights reserved.</Copyrights>
    </header>
  );
};

export default Header;
