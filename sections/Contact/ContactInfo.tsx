import React from "react";

import SectionHeader from "@components/Section/SectionHeader";

function ContactInfo() {
  return (
    <div id="contact-info">
      <SectionHeader underlined>More Info</SectionHeader>
      <div>
        <p>{"<HOUSE>: Rosemead, Los Angeles"}</p>
        <p>{"<PHONE>: (626) 537-5590"}</p>
        <p>{"<E-MAIL>: vincentktieu101@gmail.com"}</p>
        <p>{"<GITHUB>: https://github.com/vincentktieu101"}</p>
        <p>{"<LINKEDIN>: https://www.linkedin.com/in/vincentktieu"}</p>
        <p>{"<RESUME>"}</p>
      </div>
    </div>
  );
}

export default ContactInfo;
