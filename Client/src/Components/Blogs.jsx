import React from 'react'
import Blog from './Blog'
import d1 from "./images/donate.png"
import t from "./images/t.jpg"
import b from "./images/b.png"


function Blogs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

      <div className='justify-center items-center flex'>
        <Blog
          title='BEAUTICIAN CLASSES'
          imageUrl={b}
          body='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
          date='April 03, 2022 - 4 min read'
        />
      </div>
      <div className='justify-center items-center flex'>
        <Blog
          title='TAILORING CLASSES'
          imageUrl={t}
          body='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
          date='April 03, 2022 - 4 min read'
        />
      </div>
      <div className='justify-center items-center flex'>
        <Blog
          title='DONATING'
          imageUrl={d1}
          body='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
          date='April 03, 2022 - 4 min read'
        />
      </div>
    </div>
  )
}

export default Blogs
