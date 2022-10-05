import styled, { css } from "styled-components";

const StyledSection = styled.div`
  margin-bottom: 15vh;

  ${props => props.centered && css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}

  width: 100%;

  &::before {
    display: block; 
    content: " "; 
    margin-top: -50px; 
    height: 50px;
    visibility: hidden; 
    pointer-events: none;
  }
`;

const StyledSectionHeaderText = styled.h2`
  line-height: 1.2;
  font-size: 56px;
  text-transform: uppercase;
`;

const Line = styled.hr`
  width: 360px;
  margin-bottom: 26px;
  max-width: 100%;
`;

export { StyledSection, StyledSectionHeaderText, Line };
