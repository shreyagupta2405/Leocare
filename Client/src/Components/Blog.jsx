import React from 'react'

function Blog({title, imageUrl, body, date}) {
  return (
    <div className='card-container bg-gray-600 text-white hover:transform w-72 ml-24  overflow-hidden shadow-lg rounded-xl'>
      <div className='image-container overflow-hidden h-64'>
        <img className='h-64' src={imageUrl} alt=''></img>
      </div>
      <div className='card-title'>
        <h3 className='font-extrabold text-center'>{title}</h3>
        <div className='text-center font-light text-gray-400'>{date}</div>
      </div>
      <div className='card-body mt-6 m-4 text-center'>{body}</div>
    </div>
  )
}

export default Blog
