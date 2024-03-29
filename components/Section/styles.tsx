// TODO: refactor styled-components to tailwind

import styled from "styled-components";

const StyledSection = styled.div`
  margin-bottom: 15vh;

  width: 100%;

  &::before {
    display: block;
    content: "";
    margin-top: -70px;
    height: 70px;
    width: 100%;
    visibility: hidden;
    pointer-events: none;
  }
`;

const StyledSectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSectionHeaderText = styled.h2`
  line-height: 1.2;
  font-size: 56px;
  text-transform: uppercase;
  font-family: Silkscreen;
  font-weight: 400;
`;

const Line = styled.hr`
  width: 360px;
  margin-bottom: 26px;
  max-width: 100%;
`;

export { StyledSectionHeader, StyledSection, StyledSectionHeaderText, Line };
