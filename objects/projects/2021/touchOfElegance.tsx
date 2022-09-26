import React from "react";

import TouchOfElegance1 from "@images/projects/2021/touch-of-elegance/cover-desktop.png";
import TouchOfElegance2 from "@images/projects/2021/touch-of-elegance/services-mobile.png";
import TouchOfElegance3 from "@images/projects/2021/touch-of-elegance/contact-mobile.png";

import ProjectJson from "../ProjectJson";

const touchOfElegance: ProjectJson = {
  title: "Touch Of Elegance",
  links: {
    Website: "https://touchofelegance.netlify.app/",
    Github: "https://github.com/vincentktieu101/TouchOfElegance",
  },
  date: "March 2021 - Present",
  images: [
    TouchOfElegance1,
    TouchOfElegance2,
    TouchOfElegance3,
  ],
  description: (
    <React.Fragment>
      <p>
        This was my first time doing freelance work and I wrote the website from
        scratch in React GatsbyJS. The previous website that my aunt had for her
        shop was really outdated and I wanted to help them build a new one. The
        website includes some photos, a contact form (using EmailJS), and a menu
        that can be reached through a QR code.
      </p>
    </React.Fragment>
  ),
  iconsList: ["ReactJS", "GatsbyJS", "Netlify", "MaterialUI", "Javascript"],
};

export default touchOfElegance;
