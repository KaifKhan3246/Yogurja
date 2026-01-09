import React from 'react'
import Footer from './Footer'

const Cancel = () => {
  return (
    <div className='h-full'>
      <div className='bg-zinc-950 text-white flex flex-col flex-wrap justify-center items-center md:h-65 font-semibold font-serif'>
        <h1 className='md:text-6xl text-4xl'>CANCELLATION / REFUND POLICY</h1>
        <span className='text-sm md:text-lg'>Home / Cancellation / Refund Policy</span>
      </div>
      <div className='ml-25 mt-15 mb-20'>
        <div className='flex flex-col'>
          <div>
            <h2 className='font-medium text-1xl mb-3 opacity-60'>REFUND/CANCELLATION POLICY</h2>
            <p className='opacity-50 text-sm'>We do not provide any cancellations or refunds.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cancel
