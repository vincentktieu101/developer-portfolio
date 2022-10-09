import React from "react";

import Container from "@mui/material/Container";
import Section from "@components/Section";
import SectionHeader from "@components/Section/SectionHeader";

import projects from "@objects/projects";

function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeader underlined>Projects</SectionHeader>
        <pre>{JSON.stringify(projects, null, 2)}</pre>
      </Container>
    </Section>
  );
}

export default Projects;
