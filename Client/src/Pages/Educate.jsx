import React from 'react'
import Blogs from '../Components/Blogs';

function Educate() {
  return (
    <div>
     <div className='p-6 text-3xl text-primary flex flex-col justify-center items-center'>
    Educate a Child
    </div>
      
      <Blogs />
      

      <div className='mt-40 place-items-center flex items-center justify-center'>
      <div className='bg-purple-400 p-8 text-white w-2/4 text-center'>
      <div className='text-3xl p-4 m-2'>Contact Information</div>
      
      <div className='p-4'>
      <div className='text-lg text-black bg-white w-auto p-2 rounded-lg '>Mobile:<br /> 9398695177 <br />   9550001512 <br /> </div>
      <div className='bg-white m-4 p-3 rounded-lg w-auto 
      flex items-center justify-center text-black text-lg'>Email: leocarefoundation@gmail.com</div>
      </div>
      
      <div>© Leocare 2022</div>
       </div>


      </div>

      
    </div>
  )
}

export default Educate;
//9398695177
//9550001512