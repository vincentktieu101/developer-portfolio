// TODO: refactor styled-components to tailwind
import styled from "styled-components";

// figure out how to preload colors
// const BottomAccent = styled.a`
//   display: flex;
//   justify-content: center;
//   color: transparent;
//   font-size: 10px;
//   height: 15px;
//   width: 100%;
//   background-color: ${(props) =>
//     props.primaryColor ? props.primaryColor : "black"};
//   transition: 300ms;

//   :hover {
//     color: white;
//   }
// `;

const TypeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;
  border-radius: 0 0 8px;

  color: ${(props) => (props.secondaryColor ? props.secondaryColor : "black")};
  background-color: ${(props) =>
    props.primaryColor ? props.primaryColor : "black"};
  border-bottom: white;
`;

export {
  TypeIcon,
};
