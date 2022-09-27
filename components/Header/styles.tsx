import styled, { css } from "styled-components";

const padding = 10;

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;

  /* top: 0;
  position: sticky;
  z-index: 1; */

  /*
  Learning lesson of the difference between position fixed and sticky.
  In this case, we want to remove it from the normal document flow. The
  a tag for hash links are still broken.

  TODO: here is a fix for the hash links: https://css-tricks.com/hash-tag-links-padding/
  */
  
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  transition: 200ms ease-out;
  padding: ${padding}px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${props => props.navHeight > 0 && css`
    height: ${props.navHeight + 2 * padding}px;
  `}

  ${props => props.navShrink ? css`
    background-color: rgba(236, 236, 236, 1);
  ` : css`
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
