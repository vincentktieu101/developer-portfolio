import React from "react";

import Container from "@mui/material/Container";
import Section from "@components/Section";
import SectionHeader from "@components/Section/SectionHeader";
import ProjectCard from "@components/ProjectCard";

import projects from "@objects/projects";

function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeader underlined>Projects</SectionHeader>
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </Container>
    </Section>
  );
}

export default Projects;
