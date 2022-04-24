import { Component, For } from "solid-js";
import { useStore } from "@nanostores/solid";
import clsx from "clsx";
import { sectionsStore } from "@/stores/sections";
import styles from "./Content.module.scss";

const Content: Component = () => {
  const sectionsState = useStore(sectionsStore);

  return (
    <div class={styles.container}>
      <div id="animated-sections" class={styles.inner}>
        <For
          each={sectionsState().list}
          children={(section) => (
            <section
              data-id={section.id}
              className={clsx({
                [styles.section]: true,
                [styles.active]: sectionsState().active === section.id,
              })}
            >
              <div className="section-content vcentered">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="title-block">
                      <h2>{section.name}</h2>
                      <div className="owl-carousel text-rotation">
                        <div className="item">
                          <div className="sp-subtitle">Web Designer</div>
                        </div>

                        <div className="item">
                          <div className="sp-subtitle">Frontend-developer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        />
      </div>
    </div>
  );
};

export default Content;
