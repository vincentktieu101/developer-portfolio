import React from "react";
import VincentHeadshot from "@images/main/vincent-headshot.png";
import Link from "next/link";
import Image from "next/image";

import ExternalLink from "@components/Link/ExternalLink";

import resumeLink from "@objects/resume-link";

import {
  StyledCover,
  CoverBackground,
  CoverHeroImage,
  CoverText,
  CoverBody,
  CoverButtons,
  CoverButton,
  CoverAnimatedTitle,
  CoverAnimatedLine,
} from "./styles";

// TODO: I hate this entire file even though it's not THAT bad....

export default function Cover() {
  return (
    <StyledCover>
      <CoverBackground />
      <CoverHeroImage>
        <Image 
          src={VincentHeadshot} 
          alt="Vincent Tieu" 
          layout="fill"
          objectFit="contain"
        />
      </CoverHeroImage>
      <CoverBody>
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
      </CoverBody>
    </StyledCover>
  );
}
