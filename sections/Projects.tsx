import Container from "@mui/material/Container";
import projects from "@objects/projects";

function Projects() {
  return (
    <div id="projects">
      <Container>
        <h2>Projects</h2>
        <pre>{JSON.stringify(projects, null, 2)}</pre>
      </Container>
    </div>
  );
}

export default Projects;
