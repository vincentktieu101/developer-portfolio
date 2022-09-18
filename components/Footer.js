import React from "react";

import Container from "@mui/material/Container";
import ExternalLink from "./Link/ExternalLink";

function Footer() {
  return (
    <footer>
      <Container>
        <div>© {new Date().getFullYear()}, VINCENT'S DEVELOPER PORTFOLIO</div>
        <div>
          Built with
          {` `}
          <ExternalLink href="https://nextjs.org/">
            <b>NextJS</b>
          </ExternalLink>
          . Check source code{" "}
          <ExternalLink
            // TODO: update link
            href="https://github.com/vincentktieu101/DeveloperPortfolio"
          >
            <b>here</b>
          </ExternalLink>
          .
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
