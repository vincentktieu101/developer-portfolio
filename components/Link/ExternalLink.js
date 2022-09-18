import React from "react";
// import { StyledExternalLink } from "./styles";

function ExternalLink(props) {
  const { children, ...rest } = props;

  return (
    <a target="_blank" rel="noreferrer" {...rest}>
      {children}
    </a>
  );
}

export default ExternalLink;
