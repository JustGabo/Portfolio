"use client";
import { ArrowUpRight, Zap } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Interaction from "@/components/portfolio/experiments/interaction";
import AboutCards from "@/components/portfolio/about/aboutCards";
import ContactCard from "@/components/portfolio/contact/contactCard";
import ProjectCard from "@/components/portfolio/projects/projectCard";
import { setDefaultHighWaterMark } from "stream";
import { ExternalLink } from "lucide-react";
import ExperimentsCard from "./experiments/experimentsCard";

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
        <article className="flex flex-col lg:gap-5 gap-8">
          <div className="flex flex-col ">
            <h3 className="lg:text-xs text-sm   selection:text-yellow-500">
              Gabriel Soriano.
            </h3>
            <h1 className="lg:text- text-sm  text-neutral-400 selection:text-black selection:bg-yellow-500">
              Web Developer.
            </h1>
          </div>
          <p className="lg:text-xs text-sm text-neutral-600 lg:w-[70%] text-balance selection:text-yellow-500">
            With more than 4 years of experience in this world, I'm still
            learning new things daily and of course so deep in love with my job.
          </p>

          <div className="flex lg:text-xs font-medium gap-1 items-center">
            <p className=" text-neutral-400">Working at </p>
            <div className="flex items-center overflow-y-hidden group gap-1">
              <Link
                href={"https://vidss.app/"}
                target="_blank"
                className="text-black"
              >
                Vidss.app
              </Link>
              <Link target="_blank" href={"https://vidss.app/"}>
                <ExternalLink className="opacity-0 translate-y-5 w-3 h-3 text-black group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 ease-out" />
              </Link>
            </div>
          </div>
        </article>

        <article className="pb-10 hidden  items-end lg:flex w-full flex-1  content-end ">
          <ul className="flex text-xs relative h-[25px] text-neutral-700   items-center ">
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

            <li
              onClick={() => {
                setState("experiments");
                setActive("");
                setTimeout(() => {
                  setNotHidden("experiments");
                }, 400);

                setTimeout(() => {
                  setActive("experiments");
                }, 600);
              }}
              className="cursor-pointer w-32 text-center"
            >
              Experiments
            </li>

            <div
              className={`${state === "work" && "translate-x-[0px] w-16"} ${
                state === "contact" && "translate-x-[64px] w-24"
              } ${
                state === "experiments" && "translate-x-[160px] w-32"
              } transform  absolute bottom-0  h-[1.5px] rounded-md transition-all duration-1000 bg-black/50`}
            />
          </ul>
        </article>
      </section>

      <section className=" h-full lg:w-[50%]  w-full lg:ml-auto">

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
          className={` ${notHidden === "contact" ? "flex" : "hidden"} ${
            active === "contact" && "opacity-100"
          } opacity-0   transition-all duration-300`}
        >
          <ContactCard />
        </article>

        <article
          className={` ${notHidden === "experiments" ? "flex" : "hidden"} ${
            active === "experiments" && "opacity-100"
          } opacity-0   transition-all duration-300`}
        >
          <ExperimentsCard />
        </article>
      </section>

      <article className="h-14 lg:hidden pb-2  justify-center bg-white z-50 flex items-center bottom-0 fixed w-[91%] mx-auto flex-1  ">
        <ul className="flex text-sm relative   text-neutral-700 w-full  h-full  items-center ">
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

          <li
            onClick={() => {
              setState("experiments");
              setActive("");
              setTimeout(() => {
                setNotHidden("experiments");
              }, 400);

              setTimeout(() => {
                setActive("experiments");
              }, 600);
            }}
            className="cursor-pointer w-full text-center bg-green-"
          >
            Experiments
          </li>

          <div
            className={`${state === "work" && "translate-x-[0px] w-[33%]"}   ${
              state === "contact" && "translate-x-[100%] w-[33%]"
            } ${
              state === "experiments" && "translate-x-[200%] w-[33%]"
            }  transform  absolute bottom-0  h-[1.5px] rounded-md transition-all duration-1000 bg-black/50`}
          />
        </ul>
      </article>
    </main>
  );
};

export default HomePage;
