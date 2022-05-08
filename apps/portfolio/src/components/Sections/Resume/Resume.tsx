import { useAppSelector } from "store";
import PageTitle from "components/PageTitle";
import BlockTitle from "components/BlockTitle";
import Timeline from "components/Timeline";
import ProgressBar from "components/ProgressBar";
import styles from "./Resume.module.scss";
import React from "react";

export default function ResumeSection() {
  const myExperiences = useAppSelector((s) => s.me.experiences);
  const myEducations = useAppSelector((s) => s.me.educations);
  const myProgrammingSkills = useAppSelector((s) => s.me.programmingSkills);
  const myOtherSkills = useAppSelector((s) => s.me.otherSkills);
  const myKnowledges = useAppSelector((s) => s.me.knowledges);
  const myCertificates = useAppSelector((s) => s.me.certificates);

  return (
    <>
      <PageTitle>Resume</PageTitle>

      <div className={styles.resumeGrid}>
        <div className={styles.resumeGridColLeft}>
          <div className={styles.resumeGridCell}>
            <BlockTitle>Experience</BlockTitle>

            <Timeline>
              {myExperiences.map((exp) => (
                <Timeline.Item
                  key={exp.period + exp.company}
                  period={exp.period}
                  company={exp.company}
                  title={exp.title}
                  text={exp.description}
                />
              ))}
            </Timeline>
          </div>

          <div className={styles.resumeGridCell}>
            <BlockTitle>Education</BlockTitle>

            <Timeline>
              {myEducations.map((edu) => (
                <Timeline.Item
                  key={edu.period + edu.school}
                  period={edu.period}
                  company={edu.school}
                  title={edu.field}
                  text={edu.description}
                />
              ))}
            </Timeline>
          </div>
        </div>

        <div className={styles.resumeGridColRight}>
          <div className={styles.resumeGridCell}>
            <BlockTitle>
              Programming <span>Skills</span>
            </BlockTitle>

            <div className={styles.skills}>
              {myProgrammingSkills.map((skill) => (
                <React.Fragment key={skill.name}>
                  <div className={styles.skillsItemTop}>
                    <h4>{skill.name}</h4>
                    <div className={styles.skillsItemValue}>{skill.value * 100}%</div>
                  </div>
                  <ProgressBar progress={skill.value} />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className={styles.resumeGridCell}>
            <BlockTitle>
              Other <span>Skills</span>
            </BlockTitle>

            <div className={styles.skills}>
              {myOtherSkills.map((skill) => (
                <React.Fragment key={skill.name}>
                  <div className={styles.skillsItemTop}>
                    <h4>{skill.name}</h4>
                    <div className={styles.skillsItemValue}>{skill.value * 100}%</div>
                  </div>
                  <ProgressBar progress={skill.value} />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className={styles.resumeGridCell}>
            <BlockTitle>Knowledges</BlockTitle>

            <ul className={styles.knowledges}>
              {myKnowledges.map((knowledge) => (
                <li key={knowledge}>{knowledge}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <BlockTitle>Certificates</BlockTitle>

      <div className={styles.certificates}>
        {myCertificates.map((cert) => (
          <div key={cert.credential.id} className={styles.certificate}>
            <div className={styles.certificateLogo}>
              <img
                loading="lazy"
                src={cert.organization.logoUrl}
                alt={"Logo " + cert.organization.name}
              />
            </div>

            <div className={styles.certificateContent}>
              <div className={styles.certificateTitle}>
                <h4>{cert.name}</h4>
              </div>
              <div className={styles.certificateId}>
                <span>Credential ID: {cert.credential.id}</span>
              </div>
              <div className={styles.certificateDate}>
                <span>{cert.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
