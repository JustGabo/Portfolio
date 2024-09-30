"use client";
import { ArrowUpRight, Zap } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import projects from "@/portfolio.json";
import Link from "next/link";
import Interaction from "@/components/interaction";
import AboutCards from "@/components/portfolio/about/aboutCards";
import ContactCard from "@/components/portfolio/contact/contactCard";
import ProjectCard from "@/components/portfolio/projects/projectCard";
import { setDefaultHighWaterMark } from "stream";
import ExperienceCard from "./experience/experienceCard";

const HomePage = () => {
  const [state, setState] = useState("work");
  const [active, setActive] = useState("work");
  const [notHidden, setNotHidden] = useState("work");
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [showViewProject, setshowViewProject] = useState(false);

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      seeingPosition(event);
    });

    return window.removeEventListener("mousemove", seeingPosition);
  }, []);

  const seeingPosition = (event: MouseEvent) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <main className="flex lg:flex-row flex-col lg:gap-10 gap-20  relative lg:px-10 px-5 py-16 ">
      <section className="lg:w-[40%] w-full flex flex-col pb-10  lg:fixed gap-20  lg:h-screen ">
        <header className="flex items-center selection:bg-yellow-500 selection:text-black">
          <Zap strokeWidth={1.5} className="text-neutral-500  lg:w-4 lg:h-4" />
          <p className="text-neutral-500 lg:text-[10px] uppercase font-semibold">
            Ketchao
          </p>
        </header>

        {/* <div
          style={{
            top: `${position.y - 25}px`,
            left: `${position.x + 25}px`,
          }}
          className={`${
            showViewProject ? "flex" : "hidden"
          } fixed z-50  items-center gap-1  bg-black transition-all cursor-none text-white px-5 py-3 rounded-full text-[11px]`}
        >
          <p>View Project</p> <ArrowUpRight className="w-4 h-4" />
        </div> */}

        <article className="flex flex-col gap-5">
          <div className="flex flex-col lg:gap-5 gap-8">
          <div className="flex flex-col ">
            <h3 className="lg:text-xs text-sm   selection:text-yellow-500">
              Gabriel Soriano.
            </h3>
            <h1 className="lg:text- text-sm  text-neutral-400 selection:text-black selection:bg-yellow-500">
              Web Developer.
            </h1>
          </div>
          <p className="lg:text-xs text-sm  text-neutral-600 lg:w-[70%] text-balance selection:text-yellow-500">
            With more than 4 years of experience in this world, I'm still
            learning new things daily and of course so deep in love with my job.
          </p>
          </div>

          <p className="lg:text-xs text-neutral-400 font-medium">Working at <Link className="text-black" href={"https://www.vidss.app/"} target="_blank">Vidss.app</Link></p>
        </article>

        <article className="pb-10 hidden  items-end lg:flex w-full flex-1 content-end ">
          <ul className="flex  text-xs relative h-[25px] text-neutral-700   items-center ">
            {/* <li
              onClick={() => {
                setState("about");
                setActive("");
                setTimeout(() => {
                  setNotHidden("about");
                }, 400);
                setTimeout(() => {
                  setActive("about");
                }, 600);
              }}
              className="cursor-pointer w-20 text-center"
            >
              About
            </li> */}
            <li
              onClick={() => {
                setState("work");
                setActive("");
                setTimeout(() => {
                  setNotHidden("work");
                }, 400);

                setTimeout(() => {
                  setActive("work");
                }, 600);
              }}
              className="cursor-pointer w-16 text-center"
            >
              Work
            </li>

            <li
              onClick={() => {
                setState("experience");
                setActive("");
                setTimeout(() => {
                  setNotHidden("experience");
                }, 400);

                setTimeout(() => {
                  setActive("experience");
                }, 600);
              }}
              className="cursor-pointer w-16 text-center"
            >
              Experience
            </li>

            <li
              onClick={() => {
                setState("contact");
                setActive("");
                setTimeout(() => {
                  setNotHidden("contact");
                }, 400);

                setTimeout(() => {
                  setActive("contact");
                }, 600);
              }}
              className="cursor-pointer w-24 text-center"
            >
              Contact
            </li>

            <div
              className={`${state === "work" && "translate-x-[0px] w-16"}
              ${state === "experience" && "translate-x-[58px] w-20"}
              ${
                state === "contact" && "translate-x-[135px] w-20"
              } transform  absolute bottom-0  h-[1.5px] rounded-md transition-all duration-1000 bg-black/50`}
            />
          </ul>
        </article>
      </section>

      <section className=" h-full lg:w-[50%]  w-full lg:ml-auto">
        {/* <article
          className={`${notHidden === "about" ? "flex" : "hidden"} ${
            active === "about" && "opacity-100"
          } opacity-0  transition-all  duration-300`}
        >
          <AboutCards />
        </article> */}

        <article
          onMouseEnter={() => setshowViewProject(true)}
          onMouseLeave={() => setshowViewProject(false)}
          className={`${notHidden === "work" ? "flex" : "hidden"}  ${
            active === "work" && "opacity-100"
          } opacity-0 cursor-pointer -z-50 transition-all  duration-300`}
        >
          <ProjectCard showPreview />
        </article>
        <article
          className={`${notHidden === "experience" ? "flex" : "hidden"} ${
            active === "experience" && "opacity-100"
          } opacity-0  transition-all  duration-300`}
        >
          <ExperienceCard />
        </article>
        <article
          className={` ${notHidden === "contact" ? "flex" : "hidden"} ${
            active === "contact" && "opacity-100"
          } opacity-0   transition-all duration-300`}
        >
          <ContactCard />
        </article>
      </section>

      <article className="h-14 lg:hidden pb-2  justify-center bg-white z-50 flex items-center bottom-0 fixed w-[91%] mx-auto flex-1  ">
        <ul className="flex text-sm relative   text-neutral-700 w-full  h-full  items-center ">
          {/* <li
              onClick={() => {
                setState("about");
                setActive("");
                setTimeout(() => {
                  setNotHidden("about");
                }, 400);
                setTimeout(() => {
                  setActive("about");
                }, 600);
              }}
              className="cursor-pointer w-full text-center bg-green-"
            >
              About
            </li> */}
          <li
            onClick={() => {
              setState("work");
              setActive("");
              setTimeout(() => {
                setNotHidden("work");
              }, 400);

              setTimeout(() => {
                setActive("work");
              }, 600);
            }}
            className="cursor-pointer w-full  text-center bg-green-"
          >
            Work
          </li>

          <li
            onClick={() => {
              setState("experience");
              setActive("");
              setTimeout(() => {
                setNotHidden("experience");
              }, 400);

              setTimeout(() => {
                setActive("experience");
              }, 600);
            }}
            className="cursor-pointer w-full  text-center bg-green-"
          >
            Experience
          </li>

          <li
            onClick={() => {
              setState("contact");
              setActive("");
              setTimeout(() => {
                setNotHidden("contact");
              }, 400);

              setTimeout(() => {
                setActive("contact");
              }, 600);
            }}
            className="cursor-pointer w-full text-center bg-green-"
          >
            Contact
          </li>

          <div
            className={`${state === "work" && "translate-x-[0px] w-[140px]"} 
              ${state === "experience" && "translate-x-[120px] w-[150px]"}
            ${
              state === "contact" && "translate-x-[270px] w-[120px]"
            } transform  absolute bottom-0  h-[1.5px] rounded-md transition-all duration-1000 bg-black/50`}
          />
        </ul>
      </article>
    </main>
  );
};

export default HomePage;

// ${
//   state === "about" && "translate-x-0 w-20"
// }

// ${
//   state === "about" && "translate-x-0 w-32"
// }
