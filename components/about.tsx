import {Button} from '@/components/ui/button'

function About() {
  return (
    <div className="flex">
        <section className="flex flex-[60%] flex-col gap-6">
        <h1 className="text-6xl font-bold break-all">
        {`Hellow there, I'm KC.`}
      </h1>

      <h3 className="text-base font-normal leading-6 w-[90%]">
        {`Greetings! I'm a passionate web developer on a mission to
        bring your digital dreams to life. In today's dynamic online landscape,
        a powerful web presence is essential. Whether you're an aspiring
        entrepreneur, a small business owner, or a corporate entity, I am here
        to be your partner in the journey to online success.`}
      </h3>

      <div>
        <Button
        //   href="/contact"
          className="bg-neutral-800 font-medium w-[200px] transition-all hover:bg-neutral-600 duration-500"
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
