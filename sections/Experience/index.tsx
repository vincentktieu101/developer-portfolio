import React from "react";

import Container from "@mui/material/Container";
import Section from "@components/Section";
import ExperienceCard from "@components/ExperienceCard";
import SectionHeader from "@components/Section/SectionHeader";

import experiencesArray from "@objects/experiences";

function Experience() {
  return (
    <Section id="experience">
      <Container>
        <div className="flex flex-col items-center">
          <SectionHeader underlined>Experience</SectionHeader>
          {experiencesArray.map((experienceItem, i) => (
            <ExperienceCard key={i} {...experienceItem} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Experience;
