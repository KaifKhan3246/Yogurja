import React from 'react'
import Card from './Card'
import blogPosts from '../blogPosts'
const Blog = () => {
  return (
    <div className='flex flex-col'>
<div className='bg-black text-white flex flex-col flex-wrap justify-center items-center h-40 md:h-50 font-semibold font-serif'>
        <h1 className='md:text-4xl text-2xl'>BLOG</h1>
        <span className='text-sm md:text-lg'>Home/Blog</span>
      </div>
      <div className='mt-10 flex md:flex-row flex-wrap gap-5 '>{blogPosts.map((post)=>(
        <Card key={post.id}
              title={post.title}
              author={post.author}
              date={post.date}
              excerpt={post.excerpt}
        />
      ))}
      </div>
    </div>
  )
}

export default Blog