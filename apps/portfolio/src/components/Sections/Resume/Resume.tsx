import Section from "components/Section";
import PageTitle from "components/PageTitle";
import BlockTitle from "components/BlockTitle";
import Timeline from "components/Timeline";
import ProgressBar from "components/ProgressBar";
import styles from "./Resume.module.scss";

export default function ResumeSection() {
  return (
    <Section sectionId="resume">
      <PageTitle>Resume</PageTitle>

      <div className={styles.resumeGrid}>
        <div className={styles.resumeGridColLeft}>
          <div className={styles.resumeGridCell}>
            <BlockTitle>Education</BlockTitle>

            <Timeline>
              <Timeline.Item
                period="2008"
                company="University of Studies"
                title="Frontend Development"
                text={
                  <>
                    Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam
                    sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.
                  </>
                }
              />
              <Timeline.Item
                period="2007"
                company="University of Studies"
                title="Graphic Design"
                text={
                  <>
                    Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat
                    risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.
                  </>
                }
              />
            </Timeline>
          </div>

          <div className={styles.resumeGridCell}>
            <BlockTitle>Experience</BlockTitle>

            <Timeline>
              <Timeline.Item
                period="2016 - Current"
                company="Google"
                title="Lead Ui/Ux Designer"
                text={
                  <>
                    Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis.
                    Phasellus eleifend tristique posuere. Sed vitae dui nec magna.
                  </>
                }
              />
              <Timeline.Item
                period="2013 - 2016"
                company="Adobe"
                title="Senior Ui/Ux Designer"
                text={
                  <>
                    Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla
                    tristique, ornare felis id, congue libero. Nam volutpat euismod quam.
                  </>
                }
              />
              <Timeline.Item
                period="2011 - 2013"
                company="Google"
                title="Junior Ui/Ux Designer"
                text={
                  <>
                    Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu, congue vitae
                    nunc ac, sodales ultricies diam. Nullam justo leo, tincidunt sit amet.
                  </>
                }
              />
            </Timeline>
          </div>
        </div>

        <div className={styles.resumeGridColRight}>
          <div className={styles.resumeGridCell}>
            <BlockTitle>
              Design <span>Skills</span>
            </BlockTitle>

            <div className={styles.skills}>
              <div className={styles.skillsItemTop}>
                <h4>Web Design</h4>
                <div className={styles.skillsItemValue}>95%</div>
              </div>
              <ProgressBar progress={0.95} />

              <div className={styles.skillsItemTop}>
                <h4>Print Design</h4>
                <div className={styles.skillsItemValue}>65%</div>
              </div>
              <ProgressBar progress={0.65} />

              <div className={styles.skillsItemTop}>
                <h4>Logo Design</h4>
                <div className={styles.skillsItemValue}>80%</div>
              </div>
              <ProgressBar progress={0.8} />

              <div className={styles.skillsItemTop}>
                <h4>Graphic Design</h4>
                <div className={styles.skillsItemValue}>90%</div>
              </div>
              <ProgressBar progress={0.9} />
            </div>
          </div>

          <div className={styles.resumeGridCell}>
            <BlockTitle>
              Coding <span>Skills</span>
            </BlockTitle>

            <div className={styles.skills}>
              <div className={styles.skillsItemTop}>
                <h4>JavaScript</h4>
                <div className={styles.skillsItemValue}>95%</div>
              </div>
              <ProgressBar progress={0.95} />

              <div className={styles.skillsItemTop}>
                <h4>PHP</h4>
                <div className={styles.skillsItemValue}>85%</div>
              </div>
              <ProgressBar progress={0.85} />

              <div className={styles.skillsItemTop}>
                <h4>HTML/CSS</h4>
                <div className={styles.skillsItemValue}>100%</div>
              </div>
              <ProgressBar progress={1} />

              <div className={styles.skillsItemTop}>
                <h4>Smarty/Twig</h4>
                <div className={styles.skillsItemValue}>75%</div>
              </div>
              <ProgressBar progress={0.75} />

              <div className={styles.skillsItemTop}>
                <h4>Perl</h4>
                <div className={styles.skillsItemValue}>90%</div>
              </div>
              <ProgressBar progress={0.9} />
            </div>
          </div>

          <div className={styles.resumeGridCell}>
            <BlockTitle>Knowledges</BlockTitle>

            <ul className={styles.knowledges}>
              <li>Marketing</li>
              <li>Print</li>
              <li>Digital Design</li>
              <li>Social Media</li>
              <li>Time Management</li>
              <li>Communication</li>
              <li>Problem-Solving</li>
              <li>Social Networking</li>
              <li>Flexibility</li>
            </ul>
          </div>
        </div>
      </div>

      <BlockTitle>Certificates</BlockTitle>

      <div className={styles.certificates}>
        <div className={styles.certificate}>
          <div className={styles.certificateLogo}>
            <img loading="lazy" src="img/clients/client-1.png" alt="logo" />
          </div>

          <div className={styles.certificateContent}>
            <div className={styles.certificateTitle}>
              <h4>Psyhology of Intertnation Design</h4>
            </div>
            <div className={styles.certificateId}>
              <span>Membership ID: XXXX</span>
            </div>
            <div className={styles.certificateDate}>
              <span>19 April 2018</span>
            </div>
          </div>
        </div>
        <div className={styles.certificate}>
          <div className={styles.certificateLogo}>
            <img loading="lazy" src="img/clients/client-1.png" alt="logo" />
          </div>

          <div className={styles.certificateContent}>
            <div className={styles.certificateTitle}>
              <h4>Psyhology of Intertnation Design</h4>
            </div>
            <div className={styles.certificateId}>
              <span>Membership ID: XXXX</span>
            </div>
            <div className={styles.certificateDate}>
              <span>19 April 2018</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
