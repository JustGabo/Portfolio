import Navbar from "@/components/navbar";
import About from "@/components/about";
import Projects from "@/components/projects";

function Page() {
  return (
    <div
      className="grid bg-[#111] text-white gap-56 lg:gap-40 px-8 py-10 lg:px-24 lg:py-20 
"
    >
      <Navbar />
      <About />

      <Projects />
    </div>
  );
}

export default Page;
