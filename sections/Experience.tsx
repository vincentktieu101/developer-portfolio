import Container from "@mui/material/Container";
import experiencesArray, { ExperienceJson } from "@objects/experiences";

function ExperienceItem(props: ExperienceJson) {
  return (
    <>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <br />
    </>
  );
}

function Experience() {
  return (
    <div id="experience">
      <Container>
        {/* Should use Section Header Tag */}
        <h2>Experience</h2>
        {experiencesArray.map((experienceItem: ExperienceJson, i) => (
          <ExperienceItem key={i} {...experienceItem} />
        ))}
      </Container>
    </div>
  );
}

export default Experience;
