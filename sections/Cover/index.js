import React from "react";

import VincentHeadshot from "@images/main/vincent-headshot.png";

export default function Cover() {
  return (
    <div className="relative w-full h-[75vh] mb-[15vh] sm:h-[90vh]">
      <div className="absolute w-full h-full bg-[url('/lightbulbs.jpeg')] bg-left bg-cover z-[-1]" />
      <div className="flex justify-center w-full">
        <img
          className="absolute bottom-0 max-h-[700px]"
          src={VincentHeadshot.src}
          alt="Vincent Tieu"
        />
      </div>
      {/* <CoverBody>
        <CoverText>
          <h2>I'm VINCENT TIEU</h2>
          <CoverAnimatedTitle>
            <CoverAnimatedLine>Full-Stack Web Developer</CoverAnimatedLine>
            <CoverAnimatedLine>Software Engineer</CoverAnimatedLine>
          </CoverAnimatedTitle>
        </CoverText>
        <CoverButtons>
          <ExternalLink href={resumeLink} style={{ width: "100%" }}>
            <CoverButton variant="contained" color="primary">
              <h6>RESUME</h6>
            </CoverButton>
          </ExternalLink>
          <Link href={"#contact"}>
            <CoverButton variant="contained">
              <h6>CONTACT</h6>
            </CoverButton>
          </Link>
        </CoverButtons>
      </CoverBody> */}
    </div>
  );
}
