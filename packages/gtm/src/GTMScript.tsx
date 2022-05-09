import React from "react";

type Props = { gtmId: string };

export const GTMScript: React.FC<Props> = (props) => {
  if (!props.gtmId) return null;

  return (
    <script id="gtm" type="text/partytown">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${props.gtmId}');
      `}
    </script>
  );
};
