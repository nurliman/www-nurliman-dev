import {} from "solid-js";
import Section from "@/components/Section";
import styles from "./Home.module.scss";

export default function HomeSection() {
  return (
    <Section sectionId="home">
      <div className="section-content vcentered">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="title-block">
              <h2>Alex Smith</h2>
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
    </Section>
  );
}
