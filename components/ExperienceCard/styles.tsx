import styled from "styled-components";

const StyledExperienceCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  overflow: hidden;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-bottom: 20px;
`;

const SideColumn = styled.div`
  background-color: ${(props) =>
    props.primaryColor ? props.primaryColor : "#3f51b5"};
  /* background-color: #277f6a; */
  width: 50px;
`;

const TypeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  color: ${(props) =>
    props.secondaryColor ? props.secondaryColor : "white"};
  /* color: #b2e522; */
  border-bottom: 1px solid white;
`;

const Content = styled.div`
  width: 100%;

  > p {
    line-height: 2;
  }

  > p {
    margin-top: 20px;
  }

  padding: 20px 15px;
`;

const ContentHeader = styled.h3`
  font-size: 36px;
  line-height: 1.2;
`;

const ContentSubHeader = styled.h4`
  font-size: 20px;
`;

export {
  StyledExperienceCard,
  SideColumn,
  TypeIcon,
  Content,
  ContentHeader,
  ContentSubHeader,
};
