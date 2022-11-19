import React, { useEffect, useRef } from "react";

import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import sections from "@objects/sections";

const icons: JSX.Element[] = [
  <HomeIcon />,
  <MenuBookIcon />,
  <WorkIcon />,
  <CodeIcon />,
  <ContactMailIcon />,
];

interface DrawerProps {
  setOpen: (open) => void;
}

function Drawer({ setOpen }: DrawerProps) {
  const ref = useRef(null);
  const firstUpdate = useRef(true);

  useEffect(() => {
    const handleClick = (e) => {
      if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
      }
      if (e.target !== ref.current) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div className="fixed bg-black/[0.4] w-[100vw] h-[100vh] z-[1]" />
      <div
        ref={ref}
        className={`fixed right-0 top-0 w-[60%] max-w-[250px] h-[100vh] bg-white z-[1] p-[20px]`}
      >
        {sections.map(({ name, path }, i) => {
          const Icon = icons[i];
          return (
            <div className="w-full">
              <Link key={i} href={`${path}`}>
                <a className="font-['Roboto Mono'] text-[18px] capitalize text-black/[0.75] font-bold flex gap-[5px] mb-[10px]">
                  {Icon}
                  <p>{name.toUpperCase()}</p>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Drawer;
