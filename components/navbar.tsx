import React from 'react'
import {ModeToggle} from '@/components/modal'

function Navbar() {
  return (
    <div className='flex justify-between  items-center'>
        <h2 className='text-xl font-semibold'>KC</h2>
        {/* <ul className='flex items-center gap-3 text-xs'>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul> */}
        <ModeToggle />
    </div>
  )
}

export default Navbar