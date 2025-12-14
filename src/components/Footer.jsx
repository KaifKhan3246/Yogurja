import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <div className='bg-zinc-950 h-auto w-full mt-8'>
      <div className='flex md:flex-row flex-col justify-around'>
        <div className='text-white flex flex-col mt-7'>
          <h1 className='mb-3 font-bold text-3xl opacity-90'>YogUrja Wellness</h1>
          <span className='mb-5 opacity-90'>"At Yogurja Wellness & Panchkarma Center"</span>
          <h1 className='mb-3 opacity-90'>Follow Us</h1>
          <div className='flex justify-between mb-5 opacity-90'>
            <button><Facebook /></button>
            <button><Instagram /></button>
            <button><Linkedin /></button>
            <button><Twitter /></button>
            <button><Youtube /></button>
          </div>
        </div>
        <div className='text-white mt-7'>
          <h1 className='font-bold text-2xl opacity-90'>Quick Links</h1>
          <div className='flex flex-col gap-2 mt-2 opacity-90'>
            <Link className='hover:opacity-70' to='/About'>About</Link>
            <Link className='hover:opacity-70' to='/Blog'>Blog</Link>
            <Link className='hover:opacity-70' to='/Services'>Services</Link>
            <Link className='hover:opacity-70' to='/Contact'>Contact us</Link>
          </div>
        </div>
        <div className='text-white mt-7'>
          <h1 className='font-bold text-2xl opacity-90'>Policy Links</h1>
          <div className='flex flex-col opacity-90 gap-2 mt-2'>
            <Link to='/Privacy'>Privacy Policy</Link>
            <Link to='/Cancel'>Refund Policy</Link>
            <Link to='/Terms'>Terms and Conditions</Link>
          </div>
        </div>
        <div className='text-white mt-7'>
          <h1 className='font-bold text-2xl opacity-90'>Contact</h1>
          <div className='flex flex-col gap-2 mt-2 opacity-90'>
            <span className='flex flex-wrap'>Address - Yogurja Wellness Center,Thane-Mumbai,India</span>
            <span>+91-9870113471</span>
            <span>yogurjawellness@gmail.com</span>
          </div>
        </div>
      </div>
      <div className='w-full h-[1px] bg-gray-700'></div>
      <div className='mt-7 flex justify-around'>
        <h1 className='text-white opacity-90'>Yogurja © 2025 All rights reserved. Designed By Social Wits.</h1>
        <div className='flex md:flex-row flex-col mb-5 gap-3 opacity-90'>
          <img className='h-10 w-10' src='https://www.freepnglogos.com/uploads/visa-inc-png-18.png' />
          <img className='h-10 w-10' src='https://tse3.mm.bing.net/th/id/OIP.2GBsE98iH4hZsEB-8DZqNQHaHa?pid=Api&h=220&P=0' />
          <img className='h-10 w-10' src='https://tse1.mm.bing.net/th/id/OIP.iPcVDe87mw9ipTIkRCb8FAHaDQ?pid=Api&h=220&P=0' />
          <img className='h-10 w-10' src='https://tse3.mm.bing.net/th/id/OIP.Ci0j7mR8W_tCJDWGyrymrgHaEK?pid=Api&h=220&P=0' />
          <img className='h-10 w-10' src='https://tse1.mm.bing.net/th/id/OIP.4Czaum8sTdcx4p5gytXDMQHaEK?pid=Api&h=220&P=0' />
          <img className='h-10 w-10' src='https://storage.googleapis.com/gweb-uniblog-publish-prod/images/GooglePay_Lockup.max-1000x1000.png' />
        </div>
      </div>

    </div>
  )
}

export default Footer
