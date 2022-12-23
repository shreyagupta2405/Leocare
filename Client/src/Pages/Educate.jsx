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

      <div className='shadow-xl my-44 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
        <div className='bg-white p-4 font-serif text-center text-gray-700'>
          <div className='text-5xl mt-16'>Contact Information</div>
          <div className='p-4 text-2xl grid place-items-center mt-16'>
            <div>Mobile: <br></br> +91 9398695177 / 9550001512 </div>
            <div><br />Email: <br />leocarefoundation@gmail.com</div>
          </div>
          <div className='text-sm mt-28 font-sans bottom-0 left-0'> © 2022 Leocare</div>
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