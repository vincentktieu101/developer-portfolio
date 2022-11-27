import React, { useState } from "react";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import LaunchIcon from "@mui/icons-material/Launch";

function ExperienceCard({
  type,
  title,
  company,
  primaryColor = "black",
  secondaryColor = "black",
  link,
  location,
  time,
  text,
}: {
  type: string;
  title: string;
  company: string;
  primaryColor?: string;
  secondaryColor?: string;
  link?: string;
  location: string;
  time: string;
  text: string;
}) {
  const [isMouseHover, setIsMouseHover] = useState(false);

  let Icon;
  if (isMouseHover && link) {
    Icon = LaunchIcon;
  } else if (type === "work") {
    Icon = WorkIcon;
  } else if (type === "school") {
    Icon = SchoolIcon;
  } else {
    Icon = WorkIcon;
  }

  return (
    <div
      className={`w-full max-w-[900px] overflow-hidden mb-[20px] border-[1px] rounded-md border-gray-100 shadow-md ${
        link ? "hover:cursor-pointer" : ""
      }`}
      onMouseEnter={() => setIsMouseHover(true)}
      onMouseLeave={() => setIsMouseHover(false)}
      onClick={() => {
        if (!link) return;
        window.open(link, "_bank");
      }}
    >
      <div className="flex">
        <div className="relative w-[80px]">
          <div className="absolute">
            <div
              className="flex justify-center items-center w-[60px] h-[60px] rounded-br-md"
              style={{ backgroundColor: primaryColor, color: secondaryColor }}
            >
              <Icon fontSize="large" />
            </div>
          </div>
        </div>
        <div className="w-full p-[20px]">
          <div className="text-[36px] font-bold leading-[1.2]">{title}</div>
          <div className="text-[20px] font-bold">
            {company}, {location} ({time})
          </div>
          {text && <p className="leading-2 mt-[20px]">{text}</p>}
        </div>
      </div>
      <div
        className="flex justify-center text-[10px] h-[15px] w-full"
        style={{ backgroundColor: primaryColor }}
        onClick={(e) => {
          e.stopPropagation();
          navigator.clipboard.writeText(primaryColor);
          alert(`copied color: ${primaryColor}!`);
        }}
      >
        <p
          className={`${
            isMouseHover && primaryColor !== "black"
              ? "text-white"
              : "text-transparent"
          }`}
        >
          company color: {primaryColor}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
