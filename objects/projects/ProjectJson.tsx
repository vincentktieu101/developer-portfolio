import React from "react";

type StaticImageData = {
  src: string
  height: number
  width: number
  blurDataURL?: string
};

interface ProjectJson {
  title: string;
  links: { [key: string]: string };
  date: string;
  images: StaticImageData[];
  description: React.ReactElement;
  iconsList?: string[];
}

export default ProjectJson;
