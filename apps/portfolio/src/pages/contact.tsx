import { ReactElement } from "react";
import { NextSeo } from "next-seo";
import MainLayout from "components/Layouts/MainLayout";
import PageTitle from "components/PageTitle";
import BlockTitle from "components/BlockTitle";
import ContactForm from "components/ContactPage/ContactForm";
import styles from "styles/ContactPage.module.scss";

const ContactPage = () => {
  return (
    <>
      <NextSeo title="Contact" canonical="https://nurliman.dev/contact" />
      <PageTitle>Contact</PageTitle>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.infoBlock}>
            <i className="lnr lnr-map-marker"></i>
            <h4>San Francisco</h4>
          </div>

          <div className={styles.infoBlock}>
            <i className="lnr lnr-phone-handset"></i>
            <h4>415-832-2000</h4>
          </div>

          <div className={styles.infoBlock}>
            <i className="lnr lnr-envelope"></i>
            <h4>alex@example.com</h4>
          </div>

          <div className={styles.infoBlock}>
            <i className="lnr lnr-checkmark-circle"></i>
            <h4>Freelance Available</h4>
          </div>
        </div>

        <div className={styles.right}>
          <div id="map" className={styles.map}></div>

          <BlockTitle containerClass={styles.right}>
            How Can I <span>Help You?</span>
          </BlockTitle>

          <ContactForm />
        </div>
      </div>
    </>
  );
};

ContactPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default ContactPage;
