import {} from "solid-js";
import Section from "@/components/Section";
// import styles from "./Contact.module.scss";

export default function ContactSection() {
  return (
    <Section sectionId="contact">
      <div class="section-content">
        <div class="page-title">
          <h2>Contact</h2>
        </div>

        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <div class="lm-info-block gray-default">
              <i class="lnr lnr-map-marker"></i>
              <h4>San Francisco</h4>
              <span class="lm-info-block-value"></span>
              <span class="lm-info-block-text"></span>
            </div>

            <div class="lm-info-block gray-default">
              <i class="lnr lnr-phone-handset"></i>
              <h4>415-832-2000</h4>
              <span class="lm-info-block-value"></span>
              <span class="lm-info-block-text"></span>
            </div>

            <div class="lm-info-block gray-default">
              <i class="lnr lnr-envelope"></i>
              <h4>alex@example.com</h4>
              <span class="lm-info-block-value"></span>
              <span class="lm-info-block-text"></span>
            </div>

            <div class="lm-info-block gray-default">
              <i class="lnr lnr-checkmark-circle"></i>
              <h4>Freelance Available</h4>
              <span class="lm-info-block-value"></span>
              <span class="lm-info-block-text"></span>
            </div>
          </div>

          <div class="col-xs-12 col-sm-8">
            <div id="map" class="map"></div>
            <div class="block-title">
              <h3>
                How Can I <span>Help You?</span>
              </h3>
            </div>

            <form
              id="contact_form"
              class="contact-form"
              action="contact_form/contact_form.php"
              method="post"
            >
              <div class="messages"></div>

              <div class="controls two-columns">
                <div class="fields clearfix">
                  <div class="left-column">
                    <div class="form-group form-group-with-icon">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder=""
                        required
                        data-error="Name is required."
                      />
                      <label>Full Name</label>
                      <div class="form-control-border"></div>
                      <div class="help-block with-errors"></div>
                    </div>

                    <div class="form-group form-group-with-icon">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        class="form-control"
                        placeholder=""
                        required
                        data-error="Valid email is required."
                      />
                      <label>Email Address</label>
                      <div class="form-control-border"></div>
                      <div class="help-block with-errors"></div>
                    </div>

                    <div class="form-group form-group-with-icon">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        class="form-control"
                        placeholder=""
                        required
                        data-error="Subject is required."
                      />
                      <label>Subject</label>
                      <div class="form-control-border"></div>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="right-column">
                    <div class="form-group form-group-with-icon">
                      <textarea
                        id="form_message"
                        name="message"
                        class="form-control"
                        placeholder=""
                        rows="7"
                        required
                        data-error="Please, leave me a message."
                      ></textarea>
                      <label>Message</label>
                      <div class="form-control-border"></div>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                </div>

                <div
                  class="g-recaptcha"
                  data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
                  data-theme="dark"
                ></div>

                <input type="submit" class="button btn-send" value="Send message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
