import React from 'react'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'
import Footer from './Footer'
const About = () => {
  return (
    <div className='h-full'>
      <div className='bg-black text-white flex flex-col flex-wrap justify-center items-center h-40 md:h-50 font-semibold font-serif'>
        <h1 className='md:text-4xl text-2xl'>ABOUT US</h1>
        <span className='text-sm md:text-lg'>Home/About us</span>
      </div>
      <div className=' md:flex md:m-10 m-5'>
        <img className='h-auto rounded-full' src='https://tse2.mm.bing.net/th/id/OIP.3wk84DjvlA0Yf4XQzniaMwHaE7?pid=Api&h=220&P=0' alt='pic' />
        <div className='flex flex-col flex-wrap justify-center items-center'>
          <h1 className='font-serif text-orange-500 font-semibold text-medium md:text-3xl m-5'>THE YOGURJA WELLNESS & PANCHKARMA CENTER USES YOGA FOR ITS HOLISTIC BENEFITS</h1>
          <span className='flex flex-wrap justify-center m-5 opacity-85'>Beyond just poses, yoga at Yogurja Wellness & Panchkarma Center is a holistic practice that integrates the mind, body, and soul. We welcome the all-encompassing approach of yoga, which includes asanas, focused breathing, a healthy lifestyle, and a balanced diet. A fundamental component of our approach, meditation can bring about significant transformation when used in conjunction with these other components on a regular basis.</span>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='font-serif font-semibold md:text-2xl opacity-90'>AMONG OUR SERVICES ARE:</h1>
        <div className=' flex md:flex-row flex-col md:gap-10 font-medium text-[#569681] transition-all duration-300 px-2 py-2'>
          <button className='focus:border-2'>Back Pain Relief:</button>
          <button className='focus:border-2'>Weight Loss Programs:</button>
          <button className='focus:border-2'>Heart Health:</button>
          <button className='focus:border-2'>Joint Pain Therapy:</button>
          <button className='focus:border-2'>Control of Hypertension:</button>
          <button className='focus:border-2'>Chronic Pain Management:</button>
        </div>
      </div>
      <div className='w-full h-auto md:h-50 bg-[#569681] mt-8'>
        <div className='flex md:flex-row flex-col justify-around items-center'>
          <h1 className='md:mt-10 mt-3 text-white font-semibold text-3xl border-2 py-2 px-4 md:text-6xl rounded-lg opacity-90'><CountUp end={5000} enableScrollSpy scrollSpyDelay={300} /> <p className='text-lg md:text-3xl'>LIVES TOUCHED</p></h1>
          <h1 className='md:mt-10 mt-3 text-white font-semibold text-3xl border-2 py-2 px-4 md:text-6xl rounded-lg opacity-90'><CountUp end={25} enableScrollSpy scrollSpyDelay={300} /> <p className='text-lg md:text-3xl'>YEARS OF EXPERTISE</p></h1>
          <h1 className='md:mt-10 mt-3 text-white font-semibold text-3xl border-2 py-2 px-4 md:text-6xl rounded-lg opacity-90'><CountUp end={50} enableScrollSpy scrollSpyDelay={300} /> <p className='text-lg md:text-3xl'>WORKSHOPS CONDUCTED</p></h1>
        </div>
      </div>
      <div className='flex md:flex-row flex-col w-full h-auto mt-8 opacity-90'>
        <div className='flex flex-col justify-center items-center ml-5'>
          <h1 className='font-extrabold text-4xl mb-4'>Meet the Founder</h1>
          <span className='flex flex-wrap'>Shri Upen Malik embarked on his yoga journey at the tender age of 12, inspired by a passion for martial arts. Recognizing the essential synergy between mind, body, and soul, he pursued his dream of holistic healing. Armed with an Advanced Diploma in Yoga and Naturopathy from Delhi University, he expanded his expertise in chiropractic modalities, acupressure, nutrition, and therapeutic massage. This diverse knowledge culminated in the creation of Yogurja Wellness and Panchkarma Centre in Thane, Mumbai.</span>
          <span>
            <h1 className='font-bold mb-3'>Yoga for the Mind</h1>
            <p className='font-semibold'>Ms. Pinky Mistry</p> has conceptualized Yoga for the Mind as an extension of our holistic philosophy. This unique program rejuvenates and relaxes professionals, homemakers, and stressed individuals through innovative activities. Corporates use this facility for engaging learning experiences and brand promotion, while students and children enjoy creative and out-of-the-box thinking exercises.</span>
          <Link className='bg-orange-400 px-4 py-2 mt-2 text-white rounded-lg' to='/Contact'>Contact us</Link>
        </div>
        <div className='h-1/2 m-10'>
          <img className='h-full object-cover rounded-lg' src='https://www.yogurja.com/wp-content/uploads/2025/10/DSC_6690-Copy-2-2048x1365.jpg' />
        </div>
      </div>
      <div className='h-auto'>
        <div>
          <div className='flex items-center justify-center mb-5'>
            <h1 className='font-bold text-2xl font-serif'>CORPORATE WELLNESS ALLIES</h1>
          </div>
          <div className='flex md:flex-row flex-col justify-around'>
            <img className='h-25 w-25' src='http://1.bp.blogspot.com/-XtT1yDJWsUY/TgtpcfBSM5I/AAAAAAAAYw8/vyTSRRnqAHY/s1600/Maersk_logo11.JPG' />
            <img className='h-25 w-25' src='https://tse4.mm.bing.net/th/id/OIP.Luk6xEcixI7fYowaFaTUkQAAAA?pid=Api&h=220&P=0' />
            <img className='h-25 w-25' src='https://tse4.mm.bing.net/th/id/OIP.ZSW9amabL4k-lfcEhK81qQHaFj?pid=Api&h=220&P=0' />
            <img className='h-25 w-25' src='https://tse3.mm.bing.net/th/id/OIP.yWjF6fSlsXQDRkQmX6sVtQHaE8?pid=Api&h=220&P=0' />
            <img className='h-25 w-25' src='https://yt3.ggpht.com/-j0yfR0jbC4M/AAAAAAAAAAI/AAAAAAAAAAA/_mEUdWN5D8M/s900-c-k-no/photo.jpg' />
            <img className='h-25 w-25' src='https://tse2.mm.bing.net/th/id/OIP.a6PCha0mKPmrenwy923DIQHaDY?pid=Api&h=220&P=0' />
          </div>
        </div>
      </div>
      <div className='bg-[#569681] h-auto mt-8'>
        <div className='flex md:flex-row flex-col md:justify-around items-center'>
          <h1 className='font-extrabold md:text-4xl text-2xl mb-7 mt-3 md:mt-7 text-white'>BECOME A MEMBER TODAY!</h1>
          <Link className='font-bold md:text-lg mt-7 mb-7 text-[#569681] bg-white px-4 py-2 rounded-md' to='/Contact'>START YOUR YOGA CLASS FROM NOW</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
