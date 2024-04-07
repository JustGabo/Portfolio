import newProjects from "@/projects.json";
import React from "react";
import ProjectRedirects from "./ProjectRedirects";
import { Project } from "@/types";

interface DesktopProjectCardProps{
  projects: Project[]
}

const DesktopCard:React.FC<DesktopProjectCardProps> = ({projects}) => {
  return (
    <main className="h-[100dvh] w-[100dvw] flex items-center justify-center bg-[#130101] p-10 text-white">
      <section className="w-[90%] m-auto h-full flex flex-col justify-center">
        <div className="uppercase text-base font-light text-yellow-600">
          Recents /
        </div>
        <article className=" w-full pt-5   grid grid-cols-4 gap-16">
          {projects.map((project) => {
            return (
              <div key={project.index} className="flex h-min  group flex-col">
                <div className="  flex flex-col  gap-3 rounded-sm p-3">
                  <div className="relative">
                    <h2 className="font-bold  select-yellow lg:text-lg  text-white">
                      {project.title}
                    </h2>
                    <h2 className="font-bold  select-yellow lg:text-5xl  text-white">
                      {project.subtitle}
                      <span className="text-yellow-600 select-none">.</span>
                    </h2>
                    <div className="absolute top-1 group-hover:opacity-100 group-hover:-translate-y-0 translate-y-3 transition-all duration-200 opacity-0 right-0">
                      <ProjectRedirects project={project} />
                    </div>
                  </div>
                  <div className="  flex-1 flex flex-col lg:w-[90%] md:w-[50%]  w-[75%] gap-3">
                    <p className="lg:text-xs  select-text text-sm  text-balance text-gray-400">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-yellow-600 text-end text-lg font-semibold">
                    0{project.index}
                  </span>
                </div>
              </div>
            );
          })}
        </article>
      </section>
    </main>
  );
};

export default DesktopCard;
