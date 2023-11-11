import Navbar from '@/components/navbar'
import About from '@/components/about'
import Projects from '@/components/projects'

function Page() {
  return (
    <div className=' grid  py-20 gap-40 px-24'>
        <Navbar />
        <About />
        <Projects />
    </div>
  )
}

export default Page