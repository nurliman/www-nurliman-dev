import React from "react";
import Page from "components/Page";
import HashRouter from "components/HashRouter";
import Header from "components/Header";
import MenuToggle from "components/MenuToggle";
import ArrowNav from "components/ArrowNav";
import Content from "components/Content";
import HomeSection from "components/Sections/Home";
import AboutMeSection from "components/Sections/AboutMe";
import ResumeSection from "components/Sections/Resume";
import PortfolioSection from "components/Sections/Portfolio";
import BlogSection from "components/Sections/Blog";
import ContactSection from "components/Sections/Contact";

const MainPage: React.FC = () => {
  return (
    <>
      {/* <AnimatedBackground /> */}
      <Page>
        <HashRouter />
        <Header />
        <MenuToggle />
        <ArrowNav />
        <Content>
          <HomeSection />
          <AboutMeSection />
          <ResumeSection />
          <PortfolioSection />
          <BlogSection />
          <ContactSection />
        </Content>
      </Page>
    </>
  );
};

export default MainPage;
