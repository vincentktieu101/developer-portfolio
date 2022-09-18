import React from "react";

import Container from "@mui/material/Container";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contacts() {
  return (
    <div id="contact">
      <Container>
        <ContactForm />
        <ContactInfo />
      </Container>
    </div>
  );
}

export default Contacts;
