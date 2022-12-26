import React from "react";

import ExternalLink from "./Link/ExternalLink";

function Footer() {
  return (
    <footer className="bg-black text-white pt-[10px] pb-[50px]">
      <div className="flex flex-col items-center">
        <p>© {new Date().getFullYear()}, VINCENT&apos;S DEVELOPER PORTFOLIO</p>
        <p>
          Built with
          {` `}
          <ExternalLink href="https://nextjs.org/" noStyles>
            <b>NextJS</b>
          </ExternalLink>
          . Check source code{" "}
          <ExternalLink
            href="https://github.com/vincentktieu101/developer-portfolio"
            noStyles
          >
            <b>here</b>
          </ExternalLink>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
