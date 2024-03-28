import Projects from "@/components/oldProjectVersion/projects";
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
      <Projects />
    </main>
  );
}

export default Page;

// return (
//     <div
//       key={project.index}
//       className={`h-[100vh] w-[100vw] flex items-center  p-5  border-l relative border-black justify-center ${
//         active[index] &&
//         "bg-[#130101] border-gray-50 transition  duration-200"
//       }`}
//     >
//       <section
//         className={`w-[100vw] h-[100vh]  grid grid-cols-[40%,1fr] gap-10 ${
//           active[index] &&
//           "opacity-100 duration-300 transition-opacity delay-200"
//         }`}
//       >
//         <article className=" flex flex-col p-3">
//           <div className=" w-full h-auto flex flex-col gap-3">
//             <h2 className="font-bold text-8xl text-white">
//               {project.title}.
//             </h2>
//             <span className="font-medium text-7xl text-yellow-500">
//               0{project.index}
//             </span>
//           </div>
//           <div className=" ml-auto flex-1 flex flex-col  w-[80%] gap-3">
//             <p className="text-xs    text-balance text-gray-400">
//               {project.description}
//             </p>
//             <div className="flex items-center gap-3 ">
//               <button className=" font-medium text-xs p-0 lg:text-sm   hover:bg-transparent  transition-all bg-transparent duration-500">
//                 <Link href={project.visit} target="_blank">
//                   <LucideArrowUpRightSquare className="w-5 h-5 text-yellow-500 hover:text-yellow-700 transition-all" />
//                 </Link>
//               </button>
//               <button className="bg-transparent p-0 hover:bg-transparent">
//                 <Link href={project.github} target="_blank">
//                   <Github className="w-5 h-5 text-yellow-500 hover:text-yellow-700 transition-all" />
//                 </Link>
//               </button>
//             </div>
//           </div>
//         </article>
//         <article className=" flex items-center justify-center">
//           <Link href={project.visit}>
//             <Img
//               width={700}
//               height={700}
//               className="object-cover rounded-md  w-full border-[1.5px] border-neutral-700 "
//               src={project.img}
//               alt="Principal image"
//             />
//           </Link>
//         </article>
//       </section>
//       <section
//         key={project.index}
//         className={`w-full h-full bg-gray-100 flex absolute top-0 z-0 left-0 items-center justify-center ${
//           active[index] && "opacity-0 transition-opacity hidden duration-300"
//         }`}
//       >
//         <div
//           className={`flex flex-col items-center justify-center  w-[70%] m-auto h-full `}
//         >
//           <div
//             className={`    ${
//               active[index] &&
//               "transform -translate-y-44 opacity-0 transition duration-500 text-yellow-600  "
//             }`}
//           >
//             <h2
//               onClick={() =>
//                 setActive({
//                   ...active,
//                   [parseInt(project.index)]: true,
//                 })
//               }
//               className="cursor-pointer  text-2xl font-medium "
//             >
//               {project.title}
//             </h2>
//           </div>
//         </div>
//         <div
//           className={`flex items-center gap-1 absolute bottom-10 ${
//             active[index] &&
//             "opacity-0 transition-opacity duration-200"
//           }`}
//         >
//           <Mouse className="w-5 h-5" />
//           <p className="text-sm">
//             Click the title to see the project details
//           </p>
//         </div>
//       </section>
//     </div>
//   );
