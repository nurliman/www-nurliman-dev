import React from "react";
import { AppProps } from "next/app";
import "styles/global.scss";

const App: React.FC<AppProps> = (props) => {
  return <props.Component {...props.pageProps} />;
};

export default App;
