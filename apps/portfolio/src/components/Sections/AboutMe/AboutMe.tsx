import Section from "components/Section";
import PageTitle from "components/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./AboutMe.module.scss";

export default function AboutMeSection() {
  return (
    <Section sectionId="about-me">
      <PageTitle>
        About <span>Me</span>
      </PageTitle>

      <div className="row">
        <div className="col-xs-12 col-sm-7">
          <p>
            Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue elit vel odio
            suscipit, sit amet tempor nisl imperdiet. Quisque ex justo, faucibus ut mi in,
            condimentum finibus dolor. Aliquam vitae hendrerit dolor, eget imperdiet mauris.
            Maecenas et ante id ipsum condimentum dictum et vel massa. Ut in imperdiet dolor, vel
            consectetur dui.
          </p>
        </div>

        <div className="col-xs-12 col-sm-5">
          <div className="info-list">
            <ul>
              <li>
                <span className="title">Age</span>
                <span className="value">32</span>
              </li>

              <li>
                <span className="title">Residence</span>
                <span className="value">USA</span>
              </li>

              <li>
                <span className="title">Address</span>
                <span className="value">88 Some Street, Some Town</span>
              </li>

              <li>
                <span className="title">e-mail</span>
                <span className="value">email@example.com</span>
              </li>

              <li>
                <span className="title">Phone</span>
                <span className="value">+0123 123 456 789</span>
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

      <div className="white-space-30"></div>

      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>Testimonials</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="testimonials owl-carousel">
            <div className="testimonial">
              <div className="img">
                <img src="img/testimonials/testimonial-1.jpg" alt="Alex Smith" />
              </div>
              <div className="text">
                <p>
                  Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla
                  condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula
                  pellentesque, at vehicula dui ultrices.
                </p>
              </div>

              <div className="author-info">
                <h4 className="author">Julia Hickman</h4>
                <h5 className="company">Omni Source</h5>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faQuoteRight} height="30" width="30" />
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="img">
                <img src="img/testimonials/testimonial-2.jpg" alt="Alex Smith" />
              </div>
              <div className="text">
                <p>
                  Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla
                  condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula
                  pellentesque, at vehicula dui ultrices.
                </p>
              </div>

              <div className="author-info">
                <h4 className="author">Robert Watkins</h4>
                <h5 className="company">Endicott Shoes</h5>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faQuoteRight} height="30" width="30" />
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="img">
                <img src="img/testimonials/testimonial-3.jpg" alt="Alex Smith" />
              </div>
              <div className="text">
                <p>
                  Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla
                  condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula
                  pellentesque, at vehicula dui ultrices.
                </p>
              </div>

              <div className="author-info">
                <h4 className="author">Kristin Carroll</h4>
                <h5 className="company">Helping Hand</h5>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faQuoteRight} height="30" width="30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="white-space-50"></div>

      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>Cilents</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="clients owl-carousel">
            <div className="client-block">
              <a href="#" target="_blank" title="Logo">
                <img src="img/clients/client-1.png" alt="Logo" />
              </a>
            </div>

            <div className="client-block">
              <a href="#" target="_blank" title="Logo">
                <img src="img/clients/client-2.png" alt="Logo" />
              </a>
            </div>

            <div className="client-block">
              <a href="#" target="_blank" title="Logo">
                <img src="img/clients/client-3.png" alt="Logo" />
              </a>
            </div>

            <div className="client-block">
              <a href="#" target="_blank" title="Logo">
                <img src="img/clients/client-4.png" alt="Logo" />
              </a>
            </div>

            <div className="client-block">
              <a href="#" target="_blank" title="Logo">
                <img src="img/clients/client-5.png" alt="Logo" />
              </a>
            </div>

            <div className="client-block">
              <a href="#" target="_blank" title="Logo">
                <img src="img/clients/client-6.png" alt="Logo" />
              </a>
            </div>

            <div className="client-block">
              <a href="#" target="_blank" title="Logo">
                <img src="img/clients/client-7.png" alt="Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="white-space-50"></div>

      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>Pricing</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className=" col-xs-12 col-sm-12 ">
          <div className="fw-pricing clearfix row">
            <div className="fw-package-wrap col-md-6 ">
              <div className="fw-package">
                <div className="fw-heading-row">
                  <span>Silver</span>
                </div>

                <div className="fw-pricing-row">
                  <span>$64</span>
                  <small>per month</small>
                </div>

                <div className="fw-button-row">
                  <a href="#" target="_self" className="btn btn-secondary">
                    Free Trial
                  </a>
                </div>

                <div className="fw-default-row">Lorem ipsum dolor</div>
                <div className="fw-default-row">Pellentesque scelerisque</div>
                <div className="fw-default-row">Morbi eu sagittis</div>
              </div>
            </div>

            <div className="fw-package-wrap col-md-6 highlight-col ">
              <div className="fw-package">
                <div className="fw-heading-row">
                  <span>Gold</span>
                </div>

                <div className="fw-pricing-row">
                  <span>$128</span>
                  <small>per month</small>
                </div>

                <div className="fw-button-row">
                  <a href="#" target="_self" className="btn btn-primary">
                    Free Trial
                  </a>
                </div>

                <div className="fw-default-row">Lorem ipsum dolor</div>
                <div className="fw-default-row">Pellentesque scelerisque</div>
                <div className="fw-default-row">Morbi eu sagittis</div>
                <div className="fw-default-row">Donec non diam</div>
                <div className="fw-default-row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="white-space-50"></div>

      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>
              Fun <span>Facts</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <div className="fun-fact gray-default">
            <i className="lnr lnr-heart"></i>
            <h4>Happy Clients</h4>
            <span className="fun-fact-block-value">578</span>
            <span className="fun-fact-block-text"></span>
          </div>
        </div>

        <div className="col-xs-12 col-sm-4">
          <div className="fun-fact gray-default">
            <i className="lnr lnr-clock"></i>
            <h4>Working Hours</h4>
            <span className="fun-fact-block-value">4,780</span>
            <span className="fun-fact-block-text"></span>
          </div>
        </div>

        <div className="col-xs-12 col-sm-4 ">
          <div className="fun-fact gray-default">
            <i className="lnr lnr-star"></i>
            <h4>Awards Won</h4>
            <span className="fun-fact-block-value">15</span>
            <span className="fun-fact-block-text"></span>
          </div>
        </div>
      </div>
    </Section>
  );
}
