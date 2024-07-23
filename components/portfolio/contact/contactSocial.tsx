import Link from "next/link";
import React from "react";

const ContactSocial = () => {
  return (
    <footer className="flex flex-col gap-2">
      <article className=" flex flex-col gap-2 ">
        <p className="text-neutral-500 lg:text-[10px] text-xs font-medium">
          Join me in here
        </p>
        <div className="flex  lg:text-xs text-sm  items-center gap-3 ">
          <Link href="https://github.com/JustGabo" target="_blank">
            <p className=" text-xs text-neutral-800 transition-all duration-300 hover:text-neutral-400">
              Github
            </p>
          </Link>
          <div className="w-10 h-[1px] bg-neutral-400/80 rounded-full" />
          <Link
            href="https://www.linkedin.com/in/gabriel-sorianoo/"
            target="_blank"
          >
            <p className=" text-xs text-neutral-800 transition-all duration-300 hover:text-neutral-400">
              Linkedin
            </p>
          </Link>
          <div className="w-10 h-[1px] bg-neutral-400/80 rounded-full" />
          <Link href="https://x.com/KetchaoDev" target="_blank">
            <p className=" text-xs text-neutral-800 transition-all duration-300 hover:text-neutral-400">
              X
            </p>
          </Link>
        </div>
      </article>
    </footer>
  );
};

export default ContactSocial;
