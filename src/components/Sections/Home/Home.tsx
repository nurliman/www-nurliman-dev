import { For } from "solid-js";
import { useStore } from "@nanostores/solid";
import { meStore } from "@/stores/me";
import Section from "@/components/Section";
// import styles from "./Home.module.scss";

export default function HomeSection() {
  const meState = useStore(meStore);

  return (
    <Section sectionId="home">
      <div class="section-content vcentered">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="title-block">
              <h2>{meState().name}</h2>
              <div class="owl-carousel text-rotation">
                <For each={meState().titles}>
                  {(title) => (
                    <div class="item">
                      <div class="sp-subtitle">{title}</div>
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
