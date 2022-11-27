import React, { useState } from "react";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import LaunchIcon from "@mui/icons-material/Launch";

function ExperienceCard({
  type,
  title,
  company,
  primaryColor = "#000000",
  secondaryColor = "#ffffff",
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
      className="w-full overflow-hidden border-[1px] max-w-[900px] mb-[20px] rounded-md border-gray-100 shadow-md"
      onMouseEnter={() => setIsMouseHover(true)}
      onMouseLeave={() => setIsMouseHover(false)}
    >
      <div className="flex">
        <div className="w-[80px]">
          <div
            className={`flex justify-center items-center w-[60px] h-[60px] rounded-br-md ${
              link ? "hover:cursor-pointer" : ""
            }`}
            style={{ backgroundColor: primaryColor, color: secondaryColor }}
            onClick={() => {
              if (!link) return;
              window.open(link, "_bank");
            }}
          >
            <Icon fontSize="large" />
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
        className="flex justify-center text-[10px] h-[15px] hover:cursor-pointer"
        style={{ backgroundColor: primaryColor }}
        onClick={(e) => {
          e.stopPropagation();
          navigator.clipboard.writeText(primaryColor);
          alert(`copied color: ${primaryColor}!`);
        }}
      >
        <p className={`${isMouseHover ? "text-white" : "text-transparent"}`}>
          company colors: {primaryColor}, {secondaryColor}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
