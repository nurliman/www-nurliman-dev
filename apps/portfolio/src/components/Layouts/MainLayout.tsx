import React from "react";
import dynamic from "next/dynamic";
import AnimatedBackground from "components/AnimatedBackground";
import Page from "components/Page";
import Header from "components/Header";
import MenuToggle from "components/MenuToggle";
import Content from "components/Content";

const ArrowNav = dynamic(() => import("components/ArrowNav"), { ssr: false });

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <AnimatedBackground />
      <Page>
        <Header />
        <MenuToggle />
        <ArrowNav />
        <Content>{children}</Content>
      </Page>
    </>
  );
};

export default MainLayout;
