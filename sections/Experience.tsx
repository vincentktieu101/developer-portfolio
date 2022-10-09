import React from "react";

import Container from "@mui/material/Container";
import Section from "@components/Section";
import ExperienceCard from "@components/ExperienceCard";
import SectionHeader from "@components/Section/SectionHeader";

import experiencesArray, { ExperienceJson } from "@objects/experiences";

function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeader underlined>Experience</SectionHeader>
        {experiencesArray.map((experienceItem: ExperienceJson, i) => (
          <ExperienceCard key={i} {...experienceItem} />
        ))}
      </Container>
    </Section>
  );
}

export default Experience;
