import React from "react";

const ContactSocialMedia = () => {
  return (
    <article className="w-[90%] m-auto lg:px-32 p-10  flex flex-col gap-3 ">
      <p className="lg:text-[10px] text-xs text-gray-500">Join me in social media.</p>
      <div className="flex  lg:text-xs text-sm  items-center gap-5 text-white">
        <span className="select-yellow">Github</span>
        <span className="h-[1px] w-7 bg-yellow-500 mt-[2px]"></span>
        <span className="select-yellow ">Instagram</span>
        <span className="h-[1px] w-7 bg-yellow-500 mt-[2px]"></span>
        <span className="select-yellow">X</span>
      </div>
    </article>
  );
};

export default ContactSocialMedia;
