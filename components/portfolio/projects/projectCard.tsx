import Image from "next/image";
import Link from "next/link";
import React from "react";
import projects from "@/portfolio.json";

const ProjectCard = () => {
  return (
    <section className="w-full ml-auto flex flex-col gap-20">
      {projects.map((project) => {
        return (
          <Link key={project.index} href={`${project.visit}`} target="_blank">
            <article className="flex cursor-pointer flex-col gap-3 lg:h-screen h-[calc(100dvh-450px)] w-full">
              <div className="flex items-center justify-between">
                <p className="lg:text-xs text-sm text-neutral-500  selection:text-yellow-500">
                  <span className="text-yellow-500  selection:bg-yellow-500 selection:text-black text-base lg:text-sm mr-1">
                    {project.title}.
                  </span>
                  {project.description}
                </p>
              </div>
              <div className="bg-[#F6F6F6] p-10 group w-full rounded-xl relative flex items-center justify-center h-full">
                <div
                  className={` ${
                    project.device === "phone" ? "w-[35%]" : "w-[70%]"
                  } h-full relative flex items-center justify-center`}
                >
                  <Image
                    className="object-contain drop-shadow-2xl shadow-black z-40  group-hover:scale-105 transition-all duration-200"
                    alt="Image"
                    fill
                    src={project.img[0]}
                  />
                  {/* <div className="absolute bg-black/80 blur-xl h-[65%]  w-[10%] right-2 z-0" /> */}
                </div>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default ProjectCard;
