import { Link } from 'react-router-dom'
import React from 'react'
import Footer from './Footer'
import Servicecard from './Servicecard'
import Servicedata from './Servicedata'

const Services = () => {
  return (
    <div className='h-auto flex flex-col'>
      <div className='bg-zinc-950 h-40 md:h-50 flex flex-col flex-wrap justify-center items-center font-semibold'>
        <h1 className='font-serif md:text-4xl text-2xl text-white'>ALL SERVICES</h1>
<span className='font-serif font-semibold text-white'><Link className='text-orange-500' to='/'>Home</Link>/Services</span>
      </div>
      <div className=' flex justify-center items-center font-semibold md:text-5xl text-2xl font-serif mt-10'>
<h1>OUR SERVICES</h1>
      </div><div className='flex md:flex-row flex-wrap m-10 gap-12'>
        {Servicedata.map((service)=>(
          <Servicecard key={service.id}
                    title={service.title}
                    des={service.description}
                    link={service.Link}
          />
        ))}
        </div>
      <Footer/>
    </div>
  )
}

export default Services
