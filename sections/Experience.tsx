import React from "react";

import Container from "@mui/material/Container";
import Section from "@components/Section";
import ExperienceCard from "@components/ExperienceCard";

import experiencesArray, { ExperienceJson } from "@objects/experiences";

function Experience() {
  return (
    <Section id="experience">
      <Container>
        <h2>Experience</h2>
        {experiencesArray.map((experienceItem: ExperienceJson, i) => (
          <ExperienceCard key={i} {...experienceItem} />
        ))}
      </Container>
    </Section>
  );
}

export default Experience;
