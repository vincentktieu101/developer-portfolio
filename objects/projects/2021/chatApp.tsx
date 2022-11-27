import React from "react";

import ChatAppImage1 from "@images/projects/2021/chat-app/home-desktop.png";
import ChatAppImage2 from "@images/projects/2021/chat-app/home-mobile.png";

import ProjectJson from "../ProjectJson";

const chatApp: ProjectJson = {
  title: "ChatApp",
  links: {
    Website: "https://vincentktieu-chatapp.herokuapp.com/",
    Github: "https://github.com/vincentktieu101/ChatApp",
  },
  date: "April 2021",
  images: [ChatAppImage1, ChatAppImage2],
  description: (
    <>
      <p>
        Fullstack Chat Application using React, Express, SocketIO, and Google
        OAuth! With SocketIO, the chat application updates for ALL users on the
        socket without requiring manual refreshing.
      </p>
    </>
  ),
  iconsList: [
    "ReactJS",
    "ExpressJS",
    "NodeJS",
    "SocketIO",
    "Heroku",
    "MaterialUI",
    "Javascript",
  ],
};

export default chatApp;
