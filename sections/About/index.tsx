import React from "react";

import Link from "next/link";

import Container from "@mui/material/Container";
// import ExternalLink from "@components/Link/ExternalLink";
import Section from "@components/Section";

import UCSBBirdEyesView from "@images/backgrounds/ucsb-birdseyeview.jpg";
import resumeLink from "@objects/resume-link";
import SectionHeader from "@components/Section/SectionHeader";

import {
  MainContentFlexBox,
  Summary,
  StyledUCSBBirdEyesView,
  B,
} from "./styles";

const FirstParagraph = () => (
  <p>
    Hi! I'm <B>Vincent Tieu,</B> a <B>software engineer</B> and{" "}
    <B>full-stack web developer,</B> based in <B>Los Angeles!</B> I am
    passionate about programming, whether that means starting a web project from
    scratch (like this online portfolio!) or developing an existing codebase.
  </p>
);

const SecondParagraph = () => (
  <p>
    I'm a new graduate from <B>UC Santa Barbara</B> in <B>Computer Science</B>!
    I enjoy programming, from designing and developing frontends, building
    RESTful APIs, and optimizing backend operations. I'm most comfortable in the
    React and NodeJS frameworks.
  </p>
);

const ThirdParagraph = () => (
  <p>
    Below, you can view my professional experience as well as some personal
    projects. For a quick summary, check out my {/* Should be Link Component */}
    <Link href={resumeLink}>
      <a>resume</a>
    </Link>
    .
  </p>
);

const PhotoCaption = () => (
  <p>
    View of My Alma Mater, <B>UC Santa Barbara</B>
  </p>
);

function About() {
  return (
    <Section id="about">
      <Container>
        <MainContentFlexBox>
          <Summary>
            <SectionHeader underlined>About Me</SectionHeader>
            <FirstParagraph />
            <SecondParagraph />
            <ThirdParagraph />
          </Summary>
          <div>
            <StyledUCSBBirdEyesView src={UCSBBirdEyesView.src} />
            <PhotoCaption />
          </div>
        </MainContentFlexBox>
      </Container>
    </Section>
  );
}

export default About;
