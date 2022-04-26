import {} from "solid-js";
import Section from "@/components/Section";
import styles from "./Contact.module.scss";

export default function ContactSection() {
  return (
    <Section sectionId="contact">
      <div className="section-content">
        <div className="page-title">
          <h2>Contact</h2>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="lm-info-block gray-default">
              <i className="lnr lnr-map-marker"></i>
              <h4>San Francisco</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>

            <div className="lm-info-block gray-default">
              <i className="lnr lnr-phone-handset"></i>
              <h4>415-832-2000</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>

            <div className="lm-info-block gray-default">
              <i className="lnr lnr-envelope"></i>
              <h4>alex@example.com</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>

            <div className="lm-info-block gray-default">
              <i className="lnr lnr-checkmark-circle"></i>
              <h4>Freelance Available</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>
          </div>

          <div className="col-xs-12 col-sm-8">
            <div id="map" className="map"></div>
            <div className="block-title">
              <h3>
                How Can I <span>Help You?</span>
              </h3>
            </div>

            <form
              id="contact_form"
              className="contact-form"
              action="contact_form/contact_form.php"
              method="post"
            >
              <div className="messages"></div>

              <div className="controls two-columns">
                <div className="fields clearfix">
                  <div className="left-column">
                    <div className="form-group form-group-with-icon">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder=""
                        required="required"
                        data-error="Name is required."
                      />
                      <label>Full Name</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group form-group-with-icon">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder=""
                        required="required"
                        data-error="Valid email is required."
                      />
                      <label>Email Address</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group form-group-with-icon">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder=""
                        required="required"
                        data-error="Subject is required."
                      />
                      <label>Subject</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="right-column">
                    <div className="form-group form-group-with-icon">
                      <textarea
                        id="form_message"
                        name="message"
                        className="form-control"
                        placeholder=""
                        rows="7"
                        required="required"
                        data-error="Please, leave me a message."
                      ></textarea>
                      <label>Message</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>

                <div
                  className="g-recaptcha"
                  data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
                  data-theme="dark"
                ></div>

                <input type="submit" className="button btn-send" value="Send message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
