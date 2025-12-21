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
   <a href='https://www.facebook.com/yogurja/' target='_blank'><Facebook className='text-white'/></a>
    <a href='https://www.youtube.com/@yogurja_wellness_center' target='_blank'><Youtube className='text-white'/></a>
    <a href='https://www.instagram.com/yogurjawellness/' target='_blank'><Instagram className='text-white'/></a>
    <a href='https://x.com/Yogurjawellness' target='_blank'><Twitter className='text-white'/></a>
    <a href='in.linkedin.com/company/yogurja-health-wellness' target='_blank'><Linkedin className='text-white'/></a>

</div>
      </div>
    </div>
  )
}

export default Header
