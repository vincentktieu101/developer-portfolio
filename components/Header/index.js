import React from "react";
import Link from "next/link";

import Container from "@mui/material/Container";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import Drawer from "@material-ui/core/Drawer";
// import DrawerContent from "../DrawerContent";

// import NavLink from "./NavLink";
// import { BrandName, BrandDesc } from "./styles";

const HOME = "home";
const ABOUT = "about";
const EXPERIENCE = "experience";
const PROJECTS = "projects";
const CONTACT = "contact";

const sections = [HOME, ABOUT, EXPERIENCE, PROJECTS, CONTACT];

const navShrink = false;

function Header() {
  return (
    <header>
      <Container>
        <div>
          <Link href="/">
            <a>
              {navShrink ? (
                <h1>
                  <p>VINCENT'S</p>
                  <p>Developer Portfolio</p>
                </h1>
              ) : (
                <>
                  <h1>VINCENT'S DEVELOPER PORTFOLIO</h1>
                </>
              )}
            </a>
          </Link>
          <div>
            {sections.map((section, i) => (
              <div key={i}>{section}</div>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
