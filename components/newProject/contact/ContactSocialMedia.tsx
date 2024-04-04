import React from "react";
import Link from "next/link";

const ContactSocialMedia = () => {
  return (
    <article className="w-[90%] m-auto lg:px-32 p-10  flex flex-col gap-3 ">
      <p className="lg:text-[10px] text-xs text-gray-400 select-text">Join me in here.</p>
      <div className="flex  lg:text-xs text-sm  items-center gap-5 text-white">
        <Link href="https://github.com/JustGabo" target="_blank">
          <p className="text-white text-xs select-text">Github</p>
        </Link>
        <span className="h-[1px] w-7 bg-yellow-500 mt-[2px]"></span>
        <Link
          href="https://www.linkedin.com/in/gabriel-sorianoo/"
          target="_blank"
        >
          <p className="text-white text-xs select-text">Linkedin</p>
        </Link>
        <span className="h-[1px] w-7 bg-yellow-500 mt-[2px]"></span>
        <Link href="https://twitter.com/ketchao_dev" target="_blank">
          <p className="text-white text-xs select-text">X</p>
        </Link>
      </div>
    </article>
  );
};

export default ContactSocialMedia;
