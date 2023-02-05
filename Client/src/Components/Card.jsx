import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

function Card({ link, title, imageUrl, body, target }) {

  return (

    <div className=' card-container hover:transform w-72  overflow-hidden shadow-lg rounded-xl'>
      <div className='image-container w-full overflow-hidden h-56 mb-4'>
        <img className='' src={imageUrl} alt=''></img>
      </div>
      <div className='card-title flex gap-4 px-4 justify-center items-center hover:scale-105 hover:text-primary'>
        <a href={link} target={target} className="flex text-center py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white  dark:hover:text-white md:dark:hover:bg-transparent text-lg font-extrabold hover:scale-105">{title}<BsFillArrowRightCircleFill className='mx-[0.1rem] mt-1 lg:mx-2' /></a>
{/* `/${link}` */}
      </div>
      <div className='card-body text-center m-4 text-gray-500'>{body}</div>

    </div>
  )
}

export default Card
