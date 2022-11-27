import React from "react";

import MusicMapImage1 from "@images/projects/2021/music-map/home-desktop.png";
import MusicMapImage2 from "@images/projects/2021/music-map/search-mobile.png";

import ProjectJson from "../ProjectJson";

const musicMap: ProjectJson = {
  title: "MusicMap",
  links: {
    Website: "https://vincentktieu101.github.io/MusicMap/",
    Github: "https://github.com/vincentktieu101/MusicMap",
  },
  date: "March 2021",
  images: [MusicMapImage1, MusicMapImage2],
  description: (
    <>
      <p>
        MusicMap is my solution for organizing 5000+ music genres and 500,000+
        songs into a user friendly interface. The app features an
        easy-to-navigate map of genres that users can tap to play an audio
        sample in that genre. Other things that users can do in the app is
        refresh the map, search the genre in the app, search for a genre on
        Spotify, go on genre shuffle mode, and skip to the next audio sample.
        MusicMap is developed for both desktop and mobile!
      </p>
    </>
  ),
  iconsList: ["ReactJS", "Netlify", "Github", "MaterialUI", "Javascript"],
};

export default musicMap;
