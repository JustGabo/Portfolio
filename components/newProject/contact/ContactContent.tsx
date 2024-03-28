import React from "react";
import ContactSocialMedia from "./ContactSocialMedia";
import Link from "next/link";

const ContactContent = () => {
  return (
    <section className="w-[100vw] absolute top-0 left-0 bg-[#130101]  z-0 h-[100dvh] flex flex-col  justify-center">
      <article className="w-[90%] m-auto lg:px-32 px-10 lg:pt-16 flex flex-col gap-5  bg-[#130101c7]">
        <h5 className="text-yellow-500 text-sm select-none ">Get in touch</h5>
        <h3 className="text-white select-yellow text-4xl font-medium lg:w-[70%]">
          There is no better time to hook-up with me and start your next project
          <span className="text-yellow-500 select-yellow">.</span>
        </h3>
        <p className="text-gray-400 select-yellow text-xs w-[85%] lg:w-[60%] text-balance">
          Now is the opportune moment to connect with me and embark on your next
          digital journey together.
        </p>
        <div className="flex ml-3 items-center gap-5 ">
          <span className="h-8 w-[1px] rotate-45 bg-yellow-500"></span>

            <Link href="mailto:ovallegabriel123@gmail.com">
              <p className="text-white text-xs select-yellow">Let's talk</p>
            </Link>
        </div>
      </article>
      <ContactSocialMedia />
    </section>
  );
};

export default ContactContent;
