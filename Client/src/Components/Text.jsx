import React from 'react'

function Text({title, body}) {
  return (
    <div className='h-72 md:h-56 lg:h-48 card-container hover:transform  bg-white  overflow-hidden shadow-lg rounded-xl flex justify-center content-center'>
      <div className='card-title my-8 '>
        <h3 className='font-extrabold text-center text-xl'>{title}
         </h3>
         <div className='card-body text-center  mt-6 m-2'>
            {body}
         </div>
      </div>
      

    </div>
  )
}

export default Text

// <div className='mt-20 justify-center items-center grid grid-cols-1 md:grid-cols-2 gap-8 '>
{/* <div className=' w-96 h-44 overflow-hidden shadow-lg rounded-xl bg-white '>
<h3 className='text-center text-gray-900 text-xl'>Mission</h3>
<div className='text-center text-gray-500'>To be committed to community development. To do good by passionately protecting the young and innocent,empathizing with the elderly and the underprivileged,aiding the poor and healing the sick .
</div>
</div> */}