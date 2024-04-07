import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Img from 'next/image'
import Link from "next/link";

interface ProjectCardImgsProps {
  images: string[];
}

const ProjectCardImgs: React.FC<ProjectCardImgsProps> = ({ images }) => {
  return (
    <Carousel className="">
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            {/* <Link href={'/'} className="h-full w-full  m-auto"  target="_blank">
            <Img
              width={1000}
              height={1000}
              className=" aspect-square h-full object-fill w-full border-[1.5px] border-neutral-700 "
              src={img}
              alt="Principal image"
            />
          </Link> */}
          <div className="bg-red-50 w-full h-full"></div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectCardImgs;
