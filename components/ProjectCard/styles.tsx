import styled from "styled-components";

const StyledProjectCard = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;

  ::before {
    content: "";
    height: 250px;
    width: 5px;
    margin-right: 20px;
    background-color: black;
  }
`;

const ProjectImage = styled.img`
  max-height: 400px;
`;

const Links = styled.div`
  margin-bottom: 10px;
  > a + a {
    margin: 10px;
  }
`;

const Images = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Technology = styled.div`
  margin-bottom: 20px;
`;

const Description = styled.div`
  max-width: 800px;
  line-height: 2;

  > p + p {
    margin-top: 20px;
  }
`;

export {
  StyledProjectCard,
  ProjectImage,
  Links,
  Images,
  Technology,
  Description,
};
