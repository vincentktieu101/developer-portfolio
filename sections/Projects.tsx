import React from "react";

import Container from "@mui/material/Container";
import Section from "@components/Section";

import projects from "@objects/projects";

function Projects() {
  return (
    <Section id="projects">
      <Container>
        <h2>Projects</h2>
        <pre>{JSON.stringify(projects, null, 2)}</pre>
      </Container>
    </Section>
  );
}

export default Projects;
