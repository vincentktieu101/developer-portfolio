import styled from "styled-components";
import Button from "@mui/material/Button";
import Image from "next/image";

const StyledCover = styled.div`
  position: relative;
  height: 90vh;
`;

const CoverBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/lightbulbs.jpeg");
  opacity: 0.9;
  background-position: left;
  background-size: cover;
`;

const CoverHeroImage = styled.div`
  /* height: 700px;
  position: relative;
  bottom: 0; */
`;

const CoverBody = styled.div`
  position: absolute;
  z-index: 1;
  margin-top: -200px;

  @media (min-width: 800px) {
    margin-left: 350px;
    margin-top: -150px;
  }

  @media (min-width: 1100px) {
    margin-left: 550px;
    margin-top: -150px;
  }
`;

const CoverText = styled.div`
  line-height: 0.9;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const CoverButtons = styled.div`
  display: flex;
  justify-content: space-between;

  > * + * {
    margin-left: 10px;
  }
`;

const CoverButton = styled(Button)`
  width: 100%;
  height: 40px;
`;

const CoverAnimatedTitle = styled.div`
  height: 42px;
  padding: 4px 0;
  overflow: hidden;
`;

const CoverAnimatedLine = styled.h4`
  line-height: 50px;

  &:first-child {
    animation: animated-title 8s infinite;
  }

  @keyframes animated-title {
    0% {
      margin-top: 0px;
    }
    30% {
      margin-top: 0px;
    }
    50% {
      margin-top: -50px;
    }
    80% {
      margin-top: -50px;
    }
    100% {
      margin-top: 0px;
    }
  }
`;

export {
  StyledCover,
  CoverBackground,
  CoverHeroImage,
  CoverBody,
  CoverText,
  CoverButtons,
  CoverButton,
  CoverAnimatedTitle,
  CoverAnimatedLine,
};
