import styled from "styled-components";

const StyledExperienceCard = styled.div`
  width: 100%;
  max-width: 900px;
  overflow: hidden;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-bottom: 20px;
`;

const BottomAccent = styled.a`
  display: flex;
  justify-content: center;
  color: transparent;
  font-size: 10px;
  height: 15px;
  width: 100%;
  background-color: ${(props) =>
  props.primaryColor ? props.primaryColor : "black"};
  transition: 300ms;

  :hover {
    color: white;
  }
`;

const Flexbox = styled.div`
  display: flex;
`;

const SideColumn = styled.div`
  background-color: white;
  width: 80px;
`;

const TypeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;

  color: ${(props) =>
    props.secondaryColor ? props.secondaryColor : "black"};
  background-color: ${(props) =>
    props.primaryColor ? props.primaryColor : "black"};
  border-bottom: white;
`;

const Content = styled.div`
  width: 100%;

  > p {
    line-height: 2;
  }

  > p {
    margin-top: 20px;
  }

  padding: 20px;
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
  BottomAccent,
  Flexbox,
  SideColumn,
  TypeIcon,
  Content,
  ContentHeader,
  ContentSubHeader,
};
