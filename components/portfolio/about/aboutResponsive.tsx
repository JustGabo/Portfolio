import React from "react";

const AboutResponsive = () => {
  return (
    <article className="flex flex-col gap-3 h-[400px] lg:h-[calc(100dvh-56px)] w-full">
      <p className="lg:text-xs text-sm text-neutral-500  selection:text-yellow-500">
        <span className="text-yellow-500  selection:bg-yellow-500 selection:text-black  lg:text-sm text-base mr-1">
          Device Versatility.
        </span>
        Striving for responsive excellence ensures that every user, regardless
        of their device, enjoys a seamless experience.
      </p>
      <div className="bg-[#F6F6F6] p-10 group w-full rounded-xl relative flex flex-col  justify-between h-full">
        <div className="container">
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
        </div>
      </div>
    </article>
  );
};

export default AboutResponsive;
