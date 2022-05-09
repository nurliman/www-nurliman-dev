import Document, { Html, Head, Main, NextScript } from "next/document";
import { Partytown } from "@builder.io/partytown/react";
import { GTMScript, GTMNoScript } from "@nurliman/gtm";

const GTM_ID = "GTM-KR8STT3";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <Partytown forward={["dataLayer.push"]} debug={process.env.NODE_ENV !== "production"} />
          <GTMScript gtmId={GTM_ID} />
        </Head>
        <body>
          <GTMNoScript gtmId={GTM_ID} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
