import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

function Projects() {
  return (
    <div className="flex flex-col gap-20 text-neutral-200">
      <h2 className="text-4xl font-medium">Works</h2>

      <section className="grid gap-60">

      <article className="flex flex-col items-center p-2 lg:flex-row gap-14">
        <div className="lg:w-[60%] w-full border border-gray-200 h-[450px]"></div>
        <div className="lg:w-[40%] w-full flex flex-col gap-6">
            <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold">Jammy</h3>
          <p className="text-sm w-[95%] leading-5 font-lightz">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ut
            provident repellat. Libero fugit illo ut impedit cum quis accusamus
            fuga recusandae quibusdam asperiores, quia, tempore neque facilis
            quo sint ad optio nisi. Nostrum quasi aliquid magni quae animi nobis
            ipsa deserunt, minima est rerum laborum atque aut consequatur
            provident.
          </p>
            </div>


          <div className="flex flex-col items-center justify-between gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="w-full text-xs bg-neutral-800">Developed with...</Button>
              </PopoverTrigger>
              <PopoverContent className="text-xs bg-[#020202] border-neutral-700 text-gray-300">
                <p>TypeScript</p>
              </PopoverContent>
            </Popover>
            <Button  className="w-full text-xs bg-neutral-800">Visit</Button>
          </div>
        </div>
      </article>

      <article className="flex flex-col items-center p-2 lg:flex-row gap-14">
        <div className="lg:w-[60%] w-full border border-gray-200 h-[400px]"></div>
        <div className="lg:w-[40%] w-full flex flex-col gap-6">
            <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold">Jammy</h3>
          <p className="text-sm w-[95%] leading-5 font-lightz">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ut
            provident repellat. Libero fugit illo ut impedit cum quis accusamus
            fuga recusandae quibusdam asperiores, quia, tempore neque facilis
            quo sint ad optio nisi. Nostrum quasi aliquid magni quae animi nobis
            ipsa deserunt, minima est rerum laborum atque aut consequatur
            provident.
          </p>
            </div>


          <div className="flex flex-col items-center justify-between gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="w-full text-xs bg-neutral-800">Developed with...</Button>
              </PopoverTrigger>
              <PopoverContent className="text-xs">
                <p>TypeScript</p>
              </PopoverContent>
            </Popover>
            <Button  className="w-full text-xs bg-neutral-800">Visit</Button>
          </div>
        </div>
      </article>
      </section>
    </div>
  );
}

export default Projects;
