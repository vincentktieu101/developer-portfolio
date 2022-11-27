import React, { useEffect, useState } from "react";

import Link from "next/link";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "components/Drawer";

import sections from "@objects/sections";

function Header() {
  const [navShrink, setNavShrink] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setNavShrink(!!window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-[1] flex flex-row justify-between shadow-md text-black p-[10px] transition ease-out duration-200 ${
          navShrink ? "bg-white" : "bg-white/[0.2]"
        }`}
      >
        <Container>
          <div className="flex justify-between">
            <Link href="/">
              <a>
                {navShrink ? (
                  <h1 className="flex text-[20px] gap-[10px]">
                    <p className="font-['SilkScreen']">Vincent Tieu</p>
                    <p>|</p>
                    <p className="font-['Roboto Mono']">Software Engineer</p>
                  </h1>
                ) : (
                  <>
                    <h1 className="flex flex-col items-center">
                      <p className="font-['SilkScreen'] text-[45px] font-[700]">
                        Vincent Tieu
                      </p>
                      <p className="font-['Roboto Mono'] text-[20px] font-[300] mt-[-10px]">
                        Software Engineer
                      </p>
                    </h1>
                  </>
                )}
              </a>
            </Link>

            <div className="hidden lg:flex items-center gap-[20px]">
              {sections.map(({ name, path }, i) => (
                <Link key={i} href={path}>
                  <a className="font-['Roboto Mono'] text-[18px] capitalize text-black/[0.75]">
                    {name}
                  </a>
                </Link>
              ))}
            </div>

            <div className="lg:hidden flex items-center">
              <button onClick={() => setShowDrawer(true)}>
                <MenuIcon className="text-[32px]" />
              </button>
            </div>
          </div>
        </Container>
      </header>
      {showDrawer && <Drawer setOpen={setShowDrawer} />}
    </>
  );
}

export default Header;
