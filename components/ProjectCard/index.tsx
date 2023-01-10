import React, { Fragment } from "react";

import ExternalLink from "@components/Link/ExternalLink";
import LaunchIcon from "@mui/icons-material/Launch";
import EventIcon from "@mui/icons-material/Event";
import SourceIcon from "@mui/icons-material/Source";

import ProjectJson from "@objects/projects/ProjectJson";

function ProjectCard({
  title,
  links,
  date,
  images,
  description,
  iconsList,
}: ProjectJson) {
  return (
    <div className="flex mb-[20px] before:content-[''] before:h-[250px] before:w-[5px] before:mr-[20px] before:bg-black">
      <div>
        <h2 className="text-[28px] font-bold md:text-[36px]">{title}</h2>
        <p className="flex items-center gap-[10px]">
          <EventIcon fontSize="small" />
          {date}
        </p>
        <div className="flex flex-wrap items-center mb-[10px] gap-[10px]">
          <LaunchIcon fontSize="small" />
          {Object.keys(links).map((link: string, i: number) => (
            <Fragment key={i}>
              <ExternalLink href={links[link]}>
                {link}
              </ExternalLink>
              {i != Object.keys(links).length - 1 && <span>|</span>}
            </Fragment>
          ))}
        </div>
        <div className="flex gap-[20px] flex-col items-start md:flex-row mb-[10px]">
          {images.map((image: any, i: number) => (
            <div key={i} className="hidden first:flex md:flex">
              <img className="max-h-[400px]" alt="" src={image.src} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-x-[10px] mb-[20px]">
          <SourceIcon fontSize="small" />
          {iconsList.map((icon: string, i: number) => (
            <Fragment key={i}>
              <span>{icon}</span>
              {i != iconsList.length - 1 && <span>|</span>}
            </Fragment>
          ))}
        </div>
        <div className="max-w-[800px] leading-2 flex flex-col gap-[20px]">
          {description}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
