import React from "react";
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

const App: React.FC<AppProps> = (props) => {
  return (
    <Provider store={store}>
      <props.Component {...props.pageProps} />
    </Provider>
  );
};

export default App;
