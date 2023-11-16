import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Img from 'next/image'
import JammyHero from '@/src/public/jammyHero.png'
import LinkSharing from '@/src/public/Link2.png'

function Projects() {
  return (
    <div className="flex flex-col gap-20 text-neutral-200">
      <h2 className="text-4xl font-medium">Works</h2>

      <section className="grid gap-60">
        <article className="flex flex-col items-center p-2 lg:flex-row gap-14">
            <Img className="object-cover  lg:w-[65%] w-full border border-gray-200 " src={JammyHero} alt="Jammy Hero" />
          <div className="lg:w-[35%] w-full flex flex-col gap-6">
            <div className="flex flex-col gap-8">
              <h3 className="text-3xl font-semibold">Jammy</h3>
              <p className="text-xs lg:text-sm w-[95%] leading-5 font-lightz">
                An app that allows you to create lyrics, chords, tabs, and the main melody of a song. You can also share your songs with other users and collaborate with them.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-8">
              {/* <Popover>
              <PopoverTrigger asChild>
                <Button className="w-full text-xs bg-neutral-800">Code</Button>
              </PopoverTrigger>
              <PopoverContent className="text-xs bg-[#020202] border-neutral-700 text-gray-300">
                <p>TypeScript</p>
              </PopoverContent>
            </Popover> */}
              <ul className="flex flex-col gap-1 ml-4 text-xs list-disc lg:ml-4">
                <li>NextJs</li>
                <li>Tailwind</li>
                <li>TypeScript</li>
              </ul>
              <div className="flex flex-col w-full gap-2">
                <Button className="w-full text-xs bg-neutral-800">Code</Button>
                <Button className="w-full text-xs bg-neutral-800">Visit</Button>
              </div>
            </div>
          </div>
        </article>

        <article className="flex flex-col items-center gap-10 p-2 lg:flex-row">
        <Img className="object-cover lg:w-[65%] w-full border border-gray-200 " src={LinkSharing} alt="Jammy Hero" />
          <div className="lg:w-[40%] w-full flex flex-col gap-6">
            <div className="flex flex-col gap-8">
              <h3 className="text-3xl font-semibold">Link Sharing</h3>
              <p className="text-xs lg:text-sm w-[95%] leading-5 font-lightz">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                ut provident repellat. Libero fugit illo ut impedit cum quis
                accusamus fuga recusandae quibusdam asperiores, quia, tempore
                neque facilis quo sint ad optio nisi. Nostrum quasi aliquid
                magni quae animi nobis ipsa deserunt, minima est rerum laborum
                atque aut consequatur provident.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-8">
              {/* <Popover>
              <PopoverTrigger asChild>
                <Button className="w-full text-xs bg-neutral-800">Code</Button>
              </PopoverTrigger>
              <PopoverContent className="text-xs bg-[#020202] border-neutral-700 text-gray-300">
                <p>TypeScript</p>
              </PopoverContent>
            </Popover> */}
              <ul className="flex flex-col gap-1 ml-4 text-xs list-disc lg:ml-4">
                <li>React</li>
                <li>Tailwind</li>
                <li>TypeScript</li>
              </ul>
              <div className="flex flex-col w-full gap-2">
                <Button className="w-full text-xs bg-neutral-800">Code</Button>
                <Button className="w-full text-xs bg-neutral-800">Visit</Button>
              </div>
            </div>
          </div>
        </article>

      </section>
    </div>
  );
}

export default Projects;
