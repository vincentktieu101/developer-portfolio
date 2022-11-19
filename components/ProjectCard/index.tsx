import React from "react";

import ExternalLink from "@components/Link/ExternalLink";

import ProjectJson from "@objects/projects/ProjectJson";

import {
  StyledProjectCard,
  Images,
  ProjectImage,
  Links,
  Technology,
  Description,
} from "./styles";

function ProjectCard(props: ProjectJson) {
  const { title, links, date, images, description, iconsList } = props;

  return (
    <StyledProjectCard>
      <div>
        <h2 style={{ fontSize: "36px", fontWeight: "bold" }}>{title}</h2>
        <p>{date}</p>
        <Links>
          {Object.keys(links).map((link: string, i: number) => (
            <ExternalLink href={links[link]} key={i}>
              {link}
            </ExternalLink>
          ))}
        </Links>
        <Images>
          {images.map((image: any, i: number) => (
            <ProjectImage key={i} src={image.src} />
          ))}
        </Images>
        <Technology>
          {iconsList.map((icon: string, i: number) => (
            <span key={i}>{icon}. </span>
          ))}
        </Technology>
        <Description>{description}</Description>
      </div>
    </StyledProjectCard>
  );
}

export default ProjectCard;
