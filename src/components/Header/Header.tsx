import { Component, createSignal, onMount, onCleanup, mergeProps } from "solid-js";
import createMediaQuery from "@solid-primitives/media";
import { useStore } from "@nanostores/solid";
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

const Header: Component<Props> = (_props) => {
  const props = mergeProps({ name: "No Name!", title: "No Title!" }, _props);
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
      classList={{
        [styles.container]: true,
        [styles.containerHide]: isSmall() && !headerState().show,
      }}
    >
      <div>
        <div class={styles.photo}>
          <img src={photoOfMe} alt={props.name} />
        </div>
        <div class={styles.titles}>
          <h2>{props.name}</h2>
          <h4>{props.title}</h4>
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
