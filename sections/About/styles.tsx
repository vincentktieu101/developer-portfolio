// TODO: refactor styled-components to tailwind
import styled from "styled-components";

// should try using grid
const MainContentFlexBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Summary = styled.div`
  max-width: 450px;

  @media (max-width: 1000px) {
    max-width: 100%;
  }

  > p {
    line-height: 2;
  }

  > p + p {
    margin-top: 20px;
  }
`;

const StyledUCSBBirdEyesView = styled.img`
  max-height: 440px;
  margin-bottom: 10px;
`;

const B = styled.b`
  font-weight: 500;
`;

export { MainContentFlexBox, Summary, StyledUCSBBirdEyesView, B };
