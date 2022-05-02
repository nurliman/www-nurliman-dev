import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "stores";
import "styles/global.scss";

const App: React.FC<AppProps> = (props) => {
  return (
    <Provider store={store}>
      <props.Component {...props.pageProps} />
    </Provider>
  );
};

export default App;
