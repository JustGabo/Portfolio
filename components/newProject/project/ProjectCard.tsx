"use client";
import { Mouse } from "lucide-react";
import React, { useState } from "react";
import Img from "next/image";
import { Project } from "@/types";
import Link from "next/link";
import ProjectRedirects from "./ProjectRedirects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [active, setActive] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });

  return (
    <div
      className={`h-[100vh] w-[100vw] flex items-center  p-5  border-l relative border-black justify-center ${
        active[index] && "bg-[#130101] border-gray-50 transition  duration-200"
      }`}
    >
      <section
        className={`w-[100vw] h-[100vh] opacity-0 grid lg:grid-cols-[40%,1fr] gap-10 ${
          active[index] &&
          "opacity-100 duration-500 transition-opacity delay-200"
        }`}
      >
        <article className=" flex flex-col justify-center  items-center lg:p-20 p-10">
          <div className="flex flex-col h-[55vh] lg:h-full">
            <div className=" w-full h-auto flex  flex-col gap-3">
              <div>
                <h2 className="font-bold lg:text-8xl text-7xl  text-white">
                  {project.title}
                </h2>
                <h2 className="font-bold  lg:text-8xl text-7xl  text-white">
                  {project.subtitle}.
                </h2>
              </div>
              <span className="font-medium text-6xl lg:text-7xl text-yellow-500">
                0{project.index}
              </span>
            </div>
            <div className=" ml-auto flex-1 flex flex-col lg:w-[75%]  w-[75%] gap-3">
              <p className="lg:text-xs  text-sm  text-balance text-gray-400">
                {project.description}
              </p>
              <ProjectRedirects project={project} />
            </div>
          </div>
        </article>
        <article className=" lg:flex hidden  items-center justify-center w-full h-full ">
          {/* <Link className="h-[70%] m-auto" href={project.visit} target="_blank">
            <Img
              width={700}
              height={1000}
              className="rounded-md aspect-video h-full object-fill w-full border-[1.5px] border-neutral-700 "
              src={project.img}
              alt="Principal image"
            />
          </Link> */}
          <div className="w-[50%] flex flex-col items-center justify-center aspect-square rounded-full bg-yellow-500">
            <div className="flex items-center">
              <h2 className="text-8xl font-bold text-black ">
                {project.title.slice(0, 1)}
              </h2>
              <h2 className="text-8xl font-bold text-black ">
                {project.subtitle.slice(0, 1)}
              </h2>
            </div>
          </div>
        </article>
      </section>
      <section
        key={project.index}
        className={`w-full h-full flex items-center absolute z-10  justify-center ${
          active[index] && "-translate-y-[100vh] transition duration-500"
        }`}
      >
        <div
          className={`flex flex-col items-center justify-center  w-[70%] m-auto h-full `}
        >
          <div
            className={`    ${
              active[index] &&
              "transform -translate-y-44  opacity-0 transition duration-500 text-yellow-600  "
            }`}
          >
            <h2
              onClick={() =>
                setActive({
                  ...active,
                  [project.index.toString()]: true,
                })
              }
              className="cursor-pointer  text-2xl font-medium "
            >
              {project.title} {project.subtitle}
            </h2>
          </div>
        </div>
        <div
          className={`flex items-center gap-1 absolute bottom-10 ${
            active[index] && "opacity-0 transition-opacity duration-200"
          }`}
        >
          <Mouse className="w-5 h-5" />
          <p className="text-sm">Click the title to see the project details</p>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
