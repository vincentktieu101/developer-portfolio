import React from "react";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

import {
  BottomAccent,
  TypeIcon,
} from "./styles";

interface ExperienceCardProps {
  type: string;
  title: string;
  company: string;
  primaryColor?: string;
  secondaryColor?: string;
  location: string;
  time: string;
  text: string;
}

function ExperienceCard(props: ExperienceCardProps) {
  const {
    type,
    title,
    company,
    primaryColor = "black",
    secondaryColor = "black",
    location,
    time,
    text,
  } = props;

  // TODO: move this to utils folder
  const copyToClipBoard = (primaryColor: string) => {
    navigator.clipboard.writeText(primaryColor);
    alert(`copied color: ${primaryColor}!`);
  };

  return (
    <div className="w-full max-w-[900px] overflow-hidden mb-[20px] border-[1px] rounded-md border-gray-100 shadow-md">
      <div className="flex">
        <div className="bg-color-white w-[80px]">
          <TypeIcon className="flex justify-center items-center w-[60px] h-[60px] rounded-md" primaryColor={primaryColor} secondaryColor={secondaryColor}>
            {type === "work" && <WorkIcon fontSize="large" />}
            {type === "school" && <SchoolIcon fontSize="large" />}
          </TypeIcon>
        </div>
        <div className="w-full p-[20px]">
          <div className="text-[36px] font-bold leading-[1.2]">{title}</div>
          <div className="text-[20px] font-bold">
            {company}, {location} ({time})
          </div>
          {text && <p className="leading-2 mt-[20px]">{text}</p>}
        </div>
      </div>
      <BottomAccent className="flex justify-center text-[10px] h-[15px] w-full bg-[${primaryColor}] text-transparent hover:text-white" primaryColor={primaryColor}
        onClick={() => copyToClipBoard(primaryColor)}
      >
        company color: {primaryColor}
      </BottomAccent>
    </div>
  );
}

export default ExperienceCard;
