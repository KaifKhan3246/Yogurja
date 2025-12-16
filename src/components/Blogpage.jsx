import React from 'react'
import Card from './Card'
import blogPosts from '../blogPosts'
const Blogpage = () => {
  return (
    <div>
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

export default Blogpage
