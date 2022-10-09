import React, { ReactNode } from "react";

import { StyledSectionHeader, StyledSectionHeaderText, Line } from "./styles";

interface SectionHeaderProps {
  children: ReactNode;
  underlined?: boolean;
}

function SectionHeader(props: SectionHeaderProps) {
  const { children, underlined } = props;
  return (
    <StyledSectionHeader>
      <StyledSectionHeaderText>{children}</StyledSectionHeaderText>
      {underlined && <Line />}
    </StyledSectionHeader>
  );
}

export default SectionHeader;
