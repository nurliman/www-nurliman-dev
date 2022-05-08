import React from "react";
import dynamic from "next/dynamic";
import AnimatedBackground from "components/AnimatedBackground";
import Page from "components/Page";
import Header from "components/Header";
import MenuToggle from "components/MenuToggle";
import Content from "components/Content";
import Section from "components/Section";
import { usePerfectScrollbar } from "hooks/usePerfectScrollbar";

const ArrowNav = dynamic(() => import("components/ArrowNav"), { ssr: false });

type Props = {
  contentInnerClassName?: string;
};

const MainLayout: React.FC<Props> = ({ children, contentInnerClassName }) => {
  const [psRef] = usePerfectScrollbar();

  return (
    <>
      <AnimatedBackground />
      <Page>
        <Header />
        <MenuToggle />
        <ArrowNav />
        <Content>
          <Section ref={psRef} innerClassName={contentInnerClassName}>
            {children}
          </Section>
        </Content>
      </Page>
    </>
  );
};

export default MainLayout;
