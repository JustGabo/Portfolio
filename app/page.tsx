import Navbar from "@/components/navbar";
import About from "@/components/about";
import Projects from "@/components/projects";

function Page() {
  return (
    <main
      className="bg-[#010101] text-white  px-4 py-8 lg:px-32  lg:py-20 
"
    >
      <section className="flex flex-col h-screen gap-40">
        <Navbar />
        <article className="h-[60%] lg:h-auto flex items-center justify-center">
          <About />
        </article>
      </section>

      <Projects />
    </main>
  );
}

export default Page;
