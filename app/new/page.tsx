
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


{
  /* <article className="flex cursor-pointer flex-col gap-3 h-screen w-full">
          <p className="text-[10px] text-neutral-500 font-medium">
            <span className="text-yellow-500 font-bold text-xs mr-1">
              Learny.
            </span>
            Web application dedicated to the languages learnning.
          </p>
          <div className="bg-[#F6F6F6] p-10 group w-full rounded-xl relative flex items-center justify-center h-full">
            <div className="w-[35%] h-full relative flex items-center justify-center">
              <Image
                className="object-contain z-40  group-hover:scale-105 transition-all duration-300"
                alt="Image"
                fill
                src={"/learnyCel.png"}
              />
              <div className="absolute bg-black/80 blur-xl h-[65%]  w-[10%] right-2 z-0" />
            </div>
          </div>
        </article>

        <article className="flex flex-col cursor-pointer gap-3 h-screen w-full">
          <p className="text-[10px] text-neutral-500 font-medium">
            <span className="text-yellow-500 font-bold text-xs mr-1">
              Unity Map.
            </span>
            Built an End-to-End web application ment to help the collaboration
            for teammates.
          </p>

          <div className="bg-gray-100 p-10 group w-full rounded-xl relative flex items-center justify-center h-full">
            <div className="w-[35%] h-full relative flex items-center justify-center">
              <Image
                className="object-contain z-40  group-hover:scale-105 transition-all duration-300"
                alt="Image"
                fill
                src={"/unityPhone.png"}
              />
              <div className="absolute bg-black/80 blur-xl h-[65%]  w-[10%] right-2 z-0" />
            </div>
          </div>
        </article>

        <article className="flex flex-col cursor-pointer gap-3 h-screen w-full">
          <p className="text-[10px] text-neutral-500 font-medium">
            <span className="text-yellow-500 font-bold text-xs mr-1">
              Stayo.
            </span>
            Web Application that facilitates vacation rentals, connecting
            property owners with travelers seeking accommodations worldwide.
          </p>

          <div className="bg-gray-100 p-10 group w-full rounded-xl relative flex items-center justify-center h-full">
            <div className="w-[70%] h-full relative flex items-center justify-center">
              <Image
                className="object-contain z-40  group-hover:scale-105 transition-all duration-300"
                alt="Image"
                fill
                src={"/stayoTablet.png"}
              />
              <div className="absolute bg-black/80 blur-xl h-[65%]  w-[10%] right-2 z-0" />
            </div>
          </div>
        </article>

        <article className="flex flex-col cursor-pointer gap-3 h-screen w-full">
          <p className="text-[10px] text-neutral-500 font-medium">
            <span className="text-yellow-500 mr-1 font-bold text-xs">
              Netflix Clone.
            </span>
            Proposed myself to build an End-to-End clone of this project with
            some changes on the UI.
          </p>

          <div className="bg-gray-100 p-10 group w-full rounded-xl relative flex items-center justify-center h-full">
            <div className="w-[70%] h-full relative flex items-center justify-center">
              <Image
                className="object-contain z-40  group-hover:scale-105 transition-all duration-300"
                alt="Image"
                fill
                src={"/oneDayTablet.png"}
              />
              <div className="absolute bg-black/80 blur-xl h-[65%]  w-[10%] right-2 z-0" />
            </div>
          </div>
        </article> */
}

// import Image from "next/image";
// import React from "react";

// const NewPage = () => {
//   return (
//     <main className="bg-[#130101] text-yellow-600">
//       <section className="lg:w-[60%] mx-auto flex flex-col pt-20 h-full">
//        <div className="flex gap-10 ">
//         <h2 className="text-neutral-600  text-xs font-semibold">Nov 21, 2023</h2>
//        <article className="flex-1 relative pb-5  border-l-2 border-neutral-700 h-[500px]">
//           <div className="w-full h-full ml-10 flex flex-col gap-5">
//             {/* <p className="text-neutral-500 font-semibold text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, porro.</p> */}
//             <div className=" h-full flex flex-col gap-5 p-5">
//             <header className="flex gap-3 items-center">
//                 <div className="w-14 h-14 rounded-full border-2 border-neutral-700 flex items-center justify-center">
//                     <p className="font-bold text-yellow-500 text-sm">JA</p>
//                 </div>
//                 <div className="flex flex-col gap-1">
//                     <p className="text-sm font-semibold text-yellow-500">Jammy App</p>
//                     <span className="text-xs text-neutral-700 font-semibold">@JammyApp</span>
//                 </div>
//             </header>
//             <p className="text-sm text-neutral-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate cumque saepe dolores a architecto odio!</p>
//             <div className="relative w-full  h-full">
//                 <Image  fill alt="Image" src={'/form2.png'}/>
//             </div>
//             </div>
//           </div>
//           <div className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-yellow-700"></div>
//         </article>
//        </div>

//        <div className="flex gap-10 ">
//         <h2 className="text-neutral-700  text-xs font-semibold">Dec 29, 2023</h2>
//        <article className="flex-1 relative pb-5  border-l-2 border-neutral-700 h-[550px]">
//           <div className="w-full h-full ml-10 flex flex-col gap-5">
//             {/* <p className="text-neutral-500 font-semibold text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, porro.</p> */}
//             <div className=" h-full flex flex-col gap-5 p-5">
//             <header className="flex gap-3 items-center">
//                 <div className="w-14 h-14 rounded-full border-2 border-neutral-700 flex items-center justify-center">
//                     <p className="font-bold text-yellow-500 text-sm">LA</p>
//                 </div>
//                 <div className="flex flex-col gap-1">
//                     <p className="text-sm font-semibold text-yellow-500">Learny App</p>
//                     <span className="text-xs text-neutral-700 font-semibold">@LearnyApp</span>
//                 </div>
//             </header>
//             <p className="text-sm text-neutral-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate cumque saepe dolores a architecto odio!</p>
//             <div className="relative w-full  h-full">
//                 <Image fill alt="Image" src={'/learnyPc2.png'}/>
//             </div>
//             </div>
//           </div>
//           <div className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-yellow-700"></div>
//         </article>
//        </div>

//        <div className="flex gap-10 ">
//         <h2 className="text-neutral-700  text-xs font-semibold">Dec 29, 2023</h2>
//        <article className="flex-1 relative pb-5  border-l-2 border-neutral-700 h-[550px]">
//           <div className="w-full h-full ml-10 flex flex-col gap-5">
//             {/* <p className="text-neutral-500 font-semibold text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, porro.</p> */}
//             <div className=" h-full flex flex-col gap-5 p-5">
//             <header className="flex gap-3 items-center">
//                 <div className="w-14 h-14 rounded-full border-2 border-neutral-700 flex items-center justify-center">
//                     <p className="font-bold text-yellow-500 text-sm">LA</p>
//                 </div>
//                 <div className="flex flex-col gap-1">
//                     <p className="text-sm font-semibold text-yellow-500">Learny App</p>
//                     <span className="text-xs text-neutral-700 font-semibold">@LearnyApp</span>
//                 </div>
//             </header>
//             <p className="text-sm text-neutral-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate cumque saepe dolores a architecto odio!</p>
//             <div className="relative w-full  h-full">
//                 <Image  className="object-contain" fill alt="Image" src={'/stayo.png'}/>
//             </div>
//             </div>
//           </div>
//           <div className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-yellow-700"></div>
//         </article>
//        </div>
//       </section>
//     </main>
//   );
// };

// export default NewPage;
