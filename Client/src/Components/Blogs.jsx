import React from 'react'
import Blog from './Blog'

function Blogs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      <div className='justify-center items-center flex'>
        <Blog
          title='Environment'
          imageUrl='https://picsum.photos/id/54/400/300'
          body='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
          date='April 03, 2022 - 4 min read'
        />
      </div>

      <div className='justify-center items-center flex'>
        <Blog
          title='Environment'
          imageUrl='https://picsum.photos/id/54/400/300'
          body='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
          date='April 03, 2022 - 4 min read'
        />
      </div>
      <div className='justify-center items-center flex'>
        <Blog
          title='Environment'
          imageUrl='https://picsum.photos/id/54/400/300'
          body='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
          date='April 03, 2022 - 4 min read'
        />
      </div>
      <div className='justify-center items-center flex'>
        <Blog
          title='Environment'
          imageUrl='https://picsum.photos/id/54/400/300'
          body='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
          date='April 03, 2022 - 4 min read'
        />
      </div>
    </div>
  )
}

export default Blogs
