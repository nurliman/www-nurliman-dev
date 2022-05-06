import { useState, useEffect, useCallback } from "react";
import useMedia from "use-media";
import { useAppDispatch, useAppSelector } from "store";
import dayjs from "dayjs";
import clsx from "clsx";
import Menu from "./Menu";
import Socials from "./Socials";
import Buttons from "./Buttons";
import Copyrights from "./Copyrights";
import { setShow } from "store/headerSlice";
import styles from "./Header.module.scss";
import photoOfMe from "assets/me.jpg";

const Header = () => {
  const dispatch = useAppDispatch();
  const [currentYear] = useState(dayjs().year());
  const meState = useAppSelector((s) => s.me);
  const headerShow = useAppSelector((s) => s.header.show);
  const isSmall = useMedia({ maxWidth: 1024 });

  const hideMenu = useCallback(() => {
    dispatch(setShow(false));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  }, []);

  return (
    <header
      className={clsx({
        [styles.container]: true,
        [styles.containerHide]: isSmall && !headerShow,
      })}
    >
      <div>
        <div className={styles.photo}>
          <img src={photoOfMe.src} alt={meState.name} width={180} />
        </div>
        <div className={styles.titles}>
          <h2>{meState.name}</h2>
          <h4>{meState.titles[0]}</h4>
        </div>
      </div>
      <Menu />
      <Socials />
      <Buttons />
      <Copyrights>© {currentYear} All rights reserved.</Copyrights>
    </header>
  );
};

export default Header;
