import React, { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "store";
import { config } from "@fortawesome/fontawesome-svg-core";
import "reset-css/reset.css";
import "modern-normalize/modern-normalize.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import "styles/magnific-popup.css";
import "styles/main.css";
import "styles/global.scss";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "keen-slider/keen-slider.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>;
};

export default App;
