import styled from "styled-components";

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export { StyledSection };
