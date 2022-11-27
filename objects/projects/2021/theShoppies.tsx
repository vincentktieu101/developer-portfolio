import React from "react";

import ExternalLink from "@components/Link/ExternalLink";

import TheShoppiesImage1 from "@images/projects/2021/the-shoppies/home-desktop.png";
import TheShoppiesImage2 from "@images/projects/2021/the-shoppies/home-mobile.png";

import ProjectJson from "../ProjectJson";

const theShoppies: ProjectJson = {
  title: "Movie Nominator (TheShoppies)",
  links: {
    Website: "https://vincentktieu-theshoppies.netlify.app/",
    Github: "https://github.com/vincentktieu101/TheShoppies",
  },
  date: "May 2021",
  images: [TheShoppiesImage1, TheShoppiesImage2],
  description: (
    <>
      <p>
        I participated in Shopify's UX & Web Hackathon. This simple app plays
        around with the{" "}
        <ExternalLink href="https://www.omdbapi.com/">OMDb API</ExternalLink>{" "}
        and gave me practice in spinning up databases in Firebase.
      </p>
    </>
  ),
  iconsList: [
    "ReactJS",
    "Firebase",
    "Netlify",
    "GoogleDevelopers",
    "Javascript",
    "OMBD",
  ],
};

export default theShoppies;
