import Link from "next/link";
import React from "react";

const AboutInfo = () => {
  return (
    <article className="flex flex-col gap-3  lg:h-[calc(100dvh-115px)] w-full">
      <p className="text-[13px] text-neutral-500/90  selection:text-yellow-500">
        <span className="  selection:bg-yellow-500 text-black selection:text-black   mr-1">
          Who I Am.
        </span>
        There's a bit of information more about me.
      </p>
      <div className="bg-[#F8F8F8] lg:p-10 px-5 py-10 group w-full  rounded-xl relative flex flex-col gap-10 h-full">
        <div className="flex flex-col gap-3  text-sm">
          <h2 className="text-yellow-500 text-base ">About me.</h2>
          <p className="text-[#7F7F7F] leading-5">
            Hello, my name is{" "}
            <Link
              target="_blank"
              href="https://x.com/KetchaoDev"
              className="text-yellow-500"
            >
              Gabriel
            </Link>
            . I'm from the Dominican Republic. When I'm not working on a
            project, you can find me at the gym or running. I also play the
            guitar and enjoy composing my own music.
          </p>

          <p className="text-neutral-500  leading-5">
            I have to say that I consider myself a movie lover. I really enjoy
            watching films from different directors, though{" "}
            <Link
              target="_blank"
              href="https://es.wikipedia.org/wiki/Tim_Burton"
              className="text-yellow-500"
            >
              Tim Burton
            </Link>{" "}
            is one of my favorites. Taking photos is another passion of mine; I
            always enjoy finding beautiful angles everywhere.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm lg:text-xs">
          <h2 className="text-yellow-500 text-base lg:text-sm">Work.</h2>
          <p className="text-[#7F7F7F]  leading-5">
            I'm also known as{" "}
            <Link
              target="_blank"
              href="https://x.com/KetchaoDev"
              className="text-yellow-500"
            >
              ketchao
            </Link>{" "}
            in a work environment. I studied software engineering at{" "}
            <Link
              target="_blank"
              href="https://es.wikipedia.org/wiki/Universidad_O%26M"
              className="text-yellow-500"
            >
              O&M University
            </Link>{" "}
            and have over 3 years of self-learning experience. During this time,
            I found a small but great team to collaborate with. Alongside{" "}
            <Link
              target="_blank"
              href="https://www.stylessh.dev/"
              className="text-yellow-500"
            >
              Alan Daniel
            </Link>
            , also known as{" "}
            <Link
              target="_blank"
              href="https://www.stylessh.dev/"
              className="text-yellow-500"
            >
              Stylessh
            </Link>
            , and{" "}
            <Link
              target="_blank"
              href="https://www.ernestrodry.com/"
              className="text-yellow-500"
            >
              Ernest Rodry
            </Link>
            , we've built different projects. Thanks to them, I learned how to
            work with a team and handle various situations.
          </p>
        </div>
      </div>
    </article>
  );
};

export default AboutInfo;
