import React from "react";

import Container from "@mui/material/Container";
import Section from "@components/Section";
import SectionHeader from "@components/Section/SectionHeader";
import ProjectCard from "@components/ProjectCard";

import projects from "@objects/projects";
// TODO: should just export from /projects. fix in experience too
import ProjectJson from "@objects/projects/ProjectJson";

import { Flexbox } from "./styles";

function Projects() {
  return (
    <Section id="projects">
      <Container>
        <Flexbox>
          <SectionHeader underlined>Projects</SectionHeader>
          {projects.map((project: ProjectJson, i: number) => (
            <ProjectCard key={i} {...project} />
          ))}
        </Flexbox>
      </Container>
    </Section>
  );
}

export default Projects;
