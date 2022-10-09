import React from "react";

import Container from "@mui/material/Container";
import Section from "@components/Section";
import ExperienceCard from "@components/ExperienceCard";
import SectionHeader from "@components/Section/SectionHeader";

import experiencesArray, { ExperienceJson } from "@objects/experiences";

import { Flexbox } from "./styles";

function Experience() {
  return (
    <Section id="experience">
      <Container>
        <Flexbox>
          <SectionHeader underlined>Experience</SectionHeader>
          {experiencesArray.map((experienceItem: ExperienceJson, i) => (
            <ExperienceCard key={i} {...experienceItem} />
          ))}
        </Flexbox>
      </Container>
    </Section>
  );
}

export default Experience;
