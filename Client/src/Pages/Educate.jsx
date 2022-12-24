import React from 'react'
import Blogs from '../Components/Blogs';
import img from '../Components/images/kid.png'

function Educate() {
  return (
    <div>
      <div className='p-6 text-4xl text-gray-700 flex flex-col justify-center items-center'>
        Educate a Child
      </div>

      <Blogs />

      <div className='mt-24 shadow-xl grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
        <div className='grid place-items-center bg-white font-serif text-center text-gray-700'>
          <div className='text-4xl lg:text-5xl p-4'>Contact Information</div>
          <div className='text-2xl grid place-items-center'>
            <div>Mobile: <br></br> +91 9398695177 / 9550001512 </div>
            <div><br />Email: <br />leocarefoundation@gmail.com</div>
          </div>
          <div className='text-sm font-sans'> © 2022 Leocare</div>
        </div>
        <div className='text-center'>
        <img src={img} className=' w-full'></img>
        </div>
      </div>


    </div>
  )
}

export default Educate;
//9398695177
//9550001512 Email: leocarefoundation@gmail.com