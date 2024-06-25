import Link from 'next/link'
import React from 'react'
import ContactSocial from './contactSocial'

const ContactCard = () => {
  return (
     <section className="w-full ml-auto  flex flex-col lg:gap-20">
        <article className="flex flex-col gap-3 lg:h-[calc(100dvh-56px)]  w-full">
          <div className="bg-[#F6F6F6] lg:p-10 px-5 py-10 gap-10 lg:gap-5 group w-full rounded-xl relative flex flex-col justify-between h-full">
            <header>
              <p className="text-yellow-500 text-sm font-medium selection:bg-yellow-500">
                Get in touch
              </p>
            </header>
            <main className="flex flex-col lg:gap-5 gap-10">
              <h2 className="text-2xl   lg:w-[80%] selection:text-black selection:bg-yellow-500">
                There is no better time to hook-up with me and start your next
                project<span className='text-yellow-500 selection:text-white'>.</span>
              </h2>
              <p className="lg:text-xs text-sm text-neutral-500  lg:w-[80%] selection:text-yellow-500">
                Now is the opportune moment to connect with me and embark on
                your next digital journey together.
              </p>
              <div className="flex items-center gap-2  hover ">
                <div className="h-12 flex  items-center transition-all duration-200">
                  <div className="  h-[1px] -rotate-45 w-8 bg-yellow-500  transition-all duration-200 " />
                </div>
                <Link
                  className="lg:text-xs text-sm  font-medium underline underline-offset-2"
                  href="mailto:ovallegabriel123@gmail.com"
                >
                  Let's talk
                </Link>
              </div>
            </main>
          <ContactSocial/>
          </div>
        </article>
      </section> 
  )
}

export default ContactCard