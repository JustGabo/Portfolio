"use client";
import React, { useEffect } from "react";
import experience from "@/experience.json";
import Image from "next/image";
import Link from "next/link";

const ExperienceCard = () => {
  return (
    <section className="w-full ml-auto flex flex-col gap-20">
      {experience.map((experience) => {
        return (
          <Link
            key={experience.index}
            href={`${experience.visit}`}
            target="_blank"
            className="z-10 "
          >
            <article className="flex  cursor-pointer flex-col gap-3 lg:h-screen h-[500px] w-full">
              <div className="flex items-center justify-between">
                <p className="lg:text-xs text-sm font-medium text-neutral-500/80">
                  <span className="text-black text-base lg:text-sm mr-1">
                    {experience.title}. <span className="lg:text-xs text-neutral-600">August 2023 - September 2024.</span>
                  </span>
                </p>
              </div>
              <div className="bg-[#F6F6F6] group w-full rounded-xl relative flex items-center overflow-hidden justify-center h-[300px]">
                <div
                  className={`h-full w-full relative flex items-center justify-center`}
                >
                  <Image
                    className="object-cover  drop-shadow-2xl shadow-black z-40  group-hover:scale-105 transition-all duration-200"
                    alt="Image"
                    fill
                    src={experience.logo}
                  />
                  {/* <div className="absolute bg-black/80 blur-xl h-[65%]  w-[10%] right-2 z-0" /> */}
                </div>
              </div>

              <div className="flex flex-col mt-3 gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[13px] ">About</h3>
                  <p className="text-xs text-neutral-500">{experience.about}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[13px] ">Role</h3>
                  <p className="text-xs text-neutral-500">{experience.role}</p>
                </div>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default ExperienceCard;
