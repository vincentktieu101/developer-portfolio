import React from "react";

import Container from "@mui/material/Container";
import Section from "@components/Section";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contacts() {
  return (
    <Section id="contact">
      <Container>
        <ContactForm />
        <ContactInfo />
      </Container>
    </Section>
  );
}

export default Contacts;
