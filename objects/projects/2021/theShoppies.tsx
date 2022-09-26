import React from "react";

import ExternalLink from "@components/Link/ExternalLink";

import TheShoppiesImage1 from "@images/projects/2021/the-shoppies-home-desktop.png";
import TheShoppiesImage2 from "@images/projects/2021/the-shoppies-home-mobile.png";

import ProjectJson from "../ProjectJson";

const theShoppies: ProjectJson = {
  title: "TheShoppies",
  links: {
    Website: "https://vincentktieu-theshoppies.netlify.app/",
    Github: "https://github.com/vincentktieu101/TheShoppies",
  },
  date: "May 2021",
  images: [TheShoppiesImage1, TheShoppiesImage2],
  description: (
    <React.Fragment>
      <p>
        Simple app used to enter in Shopify's UX & Web Developer Challenge
        listed{" "}
        <ExternalLink
          href="https://docs.google.com/document/d/1SdR9rQpocsH5rPTOcxr9noqHRld5NJlylKO9Hf94U8U/edit#heading=h.31w9woubunro"
          className="link link-ltr"
        >
          here
        </ExternalLink>
        . This is an app that helps query for movies using the{" "}
        <ExternalLink href="https://www.omdbapi.com/" className="link link-ltr">
          OMDb API
        </ExternalLink>{" "}
        so that users can "nominate" them and save their nominations to a
        database.
      </p>
    </React.Fragment>
  ),
  iconsList: [
    "ReactJS",
    "Firebase",
    "Netlify",
    "GoogleDevelopers",
    "Javascript",
  ],
};

export default theShoppies;
