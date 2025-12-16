import React from 'react'
import { CircleUserRound, Share2, MessageCircle } from 'lucide-react'

const Card = ({ title, author, date, excerpt }) => {
  return (
    <div className='w-full md:w-[32%]'>
      <div className='shadow-lg rounded-md shadow-zinc-400 h-full m-3 bg-white'>
        
        <div className='flex justify-between opacity-70'>
          <div className='flex gap-2 m-3 items-center'>
            <CircleUserRound />
            <span>{author}</span>
          </div>

          <div className='flex gap-2 m-3'>
            <Share2 />
            <MessageCircle />
          </div>
        </div>

        <div className='m-3'>
          <span className='font-medium text-sm opacity-50'>
            {author} / {date}
          </span>
        </div>

        <div className='m-3'>
          <h1 className='font-semibold text-lg mb-2'>{title}</h1>
          <p className='font-medium text-sm opacity-65 mb-4'>{excerpt}</p>

          <span className='text-sm font-bold text-[#569681] cursor-pointer'>
            CONTINUE READING
          </span>
        </div>

      </div>
    </div>
  )
}

export default Card
