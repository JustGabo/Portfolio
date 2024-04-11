import Contact from "@/components/newProject/contact/Contact";
import Hero from "@/components/newProject/hero/hero";
import MobileProject from "@/components/newProject/project/MobileProject";
import React from "react";
import DesktopProject from '@/components/newProject/project/DesktopProject'

const Home = () => {
  return (
    <div className="">
      <section className="h-[100dvh] bg-[#130101]">
        <Hero />
      </section>
      <section className="overflow-hidden bg-gray-100">
        <article className="w-full lg:hidden h-full">
        <MobileProject />
        </article>
        <article className="w-full h-full hidden lg:block ">
          <DesktopProject/>
        </article>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
