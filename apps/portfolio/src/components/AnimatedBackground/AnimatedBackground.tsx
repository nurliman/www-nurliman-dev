import React, { useRef, useEffect, useCallback } from "react";
import { checkWebpSupport } from "utils/checkWebpSupport";
import animatedBackgroundImgUrl from "assets/animated-background.png";
import animatedBackgroundImgUrlWebp from "assets/animated-background.webp";
import styles from "./AnimatedBackground.module.scss";

const AnimatedBackground: React.FC = () => {
  const ref = useRef<HTMLDivElement>();

  const animateBg = useCallback((e: MouseEvent) => {
    const movementStrength = 23;

    const documenWidth = Math.max(
      document.documentElement["clientWidth"],
      document.body["scrollWidth"],
      document.documentElement["scrollWidth"],

      document.body["offsetWidth"],
      document.documentElement["offsetWidth"],
    );

    const documenHeight = Math.max(
      document.documentElement["clientHeight"],
      document.body["scrollHeight"],
      document.documentElement["scrollHeight"],
      document.body["offsetHeight"],
      document.documentElement["offsetHeight"],
    );

    const height = movementStrength / documenHeight;
    const width = movementStrength / documenWidth;

    const pageX = e.pageX - documenWidth / 2;
    const pageY = e.pageY - documenHeight / 2;
    const newvalueX = width * pageX * -1;
    const newvalueY = height * pageY * -1;
    const elem = ref.current;

    elem.style.backgroundPositionX = `calc( 50% + ${newvalueX}px )`;
    elem.style.backgroundPositionY = `calc( 50% + ${newvalueY}px )`;
  }, []);

  useEffect(() => {
    document.body.addEventListener("mousemove", animateBg);

    return () => {
      document.body.removeEventListener("mousemove", animateBg);
    };
  }, [animateBg]);

  useEffect(() => {
    if (checkWebpSupport()) {
      ref.current.style["backgroundImage"] = `url(${animatedBackgroundImgUrlWebp.src})`;
    }
  }, []);

  return (
    <div
      ref={ref}
      className={styles.animBg}
      style={{ backgroundImage: `url(${animatedBackgroundImgUrl.src})` }}
    />
  );
};

export default AnimatedBackground;
