import styled from "styled-components";

const StyledExperienceCard = styled.div`
  display: flex;
  margin-bottom: 20px;

  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
`;

const SideColumn = styled.div`
  background-color: ${props => props.type === "school" ? "#f44336" : "#3f51b5"};
  width: 50px;
`;

const TypeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  border-bottom: 1px solid white;
`;

const Content = styled.div`
  padding: 10px;
`;

export { StyledExperienceCard, SideColumn, TypeIcon, Content };