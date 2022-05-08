import { ReactElement } from "react";
import { NextSeo } from "next-seo";
import MainLayout from "components/Layouts/MainLayout";
import AboutMe from "components/Sections/AboutMe";

const AboutMePage = () => {
  return (
    <>
      <NextSeo
        title="Nurliman Diara | Web Developer"
        description="This is Resume Website of Nurliman Diara Aria."
        canonical="https://nurliman.dev/about-me"
      />
      <AboutMe />
    </>
  );
};

AboutMePage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default AboutMePage;
