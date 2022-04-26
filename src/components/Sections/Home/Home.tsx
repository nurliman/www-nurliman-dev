import {} from "solid-js";
import Section from "@/components/Section";
import styles from "./Home.module.scss";

export default function HomeSection() {
  return (
    <Section sectionId="home">
      <div class="section-content vcentered">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="title-block">
              <h2>Alex Smith</h2>
              <div class="owl-carousel text-rotation">
                <div class="item">
                  <div class="sp-subtitle">Web Designer</div>
                </div>
                <div class="item">
                  <div class="sp-subtitle">Frontend-developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
