import React from 'react'

function Card({ link, title, imageUrl, body }) {

  return (

    <div className='card-container hover:transform w-72  overflow-hidden shadow-lg rounded-xl'>
      <div className='image-container w-full overflow-hidden h-56 mb-4'>
        <img className='' src={imageUrl} alt=''></img>
      </div>
      <div className='card-title flex gap-4 px-4 justify-center items-center'>
        <a href={`/${link}`} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-lg font-extrabold">{title}</a>

        <button type="button" className=" float-right text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
        <a href='https://pages.razorpay.com/leocarefoundation' target="_blank">DONATE</a> 
        </button>

      </div>
      <div className='card-body  m-4 text-gray-500'>{body}</div>

    </div>
  )
}

export default Card
