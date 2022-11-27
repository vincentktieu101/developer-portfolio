import React from "react";

import ReactCRAStarterCodeProfileImage1 from "@images/projects/2021/react-cra-starter-code/tutorial-desktop.png";
import ReactCRAStarterCodeProfileImage2 from "@images/projects/2021/react-cra-starter-code/home-mobile.png";
import ReactCRAStarterCodeProfileImage3 from "@images/projects/2021/react-cra-starter-code/profile-mobile.png";
import ReactCRAStarterCodeProfileImage4 from "@images/projects/2021/react-cra-starter-code/readme-mobile.png";

import ProjectJson from "../ProjectJson";

const reactCraStarterCode: ProjectJson = {
  title: "ReactGoogleAuthStarter",
  links: {
    Website: "https://react-google-auth-starter.herokuapp.com/",
    Github: "https://github.com/vincentktieu101/ReactGoogleAuthStarter",
    "YouTube Tutorial": "https://youtu.be/XZceEXlYC1w",
  },
  date: "April 2021",
  images: [
    ReactCRAStarterCodeProfileImage1,
    ReactCRAStarterCodeProfileImage2,
    ReactCRAStarterCodeProfileImage3,
    ReactCRAStarterCodeProfileImage4,
  ],
  description: (
    <>
      <p>
        In Spring of my junior year at UCSB, I became an tutor for CS148
        (Computer Science Project) in which students learn how to develop an
        application. Since most students wanted to create a React application, I
        wrote some starter code for Google OAuth. I also filmed a mini guide on
        how to use React/Google OAuth on YouTube as well as wrote a Github
        Readme.
      </p>
    </>
  ),
  iconsList: [
    "ReactJS",
    "GoogleDevelopers",
    "Heroku",
    "ReactBootstrap",
    "Javascript",
  ],
};

export default reactCraStarterCode;
