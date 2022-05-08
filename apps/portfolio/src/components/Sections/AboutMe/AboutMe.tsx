import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "store";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PageTitle from "components/PageTitle";
import BlockTitle from "components/BlockTitle";
import Space from "components/Space";
import styles from "./AboutMe.module.scss";

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
    <>
      <PageTitle>
        About <span>Me</span>
      </PageTitle>

      <div className={styles.summary}>
        <div className={styles.summaryText}>
          <p>
            Prolific Javascript/Typescript programmer with 4+ years of experience working as a Web
            Developer. Capable of working with a variety of technology, from Backend, Frontend and
            even DevOps Technology. Seeking employment as a Programmer at any technology-based
            company. Bringing exceptional skills in designing, coding, testing, and implementing
            customizations to exceed customer expectations. Also coming with hunger to learning new
            skills.
          </p>
        </div>

        <div className={styles.summaryInfo}>
          <ul>
            <li>
              <span className={styles.summaryInfoTitle}>Age</span>
              <span>{myAge}</span>
            </li>

            <li>
              <span className={styles.summaryInfoTitle}>Residence</span>
              <span>Indonesia</span>
            </li>

            <li>
              <span className={styles.summaryInfoTitle}>Address</span>
              <span>{myAddress}</span>
            </li>

            <li>
              <span className={styles.summaryInfoTitle}>e-mail</span>
              <span>{myEmail}</span>
            </li>

            <li>
              <span className={styles.summaryInfoTitle}>Phone</span>
              <span>{myPhone.display}</span>
            </li>
          </ul>
        </div>
      </div>

      <Space height={50} />

      <BlockTitle>
        What <span>I Do</span>
      </BlockTitle>

      <div className={styles.whatIDo}>
        <div>
          <div className={styles.whatIDoIcon}>
            <i className="lnr lnr-laptop-phone"></i>
          </div>
          <div className={styles.whatIDoText}>
            <h4>Front-End Development</h4>
            <p>
              Using modern JavaScript/TypeScript to create blazing fast User Interface with all
              cross-browser and multi-platform compatibility optimized.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.whatIDoIcon}>
            <i className="lnr lnr-cog"></i>
          </div>
          <div className={styles.whatIDoText}>
            <h4>Back-End Development</h4>
            <p>
              Writing maintainable, testable, clean and efficient Web Backend using various
              languages and frameworks with performance in mind.
            </p>
          </div>
        </div>

        <div>
          <div className={styles.whatIDoIcon}>
            <i className="lnr lnr-cloud-upload"></i>
          </div>
          <div className={styles.whatIDoText}>
            <h4>Cloud Development</h4>
            <p>
              Build and Manage VMs, Cloud Databases, Cloud Computing, Cloud Storage, Cloud Network,
              Load Balancers etc with Google Cloud Platform.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.whatIDoIcon}>
            <i className="lnr lnr-diamond"></i>
          </div>
          <div className={styles.whatIDoText}>
            <h4>Graphic design</h4>
            <p>
              Creating user flows, wireframes, prototypes and mockups. Translating requirements into
              style guides, design systems, design patterns and attractive user interfaces.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
