import { Project } from "@/types";

interface ProjectTechnologiesProps {
  project: Project;
}

const ProjectTechnologies = ({ project }: ProjectTechnologiesProps) => {
  return (
    <ul className="flex flex-col gap-1 ml-4 text-xs list-disc lg:ml-4">
      {project.technologies.map((technology, i) => {
        return <li key={i}>{technology}</li>;
      })}
    </ul>
  );
};

export default ProjectTechnologies;
