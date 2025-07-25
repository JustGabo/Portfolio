import React from "react";
import Interaction from '@/components/portfolio/experiments/interaction'
import Loader from "./loader";
import BallAndBar from "./ballAndBar";
import Catapult from "./catapult";

const ExperimentsCard = () => {
  return (
    <section className="w-full ml-auto  flex flex-col gap-20">
        <article className="flex  cursor-pointer flex-col gap-3 lg:h-screen h-[500px] w-full">
              <div className="flex items-center justify-between">
                <p className="lg:text-xs text-sm font- text-neutral-500/80  selection:text-yellow-500">
                  <span className="text-black  selection:bg-yellow-500 selection:text-black text-base lg:text-sm mr-1">
                    Info
                  </span>
                  Component
                </p>
              </div>
              <div className="bg-[#F6F6F6] p-10 group w-full rounded-xl relative flex items-center justify-center h-full">                
                    <Interaction />
              </div>
            </article>

            <article className="flex  cursor-pointer flex-col gap-3 lg:h-screen h-[500px] w-full">
              <div className="flex items-center justify-between">
                <p className="lg:text-xs text-sm font- text-neutral-500/80  selection:text-yellow-500">
                  <span className="text-black  selection:bg-yellow-500 selection:text-black text-base lg:text-sm mr-1">
                    Ball and Bar
                  </span>
                  Component
                </p>
              </div>
              <div className="bg-[#F6F6F6] p-10 group w-full rounded-xl relative flex items-center justify-center h-full">                
                    <BallAndBar />
              </div>
            </article>

            <article className="flex  cursor-pointer flex-col gap-3 lg:h-screen h-[500px] w-full">
              <div className="flex items-center justify-between">
                <p className="lg:text-xs text-sm font- text-neutral-500/80  selection:text-yellow-500">
                  <span className="text-black  selection:bg-yellow-500 selection:text-black text-base lg:text-sm mr-1">
                    Loader
                  </span>
                  Component
                </p>
              </div>
              <div className="bg-[#F6F6F6] p-10 group w-full rounded-xl relative flex items-center justify-center h-full">                
                    <Loader />
              </div>
            </article>
    </section>
  );
};

export default ExperimentsCard;
