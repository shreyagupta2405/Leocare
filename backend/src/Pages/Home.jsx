import React from 'react'

function Home() {
  return (
    <div className='grid grid-row-1 md:grid-row-2 lg:grid-rows-2 text-center p-8 text-xl'>
      <div className='text-black grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 '>
          <div className='hover:text-primary'>Educate</div>
          <div className='hover:text-primary'>Environment</div>
          <div className='hover:text-primary'>Skill Development</div>
          </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4'>
        <div className='hover:text-primary'>News Articles</div>
        <div className='hover:text-primary'>Team</div>
      </div>
    </div>
  )
}

export default Home