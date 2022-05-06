import { useMemo } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Section from "components/Section";
import PageTitle from "components/PageTitle";
// import styles from "./AboutMe.module.scss";

export default function AboutMeSection() {
  const myAge = useMemo(() => {
    dayjs.extend(relativeTime);
    const dob = dayjs("06-02-1998", "DD-MM-YYYY");
    const age = dayjs().from(dob, true);
    return parseInt(age);
  }, []);

  return (
    <Section sectionId="about-me">
      <PageTitle>
        About <span>Me</span>
      </PageTitle>

      <div className="row">
        <div className="col-xs-12 col-sm-7">
          <p>
            Prolific Javascript/Typescript programmer with 4+ years of experience working as a Web
            Developer. Capable of working with a variety of technology, from Backend, Frontend and
            even DevOps Technology. Seeking employment as a Programmer at any technology-based
            company. Bringing exceptional skills in designing, coding, testing, and implementing
            customizations to exceed customer expectations. Also coming with hunger to learning new
            skills.
          </p>
        </div>

        <div className="col-xs-12 col-sm-5">
          <div className="info-list">
            <ul>
              <li>
                <span className="title">Age</span>
                <span className="value">{myAge}</span>
              </li>

              <li>
                <span className="title">Residence</span>
                <span className="value">Indonesia</span>
              </li>

              <li>
                <span className="title">Address</span>
                <span className="value">Ujungberung, Bandung</span>
              </li>

              <li>
                <span className="title">e-mail</span>
                <span className="value">nurlimandiara@gmail.com</span>
              </li>

              <li>
                <span className="title">Phone</span>
                <span className="value">+62 821-3325-8511</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="white-space-50"></div>

      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>
              What <span>I Do</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div className="col-inner">
            <div className="info-list-w-icon">
              <div className="info-block-w-icon">
                <div className="ci-icon">
                  <i className="lnr lnr-store"></i>
                </div>
                <div className="ci-text">
                  <h4>Ecommerce</h4>
                  <p>
                    Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum
                    massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.
                  </p>
                </div>
              </div>
              <div className="info-block-w-icon">
                <div className="ci-icon">
                  <i className="lnr lnr-laptop-phone"></i>
                </div>
                <div className="ci-text">
                  <h4>Web Design</h4>
                  <p>
                    Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum
                    massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6">
          <div className="col-inner">
            <div className="info-list-w-icon">
              <div className="info-block-w-icon">
                <div className="ci-icon">
                  <i className="lnr lnr-pencil"></i>
                </div>
                <div className="ci-text">
                  <h4>Copywriting</h4>
                  <p>
                    Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum
                    massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.
                  </p>
                </div>
              </div>
              <div className="info-block-w-icon">
                <div className="ci-icon">
                  <i className="lnr lnr-flag"></i>
                </div>
                <div className="ci-text">
                  <h4>Management</h4>
                  <p>
                    Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum
                    massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
