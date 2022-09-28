import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

import Container from "@mui/material/Container";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import Drawer from "@material-ui/core/Drawer";
// import DrawerContent from "../DrawerContent";

// import NavLink from "./NavLink";
import { 
  StyledHeader,
  NavItems,
  SectionItems,
  BigTitle,
  BigTitleName,
  BigTitleSubName,
  SmallTitle
} from "./styles";

interface SectionJson {
  NAME: string;
  PATH: string;
}

const sections: SectionJson[] = [
  {
    NAME: "home",
    PATH: "/",
  },
  {
    NAME: "about",
    PATH: "/#about",
  },
  {
    NAME: "experience",
    PATH: "/#experience",
  },
  {
    NAME: "projects",
    PATH: "/#projects",
  },
  {
    NAME: "contact",
    PATH: "/#contact",
  }
];

function Header() {
  const [navShrink, setNavShrink] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setNavShrink(!!window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setNavHeight(ref.current.clientHeight);
  }, [navShrink]);

  return (
    <StyledHeader navShrink={navShrink} navHeight={navHeight}>
      <Container>
        <NavItems ref={ref}>
          <Link href="/">
            <a>
              {navShrink ? (
                <SmallTitle>VINCENT'S DEVELOPER PORTFOLIO</SmallTitle>
              ) : (
                <>
                  <BigTitle>
                    <BigTitleName>VINCENT'S</BigTitleName>
                    <BigTitleSubName>Developer Portfolio</BigTitleSubName>
                  </BigTitle>
                </>
              )}
            </a>
          </Link>
          <SectionItems>
            {sections.map(({ NAME, PATH }: SectionJson, i) => (
              <Link key={i} href={`${PATH}`}>
                <a>{NAME.toUpperCase()}</a>
              </Link>
            ))}
          </SectionItems>
        </NavItems>
      </Container>
    </StyledHeader>
  );
}

export default Header;
