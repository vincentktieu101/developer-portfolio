import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import GithubIcon from "@mui/icons-material/Github";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PostAddIcon from "@mui/icons-material/PostAdd";

import SectionHeader from "@components/Section/SectionHeader";

// TODO: have to add links properly

function ContactInfo() {
  return (
    <div>
      <div
        id="contact-info"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SectionHeader underlined>More Info</SectionHeader>
        <div style={{ maxWidth: "100%" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <HomeIcon fontSize="large" style={{ marginRight: "10px" }} />
            <a>Rosemead, Los Angeles</a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <PhoneIcon fontSize="large" style={{ marginRight: "10px" }} />
            <a>(626) 537-5590</a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MailIcon fontSize="large" style={{ marginRight: "10px" }} />
            <a>vincentktieu101@gmail.com</a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <GithubIcon fontSize="large" style={{ marginRight: "10px" }} />
            <a>https://github.com/vincentktieu101</a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <LinkedInIcon fontSize="large" style={{ marginRight: "10px" }} />
            <a>https://www.linkedin.com/in/vincentktieu</a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <PostAddIcon fontSize="large" style={{ marginRight: "10px" }} />
            <a>Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
