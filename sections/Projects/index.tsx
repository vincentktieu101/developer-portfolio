import React from "react";

import Container from "@mui/material/Container";
import Section from "@components/Section";
import SectionHeader from "@components/Section/SectionHeader";

import projects from "@objects/projects";

import { Flexbox } from "./styles";

function Projects() {
  return (
    <Section id="projects">
      <Container>
        <Flexbox>
          <SectionHeader underlined>Projects</SectionHeader>
          <pre>{JSON.stringify(projects, null, 2)}</pre>
        </Flexbox>
      </Container>
    </Section>
  );
}

export default Projects;
