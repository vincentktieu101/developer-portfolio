import React from "react";

import FreeFromClassImage1 from "@images/projects/2020/free-from-class/home-desktop.png";
import FreeFromClassImage2 from "@images/projects/2020/free-from-class/edit-event-mobile.png";
import FreeFromClassImage3 from "@images/projects/2020/free-from-class/group-management-mobile.png";
import FreeFromClassImage4 from "@images/projects/2020/free-from-class/my-group-mobile.png";

import ProjectJson from "../ProjectJson";

const freeFromClass: ProjectJson = {
  title: "FreeFromClass",
  links: {
    Website: "https://cs48-s20-s2-t2-prod.herokuapp.com/",
    Github: "https://github.com/ucsb-cs48-s20/project-s2-t2-free",
  },
  date: "March 2020 - May 2020",
  images: [
    FreeFromClassImage1,
    FreeFromClassImage2,
    FreeFromClassImage3,
    FreeFromClassImage4,
  ],
  description: (
    <>
      <p>
        FreeFromClass was a class project for CS48. This was my introduction
        into web development where I worked in a team of 4 to develop an app
        from scratch to deployment. Through this app, I learned everything from
        Agile, React, NextJS, Authentication, MongoDB NoSQL, unit and e2e
        testing, and Heroku app deployment. All in all, I learned a TON from
        this project!
      </p>
      <p>
        FreeFromClass is a tool for students to find good times to meet with
        others. Students could input their schedule then create multiple groups
        in order to find good times to meet in each group. When2Meet is a
        similar app minus the ability to reuse schedules.
      </p>
    </>
  ),
  iconsList: [
    "ReactJS",
    "NextJS",
    "MongoDB",
    "Auth0",
    "Heroku",
    "Cypress",
    "Jest",
    "ReactBootstrap",
    "Javascript",
  ],
};

export default freeFromClass;
