import React from 'react'
// import {ModeToggle} from '@/components/modal'
import {Zap} from 'lucide-react'

function Navbar() {
  return (
    <div className='flex items-center justify-between'>
         <div className='flex items-center gap-[2px] text-yellow-300'>
         <Zap className='h-[30px]'></Zap>
        <h2 className='text-sm font-bold '>KETCHIAO</h2>
         </div>
        {/* <ul className='flex items-center gap-3 text-xs'>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul> */}
        {/* <ModeToggle /> */}
    </div>
  )
}

export default Navbar