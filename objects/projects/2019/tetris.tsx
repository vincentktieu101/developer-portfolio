import React from "react";

import TetrisImage1 from "@images/projects/2019/tetris/game.png";
import TetrisImage2 from "@images/projects/2019/tetris/game-over.png";

import ProjectJson from "../ProjectJson";

const tetris: ProjectJson = {
  title: "Tetris",
  links: {
    Github: "https://github.com/vincentktieu101/Tetris",
  },
  date: "January 2018 - Febuary 2018",
  images: [TetrisImage1, TetrisImage2],
  description: (
    <p>
      Super fun project that taught me a lot about OOP, algorithms, and UI
      development. There's also a difficulty setting that makes the game harder
      as the game goes on!
    </p>
  ),
  iconsList: ["Pygame", "Python"],
};

export default tetris;
