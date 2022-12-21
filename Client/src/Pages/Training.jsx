import React from 'react'
import Blog from '../Components/Blog'
import b from '../Components/images/b.png'

function Training() {
  return (
    <div>
    <div className='p-6 text-3xl text-primary flex flex-col justify-center items-center'>
    Skill Training Batches
    </div>
      
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
    imageUrl={b}
    body='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    date='April 03, 2022 - 4 min read'
  />
</div>
<div className='justify-center items-center flex'>
  <Blog
    title='DONATING'
    imageUrl={b}
    body='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    date='April 03, 2022 - 4 min read'
  />
</div>
      </div>
      </div>
  )
}

export default Training
