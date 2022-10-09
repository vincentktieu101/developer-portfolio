import React, { ReactNode } from "react";

import { StyledSection } from "./styles";

interface SectionProps {
  id: string;
  children: ReactNode;
  centered?: boolean;
}

function Section(props: SectionProps) {
  const { id, children, centered } = props;

  return (
    <StyledSection id={id} centered={centered}>
      {children}
    </StyledSection>
  );
}

export default Section;
