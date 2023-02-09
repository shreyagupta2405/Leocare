import React from 'react'
import Blogs from '../Components/Blogs';
import Blog from '../Components/Blog';
import img from '../Components/images/kid.png'
import { useState, useEffect } from 'react'
import { MdEmail } from 'react-icons/md'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import AnchorLink from "react-anchor-link-smooth-scroll";

import elderlyService from '../api/elderlycare.service'

function ElderlyCare() {

  const [eventData, setEventData] = useState([]);

  const getAllEventFromStore = async () => {
    try {
      const data = await elderlyService.getAllEvents()
      let arr = []
      data.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id })
      })
      setEventData(arr)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getAllEventFromStore()
  }, [])
  return (
    <div>
      <div className='p-6 text-4xl text-gray-700 flex flex-col justify-center items-center'>
        Elderly Care
      </div>
      <div >

        {eventData ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">{
          eventData?.map((data) => {
            return (
              <div className='justify-center items-center flex py-8'>
                <Blog
                  title={data?.heading}
                  imageUrl={data?.url}
                  body={data?.content}
                  date={data?.date}
                />
              </div>
            )
          })
        }</div> :
          <div><h4>No Events to Display</h4></div>
        }

      </div>
      <div className='flex justify-center items-center mt-8 gap-10'>
        <button id='info' type="button" className="mt-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold text-2xl rounded-lg px-5 py-2.5 text-center 
                w-40 ">
          <a href='https://pages.razorpay.com/leocarefoundation' target="_blank">DONATE</a>
        </button>
        <button type='button' className='mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg px-5 py-3 lg:px-4 lg:py-2.5 hover:bg-blue-700 text-xl lg:text-2xl '><AnchorLink href='#footer'>SCAN & PAY</AnchorLink></button>
      </div>

      <div className='my-24 shadow-xl grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
        <div className='grid place-items-center bg-white font-serif text-center text-gray-700'>
          <div className='text-4xl lg:text-5xl p-4'>Contact Information</div>
          <div className='text-2xl grid place-items-center'>
            <div className='p-4'><div className='flex flex-row items-center justify-center gap-3'><BsFillTelephoneOutboundFill />Mobile: </div> +91 9398695177 / 9550001512 </div>

            <div className='pt-4'><div className='flex flex-row items-center justify-center gap-2'><MdEmail /> Email: </div>support@leocare.org</div>
          </div>
          <div className='text-sm font-sans p-4'> © 2022 Leocare Foundation</div>
        </div>
        <div className='text-center'>
          <img src={img} className=' w-full'></img>
        </div>
      </div>

    </div>
  )
}

export default ElderlyCare;
//9398695177
//9550001512 Email: leocarefoundation@gmail.com