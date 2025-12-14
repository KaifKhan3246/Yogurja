import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='md:flex justify-around bg-green-300 h-screen'>
<div className='flex flex-col flex-wrap mt-10 md:mt-50 text-white'>
  <h1 className='font-serif font-semibold md:font-extrabold md:text-2xl flex flex-wrap'>WELCOME TO YOGURJA WELLNESS & PANCHKARMA CENTER</h1>
  <span className='font-sans font-medium md:font-semibold md:text-lg'>An SDG 3 initiative of EnviroCare Labs</span>
  <Link className='mt-12 bg-white text-green-300 font-semibold w-fit py-2 px-4' to='/Contact'>Contact</Link>
</div>
<div>
  <img className='rounded-[50%] md:h-80 md:mt-50 mt-10' src='https://tse1.mm.bing.net/th/id/OIP.AF1qvsuVemyeHN_LH4diugHaE7?pid=Api&h=220&P=0'/>
</div>
      </div>
    </div>
  )
}

export default Home