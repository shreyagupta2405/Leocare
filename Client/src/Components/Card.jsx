import React from 'react'

function Card({ title, imageUrl, body }) {
  return (
    <div className='card-container hover:transform w-72  overflow-hidden shadow-lg rounded-xl'>
      <div className='image-container overflow-hidden h-56 mb-4'>
        <img src={imageUrl} alt=''></img>
      </div>
      <div className='card-title'>
        <h3 className='font-extrabold ml-3'>{title} <button type="button" className=" float-right text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          DONATE
        </button></h3>

      </div>
      <div className='card-body mt-6 m-2'>{body}</div>

    </div>
  )
}

export default Card
