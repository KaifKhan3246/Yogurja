import React from 'react'
import Service1data from './components/Service1data'
import Servicecard from './components/Servicecard'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
const Service1 = () => {
  return (
   <div className='h-auto flex flex-col'>
         <div className='bg-zinc-950 h-40 md:h-50 flex flex-col flex-wrap justify-center items-center font-semibold'>
           <h1 className='font-serif md:text-4xl text-2xl text-white'>ALL SERVICES</h1>
   <span className='font-serif font-semibold text-white'><Link className='text-orange-500' to='/'>Home</Link>/Ayurveda</span>
         </div>
         <div className=' flex justify-center items-center font-semibold md:text-3xl text-xl font-serif mt-10'>
   <h1 className='uppercase'>ayurveda</h1>
         </div><div className='flex md:flex-row flex-wrap m-10 gap-12'>
           {Service1data.map((ser)=>(
             <Servicecard key={ser.id}
                       title={ser.title}
                       des={ser.description}
                       link={ser.Link}
             />
           ))}
           </div>
         <Footer/>
       </div>
  )
}

export default Service1
