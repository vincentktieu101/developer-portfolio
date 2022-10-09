import styled from "styled-components";

// should try using grid
const MainContentFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 1000px) {
    flex-direction: column;
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
  height: 440px;
  margin-bottom: 10px;
`;

const B = styled.b`
  font-weight: 500;
`;

export { MainContentFlexBox, Summary, StyledUCSBBirdEyesView, B };
