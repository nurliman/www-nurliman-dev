import { For, createSignal, createEffect } from "solid-js";
import clsx from "clsx";
import { createSlider, autoplay } from "@/libs/slider";
import { meStore } from "@/stores/me";
import { sectionsStore } from "@/stores/sections";
import Section from "@/components/Section";
import styles from "./Home.module.scss";

export default function HomeSection() {
  const [pause, togglePause] = createSignal(false);
  const [opacities, setOpacities] = createSignal<number[]>([]);

  const [slider] = createSlider(
    {
      loop: true,
      drag: false,
      defaultAnimation: {
        duration: 2000,
      },
      slides: meStore.titles.length,
      detailsChanged: (s) => {
        const newOpacities = s.track.details.slides.map((slide) => slide.portion);
        setOpacities(newOpacities);
      },
      renderMode: "custom",
    },
    autoplay(2500, {
      pause,
      pauseOnDrag: false,
    }),
  );

  createEffect(() => {
    const isNotHome = sectionsStore.active.toLowerCase() !== "home";
    if (pause() !== isNotHome) togglePause(isNotHome);
  });

  return (
    <Section sectionId="home" innerClass={styles.centered}>
      <div class={styles.titleBlock}>
        <h2>{meStore.name}</h2>
        <div ref={slider} class={styles.fader}>
          <For each={meStore.titles}>
            {(title, idx) => (
              <div
                class={clsx(styles.faderSlide, "keen-slider__slide")}
                style={{ opacity: opacities()[idx()] }}
              >
                <div class={styles.subtitle}>{title}</div>
              </div>
            )}
          </For>
        </div>
      </div>
    </Section>
  );
}
