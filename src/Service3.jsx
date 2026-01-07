import React from 'react'
import Service3data from './components/Service3data'
import Servicecard from './components/Servicecard'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
const Service3 = () => {
  return (
   <div className='h-auto flex flex-col'>
         <div className='bg-zinc-950 h-40 md:h-50 flex flex-col flex-wrap justify-center items-center font-semibold'>
           <h1 className='font-serif md:text-4xl text-2xl text-white'>ALL SERVICES</h1>
   <span className='font-serif font-semibold text-white'><Link className='text-orange-500' to='/'>Home</Link>/Rehabilitation</span>
         </div>
         <div className=' flex justify-center items-center font-semibold md:text-3xl text-xl font-serif mt-10'>
   <h1 className='uppercase'>Rehabilitation</h1>
         </div><div className='flex md:flex-row flex-wrap m-10 gap-12'>
           {Service3data.map((seri)=>(
             <Servicecard key={seri.id}
                       title={seri.title}
                       des={seri.description}
                       link={seri.Link}
                       img={seri.img}
             />
           ))}
           </div>
         <Footer/>
       </div>
  )
}

export default Service3
