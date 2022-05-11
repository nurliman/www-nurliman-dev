import { ReactElement } from "react";
import { NextSeo } from "next-seo";
import MainLayout from "components/Layouts/MainLayout";
import Resume from "components/Sections/Resume";

const ResumePage = () => {
  return (
    <>
      <NextSeo title="Resume" canonical="https://nurliman.dev/resume" />
      <Resume />
    </>
  );
};

ResumePage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default ResumePage;
