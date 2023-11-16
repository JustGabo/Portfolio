import {Button} from '@/components/ui/button'

function About() {
  return (
    <div className="flex flex-col lg:flex-row">
        <section className="flex flex-[100%] lg:flex-[60%] flex-col gap-6">
        <h1 className="text-4xl font-bold break-all lg:text-6xl">
        {`Hellow there!`}
      </h1>

      <h3 className="text-sm lg:text-base text-gray-400 font-normal leading-6 w-full lg:w-[90%]">
        {`Passionate web developer on a mission to
        bring your digital dreams to life. In today's dynamic online landscape,
        a powerful web presence is essential. Whether you're an aspiring
        entrepreneur, a small business owner, or a corporate entity, I am here
        to be your partner in the journey to online success.`}
      </h3>

      <div>
        <Button
        //   href="/contact"
          className="bg-neutral-800 font-medium w-[150px] text-xs lg:text-sm lg:w-[200px] transition-all hover:bg-neutral-600 duration-500"
        >
          Get in touch
        </Button>
      </div>
        </section>

        <section className="flex-[40%]">
            
        </section>

    </div>
  );
}

export default About;
