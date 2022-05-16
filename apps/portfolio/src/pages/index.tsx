import { ReactElement, useEffect, useRef, useState } from "react";
import { NextSeo } from "next-seo";
import clsx from "clsx";
import MainLayout from "components/Layouts/MainLayout";
import { useKeenSlider } from "keen-slider/react";
import { useAppSelector } from "store";
import styles from "styles/HomePage.module.scss";

const HomePage = () => {
  const timeout = useRef<NodeJS.Timeout>();
  const meState = useAppSelector((s) => s.me);
  const [pause, togglePause] = useState(false);
  const [opacities, setOpacities] = useState<number[]>([]);

  const [slider, sliderRef] = useKeenSlider(
    {
      loop: true,
      drag: false,
      defaultAnimation: {
        duration: 2000,
      },
      slides: meState.titles.length,
      detailsChanged: (s) => {
        const newOpacities = s.track.details.slides.map((slide) => slide.portion);
        setOpacities(newOpacities);
      },
      renderMode: "custom",
    },
    [
      (slider) => {
        const nextTimeout = () => {
          if (pause) return;
          clearTimeout(timeout.current);
          timeout.current = setTimeout(() => {
            slider.next();
          }, 1500);
        };

        slider.on("created", nextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

  useEffect(() => {
    !pause && togglePause(true);
    sliderRef.current.update();

    return () => {
      pause && togglePause(false);
      clearTimeout(timeout.current);
    };
  }, []);

  return (
    <>
      <NextSeo title="Home" canonical="https://nurliman.dev/" />
      <div className={styles.titleBlock}>
        <h2>{meState.name}</h2>
        <div ref={slider} className={styles.fader}>
          {meState.titles.map((title, idx) => (
            <div
              key={title}
              className={clsx(styles.faderSlide, "keen-slider__slide")}
              style={{ opacity: opacities[idx] }}
            >
              <div className={styles.subtitle}>{title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => (
  <MainLayout contentInnerClassName={styles.centered}>{page}</MainLayout>
);

export default HomePage;
