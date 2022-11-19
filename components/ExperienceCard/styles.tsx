import styled from "styled-components";

const BottomAccent = styled.div`
  background-color: ${(props) => props.primaryColor};
`;

const TypeIcon = styled.div`
  color: ${(props) => (props.secondaryColor)};
  background-color: ${(props) => props.primaryColor};
`;

export {
  BottomAccent,
  TypeIcon,
};
