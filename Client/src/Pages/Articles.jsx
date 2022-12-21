import React from 'react'
import img1 from './images2/news1.jpeg';
import img2 from './images2/news2.jpeg';
import img3 from './images2/news3.jpeg';
import img4 from './images2/news4.jpeg';
import img5 from './images2/news5.jpeg';
import img6 from './images2/news6.jpeg';
import img7 from './images2/news7.jpeg';
import img8 from './images2/news8.jpeg';

function Articles() {
  return (
    <div>
    <div className='p-6 text-4xl text-gray-700 flex flex-col text-center justify-center items-center'>
   
    Leocare in News
    </div>

    <div className='flex flex-col items-center justify-center'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
        <img className='w-96 p-4' src={img7}></img>
        <img className='w-96 p-4' src={img8}></img>
        <img className='w-96 p-4' src={img2}></img>
        <img className='w-96 p-4' src={img6}></img>
        <img className='w-96 p-4' src={img1}></img>
        <img className='w-96 p-4' src={img4}></img>
        
        <img className='w-96 p-4' src={img3}></img>
        <img className='w-96 p-4' src={img5}></img>
        
    </div>
    </div>
      
    </div>
  )
}

export default Articles
