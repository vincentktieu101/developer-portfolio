import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import GithubIcon from "@mui/icons-material/Github";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PostAddIcon from "@mui/icons-material/PostAdd";

import SectionHeader from "@components/Section/SectionHeader";
import ExternalLink from "@components/Link/ExternalLink";

function ContactInfo() {
  return (
    <div>
      <div id="contact-info" className="flex flex-col items-center">
        <SectionHeader underlined>Contact Info</SectionHeader>
        <div style={{ maxWidth: "100%" }}>
          <ExternalLink
            href="https://www.google.com/maps/place/Rosemead,+CA/@34.064641,-118.1168945,13z/data=!3m1!4b1!4m5!3m4!1s0x80c2d074766c77b1:0xa0351d489643887c!8m2!3d34.0805651!4d-118.072846"
            className="flex items-center mb-[10px] text-black"
          >
            <HomeIcon fontSize="large" className="mr-[10px]" />
            Rosemead, Los Angeles
          </ExternalLink>
          <ExternalLink
            href="https://www.google.com/search?q=6265375590&source=hp&ei=LttzYIS5Icvb-gSCrYiYCA&iflsig=AINFCbYAAAAAYHPpPhPl2um35fphoMiN7ljN2XEbmanf&oq=6265375590&gs_lcp=Cgdnd3Mtd2l6EAM6AggAOg4ILhCxAxCDARDHARCjAjoICAAQsQMQgwE6CAguELEDEIMBOgUIABCxAzoFCC4QsQM6CwguELEDEIMBEJMCOg4ILhCxAxCDARDHARCvAToICC4QxwEQrwE6BAgAEB46BwgAEMkDEB46BggAEAUQHlD8BlioJWCnJ2gCcAB4AIABdYgBqQmSAQM2LjaYAQCgAQGqAQdnd3Mtd2l6sAEA&sclient=gws-wiz&ved=0ahUKEwiEiMyZ_ffvAhXLrZ4KHYIWAoMQ4dUDCAg&uact=5"
            className="flex items-center mb-[10px] text-black"
          >
            <PhoneIcon fontSize="large" className="mr-[10px]" />
            (626) 537-5590
          </ExternalLink>
          <ExternalLink
            href="mailto:vincentktieu101@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              color: "black",
            }}
          >
            <MailIcon fontSize="large" className="mr-[10px]" />
            vincentktieu101@gmail.com
          </ExternalLink>
          <ExternalLink
            href="https://github.com/vincentktieu101"
            className="flex items-center mb-[10px] text-black"
          >
            <GithubIcon fontSize="large" className="mr-[10px]" />
            https://github.com/vincentktieu101
          </ExternalLink>
          <ExternalLink
            href="https://www.linkedin.com/in/vincentktieu"
            className="flex items-center mb-[10px] text-black"
          >
            <LinkedInIcon fontSize="large" className="mr-[10px]" />
            https://www.linkedin.com/in/vincentktieu
          </ExternalLink>
          <ExternalLink className="flex items-center mb-[10px] text-black">
            <PostAddIcon fontSize="large" className="mr-[10px]" />
            Resume
          </ExternalLink>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
