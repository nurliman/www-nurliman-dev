import { ReactElement } from "react";
import { NextSeo } from "next-seo";
import MainLayout from "components/Layouts/MainLayout";
import Portfolio from "components/Sections/Portfolio";

const PortfolioPage = () => {
  return (
    <>
      <NextSeo
        title="Nurliman Diara | Web Developer"
        description="This is Resume Website of Nurliman Diara Aria."
        canonical="https://nurliman.dev/portfolio"
      />
      <Portfolio />
    </>
  );
};

PortfolioPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default PortfolioPage;
