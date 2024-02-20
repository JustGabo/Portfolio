import React from "react";
import projects from '@/projects.json'
import ProjectImg from "./ProjectImg";
import ProjectRightSide from "./ProjectRightSide";


const ProjectsContent = () => {
  return (
    <section className="">
      <article className="grid gap-48 md:gap-60">
        {projects.map((project, i) => {
          return (
            <article
              key={i}
              className="flex flex-col items-center gap-10 p-2 md:flex-row lg:flex-row"
            >
              <ProjectImg project={project} />
              <ProjectRightSide project={project} />
            </article>
          );
        })}
      </article>
    </section>
  );
};

export default ProjectsContent;
