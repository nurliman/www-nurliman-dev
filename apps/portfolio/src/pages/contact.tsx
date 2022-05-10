import { ReactElement } from "react";
import { NextSeo } from "next-seo";
import MainLayout from "components/Layouts/MainLayout";
import Contact from "components/Sections/Contact";

const ContactPage = () => {
  return (
    <>
      <NextSeo title="Contact" canonical="https://nurliman.dev/contact" />
      <Contact />
    </>
  );
};

ContactPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default ContactPage;
