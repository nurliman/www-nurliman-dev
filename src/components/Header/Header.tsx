import { Component, createSignal, onMount, onCleanup } from "solid-js";
import createMediaQuery from "@solid-primitives/media";
import dayjs from "dayjs";
import Menu from "./Menu";
import Socials from "./Socials";
import Buttons from "./Buttons";
import Copyrights from "./Copyrights";
import { meStore } from "@/stores/me";
import { headerStore, setShow } from "@/stores/header";
import styles from "./Header.module.scss";
import photoOfMe from "@/assets/me.jpg";

const Header: Component = () => {
  const [currentYear] = createSignal(dayjs().year());
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
      classList={{
        [styles.container]: true,
        [styles.containerHide]: isSmall() && !headerStore.show,
      }}
    >
      <div>
        <div class={styles.photo}>
          <img src={photoOfMe} alt={meStore.name} />
        </div>
        <div class={styles.titles}>
          <h2>{meStore.name}</h2>
          <h4>{meStore.titles[0]}</h4>
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
