// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Img from "next/image";
import * as projects from "@/projects.json";
import Link from "next/link";

function Projects() {
  return (
    <div className="flex flex-col gap-20 text-neutral-200">
      <h2 className="text-4xl font-medium">Works</h2>

      <section className="">
        <div className="grid gap-60">
          {projects.Projects.map((project) => {
            return (
              <article className="flex flex-col items-center gap-10 p-2 lg:flex-row">
                <img
                  className="object-cover rounded-md lg:w-[65%] w-full border border-gray-600 "
                  src={project.img}
                  alt="principal image"
                />
                <div className="lg:w-[40%] w-full flex flex-col gap-6">
                  <div className="flex flex-col gap-6">
                    <h3 className="text-xl font-semibold text-yellow-500">
                      {project.title}
                    </h3>
                    <p className="text-xs lg:text-xs w-[95%] leading-5 text-gray-300 font-light">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col justify-between gap-8 text-gray-300">
                    {/* <Popover>
                  <PopoverTrigger asChild>
                    <Button className="w-full text-xs bg-neutral-800">Code</Button>
                  </PopoverTrigger>
                  <PopoverContent className="text-xs bg-[#020202] border-neutral-700 text-gray-300">
                    <p>TypeScript</p>
                  </PopoverContent>
                </Popover> */}
                    <ul className="flex flex-col gap-1 ml-4 text-xs list-disc lg:ml-4">
                      {project.tecnologies.map((technology) => {
                        return <li>{technology}</li>;
                      })}
                    </ul>
                    <div className="flex flex-col w-full gap-2">
                      <Button className="w-full text-yellow-400  text-xs bg-neutral-800 p-0  transition duration-300 hover:bg-neutral-800/50">
                        <Link
                          className=" w-full flex items-center justify-center h-full"
                          href={project.github}
                          target="_blank"
                        >
                          Code
                        </Link>
                      </Button>
                      <Button className="w-full text-xs text-yellow-400 bg-neutral-800  transition duration-300 hover:bg-neutral-800/50">
                        <Link
                          className=" w-full flex items-center justify-center h-full"
                          href={project.link}
                          target="_blank"
                        >
                          Visit
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Projects;

// <article className="flex flex-col items-center p-2 lg:flex-row gap-14">
// <Img
//   className="object-cover  lg:w-[65%] w-full border border-gray-200 "
//   src={JammyHero}
//   alt="Jammy Hero"
// />
// <div className="lg:w-[35%] w-full flex flex-col gap-6">
//   <div className="flex flex-col gap-8">
//     <h3 className="text-3xl font-semibold text-yellow-500">Jammy</h3>
//     <p className="text-xs lg:text-xs w-[95%] leading-5 font-light text-gray-300">
//       An app that allows you to create lyrics, chords, tabs, and the
//       main melody of a song. You can also share your songs with other
//       users and collaborate with them.
//     </p>
//   </div>

//   <div className="flex flex-col justify-between gap-8">
//     {/* <Popover>
//     <PopoverTrigger asChild>
//       <Button className="w-full text-xs bg-neutral-800">Code</Button>
//     </PopoverTrigger>
//     <PopoverContent className="text-xs bg-[#020202] border-neutral-700 text-gray-300">
//       <p>TypeScript</p>
//     </PopoverContent>
//   </Popover> */}
//     <ul className="flex flex-col gap-1 ml-4 text-xs list-disc text-gray-300 lg:ml-4">
//       <li>NextJs</li>
//       <li>Tailwind</li>
//       <li>TypeScript</li>
//     </ul>
//     <div className="flex flex-col w-full gap-2">
//       <Button className="w-full text-xs bg-neutral-800  transition duration-300 hover:bg-neutral-800/50">
//         Code
//       </Button>
//       <Button className="w-full text-xs bg-neutral-800  transition duration-300 hover:bg-neutral-800/50">
//         Visit
//       </Button>
//     </div>
//   </div>
// </div>
// </article>

// <article className="flex flex-col items-center gap-10 p-2 lg:flex-row">
// <Img
//   className="object-cover lg:w-[65%] w-full border border-gray-200 "
//   src={LinkSharing}
//   alt="Jammy Hero"
// />
// <div className="lg:w-[40%] w-full flex flex-col gap-6">
//   <div className="flex flex-col gap-8">
//     <h3 className="text-3xl font-semibold text-yellow-500">
//       Link Sharing
//     </h3>
//     <p className="text-xs lg:text-xs w-[95%] leading-5 text-gray-300 font-light">
//       A personalized link sharing platform designed to streamline and
//       simplify how you connect with others online.
//     </p>
//   </div>

//   <div className="flex flex-col justify-between gap-8 text-gray-300">
//     {/* <Popover>
//     <PopoverTrigger asChild>
//       <Button className="w-full text-xs bg-neutral-800">Code</Button>
//     </PopoverTrigger>
//     <PopoverContent className="text-xs bg-[#020202] border-neutral-700 text-gray-300">
//       <p>TypeScript</p>
//     </PopoverContent>
//   </Popover> */}
//     <ul className="flex flex-col gap-1 ml-4 text-xs list-disc lg:ml-4">
//       <li>React</li>
//       <li>Tailwind</li>
//       <li>TypeScript</li>
//     </ul>
//     <div className="flex flex-col w-full gap-2">
//       <Button className="w-full text-xs bg-neutral-800  transition duration-300 hover:bg-neutral-800/50">
//         Code
//       </Button>
//       <Button className="w-full text-xs bg-neutral-800  transition duration-300 hover:bg-neutral-800/50">
//         Visit
//       </Button>
//     </div>
//   </div>
// </div>
// </article>
