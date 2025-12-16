import React from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import heroImage from '../images/Screenshot 2025-12-13 132450.png'

const Home = () => {
  return (
    <div>
      <div className='md:flex justify-around items-center bg-[#4B8A70] lg:min-h-[85vh] md:py-14'>
        <div className='flex flex-col flex-wrap mt-10 md:mt-0 text-white max-w-xl'>
          <h1 className='font-serif font-semibold md:font-extrabold text-2xl md:text-3xl lg:text-4xl flex flex-wrap'>
            <TypeAnimation
              sequence={['WELCOME TO YOGURJA WELLNESS & PANCHKARMA CENTER', 1000]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={0}
            />
          </h1>
          <span className='mt-4 font-sans font-medium md:font-semibold text-sm md:text-lg'>
            An SDG 3 initiative of EnviroCare Labs
          </span>
          <Link
            className='mt-8 md:mt-10 bg-white text-green-300 font-semibold w-fit py-2 px-6 md:px-8'
            to='/Contact'
          >
            Contact
          </Link>
        </div>
        <div className='mt-10 md:mt-0 flex justify-center'>
          <img
            className='rounded-lg h-56 md:h-140 object-contain'
            src={heroImage}
            alt='Yogurja Wellness Center'
          />
        </div>
      </div>
    </div>
  )
}

export default Home