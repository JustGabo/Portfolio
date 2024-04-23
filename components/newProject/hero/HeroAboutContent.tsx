import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroAboutContent = () => {
  useGSAP(() => {
    gsap.from("#welcome", {
      opacity: 0,
      duration: 0.7,
      delay: 0.7,
    });
  });

  return (
    <section className="h-[calc(100dvh-100px)]   flex items-center justify-center">
      <article className="flex    flex-col gap-3">
        <h1 className="text-3xl select-yellow text-yellow-600 font-bold lg:text-2xl">
          Front-End Developer
        </h1>

        <h3 className="text-sm lg:w-[70%] w-[85%] select-text text-balance md:text-lg lg:text-base text-gray-400 font-normal leading-6">
          {`Passionate web developer on a mission to
        bring your digital dreams to life. Whether you're an aspiring
        entrepreneur, a small business owner, or a corporate entity, I am here
        to build them.`}
        </h3>

        <div className="flex items-center gap-3">
          <button className=" font-medium text-xs p-0 lg:text-sm   hover:bg-transparent  transition-all bg-transparent duration-500">
            <Link href="mailto:ovallegabriel123@gmail.com">
              <Mail className="w-5 h-5 text-yellow-600 hover:text-yellow-700 transition-all" />
            </Link>
          </button>
          <button className="bg-transparent p-0 hover:bg-transparent">
            <Link href="https://github.com/JustGabo" target="_blank">
              <Github className="w-5 h-5 text-yellow-600 hover:text-yellow-700 transition-all" />
            </Link>
          </button>
          <button className="bg-transparent p-0 hover:bg-transparent">
            <Link href="https://www.linkedin.com/in/gabriel-sorianoo/" target="_blank">
              <Linkedin strokeWidth={1.5} className="w-5 h-5 text-yellow-600 hover:text-yellow-700 transition-all" />
            </Link>
          </button>
          {/* <button className="bg-transparent p-0 hover:bg-transparent">
            <Link
              href="https://www.linkedin.com/in/gabriel-sorianoo/"
              target="_blank"
            >
              <Linkedin className="w-5 h-5 text-yellow-600 hover:text-yellow-700 transition-all" />
            </Link>
          </button> */}
        </div>
      </article>
    </section>
  );
};

export default HeroAboutContent;
