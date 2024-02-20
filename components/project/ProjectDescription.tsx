import { Project } from "@/types";
import React from "react";

interface ProjectDescriptionProps {
  project: Project;
}

const ProjectDescription = ({ project }: ProjectDescriptionProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-semibold text-yellow-500">{project.title}</h3>
      <p className="text-xs lg:text-xs w-[95%] leading-5 text-gray-300 font-light">
        {project.description}
      </p>
    </div>
  );
};

export default ProjectDescription;
