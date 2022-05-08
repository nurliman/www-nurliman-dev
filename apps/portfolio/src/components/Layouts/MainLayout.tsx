import React, { useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const [psRef] = usePerfectScrollbar();

  const handleRouteChange = useCallback(() => {
    if (psRef.current) psRef.current.scrollTop = 0;
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

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
