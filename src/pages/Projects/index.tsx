import ProjectCard from "./components/ProjectCard";
import { projects } from "./projects";

const Projects = () => {
  return (
    <div className="w-full h-full flex flex-wrap gap-4 p-4">
      {projects.map((project) => (
        <ProjectCard {...project} />
      ))}
    </div>
  );
};

export default Projects;
