import React from 'react'
import {Link} from "react-router-dom";
import Footer from './Footer';

function Home() {
  return (
    <div className='grid grid-row-1 md:grid-row-2 lg:grid-rows-2 text-center  '>
      <div className='text-black grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-4 text-xl'>
          <Link to='/educate' className='hover:text-primary h-24 flex justify-center items-center hover:scale-90 rounded-lg m-8 shadow-xl'>Educate</Link>
          <Link to='/environment' className='hover:text-primary h-24 flex justify-center items-center hover:scale-90 rounded-lg m-8 shadow-xl'>Environment</Link>
          </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-4 text-xl'>
        <Link to='/news' className='hover:text-primary h-24 flex justify-center items-center hover:scale-90 rounded-lg m-8 shadow-xl'>News Articles</Link>
        <Link to='/skills' className='hover:text-primary h-24 flex justify-center items-center hover:scale-90 rounded-lg m-8 shadow-xl'>Skill Development</Link> 
      </div>

      <div className='items-center justify-center grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-4 text-xl'>
        <Link to='docs' className='hover:text-primary h-24 flex justify-center items-center hover:scale-90 rounded-lg m-8 shadow-xl' >Financial Docs</Link>
      </div>
      
      <Footer />
    </div>
  )
}

export default Home