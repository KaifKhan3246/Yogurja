import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import {X,Menu}from 'lucide-react'
const Navbar = () => {
  const [open,setOpen]=useState(false);
  const handle=()=>{
    setOpen(!open);
  }
  return (
    <div>
      <div className='flex justify-between bg-white p-1 md:p-3 '>
        <img className='h-14 flex   object-cover object-center' src='https://tse2.mm.bing.net/th/id/OIP.0yozgFWlW6RlipJCFfn7RwHaHa?pid=Api&h=220&P=0' alt='YOGURJA'/>
        <div className='hidden md:flex font-semibold transition-all duration-300 gap-4'>
        <Link className='hover:underline hover:opacity-60 decoration-green-300 decoration-2' to='/'>Home</Link>
        <Link className='hover:underline hover:opacity-60 decoration-green-300 decoration-2' to='/About'>About</Link>
        <Link className='hover:underline hover:opacity-60 decoration-2 decoration-green-300' to='/Services'>Services</Link>
        <Link className='hover:underline hover:opacity-60 decoration-2 decoration-green-300' to='/Contact'>Contact</Link>
        <Link className='hover:underline hover:opacity-60 decoration-2 decoration-green-300 underline-offset-4' to='/Blog'>Blog</Link>
        <Link className='hover:underline hover:opacity-60 decoration-2 decoration-green-300 underline-offset-4' to='/Gallery'>Gallery</Link>
        </div>
        <div className='hidden md:flex'>
        <Link className='bg-orange-500 w-fit h-fit px-4 py-2 opacity-80 text-white font-semibold' to='/Contact'>Book Appointment</Link>
        </div>
      </div>
      <div>
<button className='md:hidden cursor-grab' onClick={handle}>{open?<X />:<Menu />}</button>
<div className={`bg-white rounded-lg absolute top-16 left-5 text-center text-xl transition-all-duration-300 md:hidden ${open?"block":"hidden"}`}>
  <div className='flex gap-1.5 text-sm font-medium transition-all duration-300'>
  <Link className='hover:opacity-60 hover:underline decoration-green-300 decoration-2' to='/'>Home</Link>
        <Link className='hover:opacity-60 hover:underline decoration-green-300 decoration-2' to='/About'>About</Link>
        <Link className='hover:opacity-60 hover:underline decoration-green-300 decoration-2' to='/Services'>Services</Link>
        <Link className='hover:opacity-60 hover:underline decoration-green-300 decoration-2' to='/Contact'>Contact</Link>
        <Link className='hover:opacity-60 hover:underline decoration-green-300 decoration-2' to='/Blog'>Blog</Link>
        <Link className='hover:opacity-60 hover:underline decoration-green-300 decoration-2' to='/Gallery'>Gallery</Link>
        </div>

</div>
      </div>
    </div>
  )
}

export default Navbar
