import { For, createSignal, onMount, onCleanup } from "solid-js";
import clsx from "clsx";
import KeenSlider from "keen-slider";
import { useStore } from "@nanostores/solid";
import { meStore } from "@/stores/me";
import Section from "@/components/Section";
import styles from "./Home.module.scss";

export default function HomeSection() {
  let fader;
  const meState = useStore(meStore);
  const [opacities, setOpacities] = createSignal<number[]>([]);

  onMount(() => {
    const slider = new KeenSlider(
      fader,
      {
        loop: true,
        drag: false,
        defaultAnimation: {
          duration: 2000,
        },
        slides: meState().titles.length,
        detailsChanged: (s) => {
          const newOpacities = s.track.details.slides.map((slide) => slide.portion);
          setOpacities(newOpacities);
        },
        renderMode: "custom",
      },
      [
        (slider) => {
          let timeout: NodeJS.Timeout;

          const nextTimeout = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
              slider.next();
            }, 2500);
          };

          slider.on("created", nextTimeout);
          slider.on("animationEnded", nextTimeout);
          slider.on("updated", nextTimeout);
        },
      ],
    );

    onCleanup(() => {
      slider.destroy();
    });
  });

  return (
    <Section sectionId="home">
      <div class="section-content vcentered">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class={styles.titleBlock}>
              <h2>{meState().name}</h2>
              <div ref={fader} class={styles.fader}>
                <For each={meState().titles}>
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
          </div>
        </div>
      </div>
    </Section>
  );
}
