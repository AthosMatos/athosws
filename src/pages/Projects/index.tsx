import ProjectCard from "./components/ProjectCard";
import { projects } from "./projects";

const Projects = () => {
  return (
    <div className="w-full h-full flex md:!flex-wrap md:!flex-row md:!items-start items-center flex-col gap-4 p-4">
      {projects.map((project) => (
        <ProjectCard {...project} />
      ))}
    </div>
  );
};

export default Projects;
