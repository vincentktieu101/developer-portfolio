import React from "react";

import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

import { StyledExperienceCard, SideColumn, TypeIcon, Content } from "./styles";

interface ExperienceCardProps {
  type: string;
  title: string;
  company: string;
  location: string;
  time: string;
  text: string;
}

function ExperienceCard(props: ExperienceCardProps) {
  const { type, title, company, location, time, text } = props;
  return (
    <StyledExperienceCard>
      <SideColumn type={type}>
        <TypeIcon>
          {type === "work" && <WorkIcon />}
          {type === "school" && <SchoolIcon />}
        </TypeIcon>
      </SideColumn>
      <Content>
        <h3>{title}</h3>
        <h4>{company}, {location} ({time})</h4>
        <p>{text}</p>
      </Content>
    </StyledExperienceCard>
  );
}

export default ExperienceCard;
