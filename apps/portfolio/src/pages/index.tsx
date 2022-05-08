import { ReactElement } from "react";
import { NextSeo } from "next-seo";
import MainLayout from "components/Layouts/MainLayout";
import HomeSection from "components/Sections/Home";

const HomePage = () => {
  return (
    <>
      <NextSeo
        title="Nurliman Diara | Web Developer"
        description="This is Resume Website of Nurliman Diara Aria."
        canonical="https://nurliman.dev/"
      />
      <HomeSection />
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default HomePage;
