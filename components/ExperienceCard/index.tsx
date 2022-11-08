import React from "react";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

import {
  StyledExperienceCard,
  BottomAccent,
  Flexbox,
  SideColumn,
  TypeIcon,
  Content,
  ContentHeader,
  ContentSubHeader,
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
    primaryColor,
    secondaryColor,
    location,
    time,
    text,
  } = props;

  const copyToClipBoard = (primaryColor: string) => {
    navigator.clipboard.writeText(primaryColor);
    alert(`copied color: ${primaryColor}!`);
  };

  return (
    <StyledExperienceCard primaryColor={primaryColor}>
      <Flexbox>
        <SideColumn>
          <TypeIcon primaryColor={primaryColor} secondaryColor={secondaryColor}>
            {type === "work" && <WorkIcon fontSize="large" />}
            {type === "school" && <SchoolIcon fontSize="large" />}
          </TypeIcon>
        </SideColumn>
        <Content>
          <ContentHeader>{title}</ContentHeader>
          <ContentSubHeader>
            {company}, {location} ({time})
          </ContentSubHeader>
          {text && <p>{text}</p>}
        </Content>
      </Flexbox>
      <BottomAccent
        primaryColor={primaryColor}
        onClick={() => copyToClipBoard(primaryColor)}
      >
        company color: {primaryColor}
      </BottomAccent>
    </StyledExperienceCard>
  );
}

export default ExperienceCard;
