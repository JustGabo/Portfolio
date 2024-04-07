"use client";
import { Mouse } from "lucide-react";
import React, { useState } from "react";
import Img from "next/image";
import { Project } from "@/types";
import Link from "next/link";
import ProjectRedirects from "./ProjectRedirects";
import ProjectCardImgs from "./ProjectCardImgs";

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
      className={`h-[100dvh] w-[100vw] bg-[#130101] flex items-center  p-5  border-l relative border-black justify-center ${
        active[index] && "bg-[#130101] border-gray-50 transition  duration-200"
      }`}
    >
      <section
        className={`w-[100vw] h-[100dvh] items-center  grid lg:grid-cols-[40%,1fr] 2xl:grid-cols-[50%,1fr] gap-10 ${
          active[index] &&
          "opacity-100 duration-500 transition-opacity delay-200"
        }`}
      >
        <article className=" flex flex-col justify-center  items-center lg:py-14 lg:px-24 2xl:p-24 p-10">
          <div className="flex flex-col h-[55dvh] lg:h-full">
            <div className=" w-full h-auto flex  flex-col gap-3">
              <div>
                <h2 className="font-bold select-yellow lg:text-8xl 2xl:text-9xl text-7xl  text-white">
                  {project.title}
                </h2>
                <h2 className="font-bold select-yellow lg:text-8xl text-7xl 2xl:text-9xl  text-white">
                  {project.subtitle}
                  <span className="text-yellow-600 select-none">.</span>
                </h2>
              </div>
              <span className="font-semibold text-6xl 2xl:text-8xl lg:text-7xl text-yellow-600">
                0{project.index}
              </span>
            </div>
            <div className=" ml-auto flex-1 flex flex-col lg:w-[75%] md:w-[50%]  w-[75%] gap-3">
              <p className="lg:text-sm 2xl:text-lg select-text text-sm  text-balance text-gray-400">
                {project.description}
              </p>
              <ProjectRedirects project={project} />
            </div>
          </div>
        </article>
        <article className="  lg:flex lg:flex-col poem lg:h-[60%] lg:overflow-y-auto   hidden  items-center justify-center w-full h-full ">
        {/* {project.img.map((img)=>{
            return (
              <div className="w-[95%] h-full bg-red-50">
             <Link className="h-full w-full  m-auto" href={project.visit} target="_blank">
            <Img
              width={1000}
              height={1000}
              className=" aspect-square h-full object-fill w-full border-[1.5px] border-neutral-700 "
              src={img}
              alt="Principal image"
            />
          </Link>
          </div>
            )
          })} */}          
          {/* <div className="w-[80%] h-[75%] bg-red-50">
             <Link className="h-full w-full  m-auto" href={project.visit} target="_blank">
            <Img
              width={1000}
              height={1000}
              className=" aspect-square h-full object-fill w-full border-[1.5px] border-neutral-700 "
              src={project.img}
              alt="Principal image"
            />
          </Link>
          </div> */}

          <div className="w-[50%] flex flex-col select-none hover:bg-blue-500 transition-colors hover:$} duration-500 items-center justify-center aspect-square rounded-full bg-yellow-600">
            <div className="flex items-center">
              <h2 className="text-9xl font-bold text-black ">
                {project.title.slice(0, 1)}
              </h2>
              <h2 className="text-9xl font-bold text-black ">
                {project.subtitle.slice(0, 1)}
              </h2>
            </div>
          </div>
        </article>
      </section>
      {/* <section
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
      </section> */}
    </div>
  );
};

export default ProjectCard;
