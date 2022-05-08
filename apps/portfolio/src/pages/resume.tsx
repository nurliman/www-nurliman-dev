import { ReactElement } from "react";
import { NextSeo } from "next-seo";
import MainLayout from "components/Layouts/MainLayout";
import Resume from "components/Sections/Resume";

const ResumePage = () => {
  return (
    <>
      <NextSeo
        title="Nurliman Diara | Web Developer"
        description="This is Resume Website of Nurliman Diara Aria."
        canonical="https://nurliman.dev/resume"
      />
      <Resume />
    </>
  );
};

ResumePage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default ResumePage;
