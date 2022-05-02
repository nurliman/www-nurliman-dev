import Section from "components/Section";
import PageTitle from "components/PageTitle";
// import styles from "./Resume.module.scss";

export default function ResumeSection() {
  return (
    <Section sectionId="resume">
      <PageTitle>Resume</PageTitle>

      <div className="row">
        <div className="col-xs-12 col-sm-7">
          <div className="block-title">
            <h3>Education</h3>
          </div>

          <div className="timeline timeline-second-style clearfix">
            <div className="timeline-item clearfix">
              <div className="left-part">
                <h5 className="item-period">2008</h5>
                <span className="item-company">University of Studies</span>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h4 className="item-title">Frontend Development</h4>
                <p>
                  Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                  Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.
                </p>
              </div>
            </div>

            <div className="timeline-item clearfix">
              <div className="left-part">
                <h5 className="item-period">2007</h5>
                <span className="item-company">University of Studies</span>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h4 className="item-title">Graphic Design</h4>
                <p>
                  Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat
                  risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.
                </p>
              </div>
            </div>
          </div>

          <div className="white-space-50"></div>

          <div className="block-title">
            <h3>Experience</h3>
          </div>

          <div className="timeline timeline-second-style clearfix">
            <div className="timeline-item clearfix">
              <div className="left-part">
                <h5 className="item-period">2016 - Current</h5>
                <span className="item-company">Google</span>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h4 className="item-title">Lead Ui/Ux Designer</h4>
                <p>
                  Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus
                  eleifend tristique posuere. Sed vitae dui nec magna.
                </p>
              </div>
            </div>

            <div className="timeline-item clearfix">
              <div className="left-part">
                <h5 className="item-period">2013 - 2016</h5>
                <span className="item-company">Adobe</span>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h4 className="item-title">Senior Ui/Ux Designer</h4>
                <p>
                  Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla
                  tristique, ornare felis id, congue libero. Nam volutpat euismod quam.
                </p>
              </div>
            </div>

            <div className="timeline-item clearfix">
              <div className="left-part">
                <h5 className="item-period">2011 - 2013</h5>
                <span className="item-company">Google</span>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h4 className="item-title">Junior Ui/Ux Designer</h4>
                <p>
                  Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu, congue vitae nunc
                  ac, sodales ultricies diam. Nullam justo leo, tincidunt sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-5">
          <div className="block-title">
            <h3>
              Design <span>Skills</span>
            </h3>
          </div>

          <div className="skills-info skills-second-style">
            <div className="skill clearfix">
              <h4>Web Design</h4>
              <div className="skill-value">95%</div>
            </div>
            <div className="skill-container skill-1">
              <div className="skill-percentage"></div>
            </div>

            <div className="skill clearfix">
              <h4>Print Design</h4>
              <div className="skill-value">65%</div>
            </div>
            <div className="skill-container skill-2">
              <div className="skill-percentage"></div>
            </div>

            <div className="skill clearfix">
              <h4>Logo Design</h4>
              <div className="skill-value">80%</div>
            </div>
            <div className="skill-container skill-3">
              <div className="skill-percentage"></div>
            </div>

            <div className="skill clearfix">
              <h4>Graphic Design</h4>
              <div className="skill-value">90%</div>
            </div>
            <div className="skill-container skill-4">
              <div className="skill-percentage"></div>
            </div>
          </div>

          <div className="white-space-10"></div>

          <div className="block-title">
            <h3>
              Coding <span>Skills</span>
            </h3>
          </div>

          <div className="skills-info skills-second-style">
            <div className="skill clearfix">
              <h4>JavaScript</h4>
              <div className="skill-value">95%</div>
            </div>
            <div className="skill-container skill-5">
              <div className="skill-percentage"></div>
            </div>

            <div className="skill clearfix">
              <h4>PHP</h4>
              <div className="skill-value">85%</div>
            </div>
            <div className="skill-container skill-6">
              <div className="skill-percentage"></div>
            </div>

            <div className="skill clearfix">
              <h4>HTML/CSS</h4>
              <div className="skill-value">100%</div>
            </div>
            <div className="skill-container skill-7">
              <div className="skill-percentage"></div>
            </div>

            <div className="skill clearfix">
              <h4>Smarty/Twig</h4>
              <div className="skill-value">75%</div>
            </div>
            <div className="skill-container skill-8">
              <div className="skill-percentage"></div>
            </div>

            <div className="skill clearfix">
              <h4>Perl</h4>
              <div className="skill-value">90%</div>
            </div>
            <div className="skill-container skill-9">
              <div className="skill-percentage"></div>
            </div>
          </div>

          <div className="white-space-10"></div>

          <div className="block-title">
            <h3>Knowledges</h3>
          </div>

          <ul className="knowledges">
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

      <div className="white-space-50"></div>

      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>Certificates</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div className="certificate-item clearfix">
            <div className="certi-logo">
              <img src="img/clients/client-1.png" alt="logo" />
            </div>

            <div className="certi-content">
              <div className="certi-title">
                <h4>Psyhology of Intertnation Design</h4>
              </div>
              <div className="certi-id">
                <span>Membership ID: XXXX</span>
              </div>
              <div className="certi-date">
                <span>19 April 2018</span>
              </div>
              <div className="certi-company">
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6">
          <div className="certificate-item clearfix">
            <div className="certi-logo">
              <img src="img/clients/client-1.png" alt="logo" />
            </div>

            <div className="certi-content">
              <div className="certi-title">
                <h4>Psyhology of Intertnation Design</h4>
              </div>
              <div className="certi-id">
                <span>Membership ID: XXXX</span>
              </div>
              <div className="certi-date">
                <span>19 April 2018</span>
              </div>
              <div className="certi-company">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
