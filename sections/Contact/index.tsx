import React from "react";

import Container from "@mui/material/Container";
import Section from "@components/Section";
import ContactInfo from "./ContactInfo";

function Contacts() {
  return (
    <Section id="contact">
      <Container>
        <ContactInfo />
      </Container>
    </Section>
  );
}

export default Contacts;
