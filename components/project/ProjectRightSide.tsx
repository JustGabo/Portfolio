import React from "react";
import ProjectDescription from "./ProjectDescription";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectButtons from "./ProjectButtons";
import { Project } from "@/types";

interface ProjectRightSideProps{
    project: Project
}

const ProjectRightSide = ({project}: ProjectRightSideProps) => {
  return (
    <div className="lg:w-[40%] w-full flex flex-col gap-6">
      <ProjectDescription project={project} />

      <div className="flex flex-col justify-between gap-8 text-gray-300">
        <ProjectTechnologies project={project} />

        <ProjectButtons project={project} />
      </div>
    </div>
  );
};

export default ProjectRightSide;
