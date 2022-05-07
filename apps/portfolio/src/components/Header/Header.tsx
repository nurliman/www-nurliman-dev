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
import photoOfMeWebp from "assets/me.webp";

const Header = () => {
  const dispatch = useAppDispatch();
  const meState = useAppSelector((s) => s.me);
  const headerShow = useAppSelector((s) => s.header.show);
  const isSmall = useMedia({ maxWidth: 1024 }, true);

  const hideMenu = useCallback(() => {
    dispatch(setShow(false));
  }, []);

  const getCurrentYear = useCallback(() => {
    return dayjs().year();
  }, []);

  const [currentYear, setCurrentYear] = useState(getCurrentYear());

  useEffect(() => {
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  }, []);

  useEffect(() => {
    setCurrentYear(getCurrentYear());
  }, [getCurrentYear]);

  return (
    <header
      className={clsx({
        [styles.container]: true,
        [styles.containerHide]: isSmall && !headerShow,
      })}
    >
      <div>
        <div className={styles.photo}>
          <picture>
            <source srcSet={photoOfMeWebp.src} type="image/webp" />
            <source srcSet={photoOfMe.src} type="image/jpeg" />
            <img src={photoOfMe.src} alt={meState.name} width="180" height="180" />
          </picture>
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
