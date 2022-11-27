import React from "react";

import Link from "next/link";
import Container from "@mui/material/Container";
import Section from "@components/Section";
import SectionHeader from "@components/Section/SectionHeader";

import UCSBBirdEyesView from "@images/backgrounds/ucsb-birdseyeview.jpg";
import resumeLink from "@objects/resume-link";

const FirstParagraph = () => (
  <p className="leading-2 mb-[20px]">
    Hi! I'm <b className="font-bold">Vincent Tieu,</b> a{" "}
    <b className="font-bold">software engineer</b> and{" "}
    <b className="font-bold">full-stack web developer</b> based in{" "}
    <b className="font-bold">Los Angeles!</b> I'm passionate about programming,
    whether that means starting a web project from scratch (like this online
    portfolio!) or developing an existing codebase.
  </p>
);

const SecondParagraph = () => (
  <p className="leading-2 mb-[20px]">
    I'm a new graduate from <b className="font-bold">UC Santa Barbara</b> with
    my Bachelors of Science in <b className="font-bold">Computer Science!</b> I
    enjoy programming, from designing and developing frontends, building RESTful
    APIs, and optimizing backend operations. I'm most comfortable in the React
    and NodeJS frameworks.
  </p>
);

const ThirdParagraph = () => (
  <p className="leading-2 mb-[20px]">
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
    View of My Alma Mater, <b className="font-bold">UC Santa Barbara</b>
  </p>
);

function About() {
  return (
    <Section id="about">
      <Container>
        <div className="flex flex-col items-center gap-[40px] lg:flex-row lg:justify-center">
          <div className="max-w-[450px] lg:max-w-[450px]">
            <SectionHeader underlined>About Me</SectionHeader>
            <FirstParagraph />
            <SecondParagraph />
            {/* <ThirdParagraph /> */}
          </div>
          <div>
            <img
              src={UCSBBirdEyesView.src}
              className="max-h-[440px] mb-[10px]"
            />
            <PhotoCaption />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default About;
