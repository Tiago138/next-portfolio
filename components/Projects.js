import ProjectsCard from "./ProjectsCard";

import projectsData from "../public/projectsData";

function Projects() {
  const data = projectsData;

  const projectsElement = data.map((project) => (
    <ProjectsCard
      key={project.id}
      image={project.img}
      site={project.site}
      github={project.github}
    />
  ));

  return <div className="projects__items">{projectsElement}</div>;
}

export default Projects;
