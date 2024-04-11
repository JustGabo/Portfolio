// import Projects from "@/components/oldProjectVersion/projects";
import About from "@/components/about";
import Navbar from "@/components/navbar";

function Page() {
  return (
    <main
      className="bg-[#010101] text-white px-4 md:px-10 py-8 lg:px-32  lg:py-20 
"
    >
      <section className="flex flex-col h-[100dvh] lg:gap-40">
        <Navbar />
        <About />
      </section>
      {/* <Projects /> */}
    </main>
  );
}

export default Page;
