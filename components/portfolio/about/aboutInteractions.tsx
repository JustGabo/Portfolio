import Interaction from "@/components/portfolio/experiments/interaction";
import React from "react";

const AboutInteractions = () => {
  return (
    <article className="flex flex-col gap-3 h-[600px] lg:h-[calc(100dvh-115px)] w-full">
      <p className="lg:text-xs text-sm text-neutral-500  selection:text-yellow-500">
        <span className="text-yellow-500  selection:bg-yellow-500 selection:text-black  lg:text-sm text-base mr-1">
          Interactions.
        </span>
        Cause I believe the beauty of design lies in the small details and they
        can transform a good interface into a great one.
      </p>
      <div className="bg-[#F6F6F6] p-10 group w-full rounded-xl items-center relative flex flex-col  justify-center h-full">
        <Interaction />
      </div>
    </article>
  );
};

export default AboutInteractions;
