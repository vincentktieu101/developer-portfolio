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

   > p + p {
    margin-top: 10px;
  }
`;

const StyledUCSBBirdEyesView = styled.img`
  height: 440px;
  margin-bottom: 10px;
`;

export { MainContentFlexBox, Summary, StyledUCSBBirdEyesView };
