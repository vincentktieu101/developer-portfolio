import React from "react";

import Container from "@mui/material/Container";
import Section from "@components/Section";
import { StyledContacts } from "./styles";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function Contacts() {
  return (
    <Section id="contact">
      <Container>
        <StyledContacts>
          <ContactForm />
          <ContactInfo />
        </StyledContacts>
      </Container>
    </Section>
  );
}

export default Contacts;
