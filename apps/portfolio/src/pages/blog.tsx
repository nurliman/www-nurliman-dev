import { ReactElement } from "react";
import { NextSeo } from "next-seo";
import MainLayout from "components/Layouts/MainLayout";
import Blog from "components/Sections/Blog";

const BlogPage = () => {
  return (
    <>
      <NextSeo
        title="Nurliman Diara | Web Developer"
        description="This is Resume Website of Nurliman Diara Aria."
        canonical="https://nurliman.dev/blog"
      />
      <Blog />
    </>
  );
};

BlogPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default BlogPage;
