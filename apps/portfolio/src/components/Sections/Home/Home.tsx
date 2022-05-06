import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { useKeenSlider } from "keen-slider/react";
import { useAppSelector } from "store";
import Section from "components/Section";
import styles from "./Home.module.scss";

export default function HomeSection() {
  const timeout = useRef<NodeJS.Timeout>();
  const meState = useAppSelector((s) => s.me);
  const activeSection = useAppSelector((s) => s.sections.active);
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
    const isHome = activeSection.toLowerCase() === "home";

    if (isHome) {
      !pause && togglePause(true);
      sliderRef.current.update();
    } else {
      pause && togglePause(false);
      clearTimeout(timeout.current);
    }
  }, [activeSection]);

  return (
    <Section sectionId="home" innerClassName={styles.centered}>
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
    </Section>
  );
}
