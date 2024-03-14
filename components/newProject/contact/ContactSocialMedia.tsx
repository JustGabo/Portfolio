import React from "react";
import Link from "next/link";

const ContactSocialMedia = () => {
  return (
    <article className="w-[90%] m-auto lg:px-32 p-10  flex flex-col gap-3 ">
      <p className="lg:text-[10px] text-xs text-gray-500">
        Join me in social media.
      </p>
      <div className="flex  lg:text-xs text-sm  items-center gap-5 text-white">
        <Link href="https://github.com/JustGabo" target="_blank">
          <p className="text-white text-xs select-yellow">Github</p>
        </Link>
        <span className="h-[1px] w-7 bg-yellow-500 mt-[2px]"></span>
        <Link href="https://www.instagram.com/ketchiao/?next=%2F" target="_blank">
          <p className="text-white text-xs select-yellow">Instagram</p>
        </Link>
        {/* <span className="h-[1px] w-7 bg-yellow-500 mt-[2px]"></span> */}
        {/* <span className="select-yellow">X</span> */}

      </div>
    </article>
  );
};

export default ContactSocialMedia;
