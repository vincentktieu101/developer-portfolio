import React, { ReactNode } from "react";

import { StyledSectionHeaderText, Line } from "./styles";

interface SectionHeaderProps {
  children: ReactNode;
  underlined?: boolean;
};

function SectionHeader(props: SectionHeaderProps) {
  const { children, underlined } = props;
  return (
    <>
      <StyledSectionHeaderText>{children}</StyledSectionHeaderText>
      {underlined && <Line />}
    </>
  )
}

export default SectionHeader;