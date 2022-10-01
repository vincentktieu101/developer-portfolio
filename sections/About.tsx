import React from "react";

import Link from "next/link";
import Image from "next/image";

import Container from "@mui/material/Container";
// import ExternalLink from "@components/Link/ExternalLink";
import Section from "@components/Section";

import UCSBBirdEyesView from "@images/backgrounds/ucsb-birdseyeview.jpg";
import resumeLink from "@objects/resume-link";

// import { AboutMainSummary, AboutUcsbImage } from "./styles";

const FirstParagraph = () => (
  <p>
    Hi! I'm <b>Vincent Tieu</b>, a <b>software engineer</b> and{" "}
    <b>full-stack web developer</b>, based in <b>Los Angeles</b>! I am
    passionate about programming, whether that means starting a web project from
    scratch (like this online portfolio!) or developing an existing codebase.
  </p>
);

const SecondParagraph = () => (
  <p>
    I'm a new graduate from <b>UC Santa Barbara</b> in <b>Computer Science</b>!
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

function About() {
  return (
    <Section id="about">
      {/* Should be using Section Header Component*/}
      <Container>
        <h2>About Me</h2>
        <FirstParagraph />
        <SecondParagraph />
        <ThirdParagraph />
        <Image src={UCSBBirdEyesView} />
      </Container>
    </Section>
  );
}

export default About;
