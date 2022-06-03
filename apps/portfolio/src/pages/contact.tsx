import { ReactElement } from "react";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { useAppSelector } from "store";
import MainLayout from "components/Layouts/MainLayout";
import PageTitle from "components/PageTitle";
import BlockTitle from "components/BlockTitle";
import ContactForm from "components/ContactPage/ContactForm";
import Map from "components/ContactPage/Map";
import styles from "styles/ContactPage.module.scss";
import "react-toastify/dist/ReactToastify.css";

const ToastContainer = dynamic(() => import("libs/react-toastify/ToastContainer"), { ssr: false });

const ContactPage = () => {
  const myAddress = useAppSelector((s) => s.me.address);
  const myPhone = useAppSelector((s) => s.me.phone);
  const myEmail = useAppSelector((s) => s.me.email);

  return (
    <>
      <NextSeo title="Contact" canonical="https://nurliman.dev/contact" />
      <PageTitle>Contact</PageTitle>
      <div className={styles.container}>
        <Map className={styles.map} />
        <div className={styles.left}>
          <div className={styles.infoBlock}>
            <i className="lnr lnr-map-marker"></i>
            <h4>{myAddress}</h4>
          </div>

          <div className={styles.infoBlock}>
            <i className="lnr lnr-phone-handset"></i>
            <h4>{myPhone.display}</h4>
          </div>

          <div className={styles.infoBlock}>
            <i className="lnr lnr-envelope"></i>
            <h4>{myEmail}</h4>
          </div>

          <div className={styles.infoBlock}>
            <i className="lnr lnr-checkmark-circle"></i>
            <h4>Freelance Available</h4>
          </div>
        </div>

        <div className={styles.right}>
          <BlockTitle containerClass={styles.right}>
            How Can I <span>Help You?</span>
          </BlockTitle>

          <ContactForm />
        </div>
      </div>
    </>
  );
};

ContactPage.getLayout = (page: ReactElement) => (
  <>
    <MainLayout>{page}</MainLayout>
    <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
  </>
);

export default ContactPage;
