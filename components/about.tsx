import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import Link from "next/link";

 const About =()=> {
  return (
    <main className="h-[calc(100vh-30px)] lg:h-auto flex  items-center justify-centerss">
    <div className="flex flex-col lg:flex-row">
      <section className="flex flex-[100%] lg:flex-[60%] flex-col gap-3">
        <h1 className="text-4xl font-bold lg:text-2xl">
          Front-End Developer
        </h1>

        <h3 className="text-sm lg:text-sm text-gray-400 font-normal leading-6 w-full">
          {`Passionate web developer on a mission to
        bring your digital dreams to life. Whether you're an aspiring
        entrepreneur, a small business owner, or a corporate entity, I am here
        to build them.`}
        </h3>

        <div className="flex items-center gap-3">
          <Button
            className=" font-medium text-xs p-0 lg:text-sm   hover:bg-transparent  transition-all bg-transparent duration-500"
          >
            <Link href="mailto:ovallegabriel123@gmail.com">
              <Mail className="w-5 h-5 text-yellow-300 hover:text-yellow-500 transition-all" />
            </Link>
          </Button>
          <Button className="bg-transparent p-0 hover:bg-transparent">
            <Link href='https://github.com/JustGabo' target="_blank">
            <Github className="w-5 h-5 text-yellow-300 hover:text-yellow-500 transition-all" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
    </main>
  );
}

export default About
