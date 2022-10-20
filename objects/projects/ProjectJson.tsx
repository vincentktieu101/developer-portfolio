import React from "react";

interface ProjectJson {
  title: string;
  links: { [key: string]: string };
  date: string;
  images: any[];
  description: React.ReactElement;
  iconsList?: string[];
}

export default ProjectJson;
