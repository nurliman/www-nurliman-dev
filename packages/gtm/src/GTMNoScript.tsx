import React from "react";

type Props = { gtmId: string };

export const GTMNoScript: React.FC<Props> = (props) => {
  if (!props.gtmId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${props.gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
};
