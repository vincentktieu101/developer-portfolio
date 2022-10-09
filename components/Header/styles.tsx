import styled, { css } from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  z-index: 1;

  /* top: 0;
  position: sticky;
  z-index: 1; */

  /*
  Learning lesson of the difference between position fixed and sticky.
  In this case, we want to remove it from the normal document flow. The
  a tag for hash links are still broken.

  https://css-tricks.com/hash-tag-links-padding/

  Here is a link for url jumps with a header. Unfortunately, I figured out
  that the heights have to be hardcoded because the useStates aren't able to
  update the negative margins for the id elements before the jump.

  The header TOTAL height is 30px/80px + 20px padding so 50px/100px.
  */
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  transition: 200ms ease-out;
  padding: 10px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${(props) =>
    props.navHeight > 0 &&
    css`
      height: ${props.navHeight}px;
    `}

  ${(props) =>
    props.navShrink
      ? css`
          background-color: rgba(236, 236, 236, 1);
        `
      : css`
          background-color: rgba(236, 236, 236, 0.2);
        `}
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SectionItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const BigTitle = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BigTitleName = styled.p`
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 1px;
`;

const BigTitleSubName = styled.p`
  font-size: 20px;
  margin-top: -10px;
`;

const SmallTitle = styled.h1`
  font-size: 20px;
`;

export {
  StyledHeader,
  NavItems,
  SectionItems,
  BigTitle,
  BigTitleName,
  BigTitleSubName,
  SmallTitle,
};
