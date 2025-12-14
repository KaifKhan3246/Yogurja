import React from 'react'
import { Facebook,Youtube,Instagram,Twitter,Linkedin} from "lucide-react";
const Header = () => {
  return (
    <div>
      <div className=' hidden md:flex justify-between bg-orange-500 p-1 md:p-3 opacity-80'>
<h1 className='text-white font-semibold font-serif'>WELCOME TO YOGURJA</h1>
<div className='flex gap-0.5 md:gap-1.5'>
<p className='text-white font-medium'>+91-9870113471</p> 
<span className='text-white font-medium'>yogurjawellness@gmail.com</span>
</div>
<div className='flex gap-0.5 md:gap-1.5'>
    <Facebook className='text-white'/>
    <Youtube className='text-white'/>
    <Instagram className='text-white'/>
    <Twitter className='text-white'/>
    <Linkedin className='text-white'/>

</div>
      </div>
    </div>
  )
}

export default Header
