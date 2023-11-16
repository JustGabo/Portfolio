import Navbar from "@/components/navbar";
import About from "@/components/about";
import Projects from "@/components/projects";

function Page() {
  return (
    <div
      className="bg-[#111] text-white  px-4 py-8 lg:px-24 lg:py-20 
"
    >
     <div className="flex flex-col h-screen gap-40">
     <Navbar />
      <About />
     </div>

      <Projects />
    </div>
  );
}

export default Page;
