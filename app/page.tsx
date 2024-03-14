import Contact from "@/components/newProject/contact/Contact";
import Hero from "@/components/newProject/hero/hero";
import Project from "@/components/newProject/project/Project";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <section className="h-screen bg-[#130101]">
        <Hero />
      </section>
      <section className="overflow-hidden bg-gray-100">
        <Project />
        <Contact />
      </section>
    </div>
  );
};

export default Home;
