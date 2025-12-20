import React from 'react'
import Footer from './Footer'

const Terms = () => {
  return (
    <div className='h-full'>
      <div className='bg-zinc-950 text-white flex flex-col flex-wrap justify-center items-center h-40 md:h-50 font-semibold font-serif'>
        <h1 className='md:text-6xl text-4xl'>Terms and Conditions</h1>
        <span className='text-sm md:text-lg'>Home/Terms and Conditions</span>
      </div>
      <div className=' ml-25 mt-10 mb-15'>
        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='font-medium text-1xl mb-3 opacity-55'>Introduction</h2>
            <p className='opacity-50 text-sm'>Welcome to Yogurja Health and Fitness Center. These terms and conditions outline the rules and regulations for the use of our website and services.</p>
          </div>
          <div>
            <h2 className='font-medium text-1xl mb-3 opacity-55'>Acceptance of Terms</h2>
            <p className='opacity-50 text-sm'>By accessing this website and using our services, you accept these terms and conditions in full. If you do not agree with any part of these terms, you must not use our website or services.</p>
          </div>
          <div>
            <h2 className='font-medium text-1xl mb-3 opacity-55'>User Responsibilities</h2>
            <p className='opacity-50 text-sm'>You are expected to provide accurate information and comply with all applicable laws while using our website and services.</p>
          </div>
          <div>
            <h2 className='font-medium text-1xl mb-3 opacity-55'>Intellectual Property</h2>
            <p className='opacity-50 text-sm'>All content on this website, including text, graphics, logos, and images, is the property of Yogurja and is protected by intellectual property laws. You may not use, reproduce, or distribute any content from this website without our prior written permission.</p>
          </div>
          <div>
            <h2 className='font-medium text-1xl mb-3 opacity-55'>Product/Service Descriptions</h2>
            <p className='opacity-50 text-sm'>We strive to provide accurate descriptions of our products and services. However, we do not warrant that product or service descriptions are complete, reliable, current, or error-free.</p>
          </div>
          <div>
            <h2 className='font-medium text-1xl mb-3 opacity-55'>Payment Terms</h2>
            <p className='opacity-50 text-sm'>Payment for our services can be made through credit/debit cards, UPI, and net banking. Payment must be made at the time of purchase.</p>
          </div>
          <div>
            <h2 className='font-medium text-1xl mb-3 opacity-55'>Dispute Resolution</h2>
            <p className='opacity-50 text-sm'>Any disputes arising from the use of our website or services will be resolved through arbitration in accordance with the laws of India.</p>
          </div>
          <div>
            <h2 className='font-medium text-1xl mb-3 opacity-55'>Limitation of Liability</h2>
            <p className='opacity-50 text-sm'>Yogurja shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.</p>
          </div>
          <div>
            <h2 className='font-medium text-1xl mb-3 opacity-55'>Amendments</h2>
            <p className='opacity-50 text-sm'>We reserve the right to amend these terms and conditions at any time. Any changes will be notified to you via email or through a notice on our website.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Terms
