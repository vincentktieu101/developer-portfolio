import styled from "styled-components";

const StyledSection = styled.div`
  &::before {
    display: block; 
    content: " "; 
    margin-top: -50px; 
    height: 50px;
    visibility: hidden; 
    pointer-events: none;
  }
`;

export { StyledSection };
