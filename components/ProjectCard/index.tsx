import React from "react";

import ExternalLink from "@components/Link/ExternalLink";

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
    <div className="flex w-100 mb-[20px] before:content-[''] before:h-[250px] before:w-[5px] before:mr-[20px] before:bg-black">
      <div>
        <h2 className="text-[36px] font-bold">{title}</h2>
        <p>{date}</p>
        <div className="flex gap-[10px] mb-[10px]">
          {Object.keys(links).map((link: string, i: number) => (
            <ExternalLink href={links[link]} key={i}>
              {link}
            </ExternalLink>
          ))}
        </div>
        <div className="flex gap-[20px] mb-[10px] flex-col items-start md:flex-row">
          {images.map((image: any, i: number) => (
            <picture key={i}>
              <img
                key={i}
                alt=""
                className="max-h-[400px] hidden first:flex md:flex"
                src={image.src}
              />
            </picture>
          ))}
        </div>
        <div className="mb-[20px]">
          {iconsList.map((icon: string, i: number) => (
            <span key={i}>{icon}. </span>
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
