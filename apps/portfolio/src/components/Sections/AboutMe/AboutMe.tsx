import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "store";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Section from "components/Section";
import PageTitle from "components/PageTitle";
// import styles from "./AboutMe.module.scss";

export default function AboutMeSection() {
  const myAddress = useAppSelector((s) => s.me.address);
  const myEmail = useAppSelector((s) => s.me.email);
  const myPhone = useAppSelector((s) => s.me.phone);

  const calculateMyAge = useCallback(() => {
    dayjs.extend(relativeTime);
    const dob = dayjs("06-02-1998", "DD-MM-YYYY");
    const age = dayjs().from(dob, true);
    return parseInt(age);
  }, []);

  const [myAge, setMyAge] = useState(calculateMyAge());

  useEffect(() => {
    setMyAge(calculateMyAge());
  }, [calculateMyAge]);

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
                <span className="value">{myAddress}</span>
              </li>

              <li>
                <span className="title">e-mail</span>
                <span className="value">{myEmail}</span>
              </li>

              <li>
                <span className="title">Phone</span>
                <span className="value">{myPhone.display}</span>
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
                  <i className="lnr lnr-laptop-phone"></i>
                </div>
                <div className="ci-text">
                  <h4>Front-End Development</h4>
                  <p>
                    Using modern JavaScript/TypeScript to create blazing fast User Interface with
                    all cross-browser and multi-platform compatibility optimized.
                  </p>
                </div>
              </div>
              <div className="info-block-w-icon">
                <div className="ci-icon">
                  <i className="lnr lnr-cog"></i>
                </div>
                <div className="ci-text">
                  <h4>Back-End Development</h4>
                  <p>
                    Writing maintainable, testable, clean and efficient Web Backend using various
                    languages and frameworks with performance in mind.
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
                  <i className="lnr lnr-cloud-upload"></i>
                </div>
                <div className="ci-text">
                  <h4>Cloud Development</h4>
                  <p>
                    Build and Manage VMs, Cloud Databases, Cloud Computing, Cloud Storage, Cloud
                    Network, Load Balancers etc with Google Cloud Platform.
                  </p>
                </div>
              </div>
              <div className="info-block-w-icon">
                <div className="ci-icon">
                  <i className="lnr lnr-diamond"></i>
                </div>
                <div className="ci-text">
                  <h4>Graphic design</h4>
                  <p>
                    Creating user flows, wireframes, prototypes and mockups. Translating
                    requirements into style guides, design systems, design patterns and attractive
                    user interfaces.
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
