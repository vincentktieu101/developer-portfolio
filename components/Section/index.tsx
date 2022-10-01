import React, { ReactNode } from "react";

import { StyledSection } from "./styles";

interface SectionProps {
  id: string;
  children: ReactNode;
};

function Section(props: SectionProps) {
  const { id, children } = props;

  return (
    <StyledSection id={id}>
      {children}
    </StyledSection>
  );
}

export default Section;
