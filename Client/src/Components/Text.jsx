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

