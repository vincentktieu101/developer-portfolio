import React from "react";

import ExternalLink from "@components/Link/ExternalLink";

import SnakeImage1 from "@images/projects/2018/snake-game.png";
import SnakeImage2 from "@images/projects/2018/snake-guide.png";

import ProjectJson from "../ProjectJson";

const snake: ProjectJson = {
  title: "Snake",
  links: {
    Github: "https://github.com/vincentktieu101/Snake",
    Guide:
      "https://docs.google.com/document/d/1OEufgKplRawOo76_liC3QqEdKu9eFTG4x-0CQsaFhbw/edit",
  },
  date: "December 2018",
  images: [SnakeImage1, SnakeImage2],
  description: (
    <React.Fragment>
      <p>
        I developed this project while I was still an Electrical Engineering
        major. This project has a special place in my heart because it helped me
        gain the confidence I needed to switch majors, especially since I knew
        that the path of a Computer Science major wasn't going to be an easy.
        Every now and again when I need inspiration, I boot up the game and
        enjoy this project I created.
      </p>
      <p>
        I wrote this app in Python and Pygame. I also wrote a mini programming
        guide that you can check out
        <ExternalLink
          href="https://docs.google.com/document/d/1OEufgKplRawOo76_liC3QqEdKu9eFTG4x-0CQsaFhbw/edit?usp=sharing"
        >
          {" "}
          here
        </ExternalLink>
        . I even designed an 8-bit music theme for the game!
      </p>
    </React.Fragment>
  ),
  iconsList: ["Pygame", "Python"],
};

export default snake;
