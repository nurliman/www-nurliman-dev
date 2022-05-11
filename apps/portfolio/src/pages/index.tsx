import { ReactElement } from "react";
import { NextSeo } from "next-seo";
import MainLayout from "components/Layouts/MainLayout";
import HomeSection from "components/Sections/Home";
import styles from "styles/HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <NextSeo title="Home" canonical="https://nurliman.dev/" />
      <HomeSection />
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => (
  <MainLayout contentInnerClassName={styles.centered}>{page}</MainLayout>
);

export default HomePage;
