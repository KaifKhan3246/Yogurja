import React from 'react'
import Footer from './Footer'

const Privacy = () => {
  return (
    <div className='h-full'>
      <div className='bg-zinc-950 text-white flex flex-col flex-wrap justify-center items-center h-40 md:h-50 font-semibold font-serif'>
        <h1 className='md:text-6xl text-4xl'>Privacy Policy</h1>
        <span className='text-sm md:text-lg'>Home / Privacy Policy</span>
      </div>
      <div className='md:flex md:flex-row flex-col md:m-10 m-5 gap-8'>
        <div className='md:w-2/3 w-full'>
          <div className='flex flex-col gap-10'>
            <div>
              <h2 className='font-medium text-1xl mb-5 opacity-55'>Introduction</h2>
              <p className='opacity-50 text-sm'>Your privacy is important to us. This policy outlines how we collect, use, and protect your data.</p>
            </div>
            <div>
              <h2 className='font-medium text-1xl mb-5 opacity-55'>Data Collection</h2>
              <p className='opacity-50 text-sm'>We collect personal data, financial data, and usage data.</p>
            </div>
            <div>
              <h2 className='font-medium text-1xl mb-5 opacity-55'>Data Usage</h2>
              <p className='opacity-50 text-sm'>Collected data is used for order processing, marketing, and improving our services.</p>
            </div>
            <div>
              <h2 className='font-medium text-1xl mb-5 opacity-55'>Data Sharing</h2>
              <p className='opacity-50 text-sm'>We may share data with third-party services for order fulfillment and legal obligations.</p>
            </div>
            <div>
              <h2 className='font-medium text-1xl mb-5 opacity-55'>Data Protection</h2>
              <p className='opacity-50 text-sm'>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
            </div>
          </div>
        </div>
        <div className='md:w-1/3 w-full'>
          <div className='flex flex-col'>
            <h2 className='font-bold text-xl mb-5 uppercase'>RECENT POSTS</h2>
            <div className='flex flex-col gap-4'>
              <div className='border-b border-gray-300 pb-4'>
                <h3 className='font-bold text-sm mb-2'>Boosting Immunity the Ayurvedic Way: Daily Habits, Diet & Herbs You Can Start Today</h3>
                <p className='opacity-50 text-xs'>July 4, 2025 No Comments</p>
              </div>
              <div className='border-b border-gray-300 pb-4'>
                <h3 className='font-bold text-sm mb-2'>Ayurveda for Mental Health: Natural Remedies for Anxiety, Stress & Insomnia</h3>
                <p className='opacity-50 text-xs'>July 2, 2025 No Comments</p>
              </div>
              <div className='border-b border-gray-300 pb-4'>
                <h3 className='font-bold text-sm mb-2'>Ayurvedic Detox: Panchakarma and Seasonal Cleansing Rituals for Body & Mind</h3>
                <p className='opacity-50 text-xs'>June 29, 2025 No Comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Privacy
