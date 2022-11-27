import React from "react";

import LineTrackingCarImage1 from "@images/projects/2019/line-tracking-car/robot.jpeg";
import LineTrackingCarImage2 from "@images/projects/2019/line-tracking-car/code.png";

import ProjectJson from "../ProjectJson";

const lineTrackingCar: ProjectJson = {
  title: "Line Tracking Car",
  links: {
    YouTube:
      "https://www.youtube.com/watch?v=SqduUmIUFV4&ab_channel=VincentTieu",
  },
  date: "January 2019 - March 2019",
  images: [LineTrackingCarImage1, LineTrackingCarImage2],
  description: (
    <>
      <p>
        The Line Tracking Car was a project from a ECE project class that I
        took. The project required me to learn breadboarding as well as learn C
        and Python. One of the hardest jobs involved tweaking the linear
        regression algorithm to get the car to turn accordingly.
      </p>
    </>
  ),
  iconsList: ["OpenCV", "Arduino", "Python", "C++"],
};

export default lineTrackingCar;
