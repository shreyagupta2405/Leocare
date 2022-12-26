import React from 'react'
import Donate from './Donate';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
// import { useEffect } from 'react';

function Header() {
  return (
    <div className='justify-between bg-purple-400 flex flex-col lg:flex-row gap-10  p-2 '>
      <div className='ml-4 text-white font-semibold lg:text-[1rem]  text-[1rem] p-2 grid sm:grid-cols-1 lg:grid-cols-2'>
        <div>Phone: +91 9398695177/ 9550001512</div>
        <div>Mail: @leocarefoundation.gmail.com</div>
      </div>
      {/* <Donate /> */}
      <div className='lg:mr-8 flex justify-center gap-8 lg:justify-end'>
        <a
          className="flex justify-center items-center text-white transition hover:scale-75"
          href="https://www.facebook.com/leocarefoundation"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook size={25} />
        </a>
        <a
          className="flex justify-center items-center text-white transition hover:scale-75"
          href="https://www.linkedin.com/in/udpl72/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={25} />
        </a>

        <a
          className="flex justify-center items-center text-white transition hover:scale-75"
          href="https://www.instagram.com/leocarefoundation/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram size={25} />
        </a>

        <a
          className="flex justify-center items-center text-white transition hover:scale-75"
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter size={25} />
        </a>
      </div>

    </div>
  )
}

export default Header
